import Link from "next/link";
import Image from "next/image";
import {
  Accessibility,
  ArrowRight,
  Ear,
  Eye,
  Heart,
  History,
  MessageCircleHeart,
  Sparkles,
  Target,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    title: "Sign Language & Hearing Support",
    description:
      "Deaf and hard-of-hearing children learn Thai Sign Language alongside their families, so conversations at the dinner table finally include everyone.",
    icon: Ear,
    color: "text-star-blue",
    bg: "bg-blue-50/40",
    ring: "ring-star-blue/20",
    bar: "bg-star-blue",
  },
  {
    title: "Physical Therapy & Mobility",
    description:
      "From first steps in a walker to confident independence, our therapists build strength, balance and freedom one patient session at a time.",
    icon: Accessibility,
    color: "text-star-green",
    bg: "bg-emerald-50/40",
    ring: "ring-star-green/20",
    bar: "bg-star-green",
  },
  {
    title: "Speech & Communication Therapy",
    description:
      "Whether through spoken words, picture boards or assistive devices, every child deserves a voice — and to be heard when they use it.",
    icon: MessageCircleHeart,
    color: "text-star-red",
    bg: "bg-rose-50/40",
    ring: "ring-star-red/20",
    bar: "bg-star-red",
  },
  {
    title: "Sensory & Visual Learning",
    description:
      "Calm sensory rooms, tactile materials and braille-ready classrooms help children with visual and sensory needs explore the world safely.",
    icon: Eye,
    color: "text-star-yellow",
    bg: "bg-amber-50/40",
    ring: "ring-star-yellow/30",
    bar: "bg-star-yellow",
  },
];

const stats = [
  { value: "120+", label: "children supported each year" },
  { value: "14", label: "teachers & therapists" },
  { value: "100%", label: "free of charge for families" },
  { value: "9", label: "years of care" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-50/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-50/70 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <Reveal>
            <span className="section-eyebrow">A charity school with heart</span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Unlocking Bright Futures for{" "}
              <span className="bg-gradient-to-r from-star-blue via-star-green to-star-red bg-clip-text text-transparent">
                Every Child
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Star Flower Centre is a safe, joyful place where children with special education needs are
              understood, celebrated and equipped for life. With sign language, therapy and patient teaching —
              all completely free for families — we help each child bloom in their own way and in their own
              time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/donate" className="btn-primary">
                <Heart className="h-4 w-4" aria-hidden="true" />
                Support Our Mission
              </Link>
              <Link href="/activities" className="btn-outline">
                Learn About Our Programs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-extrabold text-slate-900">{s.value}</dt>
                  <dd className="text-xs font-medium text-slate-500">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-star-blue/15 via-star-yellow/15 to-star-red/15 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-[2.5rem] bg-white p-6 shadow-soft ring-1 ring-slate-100">
                <Image
                  src="/logo.jpg"
                  alt="Star Flower Centre Logo"
                  width={180}
                  height={180}
                  className="h-64 w-64 rounded-[2rem] object-cover sm:h-80 sm:w-80"
                  priority
                />
                <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700">
                  <Sparkles className="h-4 w-4 text-star-yellow" aria-hidden="true" />
                  Every child can shine
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="container-x py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">The 4 Pillars of Care</span>
          <h2 className="section-title">Whole-child support, in four colours</h2>
          <p className="mt-4 text-slate-600">
            Each petal of our logo represents a promise we make to the children we serve. Together they form a
            circle of care around every child and their family.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className={`card h-full ring-1 ${p.ring} ${p.bg} transition-transform hover:-translate-y-1`}>
                <div className={`h-1.5 w-12 rounded-full ${p.bar}`} aria-hidden="true" />
                <p.icon className={`mt-6 h-10 w-10 ${p.color}`} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission snapshot */}
      <section className="bg-emerald-50/40 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Mission Snapshot</span>
            <h2 className="section-title">Where we came from, where we are going</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="card h-full">
                <History className="h-8 w-8 text-star-blue" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Our History</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Star Flower Centre began in 2017 with three volunteers, a borrowed classroom and a
                  handful of children whose local schools could not meet their needs. Word spread quietly
                  among families — and the little classroom grew into a full centre.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="card h-full">
                <Target className="h-8 w-8 text-star-green" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  A community where disability is never a reason to be left out. We work toward a future in
                  which every child with special needs has access to education, therapy and dignity — and
                  every family has a place to turn.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="card h-full">
                <Sparkles className="h-8 w-8 text-star-yellow" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">Our Impact</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                  <li>• 38 children have said their first words with our speech therapists.</li>
                  <li>• 22 families now use sign language at home together.</li>
                  <li>• 15 graduates have moved into mainstream or vocational classrooms.</li>
                  <li>• Over 4,000 free therapy hours delivered last year.</li>
                </ul>
              </article>
            </Reveal>
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/about" className="btn-outline">
              Read our full story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-star-blue px-8 py-14 text-center text-white shadow-soft sm:px-16">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
            <h2 className="relative text-3xl font-extrabold sm:text-4xl">Your kindness becomes a child&apos;s tomorrow</h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-blue-50">
              Every baht funds therapy sessions, learning materials and warm meals. Scan a PromptPay QR in
              seconds, give internationally by card, or buy a handmade craft from our students.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/donate" className="btn bg-white text-star-blue hover:bg-blue-50">
                <Heart className="h-4 w-4" aria-hidden="true" />
                Donate Now
              </Link>
              <Link href="/about#volunteer" className="btn border-2 border-white/70 text-white hover:bg-white/10">
                Volunteer With Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
