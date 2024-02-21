import Image from 'next/image';

const Logo = ({ className = '', alt = 'Logo', ...props }) => {
  return (
    <Image
      src="/assets/images/logo.svg"
      className={`logo  w-[180px] lg:w-auto ${className}`}
      alt={alt}
      {...props}
      height={140}
      width={213}
    />
  );
};

export default Logo;
