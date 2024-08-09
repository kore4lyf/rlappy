import Link from 'next/link'
import React from 'react'

const NavAuthStatus: React.FC = () => {
  return (
    <div className="navbar-end flex gap-2">
      <Link href="/rent" className="mbtn shadow-illusion mbtn-primary">Login</Link>
      <Link href="/rent" className="mbtn shadow-illusion mbtn-ghost">Sign up</Link>
    </div>
  )
}

export default NavAuthStatus