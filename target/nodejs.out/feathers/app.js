// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.app');
goog.require('cljs.core');
goog.require('feathers.authentication');
goog.require('feathers.core');
goog.require('feathers.cors');
goog.require('feathers.configuration');
goog.require('feathers.compression');
goog.require('feathers.favicon');
goog.require('feathers.body_parser');
goog.require('feathers.hooks');
goog.require('feathers.rest');
goog.require('feathers.socketio');
goog.require('feathers.express');
goog.require('feathers.memory');
feathers.app.feathers = (function feathers$app$feathers(){
return feathers.core.feathers.call(null);
});
feathers.app.configuration = feathers.configuration.configure;
feathers.app.compress = feathers.compression.using;
feathers.app.cors = (function feathers$app$cors(app){
return feathers.cors.using.call(null,feathers.express.options.call(null,app,"*",feathers.cors.cors.call(null)));
});
feathers.app.favicon = feathers.favicon.using;
feathers.app.body_parser = (function feathers$app$body_parser(app){
return feathers.body_parser.urlencoded.call(null,feathers.body_parser.json.call(null,app),({"extended": true}));
});
feathers.app.hooks = feathers.hooks.configure;
feathers.app.rest = feathers.rest.configure;
feathers.app.socketio = feathers.socketio.configure;
feathers.app.memory = feathers.memory.using;
feathers.app.authentication = (function feathers$app$authentication(app){
var conf = app.get("auth");
var app__$1 = feathers.authentication.configure.call(null,app,conf);
return feathers.authentication.service.call(null,app__$1);
});
feathers.app.static$ = (function feathers$app$static(feathers__$1,path){
return feathers.core.using.call(null,feathers__$1,feathers.core.static$.call(null,path));
});
feathers.app.listen = feathers.core.listen;
feathers.app.api = (function feathers$app$api(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9338 = arguments.length;
var i__9160__auto___9339 = (0);
while(true){
if((i__9160__auto___9339 < len__9159__auto___9338)){
args__9166__auto__.push((arguments[i__9160__auto___9339]));

var G__9340 = (i__9160__auto___9339 + (1));
i__9160__auto___9339 = G__9340;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((3) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((3)),(0),null)):null);
return feathers.app.api.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9167__auto__);
});

feathers.app.api.cljs$core$IFn$_invoke$arity$variadic = (function (app,path,svc,p__9331){
var vec__9332 = p__9331;
var opts = cljs.core.nth.call(null,vec__9332,(0),null);
var app__$1 = feathers.core.using.call(null,app,path,svc);
var map__9335 = opts;
var map__9335__$1 = ((((!((map__9335 == null)))?((((map__9335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9335):map__9335);
var before = cljs.core.get.call(null,map__9335__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.call(null,map__9335__$1,new cljs.core.Keyword(null,"after","after",594996914));
var filter = cljs.core.get.call(null,map__9335__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var G__9337_9341 = feathers.core.service.call(null,app__$1,path);
G__9337_9341.before(cljs.core.clj__GT_js.call(null,before));

G__9337_9341.after(cljs.core.clj__GT_js.call(null,after));

G__9337_9341.filter(cljs.core.clj__GT_js.call(null,filter));


return app__$1;
});

feathers.app.api.cljs$lang$maxFixedArity = (3);

feathers.app.api.cljs$lang$applyTo = (function (seq9327){
var G__9328 = cljs.core.first.call(null,seq9327);
var seq9327__$1 = cljs.core.next.call(null,seq9327);
var G__9329 = cljs.core.first.call(null,seq9327__$1);
var seq9327__$2 = cljs.core.next.call(null,seq9327__$1);
var G__9330 = cljs.core.first.call(null,seq9327__$2);
var seq9327__$3 = cljs.core.next.call(null,seq9327__$2);
return feathers.app.api.cljs$core$IFn$_invoke$arity$variadic(G__9328,G__9329,G__9330,seq9327__$3);
});


//# sourceMappingURL=app.js.map