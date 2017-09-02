// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.button');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.button._STAR_default_STAR_ = null;
uikit_hl.button._STAR_primary_STAR_ = null;
uikit_hl.button._STAR_secondary_STAR_ = null;
uikit_hl.button._STAR_danger_STAR_ = null;
uikit_hl.button._STAR_text_STAR_ = null;
uikit_hl.button._STAR_link_STAR_ = null;
uikit_hl.button._STAR_small_STAR_ = null;
uikit_hl.button._STAR_large_STAR_ = null;
/**
 * @param {...*} var_args
 */
uikit_hl.button.button = (function() { 
var uikit_hl$button$button__delegate = function (args__14031__auto__){
var vec__14979 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14979,(0),null);
var kids = cljs.core.nth.call(null,vec__14979,(1),null);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_default_STAR_);
var primary = new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_primary_STAR_);
var secondary = new cljs.core.Keyword(null,"secondary","secondary",-669381460).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_secondary_STAR_);
var danger = new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_danger_STAR_);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_text_STAR_);
var link = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_link_STAR_);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_small_STAR_);
var large = new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_large_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large","large",-196820544));
return hoplon.core.button.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"uk-button-link","uk-button-link",-2046721758),new cljs.core.Keyword(null,"uk-button-danger","uk-button-danger",363963267),new cljs.core.Keyword(null,"uk-button-default","uk-button-default",1608136132),new cljs.core.Keyword(null,"uk-button-text","uk-button-text",1116876870),new cljs.core.Keyword(null,"uk-button","uk-button",1485484935),new cljs.core.Keyword(null,"uk-button-small","uk-button-small",-84731864),new cljs.core.Keyword(null,"uk-button-primary","uk-button-primary",1125946121),new cljs.core.Keyword(null,"uk-button-large","uk-button-large",841842030),new cljs.core.Keyword(null,"uk-button-secondary","uk-button-secondary",-30355587)],[link,danger,default$,text,true,small,primary,large,secondary])),kids);
};
var uikit_hl$button$button = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14982__i = 0, G__14982__a = new Array(arguments.length -  0);
while (G__14982__i < G__14982__a.length) {G__14982__a[G__14982__i] = arguments[G__14982__i + 0]; ++G__14982__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14982__a,0,null);
} 
return uikit_hl$button$button__delegate.call(this,args__14031__auto__);};
uikit_hl$button$button.cljs$lang$maxFixedArity = 0;
uikit_hl$button$button.cljs$lang$applyTo = (function (arglist__14983){
var args__14031__auto__ = cljs.core.seq(arglist__14983);
return uikit_hl$button$button__delegate(args__14031__auto__);
});
uikit_hl$button$button.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$button$button__delegate;
return uikit_hl$button$button;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.button.a_button = (function() { 
var uikit_hl$button$a_button__delegate = function (args__14031__auto__){
var vec__14987 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14987,(0),null);
var kids = cljs.core.nth.call(null,vec__14987,(1),null);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_default_STAR_);
var primary = new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_primary_STAR_);
var secondary = new cljs.core.Keyword(null,"secondary","secondary",-669381460).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_secondary_STAR_);
var danger = new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_danger_STAR_);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_text_STAR_);
var link = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_link_STAR_);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_small_STAR_);
var large = new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.button._STAR_large_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large","large",-196820544));
return hoplon.core.a.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"uk-button-link","uk-button-link",-2046721758),new cljs.core.Keyword(null,"uk-button-danger","uk-button-danger",363963267),new cljs.core.Keyword(null,"uk-button-default","uk-button-default",1608136132),new cljs.core.Keyword(null,"uk-button-text","uk-button-text",1116876870),new cljs.core.Keyword(null,"uk-button","uk-button",1485484935),new cljs.core.Keyword(null,"uk-button-small","uk-button-small",-84731864),new cljs.core.Keyword(null,"uk-button-primary","uk-button-primary",1125946121),new cljs.core.Keyword(null,"uk-button-large","uk-button-large",841842030),new cljs.core.Keyword(null,"uk-button-secondary","uk-button-secondary",-30355587)],[link,danger,default$,text,true,small,primary,large,secondary])),kids);
};
var uikit_hl$button$a_button = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14990__i = 0, G__14990__a = new Array(arguments.length -  0);
while (G__14990__i < G__14990__a.length) {G__14990__a[G__14990__i] = arguments[G__14990__i + 0]; ++G__14990__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14990__a,0,null);
} 
return uikit_hl$button$a_button__delegate.call(this,args__14031__auto__);};
uikit_hl$button$a_button.cljs$lang$maxFixedArity = 0;
uikit_hl$button$a_button.cljs$lang$applyTo = (function (arglist__14991){
var args__14031__auto__ = cljs.core.seq(arglist__14991);
return uikit_hl$button$a_button__delegate(args__14031__auto__);
});
uikit_hl$button$a_button.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$button$a_button__delegate;
return uikit_hl$button$a_button;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.button.group = (function() { 
var uikit_hl$button$group__delegate = function (args__14031__auto__){
var vec__14995 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14995,(0),null);
var kids = cljs.core.nth.call(null,vec__14995,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-button-group","uk-button-group",-839712153),true], null)),kids);
};
var uikit_hl$button$group = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14998__i = 0, G__14998__a = new Array(arguments.length -  0);
while (G__14998__i < G__14998__a.length) {G__14998__a[G__14998__i] = arguments[G__14998__i + 0]; ++G__14998__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14998__a,0,null);
} 
return uikit_hl$button$group__delegate.call(this,args__14031__auto__);};
uikit_hl$button$group.cljs$lang$maxFixedArity = 0;
uikit_hl$button$group.cljs$lang$applyTo = (function (arglist__14999){
var args__14031__auto__ = cljs.core.seq(arglist__14999);
return uikit_hl$button$group__delegate(args__14031__auto__);
});
uikit_hl$button$group.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$button$group__delegate;
return uikit_hl$button$group;
})()
;

//# sourceMappingURL=button.js.map