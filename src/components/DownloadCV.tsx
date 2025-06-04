'use client';

import { useTranslation } from 'react-i18next';

import Button from './Button';

const DownloadCV = () => {
  const { t } = useTranslation('common');

  return (
    <Button
      href="https://drive.google.com/file/d/1UFCZIQ-dimd7R4syd48rkE8G9HEJbLVd/view?usp=sharing"
      text={t('home.cv')}
      isExternal
    />
  );
};

export default DownloadCV;
