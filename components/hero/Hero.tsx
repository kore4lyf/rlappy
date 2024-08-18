"use client"

import Image from 'next/image'
import React from 'react'
import heroImg from '@/utils/images/heroimg.png';
import HeroSearchForm from './HeroSearchForm';
import SiteStats from '../SiteStats';

const numbAction: React.MouseEventHandler<HTMLImageElement> = (e) => e.preventDefault()

const Hero: React.FC = () => {
  return (
    <section className="autoWidth hero min-h-screen">
      <div className="flex flex-col lg:flex-row justify-start ">
        <div className="mb-10 relative w-full hidden sm:block">
            <Image alt="Image of a Laptop" src={heroImg} draggable="false" onContextMenu={numbAction}  className="max-w-full" />
        </div>
        <div className="w-full grid grid-flow-row gap-8">
          <div>
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight">Unlock Your <span className="text-primary">Freedom</span></h1>
            <p className="py-6 w-full">
                Discover top-quality laptops for rent or list your own to start earning today. Seamless rentals, flexible terms, and guaranteed quality.
            </p>
            <HeroSearchForm />
          </div>
            <SiteStats />
        </div>
      </div>
    </section>
  )
}

export default Hero