import React from 'react'

const SiteStats = () => {
  return (
    <section className="w-full autoWidth py-5 text-default">
      <div className="flex flex-wrap gap-8 justify-evenly">
        <div className="font-bold flex gap-2 flex-col items-center">
            <div className="text-3xl sm:text-4xl md:text-5xl">150+</div>
            <div className="text-lg sm:text-xl  text-primary">Laptops</div>
        </div>
        <div className="font-bold flex gap-2 flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl">20+</div>
          <div className="text-lg sm:text-xl  text-primary">Brands</div>
        </div>
        <div className="font-bold flex gap-2 flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-5xl">500k+</div>
          <div className="text-lg sm:text-xl text-primary">Users</div>
        </div>
      </div>
    </section>
  )
}

export default SiteStats