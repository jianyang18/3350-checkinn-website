import { Button } from "./ui/button.jsx";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <p className="mb-6 text-sm font-medium tracking-wide text-muted-foreground">
            COMP 3350 · Summer 2026 · University of Manitoba
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            A hotel app that does
            <br />
            the small things well.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            CheckInn is a Java desktop app for hotel managers, front desk staff,
            and guests. Book rooms, manage stays, and run the place from one
            window.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="#demo">
                <Play className="h-4 w-4" />
                Watch the demo
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#overview">
                Read the overview
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-20 mx-auto max-w-5xl">
          <div className="aspect-video w-full rounded-2xl border border-border bg-muted shadow-sm overflow-hidden">
            <iframe
              src="https://www.youtube-nocookie.com/embed/_t2ylVjSZOg"
              title="CheckInn"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
