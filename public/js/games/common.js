(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/ULh":function(t,e,a){var n=a("w/oY");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},"/hoC":function(t,e,a){"use strict";var n=a("L2JU"),r=a("ZXch"),i=a("C3Ci"),o=a("OY7U"),s=a("fYW3"),l=a("VA6O"),c=a.n(l);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var m={mixins:[i.a,o.a,s.a],props:{betLabel:{type:String,required:!1,default:""},loading:{type:Boolean,required:!0},playing:{type:Boolean,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{bet:null}},computed:d(d({},Object(n.d)("auth",["account"])),{},{defaultBet:function(){return parseInt(this.config.default_bet_amount,10)},minBet:function(){return parseInt(this.config.min_bet,10)},maxBet:function(){return parseInt(this.config.max_bet,10)},betStep:function(){return parseInt(this.config.bet_change_amount,10)},isPlayDisabled:function(){return!this.provablyFairGame.hash||this.playing||this.bet>this.account.balance}}),watch:{bet:function(t,e){this.$emit("bet-change",Object(r.g)(t)?t:0)}},created:function(){var t=this;this.$nextTick((function(){t.bet=t.defaultBet}))},methods:{play:function(){this.sound(c.a),this.$emit("play",this.bet)},decreaseBet:function(){this.sound(c.a);var t=this.bet-this.betStep;this.bet=Math.max(this.minBet,t)},increaseBet:function(){this.sound(c.a);var t=this.bet+this.betStep;this.bet=Math.min(this.maxBet,t)}}},p=(a("xylR"),a("KHd+")),f=a("ZUTo"),b=a.n(f),h=a("gzZi"),y=a("S9TP"),g=a("Ey0z"),_=a("hlRy"),x=Object(p.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.play(e)}},model:{value:t.formIsValid,callback:function(e){t.formIsValid=e},expression:"formIsValid"}},[a("div",{staticClass:"d-flex justify-center flex-wrap mt-3"},[t._t("before-bet-input"),t._v(" "),a("v-text-field",{staticClass:"bet-input text-center",attrs:{dense:"",outlined:"","full-width":!1,label:t.betLabel||t.$t("Bet"),disabled:t.playing,rules:[t.validationInteger,function(e){return t.validationMin(e,t.minBet)},function(e){return t.validationMax(e,Math.min(Math.floor(t.account.balance),t.maxBet))}],"prepend-inner-icon":"mdi-minus","append-icon":"mdi-plus"},on:{"click:prepend-inner":t.decreaseBet,"click:append":t.increaseBet},scopedSlots:t._u([{key:"prepend-inner",fn:function(){return[a("v-btn",{attrs:{small:"",text:"",icon:"",color:"primary"},on:{click:function(e){t.bet=t.minBet}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-arrow-down")])],1),t._v(" "),a("v-btn",{attrs:{small:"",text:"",icon:"",color:"primary"},on:{click:t.decreaseBet}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-minus")])],1)]},proxy:!0},{key:"append",fn:function(){return[a("v-btn",{attrs:{small:"",text:"",icon:"",color:"primary"},on:{click:t.increaseBet}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-plus")])],1),t._v(" "),a("v-btn",{attrs:{small:"",text:"",icon:"",color:"primary"},on:{click:function(e){t.bet=t.maxBet}}},[a("v-icon",{attrs:{small:""}},[t._v("mdi-arrow-up")])],1)]},proxy:!0}]),model:{value:t.bet,callback:function(e){t.bet=t._n(e)},expression:"bet"}}),t._v(" "),t._t("after-bet-input"),t._v(" "),a("v-btn",{staticClass:"ml-2",attrs:{type:"submit",color:"primary",loading:t.loading,disabled:t.disabled||!t.formIsValid||t.isPlayDisabled}},[t._v("\n      "+t._s(t.$t("Play"))+"\n    ")])],2)])}),[],!1,null,"2ddf1d3d",null);e.a=x.exports;b()(x,{VBtn:h.a,VForm:y.a,VIcon:g.a,VTextField:_.a})},"1kUc":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".playing-card-container[data-v-3ad74638] {\n  perspective: 600px;\n}\n.playing-card-container .playing-card[data-v-3ad74638] {\n  position: relative;\n  width: 5em;\n  height: 7em;\n  transform-style: preserve-3d;\n  transition: all 0.5s ease-out;\n}\n.playing-card-container .playing-card.inactive[data-v-3ad74638] {\n  opacity: 0.4;\n}\n.playing-card-container .playing-card .front[data-v-3ad74638], .playing-card-container .playing-card .back[data-v-3ad74638] {\n  border-radius: 0.75em;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  backface-visibility: hidden;\n}\n.playing-card-container .playing-card .front[data-v-3ad74638] {\n  background-color: var(--v-secondary-lighten1);\n}\n.playing-card-container .playing-card .back[data-v-3ad74638] {\n  transform: rotateY(180deg);\n  background-color: var(--v-primary-darken4);\n}\n.playing-card-container .playing-card.face-down[data-v-3ad74638] {\n  transform: rotateY(180deg);\n}\n.playing-card-container .playing-card.clickable[data-v-3ad74638] {\n  cursor: pointer;\n}",""])},"21nP":function(t,e,a){var n=a("1kUc");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},"3G0u":function(t,e,a){"use strict";var n=a("JzGf");a.n(n).a},"4iZO":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".chip-bet[data-v-6ba00241] {\n  color: var(--v-primary-base);\n  background: var(--v-primary-lighten4);\n  border: 2px solid var(--v-primary-base);\n}\n.chip-win[data-v-6ba00241] {\n  background: var(--v-primary-base);\n  border: 2px solid var(--v-primary-lighten3);\n}\n.chip-enter[data-v-6ba00241], .chip-leave-to[data-v-6ba00241] {\n  transform: translateY(100vh);\n  opacity: 1;\n}\n.chip-enter-active[data-v-6ba00241], .chip-leave-active[data-v-6ba00241] {\n  transition: all 0.4s;\n}\n.bet-win-container[data-v-6ba00241] {\n  perspective: 300px;\n}\n.bet-win-container .bet-win[data-v-6ba00241] {\n  position: relative;\n  transform-style: preserve-3d;\n  transition: all 0.4s ease-out;\n}\n.bet-win-container .bet-win .front[data-v-6ba00241], .bet-win-container .bet-win .back[data-v-6ba00241] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  transition: all 2s;\n}\n.bet-win-container .bet-win .back[data-v-6ba00241] {\n  transform: rotateY(180deg);\n}\n.bet-win-container .bet-win.display-win[data-v-6ba00241] {\n  transform: rotateY(180deg);\n}",""])},"5mVb":function(t,e,a){"use strict";var n=a("o0o1"),r=a.n(n),i=a("fpkf"),o=a("vDqi"),s=a.n(o),l=a("4HBT"),c=a.n(l),u=a("C3Ci"),d=a("fYW3"),v=a("0MVl"),m=a("L2JU"),p=a("Snnx"),f=a.n(p),b=a("+iZp"),h=a.n(b);function y(t,e,a,n,r,i,o){try{var s=t[i](o),l=s.value}catch(t){return void a(t)}s.done?e(l):Promise.resolve(l).then(n,r)}function g(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var i=t.apply(e,a);function o(t){y(i,n,r,o,s,"next",t)}function s(t){y(i,n,r,o,s,"throw",t)}o(void 0)}))}}function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function x(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){w(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function w(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var k={components:{BlockPreloader:a("FjpJ").a,FormParameter:v.a},mixins:[u.a,d.a],props:{playing:{type:Boolean,required:!0}},data:function(){return{room:null,rooms:null,players:null,game:null,forms:{joinOrLeave:new c.a({room_id:null}),create:new c.a({name:null,parameters:{}})}}},computed:x(x({},Object(m.d)("broadcasting",["echo"])),{},{gamePackageId:function(){return this.$route.params.game},parameters:function(){return Object(i.a)("".concat(this.gamePackageId,".parameters"))},playersCount:function(){return this.players?this.players.length:0}}),watch:{room:function(t,e){t&&!e?this.subscribe(t):!t&&e&&(this.unsubscribe(e),this.fetchRooms(),this.$emit("exit")),this.$emit("room",{room:t})},game:function(t,e){t&&!e&&this.$emit("game",{game:t})},playersCount:function(t){t===parseInt(this.room.parameters.players_count,10)?this.$emit("ready",{ready:!0}):this.$emit("ready",{ready:!1})}},created:function(){var t=this;this.$nextTick((function(){t.fetchRooms(),t.parameters&&t.parameters.forEach((function(e){t.forms.create.parameters[e.id]=e.default}))}))},beforeDestroy:function(){this.unsubscribe(this.room),this.room=null,this.rooms=null,this.players=null},methods:{fetchRooms:function(){var t=this;return g(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/games/".concat(t.gamePackageId,"/rooms"));case 2:a=e.sent,(n=a.data).room?(t.room=n.room,t.forms.joinOrLeave.room_id=n.room.id,n.game&&(t.game=n.game)):t.rooms=n.rooms;case 5:case"end":return e.stop()}}),e)})))()},joinRoom:function(){var t=this;return g(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.forms.joinOrLeave.post("/api/games/".concat(t.gamePackageId,"/rooms/join"));case 2:a=e.sent,(n=a.data).success&&(t.room=n.room,t.rooms=null);case 5:case"end":return e.stop()}}),e)})))()},leaveRoom:function(){var t=this;return g(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.forms.joinOrLeave.post("/api/games/".concat(t.gamePackageId,"/rooms/leave"));case 2:a=e.sent,a.data.success&&(t.room=null);case 5:case"end":return e.stop()}}),e)})))()},createRoom:function(){var t=this;return g(r.a.mark((function e(){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.forms.create.post("/api/games/".concat(t.gamePackageId,"/rooms"));case 2:a=e.sent,n=a.data,t.room=n.room,t.forms.joinOrLeave.room_id=n.room.id;case 6:case"end":return e.stop()}}),e)})))()},subscribe:function(t){var e=this;if(!this.echo||!t)return!1;this.echo.join("game.".concat(t.id)).here((function(t){e.players=t,e.$emit("players",{players:t})})).joining((function(t){e.players.push(t),e.$emit("player-joined",{player:t}),e.sound(f.a)})).leaving((function(t){e.players.splice(e.players.findIndex((function(e){return e.id===t.id})),1),e.$emit("player-left",{player:t}),e.sound(h.a)})).listen("MultiplayerGameStateChanged",(function(t){e.$emit("event",{event:t})}))},unsubscribe:function(t){if(!this.echo||!t)return!1;this.echo.leave("game.".concat(t.id))}}},C=(a("nBE5"),a("KHd+")),O=a("ZUTo"),j=a.n(O),B=a("gzZi"),I=a("sK+t"),V=a("mdmw"),$=a("Yq0q"),E=a("pSOK"),P=a("S9TP"),M=a("Ey0z"),S=a("D9m0"),T=a("uXRr"),Z=a("L6Q5"),L=a("r9mn"),q=a("hlRy"),F=a("cdmR"),H=a("Kn9U"),U=Object(C.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"d-flex justify-center fill-height align-center":!t.room}},[t.room?a("v-system-bar",{attrs:{color:"primary",height:"35"}},[a("v-icon",[t._v("mdi-map-marker")]),t._v(" "),a("span",[t._v(t._s(t.room.name))]),t._v(" "),a("v-icon",{staticClass:"ml-2"},[t._v("mdi-cash")]),t._v(" "),a("span",[t._v(t._s(t.room.parameters.bet))]),t._v(" "),a("v-icon",{staticClass:"ml-2"},[t._v("mdi-account-multiple")]),t._v(" "),a("span",[t._v(t._s(t.$t("{0}/{1}",[t.playersCount,t.room.parameters.players_count])))]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:"",small:"",disabled:t.forms.joinOrLeave.busy||t.playing},on:{click:t.leaveRoom}},[a("v-icon",[t._v("mdi-logout-variant")])],1)],1):[t.rooms?a("v-container",{staticClass:"align-self-start",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[t._v("\n                "+t._s(t.$t("Game rooms"))+"\n              ")])],1),t._v(" "),a("v-card-text",[a("v-row",[a("v-col",{staticClass:"pr-md-5",attrs:{cols:"12",md:"6"}},[a("h2",{staticClass:"headline mb-5"},[t._v("\n                    "+t._s(t.$t("Join an existing room"))+"\n                  ")]),t._v(" "),t.rooms.length?[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.joinRoom(e)}}},[a("v-select",{attrs:{items:t.rooms,"item-value":"id","item-text":function(e){return e.name+" - "+t.$t("{0}/{1} players",[e.players_count,e.parameters.players_count])},error:t.forms.joinOrLeave.errors.has("room_id"),"error-messages":t.forms.joinOrLeave.errors.get("room_id"),label:t.$t("Game room"),outlined:"",disabled:t.forms.joinOrLeave.busy},model:{value:t.forms.joinOrLeave.room_id,callback:function(e){t.$set(t.forms.joinOrLeave,"room_id",e)},expression:"forms.joinOrLeave.room_id"}}),t._v(" "),a("v-btn",{attrs:{type:"submit",color:"primary",disabled:!t.forms.joinOrLeave.room_id||t.forms.joinOrLeave.busy,loading:t.forms.joinOrLeave.busy}},[t._v("\n                        "+t._s(t.$t("Join"))+"\n                      ")])],1)]:a("p",[t._v("\n                    "+t._s(t.$t("There are no rooms available to join"))+"\n                  ")])],2),t._v(" "),a("v-col",{staticClass:"pl-md-5 border-left",attrs:{cols:"12",md:"6"}},[a("h2",{staticClass:"headline mb-5"},[t._v("\n                    "+t._s(t.$t("Create a new room"))+"\n                  ")]),t._v(" "),a("v-form",{on:{submit:function(e){return e.preventDefault(),t.createRoom(e)}}},[a("v-text-field",{attrs:{label:t.$t("Name"),rules:[t.validationRequired,function(e){return t.validationMinLength(e,3)},function(e){return t.validationMaxLength(e,50)}],error:t.forms.create.errors.has("name"),"error-messages":t.forms.create.errors.get("name"),outlined:"",disabled:t.forms.create.busy},on:{keydown:function(e){return t.clearFormErrors(e,"name",t.forms.create)}},model:{value:t.forms.create.name,callback:function(e){t.$set(t.forms.create,"name",e)},expression:"forms.create.name"}}),t._v(" "),t._l(t.parameters,(function(e){return a("form-parameter",{key:e.id,attrs:{parameter:e,form:t.forms.create,"form-key":"parameters",disabled:t.forms.create.busy},model:{value:t.forms.create.parameters[e.id],callback:function(a){t.$set(t.forms.create.parameters,e.id,a)},expression:"forms.create.parameters[parameter.id]"}})})),t._v(" "),a("v-btn",{attrs:{type:"submit",color:"primary",disabled:!t.forms.create.name||t.forms.create.busy,loading:t.forms.create.busy}},[t._v("\n                      "+t._s(t.$t("Create"))+"\n                    ")])],2)],1)],1)],1)],1)],1)],1)],1):a("block-preloader")]],2)}),[],!1,null,"37bdd8af",null);e.a=U.exports;j()(U,{VBtn:B.a,VCard:I.a,VCardText:V.c,VCol:$.a,VContainer:E.a,VForm:P.a,VIcon:M.a,VRow:S.a,VSelect:T.a,VSpacer:Z.a,VSystemBar:L.a,VTextField:q.a,VToolbar:F.a,VToolbarTitle:H.a})},"7QZv":function(t,e,a){var n=a("oGfw");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},"7n2z":function(t,e,a){"use strict";var n={props:{message:{required:!0,validator:function(t){return"string"==typeof t||null===t}}}},r=(a("U6x8"),a("KHd+")),i=a("ZUTo"),o=a.n(i),s=a("B5h7"),l=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"scale"}},[this.message?e("v-alert",{attrs:{dense:"",outlined:"",text:"",color:"primary"}},[this._v("\n    "+this._s(this.message)+"\n  ")]):this._e()],1)}),[],!1,null,"f134bfa0",null);e.a=l.exports;o()(l,{VAlert:s.a})},"7xj+":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".bet-input[data-v-2ddf1d3d] {\n  max-width: 250px;\n}",""])},DHND:function(t,e,a){"use strict";var n=a("Zbce");a.n(n).a},"EQZ+":function(t,e,a){var n=a("7xj+");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},Ipx7:function(t,e,a){"use strict";var n=a("Uw3E");a.n(n).a},JzGf:function(t,e,a){var n=a("MTq3");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},KUgb:function(t,e,a){var n=a("4iZO");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},MTq3:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".hand-score[data-v-3882fe3a] {\n  position: absolute;\n  top: -0.5em;\n  right: -0.5em;\n  width: 1.5em;\n  height: 1.5em;\n  font-size: 1em;\n  line-height: 1.5em;\n  background: #fff;\n  border-radius: 50%;\n  text-align: center;\n  color: var(--v-secondary-darken2);\n}\n.pop-enter-active[data-v-3882fe3a] {\n  transition: all 0.3s ease-out;\n}\n.pop-leave-active[data-v-3882fe3a] {\n  transition: all 0.3s ease-in;\n}\n.pop-enter[data-v-3882fe3a], .pop-leave-to[data-v-3882fe3a] {\n  transform: scale(0) rotate(360deg);\n}",""])},U6x8:function(t,e,a){"use strict";var n=a("e7nH");a.n(n).a},UP2x:function(t,e,a){"use strict";var n=a("KUgb");a.n(n).a},UrPs:function(t,e,a){"use strict";var n=a("21nP");a.n(n).a},Uw3E:function(t,e,a){var n=a("XGd+");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},VWIw:function(t,e,a){"use strict";var n=a("/ULh");a.n(n).a},VlFF:function(t,e,a){"use strict";var n={props:{card:{required:!0,validator:function(t){return"string"==typeof t&&2===t.length||null===t}}},computed:{suit:function(){return this.card?this.card[0]:null},suitSymbol:function(){return"D"===this.suit?"♦":"C"===this.suit?"♣":"H"===this.suit?"♥":"♠"},rank:function(){return this.card?this.card[1]:null},rankValue:function(){return"T"===this.rank?10:this.rank},color:function(){return["D","H"].indexOf(this.suit)>-1?"red":"text--primary"+(this.$vuetify.theme.isDark?" text--darken-1":"")}}},r=(a("Ipx7"),a("KHd+")),i=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",{class:this.color+"--text"},[this._v("\n  "+this._s(this.rankValue)),e("span",{staticClass:"suit"},[this._v(this._s(this.suitSymbol))])])}),[],!1,null,"01539a82",null);e.a=i.exports},Vwtx:function(t,e,a){var n=a("xmyG");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},"XGd+":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".suit[data-v-01539a82] {\n  font-size: 1.5em;\n}",""])},ZY2t:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.suit svg[data-v-3a9b915a] {\r\n  width: 1.5em;\r\n  height: 1.5em;\n}\r\n",""])},Zbce:function(t,e,a){var n=a("ZY2t");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},bReb:function(t,e,a){var n=a("rykT");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},e7nH:function(t,e,a){var n=a("tj13");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)},hNdr:function(t,e,a){"use strict";var n=a("fpkf"),r={props:{value:{required:!0,validator:function(t){return"string"==typeof t&&1===t.length||null===t}},suit:{required:!0,validator:function(t){return"string"==typeof t&&1===t.length||null===t}}},computed:{suitColor:function(){return["C","S"].includes(this.suit)?"white--text":"red--text"}}},i=(a("xb+E"),a("KHd+")),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"value"},[a("svg",{staticStyle:{display:"none"}},[a("symbol",{attrs:{id:"value-2",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M21.44,21.76l-1.79-1.2c2.81-4.28,5.8-6.9,11.46-6.9,5.47,0,9.57,3.82,9.57,8.88,0,4.46-2.39,7.41-8.05,12.56L22.78,44H41v2.3H19V44.54L31,33.68c5.29-4.83,7.13-7.59,7.13-11,0-4.19-3.4-6.9-7.27-6.9C26.78,15.78,24.11,17.9,21.44,21.76Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-3",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M20.5,15.88V13.62H40.65v1.7L29.75,27.79c6.12.37,11.41,3.22,11.41,9.16,0,5.66-4.92,9.43-10.49,9.43a14.49,14.49,0,0,1-11.82-5.8l1.84-1.52a12.26,12.26,0,0,0,10,5.15c4.33,0,8-2.9,8-7.18,0-4.55-4.23-7-10-7H26.89l-.6-1.33L37.38,15.88Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-4",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M37.66,13.78v22.5H42.9v2.07H37.66v7.87h-2.3V38.35H17.92l-.83-1.79L35.5,13.78Zm-2.3,3.45L20,36.28H35.36Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-5",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M21.74,13.62H39.82v2.3h-16L23.08,28a15.11,15.11,0,0,1,7.13-1.75c6.21,0,11,4,11,9.75,0,6.12-4.74,10.4-11.23,10.4-4.37,0-8.46-2.35-11.27-5.2l1.7-1.7c2.9,2.9,6.26,4.74,9.66,4.74,5.11,0,8.65-3.59,8.65-8.14s-3.63-7.68-8.83-7.68a14.54,14.54,0,0,0-7.27,2l-1.84-1.2Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-6",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M39.11,18.91c-2.48-2.21-4.92-3.4-8-3.4-6.53,0-10.76,6.85-10.54,16.7a11.1,11.1,0,0,1,10.08-6c5.94,0,11.09,4,11.09,9.8,0,6.16-4.92,10.63-11.27,10.63a11.61,11.61,0,0,1-8.19-3.22c-2.67-2.67-4.09-5.89-4.09-12.61,0-9.75,5.11-17.48,13.11-17.48,3.68,0,6.49,1.43,9.29,3.73Zm-8.56,9.43c-5.29,0-9,4-9,8,0,4.65,3.91,8.14,9.11,8.14a8.23,8.23,0,0,0,8.6-8.37C39.29,31.66,35.66,28.34,30.55,28.34Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-7",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M19.33,13.9H40.67v1.75L26,46.1H23.38L38,16.2H19.33Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-8",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M30,46.56c-6.76,0-12-3.73-12-9.11,0-3.82,3.08-6.67,7.13-8-3.17-1.29-6-3.68-6-7.54,0-5.06,5.29-8.46,10.86-8.46s10.86,3.4,10.86,8.46c0,3.86-2.85,6.26-6,7.54,4,1.33,7.13,4.19,7.13,8C42,42.84,36.76,46.56,30,46.56Zm0-16c-5.25,0-9.48,2.9-9.48,6.95,0,3.68,3.54,6.86,9.48,6.86s9.48-3.17,9.48-6.86C39.48,33.5,35.24,30.6,30,30.6Zm0-15c-4.69,0-8.37,2.62-8.37,6.3,0,4,3.82,6.67,8.37,6.67s8.37-2.67,8.37-6.67C38.37,18.22,34.69,15.6,30,15.6Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-9",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M28.67,46.65c-4,0-7-1.75-9.71-4l1.52-1.84c2.71,2.44,5.29,3.68,8.24,3.68,6.49,0,11-6.95,10.67-16.61-1.84,3.31-5,6.21-10,6.21-6.49,0-11.13-4.32-11.13-9.89,0-6,4.6-10.86,11.32-10.86a11.39,11.39,0,0,1,8.19,3.27c2.58,2.58,4,6.12,4,12.61C41.78,39.39,36.17,46.65,28.67,46.65Zm.6-31.15a8.38,8.38,0,0,0-8.56,8.6c0,4.55,3.63,7.87,8.74,7.87,5.47,0,9-4.14,9-8.23C38.42,19.14,34.6,15.51,29.26,15.51Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-T",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M15.55,13.67h1.84V46.1H15V16.15L8.84,18.27l-.64-1.89Z",transform:"translate(-8.19 -13.14)"}}),t._v(" "),a("path",{attrs:{d:"M38.42,46.65c-8.19,0-13.3-7.68-13.3-16.61s5.2-16.7,13.39-16.7S51.81,21,51.81,30,46.61,46.65,38.42,46.65Zm0-31.15c-6.67,0-10.81,6.9-10.81,14.45s4.23,14.54,10.9,14.54S49.32,37.59,49.32,30,45.09,15.51,38.42,15.51Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-J",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M30.11,46.33c-4.78,0-7.77-2.48-9.75-6l2-1.24c2,3.36,4.14,5.11,7.91,5.11,4,0,7-3,7-8.6V13.67h2.39V35.38C39.64,42.61,35.45,46.33,30.11,46.33Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-Q",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M44.68,46.86l-4.51-4.09a15.8,15.8,0,0,1-10.4,3.68c-9.75,0-16.15-7.77-16.15-16.56v-.09c0-8.79,6.49-16.65,16.24-16.65S46,20.91,46,29.7c0,0,0,0,0,.09a17,17,0,0,1-4.23,11.36L46.38,45ZM43.53,29.79c0-8-5.8-14.49-13.75-14.49S16.11,21.74,16.11,29.7v.09c0,8,5.8,14.49,13.76,14.49a13.19,13.19,0,0,0,8.56-3l-6.26-5.34L33.86,34,40,39.64a15,15,0,0,0,3.5-9.75Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-K",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M40.26,46.1,27,29.82l-8,8.1V46.1H16.61V13.9H19V35.06L39.52,13.9h3.27L28.71,28.11l14.68,18Z",transform:"translate(-8.19 -13.14)"}})]),t._v(" "),a("symbol",{attrs:{id:"value-A",viewBox:"0 0 43.62 33.72"}},[a("path",{attrs:{d:"M43.53,46.22l-4.09-9h-19l-4.09,9H13.85l15-32.43h2.3l15,32.43ZM30,16.41,21.44,35h17Z",transform:"translate(-8.19 -13.14)"}})])]),t._v(" "),t.value?a("svg",{class:t.suitColor,attrs:{fill:"currentColor"}},[a("use",{attrs:{"xlink:href":"#value-"+t.value}})]):t._e()])}),[],!1,null,"623d0daa",null).exports,s={props:{suit:{required:!0,validator:function(t){return"string"==typeof t&&1===t.length||null===t}}}},l=(a("DHND"),{components:{CardValue:o,CardSuit:Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"suit"},[a("svg",{staticStyle:{display:"none"}},[a("symbol",{staticClass:"white--text",attrs:{id:"suit-C",viewBox:"0 0 45.33 50.5",fill:"currentColor"}},[a("circle",{attrs:{cx:"32.49",cy:"29.52",r:"11.69",opacity:"0.5"}}),t._v(" "),a("circle",{attrs:{cx:"22.5",cy:"12.06",r:"11.69",opacity:"0.5"}}),t._v(" "),a("circle",{attrs:{cx:"12.51",cy:"29.52",r:"11.69",opacity:"0.5"}}),t._v(" "),a("polygon",{attrs:{points:"22.5 37.09 14.73 50.36 30.26 50.36 22.5 37.09",opacity:"0.5"}})]),t._v(" "),a("symbol",{staticClass:"red--text",attrs:{id:"suit-D",viewBox:"0 0 45.33 50.5",fill:"currentColor"}},[a("polygon",{attrs:{points:"22 50.5 38.51 22.22 5.49 22.22 22 50.5",opacity:"0.7"}}),t._v(" "),a("polygon",{attrs:{points:"22 0.5 5.49 28.78 38.51 28.78 22 0.5",opacity:"0.7"}})]),t._v(" "),a("symbol",{staticClass:"red--text",attrs:{id:"suit-H",viewBox:"0 0 45.33 50.5",fill:"currentColor"}},[a("circle",{attrs:{cx:"11.33",cy:"11.33",r:"11.33",opacity:"0.7"}}),t._v(" "),a("circle",{attrs:{cx:"34",cy:"11.33",r:"11.33",opacity:"0.7"}}),t._v(" "),a("polygon",{attrs:{points:"22.66 50 45.17 11.46 0.16 11.46 22.66 50",opacity:"0.7"}})]),t._v(" "),a("symbol",{staticClass:"white--text",attrs:{id:"suit-S",viewBox:"0 0 45.33 50.5",fill:"currentColor"}},[a("circle",{attrs:{cx:"32.33",cy:"34.2",r:"10",opacity:"0.5"}}),t._v(" "),a("circle",{attrs:{cx:"12.33",cy:"34.2",r:"10",opacity:"0.5"}}),t._v(" "),a("polygon",{attrs:{points:"22.33 0 2.38 34.17 42.29 34.17 22.33 0",opacity:"0.5"}}),t._v(" "),a("polygon",{attrs:{points:"22.33 38.65 15.69 50 28.97 50 22.33 38.65",opacity:"0.5"}})])]),t._v(" "),t.suit?a("svg",[a("use",{attrs:{"xlink:href":"#suit-"+t.suit}})]):t._e()])}),[],!1,null,"3a9b915a",null).exports},props:{card:{required:!0,validator:function(t){return"string"==typeof t&&2===t.length||null===t}},clickable:{type:Boolean,required:!1,default:!1},inactive:{type:Boolean,required:!1,default:!1}},computed:{suit:function(){return this.card?this.card[0]:null},value:function(){return this.card?this.card[1]:null},frontImageUrl:function(){return'url("'.concat(Object(n.a)("settings.games.playing_cards.front_image"),'")')},backImageUrl:function(){return'url("'.concat(Object(n.a)("settings.games.playing_cards.back_image"),'")')}}}),c=(a("UrPs"),Object(i.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playing-card-container"},[t._t("top"),t._v(" "),a("div",{staticClass:"playing-card ml-n10 mx-lg-1",class:{"face-down":null===t.value,clickable:t.clickable,inactive:t.inactive}},[a("div",{staticClass:"front elevation-2",style:{backgroundImage:t.frontImageUrl}},[a("div",{staticClass:"d-flex flex-column pa-2"},[a("card-value",{attrs:{value:t.value,suit:t.suit}}),t._v(" "),a("card-suit",{attrs:{suit:t.suit}})],1)]),t._v(" "),a("div",{staticClass:"back elevation-2",style:{backgroundImage:t.backImageUrl}})])],2)}),[],!1,null,"3ad74638",null).exports),u={props:{score:{type:Number,required:!0}}},d=(a("3G0u"),Object(i.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"pop"}},[this.score>=0?e("div",{staticClass:"hand-score align-self-start",class:{"primary text--primary":21===this.score,"error text--primary":this.score>21}},[this._v("\n    "+this._s(this.score)+"\n  ")]):this._e()])}),[],!1,null,"3882fe3a",null).exports),v={props:{result:{type:String,required:!0}},data:function(){return{minWidth:7}},computed:{baseWidth:function(){return Math.max(this.minWidth,.7*this.result.length)},width:function(){return this.baseWidth+"em"},left:function(){return"calc(50% - "+this.baseWidth/2+"em)"}}},m=(a("xCdS"),Object(i.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"balloon"}},[this.result?e("div",{staticClass:"hand-result elevation-2 ml-n5 ml-lg-0",style:{width:this.width,left:this.left}},[this._v("\n    "+this._s(this.result.toUpperCase())+"\n  ")]):this._e()])}),[],!1,null,"6a2fedae",null).exports),p={props:{bet:{type:Number,required:!0},win:{type:Number,required:!0}},methods:{getChipFontSize:function(t){var e=(""+t).length;return e<3?"1em":3===e?"0.9em":"0.6em"}}},f=(a("UP2x"),a("ZUTo")),b=a.n(f),h=a("a1P0"),y=Object(i.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"chip"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.bet>0,expression:"bet > 0"}],staticClass:"bet-win-container"},[a("div",{staticClass:"bet-win my-2 ml-n5 ml-lg-0 text-center",class:{"display-win":t.win>0}},[a("div",{staticClass:"front"},[a("v-responsive",{staticClass:"chip-bet text-center rounded-circle d-inline-flex align-center justify-center elevation-2",style:{fontSize:t.getChipFontSize(t.bet)},attrs:{height:"32",width:"32"}},[t._v("\n          "+t._s(t.bet||"")+"\n        ")])],1),t._v(" "),a("div",{staticClass:"back elevation-2"},[a("v-responsive",{staticClass:"chip-win text-center rounded-circle d-inline-flex align-center justify-center elevation-2",style:{fontSize:t.getChipFontSize(t.win)},attrs:{height:"32",width:"32"}},[t._v("\n          "+t._s(t.win||"")+"\n        ")])],1)])])])}),[],!1,null,"6ba00241",null),g=y.exports;b()(y,{VResponsive:h.a});var _={components:{PlayingCard:c,HandScore:d,HandResult:m,HandBetWin:g},props:{cards:{type:Array,required:!0},score:{type:Number,required:!1,default:-1},result:{type:String,required:!1,default:""},resultClass:{type:String,required:!1,default:""},bet:{type:Number,required:!1,default:0},win:{type:Number,required:!1,default:0},inactive:{type:Boolean,required:!1,default:!1},inactiveCards:{type:Array,required:!1,default:function(){return[]}},title:{type:String,required:!1,default:""},clickable:{type:Boolean,required:!1,default:!1}},methods:{click:function(t,e){this.$emit("playing-card-click",{index:t,card:e})}}},x=(a("VWIw"),Object(i.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hand",class:{inactive:t.inactive}},[t._t("title",[t.title?a("div",{staticClass:"font-weight-thin title text-center mb-2 ml-n10 ml-lg-0"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e()]),t._v(" "),t._t("default"),t._v(" "),a("div",{staticClass:"playing-cards"},[a("transition-group",{staticClass:"d-flex justify-center",attrs:{name:"deal",tag:"div"}},t._l(t.cards,(function(e,n){return a("playing-card",{key:"card-"+n,attrs:{card:e,clickable:t.clickable,inactive:t.inactiveCards.indexOf(e)>-1},nativeOn:{click:function(a){return t.click(n,e)}},scopedSlots:t._u([{key:"top",fn:function(){return[t.$scopedSlots["top."+n]?t._t("top."+n):t._e()]},proxy:!0}],null,!0)})})),1),t._v(" "),a("hand-score",{attrs:{score:t.score}}),t._v(" "),a("hand-result",{class:t.resultClass,attrs:{result:t.result}})],1),t._v(" "),a("hand-bet-win",{attrs:{bet:t.bet,win:t.win}})],2)}),[],!1,null,"6b706bb4",null));e.a=x.exports},nBE5:function(t,e,a){"use strict";var n=a("bReb");a.n(n).a},oGfw:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".hand-result[data-v-6a2fedae] {\n  position: absolute;\n  height: 2em;\n  bottom: 0.75em;\n  text-align: center;\n  line-height: 2em;\n  opacity: 0.85;\n  border-radius: 0.25em;\n}\n.balloon-enter-active[data-v-6a2fedae] {\n  animation: balloon-in-data-v-6a2fedae ease-in-out 0.6s;\n  transform-origin: 50% 100%;\n}\n.balloon-leave-active[data-v-6a2fedae] {\n  transition: all 0.1s;\n  transform-origin: 50% 100%;\n}\n.balloon-leave-to[data-v-6a2fedae] {\n  transform: scale(0);\n  opacity: 0;\n}\n@keyframes balloon-in-data-v-6a2fedae {\n0% {\n    transform: scale(0) skewX(0deg) rotate(-20deg);\n}\n40% {\n    transform: scale(1) skewX(-5deg) rotate(10deg);\n}\n50% {\n    transform: skewX(5deg) rotate(-5deg);\n}\n60% {\n    transform: skewX(-4deg) rotate(3deg);\n}\n70% {\n    transform: skewX(4deg) rotate(-1deg);\n}\n80% {\n    transform: skewX(-3deg) rotate(0deg);\n}\n85% {\n    transform: skewX(3deg);\n}\n90% {\n    transform: skewX(-2deg);\n}\n95% {\n    transform: skewX(2deg);\n}\n100% {\n    transform: skewX(0deg);\n}\n}",""])},rykT:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"@media only screen and (min-width: 960px) {\n.border-left[data-v-37bdd8af] {\n    border-left: 1px solid grey;\n}\n}",""])},sA27:function(t,e,a){"use strict";var n=a("o0o1"),r=a.n(n),i=a("ZXch");function o(t,e,a,n,r,i,o){try{var s=t[i](o),l=s.value}catch(t){return void a(t)}s.done?e(l):Promise.resolve(l).then(n,r)}var s={mixins:[a("C3Ci").a],props:{provablyFairEnabled:{type:Boolean,required:!0}},data:function(){return{menu:!1,provablyFairModal:!1,infoModal:!1,infoModalComponent:null}},computed:{gamePackageId:function(){return this.$route.params.game},provablyFairGame:function(){return this.$store.getters["provably-fair/get"](this.gamePackageId)||{}}},watch:{gamePackageId:function(t){this.initInfoModalComponent(t)}},created:function(){this.initInfoModalComponent(this.gamePackageId)},methods:{initInfoModalComponent:function(t){var e,n=this;return(e=r.a.mark((function e(){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("92bX")("./".concat(t,"/resources/js/pages/info"));case 2:i=e.sent,n.infoModalComponent=i.default;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function s(t){o(i,n,r,s,l,"next",t)}function l(t){o(i,n,r,s,l,"throw",t)}s(void 0)}))})()},copyToClipboard:function(t){return Object(i.b)(t.$el.querySelector("input"))},createProvablyFairGame:function(){this.$store.dispatch("provably-fair/create",{key:this.gamePackageId,seed:this.provablyFairGame.client_seed})}}},l=a("KHd+"),c=a("ZUTo"),u=a.n(c),d=a("gzZi"),v=a("sK+t"),m=a("mdmw"),p=a("FpqX"),f=a("S9TP"),b=a("Ey0z"),h=a("L6Q5"),y=a("xzsT"),g=a("hlRy"),_=a("cdmR"),x=a("Kn9U"),w=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-speed-dial",{staticClass:"mb-5",attrs:{fixed:"",bottom:"",right:"","open-on-hover":"",direction:"top",transition:"scroll-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-btn",{attrs:{color:"primary",fab:""},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t.menu?a("v-icon",[t._v("\n          mdi-close\n        ")]):a("v-icon",[t._v("\n          mdi-cards-playing-outline\n        ")])],1)]},proxy:!0}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),t.provablyFairEnabled?a("v-btn",{attrs:{fab:"",small:"",color:"primary"},on:{click:function(e){t.provablyFairModal=!0}}},[a("v-icon",[t._v("mdi-check-decagram")])],1):t._e(),t._v(" "),a("v-btn",{attrs:{fab:"",small:"",color:"primary"},on:{click:function(e){t.infoModal=!0}}},[a("v-icon",[t._v("mdi-information-variant")])],1)],1),t._v(" "),t.provablyFairEnabled?a("v-dialog",{attrs:{width:"600"},model:{value:t.provablyFairModal,callback:function(e){t.provablyFairModal=e},expression:"provablyFairModal"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[t._v("\n          "+t._s(t.$t("Provably fair"))+"\n        ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.provablyFairModal=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-card-text",{staticClass:"pa-4"},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.createProvablyFairGame(e)}},model:{value:t.formIsValid,callback:function(e){t.formIsValid=e},expression:"formIsValid"}},[a("v-text-field",{attrs:{label:t.$t("Client seed"),outlined:"",rules:[function(e){return t.validationMaxLength(e,32)}]},model:{value:t.provablyFairGame.client_seed,callback:function(e){t.$set(t.provablyFairGame,"client_seed",e)},expression:"provablyFairGame.client_seed"}}),t._v(" "),a("v-text-field",{ref:"hash",attrs:{label:t.$t("Server hash"),outlined:"",readonly:"","append-icon":"mdi-content-copy"},on:{"click:append":function(e){return t.copyToClipboard(t.$refs.hash)}},model:{value:t.provablyFairGame.hash,callback:function(e){t.$set(t.provablyFairGame,"hash",e)},expression:"provablyFairGame.hash"}}),t._v(" "),a("v-btn",{attrs:{type:"submit",color:"primary",disabled:!t.formIsValid}},[t._v("\n            "+t._s(t.$t("Generate"))+"\n          ")])],1)],1)],1)],1):t._e(),t._v(" "),a("v-dialog",{staticClass:"overflow-hidden",attrs:{width:"600"},model:{value:t.infoModal,callback:function(e){t.infoModal=e},expression:"infoModal"}},[a(t.infoModalComponent,{tag:"component",on:{close:function(e){t.infoModal=!1}}})],1)],1)}),[],!1,null,null,null);e.a=w.exports;u()(w,{VBtn:d.a,VCard:v.a,VCardText:m.c,VDialog:p.a,VForm:f.a,VIcon:b.a,VSpacer:h.a,VSpeedDial:y.a,VTextField:g.a,VToolbar:_.a,VToolbarTitle:x.a})},tj13:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".scale-enter[data-v-f134bfa0], .scale-leave-to[data-v-f134bfa0] {\n  transform: scale(0);\n  opacity: 1;\n}\n.scale-enter-active[data-v-f134bfa0], .scale-leave-active[data-v-f134bfa0] {\n  transition: all 0.3s;\n}",""])},"w/oY":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".hand[data-v-6b706bb4] {\n  min-height: 7em;\n  transition: all 0.5s ease;\n}\n.hand.inactive[data-v-6b706bb4] {\n  opacity: 0.4;\n}\n.hand .playing-cards[data-v-6b706bb4] {\n  position: relative;\n}\n.deal-enter-active[data-v-6b706bb4] {\n  animation: deal-data-v-6b706bb4 0.3s;\n}\n.deal-leave-active[data-v-6b706bb4] {\n  animation: deal-data-v-6b706bb4 0.3s reverse;\n}\n.deal-move[data-v-6b706bb4] {\n  transition: transform 0.3s;\n}\n@keyframes deal-data-v-6b706bb4 {\n0% {\n    transform: translateY(-100vh);\n}\n100% {\n    transform: translateY(0);\n}\n}",""])},xCdS:function(t,e,a){"use strict";var n=a("7QZv");a.n(n).a},"xb+E":function(t,e,a){"use strict";var n=a("Vwtx");a.n(n).a},xmyG:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.value svg[data-v-623d0daa] {\r\n  width: 1.5em;\r\n  height: 1.5em;\n}\r\n",""])},xylR:function(t,e,a){"use strict";var n=a("EQZ+");a.n(n).a}}]);
//# sourceMappingURL=common.js.map