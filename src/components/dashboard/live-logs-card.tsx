import { ArrowRight, FolderTree } from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { formatTime } from "@/lib/format"
import { cn } from "@/lib/utils"
import type { LogEntry, LogLevel } from "@/types/railway"

const levelStyles: Record<LogLevel, string> = {
  info: "text-indigo-400",
  debug: "text-slate-400",
  warn: "text-amber-400",
  error: "text-red-400",
}

function LiveIndicator() {
  return (
    <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-400">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      LIVE
    </span>
  )
}

function LogLine({ entry }: { entry: LogEntry }) {
  return (
    <div className="flex gap-4 font-mono text-[13px] leading-6">
      <span className="text-slate-400">{formatTime(entry.timestamp)}</span>
      <span className={cn("w-14 shrink-0", levelStyles[entry.level])}>
        [{entry.level.toUpperCase()}]
      </span>
      <span className="text-slate-100">{entry.message}</span>
    </div>
  )
}

export function LiveLogsCard({ logs }: { logs: LogEntry[] }) {
  return (
    <section className="flex flex-col overflow-hidden rounded-xl bg-[#0f172a] text-white shadow-sm ring-1 ring-slate-800">
      <header className="flex items-center gap-3 border-b border-white/5 px-4 py-3.5">
        <div className="flex size-9 items-center justify-center rounded-lg bg-white/5">
          <FolderTree className="size-4.5" />
        </div>
        <h2 className="font-semibold">Live Logs</h2>
        <div className="ml-auto flex items-center gap-6">
          <LiveIndicator />
          <a href="#" className="flex items-center gap-1.5 text-xs text-slate-200 hover:text-white">
            View all logs <ArrowRight className="size-3.5" />
          </a>
        </div>
      </header>
      <ScrollArea className="h-52 px-5 py-3">
        {logs.map((entry) => (
          <LogLine key={entry.id} entry={entry} />
        ))}
      </ScrollArea>
    </section>
  )
}
