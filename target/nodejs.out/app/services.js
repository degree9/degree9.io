// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('app.services');
goog.require('cljs.core');
goog.require('feathers.app');
goog.require('meta.services');
goog.require('meta.services.hooks');
app.services.messages = (function app$services$messages(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9409 = arguments.length;
var i__9160__auto___9410 = (0);
while(true){
if((i__9160__auto___9410 < len__9159__auto___9409)){
args__9166__auto__.push((arguments[i__9160__auto___9410]));

var G__9411 = (i__9160__auto___9410 + (1));
i__9160__auto___9410 = G__9411;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((1) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((1)),(0),null)):null);
return app.services.messages.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9167__auto__);
});

app.services.messages.cljs$core$IFn$_invoke$arity$variadic = (function (app__$1,p__9405){
var vec__9406 = p__9405;
var store = cljs.core.nth.call(null,vec__9406,(0),null);
var storef = cljs.core.get.call(null,meta.services.store,store,new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(meta.services.store));
return feathers.app.api.call(null,app__$1,"messages",storef.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new meta.services.hooks.auth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jwt","local"], null))))], null),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new meta.services.hooks.auth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jwt","local"], null))))], null)], null)], null));
});

app.services.messages.cljs$lang$maxFixedArity = (1);

app.services.messages.cljs$lang$applyTo = (function (seq9403){
var G__9404 = cljs.core.first.call(null,seq9403);
var seq9403__$1 = cljs.core.next.call(null,seq9403);
return app.services.messages.cljs$core$IFn$_invoke$arity$variadic(G__9404,seq9403__$1);
});


//# sourceMappingURL=services.js.map