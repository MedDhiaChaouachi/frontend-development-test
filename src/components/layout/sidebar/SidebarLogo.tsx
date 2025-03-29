import Image from "next/image";

export const SidebarLogo = () => (
  <div className="p-4 border-b">
    <Image
      src="/logo.svg"
      alt="Company Logo"
      width={160}
      height={40}
      priority
    />
  </div>
);
