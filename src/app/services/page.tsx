'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { fadeIn } from '@/helpers/variants';

import ServiceSlider from '../../components/ServiceSlider';

const Services = () => {
  const { t } = useTranslation('common');

  return (
    <div className="flex h-full items-center bg-primary/30 py-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          <div className="mb-4 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              {t('services.title')} <span className="text-accent">faço?</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] text-sm md:text-base lg:mx-0"
            >
              {t('services.description')}
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
