// components/Badge.tsx
"use client";

interface BadgeProps {
  count?: number;
}

export const Badge = ({ count }: BadgeProps) => (
  <svg
    className="absolute top-0 right-0"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8"
      cy="8"
      r="7"
      fill="#EF4444"
      stroke="#E1E2E8"
      strokeWidth="2"
    />
    {count && (
      <text
        x="8"
        y="11"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        {count}
      </text>
    )}
  </svg>
);
