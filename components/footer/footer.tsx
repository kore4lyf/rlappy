import Image from 'next/image'
import React from 'react'
import rlappyLogo from '@/public/rlappy-logo.svg';
import { ImenuItemLink, ImenuItems, menuItems } from '@/utils/footerNavMenuItems';
import Link from 'next/link';



const Footer = () => {
  const navHeaders: string[] = Object.keys(menuItems)

  return <footer className="footer bg-base-300 text-white dark:text-base-content p-10">
    <aside>
      <Image src={rlappyLogo} className="w-16 h-16 md:w-12 md:h-12 ml-[-6px]" alt="Rlappy Logo" />
      <span className="font-bold text-sm"> RLappy </span>
      <p>Copyright © {new Date().getFullYear()}</p>
    </aside>

    {navHeaders.map((navHead: string) => {
        const navSection: ImenuItemLink[] = menuItems[navHead as keyof ImenuItems]
        
        return <nav key={navHead}>
          <h6 className="nav-header"> { navHead } </h6>

          {navSection.map((item) => {
            return <Link key={navHead} href={item.path} className="nav-link"> {item.name} </Link>
          })}
        </nav>
      })}

  </footer>
}
    
      
      {/* {navHeaders.map((navHead) => {
        const navSection = menuItems[navHead]
        
        console.log(navSection)
        return <></>
        return <nav key={navHead}>
          <h6 className="nav-header"> { navHead } </h6>

          {menuItems[navHead].map ((item) => {
            return <Link key={navHead} href={item.path} className="nav-link"> {item.name} </Link>
          })}
        </nav>
      })} */}
    {/* <footer/> */}

export default Footer