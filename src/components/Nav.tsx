import Link from "next/link";

const links = [
  { href: "/#about", text: "About" },
  { href: "/#projects", text: "Projects" },
  { href: "/#media", text: "Media" },
  {
    href: "https://drive.google.com/file/d/1Yu217rJCaiEsy1uP4Bv3PpziDg53be_Y/view?usp=sharing",
    text: "Resume",
    external: true,
  },
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
              {"external" in link && link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label text-ink-soft hover:text-accent"
                >
                  {link.text}
                </a>
              ) : (
                <Link href={link.href} className="label text-ink-soft hover:text-accent">
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
