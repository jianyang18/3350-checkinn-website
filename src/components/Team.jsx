import {Card, CardContent, CardHeader} from './ui/card.jsx';
import {cn} from '@/lib/utils';

const team = [
	{
		name: 'Jian Yang',
		initials: 'JY',
		role: 'Placeholder role',
		contributions: ['Placeholder contribution.', 'Placeholder contribution.'],
		skills: ['Java', 'JavaFX', 'JUnit'],
		photo: '/team/jian.png',
	},
	{
		name: 'Nithisha Karthikeyan',
		initials: 'NK',
		role: 'Placeholder role',
		contributions: ['Placeholder contribution.', 'Placeholder contribution.'],
		skills: ['Java', 'JavaFX'],
		photo: '/team/nithisha.png',
	},
	{
		name: 'Leif Magnusson',
		initials: 'LM',
		role: 'Placeholder role',
		contributions: ['Placeholder contribution.', 'Placeholder contribution.'],
		skills: ['Java', 'SQLite'],
		photo: '/team/leif.png',
	},
	{
		name: 'Baiel Nurmatbek uulu',
		initials: 'BN',
		role: 'Placeholder role',
		contributions: ['Placeholder contribution.', 'Placeholder contribution.'],
		skills: ['Java', 'Gradle'],
		photo: '/team/baiel.png',
	},
	{
		name: 'Dylan Zarn',
		initials: 'DZ',
		role: 'Placeholder role',
		contributions: ['Placeholder contribution.', 'Placeholder contribution.'],
		skills: ['Java', 'Mockito'],
		photo: '/team/dylan.png',
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
						Group 03 from COMP 3350 A01. We met twice a week, split the work by feature, and reviewed each other's code
						on every merge request.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
					{team.map((m) => (
						<Card key={m.name} className="bg-background">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="h-12 w-12 rounded-full bg-muted overflow-hidden flex items-center justify-center text-sm font-semibold shrink-0">
										{m.photo ? (
											<img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover" />
										) : (
											m.initials
										)}
									</div>
									<div>
										<p className="font-semibold leading-tight">{m.name}</p>
										{m.role && <p className="text-xs text-muted-foreground mt-0.5">{m.role}</p>}
									</div>
								</div>
							</CardHeader>
							<CardContent>
								{m.contributions.length > 0 && (
									<>
										<p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
											Contributions
										</p>
										<ul className="space-y-1 text-sm text-muted-foreground leading-relaxed mb-5">
											{m.contributions.map((c, i) => (
												<li key={i}>· {c}</li>
											))}
										</ul>
									</>
								)}
								<p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Skills gained</p>
								<div className="flex flex-wrap gap-1.5">
									{m.skills.map((s) => (
										<span key={s} className="rounded-full bg-muted px-2.5 py-1 text-xs">
											{s}
										</span>
									))}
								</div>
							</CardContent>
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
