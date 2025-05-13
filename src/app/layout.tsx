'use client';

import { Sora } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SimpleParticles from '../components/SimpleParticles';
import Transition from '../components/Transition';

import '../styles/globals.css';

// setup font
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Rafael Rocha | Portfolio</title>
        <meta
          name="description"
          content="Rafael Rocha é um desenvolvedor full stack, simples, objetivo e moderno"
        />
        <meta
          name="keywords"
          content="developer, freelancer, react, next, nextjs, html, css, javascript, typescript, ts, js, modern-ui, modern-ux, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Rafael Rocha" />
        <meta name="theme-color" content="#FF4A70" />

        <meta property="og:title" content="Rafael Rocha" />
        <meta
          property="og:description"
          content="Rafael Rocha é um desenvolvedor full stack, simples, objetivo e moderno"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/99758843?v=4"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`page overflow-x-hidden overflow-y-scroll bg-[#1d2232] bg-gradient-to-r from-primary/10 to-black/10 text-white md:overflow-hidden ${sora.variable} relative font-sora`}
      >
        <SimpleParticles />
        <NavBar />
        <Header />

        <AnimatePresence mode="wait">
          <motion.div className="h-full">
            <Transition />
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
