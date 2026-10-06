import { ChevronRight, ScanEye } from "lucide-react"

import { PanelCard } from "./panel-card"

function MountainIllustration() {
  return (
    <svg
      viewBox="0 0 280 60"
      preserveAspectRatio="none"
      className="h-15 w-full rounded-lg bg-gradient-to-b from-indigo-50 to-indigo-100/70 dark:from-indigo-500/10 dark:to-indigo-500/20"
      aria-hidden
    >
      <circle cx="110" cy="18" r="5" className="fill-indigo-200 dark:fill-indigo-400/30" />
      <path d="M0 60 L60 30 L110 50 L170 18 L220 42 L280 25 L280 60 Z" className="fill-indigo-200/70 dark:fill-indigo-400/20" />
      <path d="M120 60 L170 18 L200 60 Z" className="fill-indigo-300/70 dark:fill-indigo-400/30" />
      <path d="M0 60 L40 45 L90 55 L150 40 L210 55 L280 45 L280 60 Z" className="fill-indigo-100 dark:fill-indigo-400/15" />
    </svg>
  )
}

export function ProjectOverviewCard() {
  return (
    <PanelCard
      icon={ScanEye}
      title="Project Overview"
      action={<ChevronRight className="size-4 text-muted-foreground" />}
    >
      <MountainIllustration />
      <p className="text-sm leading-relaxed text-muted-foreground">
        Manage your services, deployments, and logs in one place. Keep your applications running
        smoothly.
      </p>
    </PanelCard>
  )
}
