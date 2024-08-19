import Image from 'next/image'
import React from 'react'
import rlappyLogo from '@/public/rlappy-logo.svg';
import { ImenuItemLink, ImenuItems, menuItems } from '@/utils/footerNavMenuItems';
import Link from 'next/link';
import {  FaInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';



const Footer: React.FC = () => {
  const navHeaders: string[] = Object.keys(menuItems)

  return <footer className="bg-base-300 text-white dark:text-base-content py-10">
    <div className='footer autoWidth'>
      <aside>
        <Image src={rlappyLogo} className="w-16 h-16 md:w-12 md:h-12 ml-[-6px]" alt="Rlappy Logo" />
        <span className="font-bold text-sm"> RLappy </span>
        <p>Copyright © {new Date().getFullYear()}</p>
        <div className="flex gap-4">
          <Link href="https://facebook.com/">
            <FaFacebookSquare className="w-5 h-5 hover:text-primary" />
          </Link>
          <Link href="https://instagram.com/">
            <FaInstagram className="w-5 h-5 hover:text-primary" />
          </Link>
          <Link href="https://x.com/">
            <span className="text-[1.4rem] hover:text-primary">𝕏</span>
          </Link>
        </div>
      </aside>

      {navHeaders.map((navHead: string) => {
          const navSection: ImenuItemLink[] = menuItems[navHead as keyof ImenuItems]
          
          return <nav key={navHead}>
            <h6 className="navHeader"> { navHead } </h6>

            {navSection.map((item) => {
              return <Link key={navHead} href={item.path} className="navLink"> {item.name} </Link>
            })}
          </nav>
        })}
    </div>
  </footer>
}

export default Footer