// Compiled by ClojureScript 1.9.542 {}
goog.provide('meta.ui.uikit');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('meta.core');
goog.require('uikit_hl.button');
goog.require('uikit_hl.core');
goog.require('uikit_hl.card');
goog.require('uikit_hl.container');
goog.require('uikit_hl.dropdown');
goog.require('uikit_hl.form');
goog.require('uikit_hl.grid');
goog.require('uikit_hl.icon');
goog.require('uikit_hl.navbar');
goog.require('uikit_hl.tab');
goog.require('uikit_hl.width');
/**
 * @param {...*} var_args
 */
meta.ui.uikit.dashmenu = (function() { 
var meta$ui$uikit$dashmenu__delegate = function (args__14031__auto__){
var vec__15013 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15013,(0),null);
var kids = cljs.core.nth.call(null,vec__15013,(1),null);
return uikit_hl.grid.grid.call(null,new cljs.core.Keyword(null,"child-width-1-3-s","child-width-1-3-s",-1742358053),true,new cljs.core.Keyword(null,"child-width-1-4-m","child-width-1-4-m",849649936),true,hoplon.core.loop_tpl_STAR_.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(attr),((function (vec__15013,attr,kids){
return (function (item__14082__auto__){
var vec__15016 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (vec__15013,attr,kids){
return (function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
});})(vec__15013,attr,kids))
).call(null,item__14082__auto__));
var x = cljs.core.nth.call(null,vec__15016,(0),null);
return uikit_hl.grid.cell.call(null,new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__15016,x,vec__15013,attr,kids){
return (function (){
return new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(attr).call(null,cljs.core.key.call(null,cljs.core.deref.call(null,x)));
});})(vec__15016,x,vec__15013,attr,kids))
,hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-text-center","uk-text-center",-1684510858)], null),uikit_hl.icon.icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541),javelin.core.formula.call(null,((function (vec__15016,x,vec__15013,attr,kids){
return (function (G__15020,G__15019){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(G__15019.call(null,G__15020));
});})(vec__15016,x,vec__15013,attr,kids))
).call(null,x,cljs.core.val),new cljs.core.Keyword(null,"ratio","ratio",-926560044),(2)),hoplon.core.br.call(null),(function (){var t__14159__auto__ = document.createTextNode("");
javelin.core.formula.call(null,((function (t__14159__auto__,vec__15016,x,vec__15013,attr,kids){
return (function (G__15023,G__15021,G__15022){
return G__15021.nodeValue = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__15022.call(null,G__15023)))].join('');
});})(t__14159__auto__,vec__15016,x,vec__15013,attr,kids))
).call(null,x,t__14159__auto__,cljs.core.val);

return t__14159__auto__;
})()));
});})(vec__15013,attr,kids))
));
};
var meta$ui$uikit$dashmenu = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15024__i = 0, G__15024__a = new Array(arguments.length -  0);
while (G__15024__i < G__15024__a.length) {G__15024__a[G__15024__i] = arguments[G__15024__i + 0]; ++G__15024__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15024__a,0,null);
} 
return meta$ui$uikit$dashmenu__delegate.call(this,args__14031__auto__);};
meta$ui$uikit$dashmenu.cljs$lang$maxFixedArity = 0;
meta$ui$uikit$dashmenu.cljs$lang$applyTo = (function (arglist__15025){
var args__14031__auto__ = cljs.core.seq(arglist__15025);
return meta$ui$uikit$dashmenu__delegate(args__14031__auto__);
});
meta$ui$uikit$dashmenu.cljs$core$IFn$_invoke$arity$variadic = meta$ui$uikit$dashmenu__delegate;
return meta$ui$uikit$dashmenu;
})()
;
/**
 * @param {...*} var_args
 */
meta.ui.uikit.dashnav = (function() { 
var meta$ui$uikit$dashnav__delegate = function (args__14031__auto__){
var vec__15029 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15029,(0),null);
var kids = cljs.core.nth.call(null,vec__15029,(1),null);
return uikit_hl.navbar.container.call(null,uikit_hl.container.container.call(null,new cljs.core.Keyword(null,"expand","expand",595248157),true,uikit_hl.navbar.navbar.call(null,uikit_hl.navbar.left.call(null,uikit_hl.navbar.nav.call(null,uikit_hl.navbar.toggle.call(null),uikit_hl.dropdown.dropdown.call(null,new cljs.core.Keyword(null,"uk-dropdown","uk-dropdown",291537007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"click"], null),new cljs.core.Keyword(null,"navbar","navbar",1584396041),true,new cljs.core.Keyword(null,"width-xlarge","width-xlarge",1487899411),true,meta.ui.uikit.dashmenu.call(null,new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"menu","menu",352255198).cljs$core$IFn$_invoke$arity$1(attr),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(attr))),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(attr))),uikit_hl.navbar.center.call(null,uikit_hl.navbar.nav.call(null,new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(attr))),uikit_hl.navbar.right.call(null,uikit_hl.navbar.nav.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(attr))))));
};
var meta$ui$uikit$dashnav = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15032__i = 0, G__15032__a = new Array(arguments.length -  0);
while (G__15032__i < G__15032__a.length) {G__15032__a[G__15032__i] = arguments[G__15032__i + 0]; ++G__15032__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15032__a,0,null);
} 
return meta$ui$uikit$dashnav__delegate.call(this,args__14031__auto__);};
meta$ui$uikit$dashnav.cljs$lang$maxFixedArity = 0;
meta$ui$uikit$dashnav.cljs$lang$applyTo = (function (arglist__15033){
var args__14031__auto__ = cljs.core.seq(arglist__15033);
return meta$ui$uikit$dashnav__delegate(args__14031__auto__);
});
meta$ui$uikit$dashnav.cljs$core$IFn$_invoke$arity$variadic = meta$ui$uikit$dashnav__delegate;
return meta$ui$uikit$dashnav;
})()
;
/**
 * @param {...*} var_args
 */
meta.ui.uikit.dashboard = (function() { 
var meta$ui$uikit$dashboard__delegate = function (args__14031__auto__){
var vec__15045 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15045,(0),null);
var kids = cljs.core.nth.call(null,vec__15045,(1),null);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-height-viewport","uk-height-viewport",1215755821)], null),meta.ui.uikit.dashnav.call(null,new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"menu","menu",352255198).cljs$core$IFn$_invoke$arity$1(attr),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"nav-left","nav-left",845947876).cljs$core$IFn$_invoke$arity$1(attr),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"nav-center","nav-center",83682521).cljs$core$IFn$_invoke$arity$1(attr),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"nav-right","nav-right",591041267).cljs$core$IFn$_invoke$arity$1(attr),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(attr)),uikit_hl.container.container.call(null,uikit_hl.grid.grid.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-margin-top","uk-margin-top",-440970665)], null),new cljs.core.Keyword(null,"match","match",1220059550),true,new cljs.core.Keyword(null,"child-width-1-2-s","child-width-1-2-s",-1180108295),true,new cljs.core.Keyword(null,"child-width-1-3-m","child-width-1-3-m",-1418872937),true,hoplon.core.loop_tpl_STAR_.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(attr),((function (vec__15045,attr,kids){
return (function (item__14082__auto__){
var vec__15048 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (vec__15045,attr,kids){
return (function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
});})(vec__15045,attr,kids))
).call(null,item__14082__auto__));
var x = cljs.core.nth.call(null,vec__15048,(0),null);
return uikit_hl.grid.cell.call(null,uikit_hl.card.card.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),true,uikit_hl.card.body.call(null,uikit_hl.card.title.call(null,uikit_hl.icon.icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541),javelin.core.formula.call(null,((function (vec__15048,x,vec__15045,attr,kids){
return (function (G__15051,G__15052){
if(cljs.core.truth_(G__15051)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(G__15052.call(null,G__15051));
} else {
return null;
}
});})(vec__15048,x,vec__15045,attr,kids))
).call(null,x,cljs.core.val),new cljs.core.Keyword(null,"ratio","ratio",-926560044),(2)),(function (){var t__14159__auto__ = document.createTextNode("");
javelin.core.formula.call(null,((function (t__14159__auto__,vec__15048,x,vec__15045,attr,kids){
return (function (G__15054,G__15053,G__15055){
return G__15053.nodeValue = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(G__15054)?new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__15055.call(null,G__15054)):null))].join('');
});})(t__14159__auto__,vec__15048,x,vec__15045,attr,kids))
).call(null,x,t__14159__auto__,cljs.core.val);

return t__14159__auto__;
})()))));
});})(vec__15045,attr,kids))
))));
};
var meta$ui$uikit$dashboard = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15056__i = 0, G__15056__a = new Array(arguments.length -  0);
while (G__15056__i < G__15056__a.length) {G__15056__a[G__15056__i] = arguments[G__15056__i + 0]; ++G__15056__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15056__a,0,null);
} 
return meta$ui$uikit$dashboard__delegate.call(this,args__14031__auto__);};
meta$ui$uikit$dashboard.cljs$lang$maxFixedArity = 0;
meta$ui$uikit$dashboard.cljs$lang$applyTo = (function (arglist__15057){
var args__14031__auto__ = cljs.core.seq(arglist__15057);
return meta$ui$uikit$dashboard__delegate(args__14031__auto__);
});
meta$ui$uikit$dashboard.cljs$core$IFn$_invoke$arity$variadic = meta$ui$uikit$dashboard__delegate;
return meta$ui$uikit$dashboard;
})()
;
/**
 * @param {...*} var_args
 */
meta.ui.uikit.login = (function() { 
var meta$ui$uikit$login__delegate = function (args__14031__auto__){
var vec__15061 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15061,(0),null);
var kids = cljs.core.nth.call(null,vec__15061,(1),null);
return hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-height-viewport","uk-height-viewport",1215755821)], null),uikit_hl.container.container.call(null,new cljs.core.Keyword(null,"small","small",2133478704),true,uikit_hl.card.card.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"small","small",2133478704),true,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"350px"], null),uikit_hl.card.header.call(null,hoplon.core.img.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-logo","uk-logo",893787764)], null),new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"85px",new cljs.core.Keyword(null,"width","width",-384071477),"225px"], null),new cljs.core.Keyword(null,"src","src",-1651076051),"https://d9lounge.firebaseapp.com/images/logo.png")),uikit_hl.card.body.call(null,uikit_hl.form.form.call(null,uikit_hl.grid.grid.call(null,new cljs.core.Keyword(null,"small","small",2133478704),true,new cljs.core.Keyword(null,"width-expand","width-expand",-1343393809),true,hoplon.core.div.call(null,new cljs.core.Keyword(null,"width-1-1","width-1-1",-1055496259),uikit_hl.form.input.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"blank","blank",-1249652109),true)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"width-1-1","width-1-1",-1055496259),uikit_hl.form.input.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"blank","blank",-1249652109),true)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"width-1-1","width-1-1",-1055496259),uikit_hl.form.checkbox.call(null,"Remember Me")),hoplon.core.div.call(null,new cljs.core.Keyword(null,"width-1-2","width-1-2",-670215649),uikit_hl.button.button.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),true,"Reset Password?"))))),uikit_hl.card.footer.call(null,uikit_hl.button.button.call(null,new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uk-width-1-1","uk-width-1-1",-1113725765)], null),"Login"))),hoplon.core.div.call(null)));
};
var meta$ui$uikit$login = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15064__i = 0, G__15064__a = new Array(arguments.length -  0);
while (G__15064__i < G__15064__a.length) {G__15064__a[G__15064__i] = arguments[G__15064__i + 0]; ++G__15064__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15064__a,0,null);
} 
return meta$ui$uikit$login__delegate.call(this,args__14031__auto__);};
meta$ui$uikit$login.cljs$lang$maxFixedArity = 0;
meta$ui$uikit$login.cljs$lang$applyTo = (function (arglist__15065){
var args__14031__auto__ = cljs.core.seq(arglist__15065);
return meta$ui$uikit$login__delegate(args__14031__auto__);
});
meta$ui$uikit$login.cljs$core$IFn$_invoke$arity$variadic = meta$ui$uikit$login__delegate;
return meta$ui$uikit$login;
})()
;
/**
 * @param {...*} var_args
 */
meta.ui.uikit.app = (function() { 
var meta$ui$uikit$app__delegate = function (args__14031__auto__){
var vec__15069 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15069,(0),null);
var kids = cljs.core.nth.call(null,vec__15069,(1),null);
var attr__$1 = cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f9f9fb"], null));
return hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.25/css/uikit.min.css")),hoplon.core.body.call(null,attr__$1,kids));
};
var meta$ui$uikit$app = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15072__i = 0, G__15072__a = new Array(arguments.length -  0);
while (G__15072__i < G__15072__a.length) {G__15072__a[G__15072__i] = arguments[G__15072__i + 0]; ++G__15072__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15072__a,0,null);
} 
return meta$ui$uikit$app__delegate.call(this,args__14031__auto__);};
meta$ui$uikit$app.cljs$lang$maxFixedArity = 0;
meta$ui$uikit$app.cljs$lang$applyTo = (function (arglist__15073){
var args__14031__auto__ = cljs.core.seq(arglist__15073);
return meta$ui$uikit$app__delegate(args__14031__auto__);
});
meta$ui$uikit$app.cljs$core$IFn$_invoke$arity$variadic = meta$ui$uikit$app__delegate;
return meta$ui$uikit$app;
})()
;

//# sourceMappingURL=uikit.js.map