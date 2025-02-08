import CardUser from "./cards"
import Image from "next/image"
import { Truck, Navigation, Thermometer, Box, BarChart2, Users } from "lucide-react"
import CarouselDemo from "./feedBackCards"
import Link from "next/link"

const features = [
  {
    title: "Fleet Management",
    icon: <Truck className="w-8 h-8" />,
    text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
  {
    title: "Smart Routing",
    icon: <Navigation className="w-8 h-8" />,
    text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
  {
    title: "Environmental Monitoring",
    icon: <Thermometer className="w-8 h-8" />,
    text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
  {
    title: "Cargo Management",
    icon: <Box className="w-8 h-8" />,
    text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
  {
    title: "Analytics Dashboard",
    icon: <BarChart2 className="w-8 h-8" />,
    text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
  {
    title: "Driver Management",
    icon: <Users className="w-8 h-8" />,
    text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
  },
] as const

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-soft-gradient">
      {/* Hero Section */}
      <section
        id="section1"
        className="container mx-auto flex flex-col items-center justify-center px-4 pt-16 pb-16 text-center"
      >
        <div className="mt-16 w-full">
            <div className="flex flex-col space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight">
              THE PATH TO OPTIMIZATION STARTS WITH
            </h1>
            <Image
              src="/logo.svg"
              alt="Trackini Logo"
              width={500}
              height={200}
              className="mx-auto"
              priority
            />
            </div>
        </div>
        <button className="bg-[#203b8a] w-1/3 text-white px-8 py-3 rounded-full mt-8 font-semibold">
          Get Started
        </button>
        <p className="mt-8 max-w-4xl text-center text-[#747587] text-lg sm:text-xl md:text-2xl">
          At Trackini, we believe that organization is the cornerstone of optimization. Our FMS and TMS are meticulously
          designed to streamline operations to move swiftly and efficiently in the complex world of logistics.
        </p>
        <Link href="#section5" className="mt-20">
          <Image src="/Vector.svg" alt="Scroll down" width={42} height={20} className="animate-bounce" />
        </Link>
      </section>

      {/* Map Section */}
      <section id="section2" className="w-full px-4 py-16">
        <div className="container mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-black shadow-xl">
            <Image src="/map.png" alt="Shipment Tracking" fill className="object-cover" priority />
            <div className="absolute bottom-6 left-6 z-10">
              <h2 className="text-3xl sm:text-3xl md:text-[32px] font-bold text-neutral-950 mb-2">
                Be chill
              </h2>
              <div className="flex gap-2 items-center">
                <span className="text-black text-3xl sm:text-3xl md:text-[40px] font-bold">With</span>
                <Image
              src="/logo.svg"
              alt="Trackini Logo"
              width={200}
              height={200}
              className="mx-auto"
              priority
            />              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="section3" className="container mx-auto flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-[#3461e0] text-4xl sm:text-5xl md:text-[77px] font-bold mb-12">Who are TRACKINI ?</h2>
        <p className="max-w-4xl text-center text-[#111111] text-lg sm:text-xl md:text-2xl">
         Trackini is a cutting-edge Fleet Management System (FMS) and Transportation Management System (TMS) designed to revolutionize logistics operations. Our platform provides real-time tracking, route optimization, and comprehensive fleet analytics to help businesses maximize efficiency and reduce operational costs. With advanced GPS tracking, automated dispatching, and intelligent reporting features, Trackini empowers logistics companies to make data-driven decisions while ensuring timely deliveries and maintaining cargo safety.
        </p>
      </section>

      {/* Features Section */}
      <section id="section4" className="container mx-auto px-4 py-16">
        <h2 className="text-[#3461e0] text-4xl sm:text-5xl md:text-[77px] font-bold text-center mb-16">
          What do we offer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <CardUser key={index} title={item.title} text={item.text} icon={item.icon} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="section5" className="container mx-auto px-4 py-16">
        <h2 className="text-[#3461e0] text-4xl sm:text-5xl md:text-[77px] font-bold text-center mb-16">
          Our Customers feedbacks
        </h2>
        <CarouselDemo />

      </section>
     <aside  className="">
     </aside>

    </main>
  )
}

