import { Cloud } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Project } from "@/types/railway"

interface ProjectSwitcherProps {
  projects: Project[]
  value: string
  onChange: (projectId: string) => void
}

export function ProjectSwitcher({ projects, value, onChange }: ProjectSwitcherProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-11! w-60 rounded-xl bg-card px-4 font-medium">
        <div className="flex items-center gap-3">
          <Cloud className="size-5 fill-indigo-600 text-indigo-600" />
          <SelectValue placeholder="Select project" />
        </div>
      </SelectTrigger>
      <SelectContent position="popper" align="end">
        {projects.map((project) => (
          <SelectItem key={project.id} value={project.id}>
            {project.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
