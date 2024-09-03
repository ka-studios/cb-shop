import * as React from "react"

interface LayoutProps {
  children: React.ReactNode
}
export default function BuyLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-full flex-row">
      <div className="w-[5vw] bg-background"></div>
      <div className="mt-[5vh] flex-1">
        <div className="flex space-x-5">{children}</div>
      </div>
      <div className="fixed w-[5vw] bg-background"></div>
    </div>
  )
}
