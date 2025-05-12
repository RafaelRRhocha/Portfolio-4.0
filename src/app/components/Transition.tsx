import { motion } from 'framer-motion';

const Transition = () => {
  const transitionVariants = {
    initial: {
      x: '100%',
      width: '100%',
    },
    animate: {
      x: '0%',
      width: '0%',
    },
    exit: {
      x: ['0%', '100%'],
      width: ['0%', '100%'],
    },
  };

  return (
    <>
      <motion.div
        role="status"
        className="fixed inset-y-0 right-full z-30 h-screen w-screen bg-[#0f1015]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        role="status"
        className="fixed inset-y-0 right-full z-20 h-screen w-screen bg-[#161923]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        role="status"
        className="fixed inset-y-0 right-full z-10 h-screen w-screen bg-[#1d2232]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
        aria-hidden
      />
    </>
  );
};

export default Transition;
