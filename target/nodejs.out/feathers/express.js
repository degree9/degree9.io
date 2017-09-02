// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.express');
goog.require('cljs.core');
goog.require('cljs.nodejs');
feathers.express.express = cljs.nodejs.require.call(null,"express");
feathers.express.options = (function feathers$express$options(var_args){
var args9283 = [];
var len__9159__auto___9286 = arguments.length;
var i__9160__auto___9287 = (0);
while(true){
if((i__9160__auto___9287 < len__9159__auto___9286)){
args9283.push((arguments[i__9160__auto___9287]));

var G__9288 = (i__9160__auto___9287 + (1));
i__9160__auto___9287 = G__9288;
continue;
} else {
}
break;
}

var G__9285 = args9283.length;
switch (G__9285) {
case 2:
return feathers.express.options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return feathers.express.options.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9283.length)].join('')));

}
});

feathers.express.options.cljs$core$IFn$_invoke$arity$2 = (function (app,opts){
return app.options(opts);
});

feathers.express.options.cljs$core$IFn$_invoke$arity$3 = (function (app,path,opts){
return app.options(path,opts);
});

feathers.express.options.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=express.js.map