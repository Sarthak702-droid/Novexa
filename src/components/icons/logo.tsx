import { cn } from '@/lib/utils';
import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-foreground', className)}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Novexa Logo"
    >
      <rect width="40" height="40" rx="8" fill="transparent" />
      <g fill="currentColor">
        <rect x="10" y="10" width="4" height="4" rx="1" />
        <rect x="18" y="10" width="4" height="4" rx="1" />
        <rect x="26" y="10" width="4" height="4" rx="1" />
        <rect x="10" y="18" width="4" height="4" rx="1" />
        <rect
          x="18"
          y="18"
          width="4"
          height="4"
          rx="1"
          className="text-primary"
        />
        <rect x="26" y="18" width="4" height="4" rx="1" />
        <rect x="10" y="26" width="4" height="4" rx="1" />
        <rect x="18" y="26" width="4" height="4" rx="1" />
        <rect x="26" y="26" width="4" height="4" rx="1" />
      </g>
    </svg>
  );
}
