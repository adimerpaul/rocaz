if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const r=e=>a(e,f),o={module:{uri:f},exports:n,require:r};s[f]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rocaz"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.76950520.js",revision:"73f55990ed8ef9dd51c4811f983d7996"},{url:"assets/CalculatePage.199917b1.js",revision:"b52b5ff3d2ea9f82283c5d02e71a0a39"},{url:"assets/CardComponent.41919614.js",revision:"12d950ad514baa038835a52a41800280"},{url:"assets/ClientIndex.21fc85a6.js",revision:"29084b70a23a9fae4f3c2dab395322ec"},{url:"assets/ClosePopup.4dda377d.js",revision:"1f9e0a4f03a86eac85f98fb35cb0b4e4"},{url:"assets/CompraHistoryPage.7528d14a.js",revision:"0617297e723ccc3b232a584a53951dcb"},{url:"assets/CompraPage.d1fa62a8.js",revision:"4fd43adea7649b0f557307d4aeb0a62a"},{url:"assets/ErrorNotFound.3e79c836.js",revision:"e804e6373527f992ab2dc0d8e1e1b1a2"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"738bf163f67ee46199d6d5f2af7fecf6"},{url:"assets/format.6195abe1.js",revision:"c61b227694def61f08b6f8c885897c53"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/Imprimir.8bd35938.js",revision:"97172d8f2cc00611ef08b8910dc65e40"},{url:"assets/index.02214b57.css",revision:"ae2f6888595c52e9f02b627dfa679eb2"},{url:"assets/index.6918b5a8.js",revision:"187f6587a0e95563ba042e3937377248"},{url:"assets/IndexPage.777a805f.js",revision:"35501bf4ea0a2a144644bd3e0b50b745"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LoginPage.61472432.css",revision:"cd4f0d8481e21e8f1f3ecadd7298f0ae"},{url:"assets/LoginPage.b51b9643.js",revision:"6a9c61de9353be6e191598b15101523a"},{url:"assets/MainLayout.845b1d2e.js",revision:"f694ba9bc27210ba5569a9048a2106ac"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProductosPage.82cc15f2.js",revision:"e3d99231374d8452c692b456a096b1c5"},{url:"assets/ProductsComponents.6606333c.js",revision:"12c1dd4e8e8e1c4b58386ac0d76b5afc"},{url:"assets/ProveedorIndex.602eaade.js",revision:"9e745864a740b676810c57433d2306d3"},{url:"assets/QBtnDropdown.f3070117.js",revision:"956bae906a6dfabfdf120e264c0712d5"},{url:"assets/QBtnGroup.25ddce79.js",revision:"0ce37d848b65491335a4f2d70b52ce38"},{url:"assets/QForm.65ed3ba9.js",revision:"ba8f373771bf472d5f22d78eb252281c"},{url:"assets/QImg.8238bb21.js",revision:"32027dfb365d57273dece3a16d289905"},{url:"assets/QItem.0a150aaf.js",revision:"c5fd1e6c430e5307ba6351f21b236a32"},{url:"assets/QList.186a6c5e.js",revision:"3cc40ac0c9772af42a0cc5c1ac67aaa9"},{url:"assets/QPage.ec4043e4.js",revision:"16ac047eb0c32690f6e7618ee6aa7ca2"},{url:"assets/QPageContainer.ade00341.js",revision:"3742f8edea912ef891984bef0ce48217"},{url:"assets/QPagination.34c81a40.js",revision:"732694f67129b637c1b0680879e857eb"},{url:"assets/QScrollObserver.66a5e0e5.js",revision:"53069a08229919d5e696246538a996b4"},{url:"assets/QSelect.292674f1.js",revision:"65cb50ba75e07b8e63ef1426bc1f4fdf"},{url:"assets/QSpace.e9b93104.js",revision:"ef63292a1cf15f3eabcd517feb827ad1"},{url:"assets/QTable.0259598d.js",revision:"2fd04ee8172bed484147e25c42f93e19"},{url:"assets/QTooltip.45207bc2.js",revision:"a56ea879d8c140ddb9f29f5befff6742"},{url:"assets/ReportesIndex.bf35a4b8.js",revision:"2ee0f50283e15be24fd6c3feb4bee486"},{url:"assets/SalePage.dc3d783d.js",revision:"ed8ef9348bfeb1bdac6a62bd9e09a324"},{url:"assets/TouchPan.1e92e690.js",revision:"2c0c65be72f679c17e4f180565875c24"},{url:"assets/UsersIndex.34a1ea60.js",revision:"8c378567cd2fa2ed4e38b3b9ddbc078c"},{url:"default.png",revision:"f3b43d626ebe5d6a773a490f45f4cc41"},{url:"favicon.ico",revision:"54c983fefb0fe442497906cec7f87eae"},{url:"fondoLogin.jpg",revision:"738bf163f67ee46199d6d5f2af7fecf6"},{url:"icons/apple-icon-120x120.png",revision:"f5f49842f227fcc80a53fbe389be27ee"},{url:"icons/apple-icon-152x152.png",revision:"1f3ed8e02c123dc2b5668043d29a5253"},{url:"icons/apple-icon-167x167.png",revision:"93b9c5154df020a19283cf2b5015ad68"},{url:"icons/apple-icon-180x180.png",revision:"661bc1e9565f3bafcc0aea7fb6fda95c"},{url:"icons/apple-launch-1080x2340.png",revision:"7d9d50bf996b584a8386dcddcf2719cd"},{url:"icons/apple-launch-1125x2436.png",revision:"aeed0175ddfbbffd377937de52b5b5f8"},{url:"icons/apple-launch-1170x2532.png",revision:"4dbe62dccc62881104a493a3e810a514"},{url:"icons/apple-launch-1179x2556.png",revision:"fd249da3f0b025b9e4edaf4fc4a3a33c"},{url:"icons/apple-launch-1242x2208.png",revision:"4931b7f37f65f048aa8ae894f89190bb"},{url:"icons/apple-launch-1242x2688.png",revision:"780c29a2e557f5b46a3e76cd4c6969fd"},{url:"icons/apple-launch-1284x2778.png",revision:"7751f63e83d1aa7d3982f3bbac09d6d9"},{url:"icons/apple-launch-1290x2796.png",revision:"aeb8ab30b33dbdbd91377e52eb4ad48a"},{url:"icons/apple-launch-1536x2048.png",revision:"cfbf95580e5fc3864b56d85d6b38f8cf"},{url:"icons/apple-launch-1620x2160.png",revision:"79ad78d330858eaaba5d15a7ff17e5da"},{url:"icons/apple-launch-1668x2224.png",revision:"9d953f94c041c656f67152063f93a060"},{url:"icons/apple-launch-1668x2388.png",revision:"72971238518a88fcb603ef740990f894"},{url:"icons/apple-launch-2048x2732.png",revision:"73924f4572236e93efb85919ba16700e"},{url:"icons/apple-launch-750x1334.png",revision:"8faee3b7c989e492e590a1bf034c1057"},{url:"icons/apple-launch-828x1792.png",revision:"fbab42c3564b94e0f7cf9be691fc379c"},{url:"icons/favicon-128x128.png",revision:"e4883b4312db37c743e3295c28b7619c"},{url:"icons/favicon-16x16.png",revision:"949459540684f7359c2803fe8d5f2336"},{url:"icons/favicon-32x32.png",revision:"ab96068e42823d0026ca1c8fe4d19746"},{url:"icons/favicon-96x96.png",revision:"33e157ae31a7f737bcc256028a8ce30d"},{url:"icons/icon-128x128.png",revision:"e4883b4312db37c743e3295c28b7619c"},{url:"icons/icon-192x192.png",revision:"8465b2cf48a20d4913ec6ab5002e8906"},{url:"icons/icon-256x256.png",revision:"f51ac4776cf3bb4c8f1be219a0e0fa15"},{url:"icons/icon-384x384.png",revision:"4beafa1cba2d3aa84e0e49412af8ffcb"},{url:"icons/icon-512x512.png",revision:"48cc7582631cac1f474233587d16bcc1"},{url:"icons/ms-icon-144x144.png",revision:"5a298bf04106182beea7acc3371a4728"},{url:"icons/safari-pinned-tab.svg",revision:"b2c4eeafed619988828e16bca8b8f3b0"},{url:"index.html",revision:"48005d50e669a89836b506b6b4102b6c"},{url:"logo.png",revision:"293c7859ee97d5c9d377e78f1ad627a0"},{url:"manifest.json",revision:"61c7d7dac30be83039c19d6b70f2d1aa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
