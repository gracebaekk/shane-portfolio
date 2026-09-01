import Link from "next/link";

const links = [
  { href: "/#work", text: "Work" },
  { href: "/#about", text: "About" },
  { href: "/#photo", text: "Photo" },
  { href: "/resume.pdf", text: "Resume" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="label hover:text-accent">
          Shane Choi
        </Link>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="label text-ink-soft hover:text-accent">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
