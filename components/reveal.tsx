"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "scale"
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform = {
    up: "translate-y-7 opacity-0",
    left: "-translate-x-7 opacity-0",
    right: "translate-x-7 opacity-0",
    scale: "scale-95 opacity-0",
  }[direction]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hiddenTransform
      } ${className}`}
    >
      {children}
    </div>
  )
}
