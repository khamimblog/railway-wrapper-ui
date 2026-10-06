import { ExternalLink, Zap } from "lucide-react"

export function HelpCard() {
  return (
    <a
      href="https://docs.railway.com"
      target="_blank"
      rel="noreferrer"
      className="flex gap-3 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 transition-colors hover:bg-indigo-50 dark:border-indigo-500/20 dark:bg-indigo-500/10"
    >
      <Zap className="mt-0.5 size-5 shrink-0 fill-indigo-600 text-indigo-600 dark:fill-indigo-400 dark:text-indigo-400" />
      <div className="flex-1">
        <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Need help?</p>
        <p className="mt-1 text-xs leading-relaxed text-indigo-700/80 dark:text-indigo-300/80">
          Check out Railway documentation or get support.
        </p>
      </div>
      <ExternalLink className="size-4 text-indigo-600 dark:text-indigo-400" />
    </a>
  )
}
