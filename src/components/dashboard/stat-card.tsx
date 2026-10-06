import { Boxes } from "lucide-react"

import { cn } from "@/lib/utils"

type Indicator = "services" | "running" | "stopped"

interface StatCardProps {
  label: string
  value: number
  indicator: Indicator
}

function IndicatorIcon({ indicator }: { indicator: Indicator }) {
  if (indicator === "services") {
    return <Boxes className="size-4 text-indigo-600 dark:text-indigo-400" />
  }
  return (
    <span
      className={cn(
        "size-2.5 rounded-full",
        indicator === "running" ? "bg-emerald-500" : "bg-slate-400"
      )}
    />
  )
}

export function StatCard({ label, value, indicator }: StatCardProps) {
  return (
    <div className="flex w-28 items-start gap-3 rounded-xl border bg-card p-4 shadow-xs">
      <div className="flex size-6 items-center justify-center pt-5">
        <IndicatorIcon indicator={indicator} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-2xl font-semibold">{value}</p>
      </div>
    </div>
  )
}
