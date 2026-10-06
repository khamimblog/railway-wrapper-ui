import { ThemeToggle } from "@/components/theme/theme-toggle"
import type { Project, User } from "@/types/railway"
import { ProjectSwitcher } from "./project-switcher"
import { SearchBar } from "./search-bar"
import { UserMenu } from "./user-menu"

interface TopBarProps {
  user: User
  projects: Project[]
  activeProjectId: string
  onProjectChange: (projectId: string) => void
}

export function TopBar({ user, projects, activeProjectId, onProjectChange }: TopBarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center gap-6 border-b bg-background/80 px-6 backdrop-blur-md">
      <SearchBar />
      <div className="ml-auto flex items-center gap-4">
        <ProjectSwitcher projects={projects} value={activeProjectId} onChange={onProjectChange} />
        <ThemeToggle />
        <UserMenu user={user} />
      </div>
    </header>
  )
}
