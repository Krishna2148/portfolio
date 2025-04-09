import { ContactForm } from '@/components/contact-form'
import { Mail, Github, Linkedin } from 'lucide-react';
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get In Touch</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a project in mind or want to discuss opportunities? Send me a message!
          </p>
        </div>
        <div className="w-full max-w-md mt-8">
          <ContactForm />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-primary" />
            <a href="mailto:krishnapdbhatt@gmail.com" className="hover:underline">
              krishnapdbhatt@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Github className="h-5 w-5 mr-2 text-primary" />
            <a
              href="https://github.com/Krishna2148"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://github.com/Krishna2148
            </a>
          </div>
          <div className="flex items-center">
            <Linkedin className="h-5 w-5 mr-2 text-primary" />
            <a
              href="https://www.linkedin.com/in/krishnaprashadbhatt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
             https://www.linkedin.com/in/krishnaprashadbhatt/
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}

export default Contact