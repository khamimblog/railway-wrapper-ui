import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PanelCardProps {
  icon: LucideIcon
  title: string
  action?: ReactNode
  className?: string
  children: ReactNode
}

/** Shared shell for the cards in the right-hand project panel. */
export function PanelCard({ icon: Icon, title, action, className, children }: PanelCardProps) {
  return (
    <Card className={cn("gap-4 p-5", className)}>
      <header className="flex items-center gap-3">
        <Icon className="size-4.5 text-muted-foreground" />
        <h2 className="font-semibold">{title}</h2>
        {action && <div className="ml-auto">{action}</div>}
      </header>
      {children}
    </Card>
  )
}
