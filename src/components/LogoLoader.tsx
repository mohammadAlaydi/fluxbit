import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo.tsx';

const loaderVariants = {
  initial: { opacity: 1, scale: 1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
};

const logoVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } },
};

const LogoLoader = ({ show = true }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-dark-bg"
        variants={loaderVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={logoVariants}>
          <Logo size={80} />
        </motion.div>
        <motion.div variants={textVariants} className="mt-4">
          <span className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text tracking-widest select-none">
            Fluxbit
          </span>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default LogoLoader; 