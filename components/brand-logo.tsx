import Image from "next/image"
import { PROFILE } from "@/lib/portfolio-data"

interface BrandLogoProps {
  variant?: "compact" | "full"
  showSubtext?: boolean
  lightText?: boolean
  className?: string
}

export function BrandLogo({
  variant = "compact",
  showSubtext = false,
  lightText = false,
  className = "",
}: BrandLogoProps) {
  const boxSize = variant === "full" ? "h-12 w-12" : "h-10 w-10"

  return (
    <span className={`group/logo inline-flex items-center gap-3 select-none ${className}`}>
      <span
        className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/95 p-1 shadow-sm ring-1 ring-slate-200/80 transition-transform duration-300 group-hover/logo:scale-105 dark:ring-white/20 ${boxSize}`}
      >
        <Image
          src="/krishna-prashad-bhatt-logo.png"
          alt={`${PROFILE.name} Logo`}
          width={variant === "full" ? 48 : 40}
          height={variant === "full" ? 48 : 40}
          className="h-full w-full object-contain"
          priority
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`text-[15px] font-extrabold tracking-tight sm:text-base ${
            lightText ? "text-white" : "text-foreground"
          }`}
        >
          Krishna{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Bhatt
          </span>
        </span>
        {showSubtext && (
          <span
            className={`mt-1 inline-flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] ${
              lightText ? "text-slate-300" : "text-muted-foreground"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            Software Engineer
          </span>
        )}
      </span>
    </span>
  )
}
