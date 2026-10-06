import { Activity, Moon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { capitalize, formatDuration } from "@/lib/format"
import { cn } from "@/lib/utils"
import type { Service, ServiceStatus } from "@/types/railway"

const statusStyles: Record<ServiceStatus, { badge: string; dot: string }> = {
  running: {
    badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  stopped: {
    badge: "bg-slate-100 text-slate-700 dark:bg-slate-500/15 dark:text-slate-300",
    dot: "bg-slate-400",
  },
  deploying: {
    badge: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
    dot: "bg-indigo-500 animate-pulse",
  },
  crashed: {
    badge: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
    dot: "bg-red-500",
  },
}

export function ServiceStatusBadge({ status }: { status: ServiceStatus }) {
  const style = statusStyles[status]
  return (
    <Badge className={cn("gap-1.5 px-2.5 py-1", style.badge)}>
      <span className={cn("size-1.5 rounded-full", style.dot)} />
      {capitalize(status)}
    </Badge>
  )
}

export function ServiceStatusInfo({ service }: { service: Service }) {
  const isUp = service.status === "running" || service.status === "deploying"
  const HealthIcon = service.health === "idle" ? Moon : Activity

  return (
    <div className="flex flex-col items-start gap-1.5 text-sm text-muted-foreground">
      <ServiceStatusBadge status={service.status} />
      <span>
        {formatDuration(service.statusChangedAt)} {isUp ? "uptime" : "downtime"}
      </span>
      <span className="flex items-center gap-1.5">
        <HealthIcon
          className={cn("size-3.5", service.health === "healthy" && "text-emerald-600")}
        />
        {capitalize(service.health)}
      </span>
    </div>
  )
}
