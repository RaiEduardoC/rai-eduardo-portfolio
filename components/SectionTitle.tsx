interface SectionTitleProps {
  icone: string;
  children: React.ReactNode;
}

export default function SectionTitle({ icone, children }: SectionTitleProps) {
  return (
    <h2 className="section-title">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icone} className="icon-title" alt="" width={26} height={26} aria-hidden="true" />
      {children}
    </h2>
  );
}