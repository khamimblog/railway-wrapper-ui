import { LayoutPanelTop } from "lucide-react"

import { Card } from "@/components/ui/card"
import { formatRelativeLong } from "@/lib/format"
import type { Project, ProjectStats } from "@/types/railway"
import { EnvironmentBadge } from "./environment-badge"
import { StatCard } from "./stat-card"

interface ProjectHeaderProps {
  project: Project
  stats: ProjectStats
}

export function ProjectHeader({ project, stats }: ProjectHeaderProps) {
  return (
    <Card className="flex-row flex-wrap items-center gap-6 p-5">
      <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-500/15">
        <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
          <LayoutPanelTop className="size-5" />
        </div>
      </div>

      <div className="min-w-0 flex-1 space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{project.name}</h1>
        <EnvironmentBadge environment={project.environment} />
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          Updated {formatRelativeLong(project.updatedAt)}
          <span className="size-1 rounded-full bg-muted-foreground/60" />
          {stats.total} services
        </p>
      </div>

      <div className="flex gap-3">
        <StatCard label="Services" value={stats.total} indicator="services" />
        <StatCard label="Running" value={stats.running} indicator="running" />
        <StatCard label="Stopped" value={stats.stopped} indicator="stopped" />
      </div>
    </Card>
  )
}
