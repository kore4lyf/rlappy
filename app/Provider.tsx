import InitTheme from '@/components/theme/InitTheme'
import React from 'react'

interface props {
  children: React.ReactNode
}

const Provider: React.FC<props> = ({ children }) => {
  return (
    <> 
      <InitTheme />
      {children}
    </>
  )
}

export default Provider