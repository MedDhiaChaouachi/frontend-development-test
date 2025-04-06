// components/icons.tsx
import { SVGProps } from "react";

export const DashboardIcon = ({
  active,
  ...props
}: { active: boolean } & SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={active ? "#FFFFFF" : "#64748B"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3 3h18v18H3V3zm6 6H5v8h4V9zm10 0h-4v8h4V9zm-6 0h-4v8h4V9z" />
  </svg>
);
