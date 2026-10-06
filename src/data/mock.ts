import type { Activity, LogEntry, Project, Service, User } from "@/types/railway"

// Temporary fixtures until the GraphQL API is wired up.

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000).toISOString()

export const currentUser: User = {
  name: "Blogkhamim",
  email: "blogkhamim@gmail.com",
}

export const projects: Project[] = [
  {
    id: "proj_acme_web",
    name: "Acme Web Platform",
    description: "A modern web platform for our business.",
    environment: "production",
    createdAt: "2025-01-12T09:00:00.000Z",
    updatedAt: minutesAgo(2),
  },
  {
    id: "proj_internal_tools",
    name: "Internal Tools",
    description: "Back-office tooling for the operations team.",
    environment: "staging",
    createdAt: "2025-03-04T09:00:00.000Z",
    updatedAt: minutesAgo(45),
  },
]

export const services: Service[] = [
  {
    id: "svc_web_frontend",
    name: "web-frontend",
    description: "Frontend application",
    kind: "web",
    status: "running",
    health: "healthy",
    environment: "production",
    replicas: 2,
    statusChangedAt: minutesAgo(14),
  },
  {
    id: "svc_web_app",
    name: "web-app",
    description: "Backend application",
    kind: "server",
    status: "running",
    health: "healthy",
    environment: "production",
    replicas: 1,
    statusChangedAt: minutesAgo(31),
  },
  {
    id: "svc_worker",
    name: "worker",
    description: "Background worker",
    kind: "worker",
    status: "stopped",
    health: "idle",
    environment: "production",
    replicas: 1,
    statusChangedAt: minutesAgo(132),
  },
  {
    id: "svc_scheduler",
    name: "scheduler",
    description: "Scheduled jobs",
    kind: "cron",
    status: "stopped",
    health: "idle",
    environment: "production",
    replicas: 1,
    statusChangedAt: minutesAgo(304),
  },
]

export const logs: LogEntry[] = [
  { id: "log_1", timestamp: "2025-01-12T10:32:14", level: "info", message: "Starting web-frontend..." },
  { id: "log_2", timestamp: "2025-01-12T10:32:16", level: "info", message: "Pulling image from registry..." },
  { id: "log_3", timestamp: "2025-01-12T10:32:21", level: "info", message: "Successfully pulled image" },
  { id: "log_4", timestamp: "2025-01-12T10:32:24", level: "info", message: "Starting container..." },
  { id: "log_5", timestamp: "2025-01-12T10:32:27", level: "info", message: "Connected to database" },
  { id: "log_6", timestamp: "2025-01-12T10:32:30", level: "info", message: "Server listening on port 8080" },
]

export const activities: Activity[] = [
  { id: "act_1", type: "deployment_completed", serviceName: "web-frontend", createdAt: minutesAgo(2) },
  { id: "act_2", type: "service_restarted", serviceName: "web-app", createdAt: minutesAgo(7) },
  { id: "act_3", type: "service_stopped", serviceName: "worker", createdAt: minutesAgo(12) },
  { id: "act_4", type: "deployment_started", serviceName: "web-frontend", createdAt: minutesAgo(18) },
]
