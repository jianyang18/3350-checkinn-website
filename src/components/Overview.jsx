import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import {
  ShieldCheck,
  Users,
  BedDouble,
  Search,
  Pencil,
  UserCog,
  Building2,
} from "lucide-react";

const users = [
  {
    icon: ShieldCheck,
    title: "Managers",
    body: "See every booking. Edit anything. Create, update, and delete staff accounts from one screen.",
  },
  {
    icon: Users,
    title: "Front desk staff",
    body: "Check guests in and out. Take walk-in bookings. Update details when a guest changes plans.",
  },
  {
    icon: BedDouble,
    title: "Guests",
    body: "Sign up, browse rooms, and book a stay without calling the desk.",
  },
];

const features = [
  {
    icon: Search,
    title: "Browse and book rooms",
    body: "Filter by room type, dates, and guest count. See the price up front. Confirm in one click.",
  },
  {
    icon: Pencil,
    title: "Manage bookings",
    body: "One screen for every stay. Filter by upcoming, active, past, or all. Edit, cancel, check in, or check out from a card.",
  },
  {
    icon: Building2,
    title: "Manage rooms",
    body: "Add, update, or remove rooms. Set type, price, and status. Mark a room out of service when it needs work.",
  },
  {
    icon: UserCog,
    title: "Account admin",
    body: "Managers can create accounts at any permission level. Update or remove users from one place.",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            Overview
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            One app for the whole hotel.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Running a hotel is no small task. From the moment a guest decides to
            book a room to the moment they check out, there are dozens of moving
            parts that need to work together seamlessly. Reservations come in
            from multiple channels, rooms need to be tracked and managed in real
            time, guest preferences need to be remembered, and staff need to
            stay coordinated all at once. When any one of these breaks down, it
            does not just create extra work for staff, it creates a bad
            experience for guests.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {users.map((u) => {
            const Icon = u.icon;
            return (
              <Card
                key={u.title}
                className="bg-background hover:border-foreground/20"
              >
                <CardHeader>
                  <Icon className="h-5 w-5 text-foreground mb-2" />
                  <CardTitle>{u.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {u.body}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-10">
          <p className="text-sm font-medium text-muted-foreground mb-3">
            What it does
          </p>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
            Four things, done well.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Card key={f.title} className="bg-background">
                <CardHeader>
                  <Icon className="h-5 w-5 text-foreground mb-2" />
                  <CardTitle>{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {f.body}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
