"use client";
import Link from 'next/link';
import { LuRocket, LuLayoutDashboard, LuUser, LuMail, LuChevronsRight, LuMenu } from "react-icons/lu";
import { useState } from 'react';

const MobileNav = () => {
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
    <div className="fixed  top-0 left-0 right-0 p-5 z-50 w-[50%] mx-auto md:hidden">
      <nav className='w-full mx-auto shadow-xl'>
        <div className="flex justify-center">
          {menuList.map((item) => (
            <Link key={item.id} href={item.path} className='p-3'>
              <item.Icon size={18} />
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default MobileNav
