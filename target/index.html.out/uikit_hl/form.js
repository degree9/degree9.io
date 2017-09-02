// Compiled by ClojureScript 1.9.542 {}
goog.provide('uikit_hl.form');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('uikit_hl.core');
uikit_hl.form._STAR_danger_STAR_ = null;
uikit_hl.form._STAR_success_STAR_ = null;
uikit_hl.form._STAR_small_STAR_ = null;
uikit_hl.form._STAR_large_STAR_ = null;
uikit_hl.form._STAR_width_large_STAR_ = null;
uikit_hl.form._STAR_width_medium_STAR_ = null;
uikit_hl.form._STAR_width_small_STAR_ = null;
uikit_hl.form._STAR_width_xsmall_STAR_ = null;
uikit_hl.form._STAR_blank_STAR_ = null;
uikit_hl.form._STAR_stacked_STAR_ = null;
uikit_hl.form._STAR_horizontal_STAR_ = null;
/**
 * @param {...*} var_args
 */
uikit_hl.form.form = (function() { 
var uikit_hl$form$form__delegate = function (args__14031__auto__){
var vec__14747 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14747,(0),null);
var kids = cljs.core.nth.call(null,vec__14747,(1),null);
var stacked = new cljs.core.Keyword(null,"stacked","stacked",2007240048).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_stacked_STAR_);
var horizontal = new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_horizontal_STAR_);
return hoplon.core.form.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uk-form-stacked","uk-form-stacked",1731168179),stacked,new cljs.core.Keyword(null,"uk-form-horizontal","uk-form-horizontal",359023541),horizontal], null)),kids);
};
var uikit_hl$form$form = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14750__i = 0, G__14750__a = new Array(arguments.length -  0);
while (G__14750__i < G__14750__a.length) {G__14750__a[G__14750__i] = arguments[G__14750__i + 0]; ++G__14750__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14750__a,0,null);
} 
return uikit_hl$form$form__delegate.call(this,args__14031__auto__);};
uikit_hl$form$form.cljs$lang$maxFixedArity = 0;
uikit_hl$form$form.cljs$lang$applyTo = (function (arglist__14751){
var args__14031__auto__ = cljs.core.seq(arglist__14751);
return uikit_hl$form$form__delegate(args__14031__auto__);
});
uikit_hl$form$form.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$form$form__delegate;
return uikit_hl$form$form;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.form.input = (function() { 
var uikit_hl$form$input__delegate = function (args__14031__auto__){
var vec__14755 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14755,(0),null);
var kids = cljs.core.nth.call(null,vec__14755,(1),null);
var danger = new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_danger_STAR_);
var success = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_success_STAR_);
var small = new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_small_STAR_);
var large = new cljs.core.Keyword(null,"large","large",-196820544).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_large_STAR_);
var width_large = new cljs.core.Keyword(null,"width-large","width-large",1359806110).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_width_large_STAR_);
var width_medium = new cljs.core.Keyword(null,"width-medium","width-medium",-1861381653).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_width_medium_STAR_);
var width_small = new cljs.core.Keyword(null,"width-small","width-small",-1210276308).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_width_small_STAR_);
var width_xsmall = new cljs.core.Keyword(null,"width-xsmall","width-xsmall",1921536319).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_width_xsmall_STAR_);
var blank = new cljs.core.Keyword(null,"blank","blank",-1249652109).cljs$core$IFn$_invoke$arity$2(attr,uikit_hl.form._STAR_blank_STAR_);
var attr__$1 = cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"large","large",-196820544),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.Keyword(null,"width-large","width-large",1359806110),new cljs.core.Keyword(null,"width-medium","width-medium",-1861381653),new cljs.core.Keyword(null,"width-small","width-small",-1210276308),new cljs.core.Keyword(null,"width-xsmall","width-xsmall",1921536319));
return hoplon.core.input.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"uk-form-width-large","uk-form-width-large",685564578),new cljs.core.Keyword(null,"uk-form-blank","uk-form-blank",-501724508),new cljs.core.Keyword(null,"uk-form-width-xsmall","uk-form-width-xsmall",493119467),new cljs.core.Keyword(null,"uk-form-width-medium","uk-form-width-medium",11280397),new cljs.core.Keyword(null,"uk-form-width-small","uk-form-width-small",-1689971538),new cljs.core.Keyword(null,"uk-form-danger","uk-form-danger",1227969870),new cljs.core.Keyword(null,"uk-input","uk-input",-1410419346),new cljs.core.Keyword(null,"uk-form-large","uk-form-large",-877382764),new cljs.core.Keyword(null,"uk-form-small","uk-form-small",-2047190406),new cljs.core.Keyword(null,"uk-form-success","uk-form-success",-1326163745)],[width_large,blank,width_xsmall,width_medium,width_small,danger,true,large,small,success])),kids);
};
var uikit_hl$form$input = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14758__i = 0, G__14758__a = new Array(arguments.length -  0);
while (G__14758__i < G__14758__a.length) {G__14758__a[G__14758__i] = arguments[G__14758__i + 0]; ++G__14758__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14758__a,0,null);
} 
return uikit_hl$form$input__delegate.call(this,args__14031__auto__);};
uikit_hl$form$input.cljs$lang$maxFixedArity = 0;
uikit_hl$form$input.cljs$lang$applyTo = (function (arglist__14759){
var args__14031__auto__ = cljs.core.seq(arglist__14759);
return uikit_hl$form$input__delegate(args__14031__auto__);
});
uikit_hl$form$input.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$form$input__delegate;
return uikit_hl$form$input;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.form.fieldset = (function() { 
var uikit_hl$form$fieldset__delegate = function (args__14031__auto__){
var vec__14763 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14763,(0),null);
var kids = cljs.core.nth.call(null,vec__14763,(1),null);
return hoplon.core.fieldset.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-fieldset","uk-fieldset",879106488),true], null)),kids);
};
var uikit_hl$form$fieldset = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14766__i = 0, G__14766__a = new Array(arguments.length -  0);
while (G__14766__i < G__14766__a.length) {G__14766__a[G__14766__i] = arguments[G__14766__i + 0]; ++G__14766__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14766__a,0,null);
} 
return uikit_hl$form$fieldset__delegate.call(this,args__14031__auto__);};
uikit_hl$form$fieldset.cljs$lang$maxFixedArity = 0;
uikit_hl$form$fieldset.cljs$lang$applyTo = (function (arglist__14767){
var args__14031__auto__ = cljs.core.seq(arglist__14767);
return uikit_hl$form$fieldset__delegate(args__14031__auto__);
});
uikit_hl$form$fieldset.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$form$fieldset__delegate;
return uikit_hl$form$fieldset;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.form.legend = (function() { 
var uikit_hl$form$legend__delegate = function (args__14031__auto__){
var vec__14771 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14771,(0),null);
var kids = cljs.core.nth.call(null,vec__14771,(1),null);
return hoplon.core.legend.call(null,uikit_hl.core.assoc_class.call(null,attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-legend","uk-legend",951316938),true], null)),kids);
};
var uikit_hl$form$legend = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14774__i = 0, G__14774__a = new Array(arguments.length -  0);
while (G__14774__i < G__14774__a.length) {G__14774__a[G__14774__i] = arguments[G__14774__i + 0]; ++G__14774__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14774__a,0,null);
} 
return uikit_hl$form$legend__delegate.call(this,args__14031__auto__);};
uikit_hl$form$legend.cljs$lang$maxFixedArity = 0;
uikit_hl$form$legend.cljs$lang$applyTo = (function (arglist__14775){
var args__14031__auto__ = cljs.core.seq(arglist__14775);
return uikit_hl$form$legend__delegate(args__14031__auto__);
});
uikit_hl$form$legend.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$form$legend__delegate;
return uikit_hl$form$legend;
})()
;
/**
 * @param {...*} var_args
 */
uikit_hl.form.checkbox = (function() { 
var uikit_hl$form$checkbox__delegate = function (args__14031__auto__){
var vec__14779 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__14779,(0),null);
var kids = cljs.core.nth.call(null,vec__14779,(1),null);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox");
return hoplon.core.label.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.input.call(null,uikit_hl.core.assoc_class.call(null,attr__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uk-checkbox","uk-checkbox",-49563346),true], null)))," ",kids], null));
};
var uikit_hl$form$checkbox = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__14782__i = 0, G__14782__a = new Array(arguments.length -  0);
while (G__14782__i < G__14782__a.length) {G__14782__a[G__14782__i] = arguments[G__14782__i + 0]; ++G__14782__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__14782__a,0,null);
} 
return uikit_hl$form$checkbox__delegate.call(this,args__14031__auto__);};
uikit_hl$form$checkbox.cljs$lang$maxFixedArity = 0;
uikit_hl$form$checkbox.cljs$lang$applyTo = (function (arglist__14783){
var args__14031__auto__ = cljs.core.seq(arglist__14783);
return uikit_hl$form$checkbox__delegate(args__14031__auto__);
});
uikit_hl$form$checkbox.cljs$core$IFn$_invoke$arity$variadic = uikit_hl$form$checkbox__delegate;
return uikit_hl$form$checkbox;
})()
;

//# sourceMappingURL=form.js.map