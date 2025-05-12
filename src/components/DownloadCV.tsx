import { motion } from 'framer-motion';

const DownloadCV = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <a
        href="https://drive.google.com/file/d/1bo4VJgZ2iOtuQrUr5r4g8F5yD3NImHzo/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer"
      >
        <motion.div
          className="group relative flex h-[45px] w-[160px] items-center justify-center overflow-hidden rounded-lg border border-cyan-500/30 bg-gradient-to-r from-black/50 to-black/30 px-6 backdrop-blur-sm"
          whileHover="hover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          variants={{
            hover: {
              scale: 1.02,
              transition: { duration: 0.2 },
            },
          }}
        >
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'linear',
            }}
          />

          <div className="absolute -left-2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute -right-2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />

          <span className="relative z-10 text-sm font-light uppercase tracking-[0.2em] text-cyan-50">
            Currículo
          </span>

          <motion.div
            className="absolute inset-0 bg-cyan-500/5"
            variants={{
              hover: {
                opacity: 1,
                transition: { duration: 0.2 },
              },
            }}
            initial={{ opacity: 0 }}
          />
        </motion.div>
      </a>
    </div>
  );
};

export default DownloadCV;
