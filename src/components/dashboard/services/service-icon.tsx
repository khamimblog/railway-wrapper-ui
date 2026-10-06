import { Clock, Cog, Globe, Server, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import type { ServiceKind } from "@/types/railway"

const config: Record<ServiceKind, { icon: LucideIcon; className: string }> = {
  web: {
    icon: Globe,
    className: "bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  },
  server: {
    icon: Server,
    className: "bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
  },
  worker: {
    icon: Cog,
    className: "bg-orange-100 text-orange-500 dark:bg-orange-500/15 dark:text-orange-400",
  },
  cron: {
    icon: Clock,
    className: "bg-pink-100 text-pink-600 dark:bg-pink-500/15 dark:text-pink-400",
  },
}

export function ServiceIcon({ kind }: { kind: ServiceKind }) {
  const { icon: Icon, className } = config[kind]
  return (
    <div className={cn("flex size-14 shrink-0 items-center justify-center rounded-xl", className)}>
      <Icon className="size-7" strokeWidth={2.25} />
    </div>
  )
}
