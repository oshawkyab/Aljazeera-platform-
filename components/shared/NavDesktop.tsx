import { navLinks } from '@/utils'
import Link from 'next/link'
import React from 'react'

const NavDesktop = () => {
   return (
      <div className='hidden md:flex items-center space-x-6' style={{direction: "rtl"}}>
         {navLinks.map((link, idx) => (
            <Link className='hover:scale-105 transition-all font-semibold'  href={link.href} key={idx}>{link.title}</Link>
         ))}
      </div>
   )
}

export default NavDesktop