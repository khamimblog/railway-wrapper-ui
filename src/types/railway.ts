// Domain types for the dashboard. Shaped so GraphQL query results can be
// mapped onto them later without touching the presentational components.

export type Environment = "production" | "staging" | "development"

export type ServiceStatus = "running" | "stopped" | "deploying" | "crashed"

export type ServiceHealth = "healthy" | "idle" | "unhealthy"

export type ServiceKind = "web" | "server" | "worker" | "cron"

export interface Service {
  id: string
  name: string
  description: string
  kind: ServiceKind
  status: ServiceStatus
  health: ServiceHealth
  environment: Environment
  replicas: number
  /** ISO timestamp of the last status change; drives the uptime/downtime label. */
  statusChangedAt: string
}

export interface Project {
  id: string
  name: string
  description: string
  environment: Environment
  createdAt: string
  updatedAt: string
}

export interface ProjectStats {
  total: number
  running: number
  stopped: number
}

export type LogLevel = "info" | "warn" | "error" | "debug"

export interface LogEntry {
  id: string
  timestamp: string
  level: LogLevel
  message: string
}

export type ActivityType =
  | "deployment_completed"
  | "deployment_started"
  | "deployment_failed"
  | "service_restarted"
  | "service_stopped"
  | "service_started"

export interface Activity {
  id: string
  type: ActivityType
  serviceName: string
  createdAt: string
}

export interface User {
  name: string
  email: string
  avatarUrl?: string
}

export interface ServiceActionHandlers {
  onStart?: (service: Service) => void
  onStop?: (service: Service) => void
  onRestart?: (service: Service) => void
  onDeploy?: (service: Service) => void
  onViewLogs?: (service: Service) => void
}
