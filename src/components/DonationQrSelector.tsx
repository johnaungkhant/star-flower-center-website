"use client";

import { useState } from "react";
import Image from "next/image";
import { AlertTriangle, Check, QrCode } from "lucide-react";

const contributionTiers = [
  {
    amount: "100",
    purpose: "Daily meals & hygiene supplies",
    image: "/payment_qr/100.jpg",
  },
  {
    amount: "500",
    purpose: "1 week of learning materials",
    image: "/payment_qr/500.jpg",
  },
  {
    amount: "1,000",
    purpose: "Classroom supplies & transport",
    image: "/payment_qr/1000.jpg",
  },
  {
    amount: "3,000",
    purpose: "1 month of comprehensive care",
    image: "/payment_qr/3000.jpg",
  },
  {
    amount: "5,000",
    purpose: "1 month of comprehensive care + outside school activities",
    image: "/payment_qr/5000.jpg",
  },
];

export default function DonationQrSelector() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const selectedTier = contributionTiers[selectedIndex];

  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-eyebrow">Choose a contribution</p>
        <h2 id="donation-heading" className="section-title">
          Select an amount to show its QR code
        </h2>
        <p className="mt-3 text-slate-600">
          Choose a contribution below. Only the selected amount&apos;s QR code
          will be shown.
        </p>
      </div>

      <div
        className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
        role="group"
        aria-label="Donation amount"
      >
        {contributionTiers.map((tier, index) => {
          const selected = selectedIndex === index;

          return (
            <button
              key={tier.amount}
              type="button"
              aria-pressed={selected}
              onClick={() => setSelectedIndex(index)}
              className={`flex min-h-32 flex-col items-start rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 ${
                selected
                  ? "border-blue-700 bg-blue-50 shadow-soft ring-2 ring-blue-700"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50"
              }`}
            >
              <span className="flex w-full items-center justify-between gap-2">
                <span className="text-xl font-black text-slate-900">
                  ฿{tier.amount}
                </span>
                {selected ? (
                  <Check
                    className="h-5 w-5 text-blue-700"
                    aria-hidden="true"
                  />
                ) : (
                  <QrCode
                    className="h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                )}
              </span>
              <span className="mt-2 text-sm leading-snug text-slate-600">
                {tier.purpose}
              </span>
            </button>
          );
        })}
      </div>

      <section
        aria-live="polite"
        aria-label={`PromptPay QR code for ${selectedTier.amount} baht`}
        className="mx-auto mt-8 max-w-xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
      >
        <div className="bg-slate-900 px-5 py-4 text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
            Selected contribution
          </p>
          <h3 className="mt-1 text-3xl font-black">฿{selectedTier.amount}</h3>
          <p className="mt-1 text-sm text-slate-200">{selectedTier.purpose}</p>
        </div>

        <div className="p-4 sm:p-6">
          <Image
            key={selectedTier.image}
            src={selectedTier.image}
            alt={`PromptPay QR code for a ฿${selectedTier.amount} donation to Star Flower Centre`}
            width={600}
            height={800}
            priority
            sizes="(max-width: 640px) 90vw, 480px"
            className="mx-auto h-auto w-full max-w-sm"
          />
          <p className="mt-3 text-center text-sm font-semibold text-slate-600">
            Scan with a supported banking or wallet app
          </p>
        </div>

        <div
          role="alert"
          className="border-t-2 border-red-200 bg-red-50 p-5 sm:p-6"
        >
          <div className="flex items-start gap-3">
            <span className="rounded-xl bg-red-600 p-2 text-white">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h4 className="font-extrabold text-red-900">
                Verify recipient details before confirming
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-red-800">
                Check your banking app shows the exact receiver details before
                you approve the transfer.
              </p>
              <dl className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-red-200 bg-white px-3 py-2">
                  <dt className="text-xs font-bold uppercase tracking-wide text-red-700">
                    Receiver name
                  </dt>
                  <dd className="mt-1 font-extrabold text-slate-900">
                    AUNG KHANT WIN
                  </dd>
                </div>
                <div className="rounded-xl border border-red-200 bg-white px-3 py-2">
                  <dt className="text-xs font-bold uppercase tracking-wide text-red-700">
                    PromptPay ID
                  </dt>
                  <dd className="mt-1 font-extrabold text-slate-900">
                    064 615 7921
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-200 bg-slate-50 px-5 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-extrabold text-slate-900">Star Flower Centre</p>
          <p className="w-fit self-center rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold text-blue-900 sm:self-auto">
            MECC Code: 39 <span className="px-1 text-blue-400">|</span> Tak
            PESAO 2
          </p>
        </div>
      </section>
    </div>
  );
}
