import CardUser from "./cards"
import Image from "next/image"
import { Truck, Navigation, Thermometer, Box, BarChart2, Users } from 'lucide-react';
import CarouselDemo from './feedBackCards';
import Link from "next/link";
export default function Home() {
  const features = [
    {
      title: "Fleet Management",
      icon: <Truck className="card" />,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Smart Routing",
      icon: <Navigation className="icon" />,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Environmental Monitoring",
      icon: <Thermometer className="icon" />,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Cargo Management",
      icon: <Box className="icon" />,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Analytics Dashboard",
      icon: <BarChart2 className="icon" />,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    },
    {
      title: "Driver Management",
      icon: <Users className="icon" />,
      text: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story."
    }
  ];
  return (
    <main className="flex min-h-screen flex-col bg-soft-gradient ">
      {/* Hero Section */}
      <section id="section1" className="flex flex-col  items-center justify-center px-4 pt-16 pb-16 text-center">
        <div className="h-auto p-2.5 mt-16  w-full justify-center items-center gap-2.5 inline-flex">
          <div className="text-center flex flex-col space-y-8">
            <span className="text-black text-[40px] font-semibold  leading-10">THE PATH TO OPTIMIZATION STARTS WITH<br /></span>
            <span className="text-[#3461e0] text-9xl font-extrabold  leading-[128px]"> TRACKINI</span>
          </div>
        </div>
        <div className="w-[1322px] text-center text-[#747587] text-2xl font-normal  leading-normal">At Trackini, we believe that organization is the cornerstone of optimization. Our FMS and TMSare meticulously designed to streamline operations to move swiftly and efficiently in the complex world of logistics.</div>
        <Link href="#section5">
        <Image
        className="mt-32"
        alt=""
        
        src="Vector.svg"
        width={42}
        height={20}
        >
        </Image>
        

        </Link>
      </section>

      {/* Map Section */}
      <section id="section2" className="w-full px-4 py-16">
        <div className="container mx-auto">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-black shadow-xl">
  {/* Background Image */}
  <img 
    src="edited.png" 
    alt="Shipment Tracking" 
    className="absolute inset-0 h-full w-full object-cover"
  />
  
  {/* Content */}
  <div className="absolute bottom-6 left-6">
    <p className="text-xl font-semibold">
      <span className="text-neutral-950 text-[32px] font-bold leading-loose">Track your shipment now</span>
      <br />
    </p>
    <div>
      <span className="text-black text-[40px] font-bold leading-10">With </span>
      <span className="text-[#3461e0] text-8xl font-black leading-[96px]">TRACKINI</span>
      <span className="text-[#3461e0] text-[40px] font-bold leading-10"> </span>
    </div>
  </div>
</div>

        </div>
      </section>
      <section id="section3" className="flex flex-col items-center justify-center my-8 pb-16">
        <h1 className="text-[#3461e0] text-[77px] font-bold  leading-[79.31px]"> Who are TRACKINI ?</h1>
        <p className="w-[1163px] h-[190px] text-center text-[#111111] text-2xl font-normal  leading-normal"> <br /> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in orci in nisl vehicula vulputate sagittis in ligula. Praesent efficitur sapien ante. Donec malesuada leo sed eros pharetra tempus. Mauris vehicula magna posuere, dignissim lacus et, fermentum sapien. Pellentesque vel tortor maximus, ultricies sem non
          , aliquet augue. Duis mollis faucibus enim, eu ultricies justo scelerisque quis. Sed euismod tincidunt vulputate. Curabit</p>

      </section>
      <section id="section4" className="flex flex-col items-center justify-center space-y-16 w-full">
        <h1 className="text-[#3461e0] text-[77px] font-bold  leading-[79.31px]">What do we offer ? </h1>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center w-full space-y-4">
            {features.map((item, index) => (
              <CardUser key={index} title={item.title} text={item.text} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>
      <section id="section5" className="flex flex-col items-center justify-center mt-8 w-full">
      <p className="text-[#3461e0] text-[77px] font-bold  leading-[79.31px]">Our Customers feedbacks</p>
      <CarouselDemo/>
      </section>
    </main>
  )
}

