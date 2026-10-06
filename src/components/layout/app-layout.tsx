import type { ReactNode } from "react"

import type { Project, User } from "@/types/railway"
import { TopBar } from "./top-bar"

interface AppLayoutProps {
  user: User
  projects: Project[]
  activeProjectId: string
  onProjectChange: (projectId: string) => void
  children: ReactNode
}

export function AppLayout({ user, projects, activeProjectId, onProjectChange, children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar
          user={user}
          projects={projects}
          activeProjectId={activeProjectId}
          onProjectChange={onProjectChange}
        />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
