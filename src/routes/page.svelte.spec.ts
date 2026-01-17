import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {

	it('- header', async () => {
		render(Page);
		
		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
		expect(heading).toHaveTextContent('edm00se/uses');
	});
	it('- categories', () => {
		render(Page);

		const cats = page.getByRole('heading', { level: 3 });
		expect(cats).toHaveLength(4);
	});
});
