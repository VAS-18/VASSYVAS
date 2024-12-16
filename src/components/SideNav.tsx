"use client";
import Link from 'next/link';
import { LuRocket, LuLayoutDashboard, LuUser, LuMail, LuChevronsRight, LuMenu } from "react-icons/lu";
import { useState } from 'react';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = [
    {
      id: 1,
      Icon: LuLayoutDashboard,
      path: '/',
    },
    {
      id: 2,
      Icon: LuRocket,
      path: '/projects',
    },
    {
      id: 3,
      Icon: LuUser,
      path: '/about',
    },
    {
      id: 4,
      Icon: LuMail,
      path: '/contact',
    }
  ];

  return (
    <nav className="h-full w-full flex items-center justify-center relative pl-10 bg-background/80 backdrop-blur-sm">
      <div className="absolute right-0 text-foreground/50 text-2xl transform translate-x-2 group-hover:opacity-0 transition-all duration-300">
        <LuChevronsRight className="animate-pulse" />
      </div>
      
      <div className="flex flex-col gap-16 relative z-10">
        {menuList.map((menu) => (
          <Link 
            key={menu.id} 
            href={menu.path}
            className="p-3 text-xl text-foreground/50 hover:text-foreground rounded-full transition-all duration-300 bg-background hover:bg-foreground/5 hover:scale-125 hover:-translate-x-2 transform opacity-0 group-hover:opacity-100 translate-x-8 group-hover:translate-x-0"
          >
            <menu.Icon className="transition-transform duration-300 hover:rotate-12" />
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default SideNav
