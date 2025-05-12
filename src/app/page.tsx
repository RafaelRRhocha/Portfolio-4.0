'use client';

import { motion } from 'framer-motion';

import DownloadCV from '@/components/DownloadCV';
import { fadeIn } from '@/helpers/variants';

import Avatar from '../components/Avatar';
import GoToProjectsPage from '../components/GoToProjectsPage';
import SimpleParticles from '../components/SimpleParticles';

const Home = () => {
  return (
    <div className="h-full bg-primary/60">
      <div className="size-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto flex h-full flex-col justify-center text-center xl:pt-40 xl:text-left">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Desenvolvedor <span className="text-accent">Full Stack</span> <br />
            {/* Simples, Objetivo e Moderno */}
            <span className="text-xl md:text-5xl">
              Simples, Objetivo e Moderno
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
          >
            Soluções fullstack com design moderno e performance. Crio interfaces
            responsivas e intuitivas que refletem a identidade da sua empresa,
            junto a um backend sólido, seguro e eficiente. Código limpo, bem
            estruturado e foco em entregas de qualidade, sempre em colaboração
            com a equipe.
          </motion.p>

          <div className="relative flex items-center justify-center gap-x-2 xl:hidden">
            <DownloadCV />
            <GoToProjectsPage />
          </div>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden items-center gap-x-2 xl:flex"
          >
            <DownloadCV />
            <GoToProjectsPage />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 h-full w-[1280px]">
        <div
          role="img"
          className="xl:bg-explosion translate-z-0 absolute size-full bg-none mix-blend-color-dodge xl:bg-cover xl:bg-right xl:bg-no-repeat"
          aria-hidden
        />

        <SimpleParticles />

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
