"use client"


import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/Testimonials";

const HomePage = () => {
  return (
    <>
    <Hero />


    <section>
      <h2 className="text-4xl autoWidth">Brands</h2>
    </section>
    
    <Testimonials />
    

      
    </>
    
  )
}

export default HomePage