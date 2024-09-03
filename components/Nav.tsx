'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { nav_links } from '@/Constants';

// base on this youtube tutorials  https://youtu.be/dImgZ_AH7uA?si=iUnaE1FVvpnS1_MR

const Nav = () => {
    const pathname = usePathname()
  return (
    <nav className='flex gap-8'>
    {nav_links.map((link, index) => {
        return (
        <Link 
        href={link.path}
        key={index}
        className={`capitalize font-medium hover:text-accent transition-all ${
         link.path === pathname ? 'text-accent border-b-2 border-accent' : ''}`}>
        {link.name}
        </Link>
        );
    })}
    </nav>
  )
}

export default Nav
