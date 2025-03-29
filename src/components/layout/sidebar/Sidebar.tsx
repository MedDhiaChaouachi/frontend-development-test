"use client";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

interface NavButtonProps {
  href: string;
  icon: string;
  label: string;
  badge?: boolean;
  isActive: boolean;
  isSpecial?: boolean;
}

const NavButton = ({
  href,
  icon,
  label,
  badge,
  isActive,
  isSpecial = false,
}: NavButtonProps) => (
  <div className={styles.navButtonContainer}>
    <a
      href={href}
      className={`
        ${styles.navButton} 
        ${isSpecial ? styles.special : ""}
        ${isActive ? styles.active : ""}
      `}
    >
      <img
        src={`/icons/${icon}`}
        alt={label}
        className={styles.icon}
        width={24}
        height={24}
        loading="lazy"
      />
      {badge && (
        <img
          src="/icons/badge.svg"
          alt="Badge"
          className={styles.badge}
          width={16}
          height={16}
        />
      )}
    </a>
  </div>
);

export const Sidebar = () => {
  const pathname = usePathname();

  const mainNavItems = [
    { label: "Home", href: "/", icon: "ic-outline-home.svg" },
    {
      label: "Send",
      href: "/send-2",
      icon: "ic-filled-send-2.svg",
      badge: true,
      isSpecial: true,
    },
    {
      label: "Hierarchy",
      href: "/hierarchy",
      icon: "ic-outline-hierarchy.svg",
    },
    {
      label: "Users",
      href: "/users-group",
      icon: "ic-outline-users-group.svg",
    },
    { label: "3D Cube", href: "/3dcube", icon: "ic-outline-3dcube.svg" },
    { label: "Button", href: "/button", icon: "ic-outline-activity.svg" },
  ];

  const secondaryNavItems = [
    { label: "Settings", href: "/settings", icon: "ic-outline-direct.svg" },
    { label: "Help", href: "/help", icon: "ic-outline-data.svg" },
    { label: "Logout", href: "/logout", icon: "ic-outline-setting-2.svg" },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Company Logo */}
      <div className={styles.logoContainer}>
        <img
          src="/logo.svg"
          alt="Company Logo"
          className={styles.logo}
          width={24}
          height={24}
          loading="lazy"
        />
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>
        {mainNavItems.map((item) => (
          <NavButton
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Secondary Navigation */}
      <nav className={styles.secondaryNav}>
        {secondaryNavItems.map((item) => (
          <NavButton
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
};
