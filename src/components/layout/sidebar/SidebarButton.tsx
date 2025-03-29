import Link from "next/link";
import { SidebarNavItem } from "@/types/layout-types";

type SidebarButtonProps = {
  item: SidebarNavItem;
  isActive: boolean;
};

export const SidebarButton = ({ item, isActive }: SidebarButtonProps) => {
  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="text-xl">{item.icon}</span>
      <span className="font-medium">{item.label}</span>
    </Link>
  );
};
