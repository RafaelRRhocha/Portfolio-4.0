'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Notification from '@/components/Notification';
import { fadeIn } from '@/helpers/variants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation('common');
  const [isLoading, setIsLoading] = useState(false);
  const [notificationInfos, setNotificationInfos] = useState({
    text: '',
    color: '',
  });

  const handleNotification = (show: boolean, text: string, color: string) => {
    setNotificationInfos({
      text: show ? text : '',
      color,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target as HTMLFormElement;

    try {
      const formData = await emailjs.sendForm(
        process.env.EMAIL_SERVICE_ID || '',
        process.env.EMAIL_TEMPLATE_ID || '',
        myForm,
        process.env.EMAIL_PUBLIC_KEY || '',
      );

      if (formData.status === 200) {
        handleNotification(true, t('contact.notification.success'), 'green');
        myForm.reset();
      } else {
        throw new Error(`An error ocurred => ${formData}`);
      }
    } catch (error) {
      handleNotification(true, t('contact.notification.error'), 'red');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
        <div className="flex w-full max-w-[700px] flex-col">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-12 text-center"
          >
            {t('contact.title')}{' '}
            <span className="text-accent">{t('contact.secondTitle')}</span>
          </motion.h2>

          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto flex w-full flex-1 flex-col gap-6"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            <div className="flex w-full gap-x-6">
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <textarea
              name="message"
              placeholder={t('contact.form.message')}
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />

            <button
              type="submit"
              className="btn group flex max-w-[170px] items-center justify-center rounded-full border border-white/50 px-8 transition-all duration-300 hover:border-accent hover:text-accent"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span>{t('contact.form.send')}</span>
            </button>
          </motion.form>

          <Notification
            message={notificationInfos.text}
            color={notificationInfos.color}
            onClose={() => handleNotification(false, '', '')}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
