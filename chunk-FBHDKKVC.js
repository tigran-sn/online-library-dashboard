import{c as W,d as Z,f as I}from"./chunk-ESIITTPS.js";import{b as D,c as B,f as L,i as P}from"./chunk-UXHXBERN.js";import{G as O,L as M,M as j,N as q,d as m,e as x,f as V,m as z,o as _,s as E}from"./chunk-F4LPE2TG.js";import{Aa as p,Ca as w,Nb as F,Pb as y,Z as A,_ as h,aa as f,da as n,db as g,fc as H,i as d,ka as k,l as C,lb as T,mb as c,mc as b,nb as v,qc as N,wb as S,xa as u,zb as R}from"./chunk-QCNKWFM4.js";var Y=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275cmp=T({type:s,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,i){},styles:["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}"],encapsulation:2,changeDetection:0})}return s})(),U=V({passive:!0}),K=(()=>{class s{_platform=n(m);_ngZone=n(u);_styleLoader=n(z);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return C;this._styleLoader.load(Y);let t=E(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new d,a="cdk-text-field-autofilled",o=l=>{l.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:l.target,isAutofilled:!0}))):l.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:l.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",o,U),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:r,unlisten:()=>{t.removeEventListener("animationstart",o,U)}}),r}stopMonitoring(e){let t=E(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=A({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var G=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=c({type:s});static \u0275inj=h({})}return s})();var X=new f("MAT_INPUT_VALUE_ACCESSOR"),J=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Q=new f("MAT_INPUT_CONFIG"),we=(()=>{class s{_elementRef=n(p);_platform=n(m);ngControl=n(B,{optional:!0,self:!0});_autofillMonitor=n(K);_ngZone=n(u);_formField=n(Z,{optional:!0});_renderer=n(g);_uid=n(O).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder;_errorStateTracker;_config=n(Q,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_formFieldDescribedBy;_isServer;_isNativeSelect;_isTextarea;_isInFormField;focused=!1;stateChanges=new d;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=_(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(D.required)??!1}set required(e){this._required=_(e)}_required;get type(){return this._type}set type(e){let t=this._type;this._type=e||"text",this._validateType(),!this._isTextarea&&x().has(this._type)&&(this._elementRef.nativeElement.type=this._type),this._type!==t&&this._ensureWheelDefaultBehavior()}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=_(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>x().has(e));constructor(){let e=n(L,{optional:!0}),t=n(P,{optional:!0}),i=n(q),r=n(X,{optional:!0,self:!0}),a=this._elementRef.nativeElement,o=a.nodeName.toLowerCase();r?w(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new j(i,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=o==="select",this._isTextarea=o==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&N(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){J.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}setDescribedByIds(e){let t=this._elementRef.nativeElement,i=t.getAttribute("aria-describedby"),r;if(i){let a=this._formFieldDescribedBy||e;r=e.concat(i.split(" ").filter(o=>o&&!a.includes(o)))}else r=e;this._formFieldDescribedBy=e,r.length?t.setAttribute("aria-describedby",r.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_webkitBlinkWheelListener=()=>{};_ensureWheelDefaultBehavior(){this._cleanupWebkitWheel?.(),this._type==="number"&&(this._platform.BLINK||this._platform.WEBKIT)&&(this._cleanupWebkitWheel=this._renderer.listen(this._elementRef.nativeElement,"wheel",this._webkitBlinkWheelListener))}_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||s)};static \u0275dir=v({type:s,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,i){t&1&&y("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(F("id",i.id)("disabled",i.disabled&&!i.disabledInteractive)("required",i.required),S("name",i.name||null)("readonly",i._getReadonlyAttribute())("aria-disabled",i.disabled&&i.disabledInteractive?"true":null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),R("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mat-mdc-input-disabled-interactive",i.disabledInteractive)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},exportAs:["matInput"],features:[H([{provide:W,useExisting:s}]),k]})}return s})(),Te=(()=>{class s{static \u0275fac=function(t){return new(t||s)};static \u0275mod=c({type:s});static \u0275inj=h({imports:[M,I,I,G,M]})}return s})();export{we as a,Te as b};
