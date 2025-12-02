'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
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
    <header className="sticky top-0 z-50 w-full border-b bg-slate-900">
      <div className="container flex h-20 items-center">
        <PillNav
          logoText="Novexa"
          items={navLinks}
          activeHref={pathname}
          baseColor="hsl(var(--primary))"
          pillColor="hsl(var(--muted))"
          hoveredPillTextColor="#000000"
          pillTextColor="#000000"
        />

        <div className="ml-auto hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-white hover:bg-slate-800 hover:text-white" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
