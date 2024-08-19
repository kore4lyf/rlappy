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
    // Do not animate brands if user prefers reduced motion
    const reduceMotionEffect = () => {
      if(!reducedMotion()) {
        if(brands.current && brandsContainer.current) {
          brands.current.classList.add("animate")
          brandsContainer.current.classList.remove("autoWidth")
          brands.current.classList.remove("flex-wrap")
        } 
      }
      else {
        if(brands.current && brandsContainer.current) {
          brands.current.classList.remove("animate")
          brands.current.classList.add("flex-wrap")
          brandsContainer.current.classList.add("autoWidth")
        }
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
          <li>
            <div className="h-12 flex items-center overflow-hidden">
              <SiSamsung className="text-9xl" />
            </div>
          </li>
          <li>
            <SiDell className="text-7xl" />
          </li>
          <li>
            <div className="h-12 flex items-center overflow-hidden">
              <SiLenovo className="text-9xl" />  
            </div>  
          </li>
          <li>
            <SiLg className="text-7xl" /> 
          </li>
          <li>
            <SiRazer className="text-7xl" /> 
          </li>
          <li>
            <SiToshiba className="text-7xl" /> 
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
          <li>
            <SiThinkpad className="text-7xl" /> 
          </li>
          <li>
            <SiMicrosoft className="text-6xl" /> 
          </li>
          <li>s
            <SiSony className="text-7xl" /> 
          </li>
          <li>
            <SiXiaomi className="text-6xl" /> 
          </li>
          
          
          <li>
            <FaApple className="text-6xl text-primary" />
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
          <li>
            <div className="h-12 flex items-center overflow-hidden">
              <SiSamsung className="text-9xl" />
            </div>
          </li>
          <li>
            <SiDell className="text-7xl" />
          </li>
          <li>
            <div className="h-12 flex items-center overflow-hidden">
              <SiLenovo className="text-9xl" />  
            </div>  
          </li>
          <li>
            <SiLg className="text-7xl" /> 
          </li>
          <li>
            <SiRazer className="text-7xl" /> 
          </li>
          <li>
            <SiToshiba className="text-7xl" /> 
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
          <li>
            <SiThinkpad className="text-7xl" /> 
          </li>
          <li>
            <SiMicrosoft className="text-6xl" /> 
          </li>
          <li>
            <SiSony className="text-7xl" /> 
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