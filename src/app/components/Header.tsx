import Link from 'next/link';

import Socials from './Socials';

import '../../styles/planet.css';

const Header = () => {
  return (
    <header className="xl-px-0 absolute z-30 w-full items-center px-16 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 py-8 lg:flex-row">
          <Link href="/">
            <div className="mt-2 flex items-center">
              <div className="hidden md:flex">
                <div className="spinner-box">
                  <div className="blue-orbit leo"></div>
                  <div className="green-orbit leo"></div>
                  <div className="red-orbit leo"></div>
                  <div className="white-orbit w1 leo"></div>
                  <div className="white-orbit w2 leo"></div>
                  <div className="white-orbit w3 leo"></div>
                </div>
              </div>
              <div className="text-3xl text-white">
                Rafael <span className="font-bold">Rocha</span>
              </div>
            </div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
