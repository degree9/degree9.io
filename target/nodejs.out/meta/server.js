// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('meta.server');
goog.require('cljs.core');
goog.require('feathers.app');
goog.require('meta.server.services');
cljs.core.enable_console_print_BANG_.call(null);
meta.server.app = feathers.app.feathers.call(null);
meta.server.public$ = "./";
meta.server.services.users.call(null,feathers.app.authentication.call(null,feathers.app.socketio.call(null,feathers.app.rest.call(null,feathers.app.hooks.call(null,feathers.app.body_parser.call(null,feathers.app.static$.call(null,feathers.app.favicon.call(null,feathers.app.cors.call(null,feathers.app.compress.call(null,feathers.app.configuration.call(null,meta.server.app,meta.server.public$))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(meta.server.public$),cljs.core.str.cljs$core$IFn$_invoke$arity$1("favicon.ico")].join('')),meta.server.public$)))))));
meta.server.api = (function meta$server$api(var_args){
var args9372 = [];
var len__9159__auto___9375 = arguments.length;
var i__9160__auto___9376 = (0);
while(true){
if((i__9160__auto___9376 < len__9159__auto___9375)){
args9372.push((arguments[i__9160__auto___9376]));

var G__9377 = (i__9160__auto___9376 + (1));
i__9160__auto___9376 = G__9377;
continue;
} else {
}
break;
}

var G__9374 = args9372.length;
switch (G__9374) {
case 3:
return meta.server.api.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return meta.server.api.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9372.length)].join('')));

}
});

meta.server.api.cljs$core$IFn$_invoke$arity$3 = (function (path,svc,hooks){
return feathers.app.api.call(null,meta.server.app,path,svc,hooks);
});

meta.server.api.cljs$core$IFn$_invoke$arity$4 = (function (app__$1,path,svc,hooks){
return feathers.app.api.call(null,app__$1,path,svc,hooks);
});

meta.server.api.cljs$lang$maxFixedArity = 4;

meta.server.listen = (function meta$server$listen(var_args){
var args9379 = [];
var len__9159__auto___9382 = arguments.length;
var i__9160__auto___9383 = (0);
while(true){
if((i__9160__auto___9383 < len__9159__auto___9382)){
args9379.push((arguments[i__9160__auto___9383]));

var G__9384 = (i__9160__auto___9383 + (1));
i__9160__auto___9383 = G__9384;
continue;
} else {
}
break;
}

var G__9381 = args9379.length;
switch (G__9381) {
case 1:
return meta.server.listen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return meta.server.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9379.length)].join('')));

}
});

meta.server.listen.cljs$core$IFn$_invoke$arity$1 = (function (port){
return feathers.app.listen.call(null,meta.server.app,port);
});

meta.server.listen.cljs$core$IFn$_invoke$arity$2 = (function (app__$1,port){
return feathers.app.listen.call(null,app__$1,port);
});

meta.server.listen.cljs$lang$maxFixedArity = 2;

meta.server.init_BANG_ = (function meta$server$init_BANG_(fname){
return cljs.core._STAR_main_cli_fn_STAR_ = fname;
});

//# sourceMappingURL=server.js.map