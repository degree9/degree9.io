// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
cljs.core.enable_console_print_BANG_.call(null);
feathers.core.feathers = cljs.nodejs.require.call(null,"feathers");
feathers.core.static$ = (function feathers$core$static(path){
return feathers.core.feathers.static(path);
});
feathers.core.configure = (function feathers$core$configure(app,callback){
return app.configure(callback);
});
feathers.core.listen = (function feathers$core$listen(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9234 = arguments.length;
var i__9160__auto___9235 = (0);
while(true){
if((i__9160__auto___9235 < len__9159__auto___9234)){
args__9166__auto__.push((arguments[i__9160__auto___9235]));

var G__9236 = (i__9160__auto___9235 + (1));
i__9160__auto___9235 = G__9236;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((1) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((1)),(0),null)):null);
return feathers.core.listen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9167__auto__);
});

feathers.core.listen.cljs$core$IFn$_invoke$arity$variadic = (function (app,p__9230){
var vec__9231 = p__9230;
var port = cljs.core.nth.call(null,vec__9231,(0),null);
return app.listen(port);
});

feathers.core.listen.cljs$lang$maxFixedArity = (1);

feathers.core.listen.cljs$lang$applyTo = (function (seq9228){
var G__9229 = cljs.core.first.call(null,seq9228);
var seq9228__$1 = cljs.core.next.call(null,seq9228);
return feathers.core.listen.cljs$core$IFn$_invoke$arity$variadic(G__9229,seq9228__$1);
});

feathers.core.setup = (function feathers$core$setup(app,server){
return app.setup(server);
});
feathers.core.using = (function feathers$core$using(var_args){
var args9237 = [];
var len__9159__auto___9240 = arguments.length;
var i__9160__auto___9241 = (0);
while(true){
if((i__9160__auto___9241 < len__9159__auto___9240)){
args9237.push((arguments[i__9160__auto___9241]));

var G__9242 = (i__9160__auto___9241 + (1));
i__9160__auto___9241 = G__9242;
continue;
} else {
}
break;
}

var G__9239 = args9237.length;
switch (G__9239) {
case 2:
return feathers.core.using.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return feathers.core.using.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9237.length)].join('')));

}
});

feathers.core.using.cljs$core$IFn$_invoke$arity$2 = (function (app,service){
return app.use(service);
});

feathers.core.using.cljs$core$IFn$_invoke$arity$3 = (function (app,path,service){
return app.use(path,service);
});

feathers.core.using.cljs$lang$maxFixedArity = 3;

feathers.core.service = (function feathers$core$service(var_args){
var args9244 = [];
var len__9159__auto___9247 = arguments.length;
var i__9160__auto___9248 = (0);
while(true){
if((i__9160__auto___9248 < len__9159__auto___9247)){
args9244.push((arguments[i__9160__auto___9248]));

var G__9249 = (i__9160__auto___9248 + (1));
i__9160__auto___9248 = G__9249;
continue;
} else {
}
break;
}

var G__9246 = args9244.length;
switch (G__9246) {
case 2:
return feathers.core.service.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return feathers.core.service.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9244.length)].join('')));

}
});

feathers.core.service.cljs$core$IFn$_invoke$arity$2 = (function (app,path){
return app.service(path);
});

feathers.core.service.cljs$core$IFn$_invoke$arity$3 = (function (app,path,service){
return app.service(path,service);
});

feathers.core.service.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map