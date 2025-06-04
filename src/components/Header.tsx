import Link from 'next/link';

import LanguageSwitcher from './LanguageSwitcher';
import Socials from './Socials';

import '../styles/planet.css';

const Header = () => {
  return (
    <header className="xl-px-0 absolute z-30 mb-5 w-full items-center px-0 md:px-16 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-y-6 py-8 lg:flex-row">
          <Link href="/" className="flex">
            <div className="spinner-box mt-3 hidden md:flex">
              <div className="blue-orbit leo"></div>
              <div className="green-orbit leo"></div>
              <div className="red-orbit leo"></div>
              <div className="white-orbit w1 leo"></div>
              <div className="white-orbit w2 leo"></div>
              <div className="white-orbit w3 leo"></div>
            </div>

            <div className="text-3xl text-white">
              Rafael <span className="font-bold text-accent">Rocha</span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
