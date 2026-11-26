"use client"

import { useEffect, useState } from "react"
import { Activity, Clock } from "lucide-react"
import { CAREER_START_ISO } from "@/lib/portfolio-data"

interface DurationParts {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

function computeElapsed(startIso: string, endDate: Date): DurationParts {
  const start = new Date(startIso)
  if (endDate <= start) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  let years = endDate.getFullYear() - start.getFullYear()
  let months = endDate.getMonth() - start.getMonth()
  let days = endDate.getDate() - start.getDate()
  let hours = endDate.getHours() - start.getHours()
  let minutes = endDate.getMinutes() - start.getMinutes()
  let seconds = endDate.getSeconds() - start.getSeconds()

  if (seconds < 0) {
    seconds += 60
    minutes -= 1
  }
  if (minutes < 0) {
    minutes += 60
    hours -= 1
  }
  if (hours < 0) {
    hours += 24
    days -= 1
  }
  if (days < 0) {
    const prevMonthLastDay = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate()
    days += prevMonthLastDay
    months -= 1
  }
  if (months < 0) {
    months += 12
    years -= 1
  }

  return { years, months, days, hours, minutes, seconds }
}

function formatCompactDuration(startIso: string, endIso?: string, now?: Date): string {
  const target = endIso ? new Date(endIso) : now ?? new Date(startIso)
  const { years, months, days } = computeElapsed(startIso, target)
  const adjustedMonths = days >= 20 ? months + 1 : months
  const totalYears = years + Math.floor(adjustedMonths / 12)
  const remMonths = adjustedMonths % 12

  const parts: string[] = []
  if (totalYears > 0) parts.push(`${totalYears} yr${totalYears > 1 ? "s" : ""}`)
  if (remMonths > 0) parts.push(`${remMonths} mo${remMonths > 1 ? "s" : ""}`)
  if (parts.length === 0) parts.push(`${Math.max(1, days)} day${days === 1 ? "" : "s"}`)
  return parts.join(" ")
}

export function LiveExperienceCounter({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!now) {
    return compact ? (
      <span className="font-mono text-xs text-emerald-500">Live · 2+ yrs</span>
    ) : (
      <div className="rounded-3xl border border-cyan-500/30 bg-card/80 p-5">
        <p className="font-mono text-xs text-cyan-500">REAL-TIME EXPERIENCE</p>
        <p className="mt-2 font-mono text-2xl font-bold">2+ Years Active</p>
      </div>
    )
  }

  const d = computeElapsed(CAREER_START_ISO, now)
  const pad = (n: number) => String(n).padStart(2, "0")

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-500">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        {d.years}y {d.months}m {d.days}d · {pad(d.hours)}:{pad(d.minutes)}:{pad(d.seconds)}
      </span>
    )
  }

  const units = [
    { label: "Years", value: d.years },
    { label: "Months", value: d.months },
    { label: "Days", value: d.days },
    { label: "Hrs", value: pad(d.hours) },
    { label: "Min", value: pad(d.minutes) },
    { label: "Sec", value: pad(d.seconds) },
  ]

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-card via-card to-cyan-500/10 p-5 shadow-lg shadow-cyan-500/5 sm:p-6">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-emerald-500">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <Activity className="h-3.5 w-3.5" />
            REAL-TIME ENGINEERING TENURE (SINCE OCT 2023)
          </div>
          <p className="text-sm text-muted-foreground">
            Continuously shipping frontend software from Evolve IT Hub &amp; Tech Nirvana to leading frontend at Qpixel Pvt Ltd.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {units.map((u) => (
            <div
              key={u.label}
              className="flex min-w-[64px] flex-col items-center justify-center rounded-2xl border border-border/70 bg-background/80 px-3 py-2.5 text-center backdrop-blur"
            >
              <span className="font-mono text-lg font-extrabold tracking-tight text-cyan-500 sm:text-xl">
                {u.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function RoleDurationBadge({
  startDate,
  endDate,
  isCurrent,
}: {
  startDate: string
  endDate?: string
  isCurrent?: boolean
}) {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    if (!isCurrent) return
    setNow(new Date())
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [isCurrent])

  const label = isCurrent
    ? now
      ? `${formatCompactDuration(startDate, undefined, now)} · Live`
      : "Ongoing · Live"
    : formatCompactDuration(startDate, endDate)

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium ${
        isCurrent
          ? "border border-emerald-500/35 bg-emerald-500/10 text-emerald-500"
          : "border border-border bg-muted/70 text-muted-foreground"
      }`}
    >
      {isCurrent ? (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
      ) : (
        <Clock className="h-3 w-3" />
      )}
      {label}
    </span>
  )
}
