import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-100 bg-blue-50/40">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Star Flower Centre Logo"
              width={180}
              height={180}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-extrabold text-slate-900">{site.name}</p>
              <p className="text-xs font-medium text-slate-500">Special Education Needs</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
            Our mission is simple and unwavering: every child, whatever their abilities, deserves a place
            where they are understood, celebrated, and given the tools to grow. We provide free, holistic
            special education and therapy so that no family has to face this journey alone.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-600 hover:text-star-blue">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className="font-semibold text-star-red hover:underline">
                Support Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-star-blue" aria-hidden="true" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.country}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-star-green" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-star-blue">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-star-red" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-star-blue">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 flex-none text-star-yellow" aria-hidden="true" />
              <span>Mon – Fri, 08:00 – 16:30</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <p>Registered charity school · Made with care in Thailand</p>
        </div>
      </div>
    </footer>
  );
}
