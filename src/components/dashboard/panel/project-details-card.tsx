import { Bug } from "lucide-react"
import type { ReactNode } from "react"

import { capitalize, formatDate, formatRelativeLong } from "@/lib/format"
import type { Project, ProjectStats } from "@/types/railway"
import { PanelCard } from "./panel-card"

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="flex items-center gap-2">{children}</dd>
    </div>
  )
}

interface ProjectDetailsCardProps {
  project: Project
  stats: ProjectStats
}

export function ProjectDetailsCard({ project, stats }: ProjectDetailsCardProps) {
  return (
    <PanelCard icon={Bug} title="Project Details">
      <dl>
        <DetailRow label="Name">{project.name}</DetailRow>
        <DetailRow label="Environment">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          {capitalize(project.environment)}
        </DetailRow>
        <DetailRow label="Services">{stats.total}</DetailRow>
        <DetailRow label="Running">{stats.running}</DetailRow>
        <DetailRow label="Stopped">{stats.stopped}</DetailRow>
        <DetailRow label="Created">{formatDate(project.createdAt)}</DetailRow>
        <DetailRow label="Updated">{formatRelativeLong(project.updatedAt)}</DetailRow>
      </dl>
    </PanelCard>
  )
}
