if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const o=e=>c(e,i),r={module:{uri:i},exports:n,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(f(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rocaz"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.17e3a11b.js",revision:"04289b138b19f3505672626da7a245e5"},{url:"assets/CardComponent.7ee056f0.js",revision:"883dfbf084585f1b85f847b4e0763984"},{url:"assets/ClientIndex.c1e03c6e.js",revision:"ddfc3e5b213f3e1bd7a0e8371ccd3741"},{url:"assets/ClosePopup.3f6f3551.js",revision:"b5cd2c6016fc87e8438d4ddc1624b135"},{url:"assets/ErrorNotFound.c7d1c219.js",revision:"6263da93eb79035972141d954221b078"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"738bf163f67ee46199d6d5f2af7fecf6"},{url:"assets/format.e93c79aa.js",revision:"73a33eddf08345e4dc8cc7c256fa91f3"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.02214b57.css",revision:"ae2f6888595c52e9f02b627dfa679eb2"},{url:"assets/index.6e00ca2e.js",revision:"6318e190a524de091170bb08a1f4a323"},{url:"assets/IndexPage.d67eddf6.js",revision:"2cd00f7a863e2e23c1d7be57246de837"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LoginPage.61472432.css",revision:"cd4f0d8481e21e8f1f3ecadd7298f0ae"},{url:"assets/LoginPage.c3d94ee0.js",revision:"97c902cd36e9857e2850ea95645d9ff2"},{url:"assets/MainLayout.31bcbb11.js",revision:"1d9b81071558ffcff31a73f5df2c97b0"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProductosPage.a7b2c0c3.js",revision:"b9feba3fd9c87ff7e672f35c53b40581"},{url:"assets/ProductsComponents.ef2ccf86.js",revision:"2ad02f0f8c6d12035f661b710a141663"},{url:"assets/QForm.575858e5.js",revision:"1cfb6d256a9bed1e8258a1d95711673f"},{url:"assets/QImg.f53ed72d.js",revision:"2a7596fcfb149208025ec38e0ed32012"},{url:"assets/QList.d98483c0.js",revision:"d545297115268eabce1cea60cd94a4d2"},{url:"assets/QPageContainer.290f1f92.js",revision:"af6e31bc1659ff4d660c4c5a11c15527"},{url:"assets/QScrollObserver.36a0f757.js",revision:"49d0e7818c5e1255d065397e12219904"},{url:"assets/QSpace.07f2d92e.js",revision:"b79683ac16f0c031d2890f5f934f5617"},{url:"assets/QTr.c8015ac2.js",revision:"95aba67647d0d9685a8cdae21e3992c2"},{url:"assets/SalePage.fa0d7868.js",revision:"6f70b09400d58750a54b3e01f100c2b8"},{url:"assets/TouchPan.d581682e.js",revision:"052fb94130625de4c2c29ac798036c0b"},{url:"default.png",revision:"f3b43d626ebe5d6a773a490f45f4cc41"},{url:"favicon.ico",revision:"54c983fefb0fe442497906cec7f87eae"},{url:"fondoLogin.jpg",revision:"738bf163f67ee46199d6d5f2af7fecf6"},{url:"icons/apple-icon-120x120.png",revision:"f5f49842f227fcc80a53fbe389be27ee"},{url:"icons/apple-icon-152x152.png",revision:"1f3ed8e02c123dc2b5668043d29a5253"},{url:"icons/apple-icon-167x167.png",revision:"93b9c5154df020a19283cf2b5015ad68"},{url:"icons/apple-icon-180x180.png",revision:"661bc1e9565f3bafcc0aea7fb6fda95c"},{url:"icons/apple-launch-1080x2340.png",revision:"7d9d50bf996b584a8386dcddcf2719cd"},{url:"icons/apple-launch-1125x2436.png",revision:"aeed0175ddfbbffd377937de52b5b5f8"},{url:"icons/apple-launch-1170x2532.png",revision:"4dbe62dccc62881104a493a3e810a514"},{url:"icons/apple-launch-1179x2556.png",revision:"fd249da3f0b025b9e4edaf4fc4a3a33c"},{url:"icons/apple-launch-1242x2208.png",revision:"4931b7f37f65f048aa8ae894f89190bb"},{url:"icons/apple-launch-1242x2688.png",revision:"780c29a2e557f5b46a3e76cd4c6969fd"},{url:"icons/apple-launch-1284x2778.png",revision:"7751f63e83d1aa7d3982f3bbac09d6d9"},{url:"icons/apple-launch-1290x2796.png",revision:"aeb8ab30b33dbdbd91377e52eb4ad48a"},{url:"icons/apple-launch-1536x2048.png",revision:"cfbf95580e5fc3864b56d85d6b38f8cf"},{url:"icons/apple-launch-1620x2160.png",revision:"79ad78d330858eaaba5d15a7ff17e5da"},{url:"icons/apple-launch-1668x2224.png",revision:"9d953f94c041c656f67152063f93a060"},{url:"icons/apple-launch-1668x2388.png",revision:"72971238518a88fcb603ef740990f894"},{url:"icons/apple-launch-2048x2732.png",revision:"73924f4572236e93efb85919ba16700e"},{url:"icons/apple-launch-750x1334.png",revision:"8faee3b7c989e492e590a1bf034c1057"},{url:"icons/apple-launch-828x1792.png",revision:"fbab42c3564b94e0f7cf9be691fc379c"},{url:"icons/favicon-128x128.png",revision:"e4883b4312db37c743e3295c28b7619c"},{url:"icons/favicon-16x16.png",revision:"949459540684f7359c2803fe8d5f2336"},{url:"icons/favicon-32x32.png",revision:"ab96068e42823d0026ca1c8fe4d19746"},{url:"icons/favicon-96x96.png",revision:"33e157ae31a7f737bcc256028a8ce30d"},{url:"icons/icon-128x128.png",revision:"e4883b4312db37c743e3295c28b7619c"},{url:"icons/icon-192x192.png",revision:"8465b2cf48a20d4913ec6ab5002e8906"},{url:"icons/icon-256x256.png",revision:"f51ac4776cf3bb4c8f1be219a0e0fa15"},{url:"icons/icon-384x384.png",revision:"4beafa1cba2d3aa84e0e49412af8ffcb"},{url:"icons/icon-512x512.png",revision:"48cc7582631cac1f474233587d16bcc1"},{url:"icons/ms-icon-144x144.png",revision:"5a298bf04106182beea7acc3371a4728"},{url:"icons/safari-pinned-tab.svg",revision:"b2c4eeafed619988828e16bca8b8f3b0"},{url:"index.html",revision:"1cb017978d0d23dcce42bd80b144b3de"},{url:"logo.png",revision:"293c7859ee97d5c9d377e78f1ad627a0"},{url:"manifest.json",revision:"61c7d7dac30be83039c19d6b70f2d1aa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
