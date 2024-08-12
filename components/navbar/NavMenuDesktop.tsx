"use client"
import Link from 'next/link'
import { menuItems } from '@/utils/headerNavMenuItems'
import { usePathname } from 'next/navigation'

const NavMenuDesktop = () => {
  console.log(usePathname())
  return (
    <nav className="nav-desktop navbar-center hidden lg:flex">
      <ul className="flex gap-10 px-1">
        {menuItems.map((item) => {
          return <li key={item.name}>
          <Link href={item.path} className={`${ item.path === usePathname() && "active"} text-lg dark:hover:text-primary hover:font-bold`}>{item.name}</Link>
        </li>})}
      </ul>
    </nav>
  )
}

export default NavMenuDesktop