import App from './App.svelte';
// import { render, fireEvent } from '@testing-library/svelte';

describe('App Component', () => {
  describe('Default Rendering', () => {
    it('- header', () => {
      const el = document.createElement('div');
      new App({
        target: el
      });
      const heading = el.querySelector('h1');
      expect(heading.textContent).toBe('edm00se/uses');
    });
    it('- categories', () => {
      const el = document.createElement('div');
      new App({
        target: el
      });
      const cats = el.querySelectorAll('div.category');
      expect(cats.length>0).toBeTruthy();
    });
  });
});