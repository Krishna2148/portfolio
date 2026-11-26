"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2, Loader2, Mail, MessageSquare, Send, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PROFILE } from "@/lib/portfolio-data"

interface ToastState {
  title: string
  description: string
  variant: "success" | "destructive"
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [toast, setToast] = useState<ToastState | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const showToast = (nextToast: ToastState) => {
    setToast(nextToast)
    setTimeout(() => {
      setToast(null)
    }, 5000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 600))
      const mailSubject = encodeURIComponent(
        formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
      )
      const mailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )
      window.location.href = `mailto:${PROFILE.email}?subject=${mailSubject}&body=${mailBody}`

      showToast({
        title: "Opening your email client",
        description: `Your message to ${PROFILE.email} is ready to send.`,
        variant: "success",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      showToast({
        title: "Could not open email client",
        description: `Please reach out directly at ${PROFILE.email}.`,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold">Send a Message</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Have a frontend role, product idea, or collaboration in mind? Drop a note below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-xs font-medium">
              Your Name
            </Label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="name"
                name="name"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                className="h-11 rounded-xl pl-9"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs font-medium">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={handleChange}
                className="h-11 rounded-xl pl-9"
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="subject" className="text-xs font-medium">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Software Engineering Role / Project Inquiry"
            value={formData.subject}
            onChange={handleChange}
            className="h-11 rounded-xl"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-xs font-medium">
            Message
          </Label>
          <div className="relative">
            <MessageSquare className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your team, project scope, or timeline..."
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[130px] resize-none rounded-xl pl-9 pt-3"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Preparing...
            </>
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      {toast && (
        <div
          role="status"
          className={`fixed bottom-5 right-5 z-50 flex max-w-sm items-start gap-3 rounded-2xl border p-4 shadow-xl backdrop-blur-md ${
            toast.variant === "destructive"
              ? "border-rose-500/30 bg-rose-950/90 text-rose-100"
              : "border-emerald-500/30 bg-slate-900/95 text-slate-100"
          }`}
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
          <div className="flex-1 text-sm">
            <p className="font-semibold">{toast.title}</p>
            <p className="mt-0.5 text-xs opacity-85">{toast.description}</p>
          </div>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="text-slate-400 hover:text-white"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
