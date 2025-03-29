import Image, { StaticImageData } from "next/image";
import React from "react";

interface LogoProps {
  src: string | StaticImageData;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  src,
  width = 120,
  height = 40,
  alt,
  className = "",
}) => {
  return (
    <div className={`p-4 ${className}`}>
      <Image src={src} width={width} height={height} alt={alt} priority />
    </div>
  );
};

export default Logo;
