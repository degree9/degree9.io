// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.card');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.card._STAR_default_STAR_ = null;
uikit_hl.card._STAR_primary_STAR_ = null;
uikit_hl.card._STAR_secondary_STAR_ = null;
uikit_hl.card._STAR_hover_STAR_ = null;
uikit_hl.card._STAR_small_STAR_ = null;
uikit_hl.card._STAR_large_STAR_ = null;
uikit_hl.card._STAR_top_STAR_ = null;
uikit_hl.card._STAR_bottom_STAR_ = null;
uikit_hl.card._STAR_left_STAR_ = null;
uikit_hl.card._STAR_right_STAR_ = null;
/**
 * @param {...*} var_args
 */
uikit_hl.card.card = (function() { 
var uikit_hl$card$card__delegate = function (args__14031__auto__){
var vec__14689 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14689,(0),null);
var kids = cljs.core.nth.call(null,vec__14689,(1),null);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_default_STAR_);
var primary = new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_primary_STAR_);
var secondary = new cljs.core.Keyword(null,"secondary","secondary",-669381460).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_secondary_STAR_);
var hover = new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_hover_STAR_);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_small_STAR_);
var large = new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_large_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large","large",-196820544));
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uk-card","uk-card",1851654234),true,new cljs.core.Keyword(null,"uk-card-default","uk-card-default",-1332527450),default$,new cljs.core.Keyword(null,"uk-card-primary","uk-card-primary",1853880697),primary,new cljs.core.Keyword(null,"uk-card-secondary","uk-card-secondary",1625904278),secondary,new cljs.core.Keyword(null,"uk-card-hover","uk-card-hover",-1736658345),hover,new cljs.core.Keyword(null,"uk-card-small","uk-card-small",1343728881),small,new cljs.core.Keyword(null,"uk-card-large","uk-card-large",563492703),large], null)),kids);
};
var uikit_hl$card$card = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14692__i = 0, G__14692__a = new Array(arguments.length -  0);
while (G__14692__i < G__14692__a.length) {G__14692__a[G__14692__i] = arguments[G__14692__i + 0]; ++G__14692__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14692__a,0,null);
} 
return uikit_hl$card$card__delegate.call(this,args__14031__auto__);};
uikit_hl$card$card.cljs$lang$maxFixedArity = 0;
uikit_hl$card$card.cljs$lang$applyTo = (function (arglist__14693){
var args__14031__auto__ = cljs.core.seq(arglist__14693);
return uikit_hl$card$card__delegate(args__14031__auto__);
});
uikit_hl$card$card.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$card$card__delegate;
return uikit_hl$card$card;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.card.media = (function() { 
var uikit_hl$card$media__delegate = function (args__14031__auto__){
var vec__14697 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14697,(0),null);
var kids = cljs.core.nth.call(null,vec__14697,(1),null);
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_top_STAR_);
var bottom = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_bottom_STAR_);
var right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_right_STAR_);
var left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.card._STAR_left_STAR_);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uk-card-media-top","uk-card-media-top",498229328),top,new cljs.core.Keyword(null,"uk-card-media-bottom","uk-card-media-bottom",639035052),bottom,new cljs.core.Keyword(null,"uk-card-media-right","uk-card-media-right",1978514344),right,new cljs.core.Keyword(null,"uk-card-media-left","uk-card-media-left",205745394),left], null)),kids);
};
var uikit_hl$card$media = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14700__i = 0, G__14700__a = new Array(arguments.length -  0);
while (G__14700__i < G__14700__a.length) {G__14700__a[G__14700__i] = arguments[G__14700__i + 0]; ++G__14700__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14700__a,0,null);
} 
return uikit_hl$card$media__delegate.call(this,args__14031__auto__);};
uikit_hl$card$media.cljs$lang$maxFixedArity = 0;
uikit_hl$card$media.cljs$lang$applyTo = (function (arglist__14701){
var args__14031__auto__ = cljs.core.seq(arglist__14701);
return uikit_hl$card$media__delegate(args__14031__auto__);
});
uikit_hl$card$media.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$card$media__delegate;
return uikit_hl$card$media;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.card.header = (function() { 
var uikit_hl$card$header__delegate = function (args__14031__auto__){
var vec__14705 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14705,(0),null);
var kids = cljs.core.nth.call(null,vec__14705,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-card-header","uk-card-header",1963631196),true], null)),kids);
};
var uikit_hl$card$header = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14708__i = 0, G__14708__a = new Array(arguments.length -  0);
while (G__14708__i < G__14708__a.length) {G__14708__a[G__14708__i] = arguments[G__14708__i + 0]; ++G__14708__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14708__a,0,null);
} 
return uikit_hl$card$header__delegate.call(this,args__14031__auto__);};
uikit_hl$card$header.cljs$lang$maxFixedArity = 0;
uikit_hl$card$header.cljs$lang$applyTo = (function (arglist__14709){
var args__14031__auto__ = cljs.core.seq(arglist__14709);
return uikit_hl$card$header__delegate(args__14031__auto__);
});
uikit_hl$card$header.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$card$header__delegate;
return uikit_hl$card$header;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.card.body = (function() { 
var uikit_hl$card$body__delegate = function (args__14031__auto__){
var vec__14713 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14713,(0),null);
var kids = cljs.core.nth.call(null,vec__14713,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-card-body","uk-card-body",-1528662638),true], null)),kids);
};
var uikit_hl$card$body = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14716__i = 0, G__14716__a = new Array(arguments.length -  0);
while (G__14716__i < G__14716__a.length) {G__14716__a[G__14716__i] = arguments[G__14716__i + 0]; ++G__14716__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14716__a,0,null);
} 
return uikit_hl$card$body__delegate.call(this,args__14031__auto__);};
uikit_hl$card$body.cljs$lang$maxFixedArity = 0;
uikit_hl$card$body.cljs$lang$applyTo = (function (arglist__14717){
var args__14031__auto__ = cljs.core.seq(arglist__14717);
return uikit_hl$card$body__delegate(args__14031__auto__);
});
uikit_hl$card$body.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$card$body__delegate;
return uikit_hl$card$body;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.card.footer = (function() { 
var uikit_hl$card$footer__delegate = function (args__14031__auto__){
var vec__14721 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14721,(0),null);
var kids = cljs.core.nth.call(null,vec__14721,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-card-footer","uk-card-footer",1403310688),true], null)),kids);
};
var uikit_hl$card$footer = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14724__i = 0, G__14724__a = new Array(arguments.length -  0);
while (G__14724__i < G__14724__a.length) {G__14724__a[G__14724__i] = arguments[G__14724__i + 0]; ++G__14724__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14724__a,0,null);
} 
return uikit_hl$card$footer__delegate.call(this,args__14031__auto__);};
uikit_hl$card$footer.cljs$lang$maxFixedArity = 0;
uikit_hl$card$footer.cljs$lang$applyTo = (function (arglist__14725){
var args__14031__auto__ = cljs.core.seq(arglist__14725);
return uikit_hl$card$footer__delegate(args__14031__auto__);
});
uikit_hl$card$footer.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$card$footer__delegate;
return uikit_hl$card$footer;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.card.badge = (function() { 
var uikit_hl$card$badge__delegate = function (args__14031__auto__){
var vec__14729 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14729,(0),null);
var kids = cljs.core.nth.call(null,vec__14729,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-card-badge","uk-card-badge",237316689),true], null)),kids);
};
var uikit_hl$card$badge = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14732__i = 0, G__14732__a = new Array(arguments.length -  0);
while (G__14732__i < G__14732__a.length) {G__14732__a[G__14732__i] = arguments[G__14732__i + 0]; ++G__14732__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14732__a,0,null);
} 
return uikit_hl$card$badge__delegate.call(this,args__14031__auto__);};
uikit_hl$card$badge.cljs$lang$maxFixedArity = 0;
uikit_hl$card$badge.cljs$lang$applyTo = (function (arglist__14733){
var args__14031__auto__ = cljs.core.seq(arglist__14733);
return uikit_hl$card$badge__delegate(args__14031__auto__);
});
uikit_hl$card$badge.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$card$badge__delegate;
return uikit_hl$card$badge;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.card.title = (function() { 
var uikit_hl$card$title__delegate = function (args__14031__auto__){
var vec__14737 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14737,(0),null);
var kids = cljs.core.nth.call(null,vec__14737,(1),null);
return hoplon.core.h3.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-card-title","uk-card-title",814256505),true], null)),kids);
};
var uikit_hl$card$title = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14740__i = 0, G__14740__a = new Array(arguments.length -  0);
while (G__14740__i < G__14740__a.length) {G__14740__a[G__14740__i] = arguments[G__14740__i + 0]; ++G__14740__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14740__a,0,null);
} 
return uikit_hl$card$title__delegate.call(this,args__14031__auto__);};
uikit_hl$card$title.cljs$lang$maxFixedArity = 0;
uikit_hl$card$title.cljs$lang$applyTo = (function (arglist__14741){
var args__14031__auto__ = cljs.core.seq(arglist__14741);
return uikit_hl$card$title__delegate(args__14031__auto__);
});
uikit_hl$card$title.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$card$title__delegate;
return uikit_hl$card$title;
})()
;

//# sourceMappingURL=card.js.map