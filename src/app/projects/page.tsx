'use client';

import { motion } from 'framer-motion';

import ProjectSlider from '@/components/ProjectSlider';
import { fadeIn } from '@/helpers/variants';

const Projects = () => {
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
              className="h2 xl:mt-12"
            >
              Meus <span className="text-accent">Projetos</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] text-sm md:text-base lg:mx-0"
            >
              Aqui estão alguns dos meus projetos, feitos a partir de 2022,
              estarei atualizando conforme for realizando novos projetos que
              tenho permissão para compartilhar.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[60%]"
          >
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
