import { useMemo } from "react"

import { LiveLogsCard } from "@/components/dashboard/live-logs-card"
import { ProjectPanel } from "@/components/dashboard/panel/project-panel"
import { ProjectHeader } from "@/components/dashboard/project-header"
import { RecentActivityCard } from "@/components/dashboard/recent-activity-card"
import { ServicesCard } from "@/components/dashboard/services/services-card"
import type { Activity, LogEntry, Project, ProjectStats, Service } from "@/types/railway"

interface DashboardPageProps {
  project: Project
  services: Service[]
  logs: LogEntry[]
  activities: Activity[]
}

export function DashboardPage({ project, services, logs, activities }: DashboardPageProps) {
  const stats = useMemo<ProjectStats>(() => {
    const running = services.filter((s) => s.status === "running").length
    return { total: services.length, running, stopped: services.length - running }
  }, [services])

  return (
    <div className="grid gap-4 p-5 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="flex min-w-0 flex-col gap-4">
        <ProjectHeader project={project} stats={stats} />
        <ServicesCard services={services} />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <LiveLogsCard logs={logs} />
          <RecentActivityCard activities={activities} />
        </div>
      </div>

      <ProjectPanel project={project} stats={stats} />
    </div>
  )
}
