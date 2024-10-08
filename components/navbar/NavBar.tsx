import React from "react"
import { FaBars } from "react-icons/fa6"
import NavMenuMobile from "./NavMenuMobile"
import Link from "next/link"
import Image from "next/image"
import rlappyLogo from '@/public/rlappy-logo.svg';
import NavMenuDesktop from "./NavMenuDesktop"
import NavAuthSection from "./NavAuthSection"


const NavBar: React.FC = () => {
  return (
    <div className="border-b-4 border-base-300">
      <div className="navbar autoWidth bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="w-5 h-5" />
            </div>
            <NavMenuMobile />
          </div>
          <Link href="/" className="w-10 h-10 p-2 btn btn-ghost">
            <Image src={rlappyLogo} alt="Rlappy Logo" />
          </Link>
        </div>
        <NavMenuDesktop />
      <NavAuthSection />
      </div>
    </div>
  )
}

export default NavBar