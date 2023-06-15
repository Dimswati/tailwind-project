import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NavButton({ children }) {

  const { hash } = useLocation()

  return (
   <>{children(hash)}</>
  )
}
