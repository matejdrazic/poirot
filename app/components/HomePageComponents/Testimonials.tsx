"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Avatar } from "@material-tailwind/react";




import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    id: 1,
    author: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    author: "Jane Smith",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    author: "Jack Smith",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  
]

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <>
    <div className="mt-16 flex flex-col items-center justify-center">
      <h1 className="mb-4 ml-4 bg-gradient-to-r from-green-800  to-green-400 font-bold inline-block text-transparent bg-clip-text text-2xl">Hear from our Customers</h1>
      <p className="text-center text-3xl my-12 font-bold">Customers who entrust their security to Poirot</p>
    </div>
    <Carousel className="w-full mx-auto max-w-xs mb-36"   plugins={[plugin.current]}>
    <CarouselContent>
      {testimonials.map((testimonial) => (
        <CarouselItem key={testimonial.id}>
          <div className="p-1">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
              <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                <p className="text-lg my-4">{testimonial.text}</p>
                <p className="text-sm font-semibold">{testimonial.author}</p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  </>
  )
}
