import { testimonials } from '@/utils/testimonials'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl autoWidth">Testimonials</h2>
        <div className="carousel carousel-center space-x-4 px-[5%] p-4 pb-10 max-w-full relative overflow-y-hidden">

        {testimonials.map((testimonial) =>  {
          return <div className="carouselItem" key={testimonial.name}>
            <p>
              {testimonial.message}
            </p>
            <div className="flex items-center gap-2">
              <Image className="w-10 h-10 rounded-full" alt={`${testimonial.name} profile photo`} src={testimonial.imagePath} />
              <div className="flex flex-col">
                <span className="font-bold capitalize text-primary">{testimonial.name}</span>
                <span className="capitalize text-xs text-gray-400">{testimonial.occupation}</span>
              </div>
            </div>
          </div>
        })}

        
      </div>
      </div>
    </section>
  )
}

export default Testimonials