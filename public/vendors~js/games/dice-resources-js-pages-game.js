(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{flh2:function(t,e,i){var n=i("g2oV");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,s);n.locals&&(t.exports=n.locals)},g2oV:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group) {\n  background: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active) {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon {\n  color: #000000;\n}\n\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) {\n  background: #1E1E1E;\n  color: #FFFFFF;\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {\n  border-color: rgba(255, 255, 255, 0.12) !important;\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active) {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon {\n  color: #FFFFFF;\n}\n\n.v-btn-toggle {\n  border-radius: 4px;\n  display: inline-flex;\n  max-width: 100%;\n}\n.v-btn-toggle > .v-btn.v-btn {\n  border-radius: 0;\n  border-style: solid;\n  border-width: thin;\n  box-shadow: none;\n  box-shadow: none;\n  opacity: 0.8;\n  padding: 0 12px;\n}\n.v-btn-toggle > .v-btn.v-btn:first-child {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.v-btn-toggle > .v-btn.v-btn:last-child {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n.v-btn-toggle > .v-btn.v-btn--active {\n  color: inherit;\n  opacity: 1;\n}\n.v-btn-toggle > .v-btn.v-btn:after {\n  display: none;\n}\n.v-btn-toggle > .v-btn.v-btn:not(:first-child) {\n  border-left-width: 0;\n}\n.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {\n  height: 48px;\n  min-height: 0;\n  min-width: 48px;\n}\n\n.v-btn-toggle--borderless > .v-btn.v-btn {\n  border-width: 0;\n}\n\n.v-btn-toggle--dense > .v-btn.v-btn {\n  padding: 0 8px;\n}\n\n.v-btn-toggle--group {\n  border-radius: 0;\n}\n.v-btn-toggle--group > .v-btn.v-btn {\n  background-color: transparent !important;\n  border-color: transparent;\n  margin: 4px;\n  min-width: auto;\n}\n\n.v-btn-toggle--rounded {\n  border-radius: 24px;\n}\n\n.v-btn-toggle--shaped {\n  border-radius: 24px 4px;\n}\n\n.v-btn-toggle--tile {\n  border-radius: 0;\n}",""])},nimM:function(t,e,i){var n=i("ssnn");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(n,s);n.locals&&(t.exports=n.locals)},pgmH:function(t,e,i){"use strict";i("flh2");var n=i("OGDc"),s=i("qa07"),r=i("WN+I");e.a=Object(r.a)(n.a,s.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...n.a.options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const t=this.setTextColor(this.color,{...n.a.options.methods.genData.call(this)});return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},ssnn:function(t,e,i){(t.exports=i("I1BE")(!1)).push([t.i,'.theme--light.v-slider .v-slider__track-background,\n.theme--light.v-slider .v-slider__track-fill,\n.theme--light.v-slider .v-slider__thumb {\n  background: rgba(0, 0, 0, 0.26);\n}\n\n.theme--dark.v-slider .v-slider__track-background,\n.theme--dark.v-slider .v-slider__track-fill,\n.theme--dark.v-slider .v-slider__thumb {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.v-slider {\n  cursor: default;\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex: 1;\n  user-select: none;\n}\n.v-slider input {\n  cursor: default;\n  padding: 0;\n  width: 100%;\n  display: none;\n}\n\n.v-slider__track-container {\n  position: absolute;\n  border-radius: 0;\n}\n\n.v-slider__track-background, .v-slider__track-fill {\n  position: absolute;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n\n.v-slider__thumb-container {\n  outline: none;\n  position: absolute;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  top: 50%;\n}\n.v-slider__thumb-container:hover .v-slider__thumb:before {\n  transform: scale(1);\n}\n\n.v-slider__thumb {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  left: -6px;\n  top: 50%;\n  border-radius: 50%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  transform: translateY(-50%);\n  user-select: none;\n}\n.v-slider__thumb:before {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  content: "";\n  color: inherit;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0.3;\n  position: absolute;\n  left: -12px;\n  top: -12px;\n  transform: scale(0.1);\n  pointer-events: none;\n}\n\n.v-slider__ticks-container {\n  position: absolute;\n}\n\n.v-slider__tick {\n  position: absolute;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  border-radius: 0;\n}\n.v-slider__tick--filled {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.v-application--is-ltr .v-slider__tick:first-child .v-slider__tick-label {\n  transform: none;\n}\n.v-application--is-rtl .v-slider__tick:first-child .v-slider__tick-label {\n  transform: translateX(100%);\n}\n.v-application--is-ltr .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateX(-100%);\n}\n.v-application--is-rtl .v-slider__tick:last-child .v-slider__tick-label {\n  transform: none;\n}\n\n.v-slider__tick-label {\n  position: absolute;\n  user-select: none;\n  white-space: nowrap;\n}\n\n.v-slider__thumb-label-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.v-slider__thumb-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  color: #fff;\n  width: 32px;\n  height: 32px;\n  border-radius: 50% 50% 0;\n  position: absolute;\n  left: 0;\n  bottom: 100%;\n  user-select: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.v-slider--horizontal {\n  min-height: 32px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n.v-slider--horizontal .v-slider__track-container {\n  width: 100%;\n  height: 2px;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.v-slider--horizontal .v-slider__track-background, .v-slider--horizontal .v-slider__track-fill {\n  height: 100%;\n}\n.v-slider--horizontal .v-slider__ticks-container {\n  left: 0;\n  height: 2px;\n  width: 100%;\n}\n.v-application--is-ltr .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label {\n  transform: translateX(0%);\n}\n.v-application--is-rtl .v-slider--horizontal .v-slider__tick:first-child .v-slider__tick-label {\n  transform: translateX(0%);\n}\n.v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateX(-100%);\n}\n.v-application--is-rtl .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateX(100%);\n}\n.v-slider--horizontal .v-slider__tick .v-slider__tick-label {\n  top: 8px;\n}\n.v-application--is-ltr .v-slider--horizontal .v-slider__tick .v-slider__tick-label {\n  transform: translateX(-50%);\n}\n.v-application--is-rtl .v-slider--horizontal .v-slider__tick .v-slider__tick-label {\n  transform: translateX(50%);\n}\n.v-slider--horizontal .v-slider__thumb-label {\n  transform: translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg);\n}\n.v-slider--horizontal .v-slider__thumb-label > * {\n  transform: rotate(-45deg);\n}\n\n.v-slider--vertical {\n  min-height: 150px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.v-slider--vertical .v-slider__track-container {\n  height: 100%;\n  width: 2px;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n}\n.v-slider--vertical .v-slider__track-background, .v-slider--vertical .v-slider__track-fill {\n  width: 100%;\n}\n.v-slider--vertical .v-slider__thumb-container {\n  left: 50%;\n}\n.v-slider--vertical .v-slider__ticks-container {\n  top: 0;\n  width: 2px;\n  height: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.v-application--is-ltr .v-slider--vertical .v-slider__tick .v-slider__tick-label, .v-application--is-ltr .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label, .v-application--is-ltr .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateY(-50%);\n  left: 12px;\n}\n.v-application--is-rtl .v-slider--vertical .v-slider__tick .v-slider__tick-label, .v-application--is-rtl .v-slider--vertical .v-slider__tick:first-child .v-slider__tick-label, .v-application--is-rtl .v-slider--vertical .v-slider__tick:last-child .v-slider__tick-label {\n  transform: translateY(-50%);\n  right: 12px;\n}\n.v-slider--vertical .v-slider__thumb-label > * {\n  transform: rotate(-135deg);\n}\n\n.v-slider__thumb-container--focused .v-slider__thumb:before {\n  transform: scale(1);\n}\n\n.v-slider--active .v-slider__tick {\n  opacity: 1;\n}\n\n.v-slider__thumb-container--active .v-slider__thumb:before {\n  transform: scale(1.5) !important;\n}\n\n.v-slider--disabled {\n  pointer-events: none;\n}\n.v-slider--disabled .v-slider__thumb {\n  width: 8px;\n  height: 8px;\n  left: -4px;\n}\n.v-slider--disabled .v-slider__thumb:before {\n  display: none;\n}\n\n.v-slider__ticks-container--always-show .v-slider__tick {\n  opacity: 1;\n}\n\n.v-input__slider.v-input--is-readonly > .v-input__control {\n  pointer-events: none;\n}\n.v-application--is-ltr .v-input__slider .v-input__slot .v-label {\n  margin-left: 0;\n  margin-right: 12px;\n}\n.v-application--is-rtl .v-input__slider .v-input__slot .v-label {\n  margin-right: 0;\n  margin-left: 12px;\n}\n\n.v-application--is-ltr .v-input__slider--inverse-label .v-input__slot .v-label {\n  margin-right: 0;\n  margin-left: 12px;\n}\n.v-application--is-rtl .v-input__slider--inverse-label .v-input__slot .v-label {\n  margin-left: 0;\n  margin-right: 12px;\n}\n\n.v-input__slider--vertical {\n  align-items: center;\n}\n.v-application--is-ltr .v-input__slider--vertical {\n  flex-direction: column-reverse;\n}\n.v-application--is-rtl .v-input__slider--vertical {\n  flex-direction: column;\n}\n.v-input__slider--vertical .v-input__slot, .v-input__slider--vertical .v-input__prepend-outer, .v-input__slider--vertical .v-input__append-outer {\n  margin: 0;\n}\n.v-input__slider--vertical .v-messages {\n  display: none;\n}\n\n.v-input--has-state .v-slider__track-background {\n  opacity: 0.4;\n}',""])},ug2X:function(t,e,i){"use strict";i("nimM");var n=i("w3qa"),s=i("B4nN"),r=i("WN+I"),l=i("KXwx"),a=i("opMy"),o=i("gNKD"),h=i("2b3T");e.a=Object(r.a)(n.a,l.a).extend({name:"v-slider",directives:{ClickOutside:a.a},mixins:[l.a],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:t=>"boolean"==typeof t||"always"===t},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:()=>[]},ticks:{type:[Boolean,String],default:!1,validator:t=>"boolean"==typeof t||"always"===t},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:()=>({app:null,oldValue:null,keyPressed:0,isFocused:!1,isActive:!1,noClick:!1}),computed:{classes(){return{...n.a.options.computed.classes.call(this),"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel}},internalValue:{get(){return this.lazyValue},set(t){t=isNaN(t)?this.minValue:t;const e=this.roundValue(Math.min(Math.max(t,this.minValue),this.maxValue));e!==this.lazyValue&&(this.lazyValue=e,this.$emit("input",e))}},trackTransition(){return this.keyPressed>=2?"none":""},minValue(){return parseFloat(this.min)},maxValue(){return parseFloat(this.max)},stepNumeric(){return this.step>0?parseFloat(this.step):0},inputWidth(){return(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100},trackFillStyles(){const t=this.vertical?"bottom":"left",e=this.vertical?"top":"right",i=this.vertical?"height":"width",n=this.$vuetify.rtl?"auto":"0",s=this.$vuetify.rtl?"0":"auto",r=this.isDisabled?`calc(${this.inputWidth}% - 10px)`:this.inputWidth+"%";return{transition:this.trackTransition,[t]:n,[e]:s,[i]:r}},trackStyles(){const t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",e=this.vertical?"height":"width",i=this.isDisabled?`calc(${100-this.inputWidth}% - 10px)`:`calc(${100-this.inputWidth}%)`;return{transition:this.trackTransition,[t]:"0px",[e]:i}},showTicks(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel(){return!(this.isDisabled||!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min(t){const e=parseFloat(t);e>this.internalValue&&this.$emit("input",e)},max(t){const e=parseFloat(t);e<this.internalValue&&this.$emit("input",e)},value:{handler(t){this.internalValue=t}}},beforeMount(){this.internalValue=this.value},mounted(){this.app=document.querySelector("[data-app]")||Object(h.c)("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot(){const t=[this.genLabel()],e=this.genSlider();return this.inverseLabel?t.unshift(e):t.push(e),t.push(this.genProgress()),t},genSlider(){return this.$createElement("div",{class:{"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly,...this.themeClasses},directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick}},this.genChildren())},genChildren(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onThumbMouseDown,this.onFocus,this.onBlur)]},genInput(){return this.$createElement("input",{attrs:{value:this.internalValue,id:this.computedId,disabled:this.isDisabled,readonly:!0,tabindex:-1,...this.$attrs}})},genTrackContainer(){const t=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},t)},genSteps(){if(!this.step||!this.showTicks)return null;const t=parseFloat(this.tickSize),e=Object(o.i)(this.numTicks+1),i=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",n=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&e.reverse();const s=e.map(e=>{const s=[];this.tickLabels[e]&&s.push(this.$createElement("div",{staticClass:"v-slider__tick-label"},this.tickLabels[e]));const r=e*(100/this.numTicks),l=this.$vuetify.rtl?100-this.inputWidth<r:r<this.inputWidth;return this.$createElement("span",{key:e,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":l},style:{width:t+"px",height:t+"px",[i]:`calc(${r}% - ${t/2}px)`,[n]:`calc(50% - ${t/2}px)`}},s)});return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},s)},genThumbContainer(t,e,i,n,s,r,l,a="thumb"){const o=[this.genThumb()],h=this.genThumbLabelContent(t);return this.showThumbLabel&&o.push(this.genThumbLabel(h)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:a,key:a,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":n,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(e),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal",...this.$attrs},on:{focus:r,blur:l,keydown:this.onKeyDown,keyup:this.onKeyUp,touchstart:s,mousedown:s}}),o)},genThumbLabelContent(t){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:t}):[this.$createElement("span",[String(t)])]},genThumbLabel(t){const e=Object(o.h)(this.thumbSize),i=this.vertical?`translateY(20%) translateY(${Number(this.thumbSize)/3-1}px) translateX(55%) rotate(135deg)`:"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(s.e,{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:e,width:e,transform:i}}),[this.$createElement("div",t)])])])},genThumb(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles(t){const e=this.vertical?"top":"left";let i=this.$vuetify.rtl?100-t:t;return i=this.vertical?100-i:i,{transition:this.trackTransition,[e]:i+"%"}},onThumbMouseDown(t){t.preventDefault(),this.oldValue=this.internalValue,this.keyPressed=2,this.isActive=!0;const e=!o.C||{passive:!0,capture:!0},i=!!o.C&&{passive:!0};"touches"in t?(this.app.addEventListener("touchmove",this.onMouseMove,i),Object(o.a)(this.app,"touchend",this.onSliderMouseUp,e)):(this.app.addEventListener("mousemove",this.onMouseMove,i),Object(o.a)(this.app,"mouseup",this.onSliderMouseUp,e)),this.$emit("start",this.internalValue)},onSliderMouseUp(t){t.stopPropagation(),this.keyPressed=0;const e=!!o.C&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,e),this.app.removeEventListener("mousemove",this.onMouseMove,e),this.$emit("mouseup",t),this.$emit("end",this.internalValue),Object(o.k)(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove(t){const{value:e}=this.parseMouseMove(t);this.internalValue=e},onKeyDown(t){if(!this.isInteractive)return;const e=this.parseKeyDown(t,this.internalValue);null==e||e<this.minValue||e>this.maxValue||(this.internalValue=e,this.$emit("change",e))},onKeyUp(){this.keyPressed=0},onSliderClick(t){if(this.noClick)return void(this.noClick=!1);this.$refs.thumb.focus(),this.onMouseMove(t),this.$emit("change",this.internalValue)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},parseMouseMove(t){const e=this.vertical?"top":"left",i=this.vertical?"height":"width",n=this.vertical?"clientY":"clientX",{[e]:s,[i]:r}=this.$refs.track.getBoundingClientRect(),l="touches"in t?t.touches[0][n]:t[n];let a=Math.min(Math.max((l-s)/r,0),1)||0;this.vertical&&(a=1-a),this.$vuetify.rtl&&(a=1-a);const o=l>=s&&l<=s+r;return{value:parseFloat(this.min)+a*(this.maxValue-this.minValue),isInsideTrack:o}},parseKeyDown(t,e){if(!this.isInteractive)return;const{pageup:i,pagedown:n,end:s,home:r,left:l,right:a,down:h,up:c}=o.y;if(![i,n,s,r,l,a,h,c].includes(t.keyCode))return;t.preventDefault();const d=this.stepNumeric||1,u=(this.maxValue-this.minValue)/d;if([l,a,h,c].includes(t.keyCode)){this.keyPressed+=1;e+=((this.$vuetify.rtl?[l,c]:[a,c]).includes(t.keyCode)?1:-1)*d*(t.shiftKey?3:t.ctrlKey?2:1)}else if(t.keyCode===r)e=this.minValue;else if(t.keyCode===s)e=this.maxValue;else{e-=(t.keyCode===n?1:-1)*d*(u>100?u/10:10)}return e},roundValue(t){if(!this.stepNumeric)return t;const e=this.step.toString().trim(),i=e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0,n=this.minValue%this.stepNumeric,s=Math.round((t-n)/this.stepNumeric)*this.stepNumeric+n;return parseFloat(Math.min(s,this.maxValue).toFixed(i))}}})}}]);
//# sourceMappingURL=dice-resources-js-pages-game.js.map