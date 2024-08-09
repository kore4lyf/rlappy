"use client"
import { menuItems } from '@/utils/navMenuItems'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavMenuMobile = () => {
  return (
    <>
      <ul tabIndex={0} className="nav-mobile menu menu-sm dropdown-content bg-base-100 gap-1 rounded-box z-[1] mt-3 w-52 p-2 border border-2 border-neutral">
        {menuItems.map((item) => {
          return <li key={item.name}><Link href={item.path} className={`text-lg hover:font-bold dark:hover:text-primary ${item.path === usePathname() ? "active" : null}`}>{item.name}</Link></li>
        })}
      </ul>
    </>
  )
}

export default NavMenuMobile