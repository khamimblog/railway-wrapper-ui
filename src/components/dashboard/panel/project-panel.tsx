import type { Project, ProjectStats } from "@/types/railway"
import { HelpCard } from "./help-card"
import { ProjectDetailsCard } from "./project-details-card"
import { ProjectOverviewCard } from "./project-overview-card"
import { QuickActionsCard, type QuickActionHandlers } from "./quick-actions-card"

interface ProjectPanelProps extends QuickActionHandlers {
  project: Project
  stats: ProjectStats
}

export function ProjectPanel({ project, stats, ...quickActions }: ProjectPanelProps) {
  return (
    <aside className="flex flex-col gap-3">
      <ProjectOverviewCard />
      <QuickActionsCard {...quickActions} />
      <ProjectDetailsCard project={project} stats={stats} />
      <HelpCard />
    </aside>
  )
}
