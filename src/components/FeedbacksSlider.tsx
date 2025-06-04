'use client';

import { useTranslation } from 'react-i18next';
import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ITestimonial {
  message: string;
}

const FeedbacksSlider = () => {
  const { t } = useTranslation('common');

  const testimonialData = t('feedbacks.testimonials', {
    returnObjects: true,
  }) as Array<ITestimonial>;

  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mb-14 h-[400px]"
    >
      {testimonialData.map((person: ITestimonial, i: number) => (
        <SwiperSlide key={i}>
          <div className="flex h-full flex-col items-center gap-x-8 px-4 sm:px-8 md:flex-row md:px-16">
            <div className="flex h-full flex-1 flex-col justify-center overflow-y-auto px-2 sm:px-5">
              <div className="mb-4">
                <FaQuoteLeft className="mx-auto text-4xl text-white/20 md:mx-0 xl:text-6xl" />
              </div>

              <div className="max-h-[250px] overflow-y-auto px-3 pb-10 text-center text-sm md:pb-0 md:text-left xl:text-lg">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedbacksSlider;
