import { Ellipsis, FileText, Play, RotateCw, Send, Square, Trash2, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Service, ServiceActionHandlers } from "@/types/railway"

interface ServiceActionsProps extends ServiceActionHandlers {
  service: Service
}

export function ServiceActions({
  service,
  onStart,
  onStop,
  onRestart,
  onDeploy,
  onViewLogs,
}: ServiceActionsProps) {
  const isRunning = service.status === "running"

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {isRunning ? (
        <>
          <Button
            size="sm"
            variant="outline"
            className="border-red-100 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
            onClick={() => onStop?.(service)}
          >
            <Square className="fill-current" /> Stop
          </Button>
          <Button size="sm" variant="outline" onClick={() => onRestart?.(service)}>
            <RotateCw /> Restart
          </Button>
        </>
      ) : (
        <Button
          size="sm"
          variant="outline"
          className="border-emerald-100 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
          onClick={() => onStart?.(service)}
        >
          <Play className="fill-current" /> Start
        </Button>
      )}

      <Button size="sm" onClick={() => onDeploy?.(service)}>
        <Send /> Deploy
      </Button>
      <Button size="sm" variant="outline" onClick={() => onViewLogs?.(service)}>
        <FileText /> Logs
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon-sm" variant="outline" className="ml-2" aria-label="More actions">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Settings /> Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash2 /> Delete service
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
