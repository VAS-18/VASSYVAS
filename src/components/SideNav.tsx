import Link from 'next/link';
import { LuRocket, LuLayoutDashboard, LuUser, LuMail, LuChevronsRight } from "react-icons/lu";

const SideNav = () => {
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
    <nav className="h-full w-16 flex items-center justify-center relative pl-10 bg-background/80 backdrop-blur-sm">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/50 text-2xl transform translate-x-6 group-hover:opacity-0 transition-all duration-300">
        <LuChevronsRight className="animate-pulse" />
      </div>

      <div className="absolute h-[70%] w-[2px] bg-foreground/20 rounded-full -left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-150"></div>
      
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
