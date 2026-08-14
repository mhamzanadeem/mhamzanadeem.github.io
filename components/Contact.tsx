"use client";

import { useState } from "react";
import { contact, social, site } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const openGmailCompose = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="contact" num="09" eyebrow="Contact" title="Get in touch">
      <div className="max-w-3xl">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">{contact.intro}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 space-y-6">
            <SpotlightCard className="rounded-2xl!">
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={openGmailCompose}
                    className="group inline-flex items-center gap-2 rounded-lg bg-accent-strong px-6 py-3.5 text-sm font-bold text-stone-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(245,158,11,0.6)] dark:bg-accent"
                  >
                    {site.email}
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  <button
                    onClick={copyEmail}
                    aria-label="Copy email to clipboard"
                    className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent-strong dark:hover:text-accent"
                  >
                    {copied ? <span className="text-emerald-500">Copied!</span> : "Copy"}
                  </button>
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-line bg-stone-900 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg dark:bg-stone-100 dark:text-stone-900"
                  >
                    View Resume
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                  {social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-medium transition-colors hover:text-accent-strong dark:hover:text-accent"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
