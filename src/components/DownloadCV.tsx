'use client';

import { useTranslation } from 'react-i18next';

import Button from './Button';

const DownloadCV = () => {
  const { t, i18n } = useTranslation('common');

  const cvLink =
    i18n.language === 'en'
      ? 'https://drive.google.com/file/d/10dxOthBwROZ_0XTk-75fD_jsV0quZvsS/view?usp=sharing'
      : 'https://drive.google.com/file/d/1UFCZIQ-dimd7R4syd48rkE8G9HEJbLVd/view?usp=sharing';

  return <Button href={cvLink} text={t('home.cv')} isExternal />;
};

export default DownloadCV;
