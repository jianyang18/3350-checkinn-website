import { Badge } from "./ui/badge.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import ArchitectureDiagram from "./ui/ArchitectureDiagram.jsx";

const stack = [
  "Java 21",
  "JavaFX",
  "SQLite",
  "JDBC",
  "Gradle",
  "JUnit 5",
  "Mockito",
];

const decisions = [
  {
    title: "AppContext over a DI framework",
    body: "Spring or Guice would solve the wiring problem with annotations and magic. We use one class with one constructor. You can read every dependency top to bottom in 20 lines.",
  },
  {
    title: "Decision title goes here",
    body: "Short paragraph explaining the choice and the trade-off. Two or three sentences.",
  },
  {
    title: "Decision title goes here",
    body: "Short paragraph explaining the choice and the trade-off. Two or three sentences.",
  },
  {
    title: "Decision title goes here",
    body: "Short paragraph explaining the choice and the trade-off. Two or three sentences.",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            Architecture
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            How it's built.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Four layers, one rule. Each layer only talks to the one below it.
            Presentation never touches the database. The database never knows
            about JavaFX.
          </p>
        </div>

        <div className="mx-auto max-w-5xl mb-16">
          <ArchitectureDiagram />
        </div>

        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Built with
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <Badge key={t} className="bg-background">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Decisions we made
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {decisions.map((d) => (
              <Card key={d.title} className="bg-background">
                <CardHeader>
                  <CardTitle>{d.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {d.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
