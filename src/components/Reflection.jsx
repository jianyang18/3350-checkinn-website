import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from './ui/card.jsx';
import {Check, MessageSquare, Wrench, Lightbulb, Package, ChevronDown, HelpCircle, MessageCircle, ThumbsUp, ThumbsDown, RotateCcw, FlaskConical} from 'lucide-react';
import {cn} from '@/lib/utils';

/**
 * The reflection section is grouped by iteration.
 * Click a button at the top to switch which iteration's panel is shown.
 *
 * To add a new iteration: append an object to the `iterations` array below.
 * Every section (shipped / feedback / changed / learned / evidence) is optional.
 */
const iterations = [
	{
		id: 'i0',
		label: 'Iteration 0',
		subtitle: 'Planning before code',
		summary:
			'We chose the project we wanted to build, wrote the vision statement, and made clear who the app was for and what it was for. There was no code in this iteration, just pure planning.',
		whyThisProject: [
			'When we were brainstorming the project ideas, I suddenly remembered one of my experiences when traveling abroad. The reservation was made on Booking.com, and when we got to the hotel at midnight, the hotel told me they never received the order, and we had to contact Booking.com.',
			"That was frustrating, and I learned for the first time that a lot of the time, Booking.com doesn't connect to the hotel's internal management systems, and it's not rare to have such situations happen.",
			'So I thought, why not let the hotel itself have all the control to manage everything it needs, including getting bookings from clients directly?',
		],
		shipped: [
			'Vision statement: a hotel app for managers, front desk staff, and guests.',
			'Set up the repo on GitLab.',
			'Planned out features we wanted and came up with user stories.',
		],
		feedback: null,
		changed: null,
		learned: [
			"It's important to make sure the team is on the same track and everybody knows where the team is heading.",
			'It\'s important to have a "contract" to make sure the team knows what to do if anything unexpected happens.',
		],
		remarks: [
			"This iteration went well overall. We didn't spend too much time debating what to build. Everyone was pretty happy with creating a hotel management app.",
			'We came up with this super creative (I think) name: CheckInn. And everybody was able to express their vision about the app.',
		],
		evidence: null,
	},
	{
		id: 'i1',
		label: 'Iteration 1',
		subtitle: 'First build, first feedback',
		summary:
			'We got the core flows working in JavaFX. Sign up, browse rooms, book a stay, manage bookings. The marker came back with a list of things to fix.',
		shipped: [
			'Auth flow (sign up, log in)',
			'Browse rooms with type and date filters',
			'Book a room end to end',
			'Manage bookings (cancel, check in, check out)',
			'First pass at the JavaFX UI',
			'Fake repositories and unit tests for the business layer',
		],
		feedback: [
			'Business logic lived on the data classes. Booking and Room had workflow methods bolted onto them.',
			'Session state was held in a static field on SessionManager. Hard to test, hard to reason about.',
			'Validation threw raw IllegalArgumentException. No type for the controller to catch on, no message constants.',
			'Presentation and business were tangled. Controllers reached into the database directly in places.',
		],
		changed: null,
		learned: [
			'It\'s easy to say but hard to follow the strict "layered structure". Oftentimes things will get bolted together if we are not paying attention.',
			"Working as a team is very different from working alone. When working as a team, we often feel we have no control over the code, so it's very important to make sure the code being merged is reviewed properly.",
		],
		remarks: [
			'The Iteration 1 feedback was a really big wake-up call. We did really badly. We got 40% for Iteration 1, and the feedback was a wall of text.',
			'But we quickly realized what our issues were, and we quickly scheduled a meeting with Lauren to go over our project.',
			"The problem was how we divided the tasks for this iteration. Everyone was working on their own feature, so the final work was not a well-done project. The same logic was scattered in different places, and there was a ton of refactoring needed. And we finally realized why people say don't get sloppy for this course.",
		],
		evidence: null,
	},
	{
		id: 'i2',
		label: 'Iteration 2',
		subtitle: 'Rebuild the business layer',
		summary:
			"We took the marker's feedback seriously and rebuilt most of the business layer. We also shipped two new features: edit booking and manager-only account admin.",
		shipped: [
			'Edit booking flow (full update, not just notes)',
			'Manager-only account administration',
			'Room images on the browse cards',
			'DatabaseSeeder split out from DatabaseInitializer (schema vs data)',
			'Typed exception hierarchy and centralized error message constants',
			'More unit tests and integration tests',
			'Switched to Mockito for mocking the database in unit tests',
		],
		feedback: [
			'We caught our own anti-pattern: InvalidAccountDataException wraps ValidationException and AuthException for no real reason. Type info is lost. Stack trace is lost. The controller behaves the same way either way.',
			'Some filter operations (getUpcoming, getActive, getPast, getDailyBookings) load the full bookings table into Java and filter in a for loop. Works at our scale. Would not scale to a real hotel.',
			'ViewNavigator has if-checks with no else clauses. If null data slips through, the screen loads in a broken state and the controller crashes later.',
			'The grader found a few user-facing bugs. For example, the Browse Rooms page lets users view rooms for a past check-in date, which should be blocked.',
		],
		changed: [
			'Moved every workflow into a service class (BookingService, RoomService, AuthService, AccountAdminService).',
			'Booking, Room, and User became pure data carriers with no behavior.',
			'Replaced the static SessionManager with an instance UserManager injected through AppContext.',
			'Built a typed exception hierarchy: three abstract base classes (ValidationException, AuthException, BookingException) with around fourteen concrete subclasses.',
			'Pulled every error string into LogicConstants.',
			'Replaced magic permission integers with a PermissionLevel enum.',
			'Wrote Mockito unit tests for every service method and in-memory SQLite integration tests for the repository layer.',
		],
		learned: [
			'Refactor in small steps. Run the test suite after every change.',
			'Composition Root is enough for a project this size. No DI framework needed.',
			'Do not wrap your own exceptions just to make a catch block shorter. Declare them in throws and use multi-catch.',
			"It's important to follow all principles when building a project. They are not only there for fun, but for a practical purpose. If all principles were followed, adding a feature or modifying logic would be easy. And having a clear structure, so that other people can easily inherit the project or understand what it's doing, is so important.",
		],
		evidence: [
			'Business layer test coverage at 99%',
			'Clear separation of responsibilities across layers',
			'No hardcoded string, no magic number, only constants',
			'Zero raw RuntimeException thrown from business code',
		],
		remarks: [
			'The feedback came back and we got 68%. This is by no means a good grade, but considering we went from 40% to 68% in just a week, I consider it a win for us.',
			'We not only worked on all the feedback from Iteration 1 and made sure EVERYTHING in the feedback was addressed, but also went over the entire project. We applied the layered structure and SOLID principles to scrutinize the project, to see if there was anything that violated SOLID principles, if there was any duplicated code, and whether refactoring was needed.',
			'68% is a low-ish grade, but we were proud of ourselves.',
		],
	},
	{
		id: 'i3',
		label: 'Iteration 3',
		subtitle: 'Final features, cleanup, and tests',
		summary:
			'We finished the last features, cleaned up the design one more time, and added end-to-end tests. We also built the presentation website and recorded the demo. This is the final iteration, so there is no marker feedback to respond to yet.',
		shipped: [
			'My Bookings page so guests can view and edit their own bookings.',
			'Manage Rooms page so managers can add and update rooms.',
			'Daily bookings view showing who checks in or out today.',
			'End-to-end tests with TestFX that drive the real JavaFX UI.',
			'The presentation website and the demo video.',
		],
		feedback: null,
		changed: [
			'Extracted UserFactory so sign-up and account admin both build users the same way, in one database write instead of two.',
			'Replaced the raw RuntimeExceptions in the persistence layer with a typed DatabaseException hierarchy, declared on the repository interfaces.',
			'Added double-booking prevention so a room cannot be booked for dates that overlap an existing booking.',
			'Locked past dates and non-date input on the date pickers.',
			'Made the seeded booking dates relative to today so the demo data stays current.',
		],
		learned: [
			'End-to-end UI tests are fragile across machines. They fail when the test clicks before the screen has rendered, so we added waits to make them reliable.',
			'An interface should declare what it can throw. Hiding a RuntimeException behind a clean signature is dishonest about how the code can fail.',
			'Do not wrap your own exceptions just to shorten a catch block. A lean exception hierarchy is easier to follow than a deep one.',
		],
		evidence: null,
		remarks: null,
	},
	{
		id: 'final',
		label: 'Final thoughts',
		subtitle: 'Stepping back from the iterations',
		summary: "It was hard and stressful, but we learned, so it's worth it.",
		shipped: null,
		feedback: null,
		changed: null,
		learned: null,
		evidence: null,
		workedWell: [
			"Everyone was willing to put effort into this project, no matter how good or bad we were with the tech tasks. We all tried to make contributions and own a part of the final project.",
			"We had a rocky start, but we quickly changed how we operated, fixed our mistakes, and were able to get back on track so it didn't keep getting worse.",
			"There was no argument, no blaming each other, no denying mistakes.",
		],
		didNotWork: [
			"We had many visions about the project, but weren't able to make them all happen due to time constraints.",
			"Grades were not ideal for some of the iterations. Not that this is the only thing we care about, but it would be better if we could have a good grade WHILE learning so much from this project.",
			"We didn't make sure everybody got the opportunity to work on all aspects of the project. The ideal situation would be that everybody gets to work on every aspect, from designing the interface to creating SQL queries to writing tests. But we didn't have time to exchange that knowledge.",
		],
		doDifferently: [
			"Scale down a little bit and slow the pace down, especially for Iteration 1. We wanted to put too many features in Iteration 1, and everybody created some sort of feature separately. The result was that we didn't have time to go over the project as a whole and take time to do refactoring.",
			"Learn principles like separation of concerns and SOLID before we started working on this project. That knowledge came in after we had already done some of the work, so we had to spend more time going back to make changes. If we had that knowledge beforehand, the project structure would be cleaner from the beginning.",
		],
		testingStrategy: [
			"Unit tests cover the business logic. The database is mocked with Mockito so each service method runs in isolation and the test only checks the rules, not the SQL.",
			"Integration tests cover the database itself. The repositories run against a real SQLite database so we know the queries actually work.",
			"Shared fixtures (users, dates, IDs) live in TestingConstants so every test pulls the same values. The suite stays short and consistent.",
		],
		remarks: null,
	},
];

const sectionDefs = [
	{
		key: 'shipped',
		label: 'What we shipped',
		icon: Package,
	},
	{
		key: 'feedback',
		label: 'Feedback we got',
		icon: MessageSquare,
	},
	{
		key: 'changed',
		label: 'What we changed',
		icon: Wrench,
	},
	{
		key: 'learned',
		label: 'What we learned',
		icon: Lightbulb,
	},
	{
		key: 'workedWell',
		label: 'What worked well',
		icon: ThumbsUp,
	},
	{
		key: 'didNotWork',
		label: 'What did not work well',
		icon: ThumbsDown,
	},
	{
		key: 'doDifferently',
		label: 'What we would do differently',
		icon: RotateCcw,
	},
	{
		key: 'testingStrategy',
		label: 'Testing strategy',
		icon: FlaskConical,
	},
];

export default function Reflection() {
	const [activeId, setActiveId] = useState(iterations[0].id);
	const [expanded, setExpanded] = useState(false);
	const active = iterations.find((i) => i.id === activeId);

	// Reset to collapsed when switching iterations so the page stays scannable.
	function switchIteration(id) {
		setActiveId(id);
		setExpanded(false);
	}

	// If the number of populated section cards is even, Remarks would land
	// alone in its own row, so let it span both columns. Otherwise it pairs
	// up with the last section card.
	const populatedSectionCount = sectionDefs.filter(({key}) => active[key] && active[key].length > 0).length;
	const remarksSpansFull = populatedSectionCount % 2 === 0;

	// Quick stats for the summary view: count of items in each section.
	const counts = sectionDefs
		.map(({key, label}) => ({
			label,
			count: active[key]?.length ?? 0,
		}))
		.filter((s) => s.count > 0);

	return (
		<section id="reflection" className="py-32">
			<div className="container">
				<div className="max-w-2xl mb-12">
					<p className="text-sm font-medium text-muted-foreground mb-3">Reflection</p>
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
						What we learned, iteration by iteration.
					</h2>
					<p className="mt-6 text-lg text-muted-foreground leading-relaxed">
						Pick an iteration to see what we built, what came back from the marker, and what we did about it.
					</p>
				</div>

				{/* Iteration tabs */}
				<div className="mb-10 flex flex-wrap gap-2">
					{iterations.map((it) => (
						<button
							key={it.id}
							onClick={() => switchIteration(it.id)}
							className={cn(
								'rounded-full px-5 py-2.5 text-sm font-medium transition-colors border',
								activeId === it.id
									? 'bg-primary text-primary-foreground border-primary'
									: 'bg-background text-foreground border-border hover:bg-muted',
							)}>
							{it.label}
						</button>
					))}
				</div>

				{/* Active iteration: summary panel (always visible) */}
				<div key={active.id} className="animate-fade-up">
					<Card className="bg-background mb-5">
						<CardContent className="p-8">
							<p className="text-sm font-medium text-muted-foreground mb-2">{active.subtitle}</p>
							<p className="text-xl text-foreground leading-relaxed max-w-3xl mb-6">{active.summary}</p>

							{/* Optional "Why this project" block, only on iterations that have it */}
							{active.whyThisProject && (
								<div className="mb-6 rounded-xl bg-muted/60 border-l-2 border-foreground/30 pl-5 pr-4 py-4 max-w-3xl">
									<div className="flex items-center gap-2 mb-3">
										<HelpCircle className="h-4 w-4 text-foreground" />
										<span className="text-sm font-semibold">Why this project?</span>
									</div>
									{active.whyThisProject.map((para, i) => (
										<p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">
											{para}
										</p>
									))}
								</div>
							)}

							{/* Section preview chips: shows what's inside before expanding */}
							<div className="flex flex-wrap gap-2 mb-6">
								{counts.map((c) => (
									<span
										key={c.label}
										className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
										<span className="font-semibold text-foreground">{c.count}</span>
										{c.label.toLowerCase()}
									</span>
								))}
								{active.evidence && (
									<span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
										<span className="font-semibold text-foreground">{active.evidence.length}</span>
										pieces of evidence
									</span>
								)}
							</div>

							<button
								onClick={() => setExpanded((e) => !e)}
								className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-muted transition-colors">
								{expanded ? 'Show less' : 'Read more'}
								<ChevronDown className={cn('h-4 w-4 transition-transform', expanded && 'rotate-180')} />
							</button>
						</CardContent>
					</Card>

					{/* Expanded detail: only renders when the user opts in */}
					{expanded && (
						<div className="animate-fade-up">
							<div className="grid md:grid-cols-2 gap-5 mb-5">
								{sectionDefs.map(({key, label, icon: Icon}) => {
									const items = active[key];
									if (!items) return null;
									return (
										<Card key={key} className="bg-background">
											<CardHeader>
												<Icon className="h-5 w-5 text-foreground mb-2" />
												<CardTitle>{label}</CardTitle>
											</CardHeader>
											<CardContent>
												<ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
													{items.map((item, i) => (
														<li key={i} className="flex gap-2">
															<span className="text-foreground/40 shrink-0">·</span>
															<span>{item}</span>
														</li>
													))}
												</ul>
											</CardContent>
										</Card>
									);
								})}

								{active.remarks && (
									<Card className={cn('bg-background', remarksSpansFull && 'md:col-span-2')}>
										<CardHeader>
											<MessageCircle className="h-5 w-5 text-foreground mb-2" />
											<CardTitle>Remarks</CardTitle>
										</CardHeader>
										<CardContent>
											{active.remarks.map((para, i) => (
												<p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0">
													{para}
												</p>
											))}
										</CardContent>
									</Card>
								)}
							</div>

							{active.evidence && (
								<Card className="bg-muted/40">
									<CardHeader>
										<Check className="h-5 w-5 text-foreground mb-2" />
										<CardTitle>Evidence of improvement</CardTitle>
									</CardHeader>
									<CardContent>
										<ul className="grid sm:grid-cols-2 gap-2 text-sm">
											{active.evidence.map((e) => (
												<li key={e} className="flex items-start gap-2 text-foreground">
													<Check className="h-4 w-4 mt-0.5 shrink-0" />
													<span>{e}</span>
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
