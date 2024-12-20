import React, { useRef } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
const Navbar = () => {
    const navContainerRef = useRef(null);
    const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  return (
    <div ref={navContainerRef} className='fixed z-50 h-16 top-4 border-none inset-x-0 transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between p-4'>
<div className='flex items-center gap-7'>
<img src='/img/logo.png' alt='logo' className='w-10 cursor-pointer' />
<Button id='product-button' title="Products"righticon={<TiLocationArrow/>} containerclass="bg-blue-50 md:flex hidden item-center justify-center gap-1" />
</div>
<div className='flex h-full items-center'>
    <div className='hidden md:block'>
{navItems.map((item)=>(
    <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
{item}
    </a>
))}
    </div>
    <button className='ml-5 items-center flex space-x-0.5 '>

    </button>
</div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar