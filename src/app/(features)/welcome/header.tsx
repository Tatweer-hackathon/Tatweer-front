import Link from "next/link"
import { Button } from "src/components/ui/button"

export function Header() {
const headers = [
    { name: "Home", path: "/home" },
    { name: "Company", path: "/company" },
    { name: "Product", path: "/product" },
    { name: "Pricing", path: "/pricing" },
    { name: "About us", path: "/about" },
    { name: "Contact", path: "/contact" }
];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container flex flex-row items-center justify-between h-16 px-4">
        <Link href="/"  className="flex items-center space-x-2" >
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              />
            </svg>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">

          {(headers.map((item,index)=>
          <Link href={item.path} key={index} className="text-sm font-medium hover:text-blue-600" >
            {item.name}
          </Link>
        ))
}   
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="default" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/start">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

