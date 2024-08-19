import React from 'react'

const SiteStats: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-wrap md:flex-nowrap gap-8 justify-evenly sm:justify-between">
        <div className="font-bold flex gap-2 flex-col items-center">
            <div className="text-4xl">150+</div>
            <div className="text-lg  text-primary">Laptops</div>
        </div>

        <div className="divider divider-horizontal h-14 w-fit self-center hidden sm:inline-flex"></div>

        <div className="font-bold flex gap-2 flex-col items-center">
          <div className="text-4xl">20+</div>
          <div className="text-lg  text-primary">Brands</div>
        </div>

        <div className="divider divider-horizontal h-14 w-fit self-center hidden sm:inline-flex"></div>
        
        <div className="font-bold flex gap-2 flex-col items-center">
          <div className="text-4xl">500k+</div>
          <div className="text-lg text-primary">Users</div>
        </div>
      </div>
    </section>
  )
}

export default SiteStats