'use client'

import React, {useState} from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import IconMenu2Fill from '@/assets/IconMenu2Fill';
import {HoveredLink, MobileMenuItem } from './navbar-menu';



const MobileNav = () => {

  const pathName = usePathname()
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className='mobilenav'>
        <Sheet>
        <SheetTrigger>
            <IconMenu2Fill className="w-6 h-6 text-white dark:text-white" />
        </SheetTrigger>
        <SheetContent 
            onMouseLeave={() => setActive(null)}
            side="right" 
            className=' bg-slate-300/70' 
            style={{ width: '80vw', maxWidth: '290px' }}
        >
            <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>

            <Link 
                href='/' 
                className='flex cursor-pointer lfex items-center gap-1 px-4'
            >
                <h4 className='text-26 font-ibm-plex-serif font-bold text-black'>Menu</h4>
            </Link>
            <div className='mobilenav-sheet'>
                <SheetClose asChild>
                    <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                        {sidebarLinks.map( link => {
                            const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`)
                            return ( 
                                <SheetClose asChild key={link.route}>            
                                    <MobileMenuItem 
                                        src={link.route} 
                                        setActive={setActive} 
                                        active={active} 
                                        isActive={isActive} 
                                        item={link.label}
                                        Icon={link.icon}
                                    >
                                       {link.route.startsWith('/projects') ? (<div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/projects/shaffynation">ShaffyNation</HoveredLink>
                                            <HoveredLink href="/projects/prjmanager">PrJManager</HoveredLink>
                                            <HoveredLink href="/projects/prjextension">PrJExtension</HoveredLink>
                                            <HoveredLink href="/projects/prjbank">PrJBank</HoveredLink>
                                            <HoveredLink href="/projects/collabchat">CollabChat</HoveredLink>
                                        </div>) : null}
                                    </MobileMenuItem>
                                </SheetClose>        
                            )
                        })}
                    </nav>
                </SheetClose>
            </div>  
        </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav