(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-482050f6"],{"6f11":function(e,t,n){"use strict";n("e528")},"711d":function(e,t,n){"use strict";var r=n("1da1"),a=n("d4ec"),s=n("bee2"),i=(n("96cf"),n("bb36")),o=n("49c2"),u="clientes/",c=new o["a"],l=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,[{key:"getToken",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=c.getToken(),console.log("tokeeeen",t),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getheaders",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getToken();case 2:return t=e.sent,n={"Content-Type":"application/json",Authorization:"Bearer "+t.access},e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getClientes",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return t=e.sent,n=u+"viewset/",e.prev=4,e.next=7,i["a"].get(n,{headers:t});case 7:return r=e.sent,e.abrupt("return",r.data);case 11:e.prev=11,e.t0=e["catch"](4),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"getClienteById",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return n=e.sent,r=u+"viewset/"+t+"/",e.prev=4,e.next=7,i["a"].get(r,{headers:n});case 7:return a=e.sent,e.abrupt("return",a.data);case 11:e.prev=11,e.t0=e["catch"](4),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,this,[[4,11]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addcliente",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return n=e.sent,r=u+"viewset/",e.next=6,i["a"].post(r,t,{headers:n});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateCliente",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return r=e.sent,a=u+"viewset/"+t+"/",e.next=6,i["a"].put(a,n,{headers:r});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deletecliente",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=u+"bajacliente/",e.next=3,this.getheaders();case 3:return r=e.sent,e.next=6,i["a"].post(n,t,{headers:r});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getClienteCuenta",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=u+"getclientecuenta/",e.next=3,this.getheaders();case 3:return r=e.sent,a={busqueda:t},e.next=7,i["a"].get(n,{params:a},{headers:r});case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getcuentascliente",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getheaders();case 2:return n=e.sent,r={dni:t},e.next=6,i["a"].get(u,{params:r},{headers:n});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["a"]=new l},c724:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{ref:"modal",attrs:{id:"modal",name:"modal",size:"lg",title:"Clientes","ok-only":""},scopedSlots:e._u([{key:"modal-header",fn:function(t){var r=t.close;return[n("b-button",{attrs:{size:"sm",variant:"outline-danger"},on:{click:function(e){return r()}}},[n("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]}}])},[n("b-container",{attrs:{fluid:""},scopedSlots:e._u([{key:"modal-footer",fn:function(){},proxy:!0}])},[n("b-row",[n("b-col",{staticStyle:{"margin-bottom":"30px","margin-top":"0px"},attrs:{lg:"6"}},[n("b-form-group",{staticClass:"mb-0",attrs:{label:"","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Escribe lo que quieras buscar"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Buscar")])],1)],1)],1)],1)],1),n("b-table",{attrs:{items:e.datos,fields:e.fields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,"filter-included-fields":e.filterOn,"sort-by":e.sortBy,"sort-desc":e.sortDesc,"sort-direction":e.sortDirection,stacked:"md","empty-text":"No hay clientes registrados","show-empty":"",small:"",id:"tabla-clientes"},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(name)",fn:function(t){return[e._v(" "+e._s(t.value.first)+" "+e._s(t.value.last)+" ")]}},{key:"empty",fn:function(t){return[n("h6",[e._v(e._s(t.emptyText))])]}},{key:"cell(actions)",fn:function(t){return[n("b-button",{attrs:{size:"sm"},on:{click:function(n){return e.seleccionar(t.item)}}},[n("b-icon",{attrs:{icon:"hand-thumbs-up"}})],1)]}}])}),n("b-col",{staticClass:"my-1",attrs:{sm:"7",md:"6"}},[n("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)],1)},a=[],s=n("1da1"),i=(n("96cf"),n("d81d"),n("4de4"),n("711d")),o={name:"ModalTablaClientes",data:function(){return{objetocliente:null,datos:[],cliente_id:"0",totalRows:1,currentPage:1,perPage:10,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filterOn:[],display:!1,consulta:null,resultdelete:"",accion:"",fields:[{key:"apellido",label:"Apellido",sortable:!0,sortDirection:"desc"},{key:"nombre",label:"Nombre",sortable:!0,class:"text-center"},{key:"dni",label:"DNI",sortable:!0,class:"text-center"},{key:"telefono",label:"Telefono",sortable:!0,class:"text-center"},{key:"actions",label:"Elegir"}],infoModal:{id:"info-modal",title:"",content:""}}},computed:{sortOptions:function(){return this.fields.filter((function(e){return e.sortable})).map((function(e){return{text:e.label,value:e.key}}))}},created:function(){this.getclientes()},mounted:function(){this.totalRows=this.datos.length},methods:{getclientes:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].getClientes();case 2:n=t.sent,e.datos=n,e.display=!0;case 5:case"end":return t.stop()}}),t)})))()},showModal:function(){this.$refs["modal"].show()},hideModal:function(){this.$refs["modal"].hide()},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},sendcliente:function(e){var t=e;return t},getcliente:function(e){return this.objetocliente=Object.assign({},e),this.objetocliente},seleccionar:function(e){this.$emit("avisar",this.getcliente(e)),this.hideModal()},cargar:function(){this.getclientes()}}},u=o,c=(n("6f11"),n("2877")),l=Object(c["a"])(u,r,a,!1,null,null,null);t["default"]=l.exports},e528:function(e,t,n){}}]);
//# sourceMappingURL=chunk-482050f6.66df908d.js.map