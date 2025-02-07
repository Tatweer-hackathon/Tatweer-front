"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  Truck,
  DollarSign,
  FileText,
  HelpCircle,
  MessageCircle,
  Settings,
  LogOut,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/dashboard/products", icon: Package },
  { name: "Carriers", href: "/dashboard/carriers", icon: Truck },
  { name: "Revenue", href: "/dashboard/revenue", icon: DollarSign },
  { name: "Billing", href: "/dashboard/billing", icon: FileText },
  { name: "Support", href: "/dashboard/support", icon: HelpCircle },
  { name: "FAQs", href: "/dashboard/faqs", icon: MessageCircle },
]

const bottomNavigation = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-white flex flex-col">
      <div className="flex-1 flex flex-col gap-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${
                isActive ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </div>
      <div className="p-4 border-t">
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

