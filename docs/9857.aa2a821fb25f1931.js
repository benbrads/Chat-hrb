"use strict";(self.webpackChunkchatHRB=self.webpackChunkchatHRB||[]).push([[9857],{9857:(se,T,m)=>{m.r(T),m.d(T,{hrb_select_custom:()=>H,hrb_select_native:()=>R});var K=m(5861),o=m(6604),k=m(6120),E=m(9892),O=m(4438),u=m(4733);const B=(n,e)=>{!n||1!==n.nodeType||(window.MutationObserver?new MutationObserver(e).observe(n,{childList:!0,subtree:!0}):window.addEventListener&&(n.addEventListener("DOMNodeInserted",e,!1),n.addEventListener("DOMNodeRemoved",e,!1)))},b={keysSoFar:"",keyClearTimeout:null},D=(n,e,s)=>{for(let t=e;t<s;t+=1){const i=n[t],{innerText:l}=i.querySelector("button");if(l&&0===l.toLowerCase().indexOf(b.keysSoFar))return t+1}return null},N=()=>{b.keyClearTimeout&&(clearTimeout(b.keyClearTimeout),b.keyClearTimeout=null)},M=(n,e)=>{const s=e,{clientHeight:t,scrollHeight:i,scrollTop:l}=e;if(!n)return void(s.scrollTop=0);const{offsetTop:r,offsetHeight:a}=n;if(i>t){const d=r+a;d>t+l?s.scrollTop=d-t:r<l&&(s.scrollTop=r-15)}},H=class{constructor(n){(0,o.r)(this,n),this.hrbSelectBlur=(0,o.c)(this,"hrbSelectBlur",7),this.hrbSelectChange=(0,o.c)(this,"hrbSelectChange",7),this.hrbSelectFocus=(0,o.c)(this,"hrbSelectFocus",7),this.hrbSelectInput=(0,o.c)(this,"hrbSelectInput",7),this.hasError=!1,this.label="",this.loading=!1,this.value="",this.optionGroupName="",this.currentlyFocusedOptionIndex=0,this.isActive=!1,this.isFocused=!1,this.showDropdownAboveInput=!1,this.activeDescendant=null,this.baseId=`${(0,k.a)()}__${u.C.baseId}`,this.hasInitialized=!1,this.ieBlurTimeout=null,this.ieFocusTimeout=null,this.prevMousePosition={x:0,y:0},this.initializeSelect=()=>{this.hasInitialized=!0,this.setOptionNodes(),this.setOptionCount(),this.checkForSelectedOption()},this.clearIeBlurTimeout=()=>{const{ieBlurTimeout:e}=this;e&&(clearTimeout(e),this.ieBlurTimeout=null)},this.clearIeFocusTimeout=()=>{const{ieFocusTimeout:e}=this;e&&(clearTimeout(e),this.ieFocusTimeout=null)},this.getOptionListFromOptGroup=(e,s)=>[{isOptGroup:!0,text:s},...Array.from(e).map(i=>({isSelected:i.selected,text:i.textContent,value:i.value||i.textContent}))],this.getOptionList=()=>{const s=Array.from(this.slotContainerRef.children).map(t=>{const{children:i,label:l,tagName:r,textContent:a,value:c}=t;return r===u.C.childTypes.optGroup?this.getOptionListFromOptGroup(i,l):{isSelected:this.value===c,text:a,value:c||a}});this.optionList=[].concat(...s)},this.setOptionCount=()=>this.optionCount=this.optionNodes.length,this.setOptionNodes=()=>{const{optionListRef:e}=this;this.optionNodes=!!e&&e.querySelectorAll("[role=option]")},this.checkForSelectedOption=()=>{const e=this.optionList.findIndex(t=>t.value===this.value),s=this.optionList.some(t=>!0===t.isOptGroup);s?s&&-1!==e&&(this.selectOption(this.getSelectedOptionNode(e)),this.focusItem(e)):-1!==e&&(this.selectOption(this.getSelectedOptionNode(e+1)),this.focusItem(e+1))},this.getSelectedOptionNode=e=>this.optionNodes[e-1],this.getIndexOfSelectedOptionNode=e=>{const{optionNodes:s}=this;return Array.from(s).map(i=>i.id).findIndex(i=>i===e.id)+1},this.checkListBoxScrollPosition=()=>{const{currentlySelectedOptionIndex:e,currentlyFocusedOptionIndex:s,getSelectedOptionNode:t,isActive:i,optionListRef:l}=this,a=t(e||s);i&&window.requestAnimationFrame(()=>{M(a,l)})},this.checkListBoxScreenPosition=()=>{const{containerRef:e,optionListRef:s,showDropdownAboveInput:t}=this,i=((n,e)=>{const s=window.innerHeight,{bottom:t,top:i}=n.getBoundingClientRect(),{height:l,maxHeight:r}=getComputedStyle(e),a=parseInt(r&&"none"!==r?r:l,10);return!(a>i)&&t+a>s})(e,s);t!==i&&(this.showDropdownAboveInput=i),window.addEventListener("scroll",this.checkListBoxScreenPosition)},this.resetActiveState=e=>{this.isActive=!1,this.currentlyFocusedOptionIndex=0,this.showDropdownAboveInput=!1,window.removeEventListener("scroll",this.checkListBoxScreenPosition),e||(this.isFocused=!1,this.hrbSelectBlur.emit(this))},this.setActiveState=()=>{const{currentlySelectedOptionIndex:e}=this;this.checkListBoxScreenPosition(),this.isActive=!0,this.isFocused=!0,this.currentlyFocusedOptionIndex=e||null,this.hrbSelectFocus.emit(this)},this.selectOption=e=>{const{getIndexOfSelectedOptionNode:s,resetActiveState:i}=this,{textContent:l}=e.querySelector("button");window.requestAnimationFrame(()=>{const r=this.optionList.find(c=>c.text===l);this.value=r.value,this.hrbSelectChange.emit(this),this.hrbSelectInput.emit(this),this.currentlySelectedOptionIndex=s(e),i(!0)})},this.focusItem=(e,s)=>{const{isActive:t,getSelectedOptionNode:i,optionListRef:l}=this;if(this.currentlyFocusedOptionIndex=e,t&&!s){const r=i(e);M(r,l)}},this.focusNextOption=()=>{const{currentlyFocusedOptionIndex:e,focusItem:s,optionCount:t}=this,i=e+1;i>t||s(i)},this.focusPrevOption=()=>{const{currentlyFocusedOptionIndex:e,focusItem:s}=this,t=e-1;t<=0||s(t)},this.focusFirstOption=()=>this.focusItem(1),this.focusLastOption=()=>this.focusItem(this.optionCount),this.closeOptions=()=>{this.resetActiveState(!0),this.containerRef.focus()},this.handleReturnPress=()=>{const{currentlyFocusedOptionIndex:e,getSelectedOptionNode:s,selectOption:t}=this,i=s(e);i?t(i):this.resetActiveState(!0)},this.keyEventMap={arrowDown:this.focusNextOption,arrowUp:this.focusPrevOption,home:this.focusFirstOption,end:this.focusLastOption,escape:this.closeOptions,pageDown:this.focusNextOption,pageUp:this.focusPrevOption,returnK:this.handleReturnPress,space:this.handleReturnPress},this.handleOnBlur=e=>{const{clearIeBlurTimeout:s,currentlySelectedOptionIndex:t,focusItem:i,resetActiveState:l}=this,r=!!e&&e.relatedTarget;if(!r||!this.containerRef.contains(r)){if(E.i)return void(this.ieBlurTimeout=setTimeout(()=>{l(),s(),t&&i(t)},u.C.ieBlurDelay));l(),t&&i(t)}},this.handleOnClick=()=>{const{checkListBoxScrollPosition:e,isActive:s,resetActiveState:t}=this;s?t():(this.setActiveState(),window.requestAnimationFrame(()=>this.optionListRef.focus()),e())},this.handleOnFocus=()=>{this.isFocused=!0,this.hrbSelectFocus.emit(this)},this.handleIeOnOptionListFocus=()=>{const{clearIeFocusTimeout:e,setActiveState:s}=this,{ieBlurDelay:t}=u.C;this.ieFocusTimeout=setTimeout(()=>{s(),e()},t+2)},this.handleOnKeyDown=e=>{const{activeDescendant:s,checkListBoxScrollPosition:t,currentlySelectedOptionIndex:i,isActive:l,focusItem:r,optionCount:a,optionNodes:c,setActiveState:d}=this,{keyCode:g,key:f}=e,w=f?O.k[f]:O.a[g];if(w)!l&&O.b.includes(w)&&(e.preventDefault(),d(),window.requestAnimationFrame(()=>this.optionListRef.focus()),t(),"space"===f||32===g||i)||(e.preventDefault(),l&&this.keyEventMap[w]());else{const v=((n,e,s,t,i)=>{const l=e||String.fromCharCode(n);let r=0;return b.keysSoFar||i.forEach((c,d)=>{c.id===s&&(r=d)}),b.keysSoFar+=l,N(),b.keyClearTimeout=setTimeout(()=>{b.keysSoFar="",b.keyClearTimeout=null},500),D(i,r,t)||D(i,0,r)})(g,f,s,a,c);v&&(d(),r(v))}},this.renderLoader=()=>(0,o.h)("span",{class:`${u.C.baseClassnameCustom}__loader`,"aria-hidden":"true"},(0,o.h)("hrb-loader",null)),this.renderError=()=>{const{errorLabel:e}=this,{baseClassnameCustom:s}=u.C;return(0,o.h)("span",{class:`${s}__error`,role:"alert"},(0,o.h)("div",{class:"hrb-input-error-icon"},(0,o.h)("svg",{"aria-hidden":"true",focusable:"false",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 13.25C10.8995 13.25 13.25 10.8995 13.25 8C13.25 5.10051 10.8995 2.75 8 2.75C5.10051 2.75 2.75 5.10051 2.75 8C2.75 10.8995 5.10051 13.25 8 13.25ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",fill:"#DC1F00"}),(0,o.h)("rect",{x:"7",y:"4",width:"2",height:"5",rx:"1",fill:"#DC1F00"}),(0,o.h)("path",{d:"M7 11C7 10.4477 7.44772 10 8 10V10C8.55228 10 9 10.4477 9 11V11C9 11.5523 8.55228 12 8 12V12C7.44772 12 7 11.5523 7 11V11Z",fill:"#DC1F00"}))),e)},this.renderHelper=()=>{const{helperText:e,baseId:s}=this,{baseClassnameCustom:t}=u.C;return(0,o.h)("div",{id:`${s}__helper`,class:`${t}__helper`},e)},this.renderOptGroupLabel=e=>{const{baseClassnameCustom:s}=u.C;return(0,o.h)("li",{class:`${s}__opt-group-label`},e)}}handleOnOptionClick(n){const{detail:e}=n,{focusItem:s,getSelectedOptionNode:t,selectOption:i}=this,l=t(e);s(e),i(l)}handleOnOptionMouseEnter(n){const{prevMousePosition:e}=this,{detail:{clientX:s,clientY:t,optionCount:i}}=n;s===e.x&&t===e.y||(this.prevMousePosition={x:s,y:t},this.focusItem(i,!0))}updateOptionList(){var n=this;return(0,K.Z)(function*(){n.hasInitialized=!1,n.getOptionList()})()}componentDidLoad(){const{hasInitialized:n,optionList:e}=this;this.getOptionList(),B(this.slotContainerRef,()=>{this.getOptionList(),this.hasInitialized=!1}),!n&&e&&this.initializeSelect()}componentDidRender(){const{hasInitialized:n,optionList:e}=this;!n&&e&&this.initializeSelect()}disconnectedCallback(){N(),this.resetActiveState(),this.clearIeBlurTimeout(),this.clearIeFocusTimeout()}render(){const{baseId:n,currentlyFocusedOptionIndex:e,currentlySelectedOptionIndex:s,disabled:t,errorLabel:i,getSelectedOptionNode:l,handleIeOnOptionListFocus:r,handleOnBlur:a,handleOnClick:c,handleOnFocus:d,handleOnKeyDown:g,handleOnOptionClick:f,handleOnOptionMouseEnter:w,hasError:v,helperText:I,isActive:_,isFocused:S,label:F,loading:x,optionList:y,renderError:L,renderHelper:W,renderLoader:X,showDropdownAboveInput:q,value:A,autoIdentifier:J}=this,{baseClassnameCustom:h,inputIcons:{chevronDown:Q,chevronUp:ee}}=u.C,z=e>0?l(e):null,C=`${h}__icon`,te=(0,k.g)([h,!!A&&`${h}--has-text`,_&&`${h}--is-active`,S&&`${h}--is-focused`,v&&`${h}--has-error`,t&&`${h}--is-disabled`,x&&`${h}--is-loading`,q&&`${h}--has-top-dropdown`]);let $;y&&($=y.find(p=>p.value===A));const P=$?$.text:"";let G=-1;return(0,o.h)(o.H,null,(0,o.h)("span",{"aria-haspopup":"listbox","aria-labelledby":`${n}__label ${n}__input`,class:te,onBlur:!t&&a,onFocus:!t&&d,onKeyDown:!t&&g,onClick:!t&&c,ref:p=>this.containerRef=p,role:"button",tabIndex:t?-1:0,"aria-disabled":t?"true":"false","data-hrb-select-focus-target":!0},(0,o.h)("span",{id:`${n}__label`,class:`${h}__label`},F),(0,o.h)("span",{class:`${h}__button`,role:"button"},(0,o.h)("input",{class:`${h}__value`,readOnly:!0,value:P,id:`${n}__input`,tabIndex:-1,disabled:t,"data-option-value":A,"data-automation-input":J,"data-hrb-select-input":!0}),(0,o.h)("span",{class:`${C}-container`},(0,o.h)("hrb-icon",{name:ee,class:`${C} ${C}-up`}),(0,o.h)("hrb-icon",{name:Q,class:`${C} ${C}-down`})),x&&X()),(0,o.h)("span",{class:`${h}__option-container`},(0,o.h)("ul",{role:"listbox","aria-activedescendant":z?z.id:null,tabIndex:-1,"aria-hidden":_?"false":"true","aria-labelledby":`${n}__label`,class:`${h}__option-list`,onBlur:a,onFocus:E.i?r:null,ref:p=>this.optionListRef=p},!!y&&y.map(p=>p.isOptGroup?(this.optionGroupName=p.text,this.renderOptGroupLabel(p.text)):(G+=1,(0,o.h)("li",null,(0,o.h)("hrb-select-option",{"base-id":n,currentlyFocusedOptionIndex:e,currentlySelectedOptionIndex:s,index:G,option:p,"option-click":f,"option-mouse-enter":w,"option-group":this.optionGroupName})))))),(0,o.h)("span",{class:`${h}__slots`,ref:p=>this.slotContainerRef=p},(0,o.h)("slot",null))),v&&!!i&&L(),I&&W(),(0,o.h)("span",{class:`${h}__live-region`},P))}};H.style='hrb-select-custom{display:block;position:relative}.hrb-select-custom{-ms-flex-align:end;align-items:flex-end;background-color:#f1f5f7;border:2px solid transparent;border-radius:16px;display:-ms-flexbox;display:flex;height:80px;overflow:hidden;position:relative;-webkit-transition:border-color 200ms ease;transition:border-color 200ms ease;-ms-flex-align:stretch;align-items:stretch;cursor:pointer;overflow:visible}.hrb-select-custom.hrb-select-custom--is-focused{border-color:#11A63D}.hrb-select-custom.hrb-select-custom--has-error{background-color:#fef8fb;border-color:#dc1f00}.hrb-select-custom.hrb-select-custom--is-disabled{opacity:0.6}.hrb-select-custom:focus{outline:none;outline:1px dashed rgba(38, 38, 38, 0.6);outline-offset:2px}.hrb-select-custom:focus::-moz-focus-inner{border:0}.hrb-select-custom__label{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5;-webkit-box-orient:vertical;color:#6e6e6e;display:-webkit-box;left:20px;-webkit-line-clamp:2;overflow:hidden;position:absolute;right:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transform-origin:0;transform-origin:0;-webkit-transition:color 200ms ease, -webkit-transform 200ms ease;transition:color 200ms ease, -webkit-transform 200ms ease;transition:color 200ms ease, transform 200ms ease;transition:color 200ms ease, transform 200ms ease, -webkit-transform 200ms ease}@media (min-width: 900px){.hrb-select-custom__label{font-size:1.125rem;line-height:1.5555555556}}.hrb-select-custom--is-focused:not(.hrb-select-custom) .hrb-select-custom__label,.hrb-select-custom--has-text .hrb-select-custom__label{display:block;pointer-events:none;text-overflow:ellipsis;-webkit-transform:scale(0.6666666667) translateY(-150%);transform:scale(0.6666666667) translateY(-150%);white-space:nowrap;width:calc((100% * 1.5) - 80px)}.hrb-select-custom.hrb-select-custom--is-focused:not(.hrb-select-custom) .hrb-select-custom__label,.hrb-select-custom.hrb-select-custom--has-text .hrb-select-custom__label{width:calc((100% * 1.5) - 100px)}.hrb-select-custom--has-error .hrb-select-custom__label{color:#dc1f00}.hrb-select-custom .hrb-select-custom__label{right:50px}.hrb-select-custom__button{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%}.hrb-select-custom__button[role=button]{-webkit-box-sizing:border-box;box-sizing:border-box}.hrb-select-custom__button:active,.hrb-select-custom__button:focus{outline:none}.hrb-select-custom__value{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5;background:none;border:0;display:inline-block;line-height:1;margin:0;padding:0;vertical-align:baseline;color:#262626;height:100%;overflow:hidden;padding:40px 20px 14px;text-overflow:ellipsis;white-space:nowrap;width:100%;cursor:pointer;opacity:0;overflow:hidden;text-align:left;text-overflow:ellipsis;-webkit-transition:opacity 200ms 175ms ease;transition:opacity 200ms 175ms ease;white-space:nowrap;width:95%}@media (min-width: 900px){.hrb-select-custom__value{font-size:1.125rem;line-height:1.5555555556}}.hrb-select-custom__value::-webkit-caps-lock-indicator,.hrb-select-custom__value::-webkit-credentials-auto-fill-button,.hrb-select-custom__value::-webkit-search-cancel-button,.hrb-select-custom__value::-webkit-search-decoration,.hrb-select-custom__value::-webkit-search-results-button,.hrb-select-custom__value::-webkit-search-results-decoration{display:none}.hrb-select-custom__value::-webkit-credentials-auto-fill-button{-webkit-transform:translateY(-12px);transform:translateY(-12px)}.hrb-select-custom__value::-webkit-textfield-decoration-container{padding-right:20px}.hrb-select-custom__value::-ms-clear,.hrb-select-custom__value::-ms-reveal{display:none}.hrb-select-custom__value:focus{outline:none}.hrb-select-custom__value:invalid{-webkit-box-shadow:none;box-shadow:none}.false .hrb-select-custom__value{padding-right:40px}.hrb-select-custom--has-text .hrb-select-custom__value{opacity:1}.hrb-select-custom__icon-container{display:block;opacity:0;pointer-events:none;position:absolute;right:15px;top:50%;-webkit-transform:translateY(-50%) translateZ(0);transform:translateY(-50%) translateZ(0);-webkit-transition:opacity 100ms ease;transition:opacity 100ms ease;height:24px;opacity:1;width:24px}.hrb-select-custom--is-focused:not(.false):not(.hrb-select-custom--is-loading) .hrb-select-custom__icon-container,.hrb-select-custom--has-text:not(.false):not(.hrb-select-custom--is-loading) .hrb-select-custom__icon-container,.false:not(.false):not(.hrb-select-custom--is-loading) .hrb-select-custom__icon-container{opacity:1}.false .hrb-select-custom__icon-container,.hrb-select-custom--is-loading .hrb-select-custom__icon-container{opacity:0}.hrb-select-custom__icon{left:50%;position:absolute;-webkit-transform:translateX(-50%) translateZ(0);transform:translateX(-50%) translateZ(0);-webkit-transition:opacity 100ms ease;transition:opacity 100ms ease}.hrb-select-custom__icon-down{opacity:0}.hrb-select-custom--is-active .hrb-select-custom__icon-down{opacity:1;-webkit-transition-delay:100ms;transition-delay:100ms}.hrb-select-custom__icon-up{opacity:1;-webkit-transition-delay:100ms;transition-delay:100ms}.hrb-select-custom--is-active .hrb-select-custom__icon-up{opacity:0;-webkit-transition-delay:0ms;transition-delay:0ms}.hrb-select-custom__option-container{display:none;left:0;padding-top:8px;position:absolute;right:0;top:100%;z-index:99}.hrb-select-custom--is-active .hrb-select-custom__option-container{display:block}.hrb-select-custom--has-top-dropdown .hrb-select-custom__option-container{bottom:100%;padding-bottom:8px;padding-top:0;top:auto}.hrb-select-custom__option-list{background-color:#ffffff;border-radius:16px;-webkit-box-shadow:0 10px 20px 5px rgba(0, 0, 0, 0.12);box-shadow:0 10px 20px 5px rgba(0, 0, 0, 0.12);max-height:270px;outline:none;overflow-x:hidden;overflow-y:scroll}.hrb-select-custom__opt-group-label{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:0.75rem;line-height:1.6666666667;color:#6e6e6e;display:block;margin-top:20px;padding:3px 20px}.hrb-select-custom__slots{display:none}.hrb-select-custom__loader{-webkit-animation:fade-in 200ms 100ms ease forwards;animation:fade-in 200ms 100ms ease forwards;display:block;height:18px;opacity:0;pointer-events:none;position:absolute;right:15px;top:calc(50% - 9px);width:18px}.hrb-select-custom__error{-ms-flex-align:start;align-items:flex-start;font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.4285714286;color:#dc1f00;display:-ms-flexbox;display:flex;margin-top:16px;padding-left:2px;padding-right:21px}.hrb-select-custom__error .hrb-icon{color:#dc1f00;fill:currentColor;height:18px;margin-right:3px;margin-top:1px;min-height:18px;min-width:18px;stroke:currentColor;width:18px}.hrb-select-custom__error~[class*=__helper]{margin-top:8px}.hrb-select-custom__helper{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.4285714286;margin-top:14px;padding:0 22px}.hrb-select-custom__live-region{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.hrb-input-error-icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin-right:5px}';const R=class{constructor(n){(0,o.r)(this,n),this.hrbSelectBlur=(0,o.c)(this,"hrbSelectBlur",7),this.hrbSelectChange=(0,o.c)(this,"hrbSelectChange",7),this.hrbSelectFocus=(0,o.c)(this,"hrbSelectFocus",7),this.hrbSelectInput=(0,o.c)(this,"hrbSelectInput",7),this.hasError=!1,this.loading=!1,this.value="",this.isActive=!1,this.isFocused=!1,this.baseId=`${(0,k.a)()}__${u.C.baseId}`,this.onOptionsRemovedChangeSection=e=>{const s=[];e.forEach(i=>i.removedNodes.length&&s.push(...i.removedNodes));const t=[];s.forEach(i=>{"option"===i.tagName.toLowerCase()&&t.push(i.value)}),this.setSelectedOption(t)},this.onBlur=()=>{this.isActive=!1,this.isFocused=!1,this.hrbSelectBlur.emit(this)},this.onChange=()=>{const{hrbSelectChange:e}=this,s=this.getElement();if(!s)return;const{selectedIndex:t}=s,i=s.querySelectorAll("option");if(t>-1){s.options.selectedIndex=t;const l=i[t];l&&(this.value=l.value,Array.from(i).forEach(r=>{r.selected=!1}),l.selected=!0,s.value=this.value,s.selectedIndex=t,this.selectedOption={value:s.value,text:l.textContent},e.emit(this))}this.isActive=!1},this.getElement=()=>this.el.querySelector("select"),this.onClick=()=>{this.isActive=!0},this.onFocus=()=>{this.isFocused=!0,this.hrbSelectFocus.emit(this)},this.onInput=()=>this.hrbSelectInput.emit(this),this.renderLoader=()=>(0,o.h)("span",{class:`${u.C.baseClassnameNative}__loader`,"aria-hidden":"true"},(0,o.h)("hrb-loader",null)),this.renderError=()=>{const{errorLabel:e}=this,{baseClassnameNative:s}=u.C;return(0,o.h)("span",{class:`${s}__error`,role:"alert"},(0,o.h)("div",{class:"hrb-input-error-icon"},(0,o.h)("svg",{"aria-hidden":"true",focusable:"false",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,o.h)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 13.25C10.8995 13.25 13.25 10.8995 13.25 8C13.25 5.10051 10.8995 2.75 8 2.75C5.10051 2.75 2.75 5.10051 2.75 8C2.75 10.8995 5.10051 13.25 8 13.25ZM8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z",fill:"#DC1F00"}),(0,o.h)("rect",{x:"7",y:"4",width:"2",height:"5",rx:"1",fill:"#DC1F00"}),(0,o.h)("path",{d:"M7 11C7 10.4477 7.44772 10 8 10V10C8.55228 10 9 10.4477 9 11V11C9 11.5523 8.55228 12 8 12V12C7.44772 12 7 11.5523 7 11V11Z",fill:"#DC1F00"}))),e)},this.renderHelper=()=>{const{helperText:e,baseId:s}=this,{baseClassnameCustom:t}=u.C;return(0,o.h)("div",{id:`${s}__helper`,class:`${t}__helper`},e)}}componentDidLoad(){this.setSelectedOption();const n=this.getElement();!n||B(n,e=>{this.onOptionsRemovedChangeSection(e)})}setSelectedOption(n=[]){const e=this.getElement(),s=e.querySelectorAll("option"),t=this.value,{hrbSelectChange:i}=this;if(!t)return e.options.selectedIndex=-1,e.selectedIndex=-1,e.value=null,void(this.selectedOption=null);let a,r=Array.from(s).findIndex(d=>d.value===t);n.includes(t)&&(r=-1),r>-1&&(a=s[r]),-1===r&&(this.value="",this.selectedOption=null);let c="";a&&(c=a.value),e.value=c,e.options.selectedIndex=r,e.selectedIndex=r,this.selectedOption={value:c,text:a.textContent},i.emit(this)}getContainerClasses(){const{baseClassnameNative:n}=u.C,{selectedOption:e,isActive:s,isFocused:t,hasError:i,disabled:l,loading:r}=this;return(0,k.g)([n,!["",null,void 0].includes(e?e.value:"")&&`${n}--has-text`,s&&`${n}--is-active`,t&&`${n}--is-focused`,i&&`${n}--has-error`,l&&`${n}--is-disabled`,r&&`${n}--is-loading`])}render(){const{disabled:n,errorLabel:e,hasError:s,helperText:t,loading:i,onBlur:l,onChange:r,onClick:a,onFocus:c,onInput:d,renderError:g,renderHelper:f,renderLoader:w,selectedOption:v,autoIdentifier:I}=this,{baseClassnameNative:_,inputIcons:{chevronDown:S,chevronUp:F}}=u.C,x=`${_}__icon`,y=this.getContainerClasses(),L=v?v.text:"";return(0,o.h)(o.H,null,(0,o.h)("span",{class:y},(0,o.h)("span",{class:`${_}__label`},this.label),(0,o.h)("span",{class:`${_}__faux-select`},(0,o.h)("span",{class:`${_}__value`},L),(0,o.h)("span",{class:`${x}-container`},(0,o.h)("hrb-icon",{name:F,class:`${x} ${x}-up`}),(0,o.h)("hrb-icon",{name:S,class:`${x} ${x}-down`})),i&&w()),(0,o.h)("select",{class:`${_}__select`,disabled:n,onBlur:l,onChange:r,onClick:a,onFocus:c,onInput:d,"data-hrb-select-focus-target":!0,"data-automation-input":I,"data-hrb-select-input":!0},(0,o.h)("slot",null))),s&&!!e&&g(),t&&f())}get el(){return(0,o.g)(this)}};R.style='hrb-select-native{display:block;position:relative}.hrb-select-native{-ms-flex-align:end;align-items:flex-end;background-color:#f1f5f7;border:2px solid transparent;border-radius:16px;display:-ms-flexbox;display:flex;height:80px;overflow:hidden;position:relative;-webkit-transition:border-color 200ms ease;transition:border-color 200ms ease;-ms-flex-align:stretch;align-items:stretch;overflow:visible}.hrb-select-native.hrb-select-native--is-focused{border-color:#11A63D}.hrb-select-native.hrb-select-native--has-error{background-color:#fef8fb;border-color:#dc1f00}.hrb-select-native.hrb-select-native--is-disabled{opacity:0.6}.hrb-select-native:focus{outline:none}.hrb-select-native__label{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5;-webkit-box-orient:vertical;color:#6e6e6e;display:-webkit-box;left:20px;-webkit-line-clamp:2;overflow:hidden;position:absolute;right:20px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transform-origin:0;transform-origin:0;-webkit-transition:color 200ms ease, -webkit-transform 200ms ease;transition:color 200ms ease, -webkit-transform 200ms ease;transition:color 200ms ease, transform 200ms ease;transition:color 200ms ease, transform 200ms ease, -webkit-transform 200ms ease}@media (min-width: 900px){.hrb-select-native__label{font-size:1.125rem;line-height:1.5555555556}}.hrb-select-native--is-focused:not(.hrb-select-native) .hrb-select-native__label,.hrb-select-native--has-text .hrb-select-native__label{display:block;pointer-events:none;text-overflow:ellipsis;-webkit-transform:scale(0.6666666667) translateY(-150%);transform:scale(0.6666666667) translateY(-150%);white-space:nowrap;width:calc((100% * 1.5) - 80px)}.hrb-select-native.hrb-select-native--is-focused:not(.hrb-select-native) .hrb-select-native__label,.hrb-select-native.hrb-select-native--has-text .hrb-select-native__label{width:calc((100% * 1.5) - 100px)}.hrb-select-native--has-error .hrb-select-native__label{color:#dc1f00}.hrb-select-native .hrb-select-native__label{right:50px}.hrb-select-native__faux-select{display:block;width:100%}.hrb-select-native__value{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:1rem;line-height:1.5;background:none;border:0;display:inline-block;line-height:1;margin:0;padding:0;vertical-align:baseline;color:#262626;height:100%;overflow:hidden;padding:40px 20px 14px;text-overflow:ellipsis;white-space:nowrap;width:100%;opacity:0;overflow:hidden;text-align:left;text-overflow:ellipsis;-webkit-transition:opacity 200ms 175ms ease;transition:opacity 200ms 175ms ease;white-space:nowrap;width:95%}@media (min-width: 900px){.hrb-select-native__value{font-size:1.125rem;line-height:1.5555555556}}.hrb-select-native__value::-webkit-caps-lock-indicator,.hrb-select-native__value::-webkit-credentials-auto-fill-button,.hrb-select-native__value::-webkit-search-cancel-button,.hrb-select-native__value::-webkit-search-decoration,.hrb-select-native__value::-webkit-search-results-button,.hrb-select-native__value::-webkit-search-results-decoration{display:none}.hrb-select-native__value::-webkit-credentials-auto-fill-button{-webkit-transform:translateY(-12px);transform:translateY(-12px)}.hrb-select-native__value::-webkit-textfield-decoration-container{padding-right:20px}.hrb-select-native__value::-ms-clear,.hrb-select-native__value::-ms-reveal{display:none}.hrb-select-native__value:focus{outline:none}.hrb-select-native__value:invalid{-webkit-box-shadow:none;box-shadow:none}.false .hrb-select-native__value{padding-right:40px}.hrb-select-native--has-text .hrb-select-native__value{opacity:1}.hrb-select-native__icon-container{display:block;opacity:0;pointer-events:none;position:absolute;right:15px;top:50%;-webkit-transform:translateY(-50%) translateZ(0);transform:translateY(-50%) translateZ(0);-webkit-transition:opacity 100ms ease;transition:opacity 100ms ease;height:24px;opacity:1;width:24px}.hrb-select-native--is-focused:not(.false):not(.hrb-select-native--is-loading) .hrb-select-native__icon-container,.hrb-select-native--has-text:not(.false):not(.hrb-select-native--is-loading) .hrb-select-native__icon-container,.false:not(.false):not(.hrb-select-native--is-loading) .hrb-select-native__icon-container{opacity:1}.false .hrb-select-native__icon-container,.hrb-select-native--is-loading .hrb-select-native__icon-container{opacity:0}.hrb-select-native__icon{left:50%;position:absolute;-webkit-transform:translateX(-50%) translateZ(0);transform:translateX(-50%) translateZ(0);-webkit-transition:opacity 200ms ease;transition:opacity 200ms ease}.hrb-select-native__icon-down{opacity:0}.hrb-select-native--is-active .hrb-select-native__icon-down{opacity:1;-webkit-transition-delay:200ms;transition-delay:200ms}.hrb-select-native__icon-up{opacity:1;-webkit-transition-delay:200ms;transition-delay:200ms}.hrb-select-native--is-active .hrb-select-native__icon-up{opacity:0;-webkit-transition-delay:0ms;transition-delay:0ms}.hrb-select-native__select{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.4285714286;-webkit-appearance:none;-moz-appearance:none;appearance:none;bottom:0;display:block;left:0;opacity:0;position:absolute;right:0;top:0;width:100%}.hrb-select-native__loader{-webkit-animation:fade-in 200ms 100ms ease forwards;animation:fade-in 200ms 100ms ease forwards;display:block;height:18px;opacity:0;pointer-events:none;position:absolute;right:15px;top:calc(50% - 9px);width:18px}.hrb-select-native__error{-ms-flex-align:start;align-items:flex-start;font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.4285714286;color:#dc1f00;display:-ms-flexbox;display:flex;margin-top:16px;padding-left:2px;padding-right:21px}.hrb-select-native__error .hrb-icon{color:#dc1f00;fill:currentColor;height:18px;margin-right:3px;margin-top:1px;min-height:18px;min-width:18px;stroke:currentColor;width:18px}.hrb-select-native__error~[class*=__helper]{margin-top:8px}.hrb-select-native__helper{font-family:"Graphik", "Helvetica Neue", "Helvetica", sans-serif;font-style:normal;font-weight:400;font-size:0.875rem;line-height:1.4285714286;margin-top:14px;padding:0 22px}.hrb-input-error-icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;margin-right:5px}'}}]);