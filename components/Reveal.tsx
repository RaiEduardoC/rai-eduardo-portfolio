"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Atraso em segundos — usado para escalonar itens de uma mesma lista. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
}

/**
 * Anima a entrada do conteúdo quando ele aparece na viewport.
 *
 * O estado "hidden" só é aplicado depois da montagem: sem JS (ou antes da
 * hidratação) o conteúdo continua visível, então o SEO e a acessibilidade
 * não dependem da animação.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [estado, setEstado] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const semAnimacao = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (semAnimacao) {
      setEstado("visible");
      return;
    }

    setEstado("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEstado("visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={className}
      data-reveal={estado === "idle" ? undefined : estado}
      style={estado === "visible" && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}