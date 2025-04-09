"use client"

import { useState, useEffect } from "react"
import { Send, User, Mail, MessageSquare, Loader2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Simple classnames utility function
const cn = (...classes) => classes.filter(Boolean).join(" ")

// Custom toast component
function Toast({ title, description, variant, onClose }) {
  return (
    <div className={`fixed bottom-4 right-4 max-w-sm w-full rounded-lg shadow-lg p-4 flex items-start space-x-3 transition-all duration-300 transform translate-y-0 ${
      variant === "destructive" ? "bg-red-100 text-red-900 border border-red-200" : "bg-green-100 text-green-900 border border-green-200"
    }`}>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        {description && <p className="text-sm mt-1 opacity-90">{description}</p>}
      </div>
      <button onClick={onClose} className="flex-shrink-0">
        <X size={18} />
      </button>
    </div>
  )
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focused, setFocused] = useState(null)
  const [toast, setToast] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (name) => {
    setFocused(name)
  }

  const handleBlur = () => {
    setFocused(null)
  }

  const showToast = ({ title, description, variant }) => {
    setToast({ title, description, variant })
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setToast(null)
    }, 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      showToast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      showToast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto ">
      <div className="bg-muted/50 rounded-lg shadow-lg p-6 border border-slate-200 dark:border-slate-700">
        <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <div className={cn(
              "absolute left-3 top-3 text-slate-400 transition-all duration-200",
              focused === "name" && "text-blue-500"
            )}>
              <User size={18} />
            </div>
            <Input 
              id="name" 
              name="name" 
              placeholder="Your name" 
              value={formData.name} 
              onChange={handleChange}
              onFocus={() => handleFocus("name")}
              onBlur={handleBlur}
              className="pl-10 h-12 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/50 focus:border-blue-500" 
              required 
            />
          </div>
          
          <div className="relative">
            <div className={cn(
              "absolute left-3 top-3 text-slate-400 transition-all duration-200",
              focused === "email" && "text-blue-500"
            )}>
              <Mail size={18} />
            </div>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              className="pl-10 h-12 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/50 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <div className={cn(
              "absolute left-3 top-3 text-slate-400 transition-all duration-200",
              focused === "message" && "text-blue-500"
            )}>
              <MessageSquare size={18} />
            </div>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus("message")}
              onBlur={handleBlur}
              required
              className="pl-10 min-h-[150px] border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/50 focus:border-blue-500 resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-md" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
      
      {toast && (
        <Toast 
          title={toast.title}
          description={toast.description}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}