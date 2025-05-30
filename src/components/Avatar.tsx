import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="2xl:flex 2xl:max-w-none pointer-events-none hidden select-none">
      <Image
        src="/images/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 size-full"
      />
    </div>
  );
};

export default Avatar;
