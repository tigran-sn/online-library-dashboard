import{a as xt,b as At,c as Et,d as Mt,e as Tt,f as Ot,g as wt,h as St,i as It,j as kt,k as Rt}from"./chunk-34DOVWFW.js";import{a as ut,b as pt}from"./chunk-77LJH4CN.js";import{a as lt,b as dt,e as ct,f as mt}from"./chunk-FBCPEDPM.js";import{a as Qe,b as B,d as Ze,e as Ke,h as Xe,i as Je,j as et,k as tt,m as it}from"./chunk-3NQWQBWX.js";import{a as bt,b as Dt}from"./chunk-ZC3UWLF4.js";import{Ca as re,Ea as yt,G as nt,H as ot,Ia as se,L as rt,M as st,N as j,O as Ae,R as Ee,ea as k,fa as ht,ga as R,ha as Me,ia as ft,ja as gt,ka as V,la as G,q as at,sa as _t,t as ne,v as oe,wa as Ct,x as xe,xa as vt,ya as Te,za as F}from"./chunk-VHRAZP4T.js";import{$a as ye,A as P,Ac as Ye,Ba as ee,Bb as be,Ca as T,Eb as w,G as Q,Ib as l,Jb as s,Kb as b,La as Ue,Lb as S,Mb as I,Ob as Ge,Pa as Be,Pb as De,Rb as C,S as Z,Tb as v,Xb as He,Yb as ze,Z as K,Zb as We,_ as X,a as f,aa as x,b as q,bb as u,bc as d,cc as h,da as o,db as je,dc as ae,fb as te,i as y,la as Le,ma as Ce,n as Re,na as ve,nb as _,nc as $e,ob as ie,pb as A,qa as J,qb as O,rb as Ve,sa as N,sb as p,uc as qe,w as Y,xa as Pe,ya as Ne,yb as U,z as Fe,zb as g}from"./chunk-EERKQ2IA.js";function $t(i,n){}var E=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;componentFactoryResolver;providers;container;templateContext};var Se=(()=>{class i extends gt{_elementRef=o(T);_focusTrapFactory=o(ot);_config;_interactivityChecker=o(nt);_ngZone=o(Ne);_overlayRef=o(Te);_focusMonitor=o(rt);_renderer=o(te);_platform=o(at);_document=o(Ye,{optional:!0});_portalOutlet;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_changeDetectorRef=o($e);_injector=o(N);_isDestroyed=!1;constructor(){super(),this._config=o(E,{optional:!0})||new E,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{r(),m(),e.removeAttribute("tabindex")},r=this._renderer.listen(e,"blur",a),m=this._renderer.listen(e,"mousedown",a)})),e.focus(t)}_focusByCssSelector(e,t){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,t)}_trapFocus(){this._isDestroyed||Be(()=>{let e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let a=ne(),r=this._elementRef.nativeElement;(!a||a===this._document.body||a===r||r.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let e=this._elementRef.nativeElement,t=ne();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ne()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,a){if(t&1&&He(V,7),t&2){let r;ze(r=We())&&(a._portalOutlet=r.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,a){t&2&&U("id",a._config.id||null)("role",a._config.role)("aria-modal",a._config.ariaModal)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null)},features:[O],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,a){t&1&&p(0,$t,0,0,"ng-template",0)},dependencies:[V],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}return i})(),H=class{overlayRef;config;componentInstance;componentRef;containerInstance;disableClose;closed=new y;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!oe(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this.containerInstance){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(n),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}},qt=new x("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=o(F);return()=>i.scrollStrategies.block()}}),Yt=new x("DialogData"),Qt=new x("DefaultDialogConfig");var Ie=(()=>{class i{_overlay=o(F);_injector=o(N);_defaultOptions=o(Qt,{optional:!0});_parentDialog=o(i,{optional:!0,skipSelf:!0});_overlayContainer=o(vt);_idGenerator=o(j);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;_ariaHiddenElements=new Map;_scrollStrategy=o(qt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Y(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Z(void 0)));constructor(){}open(e,t){let a=this._defaultOptions||new E;t=f(f({},a),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let r=this._getOverlayConfig(t),m=this._overlay.create(r),c=new H(m,t),M=this._attachContainer(m,c,t);return c.containerInstance=M,this._attachDialogContent(e,c,M,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){Oe(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){Oe(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Oe(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Ct({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,a){let r=a.injector||a.viewContainerRef?.injector,m=[{provide:E,useValue:a},{provide:H,useValue:t},{provide:Te,useValue:e}],c;a.container?typeof a.container=="function"?c=a.container:(c=a.container.type,m.push(...a.container.providers(a))):c=Se;let M=new Me(c,a.viewContainerRef,N.create({parent:r||this._injector,providers:m}));return e.attach(M).instance}_attachDialogContent(e,t,a,r){if(e instanceof je){let m=this._createInjector(r,t,a,void 0),c={$implicit:r.data,dialogRef:t};r.templateContext&&(c=f(f({},c),typeof r.templateContext=="function"?r.templateContext():r.templateContext)),a.attachTemplatePortal(new ft(e,null,c,m))}else{let m=this._createInjector(r,t,a,this._injector),c=a.attachComponentPortal(new Me(e,r.viewContainerRef,m));t.componentRef=c,t.componentInstance=c.instance}}_createInjector(e,t,a,r){let m=e.injector||e.viewContainerRef?.injector,c=[{provide:Yt,useValue:e.data},{provide:H,useValue:t}];return e.providers&&(typeof e.providers=="function"?c.push(...e.providers(t,e,a)):c.push(...e.providers)),e.direction&&(!m||!m.get(Ae,null,{optional:!0}))&&c.push({provide:Ae,useValue:{value:e.direction,change:Re()}}),N.create({parent:m||r,providers:c})}_removeOpenDialog(e,t){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((r,m)=>{r?m.setAttribute("aria-hidden",r):m.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let e=this._overlayContainer.getContainerElement();if(e.parentElement){let t=e.parentElement.children;for(let a=t.length-1;a>-1;a--){let r=t[a];r!==e&&r.nodeName!=="SCRIPT"&&r.nodeName!=="STYLE"&&!r.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(r,r.getAttribute("aria-hidden")),r.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=K({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Oe(i,n){let e=i.length;for(;e--;)n(i[e])}var Ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ie({type:i});static \u0275inj=X({providers:[Ie],imports:[re,G,st,G]})}return i})();function Zt(i,n){}var de=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;componentFactoryResolver;enterAnimationDuration;exitAnimationDuration},ke="mdc-dialog--open",Lt="mdc-dialog--opening",Pt="mdc-dialog--closing",Kt=150,Xt=75,Jt=(()=>{class i extends Se{_animationMode=o(Ue,{optional:!0});_animationStateChanged=new Pe;_animationsEnabled=this._animationMode!=="NoopAnimations";_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Ut(this._config.enterAnimationDuration)??Kt:0;_exitAnimationDuration=this._animationsEnabled?Ut(this._config.exitAnimationDuration)??Xt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Nt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Lt,ke)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ke),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ke),this._animationsEnabled?(this._hostElement.style.setProperty(Nt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Pt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Lt,Pt)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(a){return(e||(e=J(i)))(a||i)}})();static \u0275cmp=_({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,a){t&2&&(De("id",a._config.id),U("aria-modal",a._config.ariaModal)("role",a._config.role)("aria-labelledby",a._config.ariaLabel?null:a._ariaLabelledByQueue[0])("aria-label",a._config.ariaLabel)("aria-describedby",a._config.ariaDescribedBy||null),be("_mat-animation-noopable",!a._animationsEnabled)("mat-mdc-dialog-container-with-actions",a._actionSectionCount>0))},features:[O],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,a){t&1&&(l(0,"div",0)(1,"div",1),p(2,Zt,0,0,"ng-template",2),s()())},dependencies:[V],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 560px);min-width:var(--mat-dialog-container-min-width, 280px)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, calc(100vw - 32px))}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, none);border-radius:var(--mdc-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-sys-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 6px 24px 13px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px 0)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 16px 24px);justify-content:var(--mat-dialog-actions-alignment, flex-end)}@media(forced-colors: active){.mat-mdc-dialog-actions{border-top-color:CanvasText}}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2})}return i})(),Nt="--mat-dialog-transition-duration";function Ut(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?xe(i.substring(0,i.length-2)):i.endsWith("s")?xe(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var le=function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i}(le||{}),D=class{_ref;_containerInstance;componentInstance;componentRef;disableClose;id;_afterOpened=new y;_beforeClosed=new y;_result;_closeFallbackTimeout;_state=le.OPEN;_closeInteractionType;constructor(n,e,t){this._ref=n,this._containerInstance=t,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(P(a=>a.state==="opened"),Q(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(P(a=>a.state==="closed"),Q(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Fe(this.backdropClick(),this.keydownEvents().pipe(P(a=>a.keyCode===27&&!this.disableClose&&!oe(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),Bt(this,a.type==="keydown"?"keyboard":"mouse"))})}close(n){this._result=n,this._containerInstance._animationStateChanged.pipe(P(e=>e.state==="closing"),Q(1)).subscribe(e=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=le.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=le.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Bt(i,n,e){return i._closeInteractionType=n,i.close(e)}var W=new x("MatMdcDialogData"),ei=new x("mat-mdc-dialog-default-options"),ti=new x("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=o(F);return()=>i.scrollStrategies.block()}});var $=(()=>{class i{_overlay=o(F);_defaultOptions=o(ei,{optional:!0});_scrollStrategy=o(ti);_parentDialog=o(i,{optional:!0,skipSelf:!0});_idGenerator=o(j);_dialog=o(Ie);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new y;_afterOpenedAtThisLevel=new y;dialogConfigClass=de;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Y(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Z(void 0)));constructor(){this._dialogRefConstructor=D,this._dialogContainerType=Jt,this._dialogDataToken=W}open(e,t){let a;t=f(f({},this._defaultOptions||new de),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let r=this._dialog.open(e,q(f({},t),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:E,useValue:t}]},templateContext:()=>({dialogRef:a}),providers:(m,c,M)=>(a=new this._dialogRefConstructor(m,t,M),a.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:M},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:a}])}));return a.componentRef=r.componentRef,a.componentInstance=r.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let m=this.openDialogs.indexOf(a);m>-1&&(this.openDialogs.splice(m,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=K({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ce=(()=>{class i{dialogRef=o(D,{optional:!0});_elementRef=o(T);_dialog=o($);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=Vt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){Bt(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(t,a){t&1&&C("click",function(m){return a._onButtonClick(m)}),t&2&&U("aria-label",a.ariaLabel||null)("type",a.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Le]})}return i})(),jt=(()=>{class i{_dialogRef=o(D,{optional:!0});_elementRef=o(T);_dialog=o($);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Vt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i})}return i})(),me=(()=>{class i extends jt{id=o(j).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=J(i)))(a||i)}})();static \u0275dir=A({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,a){t&2&&De("id",a.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[O]})}return i})(),ue=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=A({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Ve([_t])]})}return i})(),pe=(()=>{class i extends jt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=J(i)))(a||i)}})();static \u0275dir=A({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,a){t&2&&be("mat-mdc-dialog-actions-align-start",a.align==="start")("mat-mdc-dialog-actions-align-center",a.align==="center")("mat-mdc-dialog-actions-align-end",a.align==="end")},inputs:{align:"align"},features:[O]})}return i})();function Vt(i,n){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(t=>t.id===e.id):null}var L=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ie({type:i});static \u0275inj=X({providers:[$],imports:[Ft,re,G,Ee,Ee]})}return i})();function he(i=0){return n=>{if(n.value===null||n.value===void 0)return null;let e=n.value.trim();return e.length===0?{whitespace:!0}:i>0&&e.length<i?{minlength:{requiredLength:i,actualLength:e.length}}:null}}function ii(i,n){if(i&1&&(l(0,"mat-error"),d(1),s()),i&2){let e=v();u(),h(e.getErrorMessage("first_name"))}}function ai(i,n){if(i&1&&(l(0,"mat-error"),d(1),s()),i&2){let e=v();u(),h(e.getErrorMessage("last_name"))}}function ni(i,n){if(i&1&&(l(0,"mat-error"),d(1),s()),i&2){let e=v();u(),h(e.getErrorMessage("email"))}}var fe=class i{fb=o(tt);dialogRef=o(D);data=o(W,{optional:!0})||{};userForm;constructor(){this.userForm=this.fb.group({id:[this.data?.id],first_name:[this.data?.first_name||"",[B.required,he(2)]],last_name:[this.data?.last_name||"",[B.required,he(2)]],email:[this.data?.email||"",[B.required,B.email,he()]],avatar:[this.data?.avatar||"",[]]})}onSubmit(){if(this.userForm.valid){let n=this.userForm.value,e=q(f({},n),{first_name:n.first_name.trim(),last_name:n.last_name.trim(),email:n.email.trim()});this.dialogRef.close(e)}}getErrorMessage(n){let e=this.userForm.get(n);if(e?.touched){if(e.hasError("required"))return`${n.replace("_"," ")} is required`;if(e.hasError("whitespace"))return`${n.replace("_"," ")} cannot be empty`;if(e.hasError("minlength"))return`${n.replace("_"," ")} must be at least 2 characters`;if(e.hasError("email"))return"Please enter a valid email address"}return""}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-user-dialog"]],decls:28,vars:7,consts:[["mat-dialog-title",""],[3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","first_name"],["matInput","","formControlName","last_name"],["matInput","","formControlName","email","type","email"],["matInput","","formControlName","avatar","type","text"],["align","end"],["mat-button","","type","button","mat-dialog-close",""],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(e,t){e&1&&(l(0,"h2",0),d(1),s(),l(2,"form",1),C("ngSubmit",function(){return t.onSubmit()}),l(3,"mat-dialog-content")(4,"mat-form-field",2)(5,"mat-label"),d(6,"First Name"),s(),b(7,"input",3),p(8,ii,2,1,"mat-error"),s(),l(9,"mat-form-field",2)(10,"mat-label"),d(11,"Last Name"),s(),b(12,"input",4),p(13,ai,2,1,"mat-error"),s(),l(14,"mat-form-field",2)(15,"mat-label"),d(16,"Email"),s(),b(17,"input",5),p(18,ni,2,1,"mat-error"),s(),l(19,"mat-form-field",2)(20,"mat-label"),d(21,"Avatar"),s(),b(22,"input",6),s()(),l(23,"mat-dialog-actions",7)(24,"button",8),d(25,"Cancel"),s(),l(26,"button",9),d(27),s()()()),e&2&&(u(),h(t.data.id?"Edit User":"Add User"),u(),g("formGroup",t.userForm),u(6),w(t.getErrorMessage("first_name")?8:-1),u(5),w(t.getErrorMessage("last_name")?13:-1),u(5),w(t.getErrorMessage("email")?18:-1),u(8),g("disabled",t.userForm.invalid||t.userForm.pristine),u(),ae(" ",t.data.id?"Update":"Create"," "))},dependencies:[it,Xe,Qe,Ze,Ke,Je,et,L,ce,me,pe,ue,mt,ct,lt,dt,pt,ut,R,k],styles:["mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;min-width:300px}mat-dialog-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"]})};var ge=class i{dialogRef=o(D);data=o(W,{optional:!0})||{};static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-confirm-dialog"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["align","end"],["mat-button","","mat-dialog-close",""],["mat-raised-button","","color","warn",3,"mat-dialog-close"]],template:function(e,t){e&1&&(l(0,"h2",0),d(1),s(),l(2,"mat-dialog-content")(3,"p"),d(4),s()(),l(5,"mat-dialog-actions",1)(6,"button",2),d(7,"Cancel"),s(),l(8,"button",3),d(9," Delete "),s()()),e&2&&(u(),h(t.data.title),u(3),h(t.data.message),u(4),g("mat-dialog-close",!0))},dependencies:[L,ce,me,pe,ue,R,k],styles:["mat-dialog-content[_ngcontent-%COMP%]{min-width:300px}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:16px 0}"]})};var _e=class i{el=o(T);renderer=o(te);avatarUtils=o(se);firstName=ee(void 0);lastName=ee(void 0);fallbackChar=ee("?");constructor(){qe(()=>{let n=this.avatarUtils.getInitials(this.firstName(),this.lastName(),this.fallbackChar());this.el.nativeElement.alt||this.renderer.setAttribute(this.el.nativeElement,"alt",n)})}onImageError(){let n=this.el.nativeElement,e=n.parentElement;if(e){let t=n.alt||this.avatarUtils.getInitials(this.firstName(),this.lastName(),this.fallbackChar()),a=this.renderer.createElement("div");this.renderer.addClass(a,"avatar-circle"),this.renderer.setProperty(a,"textContent",t),this.renderer.insertBefore(e,a,n),this.renderer.removeChild(e,n)}}static \u0275fac=function(e){return new(e||i)};static \u0275dir=A({type:i,selectors:[["img","appInitialsAvatar",""]],hostBindings:function(e,t){e&1&&C("error",function(){return t.onImageError()})},inputs:{firstName:[1,"firstName"],lastName:[1,"lastName"],fallbackChar:[1,"fallbackChar"]}})};function oi(i,n){i&1&&(l(0,"th",14),d(1,"Avatar"),s())}function ri(i,n){if(i&1&&b(0,"img",16),i&2){let e=v().$implicit;g("src",e.avatar,ye)("firstName",e.first_name)("lastName",e.last_name)}}function si(i,n){if(i&1&&(l(0,"div",17),d(1),s()),i&2){let e=v().$implicit,t=v();u(),ae(" ",t.avatarUtils.getInitials(e.first_name,e.last_name)," ")}}function li(i,n){if(i&1&&(l(0,"td",15),p(1,ri,1,3,"img",16)(2,si,2,1,"div",17),s()),i&2){let e=n.$implicit;u(),w(e.avatar?1:2)}}function di(i,n){i&1&&(l(0,"th",14),d(1,"First Name"),s())}function ci(i,n){if(i&1&&(l(0,"td",15),d(1),s()),i&2){let e=n.$implicit;u(),h(e.first_name)}}function mi(i,n){i&1&&(l(0,"th",14),d(1,"Last Name"),s())}function ui(i,n){if(i&1&&(l(0,"td",15),d(1),s()),i&2){let e=n.$implicit;u(),h(e.last_name)}}function pi(i,n){i&1&&(l(0,"th",14),d(1,"Email"),s())}function hi(i,n){if(i&1&&(l(0,"td",15)(1,"a",18),d(2),s()()),i&2){let e=n.$implicit;u(),g("href","mailto:"+e.email,ye),u(),h(e.email)}}function fi(i,n){i&1&&(l(0,"th",14),d(1,"Actions"),s())}function gi(i,n){if(i&1){let e=Ge();l(0,"td",15)(1,"button",19),C("click",function(){let a=Ce(e).$implicit,r=v();return ve(r.openUserDialog(a))}),l(2,"mat-icon"),d(3,"edit"),s()(),l(4,"button",20),C("click",function(){let a=Ce(e).$implicit,r=v();return ve(r.deleteUser(a))}),l(5,"mat-icon"),d(6,"delete"),s()()()}}function _i(i,n){i&1&&b(0,"tr",21)}function Ci(i,n){i&1&&b(0,"tr",22)}var Wt=class i{userService=o(yt);dialog=o($);avatarUtils=o(se);users=this.userService.users;displayedColumns=["avatar","first_name","last_name","email","actions"];ngOnInit(){this.loadUsers()}loadUsers(){this.userService.getUsers().subscribe()}openUserDialog(n){this.dialog.open(fe,{width:"400px",data:n||{}}).afterClosed().subscribe(t=>{t&&(t.id?this.userService.updateUser(t).subscribe():this.userService.createUser(t).subscribe())})}deleteUser(n){this.dialog.open(ge,{width:"400px",data:{title:"Confirm Delete",message:`Are you sure you want to delete user ${n.first_name} ${n.last_name}?`}}).afterClosed().subscribe(t=>{t&&this.userService.deleteUser(n.id).subscribe()})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-users"]],decls:27,vars:3,consts:[[1,"users-container"],[1,"actions-bar"],["mat-raised-button","","color","primary",3,"click"],[1,"table-responsive"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","avatar"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","first_name"],["matColumnDef","last_name"],["matColumnDef","email"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["alt","User avatar","appInitialsAvatar","",1,"user-avatar",3,"src","firstName","lastName"],[1,"avatar-circle"],[3,"href"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"h2"),d(3,"Users Management"),s(),l(4,"button",2),C("click",function(){return t.openUserDialog()}),l(5,"mat-icon"),d(6,"add"),s(),d(7," Add User "),s()(),l(8,"div",3)(9,"table",4),S(10,5),p(11,oi,2,0,"th",6)(12,li,3,1,"td",7),I(),S(13,8),p(14,di,2,0,"th",6)(15,ci,2,1,"td",7),I(),S(16,9),p(17,mi,2,0,"th",6)(18,ui,2,1,"td",7),I(),S(19,10),p(20,pi,2,0,"th",6)(21,hi,3,2,"td",7),I(),S(22,11),p(23,fi,2,0,"th",6)(24,gi,7,0,"td",7),I(),p(25,_i,1,0,"tr",12)(26,Ci,1,0,"tr",13),s()()()),e&2&&(u(9),g("dataSource",t.users()),u(16),g("matHeaderRowDef",t.displayedColumns),u(),g("matRowDefColumns",t.displayedColumns))},dependencies:[Rt,xt,Et,wt,Mt,At,St,Tt,Ot,It,kt,R,k,ht,Dt,bt,L,_e],styles:[".users-container[_ngcontent-%COMP%]{padding:2rem}.users-container[_ngcontent-%COMP%]   .actions-bar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}@media (max-width: 768px){.users-container[_ngcontent-%COMP%]   .actions-bar[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}}.users-container[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%}.users-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.users-container[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;object-fit:cover}.users-container[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;background-color:#1976d2;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:500;font-size:16px}"]})};export{Wt as UsersComponent};
