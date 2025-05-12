import Link from 'next/link';
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';

export const socialData = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/rafaelrhocha',
    Icon: RiInstagramLine,
  },
  {
    name: 'Github',
    link: 'https://www.linkedin.com/in/rafael-rhocha',
    Icon: RiGithubLine,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/rafael-rocha-b20000200/',
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="transition-all duration-300 hover:text-accent"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
