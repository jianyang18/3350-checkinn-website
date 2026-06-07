import { Card } from "./ui/card.jsx";

const accounts = [
  { role: "Manager", email: "manager@manager.com", password: "manager123" },
  { role: "Staff", email: "staff@staff.com", password: "staff123" },
  { role: "Guest", email: "guest@guest.com", password: "guest123" },
];

const screenshots = [
  {
    title: "Browse Rooms",
    note: "Filter by type, dates, and guest count.",
    src: "/screenshots/browse-rooms.gif",
  },
  { title: "Manage Rooms", note: "Add, update, or remove rooms." },
  {
    title: "Manage Bookings",
    note: "Edit, cancel, check in, check out.",
    src: "/screenshots/manage-bookings.gif",
  },
  {
    title: "Account Admin",
    note: "Manager-only user management.",
    src: "/screenshots/account-admin.gif",
  },
];

export default function Demo() {
  return (
    <section id="demo" className="py-32">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-3">Demo</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            See it run.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A short walkthrough of the main flows. Sign up as a guest and book a
            room. Log in as a manager and run the place.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* TODO: replace src with the real demo video link (YouTube unlisted or Loom) */}
          <div className="aspect-video w-full rounded-2xl border border-border bg-muted overflow-hidden flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <p className="text-sm mb-2">Demo video</p>
              <p className="text-xs">
                Drop the embed URL into Demo.jsx once the recording is up.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-4">
            Try it yourself
          </p>
          <Card className="bg-muted/50">
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Clone the repo, run the app, and log in with one of these. All
                three are seeded into the database on first launch.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {accounts.map((a) => (
                  <div
                    key={a.role}
                    className="rounded-xl border border-border bg-background p-4"
                  >
                    <p className="text-xs font-medium text-muted-foreground mb-2">
                      {a.role}
                    </p>
                    <p className="text-sm font-mono">{a.email}</p>
                    <p className="text-sm font-mono text-muted-foreground">
                      {a.password}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-6">
            Screens
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {screenshots.map((s) => (
              <div key={s.title} className="space-y-3">
                {s.src ? (
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover rounded-xl border border-border bg-muted"
                  />
                ) : (
                  <div className="aspect-[16/10] rounded-xl border border-border bg-muted flex items-center justify-center text-xs text-muted-foreground">
                    {/* TODO: add screenshot for "{s.title}" */}
                    <span>Screenshot: {s.title}</span>
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
