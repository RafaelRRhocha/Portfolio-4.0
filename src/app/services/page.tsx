'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/helpers/variants';

import ServiceSlider from '../../components/ServiceSlider';

const Services = () => {
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
              O que eu <span className="text-accent">faço?</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] text-sm md:text-base lg:mx-0"
            >
              Transformo ideias em produtos digitais completos. Com foco em
              front-end, construo interfaces modernas e responsivas, apoiadas
              por um back-end sólido e bem estruturado.
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
