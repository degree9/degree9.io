goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9392__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9393__i = 0, G__9393__a = new Array(arguments.length -  0);
while (G__9393__i < G__9393__a.length) {G__9393__a[G__9393__i] = arguments[G__9393__i + 0]; ++G__9393__i;}
  args = new cljs.core.IndexedSeq(G__9393__a,0,null);
} 
return G__9392__delegate.call(this,args);};
G__9392.cljs$lang$maxFixedArity = 0;
G__9392.cljs$lang$applyTo = (function (arglist__9394){
var args = cljs.core.seq(arglist__9394);
return G__9392__delegate(args);
});
G__9392.cljs$core$IFn$_invoke$arity$variadic = G__9392__delegate;
return G__9392;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9395__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9396__i = 0, G__9396__a = new Array(arguments.length -  0);
while (G__9396__i < G__9396__a.length) {G__9396__a[G__9396__i] = arguments[G__9396__i + 0]; ++G__9396__i;}
  args = new cljs.core.IndexedSeq(G__9396__a,0,null);
} 
return G__9395__delegate.call(this,args);};
G__9395.cljs$lang$maxFixedArity = 0;
G__9395.cljs$lang$applyTo = (function (arglist__9397){
var args = cljs.core.seq(arglist__9397);
return G__9395__delegate(args);
});
G__9395.cljs$core$IFn$_invoke$arity$variadic = G__9395__delegate;
return G__9395;
})()
;

return null;
});
