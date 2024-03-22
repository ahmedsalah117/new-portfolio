'use client'
import Link from 'next/link.js'
import { usePathname } from 'next/navigation.js'
import React from 'react'

const NavLink = ({ link }) => {
  const pathName = usePathname()
  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  )
}

export default NavLink