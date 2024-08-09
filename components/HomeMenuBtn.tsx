"use client"

import React, { useState } from "react";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";

const HomeMenuBtn: React.FC = () => {
  const [isMeunOpen, setMeunOpen] = useState<boolean>(false)
  return (
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setMeunOpen(!isMeunOpen)}>
      
      {isMeunOpen ?
      <FaBarsStaggered className="w-8 h-8" /> :
      <FaBars className="w-8 h-8" /> }
    </div>
  )
}

export default HomeMenuBtn