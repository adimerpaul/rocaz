import{_ as z,F as E,G as u,H as U,I as i,K as o,J as a,O as v,ar as c,bb as q,Q as m,aq as p,M as V,b3 as w,b5 as x,at as h,av as y,bc as k,L as r,as as S,C,bd as T,ax as B,ay as N,aw as F,au as M,P as G,be as A}from"./index.eb674307.js";import{Q as f}from"./QSelect.ebb6de68.js";import{Q}from"./QMarkupTable.64e3460e.js";import{a as I,Q as L,b as j}from"./QItem.0bbda112.js";import{Q as H}from"./QTooltip.5f87dc94.js";import{C as J,Q as K}from"./CalculatePage.edc8dc2d.js";import{Q as W}from"./QList.3061caa3.js";import{Q as X}from"./QSpace.74aab46c.js";import{Q as Y}from"./QForm.98c27abb.js";import{Q as Z}from"./QPage.fd0652ed.js";import{C as R}from"./ClosePopup.fc6edb9c.js";import{P as $}from"./ProductsComponents.cd27e158.js";import{I as b}from"./Imprimir.812e6446.js";import{h as ee}from"./html2pdf.9e055a13.js";import"./format.d211420c.js";import"./QResizeObserver.cc3c985e.js";import"./TouchPan.2e41d9ca.js";import"./Alert.06f0e073.js";import"./QImg.8700765d.js";import"./QTable.647ae8c2.js";import"./moment.40bc58bf.js";import"./_commonjsHelpers.d2428edb.js";const te={name:"ProductosPage",components:{CalculatePage:J,ProductsComponents:$},data(){return{totalSale:0,checkAll:!1,totalSale2:0,descuento:"",vista:"tabla",calculateDialog:!1,metodoPago:"EFECTIVO",precio:"PRECIO 1",almacenSelected:"Todo",search:"",categories:[{id:"",name:"Selecciona una categor\xEDa"}],loading:!1,categoriSelected:"",ordenes:["Selecciona un orden","Alfab\xE9tico","Producto m\xE1s vendido","Producto menos vendido","Ultimas unidades disponibles"],ordenSelected:"Selecciona un orden",medidas:[],products:[],productsAll:[],saleDialog:!1,client:{nit:"",nombre:""},clients:[],efectivo:""}},mounted(){this.categoriesGet(),this.productsGet(),this.medidasGet(),this.clientsGet()},methods:{checkAllClick(){this.checkAll?this.$store.productosVenta.forEach(t=>{t.visible=!0}):this.$store.productosVenta.forEach(t=>{t.visible=!1})},clientsGet(){this.$axios.get("clients",{params:{type:"CLIENTE"}}).then(t=>{this.clients=this.clients.concat(t.data)})},addProduct(t){const e=t.producto,d=Math.ceil(t.cantidad);console.log(e);const P=this.$store.productosVenta.find(s=>s.id===e.id);P?P.cantidadVenta+=d:(this.precio==="PRECIO 1"&&(e.precioVenta=e.precio1),this.precio==="PRECIO 2"&&(e.precioVenta=e.precio2),this.precio==="PRECIO 3"&&(e.precioVenta=e.precio3),this.precio==="PRECIO 4"&&(e.precioVenta=e.precio4),this.precio==="PRECIO 5"&&(e.precioVenta=e.precio5),this.precio==="PRECIO 6"&&(e.precioVenta=e.precio6),this.$store.productosVenta.push({id:e.id,nombre:e.nombre,cantidadVenta:d,precioVenta:e.precioVenta,costoUnitario:e.costo,stock:e.stock,image:e.image,visible:!0}))},cotizacionPdf(){document.getElementById("myElement").classList.remove("hidden"),b.cotizacion(this.$store.productosVenta,this.client,this.total,this.descuento,!1).then(()=>{const e=document.getElementById("myElement"),d={margin:1,filename:"cotizacion.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};ee().set(d).from(e).save(),setTimeout(()=>{e.classList.add("hidden")},300)})},cotizacion(){b.cotizacion(this.$store.productosVenta,this.client,this.total,this.descuento)},numero2digitosRedondeado(t){return(Math.round(t*100)/100).toFixed(2)},saleInsert(){this.loading=!0,this.$axios.post("sales",{nit:this.client.nit,nombre:this.client.nombre,telefono:this.client.telefono,direccion:this.client.direccion,comentario:this.client.comentario,total:this.totalSale2,metodo:this.metodoPago,almacen:this.almacenSelected,productos:this.$store.productosVenta,descuento:this.descuento,producto:this.client.producto,cantidad:this.client.cantidad}).then(t=>{b.nota(t.data),b.nota(t.data),this.productsGet(),this.$alert.success("Venta realizada"),this.checkAll=!1}).finally(()=>{this.loading=!1,this.saleDialog=!1,this.$store.productosVenta=[]}).catch(()=>{this.$alert.error("Error al realizar la venta")})},precioVenta(t){t.precioVenta===""&&(t.precioVenta=1)},cambioNumero(t,e){console.log(t)},removeCantidad(t,e){t.cantidad++,t.cantidadPedida--,t.cantidadVenta>1?t.cantidadVenta=parseInt(t.cantidadVenta)-1:t.cantidadVenta===1&&this.$store.productosVenta.splice(e,1)},addCantidad(t,e){t.cantidad--,t.cantidadPedida++,t.cantidadVenta=parseInt(t.cantidadVenta)+1},deleteProductosVenta(t,e){this.$store.productosVenta.splice(e,1)},redondeo(t){return Math.round(t*100)/100},clickDetalleProducto(t){const e=this.$store.productosVenta.find(d=>d.id===t.id);e?e.cantidadVenta+=1:(this.precio==="PRECIO 1"&&(t.precioVenta=t.precio1),this.precio==="PRECIO 2"&&(t.precioVenta=t.precio2),this.precio==="PRECIO 3"&&(t.precioVenta=t.precio3),this.precio==="PRECIO 4"&&(t.precioVenta=t.precio4),this.precio==="PRECIO 5"&&(t.precioVenta=t.precio5),this.precio==="PRECIO 6"&&(t.precioVenta=t.precio6),this.$store.productosVenta.push({id:t.id,nombre:t.nombre,cantidadVenta:1,precioVenta:t.precioVenta,costoUnitario:t.costo,stock:t.stock,image:t.image,visible:!0}))},clickSale(){this.saleDialog=!0,this.descuento="",this.efectivo="",this.client={nit:"0",nombre:"SN"},this.totalSale=0,this.$store.productosVenta.forEach(t=>{this.totalSale=this.totalSale+parseFloat(t.precioVenta)*parseFloat(t.cantidadVenta),this.totalSale2=this.totalSale}),this.totalSale=this.totalSale.toFixed(2)},vaciarCanasta(){this.$store.productosVenta=[]},searchProductsOrder(t){t===""&&(this.products=this.productsAll),t==="Alfab\xE9tico"&&(this.products=this.productsAll.sort((e,d)=>e.nombre.localeCompare(d.nombre))),t==="Producto m\xE1s vendido"&&(this.products=this.productsAll.sort((e,d)=>d.cantidadVentas-e.cantidadVentas)),t==="Producto menos vendido"&&(this.products=this.productsAll.sort((e,d)=>e.cantidadVentas+d.cantidadVentas)),t==="Ultimas unidades disponibles"&&(this.products=this.productsAll.sort((e,d)=>e.stock-d.stock))},searchProductsCategory(t){t===""?this.products=this.productsAll:this.products=this.productsAll.filter(e=>e.category_id===t)},medidasGet(){this.$axios.get("medidas").then(t=>{this.medidas=this.medidas.concat(t.data)})},searchProducts(){this.search===""?this.products=this.productsAll:this.products=this.productsAll.filter(t=>t.nombre.toLowerCase().includes(this.search.toLowerCase()))},categoriesGet(){this.$axios.get("categories").then(t=>{this.categories=this.categories.concat(t.data)})},productsGet(){this.loading=!0,this.$axios.get("products").then(t=>{this.loading=!1,this.products=t.data,this.productsAll=t.data})},searchClient(t){this.loading=!0,this.$axios.post("searchClient",{nit:t}).then(e=>{e.data.nombre!==void 0&&(this.client.nombre=e.data.nombre,this.client.telefono=e.data.telefono,this.client.direccion=e.data.direccion)}).finally(()=>{this.loading=!1})}},computed:{Imprimir(){return b},cambio(){const t=parseFloat(this.efectivo===""?0:this.efectivo),e=parseFloat(this.total===""?0:this.total);return Math.round((t-e)*100)/100},total(){const t=this.$store.productosVenta.reduce((e,d)=>e+d.cantidadVenta*d.precioVenta,0);return Math.round(t*100)/100},totalganancia(){let t=0;return this.$store.productosVenta.forEach(e=>{t+=(e.precioVenta-e.costoUnitario)*e.cantidadVenta}),Math.round(t*100)/100},columnsProductosVenta(){return[{name:"borrar",align:"center",label:"Borrar",field:"borrar"},{name:"nombre",align:"center",label:"Nombre",field:"nombre"},{name:"cantidadVenta",align:"center",label:"Cantidad",field:"cantidadVenta"}]},ruleNumber(){return[t=>!!t||"Campo requerido",t=>t&&t>0||"Debe ser mayor a 0"]}}},oe={class:"row"},le={class:"col-12 col-md-8"},ae={class:"row"},se={class:"col-12 col-md-3"},ie={class:"col-6 col-md-2 text-right"},ne=o("div",{class:"col-6 col-md-7 text-right"},null,-1),de={class:"col-4 col-md-3"},ce={class:"col-8 col-md-3"},re={class:"col-4 col-md-2"},ue={class:"col-12 col-md-2 text-right"},me={class:"col-12 col-md-2 text-right"},pe={class:"col-12"},he={class:"col-12 col-md-4"},Ve={class:"row"},ge={class:"col-6 text-h6 q-pt-xs q-pl-lg"},fe={class:"col-6 text-right"},be={key:0,class:"flex flex-center q-pa-lg"},_e=o("div",{class:"q-pa-lg text-grey text-center noSelect"}," A\xFAn no tienes productos en tu canasta. Haz clic sobre un producto para agregarlo. ",-1),ve={key:1},Ce=o("thead",null,[o("tr",null,[o("th",null,"#"),o("th",null,"Nombre"),o("th",null,"Cantidad"),o("th",null,"Precio"),o("th",null,"Subtotal")])],-1),Pe={class:"text-caption",style:{"max-width":"100px","white-space":"normal","overflow-wrap":"break-word","line-height":"0.9"}},xe=["onUpdate:modelValue","rules"],ye={class:"text-right"},ke=["onUpdate:modelValue"],Se={class:"text-right"},Ie={class:"text-right text-grey-8 text-bold"},Ee={class:"row"},Ue=o("div",{class:"col-7 text-grey"},"Cantidades de referencia",-1),we={class:"col-5 text-right"},Ae={class:"col-7 text-grey"},Qe={class:"col-5 text-right text-green"},Re=o("div",{class:"text-h6"},"Realizar venta",-1),Oe={class:"row"},De={class:"col-6 col-md-3"},ze={class:"col-12 col-md-3"},qe={id:"users"},Te=["value"],Be={class:"col-12 col-md-3"},Ne={class:"col-12 col-md-3"},Fe={class:"col-12 col-md-12"},Me={class:"col-12 col-md-6"},Ge={class:"col-12 col-md-6"},Le={class:"row"},je={class:"col-6 col-md-2"},He={class:"col-6 col-md-3"},Je={class:"col-6 col-md-2"},Ke={class:"col-6 col-md-3"},We={class:"col-6 col-md-2 text-center"},Xe=o("thead",null,[o("tr",null,[o("th",null,"#"),o("th",null,"Nombre"),o("th",null,"Cantidad"),o("th",null,"Precio"),o("th",null,"Subtotal")])],-1),Ye={class:"text-right"},Ze={class:"text-right text-bold"},$e={colspan:"2",class:"text-right text-bold"},et=o("td",{colspan:"2",class:"text-right text-bold"},"Total",-1),tt={class:"text-right text-bold"},ot={class:"row"},lt={class:"col-6"},at={class:"col-6"},st=o("div",{id:"myElement",class:"hidden"},null,-1);function it(t,e,d,P,s,n){const O=E("ProductsComponents"),D=E("CalculatePage");return u(),U(Z,{class:"bg-grey-3 q-pa-xs"},{default:i(()=>[o("div",oe,[o("div",le,[o("div",ae,[o("div",se,[a(c,{modelValue:s.search,"onUpdate:modelValue":[e[0]||(e[0]=l=>s.search=l),n.searchProducts],label:"Buscar",outlined:"",dense:"",class:"bg-white",loading:s.loading},{prepend:i(()=>[a(v,{name:"o_search"})]),_:1},8,["modelValue","onUpdate:modelValue","loading"])]),o("div",ie,[a(q,{"model-value":"vista",label:s.vista,color:"primary",dense:"",modelValue:s.vista,"onUpdate:modelValue":e[1]||(e[1]=l=>s.vista=l),"false-value":"lista","true-value":"tabla"},null,8,["label","modelValue"])]),ne,o("div",de,[a(f,{modelValue:s.categoriSelected,"onUpdate:modelValue":[e[2]||(e[2]=l=>s.categoriSelected=l),n.searchProductsCategory],options:s.categories,label:"Categor\xEDa",outlined:"",dense:"",class:"bg-white","emit-value":"","map-options":"","option-label":l=>l.name,"option-value":l=>l.id},null,8,["modelValue","options","option-label","option-value","onUpdate:modelValue"])]),o("div",ce,[a(f,{modelValue:s.ordenSelected,"onUpdate:modelValue":[e[3]||(e[3]=l=>s.ordenSelected=l),n.searchProductsOrder],options:s.ordenes,label:"Ordenar por",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue","options","onUpdate:modelValue"])]),o("div",re,[a(f,{modelValue:s.almacenSelected,"onUpdate:modelValue":e[4]||(e[4]=l=>s.almacenSelected=l),options:["Todo","Almacen 1","Almacen 2"],label:"Almacen",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue"])]),o("div",ue,[a(f,{modelValue:s.precio,"onUpdate:modelValue":e[5]||(e[5]=l=>s.precio=l),options:["PRECIO 1","PRECIO 2","PRECIO 3","PRECIO 4","PRECIO 5","PRECIO 6"],label:"Precio",outlined:"",dense:"",class:"bg-white","emit-value":""},null,8,["modelValue"])]),o("div",me,[a(m,{label:"Calculos",color:"green",icon:"o_calculate","no-caps":"",rounded:"",class:"bg-white",onClick:e[6]||(e[6]=l=>s.calculateDialog=!0)})]),o("div",pe,[a(O,{products:s.products,onClickDetalleProducto:n.clickDetalleProducto,precio:s.precio,almacenSelected:s.almacenSelected,vista:s.vista},null,8,["products","onClickDetalleProducto","precio","almacenSelected","vista"])])])]),o("div",he,[a(S,null,{default:i(()=>[a(p,{class:"q-pa-none q-ma-none"},{default:i(()=>[o("div",Ve,[o("div",ge,[V(" Canasta "),a(w,{modelValue:s.checkAll,"onUpdate:modelValue":[e[7]||(e[7]=l=>s.checkAll=l),n.checkAllClick],dense:"",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),o("div",fe,[a(m,{class:"text-subtitle1 text-blue-10 text-bold",style:{"text-decoration":"underline"},label:"Vaciar canasta",onClick:n.vaciarCanasta,"no-caps":"",flat:"",outline:""},null,8,["onClick"])])])]),_:1}),a(x),a(p,{class:"q-pa-none q-ma-none"},{default:i(()=>[t.$store.productosVenta.length==0?(u(),h("div",be,[a(v,{name:"o_shopping_basket",color:"grey",size:"100px"}),_e])):(u(),h("div",ve,[a(Q,{dense:"","wrap-cells":""},{default:i(()=>[Ce,o("tbody",null,[(u(!0),h(y,null,k(t.$store.productosVenta,(l,_)=>(u(),h("tr",{key:l.id},[o("td",null,[a(m,{flat:"",dense:"",onClick:g=>n.deleteProductosVenta(l,_),icon:"delete",color:"red",size:"10px",class:"q-pa-none q-ma-none"},null,8,["onClick"]),V(r(_+1),1)]),o("td",null,[o("div",Pe,r(l.nombre),1)]),o("td",null,[C(o("input",{min:"1","onUpdate:modelValue":g=>l.cantidadVenta=g,rules:n.ruleNumber,type:"number",required:"",style:{width:"50px"},class:"text-center"},null,8,xe),[[A,l.cantidadVenta]])]),o("td",ye,[C(o("input",{"onUpdate:modelValue":g=>l.precioVenta=g,type:"number",step:"0.01",style:{width:"50px"},class:"text-right"},null,8,ke),[[A,l.precioVenta]])]),o("td",Se,[V(r(n.numero2digitosRedondeado(l.cantidadVenta*l.precioVenta))+" Bs. ",1),a(w,{modelValue:l.visible,"onUpdate:modelValue":g=>l.visible=g,dense:"",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]))]),_:1}),a(p,null,{default:i(()=>[a(W,{padding:"",bordered:"",dense:"",class:"rounded-borders full-width q-pa-none q-ma-none"},{default:i(()=>[a(K,{dense:"","dense-toggle":"","expand-separator":"",label:"Total"},{header:i(()=>[a(I,null,{default:i(()=>[V(" Total ("+r(t.$store.productosVenta.length)+" productos) ",1)]),_:1}),a(I,{side:""},{default:i(()=>[o("div",Ie,[o("u",null," Bs "+r(n.total),1)])]),_:1})]),default:i(()=>[a(S,null,{default:i(()=>[a(p,null,{default:i(()=>[o("div",Ee,[Ue,o("div",we,r(t.$store.productosVenta.length),1),o("div",Ae,[V(" Ganancia "),a(v,{name:"o_info"},{default:i(()=>[a(H,{anchor:"top middle",self:"bottom middle",offset:[10,10]},{default:i(()=>[V(" Para calcular la ganancia correctamente, deber\xE1s cargar el costo unitario de todos los productos desde tu Inventario. ")]),_:1})]),_:1})]),o("div",Qe,r(n.totalganancia)+" Bs",1)])]),_:1})]),_:1})]),_:1})]),_:1}),a(m,{onClick:n.clickSale,class:"full-width","no-caps":"",label:"Confirmar venta",color:t.$store.productosVenta.length==0?"grey":"warning",disable:t.$store.productosVenta.length==0},null,8,["onClick","color","disable"])]),_:1})]),_:1})])]),a(M,{modelValue:s.saleDialog,"onUpdate:modelValue":e[21]||(e[21]=l=>s.saleDialog=l),persistent:""},{default:i(()=>[a(S,{style:{width:"750px","max-width":"90vw"}},{default:i(()=>[a(p,{class:"row items-center q-pb-none"},{default:i(()=>[Re,a(X),C(a(m,{flat:"",round:"",dense:"",icon:"close"},null,512),[[R]])]),_:1}),a(Y,{onSubmit:T(n.saleInsert,["prevent"])},{default:i(()=>[a(p,null,{default:i(()=>[o("div",Oe,[o("div",De,[a(c,{outlined:"",dense:"",label:"Numero",required:"","onUpdate:modelValue":[n.searchClient,e[8]||(e[8]=l=>s.client.nit=l)],modelValue:s.client.nit,loading:s.loading,debounce:500},null,8,["onUpdate:modelValue","modelValue","loading"])]),o("div",ze,[a(c,{outlined:"",dense:"",label:"Nombre Razon Social",required:"",modelValue:s.client.nombre,"onUpdate:modelValue":e[9]||(e[9]=l=>s.client.nombre=l),list:"users"},null,8,["modelValue"]),o("datalist",qe,[(u(!0),h(y,null,k(s.clients,l=>(u(),h("option",{value:l.nombre,key:l.id},null,8,Te))),128))])]),o("div",Be,[a(c,{outlined:"",dense:"",label:"Telefono",modelValue:s.client.telefono,"onUpdate:modelValue":e[10]||(e[10]=l=>s.client.telefono=l)},null,8,["modelValue"])]),o("div",Ne,[a(c,{outlined:"",dense:"",label:"Direccion",modelValue:s.client.direccion,"onUpdate:modelValue":e[11]||(e[11]=l=>s.client.direccion=l)},null,8,["modelValue"])]),o("div",Fe,[a(c,{outlined:"",dense:"",label:"Comentario",modelValue:s.client.comentario,"onUpdate:modelValue":e[12]||(e[12]=l=>s.client.comentario=l),style:{"text-transform":"uppercase"},type:"textarea"},null,8,["modelValue"])]),o("div",Me,[a(c,{outlined:"",dense:"",label:"Producto",modelValue:s.client.producto,"onUpdate:modelValue":e[13]||(e[13]=l=>s.client.producto=l)},null,8,["modelValue"])]),o("div",Ge,[a(c,{outlined:"",dense:"",label:"Cantidad",modelValue:s.client.cantidad,"onUpdate:modelValue":e[14]||(e[14]=l=>s.client.cantidad=l)},null,8,["modelValue"])])])]),_:1}),a(x),a(p,null,{default:i(()=>[o("div",Le,[o("div",je,[a(c,{outlined:"",dense:"",label:"TOTAL A PAGAR:",readonly:"",modelValue:n.total,"onUpdate:modelValue":e[15]||(e[15]=l=>n.total=l)},null,8,["modelValue"])]),o("div",He,[a(c,{outlined:"",dense:"",label:"EFECTIVO BS.",modelValue:s.efectivo,"onUpdate:modelValue":e[16]||(e[16]=l=>s.efectivo=l)},null,8,["modelValue"])]),o("div",Je,[a(c,{outlined:"",dense:"",label:"CAMBIO:",readonly:"",modelValue:n.cambio,"onUpdate:modelValue":e[17]||(e[17]=l=>n.cambio=l)},null,8,["modelValue"])]),o("div",Ke,[a(f,{dense:"",outlined:"",modelValue:s.metodoPago,"onUpdate:modelValue":e[18]||(e[18]=l=>s.metodoPago=l),label:"Metodo de pago",options:t.$metodos,hint:"Metodo de pago del gasto"},{prepend:i(()=>[a(v,{name:"o_payment"})]),option:i(l=>[a(L,B(N(l.itemProps)),{default:i(()=>[a(I,{class:F(l.opt=="CREDITO"?"bg-red":"")},{default:i(()=>[a(j,null,{default:i(()=>[V(r(l.opt),1)]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)]),_:1},8,["modelValue","options"])]),o("div",We,[a(m,{onClick:n.cotizacion,"no-caps":"",label:"Cotizar",color:"indigo",icon:"print",size:"10px"},null,8,["onClick"]),a(m,{onClick:n.cotizacionPdf,"no-caps":"",label:"Cotizar PDF",color:"indigo",icon:"print",size:"10px"},null,8,["onClick"])])])]),_:1}),a(Q,{dense:"","wrap-cells":""},{default:i(()=>[Xe,o("tbody",null,[(u(!0),h(y,null,k(t.$store.productosVenta,(l,_)=>(u(),h("tr",{key:l.id},[o("td",null,r(_+1),1),o("td",null,r(l.nombre),1),o("td",null,r(l.cantidadVenta),1),o("td",Ye,r(n.numero2digitosRedondeado(l.precioVenta)),1),o("td",Ze,r(n.numero2digitosRedondeado(l.cantidadVenta*l.precioVenta))+" Bs.",1)]))),128)),o("tr",null,[o("td",$e,[a(c,{label:"Descuento",modelValue:s.descuento,"onUpdate:modelValue":e[19]||(e[19]=l=>s.descuento=l),dense:"",outlined:""},null,8,["modelValue"])]),et,o("td",tt,[o("div",null,[a(c,{modelValue:s.totalSale2,"onUpdate:modelValue":e[20]||(e[20]=l=>s.totalSale2=l),outlined:"",dense:"",label:"Total Bs."},null,8,["modelValue"])])])])])]),_:1}),a(x),a(p,null,{default:i(()=>[o("div",ot,[o("div",lt,[a(m,{type:"submit",class:"full-width",icon:"o_add_circle",label:"Realizar venta",loading:s.loading,"no-caps":"",color:"green"},null,8,["loading"])]),o("div",at,[C(a(m,{class:"full-width",icon:"undo",label:"Atras","no-caps":"",color:"red",loading:s.loading},null,8,["loading"]),[[R]])])])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),s.calculateDialog?(u(),U(D,{key:0,onClose:e[22]||(e[22]=l=>s.calculateDialog=!1),productsAll:s.products,onAddProduct:n.addProduct,style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},null,8,["productsAll","onAddProduct"])):G("",!0),st]),_:1})}var Ut=z(te,[["render",it]]);export{Ut as default};
