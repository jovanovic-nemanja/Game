(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{SXoI:function(t,n,e){"use strict";e.r(n);var r=e("o0o1"),i=e.n(r),o=e("vDqi"),a=e.n(o),c=e("fpkf");function s(t,n,e,r,i,o,a){try{var c=t[o](a),s=c.value}catch(t){return void e(t)}c.done?n(s):Promise.resolve(s).then(r,i)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function a(t){s(o,r,i,a,c,"next",t)}function c(t){s(o,r,i,a,c,"throw",t)}a(void 0)}))}}var f={props:["id"],metaInfo:function(){return{title:this.title}},data:function(){return{html:{}}},computed:{title:function(){var t=this;return Object(c.a)("settings.content.footer.menu").find((function(n){return n.id===t.id})).title}},created:function(){this.fetchPageContent(this.id)},methods:{fetchPageContent:function(t){var n=this;return u(i.a.mark((function e(){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.html[t]){e.next=7;break}return e.next=3,a.a.get("/api/pages/".concat(t));case 3:r=e.sent,(o=r.data.html)||n.$router.replace("/404"),n.$set(n.html,t,o);case 7:case"end":return e.stop()}}),e)})))()}},beforeRouteUpdate:function(t,n,e){var r=this;return u(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.fetchPageContent(t.params.id);case 2:e();case 3:case"end":return n.stop()}}),n)})))()}},h=e("KHd+"),l=e("ZUTo"),p=e.n(l),d=e("Yq0q"),v=e("pSOK"),m=e("D9m0"),w=Object(h.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",[n("v-row",[this.html[this.id]?n("v-col",{domProps:{innerHTML:this._s(this.html[this.id])}}):this._e()],1)],1)}),[],!1,null,null,null);n.default=w.exports;p()(w,{VCol:d.a,VContainer:v.a,VRow:m.a})}}]);
//# sourceMappingURL=pages.js.map