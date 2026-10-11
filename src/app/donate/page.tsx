import type { Metadata } from "next";
import { CheckCircle2, Globe2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import DonationQrSelector from "@/components/DonationQrSelector";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Support Star Flower Centre by scanning a fixed-amount PromptPay QR code or transferring through a supported international wallet.",
};

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
        <DonationQrSelector />

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
