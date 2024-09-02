import * as React from 'react';

interface LayoutProps {
    children: React.ReactNode
}
export default function BuyLayout({ children }: LayoutProps) {
    return (
        <div className="h-full flex flex-row">
            <div className="bg-background w-[5vw]">    
            </div>
            <div className="flex-1 overflow-y-scroll mt-[5vh]">
                <div className="flex space-x-5">
                    {children}
                </div>      
            </div>
            <div className="bg-background w-[5vw]">    
            </div>
        </div>
    )
}