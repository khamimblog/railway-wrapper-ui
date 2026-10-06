import { ArrowRight, Check, Rocket, RefreshCw, Square, Play, X, type LucideIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import { formatRelativeShort } from "@/lib/format"
import { cn } from "@/lib/utils"
import type { Activity, ActivityType } from "@/types/railway"

const activityConfig: Record<ActivityType, { title: string; icon: LucideIcon; className: string }> = {
  deployment_completed: {
    title: "Deployment completed",
    icon: Check,
    className: "bg-emerald-500 text-white",
  },
  deployment_started: {
    title: "Deployment started",
    icon: Rocket,
    className: "bg-violet-600 text-white",
  },
  deployment_failed: {
    title: "Deployment failed",
    icon: X,
    className: "bg-red-500 text-white",
  },
  service_restarted: {
    title: "Service restarted",
    icon: RefreshCw,
    className: "bg-blue-600 text-white",
  },
  service_stopped: {
    title: "Service stopped",
    icon: Square,
    className: "bg-slate-400 text-white [&_svg]:fill-current",
  },
  service_started: {
    title: "Service started",
    icon: Play,
    className: "bg-emerald-500 text-white [&_svg]:fill-current",
  },
}

function ActivityItem({ activity }: { activity: Activity }) {
  const { title, icon: Icon, className } = activityConfig[activity.type]
  return (
    <li className="flex gap-4">
      <div className={cn("mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full", className)}>
        <Icon className="size-3.5" strokeWidth={3} />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {activity.serviceName} · {formatRelativeShort(activity.createdAt)}
        </p>
      </div>
    </li>
  )
}

export function RecentActivityCard({ activities }: { activities: Activity[] }) {
  return (
    <Card className="gap-5 p-4">
      <header className="flex items-center gap-3">
        <RefreshCw className="size-4 text-muted-foreground" />
        <h2 className="font-semibold">Recent Activity</h2>
        <a
          href="#"
          className="ml-auto flex items-center gap-1 text-xs font-medium text-indigo-600 hover:underline dark:text-indigo-400"
        >
          View all <ArrowRight className="size-3.5" />
        </a>
      </header>
      <ul className="space-y-5 pl-1">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </ul>
    </Card>
  )
}
