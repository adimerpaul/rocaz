import{c as Ot,a as zt,h as _t,d as kt,u as D}from"./index.1b6eb933.js";import{h as Vt}from"./moment.40bc58bf.js";var Ue=Ot({name:"QTr",props:{props:Object,noHover:Boolean},setup(n,{slots:t}){const e=zt(()=>"q-tr"+(n.props===void 0||n.props.header===!0?"":" "+n.props.__trClass)+(n.noHover===!0?" q-tr--no-hover":""));return()=>_t("tr",{class:e.value},kt(t.default))}}),F={},Ht=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Et={},A={};let dt;const Yt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];A.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};A.getSymbolTotalCodewords=function(t){return Yt[t]};A.getBCHDigit=function(n){let t=0;for(;n!==0;)t++,n>>>=1;return t};A.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');dt=t};A.isKanjiModeEnabled=function(){return typeof dt!="undefined"};A.toSJIS=function(t){return dt(t)};var G={};(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function t(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+e)}}n.isValid=function(r){return r&&typeof r.bit!="undefined"&&r.bit>=0&&r.bit<4},n.from=function(r,o){if(n.isValid(r))return r;try{return t(r)}catch{return o}}})(G);function vt(){this.buffer=[],this.length=0}vt.prototype={get:function(n){const t=Math.floor(n/8);return(this.buffer[t]>>>7-n%8&1)===1},put:function(n,t){for(let e=0;e<t;e++)this.putBit((n>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),n&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Jt=vt;function Y(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}Y.prototype.set=function(n,t,e,r){const o=n*this.size+t;this.data[o]=e,r&&(this.reservedBit[o]=!0)};Y.prototype.get=function(n,t){return this.data[n*this.size+t]};Y.prototype.xor=function(n,t,e){this.data[n*this.size+t]^=e};Y.prototype.isReserved=function(n,t){return this.reservedBit[n*this.size+t]};var Kt=Y,wt={};(function(n){const t=A.getSymbolSize;n.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=t(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,l=[i-7];for(let a=1;a<o-1;a++)l[a]=l[a-1]-s;return l.push(6),l.reverse()},n.getPositions=function(r){const o=[],i=n.getRowColCoords(r),s=i.length;for(let l=0;l<s;l++)for(let a=0;a<s;a++)l===0&&a===0||l===0&&a===s-1||l===s-1&&a===0||o.push([i[l],i[a]]);return o}})(wt);var Ct={};const jt=A.getSymbolSize,gt=7;Ct.getPositions=function(t){const e=jt(t);return[[0,0],[e-gt,0],[0,e-gt]]};var bt={};(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};n.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},n.from=function(o){return n.isValid(o)?parseInt(o,10):void 0},n.getPenaltyN1=function(o){const i=o.size;let s=0,l=0,a=0,c=null,d=null;for(let y=0;y<i;y++){l=a=0,c=d=null;for(let u=0;u<i;u++){let h=o.get(y,u);h===c?l++:(l>=5&&(s+=t.N1+(l-5)),c=h,l=1),h=o.get(u,y),h===d?a++:(a>=5&&(s+=t.N1+(a-5)),d=h,a=1)}l>=5&&(s+=t.N1+(l-5)),a>=5&&(s+=t.N1+(a-5))}return s},n.getPenaltyN2=function(o){const i=o.size;let s=0;for(let l=0;l<i-1;l++)for(let a=0;a<i-1;a++){const c=o.get(l,a)+o.get(l,a+1)+o.get(l+1,a)+o.get(l+1,a+1);(c===4||c===0)&&s++}return s*t.N2},n.getPenaltyN3=function(o){const i=o.size;let s=0,l=0,a=0;for(let c=0;c<i;c++){l=a=0;for(let d=0;d<i;d++)l=l<<1&2047|o.get(c,d),d>=10&&(l===1488||l===93)&&s++,a=a<<1&2047|o.get(d,c),d>=10&&(a===1488||a===93)&&s++}return s*t.N3},n.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let a=0;a<s;a++)i+=o.data[a];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function e(r,o,i){switch(r){case n.Patterns.PATTERN000:return(o+i)%2===0;case n.Patterns.PATTERN001:return o%2===0;case n.Patterns.PATTERN010:return i%3===0;case n.Patterns.PATTERN011:return(o+i)%3===0;case n.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case n.Patterns.PATTERN101:return o*i%2+o*i%3===0;case n.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case n.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}n.applyMask=function(o,i){const s=i.size;for(let l=0;l<s;l++)for(let a=0;a<s;a++)i.isReserved(a,l)||i.xor(a,l,e(o,a,l))},n.getBestMask=function(o,i){const s=Object.keys(n.Patterns).length;let l=0,a=1/0;for(let c=0;c<s;c++){i(c),n.applyMask(c,o);const d=n.getPenaltyN1(o)+n.getPenaltyN2(o)+n.getPenaltyN3(o)+n.getPenaltyN4(o);n.applyMask(c,o),d<a&&(a=d,l=c)}return l}})(bt);var Z={};const P=G,J=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],K=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Z.getBlocksCount=function(t,e){switch(e){case P.L:return J[(t-1)*4+0];case P.M:return J[(t-1)*4+1];case P.Q:return J[(t-1)*4+2];case P.H:return J[(t-1)*4+3];default:return}};Z.getTotalCodewordsCount=function(t,e){switch(e){case P.L:return K[(t-1)*4+0];case P.M:return K[(t-1)*4+1];case P.Q:return K[(t-1)*4+2];case P.H:return K[(t-1)*4+3];default:return}};var Tt={},Q={};const V=new Uint8Array(512),j=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)V[e]=t,j[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)V[e]=V[e-255]})();Q.log=function(t){if(t<1)throw new Error("log("+t+")");return j[t]};Q.exp=function(t){return V[t]};Q.mul=function(t,e){return t===0||e===0?0:V[j[t]+j[e]]};(function(n){const t=Q;n.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let l=0;l<o.length;l++)i[s+l]^=t.mul(r[s],o[l]);return i},n.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let a=0;a<o.length;a++)i[a]^=t.mul(o[a],s);let l=0;for(;l<i.length&&i[l]===0;)l++;i=i.slice(l)}return i},n.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=n.mul(o,new Uint8Array([1,t.exp(i)]));return o}})(Tt);const At=Tt;function ct(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}ct.prototype.initialize=function(t){this.degree=t,this.genPoly=At.generateECPolynomial(this.degree)};ct.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const r=At.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var qt=ct,Bt={},R={},ut={};ut.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var L={};const Ft="[0-9]+",Gt="[A-Z $%*+\\-./:]+";let H="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";H=H.replace(/u/g,"\\u");const Zt="(?:(?![A-Z0-9 $%*+\\-./:]|"+H+`)(?:.|[\r
]))+`;L.KANJI=new RegExp(H,"g");L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");L.BYTE=new RegExp(Zt,"g");L.NUMERIC=new RegExp(Ft,"g");L.ALPHANUMERIC=new RegExp(Gt,"g");const Qt=new RegExp("^"+H+"$"),Xt=new RegExp("^"+Ft+"$"),Wt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");L.testKanji=function(t){return Qt.test(t)};L.testNumeric=function(t){return Xt.test(t)};L.testAlphanumeric=function(t){return Wt.test(t)};(function(n){const t=ut,e=L;n.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},n.getBestModeForData=function(i){return e.testNumeric(i)?n.NUMERIC:e.testAlphanumeric(i)?n.ALPHANUMERIC:e.testKanji(i)?n.KANJI:n.BYTE},n.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},n.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+o)}}n.from=function(i,s){if(n.isValid(i))return i;try{return r(i)}catch{return s}}})(R);(function(n){const t=A,e=Z,r=G,o=R,i=ut,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,l=t.getBCHDigit(s);function a(u,h,f){for(let m=1;m<=40;m++)if(h<=n.getCapacity(m,f,u))return m}function c(u,h){return o.getCharCountIndicator(u,h)+4}function d(u,h){let f=0;return u.forEach(function(m){f+=c(m.mode,h)+m.getBitsLength()}),f}function y(u,h){for(let f=1;f<=40;f++)if(d(u,f)<=n.getCapacity(f,h,o.MIXED))return f}n.from=function(h,f){return i.isValid(h)?parseInt(h,10):f},n.getCapacity=function(h,f,m){if(!i.isValid(h))throw new Error("Invalid QR Code version");typeof m=="undefined"&&(m=o.BYTE);const C=t.getSymbolTotalCodewords(h),g=e.getTotalCodewordsCount(h,f),v=(C-g)*8;if(m===o.MIXED)return v;const E=v-c(m,h);switch(m){case o.NUMERIC:return Math.floor(E/10*3);case o.ALPHANUMERIC:return Math.floor(E/11*2);case o.KANJI:return Math.floor(E/13);case o.BYTE:default:return Math.floor(E/8)}},n.getBestVersionForData=function(h,f){let m;const C=r.from(f,r.M);if(Array.isArray(h)){if(h.length>1)return y(h,C);if(h.length===0)return 1;m=h[0]}else m=h;return a(m.mode,m.getLength(),C)},n.getEncodedBits=function(h){if(!i.isValid(h)||h<7)throw new Error("Invalid QR Code version");let f=h<<12;for(;t.getBCHDigit(f)-l>=0;)f^=s<<t.getBCHDigit(f)-l;return h<<12|f}})(Bt);var Nt={};const it=A,It=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,te=1<<14|1<<12|1<<10|1<<4|1<<1,mt=it.getBCHDigit(It);Nt.getEncodedBits=function(t,e){const r=t.bit<<3|e;let o=r<<10;for(;it.getBCHDigit(o)-mt>=0;)o^=It<<it.getBCHDigit(o)-mt;return(r<<10|o)^te};var Lt={};const ee=R;function U(n){this.mode=ee.NUMERIC,this.data=n.toString()}U.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let e,r,o;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),o=parseInt(r,10),t.put(o,10);const i=this.data.length-e;i>0&&(r=this.data.substr(e),o=parseInt(r,10),t.put(o,i*3+1))};var ne=U;const oe=R,tt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function O(n){this.mode=oe.ALPHANUMERIC,this.data=n}O.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};O.prototype.getLength=function(){return this.data.length};O.prototype.getBitsLength=function(){return O.getBitsLength(this.data.length)};O.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=tt.indexOf(this.data[e])*45;r+=tt.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(tt.indexOf(this.data[e]),6)};var re=O,ie=function(t){for(var e=[],r=t.length,o=0;o<r;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){e.push(i);continue}if(i<2048){e.push(i>>6|192),e.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){e.push(i>>12|224),e.push(i>>6&63|128),e.push(i&63|128);continue}if(i>=65536&&i<=1114111){e.push(i>>18|240),e.push(i>>12&63|128),e.push(i>>6&63|128),e.push(i&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const se=ie,ae=R;function z(n){this.mode=ae.BYTE,typeof n=="string"&&(n=se(n)),this.data=new Uint8Array(n)}z.getBitsLength=function(t){return t*8};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(n){for(let t=0,e=this.data.length;t<e;t++)n.put(this.data[t],8)};var le=z;const de=R,ce=A;function _(n){this.mode=de.KANJI,this.data=n}_.getBitsLength=function(t){return t*13};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=ce.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}};var ue=_,$t={exports:{}};(function(n){var t={single_source_shortest_paths:function(e,r,o){var i={},s={};s[r]=0;var l=t.PriorityQueue.make();l.push(r,0);for(var a,c,d,y,u,h,f,m,C;!l.empty();){a=l.pop(),c=a.value,y=a.cost,u=e[c]||{};for(d in u)u.hasOwnProperty(d)&&(h=u[d],f=y+h,m=s[d],C=typeof s[d]=="undefined",(C||m>f)&&(s[d]=f,l.push(d,f),i[d]=c))}if(typeof o!="undefined"&&typeof s[o]=="undefined"){var g=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(g)}return i},extract_shortest_path_from_predecessor_list:function(e,r){for(var o=[],i=r;i;)o.push(i),e[i],i=e[i];return o.reverse(),o},find_path:function(e,r,o){var i=t.single_source_shortest_paths(e,r,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(e){var r=t.PriorityQueue,o={},i;e=e||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=e.sorter||r.default_sorter,o},default_sorter:function(e,r){return e.cost-r.cost},push:function(e,r){var o={value:e,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=t})($t);(function(n){const t=R,e=ne,r=re,o=le,i=ue,s=L,l=A,a=$t.exports;function c(g){return unescape(encodeURIComponent(g)).length}function d(g,v,E){const p=[];let w;for(;(w=g.exec(E))!==null;)p.push({data:w[0],index:w.index,mode:v,length:w[0].length});return p}function y(g){const v=d(s.NUMERIC,t.NUMERIC,g),E=d(s.ALPHANUMERIC,t.ALPHANUMERIC,g);let p,w;return l.isKanjiModeEnabled()?(p=d(s.BYTE,t.BYTE,g),w=d(s.KANJI,t.KANJI,g)):(p=d(s.BYTE_KANJI,t.BYTE,g),w=[]),v.concat(E,p,w).sort(function(T,B){return T.index-B.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function u(g,v){switch(v){case t.NUMERIC:return e.getBitsLength(g);case t.ALPHANUMERIC:return r.getBitsLength(g);case t.KANJI:return i.getBitsLength(g);case t.BYTE:return o.getBitsLength(g)}}function h(g){return g.reduce(function(v,E){const p=v.length-1>=0?v[v.length-1]:null;return p&&p.mode===E.mode?(v[v.length-1].data+=E.data,v):(v.push(E),v)},[])}function f(g){const v=[];for(let E=0;E<g.length;E++){const p=g[E];switch(p.mode){case t.NUMERIC:v.push([p,{data:p.data,mode:t.ALPHANUMERIC,length:p.length},{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.ALPHANUMERIC:v.push([p,{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.KANJI:v.push([p,{data:p.data,mode:t.BYTE,length:c(p.data)}]);break;case t.BYTE:v.push([{data:p.data,mode:t.BYTE,length:c(p.data)}])}}return v}function m(g,v){const E={},p={start:{}};let w=["start"];for(let b=0;b<g.length;b++){const T=g[b],B=[];for(let M=0;M<T.length;M++){const N=T[M],k=""+b+M;B.push(k),E[k]={node:N,lastCount:0},p[k]={};for(let W=0;W<w.length;W++){const $=w[W];E[$]&&E[$].node.mode===N.mode?(p[$][k]=u(E[$].lastCount+N.length,N.mode)-u(E[$].lastCount,N.mode),E[$].lastCount+=N.length):(E[$]&&(E[$].lastCount=N.length),p[$][k]=u(N.length,N.mode)+4+t.getCharCountIndicator(N.mode,v))}}w=B}for(let b=0;b<w.length;b++)p[w[b]].end=0;return{map:p,table:E}}function C(g,v){let E;const p=t.getBestModeForData(g);if(E=t.from(v,p),E!==t.BYTE&&E.bit<p.bit)throw new Error('"'+g+'" cannot be encoded with mode '+t.toString(E)+`.
 Suggested mode is: `+t.toString(p));switch(E===t.KANJI&&!l.isKanjiModeEnabled()&&(E=t.BYTE),E){case t.NUMERIC:return new e(g);case t.ALPHANUMERIC:return new r(g);case t.KANJI:return new i(g);case t.BYTE:return new o(g)}}n.fromArray=function(v){return v.reduce(function(E,p){return typeof p=="string"?E.push(C(p,null)):p.data&&E.push(C(p.data,p.mode)),E},[])},n.fromString=function(v,E){const p=y(v,l.isKanjiModeEnabled()),w=f(p),b=m(w,E),T=a.find_path(b.map,"start","end"),B=[];for(let M=1;M<T.length-1;M++)B.push(b.table[T[M]].node);return n.fromArray(h(B))},n.rawSplit=function(v){return n.fromArray(y(v,l.isKanjiModeEnabled()))}})(Lt);const X=A,et=G,he=Jt,fe=Kt,ge=wt,me=Ct,st=bt,at=Z,pe=qt,q=Bt,ye=Nt,Ee=R,nt=Lt;function ve(n,t){const e=n.size,r=me.getPositions(t);for(let o=0;o<r.length;o++){const i=r[o][0],s=r[o][1];for(let l=-1;l<=7;l++)if(!(i+l<=-1||e<=i+l))for(let a=-1;a<=7;a++)s+a<=-1||e<=s+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?n.set(i+l,s+a,!0,!0):n.set(i+l,s+a,!1,!0))}}function we(n){const t=n.size;for(let e=8;e<t-8;e++){const r=e%2===0;n.set(e,6,r,!0),n.set(6,e,r,!0)}}function Ce(n,t){const e=ge.getPositions(t);for(let r=0;r<e.length;r++){const o=e[r][0],i=e[r][1];for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)s===-2||s===2||l===-2||l===2||s===0&&l===0?n.set(o+s,i+l,!0,!0):n.set(o+s,i+l,!1,!0)}}function be(n,t){const e=n.size,r=q.getEncodedBits(t);let o,i,s;for(let l=0;l<18;l++)o=Math.floor(l/3),i=l%3+e-8-3,s=(r>>l&1)===1,n.set(o,i,s,!0),n.set(i,o,s,!0)}function ot(n,t,e){const r=n.size,o=ye.getEncodedBits(t,e);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?n.set(i,8,s,!0):i<8?n.set(i+1,8,s,!0):n.set(r-15+i,8,s,!0),i<8?n.set(8,r-i-1,s,!0):i<9?n.set(8,15-i-1+1,s,!0):n.set(8,15-i-1,s,!0);n.set(r-8,8,1,!0)}function Te(n,t){const e=n.size;let r=-1,o=e-1,i=7,s=0;for(let l=e-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!n.isReserved(o,l-a)){let c=!1;s<t.length&&(c=(t[s]>>>i&1)===1),n.set(o,l-a,c),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||e<=o){o-=r,r=-r;break}}}function Ae(n,t,e){const r=new he;e.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),Ee.getCharCountIndicator(a.mode,n)),a.write(r)});const o=X.getSymbolTotalCodewords(n),i=at.getTotalCodewordsCount(n,t),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const l=(s-r.getLengthInBits())/8;for(let a=0;a<l;a++)r.put(a%2?17:236,8);return Be(r,n,t)}function Be(n,t,e){const r=X.getSymbolTotalCodewords(t),o=at.getTotalCodewordsCount(t,e),i=r-o,s=at.getBlocksCount(t,e),l=r%s,a=s-l,c=Math.floor(r/s),d=Math.floor(i/s),y=d+1,u=c-d,h=new pe(u);let f=0;const m=new Array(s),C=new Array(s);let g=0;const v=new Uint8Array(n.buffer);for(let T=0;T<s;T++){const B=T<a?d:y;m[T]=v.slice(f,f+B),C[T]=h.encode(m[T]),f+=B,g=Math.max(g,B)}const E=new Uint8Array(r);let p=0,w,b;for(w=0;w<g;w++)for(b=0;b<s;b++)w<m[b].length&&(E[p++]=m[b][w]);for(w=0;w<u;w++)for(b=0;b<s;b++)E[p++]=C[b][w];return E}function Fe(n,t,e,r){let o;if(Array.isArray(n))o=nt.fromArray(n);else if(typeof n=="string"){let c=t;if(!c){const d=nt.rawSplit(n);c=q.getBestVersionForData(d,e)}o=nt.fromString(n,c||40)}else throw new Error("Invalid data");const i=q.getBestVersionForData(o,e);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=Ae(t,e,o),l=X.getSymbolSize(t),a=new fe(l);return ve(a,t),we(a),Ce(a,t),ot(a,e,0),t>=7&&be(a,t),Te(a,s),isNaN(r)&&(r=st.getBestMask(a,ot.bind(null,a,e))),st.applyMask(r,a),ot(a,e,r),{modules:a,version:t,errorCorrectionLevel:e,maskPattern:r,segments:o}}Et.create=function(t,e){if(typeof t=="undefined"||t==="")throw new Error("No input text");let r=et.M,o,i;return typeof e!="undefined"&&(r=et.from(e.errorCorrectionLevel,et.M),o=q.from(e.version),i=st.from(e.maskPattern),e.toSJISFunc&&X.setToSJISFunction(e.toSJISFunc)),Fe(t,o,r,i)};var Mt={},ht={};(function(n){function t(e){if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error("Color should be defined as hex string");let r=e.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+e);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}n.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin=="undefined"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},n.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},n.getImageWidth=function(r,o){const i=n.getScale(r,o);return Math.floor((r+o.margin*2)*i)},n.qrToImageData=function(r,o,i){const s=o.modules.size,l=o.modules.data,a=n.getScale(s,i),c=Math.floor((s+i.margin*2)*a),d=i.margin*a,y=[i.color.light,i.color.dark];for(let u=0;u<c;u++)for(let h=0;h<c;h++){let f=(u*c+h)*4,m=i.color.light;if(u>=d&&h>=d&&u<c-d&&h<c-d){const C=Math.floor((u-d)/a),g=Math.floor((h-d)/a);m=y[l[C*s+g]?1:0]}r[f++]=m.r,r[f++]=m.g,r[f++]=m.b,r[f]=m.a}}})(ht);(function(n){const t=ht;function e(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(i,s,l){let a=l,c=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(c=r()),a=t.getOptions(a);const d=t.getImageWidth(i.modules.size,a),y=c.getContext("2d"),u=y.createImageData(d,d);return t.qrToImageData(u.data,i,a),e(y,c,d),y.putImageData(u,0,0),c},n.renderToDataURL=function(i,s,l){let a=l;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const c=n.render(i,s,a),d=a.type||"image/png",y=a.rendererOpts||{};return c.toDataURL(d,y.quality)}})(Mt);var St={};const Ne=ht;function pt(n,t){const e=n.a/255,r=t+'="'+n.hex+'"';return e<1?r+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':r}function rt(n,t,e){let r=n+t;return typeof e!="undefined"&&(r+=" "+e),r}function Ie(n,t,e){let r="",o=0,i=!1,s=0;for(let l=0;l<n.length;l++){const a=Math.floor(l%t),c=Math.floor(l/t);!a&&!i&&(i=!0),n[l]?(s++,l>0&&a>0&&n[l-1]||(r+=i?rt("M",a+e,.5+c+e):rt("m",o,0),o=0,i=!1),a+1<t&&n[l+1]||(r+=rt("h",s),s=0)):o++}return r}St.render=function(t,e,r){const o=Ne.getOptions(e),i=t.modules.size,s=t.modules.data,l=i+o.margin*2,a=o.color.light.a?"<path "+pt(o.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",c="<path "+pt(o.color.dark,"stroke")+' d="'+Ie(s,i,o.margin)+'"/>',d='viewBox="0 0 '+l+" "+l+'"',y=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",u='<svg xmlns="http://www.w3.org/2000/svg" '+y+d+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof r=="function"&&r(null,u),u};const Le=Ht,lt=Et,Pt=Mt,$e=St;function ft(n,t,e,r,o){const i=[].slice.call(arguments,1),s=i.length,l=typeof i[s-1]=="function";if(!l&&!Le())throw new Error("Callback required as last argument");if(l){if(s<2)throw new Error("Too few arguments provided");s===2?(o=e,e=t,t=r=void 0):s===3&&(t.getContext&&typeof o=="undefined"?(o=r,r=void 0):(o=r,r=e,e=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(e=t,t=r=void 0):s===2&&!t.getContext&&(r=e,e=t,t=void 0),new Promise(function(a,c){try{const d=lt.create(e,r);a(n(d,t,r))}catch(d){c(d)}})}try{const a=lt.create(e,r);o(null,n(a,t,r))}catch(a){o(a)}}F.create=lt.create;F.toCanvas=ft.bind(null,Pt.render);F.toDataURL=ft.bind(null,Pt.renderToDataURL);F.toString=ft.bind(null,function(n,t,e){return $e.render(n,e)});var I={};Object.defineProperty(I,"__esModule",{value:!0});var S=I.Printd=I.createIFrame=I.createLinkStyle=I.createStyle=void 0,Me=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,Se=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,yt=function(n){return Me.test(n)||Se.test(n)};function Rt(n,t){var e=n.createElement("style");return e.appendChild(n.createTextNode(t)),e}I.createStyle=Rt;function Dt(n,t){var e=n.createElement("link");return e.type="text/css",e.rel="stylesheet",e.href=t,e}I.createLinkStyle=Dt;function xt(n){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),n.appendChild(t),t}I.createIFrame=xt;var Pe={parent:window.document.body,headElements:[],bodyElements:[]},Ut=function(){function n(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[Pe,t||{}].reduce(function(e,r){return Object.keys(r).forEach(function(o){return e[o]=r[o]}),e},{}),this.iframe=xt(this.opts.parent)}return n.prototype.getIFrame=function(){return this.iframe},n.prototype.print=function(t,e,r,o){if(!this.isLoading){var i=this.iframe,s=i.contentDocument,l=i.contentWindow;if(!(!s||!l)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=o;var a=l.document;a.open(),a.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var c=this.opts,d=c.headElements,y=c.bodyElements;Array.isArray(d)&&d.forEach(function(u){return a.head.appendChild(u)}),Array.isArray(y)&&y.forEach(function(u){return a.body.appendChild(u)}),Array.isArray(e)&&e.forEach(function(u){u&&a.head.appendChild(yt(u)?Dt(a,u):Rt(a,u))}),a.body.appendChild(this.elCopy),Array.isArray(r)&&r.forEach(function(u){if(u){var h=a.createElement("script");yt(u)?h.src=u:h.innerText=u,a.body.appendChild(h)}}),a.close()}}},n.prototype.printURL=function(t,e){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=e,this.iframe.src=t)},n.prototype.onBeforePrint=function(t){this.onbeforeprint=t},n.prototype.onAfterPrint=function(t){this.onafterprint=t},n.prototype.launchPrint=function(t){this.isLoading||t.print()},n.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var e=this.iframe.contentWindow;e&&(this.onbeforeprint&&e.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&e.addEventListener("afterprint",this.onafterprint))}},n.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var e=this.iframe,r=e.contentDocument,o=e.contentWindow;if(!r||!o)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(o)}}):this.launchPrint(o)}},n}();S=I.Printd=Ut;I.default=Ut;class Re{constructor(){this.units=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],this.tenToSixteen=["diez","once","doce","trece","catorce","quince","diecis\xE9is"],this.tens=["treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"]}convertirNroMesAtexto(t){switch(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),t){case"1":return"Enero";case"2":return"Febrero";case"3":return"Marzo";case"4":return"Abril";case"5":return"Mayo";case"6":return"Junio";case"7":return"Julio";case"8":return"Agosto";case"9":return"Septiembre";case"10":return"Octubre";case"11":return"Noviembre";case"12":return"Diciembre";default:throw"Numero de mes inv\xE1lido"}}convertToText(t){if(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),!this.validateNumber(t))throw"N\xFAmero inv\xE1lido, no se puede convertir!";return this.getName(t)}deleteZerosLeft(t){let e=0,r=!0;for(e=0;e<t.length;e++)if(t.charAt(e)!=0){r=!1;break}return r?"0":t.substr(e)}validateNumber(t){return!(isNaN(t)||t===""||t.indexOf(".")>=0||t.indexOf("-")>=0)}getName(t){return t=this.deleteZerosLeft(t),t.length===1?this.getUnits(t):t.length===2?this.getTens(t):t.length===3?this.getHundreds(t):t.length<7?this.getThousands(t):t.length<13?this.getPeriod(t,6,"mill\xF3n"):t.length<19?this.getPeriod(t,12,"bill\xF3n"):"N\xFAmero demasiado grande."}getUnits(t){let e=parseInt(t);return this.units[e]}getTens(t){let e=t.charAt(1);if(t<17)return this.tenToSixteen[t-10];if(t<20)return"dieci"+this.getUnits(e);switch(t){case"20":return"veinte";case"22":return"veintid\xF3s";case"23":return"veintitr\xE9s";case"26":return"veintis\xE9is"}if(t<30)return"veinti"+this.getUnits(e);let r=this.tens[t.charAt(0)-3];return e>0&&(r+=" y "+this.getUnits(e)),r}getHundreds(t){let e="",r=t.charAt(0),o=t.substr(1);if(t==100)return"cien";switch(r){case"1":e="ciento";break;case"5":e="quinientos";break;case"7":e="setecientos";break;case"9":e="novecientos"}return e===""&&(e=this.getUnits(r)+"cientos"),o>0&&(e+=" "+this.getName(o)),e}getThousands(t){let e="mil",r=t.length-3,o=t.substr(0,r),i=t.substr(r);return o>1&&(e=this.getName(o).replace("uno","un")+" mil"),i>0&&(e+=" "+this.getName(i)),e}getPeriod(t,e,r){let o="un "+r,i=t.length-e,s=t.substr(0,i),l=t.substr(i);return s>1&&(o=this.getName(s).replace("uno","un")+" "+r.replace("\xF3","o")+"es"),l>0&&(o+=" "+this.getName(l)),o}}var x={conversorNumerosALetras:Re};class Oe{static factura(t){return new Promise((e,r)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.montoTotal)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;F.toDataURL(a.url2+"consulta/QR?nit="+a.nit+"&cuf="+t.cuf+"&numero="+t.numeroFactura+"&t=2",l).then(c=>{let d=`${this.head()}
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
</table><hr><div class='titulo'>DETALLE</div>`;t.details.forEach(u=>{d+=`<div style='font-size: 12px'><b>${u.product_id} ${u.descripcion} </b></div>`,d+=`<div>${u.cantidad} ${parseFloat(u.precioUnitario).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(u.subTotal).toFixed(2)}</span></div>`}),d+=`<hr>
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
      <div style='display: flex;justify-content: center;'> <img  src="${c}" ></div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=d,new S().print(document.getElementById("myElement")),e(c)}).catch(c=>{r(c)})})}static nota(t,e=!0){return console.log("factura",t),new Promise((r,o)=>{const i=x.conversorNumerosALetras,l=new i().convertToText(parseInt(t.total)),a={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},c=D().env;F.toDataURL(`Fecha: ${t.fecha_emision} Monto: ${parseFloat(t.total).toFixed(2)}`,a).then(d=>{let y=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="logo.png" alt="logo" style="width: 100px; height: 50px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>${t.tipo_venta==="EGRESO"?"NOTA DE EGRESO":"NOTA DE VENTA"}</div>
      <div class='titulo2'>${c.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${c.direccion}<br>
Tel. ${c.telefono}<br>
Oruro</div>
<hr>
<table>
<tr><td class='titder'>NOMBRE/RAZ\xD3N SOCIAL:</td><td class='contenido'>${t.client?t.name==null?t.client.nombre:t.name:""}</td>
</tr><tr><td class='titder'>NIT/CI/CEX:</td><td class='contenido'>${t.client?t.client.nit:""}</td></tr>
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.fecha_emision}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.details.forEach(u=>{y+=`<div style='font-size: 12px'><b> ${u.producto} </b></div>`,y+=`<div><span style='font-size: 18px;font-weight: bold'>${u.cantidad}</span> ${parseFloat(u.precio).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(u.total).toFixed(2)}</span></div>`}),y+=`<hr>
<div>${t.comentario===""||t.comentario===null?"":"Comentario: "+t.comentario}</div>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>Descuento Bs</td><td class='conte2'>${parseFloat(t.descuento).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>TOTAL Bs</td><td class='conte2'>${parseFloat(t.total-t.descuento).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${l} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${d}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=y,e&&new S().print(document.getElementById("myElement")),r(d)}).catch(d=>{o(d)})})}static cotizacion(t,e,r,o,i=!0){return(o==null||o==="")&&(o=0),new Promise((s,l)=>{const a=x.conversorNumerosALetras,d=new a().convertToText(parseInt(r)),y=Vt().format("YYYY-MM-DD"),u={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},h=D().env;F.toDataURL(`Fecha: ${y} Monto: ${parseFloat(r).toFixed(2)}`,u).then(f=>{let m=`${this.head()}
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
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${y}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.forEach(C=>{m+=`<div style='font-size: 12px'><b> ${C.nombre} </b></div>`,m+=`<div><span style='font-size: 18px;font-weight: bold'>${C.cantidadVenta}</span> ${parseFloat(C.precioVenta).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(C.precioVenta*C.cantidadVenta).toFixed(2)}</span></div>`}),m+=`<hr>
<div>${e.comentario===""||e.comentario===null||e.comentario===void 0?"":"Comentario: "+e.comentario}</div>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(r).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>Descuento Bs</td><td class='conte2'>${parseFloat(o).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>TOTAL Bs</td><td class='conte2'>${parseFloat(r-o).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${d} ${((parseFloat(r)-Math.floor(parseFloat(r)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${f}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=m,i&&new S().print(document.getElementById("myElement")),s(f)}).catch(f=>{l(f)})})}static notaCompra(t){return console.log("factura",t),new Promise((e,r)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;F.toDataURL(`Fecha: ${t.fecha_emision} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(async c=>{let d=`${this.head()}
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
</table><hr><div class='titulo'>DETALLE</div>`;t.buy_details.forEach(u=>{d+=`<div style='font-size: 12px'><b>${u.nombre} </b></div>`,d+=`<div><span style='font-size: 14px;font-weight: bold'>${u.cantidad}</span> ${parseFloat(u.precio).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(u.subtotal).toFixed(2)}</span></div>`}),d+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>Descuento Bs</td><td class='conte2'>${parseFloat(t.descuento).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>TOTAL Bs</td><td class='conte2'>${parseFloat(t.total-t.descuento).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${s} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${c}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=d,new S().print(document.getElementById("myElement")),e(c)}).catch(c=>{r(c)})})}static reportTotal(t,e){const r=t.filter(s=>s.tipoVenta==="Ingreso").reduce((s,l)=>s+l.montoTotal,0),o=t.filter(s=>s.tipoVenta==="Egreso").reduce((s,l)=>s+l.montoTotal,0),i=r-o;return console.log("montoTotal",i),new Promise((s,l)=>{const a=x.conversorNumerosALetras,c=new a,d=Math.abs(i),y=c.convertToText(parseInt(d)),u={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},h=D().env;F.toDataURL(` Monto: ${parseFloat(i).toFixed(2)}`,u).then(f=>{let m=`${this.head()}
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
</table><hr><div class='titulo'>DETALLE</div>`;t.forEach(g=>{m+=`<div style='font-size: 12px'><b> ${g.user.name} </b></div>`,m+=`<div> ${parseFloat(g.montoTotal).toFixed(2)} ${g.tipoVenta}
          <span style='float:right'> ${g.tipoVenta==="Egreso"?"-":""} ${parseFloat(g.montoTotal).toFixed(2)}</span></div>`}),m+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(i).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${y} ${((parseFloat(i)-Math.floor(parseFloat(i)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${f}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=m,new S().print(document.getElementById("myElement")),s(f)}).catch(f=>{l(f)})})}static reciboCompra(t){return new Promise((e,r)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;F.toDataURL(`Fecha: ${t.date} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(c=>{let d=`${this.head()}
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
    </table><hr><div class='titulo'>DETALLE</div>`;d+=`<div style='font-size: 12px'><b>${t.product_id} ${t.product.descripcion} </b></div>`,d+=`<div>${t.quantity} ${parseFloat(t.price).toFixed(2)} 0.00
          //           <span style='float:right'>${parseFloat(t.total).toFixed(2)}</span></div>`,d+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(t.total).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${s} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${c}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
    </body>
    </html>`,document.getElementById("myElement").innerHTML=d,new S().print(document.getElementById("myElement")),e(c)}).catch(c=>{r(c)})})}static reciboTranferencia(t,e,r,o){return console.log("producto",t,"de",e,"ha",r,"cantidad",o),new Promise((i,s)=>{const l=x.conversorNumerosALetras,c=new l().convertToText(parseInt(o)),d={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},y=D().env;F.toDataURL(`de: ${e} A: ${r}`,d).then(u=>{let h=`${this.head()}
    <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
    <img src="logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>RECIBO DE TRANSFERENCIA</div>
      <div class='titulo2'>${y.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
    ${y.direccion}<br>
    Tel. ${y.telefono}<br>
    Oruro</div>
    <hr>
    <table>
    </table><hr><div class='titulo'>DETALLE</div>`;h+=`<div style='font-size: 12px'><b>Producto: ${t} de Sucursal${e} a ${r} </b></div>`,h+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>CANTIDAD </td><td class='conte2'>${o+""}</td></tr>
      </table>
      <br>
      <div>Son ${c+""} ${o+""} unidades</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${u}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
    </body>
    </html>`,document.getElementById("myElement").innerHTML=h,new S().print(document.getElementById("myElement")),i(u)}).catch(u=>{s(u)})})}static head(){return`<html>
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
