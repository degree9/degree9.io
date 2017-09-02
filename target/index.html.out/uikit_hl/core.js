// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.core');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('cljsjs.uikit');
uikit_hl.core.include_css = (function uikit_hl$core$include_css(){
return hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.25/css/uikit.min.css");
});
uikit_hl.core.assoc_class = (function uikit_hl$core$assoc_class(var_args){
var args__9166__auto__ = [];
var len__9159__auto___14650 = arguments.length;
var i__9160__auto___14651 = (0);
while(true){
if((i__9160__auto___14651 < len__9159__auto___14650)){
args__9166__auto__.push((arguments[i__9160__auto___14651]));

var G__14652 = (i__9160__auto___14651 + (1));
i__9160__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((1) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((1)),(0),null)):null);
return uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9167__auto__);
});

uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic = (function (attr,p__14641){
var vec__14642 = p__14641;
var pre = cljs.core.nth.call(null,vec__14642,(0),null);
var post = cljs.core.nth.call(null,vec__14642,(1),null);
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attr);
return cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"class","class",-2030961996),javelin.core.formula.call(null,((function (class$,vec__14642,pre,post){
return (function (G__14647,G__14646,G__14645,G__14648,G__14649){
return G__14645.call(null,G__14646,G__14647.call(null,G__14648),G__14649);
});})(class$,vec__14642,pre,post))
).call(null,hoplon.core.normalize_class,pre,cljs.core.merge,class$,post));
});

uikit_hl.core.assoc_class.cljs$lang$maxFixedArity = (1);

uikit_hl.core.assoc_class.cljs$lang$applyTo = (function (seq14639){
var G__14640 = cljs.core.first.call(null,seq14639);
var seq14639__$1 = cljs.core.next.call(null,seq14639);
return uikit_hl.core.assoc_class.cljs$core$IFn$_invoke$arity$variadic(G__14640,seq14639__$1);
});

uikit_hl.core.if_assoc = (function uikit_hl$core$if_assoc(pred,map,k1,v1,k2,v2){
if(cljs.core.truth_(pred)){
return cljs.core.assoc.call(null,map,k1,v1);
} else {
return cljs.core.assoc.call(null,map,k2,v2);
}
});
uikit_hl.core.select_class = (function uikit_hl$core$select_class(var_args){
var args14655 = [];
var len__9159__auto___14658 = arguments.length;
var i__9160__auto___14659 = (0);
while(true){
if((i__9160__auto___14659 < len__9159__auto___14658)){
args14655.push((arguments[i__9160__auto___14659]));

var G__14660 = (i__9160__auto___14659 + (1));
i__9160__auto___14659 = G__14660;
continue;
} else {
}
break;
}

var G__14657 = args14655.length;
switch (G__14657) {
case 2:
return uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14655.length)].join('')));

}
});

uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$2 = (function (class$,clist){
return uikit_hl.core.select_class.call(null,cljs.core.PersistentArrayMap.EMPTY,class$,clist);
});

uikit_hl.core.select_class.cljs$core$IFn$_invoke$arity$3 = (function (map,class$,clist){
return cljs.core.reduce.call(null,(function (p1__14654_SHARP_,p2__14653_SHARP_){
return uikit_hl.core.if_assoc.call(null,cljs.core._EQ_.call(null,p2__14653_SHARP_,class$),p1__14654_SHARP_,p2__14653_SHARP_,true,p2__14653_SHARP_,false);
}),map,clist);
});

uikit_hl.core.select_class.cljs$lang$maxFixedArity = 3;

cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("uikit","update","uikit/update",956068618),(function (elem,_,v){
if(cljs.core.truth_(v)){
return elem.$update();
} else {
return null;
}
}));
uikit_hl.core.class_EQ_ = (function uikit_hl$core$class_EQ_(class$){
return javelin.core.formula.call(null,(function (G__14664,G__14665){
return G__14664.call(null,G__14665);
})).call(null,hoplon.core.normalize_class,class$);
});
/**
 * @param {...*} var_args
 */
uikit_hl.core.extelem = (function() { 
var uikit_hl$core$extelem__delegate = function (args__14031__auto__){
var vec__14669 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14669,(0),null);
var kids = cljs.core.nth.call(null,vec__14669,(1),null);
var extend = new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$2(attr,hoplon.core.div);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"extend","extend",1836484006));
return extend.call(null,attr__$1,kids);
};
var uikit_hl$core$extelem = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14672__i = 0, G__14672__a = new Array(arguments.length -  0);
while (G__14672__i < G__14672__a.length) {G__14672__a[G__14672__i] = arguments[G__14672__i + 0]; ++G__14672__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14672__a,0,null);
} 
return uikit_hl$core$extelem__delegate.call(this,args__14031__auto__);};
uikit_hl$core$extelem.cljs$lang$maxFixedArity = 0;
uikit_hl$core$extelem.cljs$lang$applyTo = (function (arglist__14673){
var args__14031__auto__ = cljs.core.seq(arglist__14673);
return uikit_hl$core$extelem__delegate(args__14031__auto__);
});
uikit_hl$core$extelem.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$core$extelem__delegate;
return uikit_hl$core$extelem;
})()
;

//# sourceMappingURL=core.js.map