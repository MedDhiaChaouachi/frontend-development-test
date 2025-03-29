// src/types/layout-types.ts
export interface SidebarNavItem {
    icon: React.ReactNode;
    label: string;
    href: string;
  }
  
  export const SidebarNavItems: SidebarNavItem[] = [
    { icon: '🏠', label: 'Home', href: '/' },
    { icon: '📊', label: 'Dashboard', href: '/dashboard' },
    // Add your other 7 items here
    { icon: '✉️', label: 'Messages', href: '/messages' },
    { icon: '📦', label: 'Products', href: '/products' },
    { icon: '📝', label: 'Campaigns', href: '/campaigns' },
    { icon: '👥', label: 'Team', href: '/team' },
    { icon: '⚙️', label: 'Settings', href: '/settings' },
    { icon: '🛟', label: 'Support', href: '/support' },
    { icon: '🚪', label: 'Logout', href: '/logout' },
  ];