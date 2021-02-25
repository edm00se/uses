var app=function(){"use strict";function e(){}function t(e){return e()}function r(){return Object.create(null)}function n(e){e.forEach(t)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e){e.parentNode.removeChild(e)}let o;function i(e){o=e}const c=[],f=[],p=[],h=[],u=Promise.resolve();let d=!1;function w(e){p.push(e)}let g=!1;const k=new Set;function v(){if(!g){g=!0;do{for(let e=0;e<c.length;e+=1){const t=c[e];i(t),m(t.$$)}for(c.length=0;f.length;)f.pop()();for(let e=0;e<p.length;e+=1){const t=p[e];k.has(t)||(k.add(t),t())}p.length=0}while(c.length);for(;h.length;)h.pop()();d=!1,g=!1,k.clear()}}function m(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(w)}}const b=new Set;function y(e,t){-1===e.$$.dirty[0]&&(c.push(e),d||(d=!0,u.then(v)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function _(s,c,f,p,h,u,d=[-1]){const g=o;i(s);const k=c.props||{},m=s.$$={fragment:null,ctx:null,props:u,update:e,not_equal:h,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:r(),dirty:d};let _=!1;if(m.ctx=f?f(s,k,(e,t,...r)=>{const n=r.length?r[0]:t;return m.ctx&&h(m.ctx[e],m.ctx[e]=n)&&(m.bound[e]&&m.bound[e](n),_&&y(s,e)),t}):[],m.update(),_=!0,n(m.before_update),m.fragment=!!p&&p(m.ctx),c.target){if(c.hydrate){const e=function(e){return Array.from(e.childNodes)}(c.target);m.fragment&&m.fragment.l(e),e.forEach(l)}else m.fragment&&m.fragment.c();c.intro&&(($=s.$$.fragment)&&$.i&&(b.delete($),$.i(x))),function(e,r,s){const{fragment:l,on_mount:o,on_destroy:i,after_update:c}=e.$$;l&&l.m(r,s),w(()=>{const r=o.map(t).filter(a);i?i.push(...r):n(r),e.$$.on_mount=[]}),c.forEach(w)}(s,c.target,c.anchor),v()}var $,x;i(g)}function $(t){let r;return{c(){var e,t,n,a;e="div",r=document.createElement(e),r.innerHTML='<h1 class="svelte-1ksn3wa"><a href="https://edm00se.codes/" class="svelte-1ksn3wa">edm00se</a><b>/uses</b></h1> \n\n\t<div class="stuff svelte-1ksn3wa"><div class="category svelte-1ksn3wa"><h3 class="svelte-1ksn3wa">Code Crafting</h3> \n\t\t\t<ul class="svelte-1ksn3wa"><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">VS Code</a>, currently the best DX and is speedy</li> \n\t\t\t\t<li><a href="https://hyper.is/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">Hyper</a>, for a sweet terminal</li> \n\t\t\t\t<li><a href="https://github.com/edm00se/vue-parcel-starter" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">vue-parcel-starter</a>, for some preconfigured awesomeness with vue, parcel, jest, and more</li> \n\t\t\t\t<li><a href="https://github.com/edm00se/svelte3-parcel-starter" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">svelte3-parcel-starter</a>, for some preconfigured awesomeness with svelte3, parcel, jest, and more</li></ul></div> \n\n\t\t<div class="category svelte-1ksn3wa"><h3 class="svelte-1ksn3wa">Tooling</h3> \n\t\t\t<ul class="svelte-1ksn3wa"><li><a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">Parcel</a>, whenever possible</li> \n\t\t\t\t<li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">vue.js</a>, or <a href="https://gridsome.org/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">gridsome</a>, when I can</li> \n\t\t\t\t<li><a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">Svelte</a>, on those other times when I can</li> \n\t\t\t\t<li><a href="https://angular.io/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">angular</a>, when I need to</li> \n\t\t\t\t<li><a href="http://typescriptlang.org/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">TypeScript</a>, on the big stuff</li> \n\t\t\t\t<li><a href="https://sass-lang.com/documentation/syntax" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">scss</a>, by default</li> \n\t\t\t\t<li><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">jest</a>, for an excellent unit testing experience</li> \n\t\t\t\t<li><a href="https://prettier.io/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">Prettier</a>, to keep my code clean and readable</li> \n\t\t\t\t<li><a href="https://eslint.org/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">eslint</a>, to keep my ducks in a row</li></ul></div> \n\n\t\t<div class="category svelte-1ksn3wa"><h3 class="svelte-1ksn3wa">Stack</h3> \n\t\t\t<ul class="svelte-1ksn3wa"><li><a href="https://github.com" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">GitHub</a>, for all the obvious reasons</li> \n\t\t\t\t<li><a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">netlify</a>, when I can</li> \n\t\t\t\t<li><a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">vercel <s>now (zeit)</s></a>, also when I can</li> \n\t\t\t\t<li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">node.js</a>, JavaScript for the server and tooling</li> \n\t\t\t\t<li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">npm</a>, because it&#39;s official and darned good</li></ul></div> \n\n\t\t<div class="category svelte-1ksn3wa"><h3 class="svelte-1ksn3wa">Gear</h3> \n\t\t\t<ul class="svelte-1ksn3wa"><li><a href="https://www.apple.com/macbook-pro-16/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">MacBook Pro</a></li> \n\t\t\t\t<li><a href="https://www.hermanmiller.com/products/seating/office-chairs/aeron-chairs/" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">Herman Miller Aeron chair</a></li> \n\t\t\t\t<li>sitting/standing desk</li> \n\t\t\t\t<li><a href="https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/d7500.html" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">Nikon D7500</a>, for photography</li> \n\t\t\t\t<li><a href="https://www.creality3dofficial.com/products/creality-cr-10-3d-printer" target="_blank" rel="noopener noreferrer" class="svelte-1ksn3wa">Creality CR-10</a>, for 3D printing</li> \n\t\t\t\t<li><a href="https://www.raspberrypi.org/" class="svelte-1ksn3wa">Raspberry Pi</a> with <a href="https://octoprint.org/" class="svelte-1ksn3wa">Octoprint</a>, along with <a href="https://cloud.raise3d.com/" class="svelte-1ksn3wa">RaiseCloud</a>, for smart 3D printer control and remote management</li> \n\t\t\t\t<li><a href="https://ultimaker.com/software/ultimaker-cura" class="svelte-1ksn3wa">Cura</a> and <a href="https://www.ideamaker.io/" class="svelte-1ksn3wa">ideaMaker</a>, for slicing 3D models into gcode to print</li></ul></div></div>',t=r,n="class",null==(a="wrapper svelte-1ksn3wa")?t.removeAttribute(n):t.getAttribute(n)!==a&&t.setAttribute(n,a)},m(e,t){!function(e,t,r){e.insertBefore(t,r||null)}(e,r,t)},p:e,i:e,o:e,d(e){e&&l(r)}}}return new class extends class{$destroy(){!function(e,t){const r=e.$$;null!==r.fragment&&(n(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);-1!==e&&r.splice(e,1)}}$set(){}}{constructor(e){super(),_(this,e,null,$,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map