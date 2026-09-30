import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Star Flower Centre — enrol a child, volunteer, or ask a question. Find our address, phone, email, and opening hours.",
};

const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
const mapsQuery = encodeURIComponent(`${site.name}, ${site.address.line1}, ${site.address.line2}, ${site.address.country}`);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Whether you are a parent looking for support, a volunteer with time to give, or a friend with a question — our door is open. There is no such thing as a small enquiry."
        tint="blue"
      />

      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Details */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <p className="section-eyebrow">Visit or call</p>
                <h2 className="text-2xl font-extrabold">Star Flower Centre</h2>
                <p className="mt-1 text-sm text-slate-500">{site.fullName}</p>
              </div>

              <address className="not-italic">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="mt-0.5 rounded-xl bg-blue-50 p-2 text-star-blue">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold">Address</p>
                      <p className="text-slate-600">
                        {site.address.line1}
                        <br />
                        {site.address.line2}
                        <br />
                        {site.address.country}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 rounded-xl bg-emerald-50 p-2 text-star-green">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold">Phone</p>
                      <a href={telHref} className="text-slate-600 hover:text-star-blue">
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 rounded-xl bg-rose-50 p-2 text-star-red">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold">Email</p>
                      <a href={`mailto:${site.email}`} className="text-slate-600 hover:text-star-blue">
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 rounded-xl bg-amber-50 p-2 text-star-yellow">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-bold">Operating hours</p>
                      <dl className="mt-1 space-y-1 text-slate-600">
                        {site.hours.map((h) => (
                          <div key={h.day} className="flex justify-between gap-4">
                            <dt>{h.day}</dt>
                            <dd className="text-right font-medium">{h.time}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </li>
                </ul>
              </address>

              <div className="rounded-3xl bg-blue-50/40 p-5 text-sm leading-relaxed text-slate-700">
                <p className="font-bold text-slate-900">Visiting for the first time?</p>
                <p className="mt-1">
                  Please call ahead so we can prepare a quiet, welcoming space for your child. Wheelchair access is available at the
                  main entrance, and parking is free.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="section-eyebrow">Send a message</p>
            <h2 className="mb-6 text-2xl font-extrabold">How can we help?</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-emerald-50/40 py-16" aria-labelledby="map-heading">
        <div className="container-x">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Find us</p>
              <h2 id="map-heading" className="section-title">
                Our location
              </h2>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-slate-100">
            {/* Replace `q=` with the centre's exact coordinates or Place ID once confirmed. */}
            <iframe
              title="Map showing the location of Star Flower Centre"
              src={`https://maps.google.com/maps?q=${mapsQuery}&z=15&output=embed`}
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
