import type { Metadata } from "next";
import Image from "next/image";
import {
  Blocks,
  BookOpenCheck,
  Coins,
  Gift,
  Home,
  Megaphone,
  School,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollCue from "@/components/ScrollCue";

export const metadata: Metadata = {
  title: "Activities & Stories",
  description:
    "Explore the daily programme, Individual Education Plans, parent trainings, home visits and community activities at Star Flower Centre, and read stories of children making progress.",
};

type Activity = {
  title: string;
  icon: LucideIcon;
  tint: "blue" | "yellow" | "green" | "red";
  text: string;
  image: string | null;
};

const activities: Activity[] = [
  {
    title: "Individual Education Plans",
    icon: BookOpenCheck,
    tint: "blue",
    text: "Every child is assessed and given an IEP with achievable goals across communication, cognition, social-emotional development and physical needs. Teachers work one-to-one with each child and review progress regularly with parents.",
    image: "/iep.jpg",
  },
  {
    title: "Learning Through Play",
    icon: Blocks,
    tint: "yellow",
    text: "Morning circle, songs and stories, chanting the alphabet and counting, arts and crafts, water play and topic-based lessons. Children learn by doing, and by doing it together.",
    image: "/ltp.jpg",
  },
  {
    title: "Health, Nutrition & Care",
    icon: Stethoscope,
    tint: "green",
    text: "A morning snack, a nutritious lunch, showers and clean clothes every day. Vaccinations, hygiene routines and referrals to health care are arranged with partners such as SMRU.",
    image: "/hnc.jpg",
  },
  {
    title: "Home Visits & Early Intervention",
    icon: Home,
    tint: "red",
    text: "Our community liaison identifies children in migrant communities. Teachers and trainers visit homes to show families feeding adaptations, physiotherapy exercises and ways to play, then invite children to the Centre.",
    image: "/hvep.jpg",
  },
  {
    title: "Parent Training & PTA",
    icon: Users,
    tint: "blue",
    text: "Quarterly trainings on the value of education, types of disabilities, inclusion, child protection, speech and communication, and practical ways to help at home. Parents also join open days and Centre events.",
    image: "/pt.jpg",
  },
  {
    title: "Toy Box Scheme",
    icon: Gift,
    tint: "yellow",
    text: "Children borrow a pencil case, exercise book, drawing book, crayons and colouring sheets to take home, so learning continues after the school day ends.",
    image: "/tbs.jpg",
  },
  {
    title: "Community Trainings",
    icon: Megaphone,
    tint: "green",
    text: "Sessions for community members and other schools on disability, discrimination and life skills, building peer-support networks so families no longer feel alone.",
    image: "/ct.jpg",
  },
  {
    title: "Inclusive Education",
    icon: School,
    tint: "red",
    text: "Where it benefits the child, students join a local migrant learning centre with teacher-aide support, and we train those schools so more children with special needs can be welcomed.",
    image: "/ie.jpg",
  },
  {
    title: "School Fundraising",
    icon: Coins,
    tint: "blue",
    text: "Parents, teachers and children sell food, drinks and handmade items at community events, raising funds for the Centre and pride in what the children can make.",
    image: "/fr.png",
  },
   {
    title: "Life Skills & Vocational Training",
    icon: School,
    tint: "red",
    text: "Life skills and vocational training empower our special needs children with the self-reliance, practical abilities, and confidence required to lead meaningful, independent lives.",
    image: "/lsv.jpg",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Activities & Stories"
        title="Learning that looks like play, progress that feels like joy"
        description="Every day at Star Flower Centre blends individual teaching, play, health care and life skills — and our work continues in homes and communities across Mae Sot."
        tint="green"
      />

      {/* Activities */}
      <section className="container-x py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Programme</span>
          <h2 className="section-title">
            What we do — at the Centre, at home and in the community
          </h2>
          <p className="mt-4 text-slate-600">
            The Centre is open Monday to Friday, 9:00 – 15:00. Transport, meals
            and all activities are provided free of charge.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="card flex h-full flex-col gap-5">
                {a.image ? (
                  <Image
                    src={a.image}
                    alt={`Photo: ${a.title}`}
                    width={600}
                    height={400}
                    className="h-40 w-full flex-none rounded-2xl object-cover"
                  />
                ) : (
                  <ImagePlaceholder
                    label={`Photo: ${a.title}`}
                    tint={a.tint}
                    className="h-40 w-full flex-none rounded-2xl"
                  />
                )}
                <div>
                  <a.icon
                    className="h-7 w-7 text-slate-700"
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {a.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <ScrollCue to="stories" label="Read our stories" className="mt-14" />
      </section>

      {/* Stories */}
      <section id="stories" className="scroll-mt-24 bg-amber-50/40 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Our Evidences Of Scuccessful Education</span>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="mx-auto mt-10 grid max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-amber-100 md:grid-cols-2">
              <div className="relative min-h-72 bg-slate-100 md:min-h-full">
                <Image
                  src="/mg-thwa-hit-evidence.png"
                  alt="Mg Thwa Hit taking part in learning and life-skills activities"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-9">
                <p className="section-eyebrow">Student Success Story</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                  Mg Thwa Hit
                </h2>
                <p className="mt-2 text-sm font-semibold text-amber-700">
                  Age 21 <span aria-hidden="true">|</span> Enrolled 2009–2017
                </p>
                <p className="mt-6 text-base leading-relaxed text-slate-600">
                  Admitted with cerebral palsy, Mg Thwa Hit was non-verbal,
                  unable to read or write, and unable to manage his toileting
                  independently. Through eight years of intensive special
                  education and functional skills training at SFC, he developed
                  independent self-care skills, literacy, and advanced computer
                  proficiency. He went on to open his own desktop publishing
                  shop and actively helps with his parents&apos; family business.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}