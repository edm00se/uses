<div class="wrapper">
	<h1><a href="https://edm00se.codes/">edm00se</a><b>/uses</b></h1>

	<div class="stuff">

		<div class="category">
			<h3>Code Crafting</h3>
			<ul>
				<li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VS Code</a>, currently the best DX and is speedy</li>
				<li><a href="https://hyper.is/" target="_blank" rel="noopener noreferrer">Hyper</a>, for a sweet terminal</li>
				<li><a href="https://github.com/edm00se/vue-parcel-starter" target="_blank" rel="noopener noreferrer">vue-parcel-starter</a>, for some preconfigured awesomeness with vue, parcel, jest, and more</li>
				<li><a href="https://github.com/edm00se/svelte3-parcel-starter" target="_blank" rel="noopener noreferrer">svelte3-parcel-starter</a>, for some preconfigured awesomeness with svelte3, parcel, jest, and more</li>
			</ul>
		</div>

		<div class="category">
			<h3>Tooling</h3>
			<ul>
				<li><a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">Parcel</a>, whenever possible</li>
				<li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">vue.js</a>, or <a href="https://gridsome.org/" target="_blank" rel="noopener noreferrer">gridsome</a>, when I can</li>
				<li><a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>, on those other times when I can</li>
				<li><a href="https://angular.io/" target="_blank" rel="noopener noreferrer">angular</a>, when I need to</li>
				<li><a href="http://typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>, on the big stuff</li>
				<li><a href="https://sass-lang.com/documentation/syntax" target="_blank" rel="noopener noreferrer">scss</a>, by default</li>
				<li><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">jest</a>, for an excellent unit testing experience</li>
				<li><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">Prettier</a>, to keep my code clean and readable</li>
				<li><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">eslint</a>, to keep my ducks in a row</li>
			</ul>
		</div>

		<div class="category">
			<h3>Stack</h3>
			<ul>
				<li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>, for all the obvious reasons</li>
				<li><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">netlify</a>, when I can</li>
				<li><a href="https://now.sh/" target="_blank" rel="noopener noreferrer">now (zeit)</a>, also when I can</li>
				<li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">node.js</a>, JavaScript for the server and tooling</li>
				<li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm</a>, because it's official and darned good</li>
			</ul>
		</div>

		<div class="category">
			<h3>Gear</h3>
			<ul>
				<li><a href="https://www.apple.com/macbook-pro-16/" target="_blank" rel="noopener noreferrer">MacBook Pro</a></li>
				<li><a href="https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/" target="_blank" rel="noopener noreferrer">Herman Miller Aeron chair</a></li>
				<li>sitting/standing desk</li>
				<li><a href="https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/d7500.html" target="_blank" rel="noopener noreferrer">Nikon D7500</a>, for photography</li>
				<li><a href="https://www.creality3d.shop/collections/cr-series/products/creality-cr-10-3d-printer-prusa-i3-diy-kit-aluminum-large-print-size-300x300x400mm"  target="_blank" rel="noopener noreferrer">Creality CR-10</a>, for 3D printing</li>
			</ul>
		</div>

	</div>

</div>

<style>
	.wrapper {
		height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
	}

	.stuff {
		/* display: grid; */
		/* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
		display: flex;
		flex-wrap: wrap;
		max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
	}

	.category {
    text-align: left;
		min-width: 20em;
	}

	.category h3 {
		text-align: center;
	}

	h1 {
		font-weight: 100;
		text-align: center;
	}

	a {
		color: #d07922;
	}
	ul {
		list-style: none;
	}

	@media screen and (max-width:690px) {
		.stuff {
			text-align: center;
    	display: block;
		}
	}
</style>
