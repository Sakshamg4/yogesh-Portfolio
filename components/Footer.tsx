import { siteConfig } from "@/lib/data";

const footerLinks = [
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[0.72rem] text-text-muted tracking-wide">
          © {new Date().getFullYear()} {siteConfig.name}. Crafted with care.
        </p>
        <div className="flex gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.72rem] text-text-muted tracking-wide hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
