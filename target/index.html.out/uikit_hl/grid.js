// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.grid');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
goog.require('uikit_hl.card');
uikit_hl.grid._STAR_uk_grid_STAR_ = "";
uikit_hl.grid._STAR_small_STAR_ = null;
uikit_hl.grid._STAR_medium_STAR_ = null;
uikit_hl.grid._STAR_large_STAR_ = null;
uikit_hl.grid._STAR_collapse_STAR_ = null;
uikit_hl.grid._STAR_divider_STAR_ = null;
uikit_hl.grid._STAR_match_STAR_ = null;
uikit_hl.grid._STAR_item_match_STAR_ = null;
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-grid","uk-grid",578552556),(function (elem,_,v){
return UIkit.grid(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.grid.grid = (function() { 
var uikit_hl$grid$grid__delegate = function (args__14031__auto__){
var vec__14845 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14845,(0),null);
var kids = cljs.core.nth.call(null,vec__14845,(1),null);
var grid = new cljs.core.Keyword(null,"uk-grid","uk-grid",578552556).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.grid._STAR_uk_grid_STAR_);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.grid._STAR_small_STAR_);
var medium = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.grid._STAR_medium_STAR_);
var large = new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.grid._STAR_large_STAR_);
var collapse = new cljs.core.Keyword(null,"collapse","collapse",-1218136136).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.grid._STAR_collapse_STAR_);
var divider = new cljs.core.Keyword(null,"divider","divider",1265972657).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.grid._STAR_divider_STAR_);
var match = new cljs.core.Keyword(null,"match","match",1220059550).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.grid._STAR_match_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-grid","uk-grid",578552556),grid),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"collapse","collapse",-1218136136),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"match","match",1220059550));
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uk-grid-small","uk-grid-small",524410400),small,new cljs.core.Keyword(null,"uk-grid-medium","uk-grid-medium",390479521),medium,new cljs.core.Keyword(null,"uk-grid-large","uk-grid-large",-2039246152),large,new cljs.core.Keyword(null,"uk-grid-collapse","uk-grid-collapse",-2147342841),collapse,new cljs.core.Keyword(null,"uk-grid-divider","uk-grid-divider",-625794315),divider,new cljs.core.Keyword(null,"uk-grid-match","uk-grid-match",-637340571),match], null)),kids);
};
var uikit_hl$grid$grid = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14848__i = 0, G__14848__a = new Array(arguments.length -  0);
while (G__14848__i < G__14848__a.length) {G__14848__a[G__14848__i] = arguments[G__14848__i + 0]; ++G__14848__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14848__a,0,null);
} 
return uikit_hl$grid$grid__delegate.call(this,args__14031__auto__);};
uikit_hl$grid$grid.cljs$lang$maxFixedArity = 0;
uikit_hl$grid$grid.cljs$lang$applyTo = (function (arglist__14849){
var args__14031__auto__ = cljs.core.seq(arglist__14849);
return uikit_hl$grid$grid__delegate(args__14031__auto__);
});
uikit_hl$grid$grid.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$grid$grid__delegate;
return uikit_hl$grid$grid;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.grid.cell = (function() { 
var uikit_hl$grid$cell__delegate = function (args__14031__auto__){
var vec__14853 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14853,(0),null);
var kids = cljs.core.nth.call(null,vec__14853,(1),null);
var item_match = new cljs.core.Keyword(null,"item-match","item-match",-1476263853).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.grid._STAR_item_match_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"item-match","item-match",-1476263853));
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-grid-item-match","uk-grid-item-match",-1993248181),item_match], null)),kids);
};
var uikit_hl$grid$cell = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14856__i = 0, G__14856__a = new Array(arguments.length -  0);
while (G__14856__i < G__14856__a.length) {G__14856__a[G__14856__i] = arguments[G__14856__i + 0]; ++G__14856__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14856__a,0,null);
} 
return uikit_hl$grid$cell__delegate.call(this,args__14031__auto__);};
uikit_hl$grid$cell.cljs$lang$maxFixedArity = 0;
uikit_hl$grid$cell.cljs$lang$applyTo = (function (arglist__14857){
var args__14031__auto__ = cljs.core.seq(arglist__14857);
return uikit_hl$grid$cell__delegate(args__14031__auto__);
});
uikit_hl$grid$cell.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$grid$cell__delegate;
return uikit_hl$grid$cell;
})()
;

//# sourceMappingURL=grid.js.map