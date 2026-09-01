const items = [
  "Brand Identity",
  "Digital Experiences",
  "Social Content",
  "Photography",
  "Experiential Marketing",
  "Art Direction",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-rose py-3 text-ink">
      <div className="animate-marquee flex w-max gap-10 pr-10">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex shrink-0 gap-10" aria-hidden={pass === 1}>
            {items.map((item) => (
              <span key={item} className="label flex items-center gap-10 whitespace-nowrap">
                {item}
                <span className="text-ink/40">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
