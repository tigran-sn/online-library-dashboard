import{H as I,I as x,d as k,g as c,h as F,i as d,s as B}from"./chunk-F4LPE2TG.js";import{A as V,Aa as z,B as S,Z as w,_ as C,aa as R,cb as E,da as o,db as O,f as D,h as b,i as a,mb as y,n as v,nb as T,wc as M,xa as _}from"./chunk-QCNKWFM4.js";function Q(r){return r&&typeof r.connect=="function"&&!(r instanceof b)}var g=function(r){return r[r.REPLACED=0]="REPLACED",r[r.INSERTED=1]="INSERTED",r[r.MOVED=2]="MOVED",r[r.REMOVED=3]="REMOVED",r}(g||{}),$=new R("_ViewRepeater"),L=class{applyChanges(i,e,t,s,n){i.forEachOperation((l,h,p)=>{let u,f;if(l.previousIndex==null){let m=t(l,h,p);u=e.createEmbeddedView(m.templateRef,m.context,m.index),f=g.INSERTED}else p==null?(e.remove(h),f=g.REMOVED):(u=e.get(h),e.move(u,p),f=g.MOVED);n&&n({context:u?.context,operation:f,record:l})})}detach(){}};var A=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new a;constructor(i=!1,e,t=!0,s){this._multiple=i,this._emitChanges=t,this.compareWith=s,e&&e.length&&(i?e.forEach(n=>this._markSelected(n)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i);i.forEach(n=>this._markSelected(n)),e.filter(n=>!t.has(this._getConcreteValue(n,t))).forEach(n=>this._unmarkSelected(n));let s=this._hasQueuedChanges();return this._emitChangeEvent(),s}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var N=20,j=(()=>{class r{_ngZone=o(_);_platform=o(k);_renderer=o(E).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new a;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=N){return this._platform.isBrowser?new D(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let s=e>0?this._scrolled.pipe(S(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{s.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):v()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let s=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(V(n=>!n||s.indexOf(n)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((s,n)=>{this._scrollableContainsElement(n,e)&&t.push(n)}),t}_scrollableContainsElement(e,t){let s=B(t),n=e.getElementRef().nativeElement;do if(s==n)return!0;while(s=s.parentElement);return!1}static \u0275fac=function(t){return new(t||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),$e=(()=>{class r{elementRef=o(z);scrollDispatcher=o(j);ngZone=o(_);dir=o(I,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new a;_renderer=o(O);_cleanupScroll;_elementScrolled=new a;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,s=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=s?e.end:e.start),e.right==null&&(e.right=s?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),s&&d()!=c.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),d()==c.INVERTED?e.left=e.right:d()==c.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;F()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",s="right",n=this.elementRef.nativeElement;if(e=="top")return n.scrollTop;if(e=="bottom")return n.scrollHeight-n.clientHeight-n.scrollTop;let l=this.dir&&this.dir.value=="rtl";return e=="start"?e=l?s:t:e=="end"&&(e=l?t:s),l&&d()==c.INVERTED?e==t?n.scrollWidth-n.clientWidth-n.scrollLeft:n.scrollLeft:l&&d()==c.NEGATED?e==t?n.scrollLeft+n.scrollWidth-n.clientWidth:-n.scrollLeft:e==t?n.scrollLeft:n.scrollWidth-n.clientWidth-n.scrollLeft}static \u0275fac=function(t){return new(t||r)};static \u0275dir=T({type:r,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return r})(),U=20,Ye=(()=>{class r{_platform=o(k);_listeners;_viewportSize;_change=new a;_document=o(M,{optional:!0});constructor(){let e=o(_),t=o(E).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let s=n=>this._change.next(n);this._listeners=[t.listen("window","resize",s),t.listen("window","orientationchange",s)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:s}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+s,right:e.left+t,height:s,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),s=e.documentElement,n=s.getBoundingClientRect(),l=-n.top||e.body.scrollTop||t.scrollY||s.scrollTop||0,h=-n.left||e.body.scrollLeft||t.scrollX||s.scrollLeft||0;return{top:l,left:h}}change(e=U){return e>0?this._change.pipe(S(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||r)};static \u0275prov=w({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var P=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=y({type:r});static \u0275inj=C({})}return r})(),qe=(()=>{class r{static \u0275fac=function(t){return new(t||r)};static \u0275mod=y({type:r});static \u0275inj=C({imports:[x,P,x,P]})}return r})();export{Q as a,g as b,$ as c,L as d,A as e,j as f,$e as g,Ye as h,P as i,qe as j};
