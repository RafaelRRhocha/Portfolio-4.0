'use client';

import { useTranslation } from 'react-i18next';
import { RxDesktop, RxPencil2, RxRocket } from 'react-icons/rx';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

interface IService {
  Icon: React.ElementType;
  title: string;
  description: string;
  translationKey: string;
}

const ServiceSlider = () => {
  const { t } = useTranslation('common');

  const serviceData: Array<IService> = [
    {
      Icon: RxPencil2,
      title: t('services.items.design.title'),
      description: t('services.items.design.description'),
      translationKey: 'design',
    },
    {
      Icon: RxDesktop,
      title: t('services.items.development.title'),
      description: t('services.items.development.description'),
      translationKey: 'development',
    },
    {
      Icon: RxRocket,
      title: t('services.items.seo.title'),
      description: t('services.items.seo.description'),
      translationKey: 'seo',
    },
  ];

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
          <div className="group flex h-max min-h-64 gap-x-6 rounded-lg bg-[rgba(65,47,123,0.15)] px-6 py-8 transition-all duration-300 hover:bg-[rgba(89,65,169,0.15)] sm:flex-col sm:gap-x-0">
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
