if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const r=e=>a(e,f),o={module:{uri:f},exports:n,require:r};s[f]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rocaz"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.902418ab.js",revision:"9f4185eb28b81496d46d56d2ff946367"},{url:"assets/CardComponent.e80a67ce.js",revision:"c8c220d26a1bd098a537412020e5630f"},{url:"assets/ClientIndex.be5cca32.js",revision:"da9acae5288125870e516e97df9d3dec"},{url:"assets/ClosePopup.b2de1592.js",revision:"494c913209c8cca9e1d7e5d32aa36db9"},{url:"assets/ErrorNotFound.0aa3f8f2.js",revision:"d66542db7b4f50f858576b8e9bf230eb"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.58e06356.js",revision:"c5ec2c9c291ed14604b4137c829f2393"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.02214b57.css",revision:"ae2f6888595c52e9f02b627dfa679eb2"},{url:"assets/index.1ebb479c.js",revision:"3d43dca84441a93f1b3d40a3b5eca931"},{url:"assets/IndexPage.9d191a93.js",revision:"ee31d92b9df9f02302097d483cf828a0"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LoginPage.61472432.css",revision:"cd4f0d8481e21e8f1f3ecadd7298f0ae"},{url:"assets/LoginPage.c166a462.js",revision:"74d6b3904080ac9ac10bf181b423de12"},{url:"assets/MainLayout.3f3545fc.js",revision:"c3052ca8f8862ff676f78eade1897e0e"},{url:"assets/moment.40bc58bf.js",revision:"ab4b3406c96318822b09f02b2b5723b9"},{url:"assets/ProductosPage.d65bcd73.js",revision:"8f63a4a788803704effaf74bf8a4e612"},{url:"assets/ProductsComponents.b9af688d.js",revision:"1ca8fab6d94c4aef538c7a5e7cb19346"},{url:"assets/QForm.4c43927c.js",revision:"f164cf1253ba2f74a632f634f2ed96f3"},{url:"assets/QImg.6ce4b075.js",revision:"7a66037657e69d846d1c6bf5c6abed62"},{url:"assets/QList.82c52a2b.js",revision:"37ae1b4162eb216dd4cf879695b434a9"},{url:"assets/QPageContainer.d2dd393a.js",revision:"ca6f819370457911cd0b0afb0e63385a"},{url:"assets/QScrollObserver.80ab3741.js",revision:"324bbfd4afeea79455eda388c29e6eeb"},{url:"assets/QSpace.0b360a1d.js",revision:"4d2e2f681c649df36d91b0f597e42165"},{url:"assets/QTr.384df8f7.js",revision:"2b50b1b89b612fa97d31bb4d41f1a236"},{url:"assets/SalePage.682e307b.js",revision:"e313ce6df7ca8105330cca31f32e4163"},{url:"assets/TouchPan.3ddedfd1.js",revision:"81b450391e5492afe2b20033a57a3867"},{url:"default.png",revision:"f3b43d626ebe5d6a773a490f45f4cc41"},{url:"favicon.ico",revision:"54c983fefb0fe442497906cec7f87eae"},{url:"fondoLogin.jpg",revision:"738bf163f67ee46199d6d5f2af7fecf6"},{url:"icons/apple-icon-120x120.png",revision:"f5f49842f227fcc80a53fbe389be27ee"},{url:"icons/apple-icon-152x152.png",revision:"1f3ed8e02c123dc2b5668043d29a5253"},{url:"icons/apple-icon-167x167.png",revision:"93b9c5154df020a19283cf2b5015ad68"},{url:"icons/apple-icon-180x180.png",revision:"661bc1e9565f3bafcc0aea7fb6fda95c"},{url:"icons/apple-launch-1080x2340.png",revision:"7d9d50bf996b584a8386dcddcf2719cd"},{url:"icons/apple-launch-1125x2436.png",revision:"aeed0175ddfbbffd377937de52b5b5f8"},{url:"icons/apple-launch-1170x2532.png",revision:"4dbe62dccc62881104a493a3e810a514"},{url:"icons/apple-launch-1179x2556.png",revision:"fd249da3f0b025b9e4edaf4fc4a3a33c"},{url:"icons/apple-launch-1242x2208.png",revision:"4931b7f37f65f048aa8ae894f89190bb"},{url:"icons/apple-launch-1242x2688.png",revision:"780c29a2e557f5b46a3e76cd4c6969fd"},{url:"icons/apple-launch-1284x2778.png",revision:"7751f63e83d1aa7d3982f3bbac09d6d9"},{url:"icons/apple-launch-1290x2796.png",revision:"aeb8ab30b33dbdbd91377e52eb4ad48a"},{url:"icons/apple-launch-1536x2048.png",revision:"cfbf95580e5fc3864b56d85d6b38f8cf"},{url:"icons/apple-launch-1620x2160.png",revision:"79ad78d330858eaaba5d15a7ff17e5da"},{url:"icons/apple-launch-1668x2224.png",revision:"9d953f94c041c656f67152063f93a060"},{url:"icons/apple-launch-1668x2388.png",revision:"72971238518a88fcb603ef740990f894"},{url:"icons/apple-launch-2048x2732.png",revision:"73924f4572236e93efb85919ba16700e"},{url:"icons/apple-launch-750x1334.png",revision:"8faee3b7c989e492e590a1bf034c1057"},{url:"icons/apple-launch-828x1792.png",revision:"fbab42c3564b94e0f7cf9be691fc379c"},{url:"icons/favicon-128x128.png",revision:"e4883b4312db37c743e3295c28b7619c"},{url:"icons/favicon-16x16.png",revision:"949459540684f7359c2803fe8d5f2336"},{url:"icons/favicon-32x32.png",revision:"ab96068e42823d0026ca1c8fe4d19746"},{url:"icons/favicon-96x96.png",revision:"33e157ae31a7f737bcc256028a8ce30d"},{url:"icons/icon-128x128.png",revision:"e4883b4312db37c743e3295c28b7619c"},{url:"icons/icon-192x192.png",revision:"8465b2cf48a20d4913ec6ab5002e8906"},{url:"icons/icon-256x256.png",revision:"f51ac4776cf3bb4c8f1be219a0e0fa15"},{url:"icons/icon-384x384.png",revision:"4beafa1cba2d3aa84e0e49412af8ffcb"},{url:"icons/icon-512x512.png",revision:"48cc7582631cac1f474233587d16bcc1"},{url:"icons/ms-icon-144x144.png",revision:"5a298bf04106182beea7acc3371a4728"},{url:"icons/safari-pinned-tab.svg",revision:"b2c4eeafed619988828e16bca8b8f3b0"},{url:"index.html",revision:"0eb50beda5b962a484884c791ab2b337"},{url:"logo.png",revision:"293c7859ee97d5c9d377e78f1ad627a0"},{url:"manifest.json",revision:"61c7d7dac30be83039c19d6b70f2d1aa"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
