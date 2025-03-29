// src/components/ui/Logo.tsx
import Image, { ImageProps } from "next/image";
import React from "react";

interface LogoProps extends ImageProps {
  // Include all ImageProps
  darkModeSrc?: string;
}

const Logo = ({ src, alt = "Company Logo", ...props }: LogoProps) => (
  <div className="relative">
    <Image src={src} alt={alt} {...props} />
  </div>
);

export default Logo;
