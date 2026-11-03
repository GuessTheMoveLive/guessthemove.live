import { PUBLIC_APP_ORIGIN } from '$env/static/public';

/**
 * Home page content and structure (PRD #23 / issue #24).
 *
 * This is the single source of the page's copy and ordering — the route
 * renders from here, nothing is hand-written into markup. Editing wording,
 * reordering sections, or adding a point happens here, not in components.
 *
 * Copy constraints (enforced by `home.test.ts`): no canonical glossary jargon
 * (phrased plainly for a chess-club organizer), none of the not-yet-shipped
 * concepts, and "trivia" is never used as the category label. See `CONTEXT.md`
 * and `docs/feature-catalog.md`.
 */

export interface HomeHero {
	headline: string;
	subhead: string;
}

export interface HomeSection {
	/** Stable identifier used for ordering and rendering, not shown to users. */
	id: 'how-it-feels' | 'payoff' | 'host-tools';
	title: string;
	blurb: string;
	points: string[];
}

export interface HomeCta {
	label: string;
	href: string;
}

export interface HomeFooter {
	languages: string[];
	gamesNote: string;
}

export interface HomeContent {
	hero: HomeHero;
	sections: HomeSection[];
	cta: HomeCta;
	footer: HomeFooter;
}

export const home: HomeContent = {
	hero: {
		headline: 'Club night has gone quiet. Everyone is on their phone instead of the board.',
		subhead:
			'Turn those phones into the game: the whole room calls the next move of a real master game, one move at a time, and earns points for how good the move is — not for being fastest.'
	},
	sections: [
		{
			id: 'how-it-feels',
			title: 'How a club night runs',
			blurb:
				'One shared screen at the front of the room, everyone else on the phone already in their pocket. No app to install, no sign-up.',
			points: [
				'Members join in seconds by scanning a code or typing a short room code into a browser.',
				'The big screen up front runs the night for the whole room while everyone plays along privately.',
				'Each person taps the move they would play on their own phone — the board stays hidden so nobody can peek ahead.',
				"Everyone's choice is locked in and stays private until the answer is shown to the room."
			]
		},
		{
			id: 'payoff',
			title: 'The moments the room remembers',
			blurb:
				'The reason people look up from their phones and start talking to each other again.',
			points: [
				'Standings animate between moves — rows count up and change places, so the room watches the shake-up happen instead of just reading a number.',
				'The instant the move is shown, each phone gets its own plain-English verdict: how the chosen move stacked up against the one actually played.',
				'The night ends on a built-up podium — third, then second, then first — with a medal for the top finishers.',
				'Everyone can take the whole game home as a standard chess file, annotated with their own calls, to open in any chess app or site.'
			]
		},
		{
			id: 'host-tools',
			title: 'Built for the person running it',
			blurb:
				'You keep full control of the room without any of it getting in the way of the night.',
			points: [
				'A private roster shows everyone in the room and their running totals, even while the standings stay hidden from the floor.',
				'Remove anyone who is being disruptive, straight from that roster.',
				'Send the room back to the start, or close it down entirely, with a confirm step so one tap never wipes a live night.',
				'Add or take back thirty seconds on the clock on the fly, and move on the moment everyone has answered.'
			]
		}
	],
	cta: {
		label: 'Host a session',
		href: new URL('/', PUBLIC_APP_ORIGIN).href
	},
	footer: {
		languages: ['English', 'German', 'Spanish', 'French'],
		gamesNote: 'New games are added regularly, so the room always has something fresh to play.'
	}
};
