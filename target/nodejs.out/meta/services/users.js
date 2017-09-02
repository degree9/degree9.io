// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('meta.services.users');
goog.require('cljs.core');
goog.require('feathers.app');
goog.require('meta.services');
goog.require('meta.services.hooks');
meta.services.users.pre_hooks = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"all","all",892129742),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new meta.services.hooks.auth(["jwt","local"]))], null),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new meta.services.hooks.auth(["jwt","local"]))], null),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new meta.services.hooks.hashpass())], null),new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"patch","patch",380775109),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remove","remove",-131428414),cljs.core.PersistentVector.EMPTY], null);
meta.services.users.post_hooks = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"all","all",892129742),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"find","find",496279456),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"get","get",1683182755),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"create","create",-1301499256),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"patch","patch",380775109),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remove","remove",-131428414),cljs.core.PersistentVector.EMPTY], null);
meta.services.users.user_hooks = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),meta.services.users.pre_hooks,new cljs.core.Keyword(null,"after","after",594996914),meta.services.users.post_hooks], null);
meta.services.users.users = (function meta$services$users$users(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9365 = arguments.length;
var i__9160__auto___9366 = (0);
while(true){
if((i__9160__auto___9366 < len__9159__auto___9365)){
args__9166__auto__.push((arguments[i__9160__auto___9366]));

var G__9367 = (i__9160__auto___9366 + (1));
i__9160__auto___9366 = G__9367;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((1) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((1)),(0),null)):null);
return meta.services.users.users.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9167__auto__);
});

meta.services.users.users.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,p__9361){
var vec__9362 = p__9361;
var store = cljs.core.nth.call(null,vec__9362,(0),null);
var storef = cljs.core.get.call(null,meta.services.store,store,new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(meta.services.store));
return feathers.app.api.call(null,app__$1,"users",storef.call(null),meta.services.users.user_hooks);
});

meta.services.users.users.cljs$lang$maxFixedArity = (1);

meta.services.users.users.cljs$lang$applyTo = (function (seq9359){
var G__9360 = cljs.core.first.call(null,seq9359);
var seq9359__$1 = cljs.core.next.call(null,seq9359);
return meta.services.users.users.cljs$core$IFn$_invoke$arity$variadic(G__9360,seq9359__$1);
});


//# sourceMappingURL=users.js.map