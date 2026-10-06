import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { capitalize } from "@/lib/format"
import type { Service, ServiceActionHandlers } from "@/types/railway"
import { ServiceActions } from "./service-actions"
import { ServiceIcon } from "./service-icon"
import { ServiceStatusInfo } from "./service-status"

interface ServiceRowProps extends ServiceActionHandlers {
  service: Service
}

function MetaTag({ children }: { children: ReactNode }) {
  return (
    <Badge variant="secondary" className="rounded-md px-2 font-normal text-muted-foreground">
      {children}
    </Badge>
  )
}

export function ServiceRow({ service, ...handlers }: ServiceRowProps) {
  return (
    <li className="grid grid-cols-1 items-center gap-4 py-5 md:grid-cols-[minmax(0,1fr)_150px_minmax(0,410px)]">
      <div className="flex items-center gap-4">
        <ServiceIcon kind={service.kind} />
        <div className="min-w-0 space-y-1">
          <p className="font-semibold">{service.name}</p>
          <p className="text-sm text-muted-foreground">{service.description}</p>
          <div className="flex gap-1.5 pt-0.5">
            <MetaTag>{capitalize(service.environment)}</MetaTag>
            <MetaTag>
              {service.replicas} {service.replicas === 1 ? "replica" : "replicas"}
            </MetaTag>
          </div>
        </div>
      </div>

      <ServiceStatusInfo service={service} />

      <ServiceActions service={service} {...handlers} />
    </li>
  )
}
