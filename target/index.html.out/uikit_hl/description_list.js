// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.description_list');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.description_list._STAR_divider_STAR_ = null;
/**
 * @param {...*} var_args
 */
uikit_hl.description_list.description_list = (function() { 
var uikit_hl$description_list$description_list__delegate = function (args__14031__auto__){
var vec__15204 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15204,(0),null);
var kids = cljs.core.nth.call(null,vec__15204,(1),null);
var divider = new cljs.core.Keyword(null,"divider","divider",1265972657).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.description_list._STAR_divider_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"divider","divider",1265972657));
return hoplon.core.dl.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-description-list","uk-description-list",-971332478),true], null)),kids);
};
var uikit_hl$description_list$description_list = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15207__i = 0, G__15207__a = new Array(arguments.length -  0);
while (G__15207__i < G__15207__a.length) {G__15207__a[G__15207__i] = arguments[G__15207__i + 0]; ++G__15207__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15207__a,0,null);
} 
return uikit_hl$description_list$description_list__delegate.call(this,args__14031__auto__);};
uikit_hl$description_list$description_list.cljs$lang$maxFixedArity = 0;
uikit_hl$description_list$description_list.cljs$lang$applyTo = (function (arglist__15208){
var args__14031__auto__ = cljs.core.seq(arglist__15208);
return uikit_hl$description_list$description_list__delegate(args__14031__auto__);
});
uikit_hl$description_list$description_list.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$description_list$description_list__delegate;
return uikit_hl$description_list$description_list;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.description_list.term = (function() { 
var uikit_hl$description_list$term__delegate = function (args__14031__auto__){
var vec__15212 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15212,(0),null);
var kids = cljs.core.nth.call(null,vec__15212,(1),null);
return hoplon.core.dt.call(null,attr,kids);
};
var uikit_hl$description_list$term = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15215__i = 0, G__15215__a = new Array(arguments.length -  0);
while (G__15215__i < G__15215__a.length) {G__15215__a[G__15215__i] = arguments[G__15215__i + 0]; ++G__15215__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15215__a,0,null);
} 
return uikit_hl$description_list$term__delegate.call(this,args__14031__auto__);};
uikit_hl$description_list$term.cljs$lang$maxFixedArity = 0;
uikit_hl$description_list$term.cljs$lang$applyTo = (function (arglist__15216){
var args__14031__auto__ = cljs.core.seq(arglist__15216);
return uikit_hl$description_list$term__delegate(args__14031__auto__);
});
uikit_hl$description_list$term.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$description_list$term__delegate;
return uikit_hl$description_list$term;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.description_list.description = (function() { 
var uikit_hl$description_list$description__delegate = function (args__14031__auto__){
var vec__15220 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15220,(0),null);
var kids = cljs.core.nth.call(null,vec__15220,(1),null);
return hoplon.core.dd.call(null,attr,kids);
};
var uikit_hl$description_list$description = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15223__i = 0, G__15223__a = new Array(arguments.length -  0);
while (G__15223__i < G__15223__a.length) {G__15223__a[G__15223__i] = arguments[G__15223__i + 0]; ++G__15223__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15223__a,0,null);
} 
return uikit_hl$description_list$description__delegate.call(this,args__14031__auto__);};
uikit_hl$description_list$description.cljs$lang$maxFixedArity = 0;
uikit_hl$description_list$description.cljs$lang$applyTo = (function (arglist__15224){
var args__14031__auto__ = cljs.core.seq(arglist__15224);
return uikit_hl$description_list$description__delegate(args__14031__auto__);
});
uikit_hl$description_list$description.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$description_list$description__delegate;
return uikit_hl$description_list$description;
})()
;

//# sourceMappingURL=description_list.js.map