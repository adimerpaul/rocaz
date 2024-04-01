import{c as S,a as G,h as k,d as Q,_ as y,D as m,E as V,F as s,G as o,z as B,Q as d,aj as v,H as n,ak as u,al as D,C as b,am as _,an as q,ao as I,K as N,I as O,ap as U,J as p,aq as A}from"./index.1ebb479c.js";import{d as E}from"./format.58e06356.js";import{C as F,Q as T,a as c}from"./ClosePopup.b2de1592.js";import{Q as Y,a as x,b as R}from"./QSpace.0b360a1d.js";import{Q as M}from"./QTr.384df8f7.js";import{Q as z,a as P}from"./QForm.4c43927c.js";import{h as w}from"./moment.40bc58bf.js";import{c as L}from"./CardComponent.e80a67ce.js";import"./QList.82c52a2b.js";var j=S({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(t,{slots:e}){const h=G(()=>{const g=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(a=>t[a]===!0).map(a=>`q-btn-group--${a}`).join(" ");return`q-btn-group row no-wrap${g.length!==0?" "+g:""}`+(t.spread===!0?" q-btn-group--spread":" inline")});return()=>k("div",{class:h.value},Q(e.default))}});const H={data(){return{provider:[],gasto:{monto:"",concepto:"",metodo:"EFECTIVO",client_id:""},loading:!1}},mounted(){this.proveedoresGet()},methods:{proveedoresGet(){this.$axios.get("proveedores").then(t=>{this.provider=t.data})},saveSale(){this.loading=!0,this.$axios.post("registrarGasto",this.gasto).then(t=>{this.$emit("gastoCreated",t.data),this.$alert.success("Gasto registrado")}).catch(t=>{this.$alert.error(t.response.data.message)}).finally(()=>{this.loading=!1})},proveedorCreateSimple(){this.$q.dialog({title:"Registrar proveedor",message:"Ingrese el nombre del proveedor",prompt:{model:"",type:"text"},cancel:!0,persistent:!0}).onOk(t=>{this.$axios.post("proveedorCreateSimple",{nombre:t}).then(e=>{this.provider.push(e.data),this.gasto.client_id=e.data.id}).catch(e=>{this.$alert.error(e.response.data.message)})})}}},W=n("div",{class:"text-subtitle2 text-bold text-grey"}," Registrar gasto ",-1),$={class:"row"},J={class:"col-12"},K={class:"col-12"},X={class:"col-12"},Z={class:"col-12"},ee={class:"col-12"};function oe(t,e,h,g,a,i){return m(),V(D,{style:{width:"500px","max-width":"80vw"}},{default:s(()=>[o(v,{class:"row items-center q-pb-none"},{default:s(()=>[W,o(Y),B(o(d,{icon:"o_highlight_off",flat:"",round:"",dense:""},null,512),[[F]])]),_:1}),o(v,null,{default:s(()=>[o(z,{onSubmit:i.saveSale},{default:s(()=>[n("div",$,[n("div",J,[o(u,{outlined:"",dense:"",modelValue:a.gasto.monto,"onUpdate:modelValue":e[0]||(e[0]=r=>a.gasto.monto=r),label:"Monto *",type:"number",step:"0.1",rules:[r=>!!r||"Campo requerido"]},null,8,["modelValue","rules"])]),n("div",K,[o(u,{outlined:"",dense:"",hint:"",modelValue:a.gasto.concepto,"onUpdate:modelValue":e[1]||(e[1]=r=>a.gasto.concepto=r),label:"Descripci\xF3n"},null,8,["modelValue"])]),n("div",X,[o(x,{outlined:"",dense:"",hint:"",modelValue:a.gasto.metodo,"onUpdate:modelValue":e[2]||(e[2]=r=>a.gasto.metodo=r),options:t.$metodos,label:"M\xE9todo de pago"},null,8,["modelValue","options"])]),n("div",Z,[o(x,{outlined:"",dense:"",hint:"",modelValue:a.gasto.client_id,"onUpdate:modelValue":e[3]||(e[3]=r=>a.gasto.client_id=r),options:a.provider,label:"Proveedor","emit-value":"","map-options":"","option-value":"id","option-label":"nombre","use-input":""},{after:s(()=>[o(d,{flat:"",dense:"",icon:"add_circle_outline",onClick:i.proveedorCreateSimple,color:"green"},null,8,["onClick"])]),_:1},8,["modelValue","options"])]),n("div",ee,[o(d,{type:"submit",label:"Guardar",color:"red-7",class:"full-width","no-caps":"",rounded:"",loading:a.loading},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var te=y(H,[["render",oe]]);const le={name:"IndexPage",components:{DialogGasto:te,CardComponent:L},data(){return{gastoDialog:!1,fechaInicioSemana:w().startOf("isoWeek").format("YYYY-MM-DD"),fechaFinSemana:w().endOf("isoWeek").format("YYYY-MM-DD"),concepto:"",columns:[{name:"opcion",label:"Opcion",align:"left",field:"opcion"},{name:"concepto",label:"Concepto",align:"left",field:"concepto",sortable:!0},{name:"montoTotal",label:"Monto total",align:"left",field:"montoTotal",sortable:!0},{name:"proveedorcliente",label:"Proveedor / cliente",align:"left",field:"proveedor / cliente",sortable:!0},{name:"fechayhora",label:"Fecha y hora",align:"left",field:"fechayhora",sortable:!0},{name:"egresoingreso",label:"Egreso / ingreso",align:"left",field:"egreso / ingreso",sortable:!0},{name:"user",label:"Usuario",align:"left",field:t=>t.user.name,sortable:!0}],sales:[],loading:!1,filter:""}},mounted(){this.salesGet()},methods:{saleAnular(t){this.$q.dialog({title:"Anular venta",message:"\xBFEst\xE1 seguro de anular la venta?",persistent:!0,ok:{label:"Si",color:"negative",push:!0},cancel:{label:"No",color:"primary",push:!0}}).onOk(()=>{this.$axios.post("saleAnular",{id:t}).then(e=>{this.salesGet()}).catch(e=>{console.log(e)})})},gastoCreated(t){this.sales.unshift(t),this.gastoDialog=!1},salesGet(){this.loading=!0,this.$axios.get("sales",{params:{fechaInicioSemana:this.fechaInicioSemana,fechaFinSemana:this.fechaFinSemana,concepto:this.concepto}}).then(t=>{this.sales=t.data,console.log(t.data)}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})}},computed:{balance(){return this.sales.reduce((t,e)=>e.estado!=="ANULADO"?e.tipo_venta==="INGRESO"?t+e.total:t-e.total:t,0)},ingreso(){return this.sales.reduce((t,e)=>e.tipo_venta==="INGRESO"&&e.estado!=="ANULADO"?t+e.total:t,0)},gasto(){return this.sales.reduce((t,e)=>e.tipo_venta==="EGRESO"&&e.estado!=="ANULADO"?t+e.total:t,0)}}},ae={class:"row"},se={class:"col-6 col-md-2 q-pa-xs"},ne={class:"col-6 col-md-2 q-pa-xs"},re={class:"col-12 col-md-3 q-pa-xs"},ie={class:"col-12 col-md-5 text-right"},de={class:"col-12 col-md-4 q-pa-xs"},ce={class:"col-12 col-md-4 q-pa-xs"},ue={class:"col-12 col-md-4 q-pa-xs"},pe={class:"col-12"},me={key:1},ge={style:{"padding-left":"15px"}},he={class:"text-grey q-ml-xs",style:{width:"400px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},fe={class:"text-grey"},_e={key:0,class:"text-grey"};function ve(t,e,h,g,a,i){const r=b("CardComponent"),C=b("DialogGasto");return m(),_(I,null,[o(P,{class:"q-pa-xs bg-grey-3"},{default:s(()=>[n("div",ae,[n("div",se,[o(u,{modelValue:a.fechaInicioSemana,"onUpdate:modelValue":[e[0]||(e[0]=l=>a.fechaInicioSemana=l),i.salesGet],label:"Fecha inicio",dense:"",outlined:"",type:"date",class:"bg-white"},null,8,["modelValue","onUpdate:modelValue"])]),n("div",ne,[o(u,{modelValue:a.fechaFinSemana,"onUpdate:modelValue":[e[1]||(e[1]=l=>a.fechaFinSemana=l),i.salesGet],label:"Fecha fin",dense:"",outlined:"",type:"date",class:"bg-white"},null,8,["modelValue","onUpdate:modelValue"])]),n("div",re,[o(u,{modelValue:a.concepto,"onUpdate:modelValue":[e[2]||(e[2]=l=>a.concepto=l),i.salesGet],label:"Buscar por concepto",dense:"",outlined:"",class:"bg-white",debounce:"300",clearable:"",placeholder:"Buscar por concepto"},{prepend:s(()=>[o(N,{name:"search"})]),_:1},8,["modelValue","onUpdate:modelValue"])]),n("div",ie,[o(d,{label:"Nuevo Venta",color:"green",icon:"add_circle_outline","no-caps":"",rounded:"",to:"/sale"}),o(d,{label:"Nuevo Gasto",color:"red",icon:"add_circle_outline","no-caps":"",rounded:"",onClick:e[3]||(e[3]=l=>a.gastoDialog=!0)})]),n("div",de,[o(r,{monto:i.balance,color:"grey",title:"Balance",icono:"o_trending_up"},null,8,["monto"])]),n("div",ce,[o(r,{monto:i.ingreso,color:"green",title:"Ventas",icono:"o_trending_up"},null,8,["monto"])]),n("div",ue,[o(r,{monto:i.gasto,color:"red",title:"Gastos",icono:"o_trending_down"},null,8,["monto"])]),n("div",pe,[o(T,{columns:a.columns,rows:a.sales,dense:"","rows-per-page-options":[0],filter:a.filter,loading:a.loading,"wrap-cells":"","no-data-label":"No hay ventas","no-results-label":"No hay ventas"},{"top-right":s(()=>[o(u,{outlined:"",modelValue:a.filter,"onUpdate:modelValue":e[4]||(e[4]=l=>a.filter=l),debounce:"300",placeholder:"Buscar",dense:""},{append:s(()=>[o(d,{flat:"",round:"",dense:"",icon:"search"})]),_:1},8,["modelValue"])]),body:s(l=>[o(M,{props:l},{default:s(()=>[o(c,{key:"opcion",props:l,"auto-width":""},{default:s(()=>[l.row.estado=="ACTIVO"?(m(),V(j,{key:0},{default:s(()=>[o(d,{dense:"",label:"Anular",color:"red-4",size:"10px","no-caps":"","no-wrap":"",icon:"o_highlight_off",onClick:f=>i.saleAnular(l.row.id)},{default:s(()=>[o(E,null,{default:s(()=>[O("Anular venta")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)):(m(),_("div",me,[o(d,{dense:"",label:"Anulado",color:"grey-4",size:"10px","no-caps":"","no-wrap":"",icon:"o_highlight_off"})]))]),_:2},1032,["props"]),o(c,{key:"concepto",props:l,class:""},{default:s(()=>[n("div",null,[o(d,{icon:"o_local_atm",size:"15px",color:`${l.row.tipo_venta=="INGRESO"?"green":"red"}-7`,class:U(`bg-${l.row.tipo_venta=="INGRESO"?"green":"red"}-2`),dense:"",flat:"",style:{padding:"0px",margin:"0px","border-radius":"0px",position:"absolute",top:"5px",left:"0px"}},null,8,["color","class"]),n("div",ge,[n("div",he,p(l.row.concepto),1)])])]),_:2},1032,["props"]),o(c,{key:"montoTotal",props:l},{default:s(()=>[n("span",fe,p(l.row.total)+" Bs",1)]),_:2},1032,["props"]),o(c,{key:"proveedorcliente",props:l},{default:s(()=>[l.row.client?(m(),_("div",_e,p(l.row.client.nombre),1)):A("",!0)]),_:2},1032,["props"]),o(c,{key:"fechayhora",props:l},{default:s(()=>[n("p",null,p(t.$filters.dateDmYHis(l.row.fecha_emision)),1)]),_:2},1032,["props"]),o(c,{key:"egresoingreso",props:l},{default:s(()=>[o(R,{color:`${l.row.tipo_venta=="INGRESO"?"green":"red"}-5`,"text-color":"white",dense:"",flat:"",label:l.row.tipo_venta},null,8,["color","label"])]),_:2},1032,["props"]),o(c,{key:"user",props:l},{default:s(()=>{var f;return[n("p",null,p((f=l.row.user)==null?void 0:f.name),1)]}),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["columns","rows","filter","loading"])])])]),_:1}),o(q,{modelValue:a.gastoDialog,"onUpdate:modelValue":e[5]||(e[5]=l=>a.gastoDialog=l),position:"right",maximized:""},{default:s(()=>[o(C,{onGastoCreated:i.gastoCreated},null,8,["onGastoCreated"])]),_:1},8,["modelValue"])],64)}var Qe=y(le,[["render",ve]]);export{Qe as default};
