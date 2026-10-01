import type { Metadata } from "next";
import {
  BookOpenCheck,
  Compass,
  Flower2,
  Handshake,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import VolunteerForm from "@/components/VolunteerForm";
import ScrollCue from "@/components/ScrollCue";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The history, vision, guiding principles and partners behind Star Flower Centre — a child-friendly school for migrant children with special educational needs in Mae Sot, Thailand.",
};

const principles = [
  {
    title: "Learning & Development",
    icon: BookOpenCheck,
    text: "Children with special educational needs require additional, consistent support to participate fully in their communities. We offer a broad, balanced, child-centred curriculum — social, emotional, physical and cognitive — with a strong focus on life-based health, safety and hygiene skills, and we work toward inclusion in mainstream education. We seek out marginalised, hard-to-reach children regardless of religion, language, ethnicity, gender or background, and we give children choices and a voice.",
    color: "text-star-blue",
    bg: "bg-blue-50/40",
  },
  {
    title: "Protection",
    icon: ShieldCheck,
    text: "Every child has the right to be protected from physical, emotional and sexual abuse. Our staff are trained to identify concerns and refer them appropriately. We work with parents to promote positive discipline as an alternative to corporal punishment, and we provide preventative healthcare, vaccinations and access to medical treatment.",
    color: "text-star-green",
    bg: "bg-emerald-50/40",
  },
  {
    title: "Parent, Caretaker & Community Involvement",
    icon: HeartHandshake,
    text: "Parents are a child's first and most important educators. Families are invited to trainings, open days and decision-making about their child's Individual Education Plan, and receive extra support through World Education and BMWEC community programmes — often the only social services available to migrant children with disabilities.",
    color: "text-star-red",
    bg: "bg-rose-50/40",
  },
  {
    title: "Professional Conduct",
    icon: Users,
    text: "We recruit on an equal-opportunity basis and hold every staff member to a clear code of conduct. Teachers receive ongoing coaching, training, mentoring and appraisal so the quality of care keeps rising.",
    color: "text-star-yellow",
    bg: "bg-amber-50/40",
  },
];

const goals = [
  {
    title: "Equal right to education",
    text: "A child with a disability has the same rights as any other child, especially the right to education. Children attend Monday to Friday and take part in shared activities — singing and music, play, shared meals, exercise and art — alongside one-to-one teaching guided by their Individual Education Plan.",
  },
  {
    title: "Inclusive education",
    text: "Where it benefits the child, students are enrolled concurrently at a local migrant learning centre with teacher-aide support. We also run school-based training so other centres can welcome children with special needs.",
  },
  {
    title: "Support and training for parents",
    text: "Quarterly parent trainings, consultation on IEPs and regular home visits show families how to support development at home — from adapting the environment for independent feeding to physiotherapy exercises and active play.",
  },
  {
    title: "Early intervention",
    text: "Our community liaison identifies children with disabilities in migrant communities. Teachers, trainers and the liaison then visit homes and invite caregivers and children to the Centre, so support begins as early as possible.",
  },
];

const partners = [
  {
    name: "BMWEC",
    full: "Burmese Migrant Workers' Education Committee",
    text: "A community-based organisation that has managed and led Star Flower Centre since 2015. BMWEC's advocacy helped Burmese migrant learning centres gain recognition from the Thai Ministry of Education, and our teachers hold MOE teacher cards.",
    tint: "blue",
  },
  {
    name: "VSO",
    full: "Voluntary Services Overseas",
    text: "An international development agency founded in 1958. Through its Education for All programme in Thailand, VSO co-founded the Centre and placed a volunteer special-needs adviser to train our first teachers.",
    tint: "green",
  },
  {
    name: "World Education",
    full: "World Education Thailand",
    text: "Co-founded the Centre and supported it through the SHIELD project, working with the Ministry of Education and community organisations to improve education for migrant children.",
    tint: "yellow",
  },
  {
    name: "SMRU",
    full: "Shoklo Malaria Research Unit",
    text: "Partners with the Centre on vaccination programmes and health care for our students.",
    tint: "red",
  },
] as const;

const admission = [
  { label: "Autism", note: "up to 18 years" },
  { label: "ADHD", note: "up to 16 years" },
  { label: "Cerebral Palsy", note: "up to 18 years; hemiplegia and diplegia" },
  { label: "Down Syndrome", note: "up to 18 years" },
  { label: "Learning Difficulties", note: "up to 18 years" },
];

const team = [
  {
    name: "Naw Thoo Mwe Paw",
    role: "Principal",
    note: "I want to support children with disabilities and help them build dignity, confidence and independence through education and care.",
    tint: "blue",
  },
  {
    name: "Saw Moo Kapaw Say Reh",
    role: "Curriculum Development Coordinator & Finance",
    note: "For the glory of God to be revealed through our work with children and families.",
    tint: "green",
  },
  {
    name: "Saw Ronal Soe",
    role: "Driver",
    note: "Caring for the least among us is caring for God.",
    tint: "red",
  },
  {
    name: "Saw Taw Nay Moo",
    role: "Teacher Assistant",
    note: "I am a former student of this school, and I am grateful to return and support the children here.",
    tint: "yellow",
  },
  {
    name: "Saw Poe Dah",
    role: "Teacher",
    note: "I chose to work with Star Flower School to support children with special needs and help them grow in confidence and skills.",
    tint: "blue",
  },
  {
    name: "Saw Hay Blut",
    role: "Teacher",
    note: "I am passionate about helping children and supporting their education and development.",
    tint: "green",
  },
  {
    name: "Naw April Paw",
    role: "Health Teacher (Focal)",
    note: "To love and care for children with special needs through systematic health record keeping, all for the glory of God.",
    tint: "yellow",
  },
  {
    name: "Chit Poe Pwint Phyu",
    role: "Teacher",
    note: "I want to better understand children with special needs, improve my skills and learn how to support them respectfully and effectively.",
    tint: "red",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="The only school of its kind on the Thai–Myanmar border"
        description="Star Flower Centre was created so that migrant children with disabilities in Mae Sot would no longer be left isolated at home. This is our history, our vision and the people who keep it alive."
      />

      {/* Story */}
      <section id="story" className="container-x scroll-mt-24 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="section-eyebrow">Introduction & Background</span>
            <h2 className="section-title">Opened in June 2009 for children who had nowhere to learn</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>
                Star Flower Centre (SFC) opened in June 2009 to serve migrant children with special educational
                needs in Mae Sot. It was established in partnership with Voluntary Services Overseas (VSO) and
                World Education (WE) Thailand, with the aim of maximising educational opportunities for migrant
                children with disabilities in the Mae Sot area.
              </p>
              <p>
                Before the Centre opened, these children were often isolated within migrant communities with no
                prospect of an education, while their parents struggled to care for them and earn a living at
                the same time. The first four teachers were trained from scratch in special educational needs
                and child-friendly teaching methods.
              </p>
              <p>
                The Centre follows UNICEF&apos;s rights-based, child-friendly school framework — a school that is
                inclusive, healthy and protective for all children, effective with children, and involved with
                families and communities. Since 2015 the Centre has been managed and led by the Burmese Migrant
                Workers&apos; Education Committee (BMWEC), and today it is the only school along the Thai–Myanmar
                border available to children with specialist needs from migrant communities.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ImagePlaceholder
              label="Photo: Star Flower Centre, Mae Sot"
              tint="blue"
              className="aspect-[4/3] w-full rounded-[2rem]"
            />
          </Reveal>
        </div>
        <ScrollCue to="vision" label="Our vision" className="mt-14" />
      </section>

      {/* Vision & Principles */}
      <section id="vision" className="scroll-mt-24 bg-blue-50/40 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Our Vision</span>
            <h2 className="section-title">Work, learn and play together</h2>
            <blockquote className="mt-5 space-y-3 text-lg text-slate-600">
              <p>
                <Compass className="mr-2 inline h-6 w-6 text-star-blue" aria-hidden="true" />
                We believe that all children should have access to a child-friendly school, where their
                individual needs are catered for and where they are able to participate in a full program of
                activities and learning opportunities.
              </p>
              <p>
                We believe all students should be encouraged to work, learn, and play together, which will
                enable students to gain confidence, raise their self-esteem, and realize their full potential
                as productive members of society.
              </p>
            </blockquote>
          </Reveal>
          <Reveal className="mx-auto mt-14 max-w-2xl text-center">
            <span className="section-eyebrow">Principles That Guide Our Vision</span>
            <h3 className="text-2xl font-extrabold">Four commitments behind every decision</h3>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <article className={`card h-full ${m.bg}`}>
                  <m.icon className={`h-8 w-8 ${m.color}`} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <ScrollCue to="goals" label="Our goals" className="mt-14" />
        </div>
      </section>

      {/* Goals & Objectives */}
      <section id="goals" className="container-x scroll-mt-24 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Goals & Objectives</span>
          <h2 className="section-title">What we set out to achieve</h2>
          <p className="mt-4 text-slate-600">
            Our key approach is to keep the child — and his or her rights, well-being and educational
            opportunities — at the centre of all goals, objectives and activities.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <article className="card flex h-full gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-star-green/10 text-lg font-extrabold text-star-green">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{g.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <ScrollCue to="who-we-serve" label="Who we serve" className="mt-14" />
      </section>

      {/* Who we serve */}
      <section id="who-we-serve" className="scroll-mt-24 bg-amber-50/40 py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="section-eyebrow">Who We Serve</span>
            <h2 className="section-title">Admission and priority</h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Most of our students live with cerebral palsy; others have autism, ADHD, Down syndrome or
              learning difficulties. When a place opens, priority goes to the most vulnerable child living in
              an accessible location — first children we already know through home visits, then children
              referred by the community and other schools. Families of children with severe needs may be asked
              to accompany their child at the Centre.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {admission.map((a) => (
                <li key={a.label} className="rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-100">
                  <p className="font-bold text-slate-900">{a.label}</p>
                  <p className="text-xs text-slate-500">{a.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card bg-white">
              <Lightbulb className="h-8 w-8 text-star-yellow" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold">Four learning modules</h3>
              <p className="mt-2 text-sm text-slate-600">
                Each child&apos;s IEP draws on four modules delivered by a multidisciplinary team with the
                family closely involved.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <li><strong className="text-slate-900">Communication & Interaction</strong> — speech therapy, sign language, picture communication, social skills and assistive technology.</li>
                <li><strong className="text-slate-900">Cognitive & Learning</strong> — sensory activities, fine-motor practice, early literacy and numeracy, occupational therapy.</li>
                <li><strong className="text-slate-900">Social, Emotional & Mental Health</strong> — social stories, mindfulness, play therapy, group activities and family counselling.</li>
                <li><strong className="text-slate-900">Sensory & Physical Needs</strong> — sensory integration, physiotherapy, adaptive equipment and mobility aids.</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <ScrollCue to="partners" label="Our partners" className="mt-14" />
      </section>

      {/* Partners */}
      <section id="partners" className="container-x scroll-mt-24 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Partners</span>
          <h2 className="section-title">Organisations that make the Centre possible</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <article className="card h-full">
                <ImagePlaceholder label={`Logo: ${p.name}`} tint={p.tint} className="h-24 w-full rounded-2xl" />
                <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
                <p className="text-xs font-semibold text-star-blue">{p.full}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <ScrollCue to="team" label="Meet the team" className="mt-14" />
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-24 bg-emerald-50/40 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Our Team</span>
            <h2 className="section-title">The people behind every small victory</h2>
            <p className="mt-4 text-slate-600">
              A small team of teachers, a staff trainer, a community liaison, care staff and parents — supported
              by volunteers and specialist therapists whenever they are available.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <article className="card h-full bg-white">
                  <ImagePlaceholder label={`Photo: ${t.name}`} tint={t.tint} className="h-40 w-full rounded-2xl" />
                  <h3 className="mt-4 text-lg font-bold">{t.name}</h3>
                  <p className="text-sm font-semibold text-star-blue">{t.role}</p>
                  <p className="mt-2 text-sm text-slate-600">{t.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <ScrollCue to="volunteer" label="Volunteer with us" className="mt-14" />
        </div>
      </section>

      {/* Volunteer callout + form */}
      <section id="volunteer" className="container-x scroll-mt-24 py-20">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card h-full border-star-green/30 bg-white">
              <HandHeart className="h-10 w-10 text-star-green" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold">Join as a Volunteer</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                Physiotherapists, occupational and speech therapists are especially welcome to join our home
                visits and IEP sessions — but you do not need a qualification to make a difference. Volunteers
                help with play, art, lunch and outdoor time, or simply sit beside a child who needs a friend.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><Handshake className="h-4 w-4 flex-none text-star-green" aria-hidden="true" /> Weekdays 9:00 – 15:00, Mae Sot</li>
                <li className="flex gap-2"><Handshake className="h-4 w-4 flex-none text-star-green" aria-hidden="true" /> Orientation and child safeguarding training provided</li>
                <li className="flex gap-2"><Handshake className="h-4 w-4 flex-none text-star-green" aria-hidden="true" /> Burmese, Thai or English speakers welcome</li>
              </ul>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Flower2 className="h-4 w-4 text-star-yellow" aria-hidden="true" />
                Minimum commitment: one morning a week for three months
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <VolunteerForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
