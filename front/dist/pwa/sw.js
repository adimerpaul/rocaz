if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>a(e,i),d={module:{uri:i},exports:n,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(f(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rocaz"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Alert.d141bc72.js",revision:"1a8d21c4cb605d865e5ce22721990956"},{url:"assets/axios.848d957d.js",revision:"e438879ceb759559bc9b13b07a9170a1"},{url:"assets/CalculatePage.2b9a1c46.js",revision:"4750328dd7c77a632d3d5d0403991a5a"},{url:"assets/CardComponent.834de03a.js",revision:"f72ae120893a4a33d927ab521e222cb7"},{url:"assets/ClientIndex.eacf734f.js",revision:"0af0d6c3d7be8d6231c1152ebba9fc8e"},{url:"assets/ClosePopup.cc88c787.js",revision:"a9e1e240176189acafac3131afc343f7"},{url:"assets/CompraHistoryPage.d078ca7e.js",revision:"bb86f507a7a63c6ee2634de743fd8b58"},{url:"assets/CompraPage.16b89ab0.js",revision:"31ed3952e3e87e493bd697b0e4e0da50"},{url:"assets/ErrorNotFound.e2d57bec.js",revision:"92b792736afb4eba27f4c9da90b8f947"},{url:"assets/Excel.e99458f6.js",revision:"c03c5f1f843d65e57af1b307761b17b8"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/fondoLogin.jpg",revision:"738bf163f67ee46199d6d5f2af7fecf6"},{url:"assets/format.f4c59c6f.js",revision:"5784d6b64946546341a5bc6a30bf2b28"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/Imprimir.97a2007c.js",revision:"2d5f9e307001bd432e2b8db4d5773c6c"},{url:"assets/index.02214b57.css",revision:"ae2f6888595c52e9f02b627dfa679eb2"},{url:"assets/index.c1bda583.js",revision:"612798710b8083d6926e6d49dc3f0737"},{url:"assets/IndexPage.4c64f480.js",revision:"8c581fc75eef704343eea2b3056494ff"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LoginPage.61472432.css",revision:"cd4f0d8481e21e8f1f3ecadd7298f0ae"},{url:"assets/LoginPage.920b1ab7.js",revision:"c5d0cd71d228d475cd65cf5a76f75352"},{url:"assets/MainLayout.dd449b13.js",revision:"cd54e0ade94747229b4c4011fcfabffe"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProductosPage.2298b34c.js",revision:"8576bfade94ba9462bf741ee9dfb4356"},{url:"assets/ProductsComponents.91e1a7ba.js",revision:"fcbc5974e92130463b8f23fa0d699d21"},{url:"assets/ProveedorIndex.6f828bb8.js",revision:"77d0da5e95c076b68e16a9f958df4f15"},{url:"assets/QBtnDropdown.a53af9f5.js",revision:"3143c659fc047fae7cdb5e02a1c544e6"},{url:"assets/QForm.493bf25f.js",revision:"cdaaa31afd8036f78da03d45a5a9377f"},{url:"assets/QImg.d3c1ea82.js",revision:"c0397e11f0dd3979e3dac0b693fabe3e"},{url:"assets/QItem.4067e6bd.js",revision:"fe9e9397bdb403790634e089e6a82624"},{url:"assets/QList.2afee3d5.js",revision:"f9e75c809b54846280a3107b0ff9dd3a"},{url:"assets/QPage.c78bbd12.js",revision:"ef8c0d54ebb6da51fb7cca07042234bf"},{url:"assets/QPageContainer.642c2ae7.js",revision:"a0ef77c55fb446e43a5d52f45fe2235c"},{url:"assets/QPagination.03466095.js",revision:"e63c845ffaa55a29c08575ca1815f842"},{url:"assets/QScrollObserver.d0015d5b.js",revision:"4800d1b195d8855251d93f4e7333694c"},{url:"assets/QSelect.02481b4d.js",revision:"6fb7a271f82aaeaf6ee91c3ec226bccd"},{url:"assets/QSpace.c858cf4f.js",revision:"29efb5e6c8e04edc62b539b18b04cec9"},{url:"assets/QTable.98f63700.js",revision:"bd1e718757d8923029bd761884d30055"},{url:"assets/QTooltip.bff1a600.js",revision:"8e9ef5d321e0142d54260061f55998f3"},{url:"assets/ReportesIndex.2134c6ff.js",revision:"00cd0c3149320b4fe5a144de4b7b9549"},{url:"assets/SalePage.d219a438.js",revision:"a148ba01b1ae411e34f90a0a883afda6"},{url:"assets/TouchPan.6dea8dd2.js",revision:"53773813acf6a18056bbda38c5a0b057"},{url:"assets/UsersIndex.2398311b.js",revision:"0e33712d0ac4575a7427981a2e508dea"},{url:"default.png",revision:"f3b43d626ebe5d6a773a490f45f4cc41"},{url:"favicon.ico",revision:"54c983fefb0fe442497906cec7f87eae"},{url:"fondoLogin.jpg",revision:"738bf163f67ee46199d6d5f2af7fecf6"},{url:"icons/apple-icon-120x120.png",revision:"f5f49842f227fcc80a53fbe389be27ee"},{url:"icons/apple-icon-152x152.png",revision:"1f3ed8e02c123dc2b5668043d29a5253"},{url:"icons/apple-icon-167x167.png",revision:"93b9c5154df020a19283cf2b5015ad68"},{url:"icons/apple-icon-180x180.png",revision:"661bc1e9565f3bafcc0aea7fb6fda95c"},{url:"icons/apple-launch-1080x2340.png",revision:"7d9d50bf996b584a8386dcddcf2719cd"},{url:"icons/apple-launch-1125x2436.png",revision:"aeed0175ddfbbffd377937de52b5b5f8"},{url:"icons/apple-launch-1170x2532.png",revision:"4dbe62dccc62881104a493a3e810a514"},{url:"icons/apple-launch-1179x2556.png",revision:"fd249da3f0b025b9e4edaf4fc4a3a33c"},{url:"icons/apple-launch-1242x2208.png",revision:"4931b7f37f65f048aa8ae894f89190bb"},{url:"icons/apple-launch-1242x2688.png",revision:"780c29a2e557f5b46a3e76cd4c6969fd"},{url:"icons/apple-launch-1284x2778.png",revision:"7751f63e83d1aa7d3982f3bbac09d6d9"},{url:"icons/apple-launch-1290x2796.png",revision:"aeb8ab30b33dbdbd91377e52eb4ad48a"},{url:"icons/apple-launch-1536x2048.png",revision:"cfbf95580e5fc3864b56d85d6b38f8cf"},{url:"icons/apple-launch-1620x2160.png",revision:"79ad78d330858eaaba5d15a7ff17e5da"},{url:"icons/apple-launch-1668x2224.png",revision:"9d953f94c041c656f67152063f93a060"},{url:"icons/apple-launch-1668x2388.png",revision:"72971238518a88fcb603ef740990f894"},{url:"icons/apple-launch-2048x2732.png",revision:"73924f4572236e93efb85919ba16700e"},{url:"icons/apple-launch-750x1334.png",revision:"8faee3b7c989e492e590a1bf034c1057"},{url:"icons/apple-launch-828x1792.png",revision:"fbab42c3564b94e0f7cf9be691fc379c"},{url:"icons/favicon-128x128.png",revision:"e4883b4312db37c743e3295c28b7619c"},{url:"icons/favicon-16x16.png",revision:"949459540684f7359c2803fe8d5f2336"},{url:"icons/favicon-32x32.png",revision:"ab96068e42823d0026ca1c8fe4d19746"},{url:"icons/favicon-96x96.png",revision:"33e157ae31a7f737bcc256028a8ce30d"},{url:"icons/icon-128x128.png",revision:"e4883b4312db37c743e3295c28b7619c"},{url:"icons/icon-192x192.png",revision:"8465b2cf48a20d4913ec6ab5002e8906"},{url:"icons/icon-256x256.png",revision:"f51ac4776cf3bb4c8f1be219a0e0fa15"},{url:"icons/icon-384x384.png",revision:"4beafa1cba2d3aa84e0e49412af8ffcb"},{url:"icons/icon-512x512.png",revision:"48cc7582631cac1f474233587d16bcc1"},{url:"icons/ms-icon-144x144.png",revision:"5a298bf04106182beea7acc3371a4728"},{url:"icons/safari-pinned-tab.svg",revision:"b2c4eeafed619988828e16bca8b8f3b0"},{url:"index.html",revision:"5f333a52d8b257ca788ebfdbc3c97794"},{url:"logo.png",revision:"293c7859ee97d5c9d377e78f1ad627a0"},{url:"manifest.json",revision:"61c7d7dac30be83039c19d6b70f2d1aa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
