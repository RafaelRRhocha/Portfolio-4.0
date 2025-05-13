import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface NotificationProps {
  message: string;
  color: string;
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ message, color, onClose }) => {
  const [progress, setProgress] = useState(100);
  const TIMEOUT_DURATION = 3000;

  useEffect(() => {
    if (!message) return;

    let startTime: number;
    let animationFrameId: number;

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.max(0, 100 - (elapsed / TIMEOUT_DURATION) * 100);

      setProgress(newProgress);

      if (newProgress > 0) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    const timeout = setTimeout(() => {
      onClose();
    }, TIMEOUT_DURATION);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [message]);

  const notificationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const colorClasses = {
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-600',
    blue: 'bg-blue-600',
  };

  const progressColorClasses = {
    green: 'bg-green-400',
    red: 'bg-red-400',
    yellow: 'bg-yellow-400',
    blue: 'bg-blue-400',
  };

  const iconByColor = {
    green: '✓',
    red: '✕',
    yellow: '⚠',
    blue: 'ℹ',
  };

  const bgColorClass =
    colorClasses[color as keyof typeof colorClasses] || 'bg-gray-600';
  const progressColorClass =
    progressColorClasses[color as keyof typeof progressColorClasses] ||
    'bg-gray-400';
  const icon = iconByColor[color as keyof typeof iconByColor] || 'ℹ';

  return (
    <AnimatePresence>
      {message && (
        <div className="fixed inset-x-0 bottom-0 z-50 mb-7 flex justify-center">
          <motion.div
            className={`${bgColorClass} min-w-[280px] max-w-[400px] rounded-md shadow-lg transition-all hover:shadow-xl`}
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 p-4">
              <div className="flex size-6 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                {icon}
              </div>
              <span className="flex-1">{message}</span>
              <button
                onClick={onClose}
                className="flex size-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white transition-all hover:bg-white/30"
                aria-label="Fechar notificação"
              >
                ✕
              </button>
            </div>

            <motion.div
              className={`h-1 ${progressColorClass}`}
              initial={{ width: '100%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
