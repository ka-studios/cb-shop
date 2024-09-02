import * as React from 'react';

interface LayoutProps {
    children: React.ReactNode
}
export default function BrowseLayout({ children }: LayoutProps) {
    return (
        <div className="h-screen flex flex-row">
            <div className="bg-background w-64">
                {/* Sidebar content */}
            </div>
            <div className="flex-1 overflow-y-scroll mt-5">
                <div className="flex space-x-5 ml-10">
                    {children}
                </div>
            </div>
            <div className="bg-background w-64">
                {/* Sidebar content */}
            </div>
        </div>
    )
}