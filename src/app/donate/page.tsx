import type { Metadata } from "next";
import Image from "next/image";
import { AlertTriangle, CheckCircle2, Globe2, QrCode } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Support Star Flower Centre by scanning a fixed-amount PromptPay QR code or transferring through a supported international wallet.",
};

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

const internationalApps = [
  "Wise — scan the QR or a photo screenshot directly in the app",
  "Alipay+ / AlipayHK (China / Hong Kong)",
  "GCash (Philippines)",
  "Touch 'n Go eWallet (Malaysia)",
  "Kakao Pay (South Korea) / DANA (Indonesia) / PayPay (Japan)",
  "Remitly & Western Union — choose the Mobile Wallet option and send to 064 615 7921",
];

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Support Us"
        title="Help every child learn, grow, and thrive"
        description="Choose a fixed contribution and scan its PromptPay QR code. Please verify the recipient details in your banking app before confirming."
        tint="red"
      />

      <section className="container-x py-12" aria-labelledby="donation-heading">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-extrabold text-slate-900">
              Star Flower Centre
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Your support helps provide inclusive education and care.
            </p>
          </div>
          <div className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-900 ring-1 ring-blue-200">
            MECC Code: 39 <span className="px-1 text-blue-400">|</span> Tak
            PESAO 2
          </div>
        </div>

        <div
          role="alert"
          className="rounded-3xl border-2 border-red-300 bg-red-50 p-5 shadow-sm sm:p-6"
        >
          <div className="flex items-start gap-3">
            <span className="rounded-xl bg-red-600 p-2 text-white">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-red-900">
                Important: verify recipient details before confirming
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-red-800">
                Before you approve the transfer, check that your banking app
                shows these exact details:
              </p>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-200 bg-white px-4 py-3">
                  <dt className="text-xs font-bold uppercase tracking-wide text-red-700">
                    Receiver name
                  </dt>
                  <dd className="mt-1 text-lg font-extrabold text-slate-900">
                    AUNG KHANT WIN
                  </dd>
                </div>
                <div className="rounded-2xl border border-red-200 bg-white px-4 py-3">
                  <dt className="text-xs font-bold uppercase tracking-wide text-red-700">
                    PromptPay ID
                  </dt>
                  <dd className="mt-1 text-lg font-extrabold text-slate-900">
                    064 615 7921
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="section-eyebrow">Choose a contribution</p>
          <h2 id="donation-heading" className="section-title">
            Scan a fixed-amount QR code
          </h2>
          <p className="mt-3 text-slate-600">
            Open your banking or wallet app, scan the QR code, and verify the
            receiver name and amount before confirming.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contributionTiers.map((tier, index) => (
            <Reveal key={tier.amount} delay={index * 0.04}>
              <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-lg">
                <div className="flex items-start justify-between gap-3 p-5 pb-3">
                  <div>
                    <p className="text-2xl font-black text-slate-900">
                      ฿{tier.amount}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {tier.purpose}
                    </p>
                  </div>
                  <span className="rounded-xl bg-emerald-50 p-2 text-emerald-700">
                    <QrCode className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="mx-4 mb-4 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2">
                  <Image
                    src={tier.image}
                    alt={`PromptPay QR code for a ฿${tier.amount} donation to Star Flower Centre`}
                    width={600}
                    height={800}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="h-auto w-full"
                  />
                </div>
                <p className="px-5 pb-5 text-center text-xs font-semibold text-slate-500">
                  Scan with a supported banking or wallet app
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section
            aria-labelledby="transfer-note-heading"
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-6 w-6 flex-none text-emerald-700"
                aria-hidden="true"
              />
              <div>
                <h2
                  id="transfer-note-heading"
                  className="text-lg font-extrabold text-emerald-950"
                >
                  Add a transfer note
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                  Please include this in your banking app&apos;s Note/Memo field:
                </p>
                <p className="mt-3 rounded-xl border border-emerald-200 bg-white px-4 py-3 font-bold text-slate-900">
                  Donation for SFC from [Donor Name] : [Email]
                </p>
                <p className="mt-3 text-sm text-emerald-900">
                  Example:{" "}
                  <span className="font-semibold">
                    Donation for SFC from Jane Smith : jane@example.com
                  </span>
                </p>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="international-apps-heading"
            className="rounded-3xl border border-blue-200 bg-blue-50/70 p-6"
          >
            <div className="flex items-start gap-3">
              <Globe2
                className="mt-0.5 h-6 w-6 flex-none text-blue-700"
                aria-hidden="true"
              />
              <div>
                <h2
                  id="international-apps-heading"
                  className="text-lg font-extrabold text-slate-900"
                >
                  Supported international payment apps
                </h2>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
                  {internationalApps.map((app) => (
                    <li key={app} className="flex gap-2">
                      <span className="font-bold text-blue-700" aria-hidden="true">
                        •
                      </span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <p className="mt-6 rounded-2xl bg-slate-100 px-5 py-4 text-center text-sm leading-relaxed text-slate-700">
          International donors can scan via Wise or supported wallets, or send
          via Remitly/Western Union to TrueMoney Wallet.
        </p>
      </section>
    </>
  );
}
