import { describe, expect, it } from 'vitest';
import { PUBLIC_APP_ORIGIN } from '$env/static/public';
import { home } from './home.js';

/**
 * These tests pin the home page's *content decisions* (structure, order,
 * banned terms, CTA target) — not rendered markup. See PRD #23 / issue #24,
 * "Testing Decisions": the content/structure module is the single test seam.
 */

/** Recursively collect every string value reachable from a value. */
function collectStrings(value: unknown, out: string[] = []): string[] {
	if (typeof value === 'string') {
		out.push(value);
	} else if (Array.isArray(value)) {
		for (const item of value) collectStrings(item, out);
	} else if (value && typeof value === 'object') {
		for (const v of Object.values(value)) collectStrings(v, out);
	}
	return out;
}

describe('home content: hero', () => {
	it('has non-empty headline and subhead', () => {
		expect(home.hero.headline.trim().length).toBeGreaterThan(0);
		expect(home.hero.subhead.trim().length).toBeGreaterThan(0);
	});
});

describe('home content: sections', () => {
	it('has exactly three sections in the required order', () => {
		expect(home.sections).toHaveLength(3);
		expect(home.sections.map((s) => s.id)).toEqual(['how-it-feels', 'payoff', 'host-tools']);
	});

	it('every section has a title and at least one point', () => {
		for (const section of home.sections) {
			expect(section.title.trim().length).toBeGreaterThan(0);
			expect(section.points.length).toBeGreaterThan(0);
			for (const point of section.points) {
				expect(point.trim().length).toBeGreaterThan(0);
			}
		}
	});
});

describe('home content: cta', () => {
	it('links to the configured app origin root', () => {
		expect(home.cta.href).toBe(new URL('/', PUBLIC_APP_ORIGIN).href);
	});

	it('has a non-empty label', () => {
		expect(home.cta.label.trim().length).toBeGreaterThan(0);
	});

	it('is the only link/href in the module (no secondary CTA)', () => {
		const hrefs = collectStrings(home).filter(
			(s) => s.startsWith('http://') || s.startsWith('https://')
		);
		expect(hrefs).toEqual([home.cta.href]);
	});
});

describe('home content: banned terms', () => {
	const banned = [
		'plenum',
		'candidate game',
		'analysis tree',
		'anticipated reply',
		'wildcard reply',
		'assessment symbol',
		'soundness bonus',
		'assessment bonus',
		'chessground',
		'trivia'
	];

	it('contains none of the banned terms (case-insensitive)', () => {
		const haystack = collectStrings(home).join('\n').toLowerCase();
		for (const term of banned) {
			expect(haystack).not.toContain(term);
		}
	});
});

describe('home content: footer', () => {
	it('lists all four supported languages', () => {
		for (const language of ['English', 'German', 'Spanish', 'French']) {
			expect(home.footer.languages).toContain(language);
		}
	});

	it('has a growing-game-library note without fixed/ceiling phrasing', () => {
		expect(home.footer.gamesNote.trim().length).toBeGreaterThan(0);
		const note = home.footer.gamesNote.toLowerCase();
		for (const phrase of ['only one game', 'single game', 'one fixed game']) {
			expect(note).not.toContain(phrase);
		}
	});
});
