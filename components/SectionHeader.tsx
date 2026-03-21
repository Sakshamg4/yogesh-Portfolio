import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  tag: string;
  title: string;
  titleItalic?: string;
}

export default function SectionHeader({ tag, title, titleItalic }: SectionHeaderProps) {
  return (
    <ScrollReveal className="mb-16">
      <p className="font-mono text-xs text-accent tracking-[0.15em] uppercase mb-4">
        {tag}
      </p>
      <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold tracking-tight leading-[1.1]">
        {title}
        {titleItalic && (
          <>
            <br />
            <em className="text-text-muted italic">{titleItalic}</em>
          </>
        )}
      </h2>
    </ScrollReveal>
  );
}
