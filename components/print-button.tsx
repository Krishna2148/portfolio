"use client"

import { Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton() {
  return (
    <Button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-indigo-500"
    >
      <Printer className="mr-2 h-4 w-4" />
      Print / Save PDF
      <Download className="ml-2 h-3.5 w-3.5 opacity-80" />
    </Button>
  )
}
