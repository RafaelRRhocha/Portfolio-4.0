'use client';

import { motion } from 'framer-motion';

import DownloadCV from '@/components/DownloadCV';
import { fadeIn } from '@/helpers/variants';

import Avatar from '../components/Avatar';
import GoToProjectsPage from '../components/GoToProjectsPage';

const Home = () => {
  return (
    <div className="h-full">
      <div className="size-full">
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

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex items-center gap-x-2"
          >
            <DownloadCV />
            <GoToProjectsPage />
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute -bottom-32 hidden size-full max-h-[678px] max-w-[737px] md:block lg:bottom-0 lg:right-[8%]"
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;
