import type { ReactNode } from "react";
import Image from "next/image";
import EnquiryForm from "@/components/common/EnquiryForm";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import type { SectionProps } from "@/types/hair-atelier.types";

const goldText =
  "bg-gradient-to-r from-[#e8b47a] via-[#f0c48c] to-[#c98a4b] bg-clip-text text-transparent";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <p className="text-xs font-semibold tracking-[0.25em] text-[#e0a458] uppercase">
        {children}
      </p>
      <span className="h-px w-10 bg-[#e0a458]" />
    </div>
  );
}

export function ContactFormSection({
  data: form,
}: SectionProps<"ContactFormSection">) {
  const { badge, heading, description, image } = form;

  return (
    <section className="bg-black py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <Stagger>
          <StaggerItem direction="right">
            <Eyebrow>{badge}</Eyebrow>
          </StaggerItem>
          <StaggerItem
            as="h2"
            direction="right"
            className="mt-4 font-heading text-4xl font-semibold text-white sm:text-5xl"
          >
            {heading.main} <span className={goldText}>{heading.highlight}</span>
          </StaggerItem>
          <StaggerItem
            as="p"
            direction="right"
            className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base"
          >
            {description}
          </StaggerItem>
          <StaggerItem>
            <EnquiryForm content={form} messageRequired className="mt-8" />
          </StaggerItem>
        </Stagger>

        <Reveal
          direction="left"
          distance={60}
          delay={0.2}
          className="relative min-h-80 overflow-hidden rounded-2xl border border-[#e0a458]/60 shadow-[0_0_40px_-15px_rgba(224,164,88,0.5)]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
