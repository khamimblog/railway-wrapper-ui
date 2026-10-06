import { useState } from "react"

import { AppLayout } from "@/components/layout/app-layout"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { activities, currentUser, logs, projects, services } from "@/data/mock"
import { DashboardPage } from "@/pages/dashboard-page"

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const activeProject = projects.find((p) => p.id === activeProjectId) ?? projects[0]

  return (
    <ThemeProvider>
      <TooltipProvider>
        <AppLayout
          user={currentUser}
          projects={projects}
          activeProjectId={activeProjectId}
          onProjectChange={setActiveProjectId}
        >
          <DashboardPage
            project={activeProject}
            services={services}
            logs={logs}
            activities={activities}
          />
        </AppLayout>
      </TooltipProvider>
    </ThemeProvider>
  )
}
