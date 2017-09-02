// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.dropdown');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.dropdown._STAR_uk_dropdown_STAR_ = "";
uikit_hl.dropdown._STAR_navbar_STAR_ = null;
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"uk-dropdown","uk-dropdown",291537007),(function (elem,_,v){
return UIkit.dropdown(elem,cljs.core.clj__GT_js.call(null,v));
}));
/**
 * @param {...*} var_args
 */
uikit_hl.dropdown.dropdown = (function() { 
var uikit_hl$dropdown$dropdown__delegate = function (args__14031__auto__){
var vec__14679 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14679,(0),null);
var kids = cljs.core.nth.call(null,vec__14679,(1),null);
var dropdown = new cljs.core.Keyword(null,"uk-dropdown","uk-dropdown",291537007).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.dropdown._STAR_uk_dropdown_STAR_);
var navbar = new cljs.core.Keyword(null,"navbar","navbar",1584396041).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.dropdown._STAR_navbar_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"uk-dropdown","uk-dropdown",291537007),dropdown),new cljs.core.Keyword(null,"navbar","navbar",1584396041));
return hoplon.core.div.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-navbar-dropdown","uk-navbar-dropdown",211658428),navbar], null)),kids);
};
var uikit_hl$dropdown$dropdown = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14682__i = 0, G__14682__a = new Array(arguments.length -  0);
while (G__14682__i < G__14682__a.length) {G__14682__a[G__14682__i] = arguments[G__14682__i + 0]; ++G__14682__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14682__a,0,null);
} 
return uikit_hl$dropdown$dropdown__delegate.call(this,args__14031__auto__);};
uikit_hl$dropdown$dropdown.cljs$lang$maxFixedArity = 0;
uikit_hl$dropdown$dropdown.cljs$lang$applyTo = (function (arglist__14683){
var args__14031__auto__ = cljs.core.seq(arglist__14683);
return uikit_hl$dropdown$dropdown__delegate(args__14031__auto__);
});
uikit_hl$dropdown$dropdown.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$dropdown$dropdown__delegate;
return uikit_hl$dropdown$dropdown;
})()
;

//# sourceMappingURL=dropdown.js.map