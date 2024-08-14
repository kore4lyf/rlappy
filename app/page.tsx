
import ThemeToggleBtn from "@/components/theme/ThemeToggleBtn"
import Image from "next/image"

const HomePage = () => {
  return (
    <>
      
      

      <div className="auto-width hero bg-base min-h-screen">
  <div className="flex flex-col-reverse lg:flex-row justify-start">
    {/* <Image alt="Image of a Laptop"
      src="/next.svg"
      className="max-w-sm rounded-lg shadow-2xl" /> */}
    <div className="w-full sm:w-[50%]">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:w-[20ch] border">Unlock Your <span className="text-primary">Freedom</span></h1>
      <p className="py-6 border w-full">
        Discover top-quality laptops for rent or list your own to start earning today. Seamless rentals, flexible terms, and guaranteed quality.
      </p>
      <span>x</span>
    </div>
  </div>
</div>




<div className="auto-width py-5 text-default">
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
</div>



      
    </>
    
  )
}

export default HomePage