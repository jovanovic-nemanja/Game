(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ST2f:function(t,e,a){"use strict";var r=a("fpkf"),n={name:"UserLink",props:["user"],computed:{providers:function(){return Object(r.a)("oauth")}}},i=a("KHd+"),o=a("ZUTo"),s=a.n(o),l=a("ghKu"),c=a("zCDB"),u=a("Ey0z"),d=a("rdoz"),p=a("Oi+f"),m=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-avatar",{attrs:{size:"25"}},[a("v-img",{attrs:{src:t.user.avatar_url}})],1),t._v(" "),a("router-link",{staticClass:"mr-1",attrs:{to:{name:"admin.users.show",params:{id:t.user.id}}}},[t._v(t._s(t.user.name))]),t._v(" "),t.user.is_active?t._e():a("v-chip",{attrs:{color:"error",small:"",label:""}},[t._v(t._s(t.$t("Blocked")))]),t._v(" "),t.user.is_admin?a("v-chip",{attrs:{color:"primary",small:"",outlined:"",label:""}},[t._v(t._s(t.$t("Admin")))]):t.user.is_bot?a("v-chip",{attrs:{color:"warning",small:"",outlined:"",label:""}},[t._v(t._s(t.$t("Bot")))]):t._e(),t._v(" "),t._l(t.user.profiles,(function(e){return a("v-tooltip",{key:e.id,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on;return[a("v-icon",t._g({attrs:{small:""}},n),[t._v("mdi-"+t._s(t.providers[e.provider_name].mdi||e.provider_name))])]}}],null,!0)},[t._v(" "),a("span",[t._v(t._s(e.provider_name)+" "+t._s(t.$t("profile ID"))+" "+t._s(e.provider_user_id))])])})),t._v(" "),t.user.referrer?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-icon",t._g({attrs:{small:""}},r),[t._v("mdi-account-arrow-left")])]}}],null,!1,2018221753)},[t._v(" "),a("span",[t._v(t._s(t.$t("Referred by {0}",[t.user.referrer.name])))])]):t._e(),t._v(" "),t.user.two_factor_auth_enabled?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-icon",t._g({attrs:{small:""}},r),[t._v("mdi-two-factor-authentication")])]}}],null,!1,2737254619)},[t._v(" "),a("span",[t._v(t._s(t.$t("Two-factor authentication enabled")))])]):t._e()],2)}),[],!1,null,null,null);e.a=m.exports;s()(m,{VAvatar:l.a,VChip:c.a,VIcon:u.a,VImg:d.a,VTooltip:p.a})},ZMUr:function(t,e,a){"use strict";var r=a("o0o1"),n=a.n(r),i=a("vDqi"),o=a.n(i),s=a("L2JU"),l=a("ZXch"),c=a("/rcJ");function u(t,e,a,r,n,i,o){try{var s=t[i](o),l=s.value}catch(t){return void a(t)}s.done?e(l):Promise.resolve(l).then(r,n)}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v={name:"DataTable",props:{api:{type:String,required:!0},filters:{type:Object,required:!1,default:function(){return{}}},headers:{type:Array,required:!0},sortBy:{type:String,required:!1,default:"id"},sortDesc:{type:Boolean,required:!1,default:!0},searchEnabled:{type:Boolean,required:!1,default:!1},searchLabel:{type:String,required:!1,default:null},hideFooter:{type:Boolean,required:!1,default:!1}},data:function(){return{loading:!0,options:{},items:[],itemsTotal:0}},computed:p(p({},Object(s.c)({cacheGet:"cache/get"})),{},{cacheKey:function(){return"datatable."+this.$route.name},footerProps:function(){return{"items-per-page-options":[5,10,25,50],"items-per-page-text":this.$t("Rows per page")}},sortDirection:function(){return this.options.sortDesc?"desc":"asc"},slotHeaderMap:function(){return this.headers.reduce((function(t,e){return t["item."+e.value]=e,t}),{})}}),watch:{filters:function(t){this.fetchData()}},created:function(){this.options=this.cacheGet(this.cacheKey)||{page:1,itemsPerPage:10,sortBy:this.sortBy,sortDesc:this.sortDesc,search:null}},methods:p(p({},Object(s.b)({cachePut:"cache/put"})),{},{get:function(){return l.e.apply(void 0,arguments)},format:function(t,e){return"function"==typeof c[t]?c[t](e):e},updateDataTableOptions:function(t){var e=t.page,a=t.itemsPerPage,r=t.sortBy,n=t.sortDesc;this.options=p(p({},this.options),{},{page:e,itemsPerPage:a,sortBy:r[0],sortDesc:n[0]}),this.cacheOptions(),this.fetchData()},cacheOptions:function(){this.cachePut({key:this.cacheKey,value:this.options})},clear:function(){this.options.search=null,this.search()},search:function(){this.fetchData()},fetchData:function(){var t,e=this;return(t=n.a.mark((function t(){var a,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,o.a.get(e.api,{params:p({page:e.options.page,items_per_page:e.options.itemsPerPage,sort_by:e.options.sortBy,sort_direction:e.sortDirection,search:e.options.search},e.filters)});case 3:a=t.sent,r=a.data,e.items=r.items,e.itemsTotal=r.count,e.loading=!1;case 8:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function o(t){u(i,r,n,o,s,"next",t)}function s(t){u(i,r,n,o,s,"throw",t)}o(void 0)}))})()}})},f=a("KHd+"),h=a("ZUTo"),_=a.n(h),g=a("Yq0q"),b=a("j+oE"),y=a("S9TP"),w=a("D9m0"),O=a("MSko"),D=a("hlRy"),P=Object(f.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.searchEnabled?a("v-row",{attrs:{justify:"end"}},[a("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("v-text-field",{attrs:{label:t.searchLabel||t.$t("Search"),"append-outer-icon":"mdi-magnify","single-line":"","hide-details":!0,clearable:""},on:{"click:clear":t.clear,"click:append-outer":t.search},model:{value:t.options.search,callback:function(e){t.$set(t.options,"search",e)},expression:"options.search"}})],1)],1)],1):t._e(),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,page:t.options.page,"sort-by":t.options.sortBy,"sort-desc":t.options.sortDesc,"items-per-page":t.options.itemsPerPage,"footer-props":t.footerProps,"server-items-length":t.itemsTotal,loading:t.loading,"must-sort":!0,"hide-default-footer":t.hideFooter,"no-data-text":t.$t("No data found"),"no-results-text":t.$t("No data found")},on:{"update:options":t.updateDataTableOptions},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(Array(t.options.itemsPerPage).fill(0),(function(t,e){return a("div",{key:e,staticClass:"align-center my-7"},[a("v-skeleton-loader",{attrs:{type:"text"}})],1)}))},proxy:!0},t._l(t.slotHeaderMap,(function(e,a){return{key:a,fn:function(r){var n=r.item;return[t.$scopedSlots[a]?t._t(a,null,{item:n}):[t._v("\n        "+t._s(e.format?t.format(e.format,t.get(n,e.value)):t.get(n,e.value))+"\n      ")]]}}}))],null,!0)})],1)}),[],!1,null,null,null);e.a=P.exports;_()(P,{VCol:g.a,VDataTable:b.a,VForm:y.a,VRow:w.a,VSkeletonLoader:O.a,VTextField:D.a})},pabe:function(t,e,a){"use strict";a.r(e);var r=a("ZMUr"),n=a("ST2f"),i=a("vSzF"),o={middleware:["auth","verified","2fa_passed","admin"],components:{DataTable:r.a,UserLink:n.a,GameMenu:i.a},metaInfo:function(){return{title:this.$t("Games")}},computed:{headers:function(){return[{text:this.$t("ID"),value:"id"},{text:this.$t("Name"),value:"name",sortable:!1},{text:this.$t("Game"),value:"title"},{text:this.$t("Bet"),value:"bet",align:"right",format:"decimal"},{text:this.$t("Win"),value:"win",align:"right",format:"decimal"},{text:this.$t("Profit"),value:"profit",align:"right",format:"decimal"},{text:this.$t("Created at"),value:"created_at",align:"right"},{value:"actions",sortable:!1,align:"right"}]}}},s=a("KHd+"),l=a("ZUTo"),c=a.n(l),u=a("sK+t"),d=a("mdmw"),p=a("Yq0q"),m=a("pSOK"),v=a("D9m0"),f=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-title",[this._v("\n          "+this._s(this.$t("Games"))+"\n        ")]),this._v(" "),e("v-card-text",[e("data-table",{attrs:{api:"/api/admin/games",headers:this.headers,"search-enabled":"","search-label":this.$t("Search by user ID or name")},scopedSlots:this._u([{key:"item.name",fn:function(t){var a=t.item;return[e("user-link",{attrs:{user:a.account.user}})]}},{key:"item.actions",fn:function(t){var a=t.item;return[e("game-menu",{attrs:{id:a.id,small:""}})]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;c()(f,{VCard:u.a,VCardText:d.c,VCardTitle:d.d,VCol:p.a,VContainer:m.a,VRow:v.a})},vSzF:function(t,e,a){"use strict";var r={props:["id","small"]},n=a("KHd+"),i=a("ZUTo"),o=a.n(i),s=a("gzZi"),l=a("Ey0z"),c=a("iGBT"),u=a("2hOt"),d=a("XSMC"),p=a("NMP6"),m=a("5Emp"),v=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{icon:""}},r),[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),a("v-list",[a("v-list-item",{attrs:{to:{name:"admin.games.show",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),a("v-list-item",{attrs:{to:{name:"admin.games.details",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-table-eye")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Details")))])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=v.exports;o()(v,{VBtn:s.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:d.a,VListItemIcon:p.a,VListItemTitle:d.c,VMenu:m.a})}}]);
//# sourceMappingURL=admin-games.js.map