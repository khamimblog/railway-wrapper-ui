import { Badge } from "@/components/ui/badge"
import { capitalize } from "@/lib/format"
import { cn } from "@/lib/utils"
import type { Environment } from "@/types/railway"

const styles: Record<Environment, string> = {
  production: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  staging: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  development: "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400",
}

const dots: Record<Environment, string> = {
  production: "bg-emerald-500",
  staging: "bg-amber-500",
  development: "bg-sky-500",
}

export function EnvironmentBadge({ environment }: { environment: Environment }) {
  return (
    <Badge className={cn("gap-1.5 px-2.5 py-1", styles[environment])}>
      <span className={cn("size-1.5 rounded-full", dots[environment])} />
      {capitalize(environment)}
    </Badge>
  )
}
