import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative w-full max-w-xl">
      <Search className="pointer-events-none absolute top-1/2 left-4 size-4.5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search projects, services, or press ⌘K..."
        className="h-11 rounded-xl border-transparent bg-muted pr-16 pl-11 shadow-none"
      />
      <kbd className="pointer-events-none absolute top-1/2 right-3 flex -translate-y-1/2 items-center gap-1 rounded-md border bg-background px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">
        ⌘ K
      </kbd>
    </div>
  )
}
