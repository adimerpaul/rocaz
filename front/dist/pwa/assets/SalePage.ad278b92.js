import{_ as O,F as S,G as p,H as C,I as i,K as a,J as l,O as V,ar as c,bb as R,Q as m,aq as h,b5 as P,at as g,L as r,b3 as D,M as _,as as x,C as I,bd as z,bc as k,av as Q,ax as T,ay as q,aw as B,au as N,P as F}from"./index.29f502ab.js";import{Q as f}from"./QSelect.ea3aa935.js";import{Q as G,a as w}from"./QTable.1244551b.js";import{I as b,Q as M}from"./Imprimir.3e5520a9.js";import{C as L,Q as j,a as H}from"./CalculatePage.5fcc68c2.js";import{a as y,Q as J,b as K}from"./QItem.009268c4.js";import{Q as W}from"./QTooltip.d0a6addc.js";import{Q as X}from"./QList.43daafe0.js";import{Q as Y}from"./QSpace.8cdcc839.js";import{Q as Z}from"./QMarkupTable.823143ed.js";import{Q as $}from"./QForm.9d30c14f.js";import{Q as ee}from"./QPage.65ff54cb.js";import{C as E}from"./ClosePopup.03a92d96.js";import{P as te}from"./ProductsComponents.36f09f80.js";import{h as oe}from"./html2pdf.0be225ec.js";import"./format.f891f1e3.js";import"./moment.40bc58bf.js";import"./QScrollObserver.e6e4d03c.js";import"./TouchPan.bed6485d.js";import"./Alert.7154a582.js";import"./QImg.0e0bb068.js";import"./_commonjsHelpers.d2428edb.js";const le={name:"ProductosPage",components:{CalculatePage:L,ProductsComponents:te},data(){return{totalSale:0,totalSale2:0,descuento:"",vista:"tabla",calculateDialog:!1,metodoPago:"EFECTIVO",precio:"PRECIO 1",almacenSelected:"Todo",search:"",categories:[{id:"",name:"Selecciona una categor\xEDa"}],loading:!1,categoriSelected:"",ordenes:["Selecciona un orden","Alfab\xE9tico","Producto m\xE1s vendido","Producto menos vendido","Ultimas unidades disponibles"],ordenSelected:"Selecciona un orden",medidas:[],products:[],productsAll:[],saleDialog:!1,client:{nit:"",nombre:""},clients:[],efectivo:""}},mounted(){this.categoriesGet(),this.productsGet(),this.medidasGet(),this.clientsGet()},methods:{clientsGet(){this.$axios.get("clients",{params:{type:"CLIENTE"}}).then(t=>{this.clients=this.clients.concat(t.data)})},addProduct(t){const e=t.producto,d=Math.ceil(t.cantidad);console.log(e);const v=this.$store.productosVenta.find(s=>s.id===e.id);v?v.cantidadVenta+=d:(this.precio==="PRECIO 1"&&(e.precioVenta=e.precio1),this.precio==="PRECIO 2"&&(e.precioVenta=e.precio2),this.precio==="PRECIO 3"&&(e.precioVenta=e.precio3),this.precio==="PRECIO 4"&&(e.precioVenta=e.precio4),this.precio==="PRECIO 5"&&(e.precioVenta=e.precio5),this.precio==="PRECIO 6"&&(e.precioVenta=e.precio6),this.$store.productosVenta.push({id:e.id,nombre:e.nombre,cantidadVenta:d,precioVenta:e.precioVenta,costoUnitario:e.costo,stock:e.stock,image:e.image,visible:!0}))},cotizacionPdf(){document.getElementById("myElement").classList.remove("hidden"),b.cotizacion(this.$store.productosVenta,this.client,this.total,this.descuento,!1).then(()=>{const e=document.getElementById("myElement"),d={margin:1,filename:"cotizacion.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};oe().set(d).from(e).save(),setTimeout(()=>{e.classList.add("hidden")},300)})},cotizacion(){b.cotizacion(this.$store.productosVenta,this.client,this.total,this.descuento)},numero2digitosRedondeado(t){return(Math.round(t*100)/100).toFixed(2)},saleInsert(){this.loading=!0,this.$axios.post("sales",{nit:this.client.nit,nombre:this.client.nombre,telefono:this.client.telefono,direccion:this.client.direccion,comentario:this.client.comentario,total:this.totalSale2,metodo:this.metodoPago,almacen:this.almacenSelected,productos:this.$store.productosVenta,descuento:this.descuento}).then(t=>{b.nota(t.data),b.nota(t.data),this.productsGet(),this.$alert.success("Venta realizada")}).finally(()=>{this.loading=!1,this.saleDialog=!1,this.$store.productosVenta=[]})},precioVenta(t){t.precioVenta===""&&(t.precioVenta=1)},cambioNumero(t,e){console.log(t)},removeCantidad(t,e){t.cantidad++,t.cantidadPedida--,t.cantidadVenta>1?t.cantidadVenta=parseInt(t.cantidadVenta)-1:t.cantidadVenta===1&&this.$store.productosVenta.splice(e,1)},addCantidad(t,e){t.cantidad--,t.cantidadPedida++,t.cantidadVenta=parseInt(t.cantidadVenta)+1},deleteProductosVenta(t,e){this.$store.productosVenta.splice(e,1)},redondeo(t){return Math.round(t*100)/100},clickDetalleProducto(t){const e=this.$store.productosVenta.find(d=>d.id===t.id);e?e.cantidadVenta+=1:(this.precio==="PRECIO 1"&&(t.precioVenta=t.precio1),this.precio==="PRECIO 2"&&(t.precioVenta=t.precio2),this.precio==="PRECIO 3"&&(t.precioVenta=t.precio3),this.precio==="PRECIO 4"&&(t.precioVenta=t.precio4),this.precio==="PRECIO 5"&&(t.precioVenta=t.precio5),this.precio==="PRECIO 6"&&(t.precioVenta=t.precio6),this.$store.productosVenta.push({id:t.id,nombre:t.nombre,cantidadVenta:1,precioVenta:t.precioVenta,costoUnitario:t.costo,stock:t.stock,image:t.image,visible:!0}))},clickSale(){this.saleDialog=!0,this.descuento="",this.efectivo="",this.client={nit:"0",nombre:"SN"},this.totalSale=0,this.$store.productosVenta.forEach(t=>{this.totalSale=this.totalSale+parseFloat(t.precioVenta)*parseFloat(t.cantidadVenta),this.totalSale2=this.totalSale}),this.totalSale=this.totalSale.toFixed(2)},vaciarCanasta(){this.$store.productosVenta=[]},searchProductsOrder(t){t===""&&(this.products=this.productsAll),t==="Alfab\xE9tico"&&(this.products=this.productsAll.sort((e,d)=>e.nombre.localeCompare(d.nombre))),t==="Producto m\xE1s vendido"&&(this.products=this.productsAll.sort((e,d)=>d.cantidadVentas-e.cantidadVentas)),t==="Producto menos vendido"&&(this.products=this.productsAll.sort((e,d)=>e.cantidadVentas+d.cantidadVentas)),t==="Ultimas unidades disponibles"&&(this.products=this.productsAll.sort((e,d)=>e.stock-d.stock))},searchProductsCategory(t){t===""?this.products=this.productsAll:this.products=this.productsAll.filter(e=>e.category_id===t)},medidasGet(){this.$axios.get("medidas").then(t=>{this.medidas=this.medidas.concat(t.data)})},searchProducts(){this.search===""?this.products=this.productsAll:this.products=this.productsAll.filter(t=>t.nombre.toLowerCase().includes(this.search.toLowerCase()))},categoriesGet(){this.$axios.get("categories").then(t=>{this.categories=this.categories.concat(t.data)})},productsGet(){this.loading=!0,this.$axios.get("products").then(t=>{this.loading=!1,this.products=t.data,this.productsAll=t.data})},searchClient(t){this.loading=!0,this.$axios.post("searchClient",{nit:t}).then(e=>{e.data.nombre!==void 0&&(this.client.nombre=e.data.nombre,this.client.telefono=e.data.telefono,this.client.direccion=e.data.direccion)}).finally(()=>{this.loading=!1})}},computed:{Imprimir(){return b},cambio(){const t=parseFloat(this.efectivo===""?0:this.efectivo),e=parseFloat(this.total===""?0:this.total);return Math.round((t-e)*100)/100},total(){const t=this.$store.productosVenta.reduce((e,d)=>e+d.cantidadVenta*d.precioVenta,0);return Math.round(t*100)/100},totalganancia(){let t=0;return this.$store.productosVenta.forEach(e=>{t+=(e.precioVenta-e.costoUnitario)*e.cantidadVenta}),Math.round(t*100)/100},columnsProductosVenta(){return[{name:"borrar",align:"center",label:"Borrar",field:"borrar"},{name:"nombre",align:"center",label:"Nombre",field:"nombre"},{name:"cantidadVenta",align:"center",label:"Cantidad",field:"cantidadVenta"}]},ruleNumber(){return[t=>!!t||"Campo requerido",t=>t&&t>0||"Debe ser mayor a 0"]}}},ae={class:"row"},se={class:"col-12 col-md-8"},ie={class:"row"},ne={class:"col-12 col-md-3"},de={class:"col-6 col-md-2 text-right"},ce=a("div",{class:"col-6 col-md-7 text-right"},null,-1),re={class:"col-4 col-md-3"},ue={class:"col-8 col-md-3"},me={class:"col-4 col-md-2"},pe={class:"col-12 col-md-2 text-right"},he={class:"col-12 col-md-2 text-right"},Ve={class:"col-12"},ge={class:"col-12 col-md-4"},fe={class:"row"},be=a("div",{class:"col-6 text-h6 q-pt-xs q-pl-lg"},"Canasta",-1),_e={class:"col-6 text-right"},ve={key:0,class:"flex flex-center q-pa-lg"},Ce=a("div",{class:"q-pa-lg text-grey text-center noSelect"}," A\xFAn no tienes productos en tu canasta. Haz clic sobre un producto para agregarlo. ",-1),Pe={class:"text-caption",style:{"max-width":"170px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},xe={class:"text-grey"},we=a("div",{style:{"font-size":"10px"}},"Bs.",-1),ye={class:"text-grey"},Se={class:"text-right text-grey-8 text-bold"},Ie={class:"row"},ke=a("div",{class:"col-7 text-grey"},"Cantidades de referencia",-1),Qe={class:"col-5 text-right"},Ee={class:"col-7 text-grey"},Ue={class:"col-5 text-right text-green"},Ae=a("div",{class:"text-h6"},"Realizar venta",-1),Oe={class:"row"},Re={class:"col-6 col-md-3"},De={class:"col-12 col-md-3"},ze={id:"users"},Te=["value"],qe={class:"col-12 col-md-3"},Be={class:"col-12 col-md-3"},Ne={class:"col-12 col-md-12"},Fe={class:"row"},Ge={class:"col-6 col-md-2"},Me={class:"col-6 col-md-3"},Le={class:"col-6 col-md-2"},je={class:"col-6 col-md-3"},He={class:"col-6 col-md-2 text-center"},Je=a("thead",null,[a("tr",null,[a("th",null,"#"),a("th",null,"Nombre"),a("th",null,"Cantidad"),a("th",null,"Precio"),a("th",null,"Subtotal")])],-1),Ke={class:"text-right"},We={class:"text-right text-bold"},Xe={colspan:"2",class:"text-right text-bold"},Ye=a("td",{colspan:"2",class:"text-right text-bold"},"Total",-1),Ze={class:"text-right text-bold"},$e={class:"row"},et={class:"col-6"},tt={class:"col-6"},ot=a("div",{id:"myElement",class:"hidden"},null,-1);function lt(t,e,d,v,s,n){const U=S("ProductsComponents"),A=S("CalculatePage");return p(),C(ee,{class:"bg-grey-3 q-pa-xs"},{default:i(()=>[a("div",ae,[a("div",se,[a("div",ie,[a("div",ne,[l(c,{modelValue:s.search,"onUpdate:modelValue":[e[0]||(e[0]=o=>s.search=o),n.searchProducts],label:"Buscar",outlined:"",dense:"",class:"bg-white",loading:s.loading},{prepend:i(()=>[l(V,{name:"o_search"})]),_:1},8,["modelValue","onUpdate:modelValue","loading"])]),a("div",de,[l(R,{"model-value":"vista",label:s.vista,color:"primary",dense:"",modelValue:s.vista,"onUpdate:modelValue":e[1]||(e[1]=o=>s.vista=o),"false-value":"lista","true-value":"tabla"},null,8,["label","modelValue"])]),ce,a("div",re,[l(f,{modelValue:s.categoriSelected,"onUpdate:modelValue":[e[2]||(e[2]=o=>s.categoriSelected=o),n.searchProductsCategory],options:s.categories,label:"Categor\xEDa",outlined:"",dense:"",class:"bg-white","emit-value":"","map-options":"","option-label":o=>o.name,"option-value":o=>o.id},null,8,["modelValue","options","option-label","option-value","onUpdate:modelValue"])]),a("div",ue,[l(f,{modelValue:s.ordenSelected,"onUpdate:modelValue":[e[3]||(e[3]=o=>s.ordenSelected=o),n.searchProductsOrder],options:s.ordenes,label:"Ordenar por",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue","options","onUpdate:modelValue"])]),a("div",me,[l(f,{modelValue:s.almacenSelected,"onUpdate:modelValue":e[4]||(e[4]=o=>s.almacenSelected=o),options:["Todo","Almacen 1","Almacen 2"],label:"Almacen",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue"])]),a("div",pe,[l(f,{modelValue:s.precio,"onUpdate:modelValue":e[5]||(e[5]=o=>s.precio=o),options:["PRECIO 1","PRECIO 2","PRECIO 3","PRECIO 4","PRECIO 5","PRECIO 6"],label:"Precio",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue"])]),a("div",he,[l(m,{label:"Calculos",color:"green",icon:"o_calculate","no-caps":"",rounded:"",class:"bg-white",onClick:e[6]||(e[6]=o=>s.calculateDialog=!0)})]),a("div",Ve,[l(U,{products:s.products,onClickDetalleProducto:n.clickDetalleProducto,precio:s.precio,almacenSelected:s.almacenSelected,vista:s.vista},null,8,["products","onClickDetalleProducto","precio","almacenSelected","vista"])])])]),a("div",ge,[l(x,null,{default:i(()=>[l(h,{class:"q-pa-none q-ma-none"},{default:i(()=>[a("div",fe,[be,a("div",_e,[l(m,{class:"text-subtitle1 text-blue-10 text-bold",style:{"text-decoration":"underline"},label:"Vaciar canasta",onClick:n.vaciarCanasta,"no-caps":"",flat:"",outline:""},null,8,["onClick"])])])]),_:1}),l(P),l(h,{class:"q-pa-none q-ma-none"},{default:i(()=>[t.$store.productosVenta.length==0?(p(),g("div",ve,[l(V,{name:"o_shopping_basket",color:"grey",size:"100px"}),Ce])):(p(),C(j,{key:1,style:{height:"400px"}},{default:i(()=>[l(G,{dense:"",flat:"",bordered:"","hide-bottom":"","hide-header":"",rows:t.$store.productosVenta,columns:n.columnsProductosVenta,"rows-per-page-options":[0]},{body:i(o=>[l(M,{props:o},{default:i(()=>[l(w,{key:"borrar",props:o,style:{padding:"0px",margin:"0px"},"auto-width":""},{default:i(()=>[l(m,{flat:"",dense:"",onClick:u=>n.deleteProductosVenta(o.row,o.pageIndex),icon:"delete",color:"red",size:"10px",class:"q-pa-none q-ma-none"},null,8,["onClick"])]),_:2},1032,["props"]),l(w,{key:"nombre",props:o,"auto-width":""},{default:i(()=>[a("div",null,[a("div",null,[a("div",Pe,r(o.row.nombre),1),a("div",xe,"Disponible: "+r(o.row.stock),1),l(c,{modelValue:o.row.precioVenta,"onUpdate:modelValue":[u=>o.row.precioVenta=u,u=>n.precioVenta(o.row)],style:{width:"170px"},class:"super-small",step:"0.01",type:"number",dense:"",outlined:""},{prepend:i(()=>[l(V,{name:"edit",size:"xs"}),we]),after:i(()=>[l(D,{modelValue:o.row.visible,"onUpdate:modelValue":u=>o.row.visible=u,dense:"",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])])])]),_:2},1032,["props"]),l(w,{key:"cantidadVenta",props:o},{default:i(()=>[l(c,{dense:"",outlined:"","bottom-slots":"",min:"1",class:"super-small",modelValue:o.row.cantidadVenta,"onUpdate:modelValue":[u=>o.row.cantidadVenta=u,u=>n.cambioNumero(o.row,o.pageIndex)],rules:n.ruleNumber,type:"number","input-class":"text-center",required:""},null,8,["modelValue","onUpdate:modelValue","rules"]),a("div",ye,"= Bs "+r(n.redondeo(o.row.cantidadVenta*o.row.precioVenta)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1}))]),_:1}),l(h,null,{default:i(()=>[l(X,{padding:"",bordered:"",dense:"",class:"rounded-borders full-width q-pa-none q-ma-none"},{default:i(()=>[l(H,{dense:"","dense-toggle":"","expand-separator":"",label:"Total"},{header:i(()=>[l(y,null,{default:i(()=>[_(" Total ("+r(t.$store.productosVenta.length)+" productos) ",1)]),_:1}),l(y,{side:""},{default:i(()=>[a("div",Se,[a("u",null," Bs "+r(n.total),1)])]),_:1})]),default:i(()=>[l(x,null,{default:i(()=>[l(h,null,{default:i(()=>[a("div",Ie,[ke,a("div",Qe,r(t.$store.productosVenta.length),1),a("div",Ee,[_(" Ganancia "),l(V,{name:"o_info"},{default:i(()=>[l(W,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:i(()=>[_(" Para calcular la ganancia correctamente, deber\xE1s cargar el costo unitario de todos los productos desde tu Inventario. ")]),_:1})]),_:1})]),a("div",Ue,r(n.totalganancia)+" Bs",1)])]),_:1})]),_:1})]),_:1})]),_:1}),l(m,{onClick:n.clickSale,class:"full-width","no-caps":"",label:"Confirmar venta",color:t.$store.productosVenta.length==0?"grey":"warning",disable:t.$store.productosVenta.length==0},null,8,["onClick","color","disable"])]),_:1})]),_:1})])]),l(N,{modelValue:s.saleDialog,"onUpdate:modelValue":e[18]||(e[18]=o=>s.saleDialog=o),persistent:""},{default:i(()=>[l(x,{style:{width:"750px","max-width":"90vw"}},{default:i(()=>[l(h,{class:"row items-center q-pb-none"},{default:i(()=>[Ae,l(Y),I(l(m,{flat:"",round:"",dense:"",icon:"close"},null,512),[[E]])]),_:1}),l($,{onSubmit:z(n.saleInsert,["prevent"])},{default:i(()=>[l(h,null,{default:i(()=>[a("div",Oe,[a("div",Re,[l(c,{outlined:"",dense:"",label:"Numero",required:"","onUpdate:modelValue":[n.searchClient,e[7]||(e[7]=o=>s.client.nit=o)],modelValue:s.client.nit,loading:s.loading,debounce:500},null,8,["onUpdate:modelValue","modelValue","loading"])]),a("div",De,[l(c,{outlined:"",dense:"",label:"Nombre Razon Social",required:"",modelValue:s.client.nombre,"onUpdate:modelValue":e[8]||(e[8]=o=>s.client.nombre=o),list:"users"},null,8,["modelValue"]),a("datalist",ze,[(p(!0),g(Q,null,k(s.clients,o=>(p(),g("option",{value:o.nombre,key:o.id},null,8,Te))),128))])]),a("div",qe,[l(c,{outlined:"",dense:"",label:"Telefono",modelValue:s.client.telefono,"onUpdate:modelValue":e[9]||(e[9]=o=>s.client.telefono=o)},null,8,["modelValue"])]),a("div",Be,[l(c,{outlined:"",dense:"",label:"Direccion",modelValue:s.client.direccion,"onUpdate:modelValue":e[10]||(e[10]=o=>s.client.direccion=o)},null,8,["modelValue"])]),a("div",Ne,[l(c,{outlined:"",dense:"",label:"Comentario",modelValue:s.client.comentario,"onUpdate:modelValue":e[11]||(e[11]=o=>s.client.comentario=o),style:{"text-transform":"uppercase"},type:"textarea"},null,8,["modelValue"])])])]),_:1}),l(P),l(h,null,{default:i(()=>[a("div",Fe,[a("div",Ge,[l(c,{outlined:"",dense:"",label:"TOTAL A PAGAR:",readonly:"",modelValue:n.total,"onUpdate:modelValue":e[12]||(e[12]=o=>n.total=o)},null,8,["modelValue"])]),a("div",Me,[l(c,{outlined:"",dense:"",label:"EFECTIVO BS.",modelValue:s.efectivo,"onUpdate:modelValue":e[13]||(e[13]=o=>s.efectivo=o)},null,8,["modelValue"])]),a("div",Le,[l(c,{outlined:"",dense:"",label:"CAMBIO:",readonly:"",modelValue:n.cambio,"onUpdate:modelValue":e[14]||(e[14]=o=>n.cambio=o)},null,8,["modelValue"])]),a("div",je,[l(f,{dense:"",outlined:"",modelValue:s.metodoPago,"onUpdate:modelValue":e[15]||(e[15]=o=>s.metodoPago=o),label:"Metodo de pago",options:t.$metodos,hint:"Metodo de pago del gasto"},{prepend:i(()=>[l(V,{name:"o_payment"})]),option:i(o=>[l(J,T(q(o.itemProps)),{default:i(()=>[l(y,{class:B(o.opt=="CREDITO"?"bg-red":"")},{default:i(()=>[l(K,null,{default:i(()=>[_(r(o.opt),1)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)]),_:1},8,["modelValue","options"])]),a("div",He,[l(m,{onClick:n.cotizacion,"no-caps":"",label:"Cotizar",color:"indigo",icon:"print",size:"10px"},null,8,["onClick"]),l(m,{onClick:n.cotizacionPdf,"no-caps":"",label:"Cotizar PDF",color:"indigo",icon:"print",size:"10px"},null,8,["onClick"])])])]),_:1}),l(Z,{dense:"","wrap-cells":""},{default:i(()=>[Je,a("tbody",null,[(p(!0),g(Q,null,k(t.$store.productosVenta,(o,u)=>(p(),g("tr",{key:o.id},[a("td",null,r(u+1),1),a("td",null,r(o.nombre),1),a("td",null,r(o.cantidadVenta),1),a("td",Ke,r(n.numero2digitosRedondeado(o.precioVenta)),1),a("td",We,r(n.numero2digitosRedondeado(o.cantidadVenta*o.precioVenta))+" Bs.",1)]))),128)),a("tr",null,[a("td",Xe,[l(c,{label:"Descuento",modelValue:s.descuento,"onUpdate:modelValue":e[16]||(e[16]=o=>s.descuento=o),dense:"",outlined:""},null,8,["modelValue"])]),Ye,a("td",Ze,[a("div",null,[l(c,{modelValue:s.totalSale2,"onUpdate:modelValue":e[17]||(e[17]=o=>s.totalSale2=o),outlined:"",dense:"",label:"Total Bs."},null,8,["modelValue"])])])])])]),_:1}),l(P),l(h,null,{default:i(()=>[a("div",$e,[a("div",et,[l(m,{type:"submit",class:"full-width",icon:"o_add_circle",label:"Realizar venta",loading:s.loading,"no-caps":"",color:"green"},null,8,["loading"])]),a("div",tt,[I(l(m,{class:"full-width",icon:"undo",label:"Atras","no-caps":"",color:"red",loading:s.loading},null,8,["loading"]),[[E]])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),s.calculateDialog?(p(),C(A,{key:0,onClose:e[19]||(e[19]=o=>s.calculateDialog=!1),productsAll:s.products,onAddProduct:n.addProduct,style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,8,["productsAll","onAddProduct"])):F("",!0),ot]),_:1})}var St=O(le,[["render",lt]]);export{St as default};
