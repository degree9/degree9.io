// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.memory');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.memory.memory = cljs.nodejs.require.call(null,"feathers-memory");
feathers.memory.using = (function feathers$memory$using(var_args){
var args9259 = [];
var len__9159__auto___9262 = arguments.length;
var i__9160__auto___9263 = (0);
while(true){
if((i__9160__auto___9263 < len__9159__auto___9262)){
args9259.push((arguments[i__9160__auto___9263]));

var G__9264 = (i__9160__auto___9263 + (1));
i__9160__auto___9263 = G__9264;
continue;
} else {
}
break;
}

var G__9261 = args9259.length;
switch (G__9261) {
case 2:
return feathers.memory.using.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return feathers.memory.using.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9259.length)].join('')));

}
});

feathers.memory.using.cljs$core$IFn$_invoke$arity$2 = (function (app,path){
return feathers.core.using.call(null,app,path,feathers.memory.memory.call(null));
});

feathers.memory.using.cljs$core$IFn$_invoke$arity$3 = (function (app,path,conf){
return feathers.core.using.call(null,app,path,feathers.memory.memory.call(null,conf));
});

feathers.memory.using.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=memory.js.map