'use client';

import { RxDesktop, RxPencil2 } from 'react-icons/rx';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface IService {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const serviceData: Array<IService> = [
  {
    Icon: RxPencil2,
    title: 'Design',
    description:
      'O melhor design elegante e responsivo que fala a linguagem da sua empresa.',
  },
  {
    Icon: RxDesktop,
    title: 'Desenvolvimento',
    description:
      'Desenvolvimento de sites e aplicativos que são fáceis de usar, rápidos e eficientes.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="group flex h-max gap-x-6 rounded-lg bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)] sm:flex-col sm:gap-x-0">
            <div className="mb-4 text-4xl text-accent">
              <item.Icon aria-hidden />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
