import * as React from "react"

interface LayoutProps {
  children: React.ReactNode
}
export default function BrowseLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-row">
      <div className="w-64 bg-background">{/* Sidebar content */}</div>
      <div className="mt-5 flex-1 overflow-y-scroll">
        <div className="ml-10 flex space-x-5">{children}</div>
      </div>
      <div className="w-64 bg-background">{/* Sidebar content */}</div>
    </div>
  )
}
