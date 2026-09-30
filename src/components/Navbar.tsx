"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpg"
            alt="Star Flower Centre Logo"
            width={180}
            height={180}
            className="h-14 w-14 rounded-full object-cover"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-lg font-extrabold text-slate-900">{site.name}</span>
            <span className="text-xs font-medium text-slate-500">Special Education Needs</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-blue-50 text-star-blue"
                      : "text-slate-600 hover:bg-slate-50 hover:text-star-blue"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/donate" className="btn-accent hidden sm:inline-flex">
            <Heart className="h-4 w-4" aria-hidden="true" />
            Support Us
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                    pathname === link.href ? "bg-blue-50 text-star-blue" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/donate" onClick={() => setOpen(false)} className="btn-accent w-full">
                <Heart className="h-4 w-4" aria-hidden="true" />
                Support Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
