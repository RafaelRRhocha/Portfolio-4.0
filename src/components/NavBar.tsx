'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from 'react-icons/hi2';

interface INavBar {
  name: string;
  path: string;
  Icon: React.ElementType;
}

const navData: Array<INavBar> = [
  { name: 'Home', path: '/', Icon: HiHome },
  { name: 'Sobre mim', path: '/about', Icon: HiUser },
  {
    name: 'O que eu faço?',
    path: '/services',
    Icon: HiRectangleGroup,
  },
  { name: 'Projetos', path: '/projects', Icon: HiViewColumns },
  {
    name: 'Feedbacks',
    path: '/feedbacks',
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: 'Contato',
    path: '/contact',
    Icon: HiEnvelope,
  },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-y-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
      <div className="flex h-[80px] w-full items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && 'text-accent'
            } group relative flex items-center transition-all duration-300 hover:text-accent`}
            href={link.path}
            key={i}
          >
            <div
              role="tooltip"
              className="absolute right-0 hidden pr-14 xl:group-hover:flex"
            >
              <div
                className={`relative flex w-[80px] items-center rounded-[3px] bg-gray-200 p-[6px] text-primary`}
              >
                <div className="text-[12px] font-semibold capitalize leading-none">
                  {link.name}
                </div>

                <div
                  className="absolute -right-2 border-y-[6px] border-l-8 border-r-0 border-solid border-y-transparent border-l-gray-200"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
