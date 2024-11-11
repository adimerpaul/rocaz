import{u as D}from"./index.eb674307.js";import{h as Ot}from"./moment.40bc58bf.js";var B={},zt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Et={},A={};let dt;const kt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];A.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};A.getSymbolTotalCodewords=function(t){return kt[t]};A.getBCHDigit=function(n){let t=0;for(;n!==0;)t++,n>>>=1;return t};A.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');dt=t};A.isKanjiModeEnabled=function(){return typeof dt!="undefined"};A.toSJIS=function(t){return dt(t)};var q={};(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function t(e){if(typeof e!="string")throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+e)}}n.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},n.from=function(i,o){if(n.isValid(i))return i;try{return t(i)}catch{return o}}})(q);function vt(){this.buffer=[],this.length=0}vt.prototype={get:function(n){const t=Math.floor(n/8);return(this.buffer[t]>>>7-n%8&1)===1},put:function(n,t){for(let e=0;e<t;e++)this.putBit((n>>>t-e-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),n&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var _t=vt;function Y(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}Y.prototype.set=function(n,t,e,i){const o=n*this.size+t;this.data[o]=e,i&&(this.reservedBit[o]=!0)};Y.prototype.get=function(n,t){return this.data[n*this.size+t]};Y.prototype.xor=function(n,t,e){this.data[n*this.size+t]^=e};Y.prototype.isReserved=function(n,t){return this.reservedBit[n*this.size+t]};var Vt=Y,wt={};(function(n){const t=A.getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,r=t(i),s=r===145?26:Math.ceil((r-13)/(2*o-2))*2,l=[r-7];for(let a=1;a<o-1;a++)l[a]=l[a-1]-s;return l.push(6),l.reverse()},n.getPositions=function(i){const o=[],r=n.getRowColCoords(i),s=r.length;for(let l=0;l<s;l++)for(let a=0;a<s;a++)l===0&&a===0||l===0&&a===s-1||l===s-1&&a===0||o.push([r[l],r[a]]);return o}})(wt);var Ct={};const Ht=A.getSymbolSize,gt=7;Ct.getPositions=function(t){const e=Ht(t);return[[0,0],[e-gt,0],[0,e-gt]]};var bt={};(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};n.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},n.from=function(o){return n.isValid(o)?parseInt(o,10):void 0},n.getPenaltyN1=function(o){const r=o.size;let s=0,l=0,a=0,c=null,d=null;for(let E=0;E<r;E++){l=a=0,c=d=null;for(let u=0;u<r;u++){let h=o.get(E,u);h===c?l++:(l>=5&&(s+=t.N1+(l-5)),c=h,l=1),h=o.get(u,E),h===d?a++:(a>=5&&(s+=t.N1+(a-5)),d=h,a=1)}l>=5&&(s+=t.N1+(l-5)),a>=5&&(s+=t.N1+(a-5))}return s},n.getPenaltyN2=function(o){const r=o.size;let s=0;for(let l=0;l<r-1;l++)for(let a=0;a<r-1;a++){const c=o.get(l,a)+o.get(l,a+1)+o.get(l+1,a)+o.get(l+1,a+1);(c===4||c===0)&&s++}return s*t.N2},n.getPenaltyN3=function(o){const r=o.size;let s=0,l=0,a=0;for(let c=0;c<r;c++){l=a=0;for(let d=0;d<r;d++)l=l<<1&2047|o.get(c,d),d>=10&&(l===1488||l===93)&&s++,a=a<<1&2047|o.get(d,c),d>=10&&(a===1488||a===93)&&s++}return s*t.N3},n.getPenaltyN4=function(o){let r=0;const s=o.data.length;for(let a=0;a<s;a++)r+=o.data[a];return Math.abs(Math.ceil(r*100/s/5)-10)*t.N4};function e(i,o,r){switch(i){case n.Patterns.PATTERN000:return(o+r)%2===0;case n.Patterns.PATTERN001:return o%2===0;case n.Patterns.PATTERN010:return r%3===0;case n.Patterns.PATTERN011:return(o+r)%3===0;case n.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case n.Patterns.PATTERN101:return o*r%2+o*r%3===0;case n.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case n.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(o,r){const s=r.size;for(let l=0;l<s;l++)for(let a=0;a<s;a++)r.isReserved(a,l)||r.xor(a,l,e(o,a,l))},n.getBestMask=function(o,r){const s=Object.keys(n.Patterns).length;let l=0,a=1/0;for(let c=0;c<s;c++){r(c),n.applyMask(c,o);const d=n.getPenaltyN1(o)+n.getPenaltyN2(o)+n.getPenaltyN3(o)+n.getPenaltyN4(o);n.applyMask(c,o),d<a&&(a=d,l=c)}return l}})(bt);var Z={};const P=q,J=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],K=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Z.getBlocksCount=function(t,e){switch(e){case P.L:return J[(t-1)*4+0];case P.M:return J[(t-1)*4+1];case P.Q:return J[(t-1)*4+2];case P.H:return J[(t-1)*4+3];default:return}};Z.getTotalCodewordsCount=function(t,e){switch(e){case P.L:return K[(t-1)*4+0];case P.M:return K[(t-1)*4+1];case P.Q:return K[(t-1)*4+2];case P.H:return K[(t-1)*4+3];default:return}};var Tt={},Q={};const V=new Uint8Array(512),j=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)V[e]=t,j[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)V[e]=V[e-255]})();Q.log=function(t){if(t<1)throw new Error("log("+t+")");return j[t]};Q.exp=function(t){return V[t]};Q.mul=function(t,e){return t===0||e===0?0:V[j[t]+j[e]]};(function(n){const t=Q;n.mul=function(i,o){const r=new Uint8Array(i.length+o.length-1);for(let s=0;s<i.length;s++)for(let l=0;l<o.length;l++)r[s+l]^=t.mul(i[s],o[l]);return r},n.mod=function(i,o){let r=new Uint8Array(i);for(;r.length-o.length>=0;){const s=r[0];for(let a=0;a<o.length;a++)r[a]^=t.mul(o[a],s);let l=0;for(;l<r.length&&r[l]===0;)l++;r=r.slice(l)}return r},n.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let r=0;r<i;r++)o=n.mul(o,new Uint8Array([1,t.exp(r)]));return o}})(Tt);const At=Tt;function ct(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}ct.prototype.initialize=function(t){this.degree=t,this.genPoly=At.generateECPolynomial(this.degree)};ct.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const i=At.mod(e,this.genPoly),o=this.degree-i.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(i,o),r}return i};var Yt=ct,Ft={},R={},ut={};ut.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var L={};const Bt="[0-9]+",Jt="[A-Z $%*+\\-./:]+";let H="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";H=H.replace(/u/g,"\\u");const Kt="(?:(?![A-Z0-9 $%*+\\-./:]|"+H+`)(?:.|[\r
]))+`;L.KANJI=new RegExp(H,"g");L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");L.BYTE=new RegExp(Kt,"g");L.NUMERIC=new RegExp(Bt,"g");L.ALPHANUMERIC=new RegExp(Jt,"g");const jt=new RegExp("^"+H+"$"),Gt=new RegExp("^"+Bt+"$"),qt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");L.testKanji=function(t){return jt.test(t)};L.testNumeric=function(t){return Gt.test(t)};L.testAlphanumeric=function(t){return qt.test(t)};(function(n){const t=ut,e=L;n.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},n.getBestModeForData=function(r){return e.testNumeric(r)?n.NUMERIC:e.testAlphanumeric(r)?n.ALPHANUMERIC:e.testKanji(r)?n.KANJI:n.BYTE},n.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},n.isValid=function(r){return r&&r.bit&&r.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+o)}}n.from=function(r,s){if(n.isValid(r))return r;try{return i(r)}catch{return s}}})(R);(function(n){const t=A,e=Z,i=q,o=R,r=ut,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,l=t.getBCHDigit(s);function a(u,h,f){for(let m=1;m<=40;m++)if(h<=n.getCapacity(m,f,u))return m}function c(u,h){return o.getCharCountIndicator(u,h)+4}function d(u,h){let f=0;return u.forEach(function(m){f+=c(m.mode,h)+m.getBitsLength()}),f}function E(u,h){for(let f=1;f<=40;f++)if(d(u,f)<=n.getCapacity(f,h,o.MIXED))return f}n.from=function(h,f){return r.isValid(h)?parseInt(h,10):f},n.getCapacity=function(h,f,m){if(!r.isValid(h))throw new Error("Invalid QR Code version");typeof m=="undefined"&&(m=o.BYTE);const C=t.getSymbolTotalCodewords(h),g=e.getTotalCodewordsCount(h,f),v=(C-g)*8;if(m===o.MIXED)return v;const y=v-c(m,h);switch(m){case o.NUMERIC:return Math.floor(y/10*3);case o.ALPHANUMERIC:return Math.floor(y/11*2);case o.KANJI:return Math.floor(y/13);case o.BYTE:default:return Math.floor(y/8)}},n.getBestVersionForData=function(h,f){let m;const C=i.from(f,i.M);if(Array.isArray(h)){if(h.length>1)return E(h,C);if(h.length===0)return 1;m=h[0]}else m=h;return a(m.mode,m.getLength(),C)},n.getEncodedBits=function(h){if(!r.isValid(h)||h<7)throw new Error("Invalid QR Code version");let f=h<<12;for(;t.getBCHDigit(f)-l>=0;)f^=s<<t.getBCHDigit(f)-l;return h<<12|f}})(Ft);var Nt={};const rt=A,It=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Zt=1<<14|1<<12|1<<10|1<<4|1<<1,mt=rt.getBCHDigit(It);Nt.getEncodedBits=function(t,e){const i=t.bit<<3|e;let o=i<<10;for(;rt.getBCHDigit(o)-mt>=0;)o^=It<<rt.getBCHDigit(o)-mt;return(i<<10|o)^Zt};var Lt={};const Qt=R;function U(n){this.mode=Qt.NUMERIC,this.data=n.toString()}U.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let e,i,o;for(e=0;e+3<=this.data.length;e+=3)i=this.data.substr(e,3),o=parseInt(i,10),t.put(o,10);const r=this.data.length-e;r>0&&(i=this.data.substr(e),o=parseInt(i,10),t.put(o,r*3+1))};var Xt=U;const Wt=R,tt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function O(n){this.mode=Wt.ALPHANUMERIC,this.data=n}O.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};O.prototype.getLength=function(){return this.data.length};O.prototype.getBitsLength=function(){return O.getBitsLength(this.data.length)};O.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let i=tt.indexOf(this.data[e])*45;i+=tt.indexOf(this.data[e+1]),t.put(i,11)}this.data.length%2&&t.put(tt.indexOf(this.data[e]),6)};var te=O,ee=function(t){for(var e=[],i=t.length,o=0;o<i;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&i>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(r=(r-55296)*1024+s-56320+65536,o+=1)}if(r<128){e.push(r);continue}if(r<2048){e.push(r>>6|192),e.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){e.push(r>>12|224),e.push(r>>6&63|128),e.push(r&63|128);continue}if(r>=65536&&r<=1114111){e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(r&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const ne=ee,oe=R;function z(n){this.mode=oe.BYTE,typeof n=="string"&&(n=ne(n)),this.data=new Uint8Array(n)}z.getBitsLength=function(t){return t*8};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(n){for(let t=0,e=this.data.length;t<e;t++)n.put(this.data[t],8)};var ie=z;const re=R,se=A;function k(n){this.mode=re.KANJI,this.data=n}k.getBitsLength=function(t){return t*13};k.prototype.getLength=function(){return this.data.length};k.prototype.getBitsLength=function(){return k.getBitsLength(this.data.length)};k.prototype.write=function(n){let t;for(t=0;t<this.data.length;t++){let e=se.toSJIS(this.data[t]);if(e>=33088&&e<=40956)e-=33088;else if(e>=57408&&e<=60351)e-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);e=(e>>>8&255)*192+(e&255),n.put(e,13)}};var ae=k,$t={exports:{}};(function(n){var t={single_source_shortest_paths:function(e,i,o){var r={},s={};s[i]=0;var l=t.PriorityQueue.make();l.push(i,0);for(var a,c,d,E,u,h,f,m,C;!l.empty();){a=l.pop(),c=a.value,E=a.cost,u=e[c]||{};for(d in u)u.hasOwnProperty(d)&&(h=u[d],f=E+h,m=s[d],C=typeof s[d]=="undefined",(C||m>f)&&(s[d]=f,l.push(d,f),r[d]=c))}if(typeof o!="undefined"&&typeof s[o]=="undefined"){var g=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(g)}return r},extract_shortest_path_from_predecessor_list:function(e,i){for(var o=[],r=i;r;)o.push(r),e[r],r=e[r];return o.reverse(),o},find_path:function(e,i,o){var r=t.single_source_shortest_paths(e,i,o);return t.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(e){var i=t.PriorityQueue,o={},r;e=e||{};for(r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=e.sorter||i.default_sorter,o},default_sorter:function(e,i){return e.cost-i.cost},push:function(e,i){var o={value:e,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=t})($t);(function(n){const t=R,e=Xt,i=te,o=ie,r=ae,s=L,l=A,a=$t.exports;function c(g){return unescape(encodeURIComponent(g)).length}function d(g,v,y){const p=[];let w;for(;(w=g.exec(y))!==null;)p.push({data:w[0],index:w.index,mode:v,length:w[0].length});return p}function E(g){const v=d(s.NUMERIC,t.NUMERIC,g),y=d(s.ALPHANUMERIC,t.ALPHANUMERIC,g);let p,w;return l.isKanjiModeEnabled()?(p=d(s.BYTE,t.BYTE,g),w=d(s.KANJI,t.KANJI,g)):(p=d(s.BYTE_KANJI,t.BYTE,g),w=[]),v.concat(y,p,w).sort(function(T,F){return T.index-F.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function u(g,v){switch(v){case t.NUMERIC:return e.getBitsLength(g);case t.ALPHANUMERIC:return i.getBitsLength(g);case t.KANJI:return r.getBitsLength(g);case t.BYTE:return o.getBitsLength(g)}}function h(g){return g.reduce(function(v,y){const p=v.length-1>=0?v[v.length-1]:null;return p&&p.mode===y.mode?(v[v.length-1].data+=y.data,v):(v.push(y),v)},[])}function f(g){const v=[];for(let y=0;y<g.length;y++){const p=g[y];switch(p.mode){case t.NUMERIC:v.push([p,{data:p.data,mode:t.ALPHANUMERIC,length:p.length},{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.ALPHANUMERIC:v.push([p,{data:p.data,mode:t.BYTE,length:p.length}]);break;case t.KANJI:v.push([p,{data:p.data,mode:t.BYTE,length:c(p.data)}]);break;case t.BYTE:v.push([{data:p.data,mode:t.BYTE,length:c(p.data)}])}}return v}function m(g,v){const y={},p={start:{}};let w=["start"];for(let b=0;b<g.length;b++){const T=g[b],F=[];for(let M=0;M<T.length;M++){const N=T[M],_=""+b+M;F.push(_),y[_]={node:N,lastCount:0},p[_]={};for(let W=0;W<w.length;W++){const $=w[W];y[$]&&y[$].node.mode===N.mode?(p[$][_]=u(y[$].lastCount+N.length,N.mode)-u(y[$].lastCount,N.mode),y[$].lastCount+=N.length):(y[$]&&(y[$].lastCount=N.length),p[$][_]=u(N.length,N.mode)+4+t.getCharCountIndicator(N.mode,v))}}w=F}for(let b=0;b<w.length;b++)p[w[b]].end=0;return{map:p,table:y}}function C(g,v){let y;const p=t.getBestModeForData(g);if(y=t.from(v,p),y!==t.BYTE&&y.bit<p.bit)throw new Error('"'+g+'" cannot be encoded with mode '+t.toString(y)+`.
 Suggested mode is: `+t.toString(p));switch(y===t.KANJI&&!l.isKanjiModeEnabled()&&(y=t.BYTE),y){case t.NUMERIC:return new e(g);case t.ALPHANUMERIC:return new i(g);case t.KANJI:return new r(g);case t.BYTE:return new o(g)}}n.fromArray=function(v){return v.reduce(function(y,p){return typeof p=="string"?y.push(C(p,null)):p.data&&y.push(C(p.data,p.mode)),y},[])},n.fromString=function(v,y){const p=E(v,l.isKanjiModeEnabled()),w=f(p),b=m(w,y),T=a.find_path(b.map,"start","end"),F=[];for(let M=1;M<T.length-1;M++)F.push(b.table[T[M]].node);return n.fromArray(h(F))},n.rawSplit=function(v){return n.fromArray(E(v,l.isKanjiModeEnabled()))}})(Lt);const X=A,et=q,le=_t,de=Vt,ce=wt,ue=Ct,st=bt,at=Z,he=Yt,G=Ft,fe=Nt,ge=R,nt=Lt;function me(n,t){const e=n.size,i=ue.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],s=i[o][1];for(let l=-1;l<=7;l++)if(!(r+l<=-1||e<=r+l))for(let a=-1;a<=7;a++)s+a<=-1||e<=s+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?n.set(r+l,s+a,!0,!0):n.set(r+l,s+a,!1,!0))}}function pe(n){const t=n.size;for(let e=8;e<t-8;e++){const i=e%2===0;n.set(e,6,i,!0),n.set(6,e,i,!0)}}function ye(n,t){const e=ce.getPositions(t);for(let i=0;i<e.length;i++){const o=e[i][0],r=e[i][1];for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)s===-2||s===2||l===-2||l===2||s===0&&l===0?n.set(o+s,r+l,!0,!0):n.set(o+s,r+l,!1,!0)}}function Ee(n,t){const e=n.size,i=G.getEncodedBits(t);let o,r,s;for(let l=0;l<18;l++)o=Math.floor(l/3),r=l%3+e-8-3,s=(i>>l&1)===1,n.set(o,r,s,!0),n.set(r,o,s,!0)}function ot(n,t,e){const i=n.size,o=fe.getEncodedBits(t,e);let r,s;for(r=0;r<15;r++)s=(o>>r&1)===1,r<6?n.set(r,8,s,!0):r<8?n.set(r+1,8,s,!0):n.set(i-15+r,8,s,!0),r<8?n.set(8,i-r-1,s,!0):r<9?n.set(8,15-r-1+1,s,!0):n.set(8,15-r-1,s,!0);n.set(i-8,8,1,!0)}function ve(n,t){const e=n.size;let i=-1,o=e-1,r=7,s=0;for(let l=e-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!n.isReserved(o,l-a)){let c=!1;s<t.length&&(c=(t[s]>>>r&1)===1),n.set(o,l-a,c),r--,r===-1&&(s++,r=7)}if(o+=i,o<0||e<=o){o-=i,i=-i;break}}}function we(n,t,e){const i=new le;e.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),ge.getCharCountIndicator(a.mode,n)),a.write(i)});const o=X.getSymbolTotalCodewords(n),r=at.getTotalCodewordsCount(n,t),s=(o-r)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const l=(s-i.getLengthInBits())/8;for(let a=0;a<l;a++)i.put(a%2?17:236,8);return Ce(i,n,t)}function Ce(n,t,e){const i=X.getSymbolTotalCodewords(t),o=at.getTotalCodewordsCount(t,e),r=i-o,s=at.getBlocksCount(t,e),l=i%s,a=s-l,c=Math.floor(i/s),d=Math.floor(r/s),E=d+1,u=c-d,h=new he(u);let f=0;const m=new Array(s),C=new Array(s);let g=0;const v=new Uint8Array(n.buffer);for(let T=0;T<s;T++){const F=T<a?d:E;m[T]=v.slice(f,f+F),C[T]=h.encode(m[T]),f+=F,g=Math.max(g,F)}const y=new Uint8Array(i);let p=0,w,b;for(w=0;w<g;w++)for(b=0;b<s;b++)w<m[b].length&&(y[p++]=m[b][w]);for(w=0;w<u;w++)for(b=0;b<s;b++)y[p++]=C[b][w];return y}function be(n,t,e,i){let o;if(Array.isArray(n))o=nt.fromArray(n);else if(typeof n=="string"){let c=t;if(!c){const d=nt.rawSplit(n);c=G.getBestVersionForData(d,e)}o=nt.fromString(n,c||40)}else throw new Error("Invalid data");const r=G.getBestVersionForData(o,e);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=we(t,e,o),l=X.getSymbolSize(t),a=new de(l);return me(a,t),pe(a),ye(a,t),ot(a,e,0),t>=7&&Ee(a,t),ve(a,s),isNaN(i)&&(i=st.getBestMask(a,ot.bind(null,a,e))),st.applyMask(i,a),ot(a,e,i),{modules:a,version:t,errorCorrectionLevel:e,maskPattern:i,segments:o}}Et.create=function(t,e){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=et.M,o,r;return typeof e!="undefined"&&(i=et.from(e.errorCorrectionLevel,et.M),o=G.from(e.version),r=st.from(e.maskPattern),e.toSJISFunc&&X.setToSJISFunction(e.toSJISFunc)),be(t,o,i,r)};var Mt={},ht={};(function(n){function t(e){if(typeof e=="number"&&(e=e.toString()),typeof e!="string")throw new Error("Color should be defined as hex string");let i=e.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+e);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:r,scale:r?4:s,margin:o,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},n.getImageWidth=function(i,o){const r=n.getScale(i,o);return Math.floor((i+o.margin*2)*r)},n.qrToImageData=function(i,o,r){const s=o.modules.size,l=o.modules.data,a=n.getScale(s,r),c=Math.floor((s+r.margin*2)*a),d=r.margin*a,E=[r.color.light,r.color.dark];for(let u=0;u<c;u++)for(let h=0;h<c;h++){let f=(u*c+h)*4,m=r.color.light;if(u>=d&&h>=d&&u<c-d&&h<c-d){const C=Math.floor((u-d)/a),g=Math.floor((h-d)/a);m=E[l[C*s+g]?1:0]}i[f++]=m.r,i[f++]=m.g,i[f++]=m.b,i[f]=m.a}}})(ht);(function(n){const t=ht;function e(o,r,s){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(r,s,l){let a=l,c=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(c=i()),a=t.getOptions(a);const d=t.getImageWidth(r.modules.size,a),E=c.getContext("2d"),u=E.createImageData(d,d);return t.qrToImageData(u.data,r,a),e(E,c,d),E.putImageData(u,0,0),c},n.renderToDataURL=function(r,s,l){let a=l;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const c=n.render(r,s,a),d=a.type||"image/png",E=a.rendererOpts||{};return c.toDataURL(d,E.quality)}})(Mt);var St={};const Te=ht;function pt(n,t){const e=n.a/255,i=t+'="'+n.hex+'"';return e<1?i+" "+t+'-opacity="'+e.toFixed(2).slice(1)+'"':i}function it(n,t,e){let i=n+t;return typeof e!="undefined"&&(i+=" "+e),i}function Ae(n,t,e){let i="",o=0,r=!1,s=0;for(let l=0;l<n.length;l++){const a=Math.floor(l%t),c=Math.floor(l/t);!a&&!r&&(r=!0),n[l]?(s++,l>0&&a>0&&n[l-1]||(i+=r?it("M",a+e,.5+c+e):it("m",o,0),o=0,r=!1),a+1<t&&n[l+1]||(i+=it("h",s),s=0)):o++}return i}St.render=function(t,e,i){const o=Te.getOptions(e),r=t.modules.size,s=t.modules.data,l=r+o.margin*2,a=o.color.light.a?"<path "+pt(o.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",c="<path "+pt(o.color.dark,"stroke")+' d="'+Ae(s,r,o.margin)+'"/>',d='viewBox="0 0 '+l+" "+l+'"',E=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",u='<svg xmlns="http://www.w3.org/2000/svg" '+E+d+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof i=="function"&&i(null,u),u};const Fe=zt,lt=Et,Pt=Mt,Be=St;function ft(n,t,e,i,o){const r=[].slice.call(arguments,1),s=r.length,l=typeof r[s-1]=="function";if(!l&&!Fe())throw new Error("Callback required as last argument");if(l){if(s<2)throw new Error("Too few arguments provided");s===2?(o=e,e=t,t=i=void 0):s===3&&(t.getContext&&typeof o=="undefined"?(o=i,i=void 0):(o=i,i=e,e=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(e=t,t=i=void 0):s===2&&!t.getContext&&(i=e,e=t,t=void 0),new Promise(function(a,c){try{const d=lt.create(e,i);a(n(d,t,i))}catch(d){c(d)}})}try{const a=lt.create(e,i);o(null,n(a,t,i))}catch(a){o(a)}}B.create=lt.create;B.toCanvas=ft.bind(null,Pt.render);B.toDataURL=ft.bind(null,Pt.renderToDataURL);B.toString=ft.bind(null,function(n,t,e){return Be.render(n,e)});var I={};Object.defineProperty(I,"__esModule",{value:!0});var S=I.Printd=I.createIFrame=I.createLinkStyle=I.createStyle=void 0,Ne=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,Ie=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,yt=function(n){return Ne.test(n)||Ie.test(n)};function Rt(n,t){var e=n.createElement("style");return e.appendChild(n.createTextNode(t)),e}I.createStyle=Rt;function Dt(n,t){var e=n.createElement("link");return e.type="text/css",e.rel="stylesheet",e.href=t,e}I.createLinkStyle=Dt;function xt(n){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),n.appendChild(t),t}I.createIFrame=xt;var Le={parent:window.document.body,headElements:[],bodyElements:[]},Ut=function(){function n(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[Le,t||{}].reduce(function(e,i){return Object.keys(i).forEach(function(o){return e[o]=i[o]}),e},{}),this.iframe=xt(this.opts.parent)}return n.prototype.getIFrame=function(){return this.iframe},n.prototype.print=function(t,e,i,o){if(!this.isLoading){var r=this.iframe,s=r.contentDocument,l=r.contentWindow;if(!(!s||!l)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=o;var a=l.document;a.open(),a.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var c=this.opts,d=c.headElements,E=c.bodyElements;Array.isArray(d)&&d.forEach(function(u){return a.head.appendChild(u)}),Array.isArray(E)&&E.forEach(function(u){return a.body.appendChild(u)}),Array.isArray(e)&&e.forEach(function(u){u&&a.head.appendChild(yt(u)?Dt(a,u):Rt(a,u))}),a.body.appendChild(this.elCopy),Array.isArray(i)&&i.forEach(function(u){if(u){var h=a.createElement("script");yt(u)?h.src=u:h.innerText=u,a.body.appendChild(h)}}),a.close()}}},n.prototype.printURL=function(t,e){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=e,this.iframe.src=t)},n.prototype.onBeforePrint=function(t){this.onbeforeprint=t},n.prototype.onAfterPrint=function(t){this.onafterprint=t},n.prototype.launchPrint=function(t){this.isLoading||t.print()},n.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var e=this.iframe.contentWindow;e&&(this.onbeforeprint&&e.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&e.addEventListener("afterprint",this.onafterprint))}},n.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var e=this.iframe,i=e.contentDocument,o=e.contentWindow;if(!i||!o)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(o)}}):this.launchPrint(o)}},n}();S=I.Printd=Ut;I.default=Ut;class $e{constructor(){this.units=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],this.tenToSixteen=["diez","once","doce","trece","catorce","quince","diecis\xE9is"],this.tens=["treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"]}convertirNroMesAtexto(t){switch(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),t){case"1":return"Enero";case"2":return"Febrero";case"3":return"Marzo";case"4":return"Abril";case"5":return"Mayo";case"6":return"Junio";case"7":return"Julio";case"8":return"Agosto";case"9":return"Septiembre";case"10":return"Octubre";case"11":return"Noviembre";case"12":return"Diciembre";default:throw"Numero de mes inv\xE1lido"}}convertToText(t){if(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),!this.validateNumber(t))throw"N\xFAmero inv\xE1lido, no se puede convertir!";return this.getName(t)}deleteZerosLeft(t){let e=0,i=!0;for(e=0;e<t.length;e++)if(t.charAt(e)!=0){i=!1;break}return i?"0":t.substr(e)}validateNumber(t){return!(isNaN(t)||t===""||t.indexOf(".")>=0||t.indexOf("-")>=0)}getName(t){return t=this.deleteZerosLeft(t),t.length===1?this.getUnits(t):t.length===2?this.getTens(t):t.length===3?this.getHundreds(t):t.length<7?this.getThousands(t):t.length<13?this.getPeriod(t,6,"mill\xF3n"):t.length<19?this.getPeriod(t,12,"bill\xF3n"):"N\xFAmero demasiado grande."}getUnits(t){let e=parseInt(t);return this.units[e]}getTens(t){let e=t.charAt(1);if(t<17)return this.tenToSixteen[t-10];if(t<20)return"dieci"+this.getUnits(e);switch(t){case"20":return"veinte";case"22":return"veintid\xF3s";case"23":return"veintitr\xE9s";case"26":return"veintis\xE9is"}if(t<30)return"veinti"+this.getUnits(e);let i=this.tens[t.charAt(0)-3];return e>0&&(i+=" y "+this.getUnits(e)),i}getHundreds(t){let e="",i=t.charAt(0),o=t.substr(1);if(t==100)return"cien";switch(i){case"1":e="ciento";break;case"5":e="quinientos";break;case"7":e="setecientos";break;case"9":e="novecientos"}return e===""&&(e=this.getUnits(i)+"cientos"),o>0&&(e+=" "+this.getName(o)),e}getThousands(t){let e="mil",i=t.length-3,o=t.substr(0,i),r=t.substr(i);return o>1&&(e=this.getName(o).replace("uno","un")+" mil"),r>0&&(e+=" "+this.getName(r)),e}getPeriod(t,e,i){let o="un "+i,r=t.length-e,s=t.substr(0,r),l=t.substr(r);return s>1&&(o=this.getName(s).replace("uno","un")+" "+i.replace("\xF3","o")+"es"),l>0&&(o+=" "+this.getName(l)),o}}var x={conversorNumerosALetras:$e};class Pe{static factura(t){return new Promise((e,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.montoTotal)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;B.toDataURL(a.url2+"consulta/QR?nit="+a.nit+"&cuf="+t.cuf+"&numero="+t.numeroFactura+"&t=2",l).then(c=>{let d=`${this.head()}
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
</html>`,document.getElementById("myElement").innerHTML=d,new S().print(document.getElementById("myElement")),e(c)}).catch(c=>{i(c)})})}static nota(t,e=!0){return new Promise((i,o)=>{const r=x.conversorNumerosALetras,l=new r().convertToText(parseInt(t.total-t.descuento)),a={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},c=D().env;B.toDataURL(`Fecha: ${t.fecha_emision} Monto: ${parseFloat(t.total).toFixed(2)}`,a).then(d=>{let E="",u="";t.producto&&(E="<tr><td class='titder'>PRODUCTO:</td><td class='contenido'>"+t.producto+"</td></tr>"),t.cantidad&&(u="<tr><td class='titder'>CANTIDAD:</td><td class='contenido'>"+t.cantidad+"</td></tr>");let h=`${this.head()}
  <!--div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="logo.png" alt="logo" style="width: 100px; height: 50px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>${t.tipo_venta==="EGRESO"?"NOTA DE EGRESO":"NOTA DE VENTA"}</div>
      <div class='titulo2'>${c.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
${c.direccion}<br>
Tel. ${c.telefono}<br>
Oruro</div!-->

<html lang="es">

<head>
    <meta charset="UTF-8">
    <style>
   .mono {
    font-family: Monospace,serif !important;
    font-size: 18px !important;
  }
</style>
<title></title>
</head>
<body>
<div class="mono">
<hr>
<table>
<tr><td class='titder'>NOMBRE/RAZ\xD3N SOCIAL:</td><td class='titder'>${t.client?t.name==null?t.client.nombre:t.name:""}</td>
</tr><tr><!-- td class='titder'>NIT/CI/CEX:</td><td class='contenido'>${t.client?t.client.nit:""}</td --></tr>
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.fecha_emision}</td></tr>
${E}
${u}
</table><hr><div class='titulo'>DETALLE</div>`;t.details.forEach(f=>{console.log("r",f),h+=`<div style='font-size: 12px'><b> ${f.producto} </b></div>`,f.visible===1?h+=`<div>
                    <span style='font-size: 18px;font-weight: bold'>
                        ${f.cantidad}
                    </span>
                    <span>
                    ${parseFloat(f.precio).toFixed(2)}
                    </span>

                    <span style='float:right'>
                        ${parseFloat(f.precio*f.cantidad).toFixed(2)}
                    </span>
                    </div>`:h+=`<div>
                    <span style='font-size: 18px;font-weight: bold'>
                        ${f.cantidad}
                    </span>
                    <span>

                    </span>

                    <span style='float:right'>

                    </span>`}),h+=`<hr>
<div>${t.comentario===""||t.comentario===null?"":"Comentario: "+t.comentario}</div>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='titder'>${parseFloat(t.total).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>Descuento Bs</td><td class='titder'>${parseFloat(t.descuento).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>TOTAL Bs</td><td class='titder'>${parseFloat(t.total-t.descuento).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${l} ${((parseFloat(t.total)-Math.floor(parseFloat(t.total)))*100).toFixed(2)} /100 Bolivianos</div><hr>
        <!--div style='display: flex;justify-content: center;'>
          <img  src="${d}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
        </div--!>
      </div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=h,e&&new S().print(document.getElementById("myElement")),i(d)}).catch(d=>{o(d)})})}static cotizacion(t,e,i,o,r=!0){return(o==null||o==="")&&(o=0),new Promise((s,l)=>{const a=x.conversorNumerosALetras,d=new a().convertToText(parseInt(i)),E=Ot().format("YYYY-MM-DD"),u={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},h=D().env;B.toDataURL(`Fecha: ${E} Monto: ${parseFloat(i).toFixed(2)}`,u).then(f=>{let m=`${this.head()}
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
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${E}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.forEach(C=>{m+=`<div style='font-size: 12px'><b> ${C.nombre} </b></div>`,m+=`<div><span style='font-size: 18px;font-weight: bold'>${C.cantidadVenta}</span> ${parseFloat(C.precioVenta).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(C.precioVenta*C.cantidadVenta).toFixed(2)}</span></div>`}),m+=`<hr>
<div>${e.comentario===""||e.comentario===null||e.comentario===void 0?"":"Comentario: "+e.comentario}</div>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(i).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>Descuento Bs</td><td class='conte2'>${parseFloat(o).toFixed(2)}</td></tr>
      <tr><td class='titder' style='width: 60%'>TOTAL Bs</td><td class='conte2'>${parseFloat(i-o).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${d} ${((parseFloat(i)-Math.floor(parseFloat(i)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${f}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=m,r&&new S().print(document.getElementById("myElement")),s(f)}).catch(f=>{l(f)})})}static notaCompra(t){return console.log("factura",t),new Promise((e,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;B.toDataURL(`Fecha: ${t.fecha_emision} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(async c=>{let d=`${this.head()}
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
</html>`,document.getElementById("myElement").innerHTML=d,new S().print(document.getElementById("myElement")),e(c)}).catch(c=>{i(c)})})}static reportTotal(t,e){const i=t.filter(s=>s.tipoVenta==="Ingreso").reduce((s,l)=>s+l.montoTotal,0),o=t.filter(s=>s.tipoVenta==="Egreso").reduce((s,l)=>s+l.montoTotal,0),r=i-o;return console.log("montoTotal",r),new Promise((s,l)=>{const a=x.conversorNumerosALetras,c=new a,d=Math.abs(r),E=c.convertToText(parseInt(d)),u={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},h=D().env;B.toDataURL(` Monto: ${parseFloat(r).toFixed(2)}`,u).then(f=>{let m=`${this.head()}
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
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(r).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${E} ${((parseFloat(r)-Math.floor(parseFloat(r)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${f}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=m,new S().print(document.getElementById("myElement")),s(f)}).catch(f=>{l(f)})})}static reciboCompra(t){return new Promise((e,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;B.toDataURL(`Fecha: ${t.date} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(c=>{let d=`${this.head()}
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
    </html>`,document.getElementById("myElement").innerHTML=d,new S().print(document.getElementById("myElement")),e(c)}).catch(c=>{i(c)})})}static reciboTranferencia(t,e,i,o){return console.log("producto",t,"de",e,"ha",i,"cantidad",o),new Promise((r,s)=>{const l=x.conversorNumerosALetras,c=new l().convertToText(parseInt(o)),d={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},E=D().env;B.toDataURL(`de: ${e} A: ${i}`,d).then(u=>{let h=`${this.head()}
    <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
    <img src="logo.png" alt="logo" style="width: 100px; height: 100px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>RECIBO DE TRANSFERENCIA</div>
      <div class='titulo2'>${E.razon} <br>
      Casa Matriz<br>
      No. Punto de Venta 0<br>
    ${E.direccion}<br>
    Tel. ${E.telefono}<br>
    Oruro</div>
    <hr>
    <table>
    </table><hr><div class='titulo'>DETALLE</div>`;h+=`<div style='font-size: 12px'><b>Producto: ${t} de Sucursal${e} a ${i} </b></div>`,h+=`<hr>
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
    </html>`,document.getElementById("myElement").innerHTML=h,new S().print(document.getElementById("myElement")),r(u)}).catch(u=>{s(u)})})}static head(){return`<html>
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
<div style="width: 300px;">`}}export{Pe as I};
