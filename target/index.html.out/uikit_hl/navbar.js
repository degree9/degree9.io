// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.navbar');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.navbar._STAR_uk_navbar_STAR_ = "";
uikit_hl.navbar._STAR_transparent_STAR_ = null;
uikit_hl.navbar._STAR_container_STAR_ = null;
uikit_hl.navbar._STAR_parent_STAR_ = null;
uikit_hl.navbar._STAR_active_STAR_ = null;
uikit_hl.navbar._STAR_title_STAR_ = null;
uikit_hl.navbar._STAR_href_STAR_ = null;
uikit_hl.navbar._STAR_width_STAR_ = null;
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320),(function (elem,_,v){
return UIkit.navbar(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.navbar = (function() { 
var uikit_hl$navbar$navbar__delegate = function (args__14031__auto__){
var vec__14873 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14873,(0),null);
var kids = cljs.core.nth.call(null,vec__14873,(1),null);
var navbar = new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_uk_navbar_STAR_);
var container = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_container_STAR_);
var transparent = new cljs.core.Keyword(null,"transparent","transparent",-2073609949).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_transparent_STAR_);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-navbar","uk-navbar",1681825320),navbar);
return hoplon.core.nav.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),container,new cljs.core.Keyword(null,"uk-navbar-transparent","uk-navbar-transparent",283367525),transparent], null)),kids);
};
var uikit_hl$navbar$navbar = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14876__i = 0, G__14876__a = new Array(arguments.length -  0);
while (G__14876__i < G__14876__a.length) {G__14876__a[G__14876__i] = arguments[G__14876__i + 0]; ++G__14876__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14876__a,0,null);
} 
return uikit_hl$navbar$navbar__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$navbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$navbar.cljs$lang$applyTo = (function (arglist__14877){
var args__14031__auto__ = cljs.core.seq(arglist__14877);
return uikit_hl$navbar$navbar__delegate(args__14031__auto__);
});
uikit_hl$navbar$navbar.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$navbar__delegate;
return uikit_hl$navbar$navbar;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.container = (function() { 
var uikit_hl$navbar$container__delegate = function (args__14031__auto__){
var vec__14881 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14881,(0),null);
var kids = cljs.core.nth.call(null,vec__14881,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-container","uk-navbar-container",1861853648),true], null)),kids);
};
var uikit_hl$navbar$container = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14884__i = 0, G__14884__a = new Array(arguments.length -  0);
while (G__14884__i < G__14884__a.length) {G__14884__a[G__14884__i] = arguments[G__14884__i + 0]; ++G__14884__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14884__a,0,null);
} 
return uikit_hl$navbar$container__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$container.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$container.cljs$lang$applyTo = (function (arglist__14885){
var args__14031__auto__ = cljs.core.seq(arglist__14885);
return uikit_hl$navbar$container__delegate(args__14031__auto__);
});
uikit_hl$navbar$container.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$container__delegate;
return uikit_hl$navbar$container;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.left = (function() { 
var uikit_hl$navbar$left__delegate = function (args__14031__auto__){
var vec__14889 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14889,(0),null);
var kids = cljs.core.nth.call(null,vec__14889,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-left","uk-navbar-left",1555483865),true], null)),kids);
};
var uikit_hl$navbar$left = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14892__i = 0, G__14892__a = new Array(arguments.length -  0);
while (G__14892__i < G__14892__a.length) {G__14892__a[G__14892__i] = arguments[G__14892__i + 0]; ++G__14892__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14892__a,0,null);
} 
return uikit_hl$navbar$left__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$left.cljs$lang$applyTo = (function (arglist__14893){
var args__14031__auto__ = cljs.core.seq(arglist__14893);
return uikit_hl$navbar$left__delegate(args__14031__auto__);
});
uikit_hl$navbar$left.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$left__delegate;
return uikit_hl$navbar$left;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.center = (function() { 
var uikit_hl$navbar$center__delegate = function (args__14031__auto__){
var vec__14897 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14897,(0),null);
var kids = cljs.core.nth.call(null,vec__14897,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center","uk-navbar-center",-1061086752),true], null)),kids);
};
var uikit_hl$navbar$center = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14900__i = 0, G__14900__a = new Array(arguments.length -  0);
while (G__14900__i < G__14900__a.length) {G__14900__a[G__14900__i] = arguments[G__14900__i + 0]; ++G__14900__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14900__a,0,null);
} 
return uikit_hl$navbar$center__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$center.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center.cljs$lang$applyTo = (function (arglist__14901){
var args__14031__auto__ = cljs.core.seq(arglist__14901);
return uikit_hl$navbar$center__delegate(args__14031__auto__);
});
uikit_hl$navbar$center.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$center__delegate;
return uikit_hl$navbar$center;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.center_left = (function() { 
var uikit_hl$navbar$center_left__delegate = function (args__14031__auto__){
var vec__14905 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14905,(0),null);
var kids = cljs.core.nth.call(null,vec__14905,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-left","uk-navbar-center-left",-602371230),true], null)),kids);
};
var uikit_hl$navbar$center_left = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14908__i = 0, G__14908__a = new Array(arguments.length -  0);
while (G__14908__i < G__14908__a.length) {G__14908__a[G__14908__i] = arguments[G__14908__i + 0]; ++G__14908__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14908__a,0,null);
} 
return uikit_hl$navbar$center_left__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$center_left.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_left.cljs$lang$applyTo = (function (arglist__14909){
var args__14031__auto__ = cljs.core.seq(arglist__14909);
return uikit_hl$navbar$center_left__delegate(args__14031__auto__);
});
uikit_hl$navbar$center_left.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$center_left__delegate;
return uikit_hl$navbar$center_left;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.center_right = (function() { 
var uikit_hl$navbar$center_right__delegate = function (args__14031__auto__){
var vec__14913 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14913,(0),null);
var kids = cljs.core.nth.call(null,vec__14913,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-center-right","uk-navbar-center-right",-2136573693),true], null)),kids);
};
var uikit_hl$navbar$center_right = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14916__i = 0, G__14916__a = new Array(arguments.length -  0);
while (G__14916__i < G__14916__a.length) {G__14916__a[G__14916__i] = arguments[G__14916__i + 0]; ++G__14916__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14916__a,0,null);
} 
return uikit_hl$navbar$center_right__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$center_right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$center_right.cljs$lang$applyTo = (function (arglist__14917){
var args__14031__auto__ = cljs.core.seq(arglist__14917);
return uikit_hl$navbar$center_right__delegate(args__14031__auto__);
});
uikit_hl$navbar$center_right.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$center_right__delegate;
return uikit_hl$navbar$center_right;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.right = (function() { 
var uikit_hl$navbar$right__delegate = function (args__14031__auto__){
var vec__14921 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14921,(0),null);
var kids = cljs.core.nth.call(null,vec__14921,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-right","uk-navbar-right",1559569510),true], null)),kids);
};
var uikit_hl$navbar$right = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14924__i = 0, G__14924__a = new Array(arguments.length -  0);
while (G__14924__i < G__14924__a.length) {G__14924__a[G__14924__i] = arguments[G__14924__i + 0]; ++G__14924__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14924__a,0,null);
} 
return uikit_hl$navbar$right__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$right.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$right.cljs$lang$applyTo = (function (arglist__14925){
var args__14031__auto__ = cljs.core.seq(arglist__14925);
return uikit_hl$navbar$right__delegate(args__14031__auto__);
});
uikit_hl$navbar$right.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$right__delegate;
return uikit_hl$navbar$right;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.nav = (function() { 
var uikit_hl$navbar$nav__delegate = function (args__14031__auto__){
var vec__14929 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14929,(0),null);
var kids = cljs.core.nth.call(null,vec__14929,(1),null);
return hoplon.core.ul.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-nav","uk-navbar-nav",-1857985721),true], null)),kids);
};
var uikit_hl$navbar$nav = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14932__i = 0, G__14932__a = new Array(arguments.length -  0);
while (G__14932__i < G__14932__a.length) {G__14932__a[G__14932__i] = arguments[G__14932__i + 0]; ++G__14932__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14932__a,0,null);
} 
return uikit_hl$navbar$nav__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$nav.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav.cljs$lang$applyTo = (function (arglist__14933){
var args__14031__auto__ = cljs.core.seq(arglist__14933);
return uikit_hl$navbar$nav__delegate(args__14031__auto__);
});
uikit_hl$navbar$nav.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$nav__delegate;
return uikit_hl$navbar$nav;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.nav_item = (function() { 
var uikit_hl$navbar$nav_item__delegate = function (args__14031__auto__){
var vec__14937 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14937,(0),null);
var kids = cljs.core.nth.call(null,vec__14937,(1),null);
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_parent_STAR_);
var active = new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_active_STAR_);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_title_STAR_);
var href = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.navbar._STAR_href_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"href","href",-793805698));
return hoplon.core.li.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-parent","uk-parent",-2114518338),parent,new cljs.core.Keyword(null,"uk-active","uk-active",1648067307),active], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),href,title),kids], null));
};
var uikit_hl$navbar$nav_item = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14940__i = 0, G__14940__a = new Array(arguments.length -  0);
while (G__14940__i < G__14940__a.length) {G__14940__a[G__14940__i] = arguments[G__14940__i + 0]; ++G__14940__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14940__a,0,null);
} 
return uikit_hl$navbar$nav_item__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$nav_item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$nav_item.cljs$lang$applyTo = (function (arglist__14941){
var args__14031__auto__ = cljs.core.seq(arglist__14941);
return uikit_hl$navbar$nav_item__delegate(args__14031__auto__);
});
uikit_hl$navbar$nav_item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$nav_item__delegate;
return uikit_hl$navbar$nav_item;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.subtitle = (function() { 
var uikit_hl$navbar$subtitle__delegate = function (args__14031__auto__){
var vec__14945 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14945,(0),null);
var kids = cljs.core.nth.call(null,vec__14945,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-subtitle","uk-navbar-subtitle",-357285536),true], null)),kids);
};
var uikit_hl$navbar$subtitle = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14948__i = 0, G__14948__a = new Array(arguments.length -  0);
while (G__14948__i < G__14948__a.length) {G__14948__a[G__14948__i] = arguments[G__14948__i + 0]; ++G__14948__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14948__a,0,null);
} 
return uikit_hl$navbar$subtitle__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$subtitle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$subtitle.cljs$lang$applyTo = (function (arglist__14949){
var args__14031__auto__ = cljs.core.seq(arglist__14949);
return uikit_hl$navbar$subtitle__delegate(args__14031__auto__);
});
uikit_hl$navbar$subtitle.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$subtitle__delegate;
return uikit_hl$navbar$subtitle;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.item = (function() { 
var uikit_hl$navbar$item__delegate = function (args__14031__auto__){
var vec__14953 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14953,(0),null);
var kids = cljs.core.nth.call(null,vec__14953,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-item","uk-navbar-item",-734558194),true], null)),kids);
};
var uikit_hl$navbar$item = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14956__i = 0, G__14956__a = new Array(arguments.length -  0);
while (G__14956__i < G__14956__a.length) {G__14956__a[G__14956__i] = arguments[G__14956__i + 0]; ++G__14956__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14956__a,0,null);
} 
return uikit_hl$navbar$item__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$item.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$item.cljs$lang$applyTo = (function (arglist__14957){
var args__14031__auto__ = cljs.core.seq(arglist__14957);
return uikit_hl$navbar$item__delegate(args__14031__auto__);
});
uikit_hl$navbar$item.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$item__delegate;
return uikit_hl$navbar$item;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.toggle = (function() { 
var uikit_hl$navbar$toggle__delegate = function (args__14031__auto__){
var vec__14961 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14961,(0),null);
var kids = cljs.core.nth.call(null,vec__14961,(1),null);
return hoplon.core.a.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-toggle","uk-navbar-toggle",1322725901),true], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.span.call(null,new cljs.core.Keyword(null,"uk-navbar-toggle-icon","uk-navbar-toggle-icon",1696225935),""),kids], null));
};
var uikit_hl$navbar$toggle = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14964__i = 0, G__14964__a = new Array(arguments.length -  0);
while (G__14964__i < G__14964__a.length) {G__14964__a[G__14964__i] = arguments[G__14964__i + 0]; ++G__14964__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14964__a,0,null);
} 
return uikit_hl$navbar$toggle__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$toggle.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$toggle.cljs$lang$applyTo = (function (arglist__14965){
var args__14031__auto__ = cljs.core.seq(arglist__14965);
return uikit_hl$navbar$toggle__delegate(args__14031__auto__);
});
uikit_hl$navbar$toggle.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$toggle__delegate;
return uikit_hl$navbar$toggle;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.navbar.dropbar = (function() { 
var uikit_hl$navbar$dropbar__delegate = function (args__14031__auto__){
var vec__14969 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14969,(0),null);
var kids = cljs.core.nth.call(null,vec__14969,(1),null);
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropbar","uk-navbar-dropbar",-226656757),true], null)),kids);
};
var uikit_hl$navbar$dropbar = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14972__i = 0, G__14972__a = new Array(arguments.length -  0);
while (G__14972__i < G__14972__a.length) {G__14972__a[G__14972__i] = arguments[G__14972__i + 0]; ++G__14972__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14972__a,0,null);
} 
return uikit_hl$navbar$dropbar__delegate.call(this,args__14031__auto__);};
uikit_hl$navbar$dropbar.cljs$lang$maxFixedArity = 0;
uikit_hl$navbar$dropbar.cljs$lang$applyTo = (function (arglist__14973){
var args__14031__auto__ = cljs.core.seq(arglist__14973);
return uikit_hl$navbar$dropbar__delegate(args__14031__auto__);
});
uikit_hl$navbar$dropbar.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$navbar$dropbar__delegate;
return uikit_hl$navbar$dropbar;
})()
;

//# sourceMappingURL=navbar.js.map