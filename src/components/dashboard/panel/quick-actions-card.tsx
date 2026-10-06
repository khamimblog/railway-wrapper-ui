import { CircleAlert, FileText, Play, Send, Square, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { PanelCard } from "./panel-card"

export interface QuickActionHandlers {
  onStartAll?: () => void
  onStopAll?: () => void
  onDeployAll?: () => void
  onViewLogs?: () => void
}

interface QuickActionTileProps {
  icon: LucideIcon
  label: string
  className: string
  onClick?: () => void
}

function QuickActionTile({ icon: Icon, label, className, onClick }: QuickActionTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-16 flex-col items-center justify-center gap-1.5 rounded-lg border text-sm font-medium transition-colors",
        className
      )}
    >
      <Icon className="size-4 fill-current" />
      {label}
    </button>
  )
}

export function QuickActionsCard({ onStartAll, onStopAll, onDeployAll, onViewLogs }: QuickActionHandlers) {
  return (
    <PanelCard icon={CircleAlert} title="Quick Actions">
      <div className="grid grid-cols-2 gap-3">
        <QuickActionTile
          icon={Play}
          label="Start All"
          onClick={onStartAll}
          className="border-emerald-100 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
        />
        <QuickActionTile
          icon={Square}
          label="Stop All"
          onClick={onStopAll}
          className="border-red-100 bg-red-50 text-red-600 hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
        />
        <QuickActionTile
          icon={Send}
          label="Deploy All"
          onClick={onDeployAll}
          className="border-violet-100 bg-violet-50 text-violet-700 hover:bg-violet-100 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300"
        />
        <QuickActionTile
          icon={FileText}
          label="View Logs"
          onClick={onViewLogs}
          className="border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300 [&_svg]:fill-none"
        />
      </div>
    </PanelCard>
  )
}
