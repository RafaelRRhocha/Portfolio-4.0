'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCss3, FaHtml5, FaNodeJs, FaPython, FaVuejs } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
  SiCypress,
  SiExpress,
  SiJest,
  SiJquery,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiRuby,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { fadeIn } from '@/helpers/variants';

import Avatar from '../../components/Avatar';

interface ISkill {
  name: string;
  icon: IconType;
  ref: string;
}

interface IInfo {
  title: string;
  stage?: string;
  skills?: Array<ISkill>;
}

interface IAbout {
  title: string;
  info: Array<IInfo>;
}

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front-end',
        skills: [
          {
            name: 'HTML',
            icon: FaHtml5,
            ref: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
          },
          {
            name: 'CSS',
            icon: FaCss3,
            ref: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
          },
          {
            name: 'jQuery',
            icon: SiJquery,
            ref: 'https://jquery.com',
          },
          {
            name: 'TypeScript',
            icon: SiTypescript,
            ref: 'https://www.typescriptlang.org',
          },
          {
            name: 'Vue.js',
            icon: FaVuejs,
            ref: 'https://vuejs.org',
          },
          {
            name: 'Next.js',
            icon: SiNextdotjs,
            ref: 'https://nextjs.org/',
          },
          {
            name: 'Tailwind',
            icon: SiTailwindcss,
            ref: 'https://tailwindcss.com/docs/installation',
          },
        ],
      },
      {
        title: 'Back-end',
        skills: [
          {
            name: 'Node.js',
            icon: FaNodeJs,
            ref: 'https://nodejs.org/en',
          },
          {
            name: 'Express.js',
            icon: SiExpress,
            ref: 'https://expressjs.com/pt-br/',
          },
          {
            name: 'Ruby',
            icon: SiRuby,
            ref: 'https://www.ruby-lang.org/en/',
          },
          {
            name: 'Python',
            icon: FaPython,
            ref: 'https://www.python.org',
          },
        ],
      },
      {
        title: 'Banco de Dados',
        skills: [
          {
            name: 'MySQL',
            icon: SiMysql,
            ref: 'https://www.mysql.com/',
          },
          {
            name: 'PostgreSQL',
            icon: SiPostgresql,
            ref: 'https://www.postgresql.org',
          },
          {
            name: 'Redis',
            icon: SiRedis,
            ref: 'https://redis.io',
          },
        ],
      },
      {
        title: 'Testes',
        skills: [
          {
            name: 'Cypress',
            icon: SiCypress,
            ref: 'https://www.cypress.io',
          },
          {
            name: 'Jest',
            icon: SiJest,
            ref: 'https://jestjs.io',
          },
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
] as Array<IAbout>;

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="absolute bottom-0 left-[calc(-330px)] hidden xl:flex"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Código <span className="text-accent">limpo</span> começa com clareza
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-6 max-w-[500px] px-2 xl:mx-0 xl:mb-12 xl:px-0"
          >
            Já colaborei com grandes nomes da moda, como Reserva, Malwee, Grupo
            Colméia, Grupo Soma, Vivara, NTK, Grupo Laces, entre outros. Busco
            sempre entregar soluções eficientes e inovadoras, com foco em
            qualidade e desempenho. Gosto de desafios que me permitam crescer
            profissionalmente e contribuir com projetos de impacto.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-[480px] w-full flex-col xl:max-w-[48%]"
        >
          <div className="mx-auto mb-4 flex gap-x-4 xl:mx-0 xl:gap-x-8">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  'text-accent after:w-full after:bg-accent after:transition-all after:duration-300'
                } relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center py-2 xl:items-start xl:py-6">
            {aboutData[index].info.map((item, idx) => (
              <div key={idx} className="mb-6 w-full">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                {item.stage && (
                  <p className="text-sm text-white/80">{item.stage}</p>
                )}
                {item.skills && (
                  <div className="flex flex-wrap items-center gap-4">
                    {item.skills.map((skill, skillIdx) => {
                      const Icon = skill.icon;
                      return (
                        <a
                          key={skillIdx}
                          href={skill.ref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center"
                          title={skill.name}
                        >
                          <div className="flex size-8 items-center justify-center rounded-lg bg-white/10 p-2 text-3xl text-accent transition-all duration-300 hover:bg-white/20 hover:text-accent/80">
                            <Icon />
                          </div>
                          <span className="mt-2 text-sm text-white/80">
                            {skill.name}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
