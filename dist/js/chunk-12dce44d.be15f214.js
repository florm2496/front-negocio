(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12dce44d"],{"711d":function(e,t,a){"use strict";var n=a("1da1"),r=a("d4ec"),i=a("bee2"),l=(a("96cf"),a("bb36")),o=a("49c2"),s="clientes/",c=new o["a"],u=function(){function e(){Object(r["a"])(this,e)}return Object(i["a"])(e,[{key:"getToken",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=c.getToken(),console.log("tokeeeen",t),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getheaders",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getToken();case 2:return t=e.sent,a={"Content-Type":"application/json",Authorization:"Bearer "+t.access},e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getClientes",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return t=e.sent,e.prev=3,e.next=6,l["a"].get(s,{headers:t});case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e["catch"](3),console.log("error",e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"addcliente",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return a=e.sent,console.log("headerssss",t),e.next=6,l["a"].post(s,t,{headers:a});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updatecliente",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return n=e.sent,r=s+t+"/",e.next=6,l["a"].put(r,a,{headers:n});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"deletecliente",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=s+t+"/",e.next=3,this.getheaders();case 3:return n=e.sent,e.next=6,l["a"].delete(a,{headers:n});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getclientebyid",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return n=e.sent,r={dni:t,tipo:a},e.next=6,l["a"].get(s,{params:r},{headers:n});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()},{key:"getcuentascliente",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return a=e.sent,n={dni:t},e.next=6,l["a"].get(s,{params:n},{headers:a});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=new u},"991a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clientes"},[a("clientes")],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("tabla-clientes")],1)},l=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{attrs:{fluid:""}},[a("modal-cliente",{ref:"modal",on:{recargar:function(t){return e.cargar()}}}),a("b-button",{on:{click:function(t){return e.abrirmodal("crear",{})}}},[a("b-icon",{staticClass:"m-10",attrs:{icon:"plus-circle"}},[e._v("Nuevo")]),e._v("Nuevo")],1),a("b-row",[a("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[a("b-input-group",{attrs:{size:"sm"}},[a("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Escribe lo que quieras buscar"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Buscar")])],1)],1)],1)],1),a("b-col",{staticClass:"my-1",attrs:{sm:"5",md:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Clientes por pagina","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[a("b-form-select",{attrs:{id:"per-page-select",options:e.pageOptions,size:"sm"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1)],1),a("b-table",{attrs:{items:e.datos,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,"filter-included-fields":e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection,stacked:"md","empty-text":"No hay clientes registrados","show-empty":"",small:"",id:"tabla-clientes"},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"empty",fn:function(t){return[a("h6",[e._v(e._s(t.emptyText))])]}},{key:"cell(name)",fn:function(t){return[e._v(" "+e._s(t.value.first)+" "+e._s(t.value.last)+" ")]}},{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"action",attrs:{id:"modificar-cliente",size:"sm"},on:{click:function(a){return e.detallecliente(t.item)}}},[a("b-icon",{attrs:{icon:"tag-fill"}})],1),a("b-button",{staticClass:"action",attrs:{id:"cuentas-cliente",size:"sm"},on:{click:function(a){return e.cuentascliente(t.item)}}},[a("b-icon",{attrs:{icon:"card-checklist"}})],1),a("b-tooltip",{attrs:{target:"modificar-cliente",triggers:"hover"}},[e._v(" Ver detalles ")]),a("b-tooltip",{attrs:{target:"cuentas-cliente",triggers:"hover"}},[e._v(" Cuentas de este cliente ")])]}}])}),a("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1),a("b-modal",{attrs:{id:e.infoModal.id,"ok-only":""},on:{hide:e.resetInfoModal}},[a("pre",[e._v("Seguro quiere eliminar este cliente ?")])]),a("b-modal",{attrs:{id:this.cliente_id,"ok-only":""},on:{hide:e.resetInfoModal}},[a("pre",[e._v("Eliminar")])])],1)},s=[],c=a("1da1"),u=(a("96cf"),a("d81d"),a("4de4"),a("711d")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:this.titulo,"ok-title":"Guardar"},on:{show:this.resetModal,hidden:this.resetModal,ok:this.handleOk}},[a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),this.handleSubmit.apply(null,arguments)}}},[a("b-row",[a("b-col",[a("b-form-group",{attrs:{label:"Nombre","label-for":"nombre_id","invalid-feedback":"Debe ingresar el nombre",state:e.nombreState}},[a("b-form-input",{attrs:{id:"nombre_id",state:e.nombreState,required:"",type:"text"},model:{value:e.cliente.nombre,callback:function(t){e.$set(e.cliente,"nombre",t)},expression:"cliente.nombre"}})],1),a("b-form-group",{attrs:{label:"DNI","label-for":"dni_id","invalid-feedback":"Debe ingresar el DNI",state:e.dniState}},[a("b-form-input",{attrs:{id:"dni_id",state:e.dniState,type:"number",required:""},model:{value:e.cliente.dni,callback:function(t){e.$set(e.cliente,"dni",t)},expression:"cliente.dni"}})],1),a("b-form-group",{attrs:{label:"Fecha de nacimiento","label-for":"fc_id","invalid-feedback":"Ingrese fecha de nacimiento",state:e.fcState}},[a("b-form-input",{attrs:{id:"fc_id",state:e.fcState,type:"date",required:""},model:{value:e.cliente.fecha_nacimiento,callback:function(t){e.$set(e.cliente,"fecha_nacimiento",t)},expression:"cliente.fecha_nacimiento"}})],1),a("b-form-group",{attrs:{label:"Direccion","label-for":"direccion_id","invalid-feedback":"Debe ingresar la direccion",state:e.direccionState}},[a("b-form-input",{attrs:{id:"direccion_id",state:e.direccionState,type:"text",required:""},model:{value:e.domicilio.direccion,callback:function(t){e.$set(e.domicilio,"direccion",t)},expression:"domicilio.direccion"}})],1),a("b-form-group",{attrs:{label:"Localidad","label-for":"localidad_id","invalid-feedback":"Debe ingresar la localidad",state:e.localidadState}},[a("b-form-input",{attrs:{id:"localidas_id",state:e.localidadState,type:"text",required:""},model:{value:e.domicilio.localidad,callback:function(t){e.$set(e.domicilio,"localidad",t)},expression:"domicilio.localidad"}})],1),a("b-form-group",{attrs:{label:"Boleta","label-for":"boleta_id","invalid-feedback":"Debe ingresar la boleta",state:e.boletaState}},[a("b-form-input",{attrs:{id:"boleta_id",state:e.boletaState,type:"number"},model:{value:e.cliente.boleta_sueldo,callback:function(t){e.$set(e.cliente,"boleta_sueldo",t)},expression:"cliente.boleta_sueldo"}})],1),a("b-form-group",{attrs:{label:"Referente","label-for":"referente_id"}},[a("b-form-input",{attrs:{id:"referente_id"},model:{value:e.cliente.referente,callback:function(t){e.$set(e.cliente,"referente",t)},expression:"cliente.referente"}})],1),a("b-form-group",{attrs:{label:"Email","label-for":"email_id"}},[a("b-form-input",{attrs:{id:"email_id"},model:{value:e.cliente.email,callback:function(t){e.$set(e.cliente,"email",t)},expression:"cliente.email"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{label:"Apellido","label-for":"apellido_id","invalid-feedback":"Debe ingresar el apellido",state:e.apellidoState}},[a("b-form-input",{attrs:{id:"apellido_id",state:e.apellidoState,type:"text",required:""},model:{value:e.cliente.apellido,callback:function(t){e.$set(e.cliente,"apellido",t)},expression:"cliente.apellido"}})],1),a("b-form-group",{attrs:{label:"Telefono","label-for":"telefono_id","invalid-feedback":"Debe ingresar el telefono",state:e.telefonoState}},[a("b-form-input",{attrs:{id:"telefono_id",state:e.telefonoState,type:"number",required:""},model:{value:e.cliente.telefono,callback:function(t){e.$set(e.cliente,"telefono",t)},expression:"cliente.telefono"}})],1),a("b-form-group",{attrs:{label:"Edad","label-for":"edad_id","invalid-feedback":"Debe ingresar la edad",state:e.edadState}},[a("b-form-input",{attrs:{id:"edad_id",state:e.edadState,type:"number",required:""},model:{value:e.cliente.edad,callback:function(t){e.$set(e.cliente,"edad",t)},expression:"cliente.edad"}})],1),a("b-form-group",{attrs:{label:"Codigo postal","label-for":"codigo_postal_id","invalid-feedback":"Ingrese el codigo postal",state:e.cpState}},[a("b-form-input",{attrs:{id:"codigo_postal_id",state:e.cpState,type:"number",required:""},model:{value:e.domicilio.codigo_postal,callback:function(t){e.$set(e.domicilio,"codigo_postal",t)},expression:"domicilio.codigo_postal"}})],1),a("b-form-group",{attrs:{label:"Lugar de trabajo","label-for":"lugar_trabajo_id","invalid-feedback":"Ingrese el lugar de trabajo",state:e.lugar_trabajoState}},[a("b-form-input",{attrs:{id:"lugar_trabajo_id",state:e.lugar_trabajoState,required:""},model:{value:e.cliente.lugar_trabajo,callback:function(t){e.$set(e.cliente,"lugar_trabajo",t)},expression:"cliente.lugar_trabajo"}})],1),a("b-form-group",{attrs:{label:"Sueldo","label-for":"sueldo_id","invalid-feedback":"Debe ingresar el sueldo",state:e.sueldoState}},[a("b-form-input",{attrs:{id:"sueldo_id",state:e.sueldoState,type:"number",required:""},model:{value:e.cliente.sueldo,callback:function(t){e.$set(e.cliente,"sueldo",t)},expression:"cliente.sueldo"}})],1),a("b-form-group",[a("b-form-checkbox",{attrs:{id:"garante_id",status:"garante",name:"garante",value:"true","unchecked-value":"false"},model:{value:e.cliente.garante,callback:function(t){e.$set(e.cliente,"garante",t)},expression:"cliente.garante"}},[e._v(" Garante ")])],1),a("b-form-group",[a("b-form-checkbox",{attrs:{id:"solicitante_id",status:"solicitante",name:"solicitante",value:"true","unchecked-value":"false"},model:{value:e.cliente.solicitante,callback:function(t){e.$set(e.cliente,"solicitante",t)},expression:"cliente.solicitante"}},[e._v(" Solicitante ")])],1)],1)],1),a("b-alert",{attrs:{variant:"warning",show:e.alert}},[e._v("Complete todos los campos")])],1)])],1)},f=[],b={name:"ModalCliente",data:function(){return{doms:[],domicilio:{localidad:"",codigo_postal:4172,direccion:"hola bebe"},cliente:{nombre:"",apellido:"",dni:"",telefono:"",sueldo:"",fecha_nacimiento:"",edad:"",boleta_sueldo:"",lugar_trabajo:"",tipo:"",garante:!1,solicitante:!1,email:"",referente:"",direccion:""},activo:"",titulo:"",nombreState:null,apellidoState:null,dniState:null,direccionState:null,telefonoState:null,sueldoState:null,boletaState:null,fcState:null,cpState:null,edadState:null,localidadState:null,referenteState:null,lugar_trabajoState:null,emailState:null,response:null,alert:!1,accion:""}},methods:{checkFormValidity:function(){var e=this.$refs.form.checkValidity();return 0==e&&(this.alert=!0),e},resetModal:function(){this.nombre="",this.nombreState=null,this.telefono="",this.telefonoState=null,this.apellido="",this.apellidoSTtae=null,this.sueldo="",this.sueldoState=null,this.boleta="",this.boletaState=null,this.dni="",this.dniState=null,this.direccionState=null,this.direccion="",this.tipo="",this.alert=!1},handleOk:function(e){e.preventDefault(),this.handleSubmit()},cerrarModal:function(){this.$bvModal.hide("modal-prevent-closing")},handleSubmit:function(){this.checkFormValidity()&&(console.log(this.accion),"crear"==this.accion?(console.log("lalma crear"),this.crearcliente()):"modificar"==this.accion?(this.modificarcliente(),console.log("lalma mod")):console.log("lalma nada"),this.$nextTick((function(){})))},recargartabla:function(){this.$emit("avisar")},showModal:function(e,t){this.$refs["modal"].show(),"modificar"==e?(this.cliente=t,this.domicilio=this.cliente.domicilio,this.titulo="Modificar cliente"):"crear"==e&&(this.cliente={},this.titulo="Nuevo cliente"),this.accion=e},crearcliente:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={nombre:e.cliente.nombre,apellido:e.cliente.apellido,dni:parseInt(e.cliente.dni),boleta_sueldo:parseInt(e.cliente.boleta_sueldo),telefono:parseInt(e.cliente.telefono),sueldo:parseFloat(e.cliente.sueldo),referente:e.cliente.referente,domicilio:e.domicilio,lugar_trabajo:e.cliente.lugar_trabajo,fecha_nacimiento:e.cliente.fecha_nacimiento,edad:e.cliente.edad,email:e.cliente.email,garante:e.cliente.garante,solicitante:e.cliente.solicitante},t.prev=1,t.next=4,u["a"].addcliente(a);case 4:n=t.sent,201==n.status&&(e.$swal("En buena hora!","Un nuevo cliente fue agregado","success"),e.cerrarModal(),e.$emit("recargar")),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0),e.$swal("Error!Muestre esta ventana al desarrollador",t.t0.message,"warning");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},modificarcliente:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].updatecliente(e.cliente.id,e.cliente);case 3:a=t.sent,200==a.status&&(e.$swal("Bien hecho","El cliente fue modificado con exito","success"),e.cerrarModal(),e.$emit("recargar")),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$swal("Error!Muestre esta ventana al desarrollador",t.t0.message,"warning");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},p=b,m=a("2877"),h=Object(m["a"])(p,d,f,!1,null,null,null),g=h.exports,v={name:"TablaClientes",components:{ModalCliente:g},data:function(){return{objetocliente:null,datos:[],cliente_id:"0",totalRows:1,currentPage:1,perPage:10,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],display:!1,consulta:null,resultdelete:"",accion:"",fields:[{key:"numero_cliente",label:"Numero de cliente",class:"text-center"},{key:"apellido",label:"Apellido",sortable:!0,sortDirection:"desc"},{key:"nombre",label:"Nombre",sortable:!0,class:"text-center"},{key:"dni",label:"DNI",sortable:!0,class:"text-center"},{key:"telefono",label:"Telefono",sortable:!0,class:"text-center"},{key:"actions",label:"Acciones"}],infoModal:{id:"info-modal",title:"",content:""}}},computed:{sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},created:function(){this.getclientes()},mounted:function(){this.totalRows=this.datos.length},methods:{deletemodal:function(e,t,a){this.infoModal.title="Row index: ".concat(t),this.infoModal.content=JSON.stringify(e,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,a)},getclientes:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].getClientes();case 2:a=t.sent,e.datos=a,e.display=!0;case 5:case"end":return t.stop()}}),t)})))()},cargar:function(){this.getclientes()},cuentascliente:function(e){var t=e.nombre+" "+e.apellido;this.$router.push({path:"/cuentascliente",query:{dni:e.dni,nombre:t}})},detallecliente:function(e){this.$router.push({path:"/editarcliente",query:{dni:e.dni}})},getcliente:function(e){return this.objetocliente=Object.assign({},e),this.objetocliente},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},abrirmodal:function(e,t){this.$refs.modal.showModal(e,t)},sendcliente:function(e){var t=e;return t}}},k=v,_=(a("bed1"),Object(m["a"])(k,o,s,!1,null,null,null)),x=_.exports,y={name:"Clientes",components:{TablaClientes:x},data:function(){return{}},computed:{}},w=y,S=Object(m["a"])(w,i,l,!1,null,null,null),$=S.exports,j={name:"ViewClientes",components:{Clientes:$}},R=j,O=Object(m["a"])(R,n,r,!1,null,null,null);t["default"]=O.exports},a95a:function(e,t,a){},bed1:function(e,t,a){"use strict";a("a95a")}}]);
//# sourceMappingURL=chunk-12dce44d.be15f214.js.map