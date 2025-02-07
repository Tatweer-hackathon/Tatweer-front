"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "src/components/ui/button"
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const headers = [
    { name: "Home", path: "/" },
    { name: "Company", path: "#section1" },
    { name: "Product", path: "#section2"},
    { name: "Pricing", path: "#section3"},
    { name: "About us", path: "#section4"},
    { name: "Contact", path: "#section5"},
  ]


  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full  bg-white shadow-[0px_4px_176.60000610351562px_6px_rgba(0,0,0,0.23)] border-b border-[#d9d9d9]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[60px] px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
            </div>
            <span className="font-semibold text-lg hidden sm:block">Logo</span>
          </Link>

          {/* Mobile menu button */}
          <Button
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-12" />
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex flex-1 justify-center items-center space-x-6">
            {headers.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`text-sm font-medium ${
                  item.path === "Home" && 
                  "bg-gray-100 h-[32px] w-[70px] items-center justify-center flex rounded"
                } text-gray-600 hover:text-blue-600 transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth buttons */}
          <div className="hidden xl:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              asChild 
              className="text-sm bg-gray-300 w-[83px] h-[32px] border border-black"
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button 
              variant="default" 
              asChild 
              className="text-sm w-[83px] h-[32px]"
            >
              <Link href="/start">Sign up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="flex flex-col py-4">
              {headers.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 p-4">
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sign-in">Sign in</Link>
                </Button>
                <Button variant="default" asChild className="w-full">
                  <Link href="/start">Sign up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;