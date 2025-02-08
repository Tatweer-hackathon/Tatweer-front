import Footer from "./footer"
import type React from "react"
import { Header } from "./header"
import { Suspense } from "react"


export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <Suspense>

    <div className="min-h-screen">
     
      {children}
    </div>
    </Suspense>
  )
}

