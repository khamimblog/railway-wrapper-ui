const MINUTE = 60_000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/** "2h 12m", "14m", "3d 4h" */
export function formatDuration(fromIso: string, now = Date.now()): string {
  const ms = Math.max(0, now - new Date(fromIso).getTime())
  const days = Math.floor(ms / DAY)
  const hours = Math.floor((ms % DAY) / HOUR)
  const minutes = Math.floor((ms % HOUR) / MINUTE)

  if (days > 0) return `${days}d ${hours}h`
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${Math.max(1, minutes)}m`
}

/** "2m ago", "3h ago", "just now" */
export function formatRelativeShort(iso: string, now = Date.now()): string {
  const ms = Math.max(0, now - new Date(iso).getTime())
  if (ms < MINUTE) return "just now"
  if (ms < HOUR) return `${Math.floor(ms / MINUTE)}m ago`
  if (ms < DAY) return `${Math.floor(ms / HOUR)}h ago`
  return `${Math.floor(ms / DAY)}d ago`
}

/** "2 minutes ago", "3 hours ago" */
export function formatRelativeLong(iso: string, now = Date.now()): string {
  const ms = Math.max(0, now - new Date(iso).getTime())
  const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? "" : "s"} ago`
  if (ms < MINUTE) return "just now"
  if (ms < HOUR) return plural(Math.floor(ms / MINUTE), "minute")
  if (ms < DAY) return plural(Math.floor(ms / HOUR), "hour")
  return plural(Math.floor(ms / DAY), "day")
}

/** "Jan 12, 2025" */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

/** "10:32:14" */
export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
