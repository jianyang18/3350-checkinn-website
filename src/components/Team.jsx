import {Card} from './ui/card.jsx';
import {cn} from '@/lib/utils';

const team = [
	{
		name: 'Jian Yang',
		initials: 'JY',
		role: 'Setup & database',
		contributions: [
			'Scaffolded the project and set up the initial structure.',
			'Built the Manage Bookings page.',
			'Designed and built the database interfaces and their implementations.',
		],
		skills: ['Java', 'JavaFX', 'SQLite', 'JDBC'],
		photo: '/team/jian.png',
	},
	{
		name: 'Dylan Zarn',
		initials: 'DZ',
		role: 'Navigation & My Bookings',
		contributions: [
			'ViewContainer and navigation handling and implementation.',
			'Manage Rooms and My Bookings UI.',
			'Testing and implementation.',
			'Organization of constants classes and service class initial implementations.',
		],
		skills: [
			'Project Structure',
			'Iterative Group Work',
			'Git/GitLab',
			'Mock & Stub Test Design',
			'Testing Pyramid',
			'Project Management',
		],
		photo: '/team/dylan.png',
	},
	{
		name: 'Baiel Nurmatbek uulu',
		initials: 'BN',
		role: 'Authentication, Account Management, and Testing',
		contributions: [
			'Built and improved sign-in/sign-up flows with validation, session handling, and role-based navigation.',
			'Implemented manager account administration for creating, editing, deleting, and validating guest/staff/manager accounts.',
			'Added and updated unit/integration tests for AuthService, AccountAdminService, validators, and database-backed user workflows.',
			'Helped improve project design by moving validation/business rules out of controllers and into services/validators.',
		],
		skills: [
			'Java',
			'JavaFX',
			'FXML',
			'SQLite',
			'Gradle',
			'JUnit',
			'Mockito',
			'Git/GitLab',
			'MVC',
			'Layered Architecture',
			'Unit Testing',
			'Integration Testing',
		],
		photo: '/team/baiel.png',
	},
	{
		name: 'Nithisha Karthikeyan',
		initials: 'NK',
		role: 'Rooms & browsing',
		contributions: [
			'Built the Browse Rooms feature.',
			'Built RoomService, and later refactored it.',
			'Built the Manage Rooms feature.',
		],
		skills: ['JavaFX', 'GitLab', 'SDLC', 'Unit Testing'],
		photo: '/team/nithisha.png',
	},
	{
		name: 'Leif Magnusson',
		initials: 'LM',
		role: 'End-to-end testing & booking',
		contributions: [
			'Wrote all of the end-to-end tests.',
			'Built the Add a Booking page.',
			'Fixed the room dropdown rendering issue.',
		],
		skills: ['Java', 'JavaFX', 'TestFX', 'End-to-End Testing'],
		photo: '/team/leif.png',
	},
];

// Photos for the polaroid gallery (separate from team headshots).
// Drop the files in website/public/gallery/ and reference them here.
const gallery = [
	'/gallery/gallery-1.jpg',
	'/gallery/gallery-2.jpg',
	'/gallery/gallery-3.jpg',
	'/gallery/gallery-5.jpg',
	'/gallery/gallery-6.jpg',
];

// Polaroid tilt + small vertical offset per slot. Organic alternating angles.
const polaroidLayout = [
	{rotate: '-rotate-[8deg]', translate: 'translate-y-2'},
	{rotate: 'rotate-[4deg]', translate: '-translate-y-1'},
	{rotate: '-rotate-[2deg]', translate: 'translate-y-0'},
	{rotate: 'rotate-[6deg]', translate: 'translate-y-1'},
	{rotate: '-rotate-[5deg]', translate: '-translate-y-3'},
	{rotate: 'rotate-[3deg]', translate: 'translate-y-2'},
];

export default function Team() {
	return (
		<section id="team" className="py-32 bg-muted/30">
			<div className="container">
				<div className="max-w-2xl mb-16">
					<p className="text-sm font-medium text-muted-foreground mb-3">Team</p>
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Five people, one app.</h2>
					<p className="mt-6 text-lg text-muted-foreground leading-relaxed">
						Group 03 from COMP 3350 A01. We met twice a week, split the work reasonably, and reviewed each other's code
						on every merge request.
					</p>
				</div>

				<div className="space-y-5">
					{team.map((m) => (
						<Card key={m.name} className="bg-background">
							<div className="p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
								{/* Identity */}
								<div className="flex items-center gap-4 md:w-60 shrink-0">
									<div className="h-16 w-16 rounded-full bg-muted overflow-hidden flex items-center justify-center text-base font-semibold shrink-0">
										{m.photo ? (
											<img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover" />
										) : (
											m.initials
										)}
									</div>
									<div>
										<p className="font-semibold text-lg leading-tight">{m.name}</p>
										{m.role && <p className="text-sm text-muted-foreground mt-0.5">{m.role}</p>}
									</div>
								</div>

								{/* Contributions */}
								<div className="flex-1">
									<p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
										Contributions
									</p>
									<ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed">
										{m.contributions.map((c, i) => (
											<li key={i} className="flex gap-2">
												<span className="text-foreground/40 shrink-0">·</span>
												<span>{c}</span>
											</li>
										))}
									</ul>
								</div>

								{/* Skills */}
								<div className="md:w-52 shrink-0">
									<p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
										Skills gained
									</p>
									<div className="flex flex-wrap gap-1.5">
										{m.skills.map((s) => (
											<span key={s} className="rounded-full bg-muted px-2.5 py-1 text-xs">
												{s}
											</span>
										))}
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>

				{/* Photo gallery */}
				<div className="mt-20 overflow-x-auto">
					<div className="flex justify-center items-center -space-x-10 sm:-space-x-12 min-w-max px-8 py-8">
						{gallery.map((src, i) => {
							const layout = polaroidLayout[i % polaroidLayout.length];
							return (
								<figure
									key={src}
									className={cn(
										'relative bg-white p-3 shadow-xl shadow-black/15 transition-transform duration-300 hover:z-10 hover:scale-105 hover:rotate-0',
										layout.rotate,
										layout.translate,
									)}>
									<div className="w-32 h-40 sm:w-40 sm:h-52 bg-neutral-200 overflow-hidden">
										<img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
									</div>
								</figure>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
