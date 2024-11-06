import{Q as C,a as _,b as I}from"./QItem.1d95bbc1.js";import{_ as y,F as Q,G as i,H as S,I as n,J as s,aq as u,M as k,O as B,K as e,ar as p,Q as V,as as m,L as o,at as d,bc as g,av as x}from"./index.bc80659e.js";import{Q as b}from"./QMarkupTable.67121f7f.js";import{Q as E}from"./QPage.830bfd7a.js";import{h as f}from"./moment.40bc58bf.js";const F={data(){return{fechaInicioSemana:f().startOf("isoWeek").format("YYYY-MM-DD"),fechaFinSemana:f().endOf("isoWeek").format("YYYY-MM-DD"),options:{chart:{type:"bar",distributed:!0},colors:["#21BA45","#C10015","#31CCEC"],plotOptions:{bar:{distributed:!0,dataLabels:{position:"top"}}},xaxis:{categories:["Ingresos","Egresos","Ganancia"],labels:{style:{colors:["#21BA45","#C10015","#31CCEC"],fontSize:"12px"}}}},series:[{name:"series-1",data:[0,0,0]}],options2:{colors:["#21BA45","#C10015","#31CCEC"],chart:{type:"donut"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},series2:[0,0,0],ingresos:0,egresos:0,ganancia:0,resIngresos:[],resEgresos:[]}},mounted(){this.reporteVentas()},methods:{reporteVentas(){this.$axios.post("reportProductos",{fechaInicioSemana:this.fechaInicioSemana,fechaFinSemana:this.fechaFinSemana}).then(l=>{this.ingresos=l.data.ingresos,this.egresos=l.data.egresos,this.ganancia=l.data.ganancia,this.resIngresos=l.data.resIngresos,this.resEgresos=l.data.resEgresos,this.series[0].data=[l.data.ingresos,l.data.egresos,l.data.ganancia],this.series2=[l.data.ingresos,l.data.egresos,l.data.ganancia]})}}},T={class:"row"},Y={class:"col-12 col-md-2"},q={class:"col-12 col-md-2"},M={class:"col-12 col-md-2 flex flex-center"},w={class:"row"},D={class:"col-12 col-md-4 q-pa-md"},G=e("label",{class:"text-bold"},"Total Ingresos",-1),L={class:"text-right"},O=e("label",{class:"text-bold"},"Total Egresos",-1),A={class:"text-right"},N=e("label",{class:"text-bold"},"Total Ganancia",-1),P={class:"text-right text-bold text-red"},R=e("label",{class:"text-bold"},"Total Ganancia",-1),U={class:"text-right text-blue text-bold"},W={class:"col-12 col-md-4"},z={class:"col-12 col-md-4"},H={class:"col-12 col-md-6 q-pa-xs"},J=e("div",{class:"text-bold text-center text-green"},"Ingresos",-1),K=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Cliente"),e("th",null,"Fecha"),e("th",null,"Total")])],-1),j={class:"text-right text-bold"},X=e("td",{colspan:"3",class:"text-right text-bold"},"Total",-1),Z={class:"text-right text-bold"},$={class:"col-12 col-md-6 q-pa-xs"},ee=e("div",{class:"text-bold text-center text-red"},"Egresos",-1),te=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Cliente"),e("th",null,"Fecha"),e("th",null,"Total")])],-1),se={class:"text-right text-bold"},oe=e("td",{colspan:"3",class:"text-right text-bold"},"Total",-1),ae={class:"text-right text-bold"};function le(l,r,ne,ie,t,v){const h=Q("apexchart");return i(),S(E,{class:"q-pa-xs bg-grey-3"},{default:n(()=>[s(m,null,{default:n(()=>[s(u,{class:"q-pa-md"},{default:n(()=>[s(C,{clickable:""},{default:n(()=>[s(_,null,{default:n(()=>[s(I,{class:"text-subtitle2"},{default:n(()=>[k("Reporte de ventas")]),_:1})]),_:1}),s(_,{side:""},{default:n(()=>[s(B,{name:"insert_chart"})]),_:1})]),_:1}),e("div",T,[e("div",Y,[s(p,{modelValue:t.fechaInicioSemana,"onUpdate:modelValue":r[0]||(r[0]=a=>t.fechaInicioSemana=a),label:"Fecha inicio semana",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),e("div",q,[s(p,{modelValue:t.fechaFinSemana,"onUpdate:modelValue":r[1]||(r[1]=a=>t.fechaFinSemana=a),label:"Fecha fin semana",type:"date",outlined:"",dense:""},null,8,["modelValue"])]),e("div",M,[s(V,{onClick:v.reporteVentas,label:"Generar",color:"primary","no-caps":"","icon-right":"send"},null,8,["onClick"])])]),e("div",w,[e("div",D,[s(m,null,{default:n(()=>[s(u,{class:"q-pa-xs"},{default:n(()=>[G,e("div",L,o(t.ingresos)+" Bs.",1),O,e("div",A,o(t.egresos)+" Bs.",1),N,e("div",P,o(t.ingresos-t.egresos)+" Bs.",1),R,e("div",U,o(t.ganancia)+" Bs.",1)]),_:1})]),_:1})]),e("div",W,[s(h,{type:"bar",options:t.options,series:t.series},null,8,["options","series"])]),e("div",z,[s(h,{width:"400px",type:"donut",options:t.options2,series:t.series2},null,8,["options","series"])]),e("div",H,[J,s(b,{flat:"",bordered:"",dense:""},{default:n(()=>[K,e("tbody",null,[(i(!0),d(x,null,g(t.resIngresos,(a,c)=>(i(),d("tr",{key:a.id},[e("td",null,o(++c),1),e("td",null,o(a.name),1),e("td",null,o(a.fecha_emision),1),e("td",j,o(a.total),1)]))),128)),e("tr",null,[X,e("td",Z,o(t.ingresos),1)])])]),_:1})]),e("div",$,[ee,s(b,{flat:"",bordered:"",dense:""},{default:n(()=>[te,e("tbody",null,[(i(!0),d(x,null,g(t.resEgresos,(a,c)=>(i(),d("tr",{key:a.id},[e("td",null,o(++c),1),e("td",null,o(a.client.nombre),1),e("td",null,o(a.fecha_emision),1),e("td",se,o(a.total),1)]))),128)),e("tr",null,[oe,e("td",ae,o(t.egresos),1)])])]),_:1})])])]),_:1})]),_:1})]),_:1})}var ue=y(F,[["render",le]]);export{ue as default};