if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const f=e=>s(e,n),l={module:{uri:n},exports:o,require:f};i[n]=Promise.all(r.map((e=>l[e]||f(e)))).then((e=>(c(...e),o)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"dxboffplan"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.64aff16b.css",revision:null},{url:"/img/avatar.jpg",revision:"fbe8b9db40d5eca8dc4ac8476895f99e"},{url:"/img/logo.png",revision:"4f2e97affc6d0592a6e9dcee96435708"},{url:"/index.html",revision:"c314d7a2c7de658c594a5ed1c6b85adb"},{url:"/items/1.jpeg",revision:"7baa34326c7d813014fb7ac9f90a7508"},{url:"/items/2.jpg",revision:"a600f0857d70eaa7d94fef2c7c9068bb"},{url:"/items/3.jpg",revision:"fbb308010e378b4637d788271e823591"},{url:"/items/4.jpeg",revision:"7baa34326c7d813014fb7ac9f90a7508"},{url:"/items/5.webp",revision:"34b3b8f05e879882736b56c5b9ec9713"},{url:"/items/6.jpg",revision:"10f06c5de2342ffbccf539fe2db4f17c"},{url:"/items/7.jpg",revision:"9e2aceea89e7da6419a4afbaed31edca"},{url:"/js/about.7b598219.js",revision:null},{url:"/js/app.74ecc1bf.js",revision:null},{url:"/js/chunk-vendors.2180474d.js",revision:null},{url:"/manifest.json",revision:"14bff47eb9d9eb23fc8c46594cc72e25"},{url:"/nunito.css",revision:"f69817409e30278ec23f6778c37e6e77"},{url:"/nunito.woff2",revision:"86b73ab5f530be7984b704414f2a711d"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
