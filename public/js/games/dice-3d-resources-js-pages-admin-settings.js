(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"+pTD":function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,".v-autocomplete.v-input > .v-input__control > .v-input__slot {\n  cursor: text;\n}\n.v-autocomplete input {\n  align-self: center;\n}\n.v-autocomplete.v-select.v-input--is-focused input {\n  min-width: 64px;\n}\n.v-autocomplete:not(.v-input--is-focused).v-select--chips input {\n  max-height: 0;\n  padding: 0;\n}\n.v-autocomplete--is-selecting-index input {\n  opacity: 0;\n}\n.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot > input {\n  margin-top: 24px;\n}\n.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot > input {\n  margin-top: 20px;\n}\n.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input {\n  pointer-events: inherit;\n}\n.v-autocomplete__content.v-menu__content {\n  border-radius: 0;\n}\n.v-autocomplete__content.v-menu__content .v-card {\n  border-radius: 0;\n}",""])},"9RwZ":function(e,t,s){"use strict";s.r(t);var i=s("fpkf"),n=s("C3Ci"),a=s("yIkO"),l={components:{FileUpload:s("uU2J").a,ColorPicker:a.a},mixins:[n.a],props:{form:{type:Object,required:!0}},data:function(){return{colorPickerFillColor:!1,colorPickerFontColor:!1,diceTypes:[{text:this.$t("Tetrahedron"),value:"tetrahedron"},{text:this.$t("Cube"),value:"cube"},{text:this.$t("Octahedron"),value:"octahedron"},{text:this.$t("Dipyramid"),value:"dipyramid"},{text:this.$t("Dodecahedron"),value:"dodecahedron"},{text:this.$t("Icosahedron"),value:"icosahedron"}],variables:{GAME_DICE_3D_CATEGORIES:Object(i.a)("dice-3d.categories"),GAME_DICE_3D_BANNER:Object(i.a)("dice-3d.banner"),GAME_DICE_3D_BACKGROUND:Object(i.a)("dice-3d.background"),GAME_DICE_3D_MIN_BET:parseInt(Object(i.a)("dice-3d.min_bet"),10),GAME_DICE_3D_MAX_BET:parseInt(Object(i.a)("dice-3d.max_bet"),10),GAME_DICE_3D_BET_CHANGE_AMOUNT:parseInt(Object(i.a)("dice-3d.bet_change_amount"),10),GAME_DICE_3D_DEFAULT_BET_AMOUNT:parseInt(Object(i.a)("dice-3d.default_bet_amount"),10),GAME_DICE_3D_MIN_WIN_CHANCE:parseFloat(Object(i.a)("dice-3d.min_win_chance")),GAME_DICE_3D_MAX_WIN_CHANCE:parseFloat(Object(i.a)("dice-3d.max_win_chance")),GAME_DICE_3D_HOUSE_EDGE:parseFloat(Object(i.a)("dice-3d.house_edge")),GAME_DICE_3D_DICE:Object(i.a)("dice-3d.dice"),GAME_DICE_3D_FILL_COLOR:Object(i.a)("dice-3d.fill_color"),GAME_DICE_3D_FONT_COLOR:Object(i.a)("dice-3d.font_color")}}},computed:{houseEdgeHint:function(){return this.$t("This parameter affects payout calculation.")+" "+this.$t("Payout is calculated like this: {0}.",["(100 - houseEdge) / winChance"])+" "+this.$t("Hence the more house edge is the less payout a user will get.")}},created:function(){this.$emit("input",this.variables)}},o=s("KHd+"),r=s("ZUTo"),c=s.n(r),h=s("sK+t"),d=s("mdmw"),u=s("K13u"),_=s("uXRr"),m=s("hlRy"),p=Object(o.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{attrs:{flat:""}},[s("v-card-text",[s("v-combobox",{attrs:{label:e.$t("Categories"),multiple:"",outlined:"",chips:"","small-chips":"","deletable-chips":"","hide-selected":"","no-filter":""},model:{value:e.form.GAME_DICE_3D_CATEGORIES,callback:function(t){e.$set(e.form,"GAME_DICE_3D_CATEGORIES",t)},expression:"form.GAME_DICE_3D_CATEGORIES"}}),e._v(" "),s("file-upload",{attrs:{label:e.$t("Banner"),name:"banner",folder:"games/dice-3d"},model:{value:e.form.GAME_DICE_3D_BANNER,callback:function(t){e.$set(e.form,"GAME_DICE_3D_BANNER",t)},expression:"form.GAME_DICE_3D_BANNER"}}),e._v(" "),s("file-upload",{attrs:{label:e.$t("Background image"),name:"background",folder:"games/dice-3d",clearable:!0},model:{value:e.form.GAME_DICE_3D_BACKGROUND,callback:function(t){e.$set(e.form,"GAME_DICE_3D_BACKGROUND",t)},expression:"form.GAME_DICE_3D_BACKGROUND"}}),e._v(" "),s("v-text-field",{attrs:{label:e.$t("Min bet"),rules:[function(t){return e.validationInteger(parseInt(t,10))},e.validationPositiveNumber],error:e.form.errors.has("GAME_DICE_3D_MIN_BET"),"error-messages":e.form.errors.get("GAME_DICE_3D_MIN_BET"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(t){return e.clearFormErrors(t,"GAME_DICE_3D_MIN_BET")}},model:{value:e.form.GAME_DICE_3D_MIN_BET,callback:function(t){e.$set(e.form,"GAME_DICE_3D_MIN_BET",e._n(t))},expression:"form.GAME_DICE_3D_MIN_BET"}}),e._v(" "),s("v-text-field",{attrs:{label:e.$t("Max bet"),rules:[function(t){return e.validationInteger(parseInt(t,10))},e.validationPositiveNumber],error:e.form.errors.has("GAME_DICE_3D_MAX_BET"),"error-messages":e.form.errors.get("GAME_DICE_3D_MAX_BET"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(t){return e.clearFormErrors(t,"GAME_DICE_3D_MAX_BET")}},model:{value:e.form.GAME_DICE_3D_MAX_BET,callback:function(t){e.$set(e.form,"GAME_DICE_3D_MAX_BET",e._n(t))},expression:"form.GAME_DICE_3D_MAX_BET"}}),e._v(" "),s("v-text-field",{attrs:{label:e.$t("Bet increment / decrement amount"),rules:[function(t){return e.validationInteger(parseInt(t,10))},e.validationPositiveNumber],error:e.form.errors.has("GAME_DICE_3D_BET_CHANGE_AMOUNT"),"error-messages":e.form.errors.get("GAME_DICE_3D_BET_CHANGE_AMOUNT"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(t){return e.clearFormErrors(t,"GAME_DICE_3D_BET_CHANGE_AMOUNT")}},model:{value:e.form.GAME_DICE_3D_BET_CHANGE_AMOUNT,callback:function(t){e.$set(e.form,"GAME_DICE_3D_BET_CHANGE_AMOUNT",e._n(t))},expression:"form.GAME_DICE_3D_BET_CHANGE_AMOUNT"}}),e._v(" "),s("v-text-field",{attrs:{label:e.$t("Default bet amount"),rules:[function(t){return e.validationInteger(parseInt(t,10))},e.validationPositiveNumber],error:e.form.errors.has("GAME_DICE_3D_DEFAULT_BET_AMOUNT"),"error-messages":e.form.errors.get("GAME_DICE_3D_DEFAULT_BET_AMOUNT"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(t){return e.clearFormErrors(t,"GAME_DICE_3D_DEFAULT_BET_AMOUNT")}},model:{value:e.form.GAME_DICE_3D_DEFAULT_BET_AMOUNT,callback:function(t){e.$set(e.form,"GAME_DICE_3D_DEFAULT_BET_AMOUNT",e._n(t))},expression:"form.GAME_DICE_3D_DEFAULT_BET_AMOUNT"}}),e._v(" "),s("v-text-field",{attrs:{label:e.$t("House edge"),rules:[e.validationNumeric],error:e.form.errors.has("GAME_DICE_3D_HOUSE_EDGE"),"error-messages":e.form.errors.get("GAME_DICE_3D_HOUSE_EDGE"),outlined:"",suffix:"%",hint:e.houseEdgeHint,"persistent-hint":""},on:{keydown:function(t){return e.clearFormErrors(t,"GAME_DICE_3D_HOUSE_EDGE")}},model:{value:e.form.GAME_DICE_3D_HOUSE_EDGE,callback:function(t){e.$set(e.form,"GAME_DICE_3D_HOUSE_EDGE",e._n(t))},expression:"form.GAME_DICE_3D_HOUSE_EDGE"}}),e._v(" "),s("v-select",{staticClass:"mt-5",attrs:{items:e.diceTypes,label:e.$t("Dice"),chips:"",multiple:"","hide-selected":"","deletable-chips":"","append-icon":"mdi-plus"},model:{value:e.form.GAME_DICE_3D_DICE,callback:function(t){e.$set(e.form,"GAME_DICE_3D_DICE",t)},expression:"form.GAME_DICE_3D_DICE"}}),e._v(" "),s("color-picker",{attrs:{label:e.$t("Dice fill color")},model:{value:e.form.GAME_DICE_3D_FILL_COLOR,callback:function(t){e.$set(e.form,"GAME_DICE_3D_FILL_COLOR",t)},expression:"form.GAME_DICE_3D_FILL_COLOR"}}),e._v(" "),s("color-picker",{attrs:{label:e.$t("Dice font color")},model:{value:e.form.GAME_DICE_3D_FONT_COLOR,callback:function(t){e.$set(e.form,"GAME_DICE_3D_FONT_COLOR",t)},expression:"form.GAME_DICE_3D_FONT_COLOR"}})],1)],1)}),[],!1,null,null,null);t.default=p.exports;c()(p,{VCard:h.a,VCardText:d.c,VCombobox:u.a,VSelect:_.a,VTextField:m.a})},"K/2z":function(e,t,s){var i=s("+pTD");"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(i,n);i.locals&&(e.exports=i.locals)},K13u:function(e,t,s){"use strict";s("K/2z");var i=s("uXRr"),n=s("hlRy"),a=s("2fdy"),l=s("gNKD");const o={...i.b,offsetY:!0,offsetOverflow:!0,transition:!1};var r=i.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i.a.options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i.a.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(l.s)(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:()=>!1,isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i.a.options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...o,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=i.a.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},methods:{onFilteredItemsChanged(e,t){e!==t&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===l.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l.y.backspace&&e!==l.y.delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[i]?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=i},clearableCallback(){this.internalSearch=void 0,i.a.options.methods.clearableCallback.call(this)},genInput(){const e=n.a.options.methods.genInput.call(this);return e.data=Object(a.a)(e.data,{attrs:{"aria-activedescendant":Object(l.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(l.q)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i.a.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i.a.options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;i.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){if(-1===this.selectedIndex)return;const t=this.selectedItems[this.selectedIndex],s=this.getText(t);e.clipboardData.setData("text/plain",s),e.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}});t.a=r.extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return i.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:()=>!0,menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged(e){if(e&&this.multiple&&this.delimiters.length){const t=this.delimiters.find(t=>e.endsWith(t));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const e=r.options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection(e,t){const s=i.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(s.componentOptions.listeners={...s.componentOptions.listeners,dblclick:()=>{this.editingIndex=t,this.internalSearch=this.getText(e),this.selectedIndex=-1}}),s},onChipInput(e){i.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged(e,t){this.autoSelectFirst&&r.options.methods.onFilteredItemsChanged.call(this,e,t)},onKeyDown(e){const t=e.keyCode;i.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===l.y.left&&0===this.$refs.input.selectionStart?this.updateSelf():t===l.y.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();r.options.methods.onTabDown.call(this,e)},selectItem(e){this.editingIndex>-1?this.updateEditing():r.options.methods.selectItem.call(this,e)},setSelectedItems(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(e){i.a.options.methods.setValue.call(this,null!=e?e:this.internalSearch)},updateEditing(){const e=this.internalValue.slice();e[this.editingIndex]=this.internalSearch,this.setValue(e),this.editingIndex=-1},updateCombobox(){const e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),e&&(this.internalSearch=void 0))},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const e=this.getMenuIndex();if(e<0&&!this.searchIsDirty)return;if(this.editingIndex>-1)return this.updateEditing();const t=this.selectedItems.indexOf(this.internalSearch);if(t>-1){const e=this.internalValue.slice();e.splice(t,1),this.setValue(e)}if(e>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null},onPaste(e){if(!this.multiple||this.searchIsDirty)return;const t=e.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");t&&-1===this.findExistingIndex(t)&&(e.preventDefault(),i.a.options.methods.selectItem.call(this,t))}}})}}]);
//# sourceMappingURL=dice-3d-resources-js-pages-admin-settings.js.map