// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__14214_SHARP_,p2__14215_SHARP_){
return cljs.core.assoc.call(null,p1__14214_SHARP_,p2__14215_SHARP_.getAttribute("static-id"),p2__14215_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args14216 = [];
var len__9159__auto___14219 = arguments.length;
var i__9160__auto___14220 = (0);
while(true){
if((i__9160__auto___14220 < len__9159__auto___14219)){
args14216.push((arguments[i__9160__auto___14220]));

var G__14221 = (i__9160__auto___14220 + (1));
i__9160__auto___14220 = G__14221;
continue;
} else {
}
break;
}

var G__14218 = args14216.length;
switch (G__14218) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14216.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.call(null,ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,ref));

cljs.core.add_watch.call(null,ref,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__14229 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__14230 = cljs.core.seq.call(null,vec__14229);
var first__14231 = cljs.core.first.call(null,seq__14230);
var seq__14230__$1 = cljs.core.next.call(null,seq__14230);
var f = first__14231;
var more = seq__14230__$1;
var vec__14232 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__14232,(0),null);
var f2 = cljs.core.nth.call(null,vec__14232,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("20b8864fda7b41dc8a6b1374366dd9bf")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__14235_SHARP_){
return cljs.core.zipmap.call(null,p1__14235_SHARP_,cljs.core.repeat.call(null,true));
});
if(cljs.core.map_QMARK_.call(null,kvs)){
return kvs;
} else {
return __GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__7938__auto__ = (function (){var and__7926__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__7926__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__7926__auto__;
}
})();
if(cljs.core.truth_(or__7938__auto__)){
return or__7938__auto__;
} else {
var G__14236 = (i + (1));
var G__14237 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__14236;
ret = G__14237;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var args14238 = [];
var len__9159__auto___14241 = arguments.length;
var i__9160__auto___14242 = (0);
while(true){
if((i__9160__auto___14242 < len__9159__auto___14241)){
args14238.push((arguments[i__9160__auto___14242]));

var G__14243 = (i__9160__auto___14242 + (1));
i__9160__auto___14242 = G__14243;
continue;
} else {
}
break;
}

var G__14240 = args14238.length;
switch (G__14240) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14238.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_.call(null,hoplon.core.vflatten.call(null,tree,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count.call(null,tree);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,l)){
return ret;
} else {
var x = cljs.core.nth.call(null,tree,i);
if(!(cljs.core.sequential_QMARK_.call(null,x))){
cljs.core.conj_BANG_.call(null,ret,x);
} else {
hoplon.core.vflatten.call(null,x,ret);
}

var G__14245 = (i + (1));
i = G__14245;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__8656__auto__ = (((this$ == null))?null:this$);
var m__8657__auto__ = (hoplon.core.node[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,this$);
} else {
var m__8657__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return hoplon.core.$text.call(null,this$);
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
return hoplon.core.$text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x))){
return hoplon.core.node.call(null,x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__14249_SHARP_,p2__14248_SHARP_){
if((p2__14248_SHARP_ == null)){
return p1__14249_SHARP_;
} else {
return cljs.core.conj.call(null,p1__14249_SHARP_,p2__14248_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__14276 = new$__$1;
var vec__14278 = G__14276;
var seq__14279 = cljs.core.seq.call(null,vec__14278);
var first__14280 = cljs.core.first.call(null,seq__14279);
var seq__14279__$1 = cljs.core.next.call(null,seq__14279);
var x = first__14280;
var xs = seq__14279__$1;
var G__14277 = hoplon.core.child_vec.call(null,this$);
var vec__14281 = G__14277;
var seq__14282 = cljs.core.seq.call(null,vec__14281);
var first__14283 = cljs.core.first.call(null,seq__14282);
var seq__14282__$1 = cljs.core.next.call(null,seq__14282);
var k = first__14283;
var ks = seq__14282__$1;
var kids = vec__14281;
var G__14276__$1 = G__14276;
var G__14277__$1 = G__14277;
while(true){
var vec__14284 = G__14276__$1;
var seq__14285 = cljs.core.seq.call(null,vec__14284);
var first__14286 = cljs.core.first.call(null,seq__14285);
var seq__14285__$1 = cljs.core.next.call(null,seq__14285);
var x__$1 = first__14286;
var xs__$1 = seq__14285__$1;
var vec__14287 = G__14277__$1;
var seq__14288 = cljs.core.seq.call(null,vec__14287);
var first__14289 = cljs.core.first.call(null,seq__14288);
var seq__14288__$1 = cljs.core.next.call(null,seq__14288);
var k__$1 = first__14289;
var ks__$1 = seq__14288__$1;
var kids__$1 = vec__14287;
if(cljs.core.truth_((function (){var or__7938__auto__ = x__$1;
if(cljs.core.truth_(or__7938__auto__)){
return or__7938__auto__;
} else {
return k__$1;
}
})())){
var G__14290 = xs__$1;
var G__14291 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__14276__$1 = G__14290;
G__14277__$1 = G__14291;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_14292 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_14292;

hoplon.core.do_watch.call(null,kids_14292,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids.call(null,this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not.call(null,hoplon.core.native_QMARK_.call(null,elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_.call(null,parent);

var kids_14295 = kidfn.call(null,parent);
var i_14296 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_14295));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_14295,i_14296,child__$1){
return (function (p1__14294_SHARP_,p2__14293_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_14295,cljs.core.assoc,i_14296,p2__14293_SHARP_);
});})(kids_14295,i_14296,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_14295,cljs.core.assoc,i_14296,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__7926__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__7926__auto__)){
return cljs.core.not.call(null,javelin.core.cell_QMARK_.call(null,child));
} else {
return and__7926__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__7926__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__7926__auto__)){
return javelin.core.cell_QMARK_.call(null,child);
} else {
return and__7926__auto__;
}
})())){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_.call(null,this$__$1))){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.call(null,"Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("hoplon.core","unexpected-child-type","hoplon.core/unexpected-child-type",1756641127),new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"native?","native?",-1916990868),hoplon.core.native_QMARK_.call(null,child),new cljs.core.Keyword(null,"managed?","managed?",-1222195407),hoplon.core.managed_QMARK_.call(null,child),new cljs.core.Keyword(null,"this","this",-611633625),this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__14297_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__14297_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

if(cljs.core.not.call(null,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.call(null,x__$1,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__14298_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__14298_SHARP_));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__14299_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14299_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_14300 = cljs.core.keyword.call(null,k);
var attr_14301 = attrfn.call(null,this$__$1);
var has_QMARK__14302 = (function (){var and__7926__auto__ = attr_14301;
if(cljs.core.truth_(and__7926__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_14301),kk_14300);
} else {
return and__7926__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14302)){
cljs.core.swap_BANG_.call(null,attr_14301,cljs.core.assoc,kk_14300,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__14303_SHARP_){
return p1__14303_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__14304_SHARP_){
return p1__14304_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__14305_SHARP_){
return p1__14305_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__14306_SHARP_){
return p1__14306_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8656__auto__ = (((this$ == null))?null:this$);
var m__8657__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,this$,kvs);
} else {
var m__8657__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__8656__auto__ = (((this$ == null))?null:this$);
var m__8657__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,this$,kvs);
} else {
var m__8657__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__8656__auto__ = (((this$ == null))?null:this$);
var m__8657__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,this$,child);
} else {
var m__8657__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__8656__auto__ = (((this$ == null))?null:this$);
var m__8657__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,this$,child);
} else {
var m__8657__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__8656__auto__ = (((this$ == null))?null:this$);
var m__8657__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,this$,new$,existing);
} else {
var m__8657__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__8656__auto__ = (((this$ == null))?null:this$);
var m__8657__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,this$,new$,existing);
} else {
var m__8657__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args14307 = [];
var len__9159__auto___14314 = arguments.length;
var i__9160__auto___14315 = (0);
while(true){
if((i__9160__auto___14315 < len__9159__auto___14314)){
args14307.push((arguments[i__9160__auto___14315]));

var G__14316 = (i__9160__auto___14315 + (1));
i__9160__auto___14315 = G__14316;
continue;
} else {
}
break;
}

var G__14313 = args14307.length;
switch (G__14313) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9182__auto__ = (new cljs.core.IndexedSeq(args14307.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9182__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14308){
var G__14309 = cljs.core.first.call(null,seq14308);
var seq14308__$1 = cljs.core.next.call(null,seq14308);
var G__14310 = cljs.core.first.call(null,seq14308__$1);
var seq14308__$2 = cljs.core.next.call(null,seq14308__$1);
var G__14311 = cljs.core.first.call(null,seq14308__$2);
var seq14308__$3 = cljs.core.next.call(null,seq14308__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14309,G__14310,G__14311,seq14308__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args14318 = [];
var len__9159__auto___14325 = arguments.length;
var i__9160__auto___14326 = (0);
while(true){
if((i__9160__auto___14326 < len__9159__auto___14325)){
args14318.push((arguments[i__9160__auto___14326]));

var G__14327 = (i__9160__auto___14326 + (1));
i__9160__auto___14326 = G__14327;
continue;
} else {
}
break;
}

var G__14324 = args14318.length;
switch (G__14324) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9182__auto__ = (new cljs.core.IndexedSeq(args14318.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9182__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14319){
var G__14320 = cljs.core.first.call(null,seq14319);
var seq14319__$1 = cljs.core.next.call(null,seq14319);
var G__14321 = cljs.core.first.call(null,seq14319__$1);
var seq14319__$2 = cljs.core.next.call(null,seq14319__$1);
var G__14322 = cljs.core.first.call(null,seq14319__$2);
var seq14319__$3 = cljs.core.next.call(null,seq14319__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14320,G__14321,G__14322,seq14319__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return hoplon.core.do_BANG_.call(null,elem,this$,value);
});
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return hoplon.core.on_BANG_.call(null,elem,this$,value);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),null,null),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),null,null),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts14347_14361 = null;
cljs.core.reduce.call(null,((function (opts14347_14361){
return (function (ret__13633__auto__,p__14348){
var vec__14349 = p__14348;
var ___13634__auto__ = cljs.core.nth.call(null,vec__14349,(0),null);
var f__13635__auto__ = cljs.core.nth.call(null,vec__14349,(1),null);
var sym__13636__auto__ = f__13635__auto__.call(null);
var G__14352 = ret__13633__auto__;
if(cljs.core.truth_(sym__13636__auto__)){
return cljs.core.conj.call(null,G__14352,sym__13636__auto__);
} else {
return G__14352;
}
});})(opts14347_14361))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts14347_14361){
return (function (p1__13632__13637__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts14347_14361).call(null,cljs.core.first.call(null,p1__13632__13637__auto__));
});})(opts14347_14361))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14347_14361){
return (function (){
var checked__13601__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hoplon.core","hoplon.core",-481580437,null),new cljs.core.Symbol(null,"-do!","-do!",973867495,null),"/Users/matt/.boot/cache/tmp/Users/matt/Projects/degree9/degree9io/l8y/-stq5yl/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts14347_14361);
if(cljs.core.truth_(checked__13601__auto__)){
hoplon.core._do_BANG_ = checked__13601__auto__;
} else {
}

return new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null);
});})(opts14347_14361))
], null)))));

var opts14355 = null;
return cljs.core.reduce.call(null,((function (opts14355){
return (function (ret__13633__auto__,p__14356){
var vec__14357 = p__14356;
var ___13634__auto__ = cljs.core.nth.call(null,vec__14357,(0),null);
var f__13635__auto__ = cljs.core.nth.call(null,vec__14357,(1),null);
var sym__13636__auto__ = f__13635__auto__.call(null);
var G__14360 = ret__13633__auto__;
if(cljs.core.truth_(sym__13636__auto__)){
return cljs.core.conj.call(null,G__14360,sym__13636__auto__);
} else {
return G__14360;
}
});})(opts14355))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts14355){
return (function (p1__13632__13637__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts14355).call(null,cljs.core.first.call(null,p1__13632__13637__auto__));
});})(opts14355))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14355){
return (function (){
var checked__13601__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hoplon.core","hoplon.core",-481580437,null),new cljs.core.Symbol(null,"-on!","-on!",900033004,null),"/Users/matt/.boot/cache/tmp/Users/matt/Projects/degree9/degree9io/l8y/-stq5yl/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts14355);
if(cljs.core.truth_(checked__13601__auto__)){
hoplon.core._on_BANG_ = checked__13601__auto__;
} else {
}

return new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null);
});})(opts14355))
], null)))));
});

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__8656__auto__ = (((this$ == null))?null:this$);
var m__8657__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8656__auto__)]);
if(!((m__8657__auto__ == null))){
return m__8657__auto__.call(null,this$,elem,value);
} else {
var m__8657__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8657__auto____$1 == null))){
return m__8657__auto____$1.call(null,this$,elem,value);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,value))){
return hoplon.core.do_watch.call(null,value,((function (this$__$1){
return (function (p1__14365_SHARP_,p2__14364_SHARP_){
return hoplon.core._do_BANG_.call(null,elem,this$__$1,p2__14364_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,value)){
return hoplon.core._on_BANG_.call(null,elem,this$__$1,value);
} else {
return hoplon.core._do_BANG_.call(null,elem,this$__$1,value);

}
}
});
hoplon.core.is_ie8 = cljs.core.not.call(null,goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__14366_SHARP_){
return p1__14366_SHARP_.head;
}):(function (p1__14367_SHARP_){
return p1__14367_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14368_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__14368_SHARP_);
}catch (e14369){if((e14369 instanceof Error)){
var _ = e14369;
return null;
} else {
throw e14369;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14370_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__14370_SHARP_);
}catch (e14371){if((e14371 instanceof Error)){
var _ = e14371;
return null;
} else {
throw e14371;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args14372 = [];
var len__9159__auto___14376 = arguments.length;
var i__9160__auto___14377 = (0);
while(true){
if((i__9160__auto___14377 < len__9159__auto___14376)){
args14372.push((arguments[i__9160__auto___14377]));

var G__14378 = (i__9160__auto___14377 + (1));
i__9160__auto___14377 = G__14378;
continue;
} else {
}
break;
}

var G__14374 = args14372.length;
switch (G__14374) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14372.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e14375){if((e14375 instanceof Error)){
var _ = e14375;
return not_found;
} else {
throw e14375;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args14380 = [];
var len__9159__auto___14383 = arguments.length;
var i__9160__auto___14384 = (0);
while(true){
if((i__9160__auto___14384 < len__9159__auto___14383)){
args14380.push((arguments[i__9160__auto___14384]));

var G__14385 = (i__9160__auto___14384 + (1));
i__9160__auto___14384 = G__14385;
continue;
} else {
}
break;
}

var G__14382 = args14380.length;
switch (G__14382) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14380.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return setTimeout((function (){
return f.call(null);
}),(0));
} else {
var temp__5276__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5276__auto__)){
var v = temp__5276__auto__;
return v.push(f);
} else {
goog.object.set(this$,"_hoplonWhenDom",[f]);

return setTimeout(((function (temp__5276__auto__){
return (function (){
return ((function (temp__5276__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not.call(null,document.documentElement.contains(this$))){
return setTimeout(((function (temp__5276__auto__){
return (function (){
return hoplon$core$when_dom_$_doit.call(null);
});})(temp__5276__auto__))
,(20));
} else {
var seq__14399_14403 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__14400_14404 = null;
var count__14401_14405 = (0);
var i__14402_14406 = (0);
while(true){
if((i__14402_14406 < count__14401_14405)){
var f_14407__$1 = cljs.core._nth.call(null,chunk__14400_14404,i__14402_14406);
f_14407__$1.call(null);

var G__14408 = seq__14399_14403;
var G__14409 = chunk__14400_14404;
var G__14410 = count__14401_14405;
var G__14411 = (i__14402_14406 + (1));
seq__14399_14403 = G__14408;
chunk__14400_14404 = G__14409;
count__14401_14405 = G__14410;
i__14402_14406 = G__14411;
continue;
} else {
var temp__5278__auto___14412 = cljs.core.seq.call(null,seq__14399_14403);
if(temp__5278__auto___14412){
var seq__14399_14413__$1 = temp__5278__auto___14412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14399_14413__$1)){
var c__8849__auto___14414 = cljs.core.chunk_first.call(null,seq__14399_14413__$1);
var G__14415 = cljs.core.chunk_rest.call(null,seq__14399_14413__$1);
var G__14416 = c__8849__auto___14414;
var G__14417 = cljs.core.count.call(null,c__8849__auto___14414);
var G__14418 = (0);
seq__14399_14403 = G__14415;
chunk__14400_14404 = G__14416;
count__14401_14405 = G__14417;
i__14402_14406 = G__14418;
continue;
} else {
var f_14419__$1 = cljs.core.first.call(null,seq__14399_14413__$1);
f_14419__$1.call(null);

var G__14420 = cljs.core.next.call(null,seq__14399_14413__$1);
var G__14421 = null;
var G__14422 = (0);
var G__14423 = (0);
seq__14399_14403 = G__14420;
chunk__14400_14404 = G__14421;
count__14401_14405 = G__14422;
i__14402_14406 = G__14423;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5276__auto__))
.call(null);
});})(temp__5276__auto__))
,(0));
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__14440 = args;
var vec__14441 = G__14440;
var seq__14442 = cljs.core.seq.call(null,vec__14441);
var first__14443 = cljs.core.first.call(null,seq__14442);
var seq__14442__$1 = cljs.core.next.call(null,seq__14442);
var arg = first__14443;
var args__$1 = seq__14442__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14440__$1 = G__14440;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14444 = G__14440__$1;
var seq__14445 = cljs.core.seq.call(null,vec__14444);
var first__14446 = cljs.core.first.call(null,seq__14445);
var seq__14445__$1 = cljs.core.next.call(null,seq__14445);
var arg__$1 = first__14446;
var args__$2 = seq__14445__$1;
if(cljs.core.not.call(null,(function (){var or__7938__auto__ = arg__$1;
if(cljs.core.truth_(or__7938__auto__)){
return or__7938__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__14447 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__14440__$1,attr__$2,kids__$2,vec__14444,seq__14445,first__14446,seq__14445__$1,arg__$1,args__$2,attr,kids,G__14440,vec__14441,seq__14442,first__14443,seq__14442__$1,arg,args__$1){
return (function (p1__14424_SHARP_,p2__14425_SHARP_,p3__14426_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__14424_SHARP_,p2__14425_SHARP_,p3__14426_SHARP_);
});})(attr__$1,kids__$1,G__14440__$1,attr__$2,kids__$2,vec__14444,seq__14445,first__14446,seq__14445__$1,arg__$1,args__$2,attr,kids,G__14440,vec__14441,seq__14442,first__14443,seq__14442__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14448 = kids__$2;
var G__14449 = args__$2;
attr__$1 = G__14447;
kids__$1 = G__14448;
G__14440__$1 = G__14449;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__14450 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__14451 = kids__$2;
var G__14452 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__14450;
kids__$1 = G__14451;
G__14440__$1 = G__14452;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__14453 = attr__$2;
var G__14454 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__14455 = args__$2;
attr__$1 = G__14453;
kids__$1 = G__14454;
G__14440__$1 = G__14455;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__14456 = attr__$2;
var G__14457 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__14458 = args__$2;
attr__$1 = G__14456;
kids__$1 = G__14457;
G__14440__$1 = G__14458;
continue;
} else {
var G__14459 = attr__$2;
var G__14460 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__14461 = args__$2;
attr__$1 = G__14459;
kids__$1 = G__14460;
G__14440__$1 = G__14461;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv.call(null,(function (p1__14463_SHARP_,p2__14462_SHARP_,p3__14464_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__14462_SHARP_,p1__14463_SHARP_,p3__14464_SHARP_);

return p1__14463_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14465){
var vec__14473 = p__14465;
var seq__14474 = cljs.core.seq.call(null,vec__14473);
var first__14475 = cljs.core.first.call(null,seq__14474);
var seq__14474__$1 = cljs.core.next.call(null,seq__14474);
var child_cell = first__14475;
var _ = seq__14474__$1;
var kids = vec__14473;
var this$__$1 = this$;
var seq__14476_14480 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__14477_14481 = null;
var count__14478_14482 = (0);
var i__14479_14483 = (0);
while(true){
if((i__14479_14483 < count__14478_14482)){
var x_14484 = cljs.core._nth.call(null,chunk__14477_14481,i__14479_14483);
var temp__5278__auto___14485 = hoplon.core.__GT_node.call(null,x_14484);
if(cljs.core.truth_(temp__5278__auto___14485)){
var x_14486__$1 = temp__5278__auto___14485;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_14486__$1);
} else {
}

var G__14487 = seq__14476_14480;
var G__14488 = chunk__14477_14481;
var G__14489 = count__14478_14482;
var G__14490 = (i__14479_14483 + (1));
seq__14476_14480 = G__14487;
chunk__14477_14481 = G__14488;
count__14478_14482 = G__14489;
i__14479_14483 = G__14490;
continue;
} else {
var temp__5278__auto___14491 = cljs.core.seq.call(null,seq__14476_14480);
if(temp__5278__auto___14491){
var seq__14476_14492__$1 = temp__5278__auto___14491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14476_14492__$1)){
var c__8849__auto___14493 = cljs.core.chunk_first.call(null,seq__14476_14492__$1);
var G__14494 = cljs.core.chunk_rest.call(null,seq__14476_14492__$1);
var G__14495 = c__8849__auto___14493;
var G__14496 = cljs.core.count.call(null,c__8849__auto___14493);
var G__14497 = (0);
seq__14476_14480 = G__14494;
chunk__14477_14481 = G__14495;
count__14478_14482 = G__14496;
i__14479_14483 = G__14497;
continue;
} else {
var x_14498 = cljs.core.first.call(null,seq__14476_14492__$1);
var temp__5278__auto___14499__$1 = hoplon.core.__GT_node.call(null,x_14498);
if(cljs.core.truth_(temp__5278__auto___14499__$1)){
var x_14500__$1 = temp__5278__auto___14499__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_14500__$1);
} else {
}

var G__14501 = cljs.core.next.call(null,seq__14476_14492__$1);
var G__14502 = null;
var G__14503 = (0);
var G__14504 = (0);
seq__14476_14480 = G__14501;
chunk__14477_14481 = G__14502;
count__14478_14482 = G__14503;
i__14479_14483 = G__14504;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9166__auto__ = [];
var len__9159__auto___14511 = arguments.length;
var i__9160__auto___14512 = (0);
while(true){
if((i__9160__auto___14512 < len__9159__auto___14511)){
args__9166__auto__.push((arguments[i__9160__auto___14512]));

var G__14513 = (i__9160__auto___14512 + (1));
i__9160__auto___14512 = G__14513;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((1) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9167__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__14507 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__14507,(0),null);
var kids = cljs.core.nth.call(null,vec__14507,(1),null);
var G__14510 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__14510,attr);

hoplon.core.add_children_BANG_.call(null,G__14510,kids);

return G__14510;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq14505){
var G__14506 = cljs.core.first.call(null,seq14505);
var seq14505__$1 = cljs.core.next.call(null,seq14505);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14506,seq14505__$1);
});

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__14538 = null;
var G__14538__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$);
});
var G__14538__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a);
});
var G__14538__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b);
});
var G__14538__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c);
});
var G__14538__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d);
});
var G__14538__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e);
});
var G__14538__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f);
});
var G__14538__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g);
});
var G__14538__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h);
});
var G__14538__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i);
});
var G__14538__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j);
});
var G__14538__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
});
var G__14538__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__14538__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__14538__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__14538__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__14538__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__14538__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__14538__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__14538__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__14538__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__14538__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.call(null,hoplon.core.invoke_BANG_,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__14538 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__14538__1.call(this,self__);
case 2:
return G__14538__2.call(this,self__,a);
case 3:
return G__14538__3.call(this,self__,a,b);
case 4:
return G__14538__4.call(this,self__,a,b,c);
case 5:
return G__14538__5.call(this,self__,a,b,c,d);
case 6:
return G__14538__6.call(this,self__,a,b,c,d,e);
case 7:
return G__14538__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__14538__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__14538__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__14538__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__14538__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__14538__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__14538__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__14538__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__14538__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__14538__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__14538__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__14538__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__14538__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__14538__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__14538__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__14538__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14538.cljs$core$IFn$_invoke$arity$1 = G__14538__1;
G__14538.cljs$core$IFn$_invoke$arity$2 = G__14538__2;
G__14538.cljs$core$IFn$_invoke$arity$3 = G__14538__3;
G__14538.cljs$core$IFn$_invoke$arity$4 = G__14538__4;
G__14538.cljs$core$IFn$_invoke$arity$5 = G__14538__5;
G__14538.cljs$core$IFn$_invoke$arity$6 = G__14538__6;
G__14538.cljs$core$IFn$_invoke$arity$7 = G__14538__7;
G__14538.cljs$core$IFn$_invoke$arity$8 = G__14538__8;
G__14538.cljs$core$IFn$_invoke$arity$9 = G__14538__9;
G__14538.cljs$core$IFn$_invoke$arity$10 = G__14538__10;
G__14538.cljs$core$IFn$_invoke$arity$11 = G__14538__11;
G__14538.cljs$core$IFn$_invoke$arity$12 = G__14538__12;
G__14538.cljs$core$IFn$_invoke$arity$13 = G__14538__13;
G__14538.cljs$core$IFn$_invoke$arity$14 = G__14538__14;
G__14538.cljs$core$IFn$_invoke$arity$15 = G__14538__15;
G__14538.cljs$core$IFn$_invoke$arity$16 = G__14538__16;
G__14538.cljs$core$IFn$_invoke$arity$17 = G__14538__17;
G__14538.cljs$core$IFn$_invoke$arity$18 = G__14538__18;
G__14538.cljs$core$IFn$_invoke$arity$19 = G__14538__19;
G__14538.cljs$core$IFn$_invoke$arity$20 = G__14538__20;
G__14538.cljs$core$IFn$_invoke$arity$21 = G__14538__21;
G__14538.cljs$core$IFn$_invoke$arity$22 = G__14538__22;
return G__14538;
})()
;

Element.prototype.apply = (function (self__,args14514){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14514)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a);
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b);
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c);
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d);
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e);
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f);
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g);
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h);
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i);
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j);
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return cljs.core.apply.call(null,hoplon.core.invoke_BANG_,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14515 = cljs.core.seq.call(null,kvs);
var chunk__14517 = null;
var count__14518 = (0);
var i__14519 = (0);
while(true){
if((i__14519 < count__14518)){
var vec__14521 = cljs.core._nth.call(null,chunk__14517,i__14519);
var k = cljs.core.nth.call(null,vec__14521,(0),null);
var v = cljs.core.nth.call(null,vec__14521,(1),null);
var k_14539__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttribute(k_14539__$1);
} else {
e.setAttribute(k_14539__$1,((cljs.core._EQ_.call(null,true,v))?k_14539__$1:v));
}

var G__14540 = seq__14515;
var G__14541 = chunk__14517;
var G__14542 = count__14518;
var G__14543 = (i__14519 + (1));
seq__14515 = G__14540;
chunk__14517 = G__14541;
count__14518 = G__14542;
i__14519 = G__14543;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__14515);
if(temp__5278__auto__){
var seq__14515__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14515__$1)){
var c__8849__auto__ = cljs.core.chunk_first.call(null,seq__14515__$1);
var G__14544 = cljs.core.chunk_rest.call(null,seq__14515__$1);
var G__14545 = c__8849__auto__;
var G__14546 = cljs.core.count.call(null,c__8849__auto__);
var G__14547 = (0);
seq__14515 = G__14544;
chunk__14517 = G__14545;
count__14518 = G__14546;
i__14519 = G__14547;
continue;
} else {
var vec__14524 = cljs.core.first.call(null,seq__14515__$1);
var k = cljs.core.nth.call(null,vec__14524,(0),null);
var v = cljs.core.nth.call(null,vec__14524,(1),null);
var k_14548__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttribute(k_14548__$1);
} else {
e.setAttribute(k_14548__$1,((cljs.core._EQ_.call(null,true,v))?k_14548__$1:v));
}

var G__14549 = cljs.core.next.call(null,seq__14515__$1);
var G__14550 = null;
var G__14551 = (0);
var G__14552 = (0);
seq__14515 = G__14549;
chunk__14517 = G__14550;
count__14518 = G__14551;
i__14519 = G__14552;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14527 = cljs.core.seq.call(null,kvs);
var chunk__14528 = null;
var count__14529 = (0);
var i__14530 = (0);
while(true){
if((i__14530 < count__14529)){
var vec__14531 = cljs.core._nth.call(null,chunk__14528,i__14530);
var k = cljs.core.nth.call(null,vec__14531,(0),null);
var v = cljs.core.nth.call(null,vec__14531,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14553 = seq__14527;
var G__14554 = chunk__14528;
var G__14555 = count__14529;
var G__14556 = (i__14530 + (1));
seq__14527 = G__14553;
chunk__14528 = G__14554;
count__14529 = G__14555;
i__14530 = G__14556;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__14527);
if(temp__5278__auto__){
var seq__14527__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14527__$1)){
var c__8849__auto__ = cljs.core.chunk_first.call(null,seq__14527__$1);
var G__14557 = cljs.core.chunk_rest.call(null,seq__14527__$1);
var G__14558 = c__8849__auto__;
var G__14559 = cljs.core.count.call(null,c__8849__auto__);
var G__14560 = (0);
seq__14527 = G__14557;
chunk__14528 = G__14558;
count__14529 = G__14559;
i__14530 = G__14560;
continue;
} else {
var vec__14534 = cljs.core.first.call(null,seq__14527__$1);
var k = cljs.core.nth.call(null,vec__14534,(0),null);
var v = cljs.core.nth.call(null,vec__14534,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14561 = cljs.core.next.call(null,seq__14527__$1);
var G__14562 = null;
var G__14563 = (0);
var G__14564 = (0);
seq__14527 = G__14561;
chunk__14528 = G__14562;
count__14529 = G__14563;
i__14530 = G__14564;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(!(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e14537){if((e14537 instanceof Error)){
var _ = e14537;
return null;
} else {
throw e14537;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__14571__delegate = function (args){
var vec__14568 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__14568,(0),null);
var kids = cljs.core.nth.call(null,vec__14568,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__14571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14572__i = 0, G__14572__a = new Array(arguments.length -  0);
while (G__14572__i < G__14572__a.length) {G__14572__a[G__14572__i] = arguments[G__14572__i + 0]; ++G__14572__i;}
  args = new cljs.core.IndexedSeq(G__14572__a,0,null);
} 
return G__14571__delegate.call(this,args);};
G__14571.cljs$lang$maxFixedArity = 0;
G__14571.cljs$lang$applyTo = (function (arglist__14573){
var args = cljs.core.seq(arglist__14573);
return G__14571__delegate(args);
});
G__14571.cljs$core$IFn$_invoke$arity$variadic = G__14571__delegate;
return G__14571;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__14577__delegate = function (rest__14574_SHARP_){
return cljs.core.apply.call(null,document.createElement(tag),rest__14574_SHARP_);
};
var G__14577 = function (var_args){
var rest__14574_SHARP_ = null;
if (arguments.length > 0) {
var G__14578__i = 0, G__14578__a = new Array(arguments.length -  0);
while (G__14578__i < G__14578__a.length) {G__14578__a[G__14578__i] = arguments[G__14578__i + 0]; ++G__14578__i;}
  rest__14574_SHARP_ = new cljs.core.IndexedSeq(G__14578__a,0,null);
} 
return G__14577__delegate.call(this,rest__14574_SHARP_);};
G__14577.cljs$lang$maxFixedArity = 0;
G__14577.cljs$lang$applyTo = (function (arglist__14579){
var rest__14574_SHARP_ = cljs.core.seq(arglist__14579);
return G__14577__delegate(rest__14574_SHARP_);
});
G__14577.cljs$core$IFn$_invoke$arity$variadic = G__14577__delegate;
return G__14577;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__14580__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e14576){if((e14576 instanceof Error)){
var _ = e14576;
return cljs.core.apply.call(null,hoplon.core.make_elem_ctor.call(null,"div"),args);
} else {
throw e14576;

}
}};
var G__14580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14581__i = 0, G__14581__a = new Array(arguments.length -  0);
while (G__14581__i < G__14581__a.length) {G__14581__a[G__14581__i] = arguments[G__14581__i + 0]; ++G__14581__i;}
  args = new cljs.core.IndexedSeq(G__14581__a,0,null);
} 
return G__14580__delegate.call(this,args);};
G__14580.cljs$lang$maxFixedArity = 0;
G__14580.cljs$lang$applyTo = (function (arglist__14582){
var args = cljs.core.seq(arglist__14582);
return G__14580__delegate(args);
});
G__14580.cljs$core$IFn$_invoke$arity$variadic = G__14580__delegate;
return G__14580;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9166__auto__ = [];
var len__9159__auto___14584 = arguments.length;
var i__9160__auto___14585 = (0);
while(true){
if((i__9160__auto___14585 < len__9159__auto___14584)){
args__9166__auto__.push((arguments[i__9160__auto___14585]));

var G__14586 = (i__9160__auto___14585 + (1));
i__9160__auto___14585 = G__14586;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_.call(null,document.documentElement,cljs.core.nth.call(null,hoplon.core.parse_args.call(null,args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq14583){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14583));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,hoplon.core._head_STAR_.call(null,document));
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,document.body);
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor.call(null,"dialog");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor.call(null,"menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor.call(null,"multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.picture = hoplon.core.make_elem_ctor.call(null,"picture");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor.call(null,"rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.shadow = hoplon.core.make_elem_ctor.call(null,"shadow");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.template = hoplon.core.make_elem_ctor.call(null,"template");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__14587_SHARP_){
return document.createTextNode(p1__14587_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14588_SHARP_){
return document.createComment(p1__14588_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return f.call(null);
}),(0));
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return document.body.addEventListener("submit",(function (p1__14589_SHARP_){
var e = p1__14589_SHARP_.target;
if(cljs.core.truth_((function (){var or__7938__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7938__auto__)){
return or__7938__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__14589_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8969__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8970__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8973__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__8969__auto__,prefer_table__8970__auto__,method_cache__8971__auto__,cached_hierarchy__8972__auto__,hierarchy__8973__auto__){
return (function (elem,key,val){
var temp__5276__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__5276__auto__)){
var n = temp__5276__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__8969__auto__,prefer_table__8970__auto__,method_cache__8971__auto__,cached_hierarchy__8972__auto__,hierarchy__8973__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__8973__auto__,method_table__8969__auto__,prefer_table__8970__auto__,method_cache__8971__auto__,cached_hierarchy__8972__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.core.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.call(null,elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__8969__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8970__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8973__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__8969__auto__,prefer_table__8970__auto__,method_cache__8971__auto__,cached_hierarchy__8972__auto__,hierarchy__8973__auto__){
return (function (elem,key,val){
var temp__5276__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__5276__auto__)){
var n = temp__5276__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__8969__auto__,prefer_table__8970__auto__,method_cache__8971__auto__,cached_hierarchy__8972__auto__,hierarchy__8973__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__8973__auto__,method_table__8969__auto__,prefer_table__8970__auto__,method_cache__8971__auto__,cached_hierarchy__8972__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__14601,G__14602){
return G__14601.call(null,G__14602);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14590_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__14604,G__14605,G__14603){
return G__14603.call(null,G__14604,G__14605);
});})(on_deck,items_seq))
).call(null,items_seq,p1__14590_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14591_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__14591_SHARP_));
cljs.core.swap_BANG_.call(null,p1__14591_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__14606 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__14607 = null;
var count__14608 = (0);
var i__14609 = (0);
while(true){
if((i__14609 < count__14608)){
var i = cljs.core._nth.call(null,chunk__14607,i__14609);
var e_14610 = (function (){var or__7938__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7938__auto__)){
return or__7938__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_14610);

var G__14611 = seq__14606;
var G__14612 = chunk__14607;
var G__14613 = count__14608;
var G__14614 = (i__14609 + (1));
seq__14606 = G__14611;
chunk__14607 = G__14612;
count__14608 = G__14613;
i__14609 = G__14614;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__14606);
if(temp__5278__auto__){
var seq__14606__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14606__$1)){
var c__8849__auto__ = cljs.core.chunk_first.call(null,seq__14606__$1);
var G__14615 = cljs.core.chunk_rest.call(null,seq__14606__$1);
var G__14616 = c__8849__auto__;
var G__14617 = cljs.core.count.call(null,c__8849__auto__);
var G__14618 = (0);
seq__14606 = G__14615;
chunk__14607 = G__14616;
count__14608 = G__14617;
i__14609 = G__14618;
continue;
} else {
var i = cljs.core.first.call(null,seq__14606__$1);
var e_14619 = (function (){var or__7938__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__7938__auto__)){
return or__7938__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_14619);

var G__14620 = cljs.core.next.call(null,seq__14606__$1);
var G__14621 = null;
var G__14622 = (0);
var G__14623 = (0);
seq__14606 = G__14620;
chunk__14607 = G__14621;
count__14608 = G__14622;
i__14609 = G__14623;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__8959__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__8959__auto__)){
var e_14624 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_14624);

var G__14625 = (_ + (1));
_ = G__14625;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__9166__auto__ = [];
var len__9159__auto___14634 = arguments.length;
var i__9160__auto___14635 = (0);
while(true){
if((i__9160__auto___14635 < len__9159__auto___14634)){
args__9166__auto__.push((arguments[i__9160__auto___14635]));

var G__14636 = (i__9160__auto___14635 + (1));
i__9160__auto___14635 = G__14636;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14627){
var vec__14628 = p__14627;
var default$ = cljs.core.nth.call(null,vec__14628,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__14628,default$){
return (function (G__14631,G__14633,G__14632){
var or__7938__auto__ = (function (){var and__7926__auto__ = G__14631.call(null,G__14632);
if(cljs.core.truth_(and__7926__auto__)){
return G__14632;
} else {
return and__7926__auto__;
}
})();
if(cljs.core.truth_(or__7938__auto__)){
return or__7938__auto__;
} else {
return G__14633;
}
});})(c,vec__14628,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__14628,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__14628,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14626){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14626));
});


//# sourceMappingURL=core.js.map