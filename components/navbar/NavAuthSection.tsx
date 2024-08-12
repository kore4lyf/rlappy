import Link from 'next/link'
import React from 'react'
import ThemeToggleBtn from '@/components/theme/ThemeToggleBtn';

const NavAuthSection: React.FC = () => {
  return (
    <div className="navbar-end flex gap-2">
      <Link href="/rent" className="mbtn shadow-illusion mbtn-primary">Login</Link>
      <Link href="/rent" className="mbtn shadow-illusion mbtn-ghost">Sign up</Link>
      <ThemeToggleBtn />
    </div>
  )
}

export default NavAuthSection