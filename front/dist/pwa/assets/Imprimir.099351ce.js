import{e as Ot,f as zt,h as _t,i as kt,u as D}from"./index.11009831.js";import{h as Vt}from"./moment.40bc58bf.js";var Ue=Ot({name:"QTr",props:{props:Object,noHover:Boolean},setup(n,{slots:t}){const e=zt(()=>"q-tr"+(n.props===void 0||n.props.header===!0?"":" "+n.props.__trClass)+(n.noHover===!0?" q-tr--no-hover":""));return()=>_t("tr",{class:e.value},kt(t.default))}}),F={},Ht=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Et={},A={};let dt;const Yt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];A.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};A.getSymbolTotalCodewords=function(t){return Yt[t]};A.getBCHDigit=function(n){let t=0;for(;n!==0;)t++,n>>>=1;return t};A.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');dt=t};A.isKanjiModeEnabled=function(){return typeof dt!="undefined"};A.toSJIS=function(t){return dt(t)};var G={};(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function t(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+e)}}n.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},n.from=function(i,o){if(n.isValid(i))return i;try{return t(i)}catch{return o}}})(G);function vt(){this.buffer=[],this.length=0}vt.prototype={get:function(n){const t=Math.floor(n/8);return(this.buffer[t]>>>7-n%8&1)===1},put:function(n,t){for(let e=0;e<t;e++)this.putBit((n>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),n&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Jt=vt;function Y(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}Y.prototype.set=function(n,t,e,i){const o=n*this.size+t;this.data[o]=e,i&&(this.reservedBit[o]=!0)};Y.prototype.get=function(n,t){return this.data[n*this.size+t]};Y.prototype.xor=function(n,t,e){this.data[n*this.size+t]^=e};Y.prototype.isReserved=function(n,t){return this.reservedBit[n*this.size+t]};var Kt=Y,wt={};(function(n){const t=A.getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,r=t(i),s=r===145?26:Math.ceil((r-13)/(2*o-2))*2,l=[r-7];for(let a=1;a<o-1;a++)l[a]=l[a-1]-s;return l.push(6),l.reverse()},n.getPositions=function(i){const o=[],r=n.getRowColCoords(i),s=r.length;for(let l=0;l<s;l++)for(let a=0;a<s;a++)l===0&&a===0||l===0&&a===s-1||l===s-1&&a===0||o.push([r[l],r[a]]);return o}})(wt);var Ct={};const jt=A.getSymbolSize,gt=7;Ct.getPositions=function(t){const e=jt(t);return[[0,0],[e-gt,0],[0,e-gt]]};var bt={};(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};n.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},n.from=function(o){return n.isValid(o)?parseInt(o,10):void 0},n.getPenaltyN1=function(o){const r=o.size;let s=0,l=0,a=0,u=null,c=null;for(let m=0;m<r;m++){l=a=0,u=c=null;for(let d=0;d<r;d++){let h=o.get(m,d);h===u?l++:(l>=5&&(s+=t.N1+(l-5)),u=h,l=1),h=o.get(d,m),h===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=h,a=1)}l>=5&&(s+=t.N1+(l-5)),a>=5&&(s+=t.N1+(a-5))}return s},n.getPenaltyN2=function(o){const r=o.size;let s=0;for(let l=0;l<r-1;l++)for(let a=0;a<r-1;a++){const u=o.get(l,a)+o.get(l,a+1)+o.get(l+1,a)+o.get(l+1,a+1);(u===4||u===0)&&s++}return s*t.N2},n.getPenaltyN3=function(o){const r=o.size;let s=0,l=0,a=0;for(let u=0;u<r;u++){l=a=0;for(let c=0;c<r;c++)l=l<<1&2047|o.get(u,c),c>=10&&(l===1488||l===93)&&s++,a=a<<1&2047|o.get(c,u),c>=10&&(a===1488||a===93)&&s++}return s*t.N3},n.getPenaltyN4=function(o){let r=0;const s=o.data.length;for(let a=0;a<s;a++)r+=o.data[a];return Math.abs(Math.ceil(r*100/s/5)-10)*t.N4};function e(i,o,r){switch(i){case n.Patterns.PATTERN000:return(o+r)%2===0;case n.Patterns.PATTERN001:return o%2===0;case n.Patterns.PATTERN010:return r%3===0;case n.Patterns.PATTERN011:return(o+r)%3===0;case n.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case n.Patterns.PATTERN101:return o*r%2+o*r%3===0;case n.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case n.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(o,r){const s=r.size;for(let l=0;l<s;l++)for(let a=0;a<s;a++)r.isReserved(a,l)||r.xor(a,l,e(o,a,l))},n.getBestMask=function(o,r){const s=Object.keys(n.Patterns).length;let l=0,a=1/0;for(let u=0;u<s;u++){r(u),n.applyMask(u,o);const c=n.getPenaltyN1(o)+n.getPenaltyN2(o)+n.getPenaltyN3(o)+n.getPenaltyN4(o);n.applyMask(u,o),c<a&&(a=c,l=u)}return l}})(bt);var Z={};const P=G,J=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],K=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Z.getBlocksCount=function(t,e){switch(e){case P.L:return J[(t-1)*4+0];case P.M:return J[(t-1)*4+1];case P.Q:return J[(t-1)*4+2];case P.H:return J[(t-1)*4+3];default:return}};Z.getTotalCodewordsCount=function(t,e){switch(e){case P.L:return K[(t-1)*4+0];case P.M:return K[(t-1)*4+1];case P.Q:return K[(t-1)*4+2];case P.H:return K[(t-1)*4+3];default:return}};var Tt={},Q={};const V=new Uint8Array(512),j=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)V[e]=t,j[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)V[e]=V[e-255]})();Q.log=function(t){if(t<1)throw new Error("log("+t+")");return j[t]};Q.exp=function(t){return V[t]};Q.mul=function(t,e){return t===0||e===0?0:V[j[t]+j[e]]};(function(n){const t=Q;n.mul=function(i,o){const r=new Uint8Array(i.length+o.length-1);for(let s=0;s<i.length;s++)for(let l=0;l<o.length;l++)r[s+l]^=t.mul(i[s],o[l]);return r},n.mod=function(i,o){let r=new Uint8Array(i);for(;r.length-o.length>=0;){const s=r[0];for(let a=0;a<o.length;a++)r[a]^=t.mul(o[a],s);let l=0;for(;l<r.length&&r[l]===0;)l++;r=r.slice(l)}return r},n.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let r=0;r<i;r++)o=n.mul(o,new Uint8Array([1,t.exp(r)]));return o}})(Tt);const At=Tt;function ct(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}ct.prototype.initialize=function(t){this.degree=t,this.genPoly=At.generateECPolynomial(this.degree)};ct.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=At.mod(e,this.genPoly),o=this.degree-i.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(i,o),r}return i};var qt=ct,Bt={},R={},ut={};ut.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var L={};const Ft="[0-9]+",Gt="[A-Z $%*+\\-./:]+";let H="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";H=H.replace(/u/g,"\\u");const Zt="(?:(?![A-Z0-9 $%*+\\-./:]|"+H+`)(?:.|[\r
]))+`;L.KANJI=new RegExp(H,"g");L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");L.BYTE=new RegExp(Zt,"g");L.NUMERIC=new RegExp(Ft,"g");L.ALPHANUMERIC=new RegExp(Gt,"g");const Qt=new RegExp("^"+H+"$"),Xt=new RegExp("^"+Ft+"$"),Wt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");L.testKanji=function(t){return Qt.test(t)};L.testNumeric=function(t){return Xt.test(t)};L.testAlphanumeric=function(t){return Wt.test(t)};(function(n){const t=ut,e=L;n.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},n.getBestModeForData=function(r){return e.testNumeric(r)?n.NUMERIC:e.testAlphanumeric(r)?n.ALPHANUMERIC:e.testKanji(r)?n.KANJI:n.BYTE},n.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},n.isValid=function(r){return r&&r.bit&&r.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+o)}}n.from=function(r,s){if(n.isValid(r))return r;try{return i(r)}catch{return s}}})(R);(function(n){const t=A,e=Z,i=G,o=R,r=ut,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,l=t.getBCHDigit(s);function a(d,h,f){for(let p=1;p<=40;p++)if(h<=n.getCapacity(p,f,d))return p}function u(d,h){return o.getCharCountIndicator(d,h)+4}function c(d,h){let f=0;return d.forEach(function(p){f+=u(p.mode,h)+p.getBitsLength()}),f}function m(d,h){for(let f=1;f<=40;f++)if(c(d,f)<=n.getCapacity(f,h,o.MIXED))return f}n.from=function(h,f){return r.isValid(h)?parseInt(h,10):f},n.getCapacity=function(h,f,p){if(!r.isValid(h))throw new Error("Invalid QR Code version");typeof p=="undefined"&&(p=o.BYTE);const C=t.getSymbolTotalCodewords(h),g=e.getTotalCodewordsCount(h,f),v=(C-g)*8;if(p===o.MIXED)return v;const E=v-u(p,h);switch(p){case o.NUMERIC:return Math.floor(E/10*3);case o.ALPHANUMERIC:return Math.floor(E/11*2);case o.KANJI:return Math.floor(E/13);case o.BYTE:default:return Math.floor(E/8)}},n.getBestVersionForData=function(h,f){let p;const C=i.from(f,i.M);if(Array.isArray(h)){if(h.length>1)return m(h,C);if(h.length===0)return 1;p=h[0]}else p=h;return a(p.mode,p.getLength(),C)},n.getEncodedBits=function(h){if(!r.isValid(h)||h<7)throw new Error("Invalid QR Code version");let f=h<<12;for(;t.getBCHDigit(f)-l>=0;)f^=s<<t.getBCHDigit(f)-l;return h<<12|f}})(Bt);var Nt={};const rt=A,It=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,te=1<<14|1<<12|1<<10|1<<4|1<<1,mt=rt.getBCHDigit(It);Nt.getEncodedBits=function(t,e){const i=t.bit<<3|e;let o=i<<10;for(;rt.getBCHDigit(o)-mt>=0;)o^=It<<rt.getBCHDigit(o)-mt;return(i<<10|o)^te};var Lt={};const ee=R;function U(n){this.mode=ee.NUMERIC,this.data=n.toString()}U.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let e,i,o;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),o=parseInt(i,10),t.put(o,10);const r=this.data.length-e;r>0&&(i=this.data.substr(e),o=parseInt(i,10),t.put(o,r*3+1))};var ne=U;const oe=R,tt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function O(n){this.mode=oe.ALPHANUMERIC,this.data=n}O.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};O.prototype.getLength=function(){return this.data.length};O.prototype.getBitsLength=function(){return O.getBitsLength(this.data.length)};O.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=tt.indexOf(this.data[e])*45;i+=tt.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(tt.indexOf(this.data[e]),6)};var ie=O,re=function(t){for(var e=[],i=t.length,o=0;o<i;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&i>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(r=(r-55296)*1024+s-56320+65536,o+=1)}if(r<128){e.push(r);continue}if(r<2048){e.push(r>>6|192),e.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){e.push(r>>12|224),e.push(r>>6&63|128),e.push(r&63|128);continue}if(r>=65536&&r<=1114111){e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(r&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const se=re,ae=R;function z(n){this.mode=ae.BYTE,typeof n=="string"&&(n=se(n)),this.data=new Uint8Array(n)}z.getBitsLength=function(t){return t*8};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(n){for(let t=0,e=this.data.length;t<e;t++)n.put(this.data[t],8)};var le=z;const de=R,ce=A;function _(n){this.mode=de.KANJI,this.data=n}_.getBitsLength=function(t){return t*13};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=ce.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}};var ue=_,$t={exports:{}};(function(n){var t={single_source_shortest_paths:function(e,i,o){var r={},s={};s[i]=0;var l=t.PriorityQueue.make();l.push(i,0);for(var a,u,c,m,d,h,f,p,C;!l.empty();){a=l.pop(),u=a.value,m=a.cost,d=e[u]||{};for(c in d)d.hasOwnProperty(c)&&(h=d[c],f=m+h,p=s[c],C=typeof s[c]=="undefined",(C||p>f)&&(s[c]=f,l.push(c,f),r[c]=u))}if(typeof o!="undefined"&&typeof s[o]=="undefined"){var g=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(g)}return r},extract_shortest_path_from_predecessor_list:function(e,i){for(var o=[],r=i;r;)o.push(r),e[r],r=e[r];return o.reverse(),o},find_path:function(e,i,o){var r=t.single_source_shortest_paths(e,i,o);return t.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(e){var i=t.PriorityQueue,o={},r;e=e||{};for(r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=e.sorter||i.default_sorter,o},default_sorter:function(e,i){return e.cost-i.cost},push:function(e,i){var o={value:e,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=t})($t);(function(n){const t=R,e=ne,i=ie,o=le,r=ue,s=L,l=A,a=$t.exports;function u(g){return unescape(encodeURIComponent(g)).length}function c(g,v,E){const y=[];let w;for(;(w=g.exec(E))!==null;)y.push({data:w[0],index:w.index,mode:v,length:w[0].length});return y}function m(g){const v=c(s.NUMERIC,t.NUMERIC,g),E=c(s.ALPHANUMERIC,t.ALPHANUMERIC,g);let y,w;return l.isKanjiModeEnabled()?(y=c(s.BYTE,t.BYTE,g),w=c(s.KANJI,t.KANJI,g)):(y=c(s.BYTE_KANJI,t.BYTE,g),w=[]),v.concat(E,y,w).sort(function(T,B){return T.index-B.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function d(g,v){switch(v){case t.NUMERIC:return e.getBitsLength(g);case t.ALPHANUMERIC:return i.getBitsLength(g);case t.KANJI:return r.getBitsLength(g);case t.BYTE:return o.getBitsLength(g)}}function h(g){return g.reduce(function(v,E){const y=v.length-1>=0?v[v.length-1]:null;return y&&y.mode===E.mode?(v[v.length-1].data+=E.data,v):(v.push(E),v)},[])}function f(g){const v=[];for(let E=0;E<g.length;E++){const y=g[E];switch(y.mode){case t.NUMERIC:v.push([y,{data:y.data,mode:t.ALPHANUMERIC,length:y.length},{data:y.data,mode:t.BYTE,length:y.length}]);break;case t.ALPHANUMERIC:v.push([y,{data:y.data,mode:t.BYTE,length:y.length}]);break;case t.KANJI:v.push([y,{data:y.data,mode:t.BYTE,length:u(y.data)}]);break;case t.BYTE:v.push([{data:y.data,mode:t.BYTE,length:u(y.data)}])}}return v}function p(g,v){const E={},y={start:{}};let w=["start"];for(let b=0;b<g.length;b++){const T=g[b],B=[];for(let M=0;M<T.length;M++){const N=T[M],k=""+b+M;B.push(k),E[k]={node:N,lastCount:0},y[k]={};for(let W=0;W<w.length;W++){const $=w[W];E[$]&&E[$].node.mode===N.mode?(y[$][k]=d(E[$].lastCount+N.length,N.mode)-d(E[$].lastCount,N.mode),E[$].lastCount+=N.length):(E[$]&&(E[$].lastCount=N.length),y[$][k]=d(N.length,N.mode)+4+t.getCharCountIndicator(N.mode,v))}}w=B}for(let b=0;b<w.length;b++)y[w[b]].end=0;return{map:y,table:E}}function C(g,v){let E;const y=t.getBestModeForData(g);if(E=t.from(v,y),E!==t.BYTE&&E.bit<y.bit)throw new Error('"'+g+'" cannot be encoded with mode '+t.toString(E)+`.
 Suggested mode is: `+t.toString(y));switch(E===t.KANJI&&!l.isKanjiModeEnabled()&&(E=t.BYTE),E){case t.NUMERIC:return new e(g);case t.ALPHANUMERIC:return new i(g);case t.KANJI:return new r(g);case t.BYTE:return new o(g)}}n.fromArray=function(v){return v.reduce(function(E,y){return typeof y=="string"?E.push(C(y,null)):y.data&&E.push(C(y.data,y.mode)),E},[])},n.fromString=function(v,E){const y=m(v,l.isKanjiModeEnabled()),w=f(y),b=p(w,E),T=a.find_path(b.map,"start","end"),B=[];for(let M=1;M<T.length-1;M++)B.push(b.table[T[M]].node);return n.fromArray(h(B))},n.rawSplit=function(v){return n.fromArray(m(v,l.isKanjiModeEnabled()))}})(Lt);const X=A,et=G,he=Jt,fe=Kt,ge=wt,me=Ct,st=bt,at=Z,pe=qt,q=Bt,ye=Nt,Ee=R,nt=Lt;function ve(n,t){const e=n.size,i=me.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],s=i[o][1];for(let l=-1;l<=7;l++)if(!(r+l<=-1||e<=r+l))for(let a=-1;a<=7;a++)s+a<=-1||e<=s+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?n.set(r+l,s+a,!0,!0):n.set(r+l,s+a,!1,!0))}}function we(n){const t=n.size;for(let e=8;e<t-8;e++){const i=e%2===0;n.set(e,6,i,!0),n.set(6,e,i,!0)}}function Ce(n,t){const e=ge.getPositions(t);for(let i=0;i<e.length;i++){const o=e[i][0],r=e[i][1];for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)s===-2||s===2||l===-2||l===2||s===0&&l===0?n.set(o+s,r+l,!0,!0):n.set(o+s,r+l,!1,!0)}}function be(n,t){const e=n.size,i=q.getEncodedBits(t);let o,r,s;for(let l=0;l<18;l++)o=Math.floor(l/3),r=l%3+e-8-3,s=(i>>l&1)===1,n.set(o,r,s,!0),n.set(r,o,s,!0)}function ot(n,t,e){const i=n.size,o=ye.getEncodedBits(t,e);let r,s;for(r=0;r<15;r++)s=(o>>r&1)===1,r<6?n.set(r,8,s,!0):r<8?n.set(r+1,8,s,!0):n.set(i-15+r,8,s,!0),r<8?n.set(8,i-r-1,s,!0):r<9?n.set(8,15-r-1+1,s,!0):n.set(8,15-r-1,s,!0);n.set(i-8,8,1,!0)}function Te(n,t){const e=n.size;let i=-1,o=e-1,r=7,s=0;for(let l=e-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!n.isReserved(o,l-a)){let u=!1;s<t.length&&(u=(t[s]>>>r&1)===1),n.set(o,l-a,u),r--,r===-1&&(s++,r=7)}if(o+=i,o<0||e<=o){o-=i,i=-i;break}}}function Ae(n,t,e){const i=new he;e.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),Ee.getCharCountIndicator(a.mode,n)),a.write(i)});const o=X.getSymbolTotalCodewords(n),r=at.getTotalCodewordsCount(n,t),s=(o-r)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const l=(s-i.getLengthInBits())/8;for(let a=0;a<l;a++)i.put(a%2?17:236,8);return Be(i,n,t)}function Be(n,t,e){const i=X.getSymbolTotalCodewords(t),o=at.getTotalCodewordsCount(t,e),r=i-o,s=at.getBlocksCount(t,e),l=i%s,a=s-l,u=Math.floor(i/s),c=Math.floor(r/s),m=c+1,d=u-c,h=new pe(d);let f=0;const p=new Array(s),C=new Array(s);let g=0;const v=new Uint8Array(n.buffer);for(let T=0;T<s;T++){const B=T<a?c:m;p[T]=v.slice(f,f+B),C[T]=h.encode(p[T]),f+=B,g=Math.max(g,B)}const E=new Uint8Array(i);let y=0,w,b;for(w=0;w<g;w++)for(b=0;b<s;b++)w<p[b].length&&(E[y++]=p[b][w]);for(w=0;w<d;w++)for(b=0;b<s;b++)E[y++]=C[b][w];return E}function Fe(n,t,e,i){let o;if(Array.isArray(n))o=nt.fromArray(n);else if(typeof n=="string"){let u=t;if(!u){const c=nt.rawSplit(n);u=q.getBestVersionForData(c,e)}o=nt.fromString(n,u||40)}else throw new Error("Invalid data");const r=q.getBestVersionForData(o,e);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=Ae(t,e,o),l=X.getSymbolSize(t),a=new fe(l);return ve(a,t),we(a),Ce(a,t),ot(a,e,0),t>=7&&be(a,t),Te(a,s),isNaN(i)&&(i=st.getBestMask(a,ot.bind(null,a,e))),st.applyMask(i,a),ot(a,e,i),{modules:a,version:t,errorCorrectionLevel:e,maskPattern:i,segments:o}}Et.create=function(t,e){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=et.M,o,r;return typeof e!="undefined"&&(i=et.from(e.errorCorrectionLevel,et.M),o=q.from(e.version),r=st.from(e.maskPattern),e.toSJISFunc&&X.setToSJISFunction(e.toSJISFunc)),Fe(t,o,i,r)};var Mt={},ht={};(function(n){function t(e){if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error("Color should be defined as hex string");let i=e.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+e);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:r,scale:r?4:s,margin:o,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},n.getImageWidth=function(i,o){const r=n.getScale(i,o);return Math.floor((i+o.margin*2)*r)},n.qrToImageData=function(i,o,r){const s=o.modules.size,l=o.modules.data,a=n.getScale(s,r),u=Math.floor((s+r.margin*2)*a),c=r.margin*a,m=[r.color.light,r.color.dark];for(let d=0;d<u;d++)for(let h=0;h<u;h++){let f=(d*u+h)*4,p=r.color.light;if(d>=c&&h>=c&&d<u-c&&h<u-c){const C=Math.floor((d-c)/a),g=Math.floor((h-c)/a);p=m[l[C*s+g]?1:0]}i[f++]=p.r,i[f++]=p.g,i[f++]=p.b,i[f]=p.a}}})(ht);(function(n){const t=ht;function e(o,r,s){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(r,s,l){let a=l,u=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(u=i()),a=t.getOptions(a);const c=t.getImageWidth(r.modules.size,a),m=u.getContext("2d"),d=m.createImageData(c,c);return t.qrToImageData(d.data,r,a),e(m,u,c),m.putImageData(d,0,0),u},n.renderToDataURL=function(r,s,l){let a=l;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const u=n.render(r,s,a),c=a.type||"image/png",m=a.rendererOpts||{};return u.toDataURL(c,m.quality)}})(Mt);var St={};const Ne=ht;function pt(n,t){const e=n.a/255,i=t+'="'+n.hex+'"';return e<1?i+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':i}function it(n,t,e){let i=n+t;return typeof e!="undefined"&&(i+=" "+e),i}function Ie(n,t,e){let i="",o=0,r=!1,s=0;for(let l=0;l<n.length;l++){const a=Math.floor(l%t),u=Math.floor(l/t);!a&&!r&&(r=!0),n[l]?(s++,l>0&&a>0&&n[l-1]||(i+=r?it("M",a+e,.5+u+e):it("m",o,0),o=0,r=!1),a+1<t&&n[l+1]||(i+=it("h",s),s=0)):o++}return i}St.render=function(t,e,i){const o=Ne.getOptions(e),r=t.modules.size,s=t.modules.data,l=r+o.margin*2,a=o.color.light.a?"<path "+pt(o.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",u="<path "+pt(o.color.dark,"stroke")+' d="'+Ie(s,r,o.margin)+'"/>',c='viewBox="0 0 '+l+" "+l+'"',m=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",d='<svg xmlns="http://www.w3.org/2000/svg" '+m+c+' shape-rendering="crispEdges">'+a+u+`</svg>
`;return typeof i=="function"&&i(null,d),d};const Le=Ht,lt=Et,Pt=Mt,$e=St;function ft(n,t,e,i,o){const r=[].slice.call(arguments,1),s=r.length,l=typeof r[s-1]=="function";if(!l&&!Le())throw new Error("Callback required as last argument");if(l){if(s<2)throw new Error("Too few arguments provided");s===2?(o=e,e=t,t=i=void 0):s===3&&(t.getContext&&typeof o=="undefined"?(o=i,i=void 0):(o=i,i=e,e=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(e=t,t=i=void 0):s===2&&!t.getContext&&(i=e,e=t,t=void 0),new Promise(function(a,u){try{const c=lt.create(e,i);a(n(c,t,i))}catch(c){u(c)}})}try{const a=lt.create(e,i);o(null,n(a,t,i))}catch(a){o(a)}}F.create=lt.create;F.toCanvas=ft.bind(null,Pt.render);F.toDataURL=ft.bind(null,Pt.renderToDataURL);F.toString=ft.bind(null,function(n,t,e){return $e.render(n,e)});var I={};Object.defineProperty(I,"__esModule",{value:!0});var S=I.Printd=I.createIFrame=I.createLinkStyle=I.createStyle=void 0,Me=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,Se=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,yt=function(n){return Me.test(n)||Se.test(n)};function Rt(n,t){var e=n.createElement("style");return e.appendChild(n.createTextNode(t)),e}I.createStyle=Rt;function Dt(n,t){var e=n.createElement("link");return e.type="text/css",e.rel="stylesheet",e.href=t,e}I.createLinkStyle=Dt;function xt(n){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),n.appendChild(t),t}I.createIFrame=xt;var Pe={parent:window.document.body,headElements:[],bodyElements:[]},Ut=function(){function n(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[Pe,t||{}].reduce(function(e,i){return Object.keys(i).forEach(function(o){return e[o]=i[o]}),e},{}),this.iframe=xt(this.opts.parent)}return n.prototype.getIFrame=function(){return this.iframe},n.prototype.print=function(t,e,i,o){if(!this.isLoading){var r=this.iframe,s=r.contentDocument,l=r.contentWindow;if(!(!s||!l)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=o;var a=l.document;a.open(),a.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var u=this.opts,c=u.headElements,m=u.bodyElements;Array.isArray(c)&&c.forEach(function(d){return a.head.appendChild(d)}),Array.isArray(m)&&m.forEach(function(d){return a.body.appendChild(d)}),Array.isArray(e)&&e.forEach(function(d){d&&a.head.appendChild(yt(d)?Dt(a,d):Rt(a,d))}),a.body.appendChild(this.elCopy),Array.isArray(i)&&i.forEach(function(d){if(d){var h=a.createElement("script");yt(d)?h.src=d:h.innerText=d,a.body.appendChild(h)}}),a.close()}}},n.prototype.printURL=function(t,e){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=e,this.iframe.src=t)},n.prototype.onBeforePrint=function(t){this.onbeforeprint=t},n.prototype.onAfterPrint=function(t){this.onafterprint=t},n.prototype.launchPrint=function(t){this.isLoading||t.print()},n.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var e=this.iframe.contentWindow;e&&(this.onbeforeprint&&e.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&e.addEventListener("afterprint",this.onafterprint))}},n.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var e=this.iframe,i=e.contentDocument,o=e.contentWindow;if(!i||!o)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(o)}}):this.launchPrint(o)}},n}();S=I.Printd=Ut;I.default=Ut;class Re{constructor(){this.units=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],this.tenToSixteen=["diez","once","doce","trece","catorce","quince","diecis\xE9is"],this.tens=["treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"]}convertirNroMesAtexto(t){switch(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),t){case"1":return"Enero";case"2":return"Febrero";case"3":return"Marzo";case"4":return"Abril";case"5":return"Mayo";case"6":return"Junio";case"7":return"Julio";case"8":return"Agosto";case"9":return"Septiembre";case"10":return"Octubre";case"11":return"Noviembre";case"12":return"Diciembre";default:throw"Numero de mes inv\xE1lido"}}convertToText(t){if(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),!this.validateNumber(t))throw"N\xFAmero inv\xE1lido, no se puede convertir!";return this.getName(t)}deleteZerosLeft(t){let e=0,i=!0;for(e=0;e<t.length;e++)if(t.charAt(e)!=0){i=!1;break}return i?"0":t.substr(e)}validateNumber(t){return!(isNaN(t)||t===""||t.indexOf(".")>=0||t.indexOf("-")>=0)}getName(t){return t=this.deleteZerosLeft(t),t.length===1?this.getUnits(t):t.length===2?this.getTens(t):t.length===3?this.getHundreds(t):t.length<7?this.getThousands(t):t.length<13?this.getPeriod(t,6,"mill\xF3n"):t.length<19?this.getPeriod(t,12,"bill\xF3n"):"N\xFAmero demasiado grande."}getUnits(t){let e=parseInt(t);return this.units[e]}getTens(t){let e=t.charAt(1);if(t<17)return this.tenToSixteen[t-10];if(t<20)return"dieci"+this.getUnits(e);switch(t){case"20":return"veinte";case"22":return"veintid\xF3s";case"23":return"veintitr\xE9s";case"26":return"veintis\xE9is"}if(t<30)return"veinti"+this.getUnits(e);let i=this.tens[t.charAt(0)-3];return e>0&&(i+=" y "+this.getUnits(e)),i}getHundreds(t){let e="",i=t.charAt(0),o=t.substr(1);if(t==100)return"cien";switch(i){case"1":e="ciento";break;case"5":e="quinientos";break;case"7":e="setecientos";break;case"9":e="novecientos"}return e===""&&(e=this.getUnits(i)+"cientos"),o>0&&(e+=" "+this.getName(o)),e}getThousands(t){let e="mil",i=t.length-3,o=t.substr(0,i),r=t.substr(i);return o>1&&(e=this.getName(o).replace("uno","un")+" mil"),r>0&&(e+=" "+this.getName(r)),e}getPeriod(t,e,i){let o="un "+i,r=t.length-e,s=t.substr(0,r),l=t.substr(r);return s>1&&(o=this.getName(s).replace("uno","un")+" "+i.replace("\xF3","o")+"es"),l>0&&(o+=" "+this.getName(l)),o}}var x={conversorNumerosALetras:Re};class Oe{static factura(t){return new Promise((e,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.montoTotal)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;F.toDataURL(a.url2+"consulta/QR?nit="+a.nit+"&cuf="+t.cuf+"&numero="+t.numeroFactura+"&t=2",l).then(u=>{let c=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
      <div class='titulo'>FACTURA <br>CON DERECHO A CREDITO FISCAL</div>
      <div class='titulo2'>${a.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${a.direccion}<br>
Tel. ${a.telefono}<br>
Oruro</div>
<hr>
<div class='titulo'>NIT</div>
<div class='titulo2'>${a.nit}</div>
<div class='titulo'>FACTURA N\xB0</div>
<div class='titulo2'>${t.numeroFactura}</div>
<div class='titulo'>C\xD3D. AUTORIZACI\xD3N</div>
<div class='titulo2'>${t.cuf}</div>
<hr>
<table>
<tr><td class='titder'>NOMBRE/RAZ\xD3N SOCIAL:</td><td class='contenido'>${t.client.nombreRazonSocial}</td>
</tr><tr><td class='titder'>NIT/CI/CEX:</td><td class='contenido'>${t.client.numeroDocumento}</td></tr>
<tr><td class='titder'>COD. CLIENTE:</td ><td class='contenido'>${t.client.id}</td></tr>
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.fechaEmision}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.details.forEach(d=>{c+=`<div style='font-size: 12px'><b>${d.product_id} ${d.descripcion} </b></div>`,c+=`<div>${d.cantidad} ${parseFloat(d.precioUnitario).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(d.subTotal).toFixed(2)}</span></div>`}),c+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(t.montoTotal).toFixed(2)}</td></tr>
      <tr><td class='titder'>DESCUENTO Bs</td><td class='conte2'>0.00</td></tr>
      <tr><td class='titder'>TOTAL Bs</td><td class='conte2'>${parseFloat(t.montoTotal).toFixed(2)}</td></tr>
      <tr><td class='titder'>MONTO GIFT CARD Bs</td ><td class='conte2'>0.00</td></tr>
      <tr><td class='titder'>MONTO A PAGAR Bs</td><td class='conte2'>${parseFloat(t.montoTotal).toFixed(2)}</td></tr>
      <tr><td class='titder' style='font-size: 8px'>IMPORTE BASE CR\xC9DITO FISCAL Bs</td>
      <td class='conte2'>${parseFloat(t.montoTotal).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${s} ${((parseFloat(t.montoTotal)-Math.floor(parseFloat(t.montoTotal)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div class='titulo2' style='font-size: 9px'>
      ESTA FACTURA CONTRIBUYE AL DESARROLLO DEL PA\xCDS,<br>
      EL USO IL\xCDCITO SER\xC1 SANCIONADO PENALMENTE DE<br>
      ACUERDO A LEY<br><br>
      ${t.leyenda} <br><br>
      \u201CEste documento es la Representaci\xF3n Gr\xE1fica de un<br>
      Documento Fiscal Digital emitido en una modalidad de<br>
      facturaci\xF3n en l\xEDnea\u201D</div><br>
      <div style='display: flex;justify-content: center;'> <img  src="${u}" ></div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=c,new S().print(document.getElementById("myElement")),e(u)}).catch(u=>{i(u)})})}static nota(t,e=!0){return new Promise((i,o)=>{const r=x.conversorNumerosALetras,l=new r().convertToText(parseInt(t.total)),a={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},u=D().env;F.toDataURL(`Fecha: ${t.fecha_emision} Monto: ${parseFloat(t.total).toFixed(2)}`,a).then(c=>{let m=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="logo.png" alt="logo" style="width: 100px; height: 50px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>${t.tipo_venta==="EGRESO"?"NOTA DE EGRESO":"NOTA DE VENTA"}</div>
      <div class='titulo2'>${u.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${u.direccion}<br>
Tel. ${u.telefono}<br>
Oruro</div>
<hr>
<table>
<tr><td class='titder'>NOMBRE/RAZ\xD3N SOCIAL:</td><td class='contenido'>${t.client?t.name==null?t.client.nombre:t.name:""}</td>
</tr><tr><!-- td class='titder'>NIT/CI/CEX:</td><td class='contenido'>${t.client?t.client.nit:""}</td --></tr>
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.fecha_emision}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.details.forEach(d=>{console.log("r",d),m+=`<div style='font-size: 12px'><b> ${d.producto} </b></div>`,d.visible===1?m+=`<div>
                    <span style='font-size: 18px;font-weight: bold'>
                        ${d.cantidad}
                    </span>
                    <span>
                    ${parseFloat(d.precio).toFixed(2)}
                    </span>

                    <span style='float:right'>
                        ${parseFloat(d.precio*d.cantidad).toFixed(2)}
                    </span>
                    </div>`:m+=`<div>
                    <span style='font-size: 18px;font-weight: bold'>
                        ${d.cantidad}
                    </span>
                    <span>
                    -
                    </span>
                    0.00
                    <span style='float:right'>
                        -
                    </span>`}),m+=`<hr>
<div>${t.comentario===""||t.comentario===null?"":"Comentario: "+t.comentario}</div>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>Descuento Bs</td><td class='conte2'>${parseFloat(t.descuento).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>TOTAL Bs</td><td class='conte2'>${parseFloat(t.total-t.descuento).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${l} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${c}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=m,e&&new S().print(document.getElementById("myElement")),i(c)}).catch(c=>{o(c)})})}static cotizacion(t,e,i,o,r=!0){return(o==null||o==="")&&(o=0),new Promise((s,l)=>{const a=x.conversorNumerosALetras,c=new a().convertToText(parseInt(i)),m=Vt().format("YYYY-MM-DD"),d={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},h=D().env;F.toDataURL(`Fecha: ${m} Monto: ${parseFloat(i).toFixed(2)}`,d).then(f=>{let p=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="logo.png" alt="logo" style="width: 100px; height: 50px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>COTIZACION</div>
      <div class='titulo2'>${h.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${h.direccion}<br>
Tel. ${h.telefono}<br>
Oruro</div>
<hr>
<table>
<tr><td class='titder'>NOMBRE/RAZ\xD3N SOCIAL:</td><td class='contenido'>${e.nombre}</td>
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${m}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.forEach(C=>{p+=`<div style='font-size: 12px'><b> ${C.nombre} </b></div>`,p+=`<div><span style='font-size: 18px;font-weight: bold'>${C.cantidadVenta}</span> ${parseFloat(C.precioVenta).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(C.precioVenta*C.cantidadVenta).toFixed(2)}</span></div>`}),p+=`<hr>
<div>${e.comentario===""||e.comentario===null||e.comentario===void 0?"":"Comentario: "+e.comentario}</div>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(i).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>Descuento Bs</td><td class='conte2'>${parseFloat(o).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>TOTAL Bs</td><td class='conte2'>${parseFloat(i-o).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${c} ${((parseFloat(i)-Math.floor(parseFloat(i)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${f}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=p,r&&new S().print(document.getElementById("myElement")),s(f)}).catch(f=>{l(f)})})}static notaCompra(t){return console.log("factura",t),new Promise((e,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;F.toDataURL(`Fecha: ${t.fecha_emision} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(async u=>{let c=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="logo.png" alt="logo" style="width: 100px; height: 50px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>${t.tipo_venta==="EGRESO"?"NOTA DE EGRESO":"NOTA DE COMPRA"}</div>
      <div class='titulo2'>${a.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${a.direccion}<br>
Tel. ${a.telefono}<br>
Oruro</div>
<hr>
<table>
<tr><td class='titder'>NOMBRE/RAZ\xD3N SOCIAL:</td><td class='contenido'>${t.client?t.client.nombre:""}</td>
</tr><tr><td class='titder'>NIT/CI/CEX:</td><td class='contenido'>${t.client?t.client.nit:""}</td></tr>
<!--<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.fecha_emision}</td></tr>-->
</table><hr><div class='titulo'>DETALLE</div>`;t.buy_details.forEach(d=>{c+=`<div style='font-size: 12px'><b>${d.nombre} </b></div>`,c+=`<div><span style='font-size: 14px;font-weight: bold'>${d.cantidad}</span> ${parseFloat(d.precio).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(d.subtotal).toFixed(2)}</span></div>`}),c+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>Descuento Bs</td><td class='conte2'>${parseFloat(t.descuento).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>TOTAL Bs</td><td class='conte2'>${parseFloat(t.total-t.descuento).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${s} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${u}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=c,new S().print(document.getElementById("myElement")),e(u)}).catch(u=>{i(u)})})}static reportTotal(t,e){const i=t.filter(s=>s.tipoVenta==="Ingreso").reduce((s,l)=>s+l.montoTotal,0),o=t.filter(s=>s.tipoVenta==="Egreso").reduce((s,l)=>s+l.montoTotal,0),r=i-o;return console.log("montoTotal",r),new Promise((s,l)=>{const a=x.conversorNumerosALetras,u=new a,c=Math.abs(r),m=u.convertToText(parseInt(c)),d={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},h=D().env;F.toDataURL(` Monto: ${parseFloat(r).toFixed(2)}`,d).then(f=>{let p=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>title</div>
      <div class='titulo2'>${h.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${h.direccion}<br>
Tel. ${h.telefono}<br>
Oruro</div>
<hr>
<table>
</table><hr><div class='titulo'>DETALLE</div>`;t.forEach(g=>{p+=`<div style='font-size: 12px'><b> ${g.user.name} </b></div>`,p+=`<div> ${parseFloat(g.montoTotal).toFixed(2)} ${g.tipoVenta}
          <span style='float:right'> ${g.tipoVenta==="Egreso"?"-":""} ${parseFloat(g.montoTotal).toFixed(2)}</span></div>`}),p+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(r).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${m} ${((parseFloat(r)-Math.floor(parseFloat(r)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${f}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=p,new S().print(document.getElementById("myElement")),s(f)}).catch(f=>{l(f)})})}static reciboCompra(t){return new Promise((e,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;F.toDataURL(`Fecha: ${t.date} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(u=>{let c=`${this.head()}
    <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
    <img src="logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>RECIBO DE COMPRA</div>
      <div class='titulo2'>${a.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
    ${a.direccion}<br>
    Tel. ${a.telefono}<br>
    Oruro</div>
    <hr>
    <table>
    </table><hr><div class='titulo'>DETALLE</div>`;c+=`<div style='font-size: 12px'><b>${t.product_id} ${t.product.descripcion} </b></div>`,c+=`<div>${t.quantity} ${parseFloat(t.price).toFixed(2)} 0.00
          //           <span style='float:right'>${parseFloat(t.total).toFixed(2)}</span></div>`,c+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${s} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${u}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
    </body>
    </html>`,document.getElementById("myElement").innerHTML=c,new S().print(document.getElementById("myElement")),e(u)}).catch(u=>{i(u)})})}static reciboTranferencia(t,e,i,o){return console.log("producto",t,"de",e,"ha",i,"cantidad",o),new Promise((r,s)=>{const l=x.conversorNumerosALetras,u=new l().convertToText(parseInt(o)),c={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},m=D().env;F.toDataURL(`de: ${e} A: ${i}`,c).then(d=>{let h=`${this.head()}
    <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
    <img src="logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>RECIBO DE TRANSFERENCIA</div>
      <div class='titulo2'>${m.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
    ${m.direccion}<br>
    Tel. ${m.telefono}<br>
    Oruro</div>
    <hr>
    <table>
    </table><hr><div class='titulo'>DETALLE</div>`;h+=`<div style='font-size: 12px'><b>Producto: ${t} de Sucursal${e} a ${i} </b></div>`,h+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>CANTIDAD </td><td class='conte2'>${o+""}</td></tr>
      </table>
      <br>
      <div>Son ${u+""} ${o+""} unidades</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${d}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
    </body>
    </html>`,document.getElementById("myElement").innerHTML=h,new S().print(document.getElementById("myElement")),r(d)}).catch(d=>{s(d)})})}static head(){return`<html>
<style>
      .titulo{
      font-size: 12px;
      text-align: center;
      font-weight: bold;
      }
      .titulo2{
      font-size: 10px;
      text-align: center;
      }
            .titulo3{
      font-size: 10px;
      text-align: center;
      width:70%;
      }
            .contenido{
      font-size: 10px;
      text-align: left;
      }
      .conte2{
      font-size: 10px;
      text-align: right;
      }
      .titder{
      font-size: 12px;
      text-align: right;
      font-weight: bold;
      }
      hr{
  border-top: 1px dashed   ;
}
  table{
    width:100%
  }
  h1 {
    color: black;
    font-family: sans-serif;
  }
  </style>
<body>
<div style="width: 300px;">`}}export{Oe as I,Ue as Q};
