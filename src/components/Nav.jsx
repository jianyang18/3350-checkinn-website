import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "demo", label: "Demo" },
  { id: "architecture", label: "Architecture" },
  { id: "reflection", label: "Reflection" },
  { id: "team", label: "Team" },
];

export default function Nav() {
  const [active, setActive] = useState("overview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200",
        scrolled
          ? "bg-background/80 backdrop-blur border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <img src="/logo.png" alt="" className="h-7 w-7 rounded-md" />
          <span>CheckInn</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                active === s.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a
          href="https://code.cs.umanitoba.ca/3350/summer2026/a01-g03-checkinn"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          View on GitLab
        </a>
      </div>
    </header>
  );
}
