'use client';

import { usePathname } from 'next/navigation';
import PillNav from '@/components/ui/pill-nav';

const navLinks = [
  { href: '/bi-platform', label: 'BI Platform' },
  { href: '/templates', label: 'Templates' },
  { href: '/rd-marketplace', label: 'R&D' },
  { href: '/solver-portal', label: 'Solvers' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-start px-4">
        <PillNav
          logoText="InnoGrid AI"
          items={navLinks}
          activeHref={pathname}
          baseColor="hsl(var(--primary))"
          pillColor="hsl(var(--background))"
          hoveredPillTextColor="hsl(var(--primary-foreground))"
          pillTextColor="hsl(var(--primary))"
        />
      </div>
    </header>
  );
}
