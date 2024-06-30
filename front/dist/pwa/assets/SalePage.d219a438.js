import{_ as E,C as y,D as h,E as I,F as i,H as a,G as l,K as g,ak as r,b5 as O,Q as m,aj as p,aH as _,am as v,I as c,J as f,al as x,z as Q,b7 as A,b8 as D,b9 as q,aq as T,b6 as z,ao as B,an as k}from"./index.c1bda583.js";import{Q as V,d as N}from"./QSelect.02481b4d.js";import{Q as G,a as C}from"./QTable.98f63700.js";import{Q as M}from"./QImg.d3c1ea82.js";import{I as P,Q as F}from"./Imprimir.97a2007c.js";import{C as L,Q as H,a as j}from"./CalculatePage.2b9a1c46.js";import{a as w,Q as J,b as K}from"./QItem.4067e6bd.js";import{Q as W}from"./QTooltip.bff1a600.js";import{Q as X}from"./QList.2afee3d5.js";import{Q as Y}from"./QSpace.c858cf4f.js";import{Q as Z}from"./QForm.493bf25f.js";import{Q as $}from"./QPage.c78bbd12.js";import{C as S}from"./ClosePopup.cc88c787.js";import{P as ee}from"./ProductsComponents.91e1a7ba.js";import"./format.f4c59c6f.js";import"./moment.40bc58bf.js";import"./QScrollObserver.d0015d5b.js";import"./TouchPan.6dea8dd2.js";import"./Alert.d141bc72.js";const te={name:"ProductosPage",components:{CalculatePage:L,ProductsComponents:ee},data(){return{descuento:"",vista:"tabla",calculateDialog:!1,metodoPago:"EFECTIVO",precio:"PRECIO 1",almacenSelected:"Todo",search:"",categories:[{id:"",name:"Selecciona una categor\xEDa"}],loading:!1,categoriSelected:"",ordenes:["Selecciona un orden","Alfab\xE9tico","Producto m\xE1s vendido","Producto menos vendido","Ultimas unidades disponibles"],ordenSelected:"Selecciona un orden",medidas:[],products:[],productsAll:[],saleDialog:!1,client:{nit:"",nombre:""},efectivo:""}},mounted(){this.categoriesGet(),this.productsGet(),this.medidasGet()},methods:{addProduct(t){const e=t.producto,d=parseInt(t.cantidad);console.log(e),console.log(d);const b=this.$store.productosVenta.find(s=>s.id===e.id);b?b.cantidadVenta+=d:(this.precio==="PRECIO 1"&&(e.precioVenta=e.precio1),this.precio==="PRECIO 2"&&(e.precioVenta=e.precio2),this.precio==="PRECIO 3"&&(e.precioVenta=e.precio3),this.precio==="PRECIO 4"&&(e.precioVenta=e.precio4),this.precio==="PRECIO 5"&&(e.precioVenta=e.precio5),this.precio==="PRECIO 6"&&(e.precioVenta=e.precio6),this.$store.productosVenta.push({id:e.id,nombre:e.nombre,cantidadVenta:d,precioVenta:e.precioVenta,costoUnitario:e.costoUnitario,stock:e.stock,image:e.image}))},cotizacion(){P.cotizacion(this.$store.productosVenta,this.client,this.total,this.descuento)},numero2digitosRedondeado(t){return(Math.round(t*100)/100).toFixed(2)},saleInsert(){this.loading=!0,this.$axios.post("sales",{nit:this.client.nit,nombre:this.client.nombre,telefono:this.client.telefono,direccion:this.client.direccion,comentario:this.client.comentario,total:this.total,metodo:this.metodoPago,almacen:this.almacenSelected,productos:this.$store.productosVenta,descuento:this.descuento}).then(t=>{P.nota(t.data),this.productsGet(),this.$alert.success("Venta realizada")}).finally(()=>{this.loading=!1,this.saleDialog=!1,this.$store.productosVenta=[]})},precioVenta(t){t.precioVenta===""&&(t.precioVenta=1)},cambioNumero(t,e){console.log(t)},removeCantidad(t,e){t.cantidad++,t.cantidadPedida--,t.cantidadVenta>1?t.cantidadVenta=parseInt(t.cantidadVenta)-1:t.cantidadVenta===1&&this.$store.productosVenta.splice(e,1)},addCantidad(t,e){t.cantidad--,t.cantidadPedida++,t.cantidadVenta=parseInt(t.cantidadVenta)+1},deleteProductosVenta(t,e){this.$store.productosVenta.splice(e,1)},redondeo(t){return Math.round(t*100)/100},clickDetalleProducto(t){const e=this.$store.productosVenta.find(d=>d.id===t.id);e?e.cantidadVenta+=1:(this.precio==="PRECIO 1"&&(t.precioVenta=t.precio1),this.precio==="PRECIO 2"&&(t.precioVenta=t.precio2),this.precio==="PRECIO 3"&&(t.precioVenta=t.precio3),this.precio==="PRECIO 4"&&(t.precioVenta=t.precio4),this.precio==="PRECIO 5"&&(t.precioVenta=t.precio5),this.precio==="PRECIO 6"&&(t.precioVenta=t.precio6),this.$store.productosVenta.push({id:t.id,nombre:t.nombre,cantidadVenta:1,precioVenta:t.precioVenta,costoUnitario:t.costoUnitario,stock:t.stock,image:t.image}))},clickSale(){this.saleDialog=!0,this.efectivo="",this.client={nit:"0",nombre:"SN"}},vaciarCanasta(){this.$store.productosVenta=[]},searchProductsOrder(t){t===""&&(this.products=this.productsAll),t==="Alfab\xE9tico"&&(this.products=this.productsAll.sort((e,d)=>e.nombre.localeCompare(d.nombre))),t==="Producto m\xE1s vendido"&&(this.products=this.productsAll.sort((e,d)=>d.cantidadVentas-e.cantidadVentas)),t==="Producto menos vendido"&&(this.products=this.productsAll.sort((e,d)=>e.cantidadVentas+d.cantidadVentas)),t==="Ultimas unidades disponibles"&&(this.products=this.productsAll.sort((e,d)=>e.stock-d.stock))},searchProductsCategory(t){t===""?this.products=this.productsAll:this.products=this.productsAll.filter(e=>e.category_id===t)},medidasGet(){this.$axios.get("medidas").then(t=>{this.medidas=this.medidas.concat(t.data)})},searchProducts(){this.search===""?this.products=this.productsAll:this.products=this.productsAll.filter(t=>t.nombre.toLowerCase().includes(this.search.toLowerCase()))},categoriesGet(){this.$axios.get("categories").then(t=>{this.categories=this.categories.concat(t.data)})},productsGet(){this.loading=!0,this.$axios.get("products").then(t=>{this.loading=!1,this.products=t.data,this.productsAll=t.data})},searchClient(t){this.loading=!0,this.$axios.post("searchClient",{nit:t}).then(e=>{e.data.nombre!==void 0&&(this.client.nombre=e.data.nombre,this.client.telefono=e.data.telefono,this.client.direccion=e.data.direccion)}).finally(()=>{this.loading=!1})}},computed:{Imprimir(){return P},cambio(){const t=parseFloat(this.efectivo===""?0:this.efectivo),e=parseFloat(this.total===""?0:this.total);return Math.round((t-e)*100)/100},total(){const t=this.$store.productosVenta.reduce((e,d)=>e+d.cantidadVenta*d.precioVenta,0);return Math.round(t*100)/100},totalganancia(){return this.$store.productosVenta.reduce((t,e)=>t+(e.cantidadVenta*e.precioVenta-e.costoUnitario)*e.cantidadVenta,0)},columnsProductosVenta(){return[{name:"borrar",align:"center",label:"Borrar",field:"borrar"},{name:"nombre",align:"center",label:"Nombre",field:"nombre"},{name:"cantidadVenta",align:"center",label:"Cantidad",field:"cantidadVenta"}]},ruleNumber(){return[t=>!!t||"Campo requerido",t=>t&&t>0||"Debe ser mayor a 0"]}}},oe={class:"row"},le={class:"col-12 col-md-8"},ae={class:"row"},se={class:"col-12 col-md-3"},ie={class:"col-6 col-md-2 text-right"},ne=a("div",{class:"col-6 col-md-7 text-right"},null,-1),de={class:"col-4 col-md-3"},ce={class:"col-8 col-md-3"},re={class:"col-4 col-md-2"},ue={class:"col-12 col-md-2 text-right"},me={class:"col-12 col-md-2 text-right"},pe={class:"col-12"},he={class:"col-12 col-md-4"},ge={class:"row"},Ve=a("div",{class:"col-6 text-h6 q-pt-xs q-pl-lg"},"Canasta",-1),fe={class:"col-6 text-right"},be={key:0,class:"flex flex-center q-pa-lg"},_e=a("div",{class:"q-pa-lg text-grey text-center noSelect"}," A\xFAn no tienes productos en tu canasta. Haz clic sobre un producto para agregarlo. ",-1),ve={style:{"padding-left":"42px"}},xe={class:"text-caption",style:{"max-width":"170px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},Ce={class:"text-grey"},Pe=a("div",{style:{"font-size":"10px"}},"Bs.",-1),we={class:"text-grey"},ye={class:"text-right text-grey-8 text-bold"},Ie={class:"row"},Qe=a("div",{class:"col-7 text-grey"},"Cantidades de referencia",-1),ke={class:"col-5 text-right"},Se={class:"col-7 text-grey"},Ue={class:"col-5 text-right text-green"},Re=a("div",{class:"text-h6"},"Realizar venta",-1),Ee={class:"row"},Oe={class:"col-6 col-md-3"},Ae={class:"col-12 col-md-3"},De={class:"col-12 col-md-3"},qe={class:"col-12 col-md-3"},Te={class:"col-12 col-md-12"},ze={class:"row"},Be={class:"col-6 col-md-2"},Ne={class:"col-6 col-md-3"},Ge={class:"col-6 col-md-2"},Me={class:"col-6 col-md-3"},Fe={class:"col-6 col-md-2 text-center"},Le=a("thead",null,[a("tr",null,[a("th",null,"#"),a("th",null,"Nombre"),a("th",null,"Cantidad"),a("th",null,"Precio"),a("th",null,"Subtotal")])],-1),He={class:"text-right"},je={class:"text-right text-bold"},Je={colspan:"2",class:"text-right text-bold"},Ke=a("td",{colspan:"2",class:"text-right text-bold"},"Total",-1),We={class:"text-right text-bold"},Xe={class:"row"},Ye={class:"col-6"},Ze={class:"col-6"},$e=a("div",{id:"myElement",class:"hidden"},null,-1);function et(t,e,d,b,s,n){const U=y("ProductsComponents"),R=y("CalculatePage");return h(),I($,{class:"bg-grey-3 q-pa-xs"},{default:i(()=>[a("div",oe,[a("div",le,[a("div",ae,[a("div",se,[l(r,{modelValue:s.search,"onUpdate:modelValue":[e[0]||(e[0]=o=>s.search=o),n.searchProducts],label:"Buscar",outlined:"",dense:"",class:"bg-white",loading:s.loading},{prepend:i(()=>[l(g,{name:"o_search"})]),_:1},8,["modelValue","onUpdate:modelValue","loading"])]),a("div",ie,[l(O,{"model-value":"vista",label:s.vista,color:"primary",dense:"",modelValue:s.vista,"onUpdate:modelValue":e[1]||(e[1]=o=>s.vista=o),"false-value":"lista","true-value":"tabla"},null,8,["label","modelValue"])]),ne,a("div",de,[l(V,{modelValue:s.categoriSelected,"onUpdate:modelValue":[e[2]||(e[2]=o=>s.categoriSelected=o),n.searchProductsCategory],options:s.categories,label:"Categor\xEDa",outlined:"",dense:"",class:"bg-white","emit-value":"","map-options":"","option-label":o=>o.name,"option-value":o=>o.id},null,8,["modelValue","options","option-label","option-value","onUpdate:modelValue"])]),a("div",ce,[l(V,{modelValue:s.ordenSelected,"onUpdate:modelValue":[e[3]||(e[3]=o=>s.ordenSelected=o),n.searchProductsOrder],options:s.ordenes,label:"Ordenar por",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue","options","onUpdate:modelValue"])]),a("div",re,[l(V,{modelValue:s.almacenSelected,"onUpdate:modelValue":e[4]||(e[4]=o=>s.almacenSelected=o),options:["Todo","Almacen 1","Almacen 2"],label:"Almacen",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue"])]),a("div",ue,[l(V,{modelValue:s.precio,"onUpdate:modelValue":e[5]||(e[5]=o=>s.precio=o),options:["PRECIO 1","PRECIO 2","PRECIO 3","PRECIO 4","PRECIO 5","PRECIO 6"],label:"Precio",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue"])]),a("div",me,[l(m,{label:"Calculos",color:"green",icon:"o_calculate","no-caps":"",rounded:"",class:"bg-white",onClick:e[6]||(e[6]=o=>s.calculateDialog=!0)})]),a("div",pe,[l(U,{products:s.products,onClickDetalleProducto:n.clickDetalleProducto,precio:s.precio,almacenSelected:s.almacenSelected,vista:s.vista},null,8,["products","onClickDetalleProducto","precio","almacenSelected","vista"])])])]),a("div",he,[l(x,null,{default:i(()=>[l(p,{class:"q-pa-none q-ma-none"},{default:i(()=>[a("div",ge,[Ve,a("div",fe,[l(m,{class:"text-subtitle1 text-blue-10 text-bold",style:{"text-decoration":"underline"},label:"Vaciar canasta",onClick:n.vaciarCanasta,"no-caps":"",flat:"",outline:""},null,8,["onClick"])])])]),_:1}),l(_),l(p,{class:"q-pa-none q-ma-none"},{default:i(()=>[t.$store.productosVenta.length==0?(h(),v("div",be,[l(g,{name:"o_shopping_basket",color:"grey",size:"100px"}),_e])):(h(),I(H,{key:1,style:{height:"400px"}},{default:i(()=>[l(G,{dense:"",flat:"",bordered:"","hide-bottom":"","hide-header":"",rows:t.$store.productosVenta,columns:n.columnsProductosVenta,"rows-per-page-options":[0]},{body:i(o=>[l(F,{props:o},{default:i(()=>[l(C,{key:"borrar",props:o,style:{padding:"0px",margin:"0px"},"auto-width":""},{default:i(()=>[l(m,{flat:"",dense:"",onClick:u=>n.deleteProductosVenta(o.row,o.pageIndex),icon:"delete",color:"red",size:"10px",class:"q-pa-none q-ma-none"},null,8,["onClick"])]),_:2},1032,["props"]),l(C,{key:"nombre",props:o,"auto-width":""},{default:i(()=>[a("div",null,[l(M,{src:o.row.image.includes("http")?o.row.image:`${t.$url}../images/${o.row.image}`,width:"40px",height:"40px",style:{padding:"0px",margin:"0px","border-radius":"0px",position:"absolute",top:"20px",left:"8px"}},null,8,["src"]),a("div",ve,[a("div",xe,c(o.row.nombre),1),a("div",Ce,"Disponible: "+c(o.row.stock),1),l(r,{modelValue:o.row.precioVenta,"onUpdate:modelValue":[u=>o.row.precioVenta=u,u=>n.precioVenta(o.row)],style:{width:"170px"},class:"super-small",step:"0.01",type:"number",dense:"",outlined:""},{prepend:i(()=>[l(g,{name:"edit",size:"xs"}),Pe]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),_:2},1032,["props"]),l(C,{key:"cantidadVenta",props:o},{default:i(()=>[l(r,{dense:"",outlined:"","bottom-slots":"",min:"1",class:"super-small",modelValue:o.row.cantidadVenta,"onUpdate:modelValue":[u=>o.row.cantidadVenta=u,u=>n.cambioNumero(o.row,o.pageIndex)],rules:n.ruleNumber,type:"number","input-class":"text-center",required:""},null,8,["modelValue","onUpdate:modelValue","rules"]),a("div",we,"= Bs "+c(n.redondeo(o.row.cantidadVenta*o.row.precioVenta)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1}))]),_:1}),l(p,null,{default:i(()=>[l(X,{padding:"",bordered:"",dense:"",class:"rounded-borders full-width q-pa-none q-ma-none"},{default:i(()=>[l(j,{dense:"","dense-toggle":"","expand-separator":"",label:"Total"},{header:i(()=>[l(w,null,{default:i(()=>[f(" Total ")]),_:1}),l(w,{side:""},{default:i(()=>[a("div",ye,[a("u",null," Bs "+c(n.total),1)])]),_:1})]),default:i(()=>[l(x,null,{default:i(()=>[l(p,null,{default:i(()=>[a("div",Ie,[Qe,a("div",ke,c(t.$store.productosVenta.length),1),a("div",Se,[f(" Ganancia "),l(g,{name:"o_info"},{default:i(()=>[l(W,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:i(()=>[f(" Para calcular la ganancia correctamente, deber\xE1s cargar el costo unitario de todos los productos desde tu Inventario. ")]),_:1})]),_:1})]),a("div",Ue,c(n.totalganancia)+" Bs",1)])]),_:1})]),_:1})]),_:1})]),_:1}),l(m,{onClick:n.clickSale,class:"full-width","no-caps":"",label:"Confirmar venta",color:t.$store.productosVenta.length==0?"grey":"warning",disable:t.$store.productosVenta.length==0},null,8,["onClick","color","disable"])]),_:1})]),_:1})])]),l(k,{modelValue:s.saleDialog,"onUpdate:modelValue":e[17]||(e[17]=o=>s.saleDialog=o),persistent:""},{default:i(()=>[l(x,{style:{width:"750px","max-width":"90vw"}},{default:i(()=>[l(p,{class:"row items-center q-pb-none"},{default:i(()=>[Re,l(Y),Q(l(m,{flat:"",round:"",dense:"",icon:"close"},null,512),[[S]])]),_:1}),l(Z,{onSubmit:A(n.saleInsert,["prevent"])},{default:i(()=>[l(p,null,{default:i(()=>[a("div",Ee,[a("div",Oe,[l(r,{outlined:"",dense:"",label:"Numero",required:"","onUpdate:modelValue":[n.searchClient,e[7]||(e[7]=o=>s.client.nit=o)],modelValue:s.client.nit,loading:s.loading,debounce:500},null,8,["onUpdate:modelValue","modelValue","loading"])]),a("div",Ae,[l(r,{outlined:"",dense:"",label:"Nombre Razon Social",required:"",modelValue:s.client.nombre,"onUpdate:modelValue":e[8]||(e[8]=o=>s.client.nombre=o),style:{"text-transform":"uppercase"}},null,8,["modelValue"])]),a("div",De,[l(r,{outlined:"",dense:"",label:"Telefono",modelValue:s.client.telefono,"onUpdate:modelValue":e[9]||(e[9]=o=>s.client.telefono=o),style:{"text-transform":"uppercase"}},null,8,["modelValue"])]),a("div",qe,[l(r,{outlined:"",dense:"",label:"Direccion",modelValue:s.client.direccion,"onUpdate:modelValue":e[10]||(e[10]=o=>s.client.direccion=o),style:{"text-transform":"uppercase"}},null,8,["modelValue"])]),a("div",Te,[l(r,{outlined:"",dense:"",label:"Comentario",modelValue:s.client.comentario,"onUpdate:modelValue":e[11]||(e[11]=o=>s.client.comentario=o),style:{"text-transform":"uppercase"},type:"textarea"},null,8,["modelValue"])])])]),_:1}),l(_),l(p,null,{default:i(()=>[a("div",ze,[a("div",Be,[l(r,{outlined:"",dense:"",label:"TOTAL A PAGAR:",readonly:"",modelValue:n.total,"onUpdate:modelValue":e[12]||(e[12]=o=>n.total=o)},null,8,["modelValue"])]),a("div",Ne,[l(r,{outlined:"",dense:"",label:"EFECTIVO BS.",modelValue:s.efectivo,"onUpdate:modelValue":e[13]||(e[13]=o=>s.efectivo=o)},null,8,["modelValue"])]),a("div",Ge,[l(r,{outlined:"",dense:"",label:"CAMBIO:",readonly:"",modelValue:n.cambio,"onUpdate:modelValue":e[14]||(e[14]=o=>n.cambio=o)},null,8,["modelValue"])]),a("div",Me,[l(V,{dense:"",outlined:"",modelValue:s.metodoPago,"onUpdate:modelValue":e[15]||(e[15]=o=>s.metodoPago=o),label:"Metodo de pago",options:t.$metodos,hint:"Metodo de pago del gasto"},{prepend:i(()=>[l(g,{name:"o_payment"})]),option:i(o=>[l(J,D(q(o.itemProps)),{default:i(()=>[l(w,{class:T(o.opt=="CREDITO"?"bg-red":"")},{default:i(()=>[l(K,null,{default:i(()=>[f(c(o.opt),1)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)]),_:1},8,["modelValue","options"])]),a("div",Fe,[l(m,{onClick:n.cotizacion,"no-caps":"",label:"Cotizar",color:"indigo",icon:"print",size:"10px"},null,8,["onClick"])])])]),_:1}),l(N,{dense:"","wrap-cells":""},{default:i(()=>[Le,a("tbody",null,[(h(!0),v(B,null,z(t.$store.productosVenta,(o,u)=>(h(),v("tr",{key:o.id},[a("td",null,c(u+1),1),a("td",null,c(o.nombre),1),a("td",null,c(o.cantidadVenta),1),a("td",He,c(n.numero2digitosRedondeado(o.precioVenta)),1),a("td",je,c(n.numero2digitosRedondeado(o.cantidadVenta*o.precioVenta))+" Bs.",1)]))),128)),a("tr",null,[a("td",Je,[l(r,{label:"Descuento",modelValue:s.descuento,"onUpdate:modelValue":e[16]||(e[16]=o=>s.descuento=o),dense:"",outlined:""},null,8,["modelValue"])]),Ke,a("td",We,c(n.numero2digitosRedondeado(n.total-s.descuento))+" Bs.",1)])])]),_:1}),l(_),l(p,null,{default:i(()=>[a("div",Xe,[a("div",Ye,[l(m,{type:"submit",class:"full-width",icon:"o_add_circle",label:"Realizar venta",loading:s.loading,"no-caps":"",color:"green"},null,8,["loading"])]),a("div",Ze,[Q(l(m,{class:"full-width",icon:"undo",label:"Atras","no-caps":"",color:"red",loading:s.loading},null,8,["loading"]),[[S]])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:s.calculateDialog,"onUpdate:modelValue":e[19]||(e[19]=o=>s.calculateDialog=o),position:"left","full-height":""},{default:i(()=>[l(R,{onClose:e[18]||(e[18]=o=>s.calculateDialog=!1),products:s.products,onAddProduct:n.addProduct},null,8,["products","onAddProduct"])]),_:1},8,["modelValue"]),$e]),_:1})}var vt=E(te,[["render",et]]);export{vt as default};