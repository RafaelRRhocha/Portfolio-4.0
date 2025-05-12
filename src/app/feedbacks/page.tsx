'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/helpers/variants';

import FeedbacksSlider from '../../components/FeedbacksSlider';

const Feedbacks = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto flex h-full flex-col justify-center">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          O que as <span className="text-accent">pessoas</span> dizem
        </motion.h2>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <FeedbacksSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Feedbacks;
