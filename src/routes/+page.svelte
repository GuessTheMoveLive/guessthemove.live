<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';
	import { home } from '$lib/content/home.js';
</script>

<main class="mx-auto flex min-h-svh max-w-3xl flex-col gap-24 px-6 py-20">
	<section class="flex flex-col gap-6 text-center">
		<h1 class="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
			{home.hero.headline}
		</h1>
		<p class="text-lg text-muted-foreground">{home.hero.subhead}</p>
	</section>

	{#each home.sections as section (section.id)}
		<section class="flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<h2 class="text-2xl font-semibold tracking-tight text-foreground">{section.title}</h2>
				<p class="text-muted-foreground">{section.blurb}</p>
			</div>
			<div class="grid gap-4 sm:grid-cols-2">
				{#each section.points as point, i (i)}
					<Card>
						<CardContent>
							<p class="text-foreground">{point}</p>
						</CardContent>
					</Card>
				{/each}
			</div>
		</section>
	{/each}

	<section class="flex flex-col items-center gap-4 text-center">
		<Button href={home.cta.href} size="lg">{home.cta.label}</Button>
	</section>

	<footer
		class="flex flex-col gap-2 border-t border-border pt-8 text-center text-sm text-muted-foreground"
	>
		<p>Available in {home.footer.languages.join(', ')}.</p>
		<p>{home.footer.gamesNote}</p>
	</footer>
</main>
