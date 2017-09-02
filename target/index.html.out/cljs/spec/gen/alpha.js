// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8595__auto__,writer__8596__auto__,opt__8597__auto__){
return cljs.core._write.call(null,writer__8596__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9857 = arguments.length;
var i__9160__auto___9858 = (0);
while(true){
if((i__9160__auto___9858 < len__9159__auto___9857)){
args__9166__auto__.push((arguments[i__9160__auto___9858]));

var G__9859 = (i__9160__auto___9858 + (1));
i__9160__auto___9858 = G__9859;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq9856){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9856));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9861 = arguments.length;
var i__9160__auto___9862 = (0);
while(true){
if((i__9160__auto___9862 < len__9159__auto___9861)){
args__9166__auto__.push((arguments[i__9160__auto___9862]));

var G__9863 = (i__9160__auto___9862 + (1));
i__9160__auto___9862 = G__9863;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq9860){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9860));
});

var g_QMARK__9864 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_9865 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__9864){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__9864))
,null));
var mkg_9866 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__9864,g_9865){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__9864,g_9865))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__9864,g_9865,mkg_9866){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__9864).call(null,x);
});})(g_QMARK__9864,g_9865,mkg_9866))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__9864,g_9865,mkg_9866){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_9866).call(null,gfn);
});})(g_QMARK__9864,g_9865,mkg_9866))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__9864,g_9865,mkg_9866){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_9865).call(null,generator);
});})(g_QMARK__9864,g_9865,mkg_9866))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9828__auto___9886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__9828__auto___9886){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9887 = arguments.length;
var i__9160__auto___9888 = (0);
while(true){
if((i__9160__auto___9888 < len__9159__auto___9887)){
args__9166__auto__.push((arguments[i__9160__auto___9888]));

var G__9889 = (i__9160__auto___9888 + (1));
i__9160__auto___9888 = G__9889;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9886))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9886),args);
});})(g__9828__auto___9886))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__9828__auto___9886){
return (function (seq9867){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9867));
});})(g__9828__auto___9886))
;


var g__9828__auto___9890 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__9828__auto___9890){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9891 = arguments.length;
var i__9160__auto___9892 = (0);
while(true){
if((i__9160__auto___9892 < len__9159__auto___9891)){
args__9166__auto__.push((arguments[i__9160__auto___9892]));

var G__9893 = (i__9160__auto___9892 + (1));
i__9160__auto___9892 = G__9893;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9890))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9890){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9890),args);
});})(g__9828__auto___9890))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__9828__auto___9890){
return (function (seq9868){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9868));
});})(g__9828__auto___9890))
;


var g__9828__auto___9894 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__9828__auto___9894){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9895 = arguments.length;
var i__9160__auto___9896 = (0);
while(true){
if((i__9160__auto___9896 < len__9159__auto___9895)){
args__9166__auto__.push((arguments[i__9160__auto___9896]));

var G__9897 = (i__9160__auto___9896 + (1));
i__9160__auto___9896 = G__9897;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9894))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9894){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9894),args);
});})(g__9828__auto___9894))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__9828__auto___9894){
return (function (seq9869){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9869));
});})(g__9828__auto___9894))
;


var g__9828__auto___9898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__9828__auto___9898){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9899 = arguments.length;
var i__9160__auto___9900 = (0);
while(true){
if((i__9160__auto___9900 < len__9159__auto___9899)){
args__9166__auto__.push((arguments[i__9160__auto___9900]));

var G__9901 = (i__9160__auto___9900 + (1));
i__9160__auto___9900 = G__9901;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9898))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9898){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9898),args);
});})(g__9828__auto___9898))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__9828__auto___9898){
return (function (seq9870){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9870));
});})(g__9828__auto___9898))
;


var g__9828__auto___9902 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__9828__auto___9902){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9903 = arguments.length;
var i__9160__auto___9904 = (0);
while(true){
if((i__9160__auto___9904 < len__9159__auto___9903)){
args__9166__auto__.push((arguments[i__9160__auto___9904]));

var G__9905 = (i__9160__auto___9904 + (1));
i__9160__auto___9904 = G__9905;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9902))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9902){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9902),args);
});})(g__9828__auto___9902))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__9828__auto___9902){
return (function (seq9871){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9871));
});})(g__9828__auto___9902))
;


var g__9828__auto___9906 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__9828__auto___9906){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9907 = arguments.length;
var i__9160__auto___9908 = (0);
while(true){
if((i__9160__auto___9908 < len__9159__auto___9907)){
args__9166__auto__.push((arguments[i__9160__auto___9908]));

var G__9909 = (i__9160__auto___9908 + (1));
i__9160__auto___9908 = G__9909;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9906))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9906){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9906),args);
});})(g__9828__auto___9906))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__9828__auto___9906){
return (function (seq9872){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9872));
});})(g__9828__auto___9906))
;


var g__9828__auto___9910 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__9828__auto___9910){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9911 = arguments.length;
var i__9160__auto___9912 = (0);
while(true){
if((i__9160__auto___9912 < len__9159__auto___9911)){
args__9166__auto__.push((arguments[i__9160__auto___9912]));

var G__9913 = (i__9160__auto___9912 + (1));
i__9160__auto___9912 = G__9913;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9910))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9910){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9910),args);
});})(g__9828__auto___9910))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__9828__auto___9910){
return (function (seq9873){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9873));
});})(g__9828__auto___9910))
;


var g__9828__auto___9914 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__9828__auto___9914){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9915 = arguments.length;
var i__9160__auto___9916 = (0);
while(true){
if((i__9160__auto___9916 < len__9159__auto___9915)){
args__9166__auto__.push((arguments[i__9160__auto___9916]));

var G__9917 = (i__9160__auto___9916 + (1));
i__9160__auto___9916 = G__9917;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9914))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9914){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9914),args);
});})(g__9828__auto___9914))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__9828__auto___9914){
return (function (seq9874){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9874));
});})(g__9828__auto___9914))
;


var g__9828__auto___9918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__9828__auto___9918){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9919 = arguments.length;
var i__9160__auto___9920 = (0);
while(true){
if((i__9160__auto___9920 < len__9159__auto___9919)){
args__9166__auto__.push((arguments[i__9160__auto___9920]));

var G__9921 = (i__9160__auto___9920 + (1));
i__9160__auto___9920 = G__9921;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9918))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9918){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9918),args);
});})(g__9828__auto___9918))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__9828__auto___9918){
return (function (seq9875){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9875));
});})(g__9828__auto___9918))
;


var g__9828__auto___9922 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__9828__auto___9922){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9923 = arguments.length;
var i__9160__auto___9924 = (0);
while(true){
if((i__9160__auto___9924 < len__9159__auto___9923)){
args__9166__auto__.push((arguments[i__9160__auto___9924]));

var G__9925 = (i__9160__auto___9924 + (1));
i__9160__auto___9924 = G__9925;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9922))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9922){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9922),args);
});})(g__9828__auto___9922))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__9828__auto___9922){
return (function (seq9876){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9876));
});})(g__9828__auto___9922))
;


var g__9828__auto___9926 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__9828__auto___9926){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9927 = arguments.length;
var i__9160__auto___9928 = (0);
while(true){
if((i__9160__auto___9928 < len__9159__auto___9927)){
args__9166__auto__.push((arguments[i__9160__auto___9928]));

var G__9929 = (i__9160__auto___9928 + (1));
i__9160__auto___9928 = G__9929;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9926))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9926){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9926),args);
});})(g__9828__auto___9926))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__9828__auto___9926){
return (function (seq9877){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9877));
});})(g__9828__auto___9926))
;


var g__9828__auto___9930 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__9828__auto___9930){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9931 = arguments.length;
var i__9160__auto___9932 = (0);
while(true){
if((i__9160__auto___9932 < len__9159__auto___9931)){
args__9166__auto__.push((arguments[i__9160__auto___9932]));

var G__9933 = (i__9160__auto___9932 + (1));
i__9160__auto___9932 = G__9933;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9930))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9930){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9930),args);
});})(g__9828__auto___9930))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__9828__auto___9930){
return (function (seq9878){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9878));
});})(g__9828__auto___9930))
;


var g__9828__auto___9934 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__9828__auto___9934){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9935 = arguments.length;
var i__9160__auto___9936 = (0);
while(true){
if((i__9160__auto___9936 < len__9159__auto___9935)){
args__9166__auto__.push((arguments[i__9160__auto___9936]));

var G__9937 = (i__9160__auto___9936 + (1));
i__9160__auto___9936 = G__9937;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9934))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9934){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9934),args);
});})(g__9828__auto___9934))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__9828__auto___9934){
return (function (seq9879){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9879));
});})(g__9828__auto___9934))
;


var g__9828__auto___9938 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__9828__auto___9938){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9939 = arguments.length;
var i__9160__auto___9940 = (0);
while(true){
if((i__9160__auto___9940 < len__9159__auto___9939)){
args__9166__auto__.push((arguments[i__9160__auto___9940]));

var G__9941 = (i__9160__auto___9940 + (1));
i__9160__auto___9940 = G__9941;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9938))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9938){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9938),args);
});})(g__9828__auto___9938))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__9828__auto___9938){
return (function (seq9880){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9880));
});})(g__9828__auto___9938))
;


var g__9828__auto___9942 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__9828__auto___9942){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9943 = arguments.length;
var i__9160__auto___9944 = (0);
while(true){
if((i__9160__auto___9944 < len__9159__auto___9943)){
args__9166__auto__.push((arguments[i__9160__auto___9944]));

var G__9945 = (i__9160__auto___9944 + (1));
i__9160__auto___9944 = G__9945;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9942))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9942){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9942),args);
});})(g__9828__auto___9942))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__9828__auto___9942){
return (function (seq9881){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9881));
});})(g__9828__auto___9942))
;


var g__9828__auto___9946 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__9828__auto___9946){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9947 = arguments.length;
var i__9160__auto___9948 = (0);
while(true){
if((i__9160__auto___9948 < len__9159__auto___9947)){
args__9166__auto__.push((arguments[i__9160__auto___9948]));

var G__9949 = (i__9160__auto___9948 + (1));
i__9160__auto___9948 = G__9949;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9946))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9946){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9946),args);
});})(g__9828__auto___9946))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__9828__auto___9946){
return (function (seq9882){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9882));
});})(g__9828__auto___9946))
;


var g__9828__auto___9950 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__9828__auto___9950){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9951 = arguments.length;
var i__9160__auto___9952 = (0);
while(true){
if((i__9160__auto___9952 < len__9159__auto___9951)){
args__9166__auto__.push((arguments[i__9160__auto___9952]));

var G__9953 = (i__9160__auto___9952 + (1));
i__9160__auto___9952 = G__9953;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9950))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9950){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9950),args);
});})(g__9828__auto___9950))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9828__auto___9950){
return (function (seq9883){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9883));
});})(g__9828__auto___9950))
;


var g__9828__auto___9954 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__9828__auto___9954){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9955 = arguments.length;
var i__9160__auto___9956 = (0);
while(true){
if((i__9160__auto___9956 < len__9159__auto___9955)){
args__9166__auto__.push((arguments[i__9160__auto___9956]));

var G__9957 = (i__9160__auto___9956 + (1));
i__9160__auto___9956 = G__9957;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9954))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9954){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9954),args);
});})(g__9828__auto___9954))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__9828__auto___9954){
return (function (seq9884){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9884));
});})(g__9828__auto___9954))
;


var g__9828__auto___9958 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__9828__auto___9958){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9959 = arguments.length;
var i__9160__auto___9960 = (0);
while(true){
if((i__9160__auto___9960 < len__9159__auto___9959)){
args__9166__auto__.push((arguments[i__9160__auto___9960]));

var G__9961 = (i__9160__auto___9960 + (1));
i__9160__auto___9960 = G__9961;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9828__auto___9958))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9828__auto___9958){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9828__auto___9958),args);
});})(g__9828__auto___9958))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__9828__auto___9958){
return (function (seq9885){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9885));
});})(g__9828__auto___9958))
;

var g__9841__auto___9983 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9841__auto___9983){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9984 = arguments.length;
var i__9160__auto___9985 = (0);
while(true){
if((i__9160__auto___9985 < len__9159__auto___9984)){
args__9166__auto__.push((arguments[i__9160__auto___9985]));

var G__9986 = (i__9160__auto___9985 + (1));
i__9160__auto___9985 = G__9986;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___9983))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___9983){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___9983);
});})(g__9841__auto___9983))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9841__auto___9983){
return (function (seq9962){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9962));
});})(g__9841__auto___9983))
;


var g__9841__auto___9987 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9841__auto___9987){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9988 = arguments.length;
var i__9160__auto___9989 = (0);
while(true){
if((i__9160__auto___9989 < len__9159__auto___9988)){
args__9166__auto__.push((arguments[i__9160__auto___9989]));

var G__9990 = (i__9160__auto___9989 + (1));
i__9160__auto___9989 = G__9990;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___9987))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___9987){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___9987);
});})(g__9841__auto___9987))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9841__auto___9987){
return (function (seq9963){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9963));
});})(g__9841__auto___9987))
;


var g__9841__auto___9991 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9841__auto___9991){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9992 = arguments.length;
var i__9160__auto___9993 = (0);
while(true){
if((i__9160__auto___9993 < len__9159__auto___9992)){
args__9166__auto__.push((arguments[i__9160__auto___9993]));

var G__9994 = (i__9160__auto___9993 + (1));
i__9160__auto___9993 = G__9994;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___9991))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___9991){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___9991);
});})(g__9841__auto___9991))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9841__auto___9991){
return (function (seq9964){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9964));
});})(g__9841__auto___9991))
;


var g__9841__auto___9995 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9841__auto___9995){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9996 = arguments.length;
var i__9160__auto___9997 = (0);
while(true){
if((i__9160__auto___9997 < len__9159__auto___9996)){
args__9166__auto__.push((arguments[i__9160__auto___9997]));

var G__9998 = (i__9160__auto___9997 + (1));
i__9160__auto___9997 = G__9998;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___9995))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___9995){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___9995);
});})(g__9841__auto___9995))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9841__auto___9995){
return (function (seq9965){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9965));
});})(g__9841__auto___9995))
;


var g__9841__auto___9999 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9841__auto___9999){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10000 = arguments.length;
var i__9160__auto___10001 = (0);
while(true){
if((i__9160__auto___10001 < len__9159__auto___10000)){
args__9166__auto__.push((arguments[i__9160__auto___10001]));

var G__10002 = (i__9160__auto___10001 + (1));
i__9160__auto___10001 = G__10002;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___9999))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___9999){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___9999);
});})(g__9841__auto___9999))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9841__auto___9999){
return (function (seq9966){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9966));
});})(g__9841__auto___9999))
;


var g__9841__auto___10003 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9841__auto___10003){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10004 = arguments.length;
var i__9160__auto___10005 = (0);
while(true){
if((i__9160__auto___10005 < len__9159__auto___10004)){
args__9166__auto__.push((arguments[i__9160__auto___10005]));

var G__10006 = (i__9160__auto___10005 + (1));
i__9160__auto___10005 = G__10006;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10003))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10003){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10003);
});})(g__9841__auto___10003))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9841__auto___10003){
return (function (seq9967){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9967));
});})(g__9841__auto___10003))
;


var g__9841__auto___10007 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9841__auto___10007){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10008 = arguments.length;
var i__9160__auto___10009 = (0);
while(true){
if((i__9160__auto___10009 < len__9159__auto___10008)){
args__9166__auto__.push((arguments[i__9160__auto___10009]));

var G__10010 = (i__9160__auto___10009 + (1));
i__9160__auto___10009 = G__10010;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10007))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10007){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10007);
});})(g__9841__auto___10007))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9841__auto___10007){
return (function (seq9968){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9968));
});})(g__9841__auto___10007))
;


var g__9841__auto___10011 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9841__auto___10011){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10012 = arguments.length;
var i__9160__auto___10013 = (0);
while(true){
if((i__9160__auto___10013 < len__9159__auto___10012)){
args__9166__auto__.push((arguments[i__9160__auto___10013]));

var G__10014 = (i__9160__auto___10013 + (1));
i__9160__auto___10013 = G__10014;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10011))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10011){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10011);
});})(g__9841__auto___10011))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9841__auto___10011){
return (function (seq9969){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9969));
});})(g__9841__auto___10011))
;


var g__9841__auto___10015 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9841__auto___10015){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10016 = arguments.length;
var i__9160__auto___10017 = (0);
while(true){
if((i__9160__auto___10017 < len__9159__auto___10016)){
args__9166__auto__.push((arguments[i__9160__auto___10017]));

var G__10018 = (i__9160__auto___10017 + (1));
i__9160__auto___10017 = G__10018;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10015))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10015){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10015);
});})(g__9841__auto___10015))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9841__auto___10015){
return (function (seq9970){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9970));
});})(g__9841__auto___10015))
;


var g__9841__auto___10019 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9841__auto___10019){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10020 = arguments.length;
var i__9160__auto___10021 = (0);
while(true){
if((i__9160__auto___10021 < len__9159__auto___10020)){
args__9166__auto__.push((arguments[i__9160__auto___10021]));

var G__10022 = (i__9160__auto___10021 + (1));
i__9160__auto___10021 = G__10022;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10019))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10019){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10019);
});})(g__9841__auto___10019))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9841__auto___10019){
return (function (seq9971){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9971));
});})(g__9841__auto___10019))
;


var g__9841__auto___10023 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9841__auto___10023){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10024 = arguments.length;
var i__9160__auto___10025 = (0);
while(true){
if((i__9160__auto___10025 < len__9159__auto___10024)){
args__9166__auto__.push((arguments[i__9160__auto___10025]));

var G__10026 = (i__9160__auto___10025 + (1));
i__9160__auto___10025 = G__10026;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10023))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10023){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10023);
});})(g__9841__auto___10023))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9841__auto___10023){
return (function (seq9972){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9972));
});})(g__9841__auto___10023))
;


var g__9841__auto___10027 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9841__auto___10027){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10028 = arguments.length;
var i__9160__auto___10029 = (0);
while(true){
if((i__9160__auto___10029 < len__9159__auto___10028)){
args__9166__auto__.push((arguments[i__9160__auto___10029]));

var G__10030 = (i__9160__auto___10029 + (1));
i__9160__auto___10029 = G__10030;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10027))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10027){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10027);
});})(g__9841__auto___10027))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9841__auto___10027){
return (function (seq9973){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9973));
});})(g__9841__auto___10027))
;


var g__9841__auto___10031 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9841__auto___10031){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10032 = arguments.length;
var i__9160__auto___10033 = (0);
while(true){
if((i__9160__auto___10033 < len__9159__auto___10032)){
args__9166__auto__.push((arguments[i__9160__auto___10033]));

var G__10034 = (i__9160__auto___10033 + (1));
i__9160__auto___10033 = G__10034;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10031))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10031){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10031);
});})(g__9841__auto___10031))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9841__auto___10031){
return (function (seq9974){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9974));
});})(g__9841__auto___10031))
;


var g__9841__auto___10035 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9841__auto___10035){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10036 = arguments.length;
var i__9160__auto___10037 = (0);
while(true){
if((i__9160__auto___10037 < len__9159__auto___10036)){
args__9166__auto__.push((arguments[i__9160__auto___10037]));

var G__10038 = (i__9160__auto___10037 + (1));
i__9160__auto___10037 = G__10038;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10035))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10035){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10035);
});})(g__9841__auto___10035))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9841__auto___10035){
return (function (seq9975){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9975));
});})(g__9841__auto___10035))
;


var g__9841__auto___10039 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9841__auto___10039){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10040 = arguments.length;
var i__9160__auto___10041 = (0);
while(true){
if((i__9160__auto___10041 < len__9159__auto___10040)){
args__9166__auto__.push((arguments[i__9160__auto___10041]));

var G__10042 = (i__9160__auto___10041 + (1));
i__9160__auto___10041 = G__10042;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10039))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10039){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10039);
});})(g__9841__auto___10039))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9841__auto___10039){
return (function (seq9976){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9976));
});})(g__9841__auto___10039))
;


var g__9841__auto___10043 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9841__auto___10043){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10044 = arguments.length;
var i__9160__auto___10045 = (0);
while(true){
if((i__9160__auto___10045 < len__9159__auto___10044)){
args__9166__auto__.push((arguments[i__9160__auto___10045]));

var G__10046 = (i__9160__auto___10045 + (1));
i__9160__auto___10045 = G__10046;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10043))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10043){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10043);
});})(g__9841__auto___10043))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9841__auto___10043){
return (function (seq9977){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9977));
});})(g__9841__auto___10043))
;


var g__9841__auto___10047 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9841__auto___10047){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10048 = arguments.length;
var i__9160__auto___10049 = (0);
while(true){
if((i__9160__auto___10049 < len__9159__auto___10048)){
args__9166__auto__.push((arguments[i__9160__auto___10049]));

var G__10050 = (i__9160__auto___10049 + (1));
i__9160__auto___10049 = G__10050;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10047))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10047){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10047);
});})(g__9841__auto___10047))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9841__auto___10047){
return (function (seq9978){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9978));
});})(g__9841__auto___10047))
;


var g__9841__auto___10051 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9841__auto___10051){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10052 = arguments.length;
var i__9160__auto___10053 = (0);
while(true){
if((i__9160__auto___10053 < len__9159__auto___10052)){
args__9166__auto__.push((arguments[i__9160__auto___10053]));

var G__10054 = (i__9160__auto___10053 + (1));
i__9160__auto___10053 = G__10054;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10051))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10051){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10051);
});})(g__9841__auto___10051))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9841__auto___10051){
return (function (seq9979){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9979));
});})(g__9841__auto___10051))
;


var g__9841__auto___10055 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9841__auto___10055){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10056 = arguments.length;
var i__9160__auto___10057 = (0);
while(true){
if((i__9160__auto___10057 < len__9159__auto___10056)){
args__9166__auto__.push((arguments[i__9160__auto___10057]));

var G__10058 = (i__9160__auto___10057 + (1));
i__9160__auto___10057 = G__10058;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10055))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10055){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10055);
});})(g__9841__auto___10055))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9841__auto___10055){
return (function (seq9980){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9980));
});})(g__9841__auto___10055))
;


var g__9841__auto___10059 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9841__auto___10059){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10060 = arguments.length;
var i__9160__auto___10061 = (0);
while(true){
if((i__9160__auto___10061 < len__9159__auto___10060)){
args__9166__auto__.push((arguments[i__9160__auto___10061]));

var G__10062 = (i__9160__auto___10061 + (1));
i__9160__auto___10061 = G__10062;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10059))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10059){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10059);
});})(g__9841__auto___10059))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9841__auto___10059){
return (function (seq9981){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9981));
});})(g__9841__auto___10059))
;


var g__9841__auto___10063 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9841__auto___10063){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10064 = arguments.length;
var i__9160__auto___10065 = (0);
while(true){
if((i__9160__auto___10065 < len__9159__auto___10064)){
args__9166__auto__.push((arguments[i__9160__auto___10065]));

var G__10066 = (i__9160__auto___10065 + (1));
i__9160__auto___10065 = G__10066;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});})(g__9841__auto___10063))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9841__auto___10063){
return (function (args){
return cljs.core.deref.call(null,g__9841__auto___10063);
});})(g__9841__auto___10063))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9841__auto___10063){
return (function (seq9982){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9982));
});})(g__9841__auto___10063))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9166__auto__ = [];
var len__9159__auto___10069 = arguments.length;
var i__9160__auto___10070 = (0);
while(true){
if((i__9160__auto___10070 < len__9159__auto___10069)){
args__9166__auto__.push((arguments[i__9160__auto___10070]));

var G__10071 = (i__9160__auto___10070 + (1));
i__9160__auto___10070 = G__10071;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((0) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9167__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__10067_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__10067_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq10068){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10068));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__10072_SHARP_){
return (new Date(p1__10072_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map