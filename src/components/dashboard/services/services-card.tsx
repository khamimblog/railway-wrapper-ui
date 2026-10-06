import { useMemo, useState } from "react"
import { LayoutGrid, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Service, ServiceActionHandlers } from "@/types/railway"
import { ServiceRow } from "./service-row"

type SortKey = "status" | "name" | "updated"

const statusOrder: Record<Service["status"], number> = {
  deploying: 0,
  running: 1,
  crashed: 2,
  stopped: 3,
}

function sortServices(services: Service[], key: SortKey): Service[] {
  const sorted = [...services]
  switch (key) {
    case "status":
      return sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status])
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case "updated":
      return sorted.sort((a, b) => b.statusChangedAt.localeCompare(a.statusChangedAt))
  }
}

interface ServicesCardProps extends ServiceActionHandlers {
  services: Service[]
}

export function ServicesCard({ services, ...handlers }: ServicesCardProps) {
  const [sortKey, setSortKey] = useState<SortKey>("status")
  const [compact, setCompact] = useState(false)
  const sorted = useMemo(() => sortServices(services, sortKey), [services, sortKey])

  return (
    <Card className="gap-0 px-5 py-4">
      <div className="flex items-center gap-6 border-b pb-4">
        <h2 className="text-lg font-semibold">Services</h2>
        <span className="text-xs text-muted-foreground">{services.length} services</span>

        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Sort by</span>
          <Select value={sortKey} onValueChange={(v) => setSortKey(v as SortKey)}>
            <SelectTrigger size="sm" className="w-28">
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper" align="end">
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="updated">Updated</SelectItem>
            </SelectContent>
          </Select>
          <Button
            size="icon-sm"
            variant="outline"
            aria-label="Toggle layout"
            onClick={() => setCompact((c) => !c)}
          >
            {compact ? <LayoutGrid /> : <List />}
          </Button>
        </div>
      </div>

      <ul className={compact ? "divide-y [&>li]:py-3" : "divide-y"}>
        {sorted.map((service) => (
          <ServiceRow key={service.id} service={service} {...handlers} />
        ))}
      </ul>
    </Card>
  )
}
