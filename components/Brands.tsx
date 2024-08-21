"use client"

import { reducedMotion } from '@/utils/systemInfo';
import React, { useLayoutEffect, useRef } from 'react'
import { FaApple, FaChrome } from "react-icons/fa6";
import { GrHp } from "react-icons/gr";
import { SiAcer, SiAlienware, SiAsus, SiDell, SiHuawei, SiIntel, SiLenovo, SiLg, SiMicrosoft, SiRazer, SiSamsung, SiSony, SiThinkpad, SiToshiba, SiXiaomi } from "react-icons/si";



const Brands: React.FC = () => {
  const brandsContainer = useRef<HTMLDivElement>(null);
  const brands = useRef<HTMLUListElement>(null);
  
  useLayoutEffect(() => {
    const cloneBrandItems = () => {
      // get brands items
      const brandItemsCollection: HTMLCollection | undefined = brands.current?.children



      if (brandItemsCollection) {
        const brandItems: Element[] = Array.from(brandItemsCollection)

        for(const item of brandItems) {
          const newItem = item.cloneNode(true)
          brands.current?.appendChild(newItem)
          
          item.setAttribute("aria-hidden", "true")
        }
      } 
    }

    // Do not animate brands if user prefers reduced motion
    const reduceMotionEffect = () => {
      if(!reducedMotion()) {
        brands.current?.classList.add("animate")
        brands.current?.classList.remove("flex-wrap")
        brandsContainer.current?.classList.remove("autoWidth")
        
        // Clone brands for smooth animation
        cloneBrandItems()
      }
      else {
        brands.current?.classList.remove("animate")
        brands.current?.classList.add("flex-wrap")
        brandsContainer.current?.classList.add("autoWidth")
      }
    }
    
    reduceMotionEffect()      
  },[])

  return (
    <section className="sectionFlow bg-base-300 text-neutral-content overflow-hidden">
      <h2 className="text-4xl autoWidth text-base-100">Brands</h2>
      <div ref={brandsContainer} className="brandsContainer flex gap-10">
        <ul ref={brands} className="brands flex gap-10 items-center w-fit">
          <li>
            <FaApple className="text-6xl" />
          </li>
          <li>
          <SiAcer className="text-7xl" /> 
          </li>
          <li>
            <FaChrome className="text-6xl" />
          </li>
          <li>
            <SiAsus className="text-7xl" /> 
          </li>
          <li>
            <GrHp className="text-6xl" />
          </li>
          <li className="h-12 flex items-center overflow-hidden">
              <SiSamsung className="text-9xl" />
          </li>
          <li>
            <SiDell className="text-7xl" />
          </li>
          <li className="h-12 flex items-center overflow-hidden">
              <SiLenovo className="text-9xl" />  
          </li>
          <li className="h-12 flex items-center overflow-hidden">
            <SiLg className="text-8xl" /> 
          </li>
          <li>
            <SiRazer className="text-7xl" /> 
          </li>
          <li className="h-12 flex items-center overflow-hidden">
            <SiToshiba className="text-9xl" /> 
          </li>
          <li>
            <SiIntel className="text-7xl" /> 
          </li>
          <li>
            <SiHuawei className="text-7xl" /> 
          </li>
          <li>
            <SiAlienware className="text-6xl" /> 
          </li>
          <li className="h-12 flex items-center overflow-hidden">
            <SiThinkpad className="text-8xl" /> 
          </li>
          <li>
            <SiMicrosoft className="text-6xl" /> 
          </li>
          <li className="h-12 flex items-center overflow-hidden">
            <SiSony className="text-8xl" /> 
          </li>
          <li>
            <SiXiaomi className="text-6xl" /> 
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Brands