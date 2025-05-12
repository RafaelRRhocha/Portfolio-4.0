import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="pointer-events-none hidden select-none xl:flex xl:max-w-none">
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
