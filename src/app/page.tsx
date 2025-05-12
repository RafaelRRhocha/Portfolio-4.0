'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/helpers/variants';

import Avatar from './components/Avatar';
import ProjectsBtn from './components/ProjectsBtn';
import SimpleParticles from './components/SimpleParticles';

const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      {/* text */}
      <div className="size-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Desenvolvedor <span className="text-accent">Full Stack</span> <br />
            Simples, Objetivo
            <br /> e Moderno
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
            exercitationem harum, quia nulla temporibus deleniti libero veniam
            vero beatae numquam ducimus illum ab similique ipsam tempore fugit
            quod laudantium debitis.
          </motion.p>

          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="absolute bottom-0 right-0 h-full w-[1280px]">
        {/* bg img */}
        <div
          role="img"
          className="xl:bg-explosion translate-z-0 absolute size-full bg-none mix-blend-color-dodge xl:bg-cover xl:bg-right xl:bg-no-repeat"
          aria-hidden
        />

        {/* particles */}
        <SimpleParticles />

        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute -bottom-32 size-full max-h-[678px] max-w-[737px] lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
