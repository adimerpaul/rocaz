import{c as Ot,a as _t,h as zt,d as kt,u as D}from"./index.f770a39e.js";var De=Ot({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:t}){const n=_t(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>zt("tr",{class:n.value},kt(t.default))}}),I={},Ht=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Et={},T={};let ct;const Vt=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];T.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};T.getSymbolTotalCodewords=function(t){return Vt[t]};T.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};T.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');ct=t};T.isKanjiModeEnabled=function(){return typeof ct!="undefined"};T.toSJIS=function(t){return ct(t)};var G={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},e.from=function(i,o){if(e.isValid(i))return i;try{return t(i)}catch{return o}}})(G);function vt(){this.buffer=[],this.length=0}vt.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Jt=vt;function J(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}J.prototype.set=function(e,t,n,i){const o=e*this.size+t;this.data[o]=n,i&&(this.reservedBit[o]=!0)};J.prototype.get=function(e,t){return this.data[e*this.size+t]};J.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};J.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Kt=J,wt={};(function(e){const t=T.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,r=t(i),s=r===145?26:Math.ceil((r-13)/(2*o-2))*2,l=[r-7];for(let a=1;a<o-1;a++)l[a]=l[a-1]-s;return l.push(6),l.reverse()},e.getPositions=function(i){const o=[],r=e.getRowColCoords(i),s=r.length;for(let l=0;l<s;l++)for(let a=0;a<s;a++)l===0&&a===0||l===0&&a===s-1||l===s-1&&a===0||o.push([r[l],r[a]]);return o}})(wt);var Ct={};const jt=T.getSymbolSize,gt=7;Ct.getPositions=function(t){const n=jt(t);return[[0,0],[n-gt,0],[0,n-gt]]};var bt={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const r=o.size;let s=0,l=0,a=0,c=null,d=null;for(let E=0;E<r;E++){l=a=0,c=d=null;for(let u=0;u<r;u++){let h=o.get(E,u);h===c?l++:(l>=5&&(s+=t.N1+(l-5)),c=h,l=1),h=o.get(u,E),h===d?a++:(a>=5&&(s+=t.N1+(a-5)),d=h,a=1)}l>=5&&(s+=t.N1+(l-5)),a>=5&&(s+=t.N1+(a-5))}return s},e.getPenaltyN2=function(o){const r=o.size;let s=0;for(let l=0;l<r-1;l++)for(let a=0;a<r-1;a++){const c=o.get(l,a)+o.get(l,a+1)+o.get(l+1,a)+o.get(l+1,a+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const r=o.size;let s=0,l=0,a=0;for(let c=0;c<r;c++){l=a=0;for(let d=0;d<r;d++)l=l<<1&2047|o.get(c,d),d>=10&&(l===1488||l===93)&&s++,a=a<<1&2047|o.get(d,c),d>=10&&(a===1488||a===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let r=0;const s=o.data.length;for(let a=0;a<s;a++)r+=o.data[a];return Math.abs(Math.ceil(r*100/s/5)-10)*t.N4};function n(i,o,r){switch(i){case e.Patterns.PATTERN000:return(o+r)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(o+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return o*r%2+o*r%3===0;case e.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case e.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(o,r){const s=r.size;for(let l=0;l<s;l++)for(let a=0;a<s;a++)r.isReserved(a,l)||r.xor(a,l,n(o,a,l))},e.getBestMask=function(o,r){const s=Object.keys(e.Patterns).length;let l=0,a=1/0;for(let c=0;c<s;c++){r(c),e.applyMask(c,o);const d=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(c,o),d<a&&(a=d,l=c)}return l}})(bt);var Z={};const $=G,K=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],j=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Z.getBlocksCount=function(t,n){switch(n){case $.L:return K[(t-1)*4+0];case $.M:return K[(t-1)*4+1];case $.Q:return K[(t-1)*4+2];case $.H:return K[(t-1)*4+3];default:return}};Z.getTotalCodewordsCount=function(t,n){switch(n){case $.L:return j[(t-1)*4+0];case $.M:return j[(t-1)*4+1];case $.Q:return j[(t-1)*4+2];case $.H:return j[(t-1)*4+3];default:return}};var At={},Q={};const H=new Uint8Array(512),Y=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)H[n]=t,Y[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)H[n]=H[n-255]})();Q.log=function(t){if(t<1)throw new Error("log("+t+")");return Y[t]};Q.exp=function(t){return H[t]};Q.mul=function(t,n){return t===0||n===0?0:H[Y[t]+Y[n]]};(function(e){const t=Q;e.mul=function(i,o){const r=new Uint8Array(i.length+o.length-1);for(let s=0;s<i.length;s++)for(let l=0;l<o.length;l++)r[s+l]^=t.mul(i[s],o[l]);return r},e.mod=function(i,o){let r=new Uint8Array(i);for(;r.length-o.length>=0;){const s=r[0];for(let a=0;a<o.length;a++)r[a]^=t.mul(o[a],s);let l=0;for(;l<r.length&&r[l]===0;)l++;r=r.slice(l)}return r},e.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let r=0;r<i;r++)o=e.mul(o,new Uint8Array([1,t.exp(r)]));return o}})(At);const Tt=At;function dt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}dt.prototype.initialize=function(t){this.degree=t,this.genPoly=Tt.generateECPolynomial(this.degree)};dt.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const i=Tt.mod(n,this.genPoly),o=this.degree-i.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(i,o),r}return i};var Yt=dt,Bt={},P={},ut={};ut.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var L={};const Nt="[0-9]+",qt="[A-Z $%*+\\-./:]+";let V="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";V=V.replace(/u/g,"\\u");const Gt="(?:(?![A-Z0-9 $%*+\\-./:]|"+V+`)(?:.|[\r
]))+`;L.KANJI=new RegExp(V,"g");L.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");L.BYTE=new RegExp(Gt,"g");L.NUMERIC=new RegExp(Nt,"g");L.ALPHANUMERIC=new RegExp(qt,"g");const Zt=new RegExp("^"+V+"$"),Qt=new RegExp("^"+Nt+"$"),Xt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");L.testKanji=function(t){return Zt.test(t)};L.testNumeric=function(t){return Qt.test(t)};L.testAlphanumeric=function(t){return Xt.test(t)};(function(e){const t=ut,n=L;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return n.testNumeric(r)?e.NUMERIC:n.testAlphanumeric(r)?e.ALPHANUMERIC:n.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(r,s){if(e.isValid(r))return r;try{return i(r)}catch{return s}}})(P);(function(e){const t=T,n=Z,i=G,o=P,r=ut,s=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,l=t.getBCHDigit(s);function a(u,h,p){for(let y=1;y<=40;y++)if(h<=e.getCapacity(y,p,u))return y}function c(u,h){return o.getCharCountIndicator(u,h)+4}function d(u,h){let p=0;return u.forEach(function(y){p+=c(y.mode,h)+y.getBitsLength()}),p}function E(u,h){for(let p=1;p<=40;p++)if(d(u,p)<=e.getCapacity(p,h,o.MIXED))return p}e.from=function(h,p){return r.isValid(h)?parseInt(h,10):p},e.getCapacity=function(h,p,y){if(!r.isValid(h))throw new Error("Invalid QR Code version");typeof y=="undefined"&&(y=o.BYTE);const A=t.getSymbolTotalCodewords(h),f=n.getTotalCodewordsCount(h,p),v=(A-f)*8;if(y===o.MIXED)return v;const m=v-c(y,h);switch(y){case o.NUMERIC:return Math.floor(m/10*3);case o.ALPHANUMERIC:return Math.floor(m/11*2);case o.KANJI:return Math.floor(m/13);case o.BYTE:default:return Math.floor(m/8)}},e.getBestVersionForData=function(h,p){let y;const A=i.from(p,i.M);if(Array.isArray(h)){if(h.length>1)return E(h,A);if(h.length===0)return 1;y=h[0]}else y=h;return a(y.mode,y.getLength(),A)},e.getEncodedBits=function(h){if(!r.isValid(h)||h<7)throw new Error("Invalid QR Code version");let p=h<<12;for(;t.getBCHDigit(p)-l>=0;)p^=s<<t.getBCHDigit(p)-l;return h<<12|p}})(Bt);var It={};const it=T,Ft=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,Wt=1<<14|1<<12|1<<10|1<<4|1<<1,mt=it.getBCHDigit(Ft);It.getEncodedBits=function(t,n){const i=t.bit<<3|n;let o=i<<10;for(;it.getBCHDigit(o)-mt>=0;)o^=Ft<<it.getBCHDigit(o)-mt;return(i<<10|o)^Wt};var Lt={};const te=P;function U(e){this.mode=te.NUMERIC,this.data=e.toString()}U.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};U.prototype.getLength=function(){return this.data.length};U.prototype.getBitsLength=function(){return U.getBitsLength(this.data.length)};U.prototype.write=function(t){let n,i,o;for(n=0;n+3<=this.data.length;n+=3)i=this.data.substr(n,3),o=parseInt(i,10),t.put(o,10);const r=this.data.length-n;r>0&&(i=this.data.substr(n),o=parseInt(i,10),t.put(o,r*3+1))};var ee=U;const ne=P,tt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function O(e){this.mode=ne.ALPHANUMERIC,this.data=e}O.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};O.prototype.getLength=function(){return this.data.length};O.prototype.getBitsLength=function(){return O.getBitsLength(this.data.length)};O.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=tt.indexOf(this.data[n])*45;i+=tt.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(tt.indexOf(this.data[n]),6)};var oe=O,re=function(t){for(var n=[],i=t.length,o=0;o<i;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&i>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(r=(r-55296)*1024+s-56320+65536,o+=1)}if(r<128){n.push(r);continue}if(r<2048){n.push(r>>6|192),n.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){n.push(r>>12|224),n.push(r>>6&63|128),n.push(r&63|128);continue}if(r>=65536&&r<=1114111){n.push(r>>18|240),n.push(r>>12&63|128),n.push(r>>6&63|128),n.push(r&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const ie=re,se=P;function _(e){this.mode=se.BYTE,typeof e=="string"&&(e=ie(e)),this.data=new Uint8Array(e)}_.getBitsLength=function(t){return t*8};_.prototype.getLength=function(){return this.data.length};_.prototype.getBitsLength=function(){return _.getBitsLength(this.data.length)};_.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var ae=_;const le=P,ce=T;function z(e){this.mode=le.KANJI,this.data=e}z.getBitsLength=function(t){return t*13};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=ce.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var de=z,St={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,i,o){var r={},s={};s[i]=0;var l=t.PriorityQueue.make();l.push(i,0);for(var a,c,d,E,u,h,p,y,A;!l.empty();){a=l.pop(),c=a.value,E=a.cost,u=n[c]||{};for(d in u)u.hasOwnProperty(d)&&(h=u[d],p=E+h,y=s[d],A=typeof s[d]=="undefined",(A||y>p)&&(s[d]=p,l.push(d,p),r[d]=c))}if(typeof o!="undefined"&&typeof s[o]=="undefined"){var f=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(f)}return r},extract_shortest_path_from_predecessor_list:function(n,i){for(var o=[],r=i;r;)o.push(r),n[r],r=n[r];return o.reverse(),o},find_path:function(n,i,o){var r=t.single_source_shortest_paths(n,i,o);return t.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(n){var i=t.PriorityQueue,o={},r;n=n||{};for(r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=n.sorter||i.default_sorter,o},default_sorter:function(n,i){return n.cost-i.cost},push:function(n,i){var o={value:n,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(St);(function(e){const t=P,n=ee,i=oe,o=ae,r=de,s=L,l=T,a=St.exports;function c(f){return unescape(encodeURIComponent(f)).length}function d(f,v,m){const g=[];let w;for(;(w=f.exec(m))!==null;)g.push({data:w[0],index:w.index,mode:v,length:w[0].length});return g}function E(f){const v=d(s.NUMERIC,t.NUMERIC,f),m=d(s.ALPHANUMERIC,t.ALPHANUMERIC,f);let g,w;return l.isKanjiModeEnabled()?(g=d(s.BYTE,t.BYTE,f),w=d(s.KANJI,t.KANJI,f)):(g=d(s.BYTE_KANJI,t.BYTE,f),w=[]),v.concat(m,g,w).sort(function(b,B){return b.index-B.index}).map(function(b){return{data:b.data,mode:b.mode,length:b.length}})}function u(f,v){switch(v){case t.NUMERIC:return n.getBitsLength(f);case t.ALPHANUMERIC:return i.getBitsLength(f);case t.KANJI:return r.getBitsLength(f);case t.BYTE:return o.getBitsLength(f)}}function h(f){return f.reduce(function(v,m){const g=v.length-1>=0?v[v.length-1]:null;return g&&g.mode===m.mode?(v[v.length-1].data+=m.data,v):(v.push(m),v)},[])}function p(f){const v=[];for(let m=0;m<f.length;m++){const g=f[m];switch(g.mode){case t.NUMERIC:v.push([g,{data:g.data,mode:t.ALPHANUMERIC,length:g.length},{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.ALPHANUMERIC:v.push([g,{data:g.data,mode:t.BYTE,length:g.length}]);break;case t.KANJI:v.push([g,{data:g.data,mode:t.BYTE,length:c(g.data)}]);break;case t.BYTE:v.push([{data:g.data,mode:t.BYTE,length:c(g.data)}])}}return v}function y(f,v){const m={},g={start:{}};let w=["start"];for(let C=0;C<f.length;C++){const b=f[C],B=[];for(let M=0;M<b.length;M++){const N=b[M],k=""+C+M;B.push(k),m[k]={node:N,lastCount:0},g[k]={};for(let W=0;W<w.length;W++){const S=w[W];m[S]&&m[S].node.mode===N.mode?(g[S][k]=u(m[S].lastCount+N.length,N.mode)-u(m[S].lastCount,N.mode),m[S].lastCount+=N.length):(m[S]&&(m[S].lastCount=N.length),g[S][k]=u(N.length,N.mode)+4+t.getCharCountIndicator(N.mode,v))}}w=B}for(let C=0;C<w.length;C++)g[w[C]].end=0;return{map:g,table:m}}function A(f,v){let m;const g=t.getBestModeForData(f);if(m=t.from(v,g),m!==t.BYTE&&m.bit<g.bit)throw new Error('"'+f+'" cannot be encoded with mode '+t.toString(m)+`.
 Suggested mode is: `+t.toString(g));switch(m===t.KANJI&&!l.isKanjiModeEnabled()&&(m=t.BYTE),m){case t.NUMERIC:return new n(f);case t.ALPHANUMERIC:return new i(f);case t.KANJI:return new r(f);case t.BYTE:return new o(f)}}e.fromArray=function(v){return v.reduce(function(m,g){return typeof g=="string"?m.push(A(g,null)):g.data&&m.push(A(g.data,g.mode)),m},[])},e.fromString=function(v,m){const g=E(v,l.isKanjiModeEnabled()),w=p(g),C=y(w,m),b=a.find_path(C.map,"start","end"),B=[];for(let M=1;M<b.length-1;M++)B.push(C.table[b[M]].node);return e.fromArray(h(B))},e.rawSplit=function(v){return e.fromArray(E(v,l.isKanjiModeEnabled()))}})(Lt);const X=T,et=G,ue=Jt,he=Kt,fe=wt,ge=Ct,st=bt,at=Z,me=Yt,q=Bt,pe=It,ye=P,nt=Lt;function Ee(e,t){const n=e.size,i=ge.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],s=i[o][1];for(let l=-1;l<=7;l++)if(!(r+l<=-1||n<=r+l))for(let a=-1;a<=7;a++)s+a<=-1||n<=s+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?e.set(r+l,s+a,!0,!0):e.set(r+l,s+a,!1,!0))}}function ve(e){const t=e.size;for(let n=8;n<t-8;n++){const i=n%2===0;e.set(n,6,i,!0),e.set(6,n,i,!0)}}function we(e,t){const n=fe.getPositions(t);for(let i=0;i<n.length;i++){const o=n[i][0],r=n[i][1];for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)s===-2||s===2||l===-2||l===2||s===0&&l===0?e.set(o+s,r+l,!0,!0):e.set(o+s,r+l,!1,!0)}}function Ce(e,t){const n=e.size,i=q.getEncodedBits(t);let o,r,s;for(let l=0;l<18;l++)o=Math.floor(l/3),r=l%3+n-8-3,s=(i>>l&1)===1,e.set(o,r,s,!0),e.set(r,o,s,!0)}function ot(e,t,n){const i=e.size,o=pe.getEncodedBits(t,n);let r,s;for(r=0;r<15;r++)s=(o>>r&1)===1,r<6?e.set(r,8,s,!0):r<8?e.set(r+1,8,s,!0):e.set(i-15+r,8,s,!0),r<8?e.set(8,i-r-1,s,!0):r<9?e.set(8,15-r-1+1,s,!0):e.set(8,15-r-1,s,!0);e.set(i-8,8,1,!0)}function be(e,t){const n=e.size;let i=-1,o=n-1,r=7,s=0;for(let l=n-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,l-a)){let c=!1;s<t.length&&(c=(t[s]>>>r&1)===1),e.set(o,l-a,c),r--,r===-1&&(s++,r=7)}if(o+=i,o<0||n<=o){o-=i,i=-i;break}}}function Ae(e,t,n){const i=new ue;n.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),ye.getCharCountIndicator(a.mode,e)),a.write(i)});const o=X.getSymbolTotalCodewords(e),r=at.getTotalCodewordsCount(e,t),s=(o-r)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const l=(s-i.getLengthInBits())/8;for(let a=0;a<l;a++)i.put(a%2?17:236,8);return Te(i,e,t)}function Te(e,t,n){const i=X.getSymbolTotalCodewords(t),o=at.getTotalCodewordsCount(t,n),r=i-o,s=at.getBlocksCount(t,n),l=i%s,a=s-l,c=Math.floor(i/s),d=Math.floor(r/s),E=d+1,u=c-d,h=new me(u);let p=0;const y=new Array(s),A=new Array(s);let f=0;const v=new Uint8Array(e.buffer);for(let b=0;b<s;b++){const B=b<a?d:E;y[b]=v.slice(p,p+B),A[b]=h.encode(y[b]),p+=B,f=Math.max(f,B)}const m=new Uint8Array(i);let g=0,w,C;for(w=0;w<f;w++)for(C=0;C<s;C++)w<y[C].length&&(m[g++]=y[C][w]);for(w=0;w<u;w++)for(C=0;C<s;C++)m[g++]=A[C][w];return m}function Be(e,t,n,i){let o;if(Array.isArray(e))o=nt.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const d=nt.rawSplit(e);c=q.getBestVersionForData(d,n)}o=nt.fromString(e,c||40)}else throw new Error("Invalid data");const r=q.getBestVersionForData(o,n);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=Ae(t,n,o),l=X.getSymbolSize(t),a=new he(l);return Ee(a,t),ve(a),we(a,t),ot(a,n,0),t>=7&&Ce(a,t),be(a,s),isNaN(i)&&(i=st.getBestMask(a,ot.bind(null,a,n))),st.applyMask(i,a),ot(a,n,i),{modules:a,version:t,errorCorrectionLevel:n,maskPattern:i,segments:o}}Et.create=function(t,n){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=et.M,o,r;return typeof n!="undefined"&&(i=et.from(n.errorCorrectionLevel,et.M),o=q.from(n.version),r=st.from(n.maskPattern),n.toSJISFunc&&X.setToSJISFunction(n.toSJISFunc)),Be(t,o,i,r)};var Mt={},ht={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:r,scale:r?4:s,margin:o,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},e.getImageWidth=function(i,o){const r=e.getScale(i,o);return Math.floor((i+o.margin*2)*r)},e.qrToImageData=function(i,o,r){const s=o.modules.size,l=o.modules.data,a=e.getScale(s,r),c=Math.floor((s+r.margin*2)*a),d=r.margin*a,E=[r.color.light,r.color.dark];for(let u=0;u<c;u++)for(let h=0;h<c;h++){let p=(u*c+h)*4,y=r.color.light;if(u>=d&&h>=d&&u<c-d&&h<c-d){const A=Math.floor((u-d)/a),f=Math.floor((h-d)/a);y=E[l[A*s+f]?1:0]}i[p++]=y.r,i[p++]=y.g,i[p++]=y.b,i[p]=y.a}}})(ht);(function(e){const t=ht;function n(o,r,s){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(r,s,l){let a=l,c=s;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(c=i()),a=t.getOptions(a);const d=t.getImageWidth(r.modules.size,a),E=c.getContext("2d"),u=E.createImageData(d,d);return t.qrToImageData(u.data,r,a),n(E,c,d),E.putImageData(u,0,0),c},e.renderToDataURL=function(r,s,l){let a=l;typeof a=="undefined"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const c=e.render(r,s,a),d=a.type||"image/png",E=a.rendererOpts||{};return c.toDataURL(d,E.quality)}})(Mt);var $t={};const Ne=ht;function pt(e,t){const n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function rt(e,t,n){let i=e+t;return typeof n!="undefined"&&(i+=" "+n),i}function Ie(e,t,n){let i="",o=0,r=!1,s=0;for(let l=0;l<e.length;l++){const a=Math.floor(l%t),c=Math.floor(l/t);!a&&!r&&(r=!0),e[l]?(s++,l>0&&a>0&&e[l-1]||(i+=r?rt("M",a+n,.5+c+n):rt("m",o,0),o=0,r=!1),a+1<t&&e[l+1]||(i+=rt("h",s),s=0)):o++}return i}$t.render=function(t,n,i){const o=Ne.getOptions(n),r=t.modules.size,s=t.modules.data,l=r+o.margin*2,a=o.color.light.a?"<path "+pt(o.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",c="<path "+pt(o.color.dark,"stroke")+' d="'+Ie(s,r,o.margin)+'"/>',d='viewBox="0 0 '+l+" "+l+'"',E=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",u='<svg xmlns="http://www.w3.org/2000/svg" '+E+d+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof i=="function"&&i(null,u),u};const Fe=Ht,lt=Et,Pt=Mt,Le=$t;function ft(e,t,n,i,o){const r=[].slice.call(arguments,1),s=r.length,l=typeof r[s-1]=="function";if(!l&&!Fe())throw new Error("Callback required as last argument");if(l){if(s<2)throw new Error("Too few arguments provided");s===2?(o=n,n=t,t=i=void 0):s===3&&(t.getContext&&typeof o=="undefined"?(o=i,i=void 0):(o=i,i=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=i=void 0):s===2&&!t.getContext&&(i=n,n=t,t=void 0),new Promise(function(a,c){try{const d=lt.create(n,i);a(e(d,t,i))}catch(d){c(d)}})}try{const a=lt.create(n,i);o(null,e(a,t,i))}catch(a){o(a)}}I.create=lt.create;I.toCanvas=ft.bind(null,Pt.render);I.toDataURL=ft.bind(null,Pt.renderToDataURL);I.toString=ft.bind(null,function(e,t,n){return Le.render(e,n)});var F={};Object.defineProperty(F,"__esModule",{value:!0});var R=F.Printd=F.createIFrame=F.createLinkStyle=F.createStyle=void 0,Se=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,Me=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,yt=function(e){return Se.test(e)||Me.test(e)};function Rt(e,t){var n=e.createElement("style");return n.appendChild(e.createTextNode(t)),n}F.createStyle=Rt;function Dt(e,t){var n=e.createElement("link");return n.type="text/css",n.rel="stylesheet",n.href=t,n}F.createLinkStyle=Dt;function xt(e){var t=window.document.createElement("iframe");return t.setAttribute("src","about:blank"),t.setAttribute("style","visibility:hidden;width:0;height:0;position:absolute;z-index:-9999;bottom:0;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("wmode","opaque"),e.appendChild(t),t}F.createIFrame=xt;var $e={parent:window.document.body,headElements:[],bodyElements:[]},Ut=function(){function e(t){this.isLoading=!1,this.hasEvents=!1,this.opts=[$e,t||{}].reduce(function(n,i){return Object.keys(i).forEach(function(o){return n[o]=i[o]}),n},{}),this.iframe=xt(this.opts.parent)}return e.prototype.getIFrame=function(){return this.iframe},e.prototype.print=function(t,n,i,o){if(!this.isLoading){var r=this.iframe,s=r.contentDocument,l=r.contentWindow;if(!(!s||!l)&&(this.iframe.src="about:blank",this.elCopy=t.cloneNode(!0),!!this.elCopy)){this.isLoading=!0,this.callback=o;var a=l.document;a.open(),a.write('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>'),this.addEvents();var c=this.opts,d=c.headElements,E=c.bodyElements;Array.isArray(d)&&d.forEach(function(u){return a.head.appendChild(u)}),Array.isArray(E)&&E.forEach(function(u){return a.body.appendChild(u)}),Array.isArray(n)&&n.forEach(function(u){u&&a.head.appendChild(yt(u)?Dt(a,u):Rt(a,u))}),a.body.appendChild(this.elCopy),Array.isArray(i)&&i.forEach(function(u){if(u){var h=a.createElement("script");yt(u)?h.src=u:h.innerText=u,a.body.appendChild(h)}}),a.close()}}},e.prototype.printURL=function(t,n){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=n,this.iframe.src=t)},e.prototype.onBeforePrint=function(t){this.onbeforeprint=t},e.prototype.onAfterPrint=function(t){this.onafterprint=t},e.prototype.launchPrint=function(t){this.isLoading||t.print()},e.prototype.addEvents=function(){var t=this;if(!this.hasEvents){this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1);var n=this.iframe.contentWindow;n&&(this.onbeforeprint&&n.addEventListener("beforeprint",this.onbeforeprint),this.onafterprint&&n.addEventListener("afterprint",this.onafterprint))}},e.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var n=this.iframe,i=n.contentDocument,o=n.contentWindow;if(!i||!o)return;typeof this.callback=="function"?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(o)}}):this.launchPrint(o)}},e}();R=F.Printd=Ut;F.default=Ut;class Pe{constructor(){this.units=["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"],this.tenToSixteen=["diez","once","doce","trece","catorce","quince","diecis\xE9is"],this.tens=["treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"]}convertirNroMesAtexto(t){switch(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),t){case"1":return"Enero";case"2":return"Febrero";case"3":return"Marzo";case"4":return"Abril";case"5":return"Mayo";case"6":return"Junio";case"7":return"Julio";case"8":return"Agosto";case"9":return"Septiembre";case"10":return"Octubre";case"11":return"Noviembre";case"12":return"Diciembre";default:throw"Numero de mes inv\xE1lido"}}convertToText(t){if(typeof t=="number"&&(t=String(t)),t=this.deleteZerosLeft(t),!this.validateNumber(t))throw"N\xFAmero inv\xE1lido, no se puede convertir!";return this.getName(t)}deleteZerosLeft(t){let n=0,i=!0;for(n=0;n<t.length;n++)if(t.charAt(n)!=0){i=!1;break}return i?"0":t.substr(n)}validateNumber(t){return!(isNaN(t)||t===""||t.indexOf(".")>=0||t.indexOf("-")>=0)}getName(t){return t=this.deleteZerosLeft(t),t.length===1?this.getUnits(t):t.length===2?this.getTens(t):t.length===3?this.getHundreds(t):t.length<7?this.getThousands(t):t.length<13?this.getPeriod(t,6,"mill\xF3n"):t.length<19?this.getPeriod(t,12,"bill\xF3n"):"N\xFAmero demasiado grande."}getUnits(t){let n=parseInt(t);return this.units[n]}getTens(t){let n=t.charAt(1);if(t<17)return this.tenToSixteen[t-10];if(t<20)return"dieci"+this.getUnits(n);switch(t){case"20":return"veinte";case"22":return"veintid\xF3s";case"23":return"veintitr\xE9s";case"26":return"veintis\xE9is"}if(t<30)return"veinti"+this.getUnits(n);let i=this.tens[t.charAt(0)-3];return n>0&&(i+=" y "+this.getUnits(n)),i}getHundreds(t){let n="",i=t.charAt(0),o=t.substr(1);if(t==100)return"cien";switch(i){case"1":n="ciento";break;case"5":n="quinientos";break;case"7":n="setecientos";break;case"9":n="novecientos"}return n===""&&(n=this.getUnits(i)+"cientos"),o>0&&(n+=" "+this.getName(o)),n}getThousands(t){let n="mil",i=t.length-3,o=t.substr(0,i),r=t.substr(i);return o>1&&(n=this.getName(o).replace("uno","un")+" mil"),r>0&&(n+=" "+this.getName(r)),n}getPeriod(t,n,i){let o="un "+i,r=t.length-n,s=t.substr(0,r),l=t.substr(r);return s>1&&(o=this.getName(s).replace("uno","un")+" "+i.replace("\xF3","o")+"es"),l>0&&(o+=" "+this.getName(l)),o}}var x={conversorNumerosALetras:Pe};class xe{static factura(t){return new Promise((n,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.montoTotal)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;I.toDataURL(a.url2+"consulta/QR?nit="+a.nit+"&cuf="+t.cuf+"&numero="+t.numeroFactura+"&t=2",l).then(c=>{let d=`${this.head()}
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
</html>`,document.getElementById("myElement").innerHTML=d,new R().print(document.getElementById("myElement")),n(c)}).catch(c=>{i(c)})})}static nota(t){return console.log("factura",t),new Promise((n,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;I.toDataURL(`Fecha: ${t.fecha_emision} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(c=>{let d=`${this.head()}
  <div style='padding-left: 0.5cm;padding-right: 0.5cm'>
  <img src="logo.png" alt="logo" style="width: 100px; height: 50px; display: block; margin-left: auto; margin-right: auto;">
      <div class='titulo'>${t.tipo_venta==="EGRESO"?"NOTA DE EGRESO":"NOTA DE VENTA"}</div>
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
<tr><td class='titder'>FECHA DE EMISI\xD3N:</td><td class='contenido'>${t.fecha_emision}</td></tr>
</table><hr><div class='titulo'>DETALLE</div>`;t.details.forEach(u=>{d+=`<div style='font-size: 12px'><b>${u.product_id} ${u.producto} </b></div>`,d+=`<div>${u.cantidad} ${parseFloat(u.precio).toFixed(2)} 0.00
                    <span style='float:right'>${parseFloat(u.total).toFixed(2)}</span></div>`}),d+=`<hr>
<div>${t.comentario===""||t.comentario===null?"":"Comentario: "+t.comentario}</div>
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
</html>`,document.getElementById("myElement").innerHTML=d,new R().print(document.getElementById("myElement")),n(c)}).catch(c=>{i(c)})})}static notaCompra(t){return console.log("factura",t),new Promise((n,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;I.toDataURL(`Fecha: ${t.fecha_emision} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(async c=>{let d=`${this.head()}
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
</table><hr><div class='titulo'>DETALLE</div>`;t.buy_details.forEach(u=>{d+=`<div style='font-size: 12px'><b>${u.product_id} ${u.nombre} </b></div>`,d+=`<div>${u.cantidad} ${parseFloat(u.precio).toFixed(2)} 0.00
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
</html>`,document.getElementById("myElement").innerHTML=d,new R().print(document.getElementById("myElement")),n(c)}).catch(c=>{i(c)})})}static reportTotal(t,n){const i=t.filter(s=>s.tipoVenta==="Ingreso").reduce((s,l)=>s+l.montoTotal,0),o=t.filter(s=>s.tipoVenta==="Egreso").reduce((s,l)=>s+l.montoTotal,0),r=i-o;return console.log("montoTotal",r),new Promise((s,l)=>{const a=x.conversorNumerosALetras,c=new a,d=Math.abs(r),E=c.convertToText(parseInt(d)),u={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},h=D().env;I.toDataURL(` Monto: ${parseFloat(r).toFixed(2)}`,u).then(p=>{let y=`${this.head()}
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
</table><hr><div class='titulo'>DETALLE</div>`;t.forEach(f=>{y+=`<div style='font-size: 12px'><b> ${f.user.name} </b></div>`,y+=`<div> ${parseFloat(f.montoTotal).toFixed(2)} ${f.tipoVenta}
          <span style='float:right'> ${f.tipoVenta==="Egreso"?"-":""} ${parseFloat(f.montoTotal).toFixed(2)}</span></div>`}),y+=`<hr>
      <table style='font-size: 8px;'>
      <tr><td class='titder' style='width: 60%'>SUBTOTAL Bs</td><td class='conte2'>${parseFloat(r).toFixed(2)}</td></tr>
      </table>
      <br>
      <div>Son ${E} ${((parseFloat(r)-Math.floor(parseFloat(r)))*100).toFixed(2)} /100 Bolivianos</div><hr>
      <div style='display: flex;justify-content: center;'>
        <img  src="${p}" style="width: 75px; height: 75px; display: block; margin-left: auto; margin-right: auto;">
      </div></div>
      </div>
</body>
</html>`,document.getElementById("myElement").innerHTML=y,new R().print(document.getElementById("myElement")),s(p)}).catch(p=>{l(p)})})}static reciboCompra(t){return new Promise((n,i)=>{const o=x.conversorNumerosALetras,s=new o().convertToText(parseInt(t.total)),l={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},a=D().env;I.toDataURL(`Fecha: ${t.date} Monto: ${parseFloat(t.total).toFixed(2)}`,l).then(c=>{let d=`${this.head()}
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
    </html>`,document.getElementById("myElement").innerHTML=d,new R().print(document.getElementById("myElement")),n(c)}).catch(c=>{i(c)})})}static reciboTranferencia(t,n,i,o){return console.log("producto",t,"de",n,"ha",i,"cantidad",o),new Promise((r,s)=>{const l=x.conversorNumerosALetras,c=new l().convertToText(parseInt(o)),d={errorCorrectionLevel:"M",type:"png",quality:.95,width:100,margin:1,color:{dark:"#000000",light:"#FFF"}},E=D().env;I.toDataURL(`de: ${n} A: ${i}`,d).then(u=>{let h=`${this.head()}
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
    </table><hr><div class='titulo'>DETALLE</div>`;h+=`<div style='font-size: 12px'><b>Producto: ${t} de Sucursal${n} a ${i} </b></div>`,h+=`<hr>
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
    </html>`,document.getElementById("myElement").innerHTML=h,new R().print(document.getElementById("myElement")),r(u)}).catch(u=>{s(u)})})}static head(){return`<html>
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
<div style="width: 300px;">`}}export{xe as I,De as Q};
