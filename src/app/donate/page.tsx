import type { Metadata } from "next";
import { HeartHandshake, Sparkles, Utensils, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import PromptPayDonation from "@/components/PromptPayDonation";
import IntlDonationCard from "@/components/IntlDonationCard";
import CraftShop from "@/components/CraftShop";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Donate via Thai PromptPay or international card, or buy handmade crafts from our students. Every gift helps a child with special needs thrive.",
};

const impact = [
  { icon: Utensils, amount: "฿300", text: "One hour of speech or occupational therapy for a child." },
  { icon: Sparkles, amount: "฿1,000", text: "A week of nutritious lunches and snacks for one student." },
  { icon: Wrench, amount: "฿5,000", text: "Adaptive equipment such as a standing frame or sensory kit." },
  { icon: HeartHandshake, amount: "฿15,000", text: "A full month of schooling and therapy for one child." },
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Support Us"
        title="Your kindness becomes a child's progress"
        description="Star Flower Centre never turns a family away for inability to pay. That promise is only possible because of people like you. Choose the way of giving that suits you best."
        tint="red"
      />

      {/* Impact strip */}
      <section className="container-x pt-12" aria-label="What your gift provides">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((i, idx) => (
            <Reveal key={i.amount} delay={idx * 0.05}>
              <div className="card flex items-start gap-4 py-5">
                <span className="rounded-2xl bg-rose-50 p-2.5 text-star-red">
                  <i.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-lg font-extrabold">{i.amount}</p>
                  <p className="text-sm text-slate-600">{i.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Donation methods */}
      <section id="give" className="container-x py-16" aria-labelledby="donate-heading">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Make a Donation</p>
          <h2 id="donate-heading" className="section-title">
            Give in Thailand or from anywhere in the world
          </h2>
          <p className="mt-4 text-slate-600">
            Enter an amount and we&apos;ll generate a PromptPay QR code instantly, or use a card through our secure Stripe checkout.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <PromptPayDonation />
          </Reveal>
          <Reveal delay={0.1}>
            <IntlDonationCard />
          </Reveal>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">
          Star Flower Centre is a registered non-profit foundation in Thailand. Receipts are issued for every donation on request.
        </p>
      </section>

      {/* Craft shop */}
      <section className="bg-amber-50/40 py-16" aria-labelledby="shop-heading">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">Student Craft Shop</p>
            <h2 id="shop-heading" className="section-title">
              Made by small hands, with enormous pride
            </h2>
            <p className="mt-4 text-slate-600">
              Each piece below was created by a Star Flower student during therapy or life-skills lessons. When you buy one, the
              young maker learns that their work has real value in the world — and the proceeds go straight back into their programme.
            </p>
          </div>
          <div className="mt-10">
            <CraftShop />
          </div>
        </div>
      </section>
    </>
  );
}
