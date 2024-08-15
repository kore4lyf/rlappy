
import ThemeToggleBtn from "@/components/theme/ThemeToggleBtn"
import Image from "next/image"
import heroImg from '@/utils/images/heroimg.png';

const HomePage = () => {
  return (
    <>
      
      

      <div className="autoWidth hero min-h-screen mt-10">
  <div className="flex flex-col lg:flex-row justify-start ">
    <div className="mb-10 relative w-full">
      <span className="disableImgDrag">
        <Image alt="Image of a Laptop" src={heroImg} unoptimized={true}
      className="max-w-[100%]" />
      </span>
    </div>
    <div className="w-full">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:max-w-[20ch]">Unlock Your <br/> <span className="text-primary">Freedom</span></h1>
      <p className="py-6 w-full">
        Discover top-quality laptops for rent or list your own to start earning today. Seamless rentals, flexible terms, and guaranteed quality.
      </p>
      <form>
      <p>Rent a PC</p>
        <input type="text" placeholder="Location"/>
      </form>
    </div>
  </div>
</div>




<div className="autoWidth py-5 text-default">
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