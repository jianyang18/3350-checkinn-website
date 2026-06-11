import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Layered architecture diagram.
 * Self-contained: no external assets, scales with the container.
 *
 * Layout:
 *   application (composition root, no arrow into the chain)
 *      presentation ↓ depends on
 *      business     ↓ depends on
 *      persistence
 *   object (shared data, used by every layer above)
 *
 * Every chip is labelled with its Java type: class, interface, enum, abstract.
 */

const layers = [
  {
    num: "00",
    label: "Application",
    description: "JavaFX entry point and composition root",
    accent: "bg-violet-400",
    accentText: "text-violet-600",
    note: "Wires the layers below at startup",
    showArrowBelow: false,
    chips: [
      { name: "Main", type: "class" },
      { name: "AppContext", type: "class" },
    ],
  },
  {
    num: "01",
    label: "Presentation",
    description: "JavaFX views, navigation, UI building blocks",
    accent: "bg-rose-400",
    accentText: "text-rose-600",
    showArrowBelow: true,
    chips: [
      { name: "ViewNavigator", type: "class" },
      { name: "Screen", type: "enum" },
      { name: "ContainerController", type: "abstract" },
      { name: "ViewContainerController", type: "class" },
      { name: "Refreshable", type: "interface" },
      { name: "Tab", type: "enum" },
      { name: "Controllers (9)", type: "class" },
      { name: "RoomCardBuilder", type: "class" },
      { name: "BookingCardBuilder", type: "class" },
      { name: "MyBookingCardBuilder", type: "class" },
      { name: "Formatters", type: "class" },
      { name: "DatePickers", type: "class" },
      { name: "PresentationConstants", type: "class" },
    ],
  },
  {
    num: "02",
    label: "Business",
    description: "Workflow, validation, typed exceptions",
    accent: "bg-emerald-400",
    accentText: "text-emerald-600",
    showArrowBelow: true,
    chips: [
      { name: "AuthService", type: "class" },
      { name: "BookingService", type: "class" },
      { name: "RoomService", type: "class" },
      { name: "AccountAdminService", type: "class" },
      { name: "UserManager", type: "class" },
      { name: "UserFactory", type: "class" },
      { name: "Validators (4)", type: "class" },
      { name: "LogicConstants", type: "class" },
      { name: "ValidationException", type: "class" },
      { name: "AuthException", type: "class" },
      { name: "BookingException", type: "class" },
      { name: "AccountAdminException", type: "class" },
      { name: "RoomServiceException", type: "class" },
      { name: "RoomNotAvailableException", type: "class" },
    ],
  },
  {
    num: "03",
    label: "Persistence",
    description: "Repository interfaces with swappable implementations",
    accent: "bg-blue-400",
    accentText: "text-blue-600",
    showArrowBelow: false,
    chips: [
      { name: "UserRepository", type: "interface" },
      { name: "BookingRepository", type: "interface" },
      { name: "RoomRepository", type: "interface" },
      { name: "SQLite impls (3)", type: "class" },
      { name: "Fake impls (3)", type: "class" },
      { name: "Database", type: "class" },
      { name: "DatabaseInitializer", type: "class" },
      { name: "DatabaseSeeder", type: "class" },
      { name: "PersistenceConstants", type: "class" },
      { name: "DatabaseException", type: "class" },
      { name: "BookingDBException", type: "class" },
      { name: "RoomDBException", type: "class" },
      { name: "UserDBException", type: "class" },
    ],
  },
  {
    num: "◆",
    label: "Object",
    description: "Pure data carriers, used by every layer above",
    accent: "bg-amber-400",
    accentText: "text-amber-600",
    note: "Shared data, no behavior, no dependencies",
    showArrowBelow: false,
    shared: true,
    chips: [
      { name: "User", type: "class" },
      { name: "Booking", type: "class" },
      { name: "Room", type: "class" },
      { name: "GuestInfo", type: "class" },
      { name: "BookingDetailsData", type: "class" },
      { name: "ConvertPermissionLevel", type: "class" },
    ],
  },
  {
    num: "◆",
    label: "Enums",
    description: "Typed enums, used across every layer",
    accent: "bg-teal-400",
    accentText: "text-teal-600",
    note: "Replace magic strings and numbers with named values",
    showArrowBelow: false,
    shared: true,
    chips: [
      { name: "PermissionLevel", type: "enum" },
      { name: "BookingStatus", type: "enum" },
      { name: "RoomStatus", type: "enum" },
      { name: "RoomType", type: "enum" },
    ],
  },
];

function Chip({ name, type }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs">
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {type}
      </span>
      <span className="font-medium text-foreground">{name}</span>
    </span>
  );
}

function LayerCard({ layer }) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-gradient-to-br from-background to-muted/40 overflow-hidden transition-colors hover:border-foreground/20",
        layer.shared ? "border-dashed border-border" : "border-border"
      )}
    >
      <div className={cn("absolute left-0 top-0 bottom-0 w-1", layer.accent)} />

      <div className="p-6 pl-8 md:pl-10">
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-5 mb-1">
          <span
            className={cn(
              "text-xs font-mono tracking-widest font-semibold",
              layer.accentText
            )}
          >
            {layer.num}
          </span>
          <h3 className="text-xl font-semibold tracking-tight">
            {layer.label}
          </h3>
          <span className="text-sm text-muted-foreground">
            {layer.description}
          </span>
        </div>

        {layer.note && (
          <p className="text-xs text-muted-foreground/80 italic mb-4 mt-1">
            {layer.note}
          </p>
        )}

        <div className={cn("flex flex-wrap gap-1.5", !layer.note && "mt-4")}>
          {layer.chips.map((chip) => (
            <Chip key={chip.name} name={chip.name} type={chip.type} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ArchitectureDiagram() {
  // Split into the dependency chain (everything except the shared Object layer)
  // and the shared layer rendered separately at the bottom.
  const chain = layers.filter((l) => !l.shared);
  const shared = layers.filter((l) => l.shared);

  return (
    <div className="relative">
      {/* Dependency chain */}
      <div className="space-y-2">
        {chain.map((layer, i) => (
          <div key={layer.label}>
            <LayerCard layer={layer} />

            {layer.showArrowBelow && i < chain.length - 1 && (
              <div className="flex items-center justify-center gap-2 py-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70">
                  depends on
                </span>
                <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/70" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Shared object layer, set apart from the dependency chain */}
      <div className="mt-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/70">
            shared
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>
        {shared.map((layer) => (
          <LayerCard key={layer.label} layer={layer} />
        ))}
      </div>

      {/* Footnote */}
      <p className="text-xs text-center text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
        <span className="font-medium text-foreground">Application</span> is the
        composition root: it constructs every concrete implementation and wires
        them together at startup.{" "}
        <span className="font-medium text-foreground">Presentation</span>,{" "}
        <span className="font-medium text-foreground">Business</span>, and{" "}
        <span className="font-medium text-foreground">Persistence</span> form a
        one-way dependency chain.{" "}
        <span className="font-medium text-foreground">Object</span> and{" "}
        <span className="font-medium text-foreground">Enums</span> sit aside as
        pure data and are used by every layer.
      </p>
    </div>
  );
}
