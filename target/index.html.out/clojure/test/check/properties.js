// Compiled by ClojureScript 1.9.542 {}
goog.provide('clojure.test.check.properties');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.results');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.test.check.results.Result}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.properties.ErrorResult = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8613__auto__,k__8614__auto__){
var self__ = this;
var this__8613__auto____$1 = this;
return this__8613__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8614__auto__,null);
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8615__auto__,k13564,else__8616__auto__){
var self__ = this;
var this__8615__auto____$1 = this;
var G__13566 = k13564;
var G__13566__$1 = (((G__13566 instanceof cljs.core.Keyword))?G__13566.fqn:null);
switch (G__13566__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k13564,else__8616__auto__);

}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8627__auto__,writer__8628__auto__,opts__8629__auto__){
var self__ = this;
var this__8627__auto____$1 = this;
var pr_pair__8630__auto__ = ((function (this__8627__auto____$1){
return (function (keyval__8631__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8628__auto__,cljs.core.pr_writer,""," ","",opts__8629__auto__,keyval__8631__auto__);
});})(this__8627__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8628__auto__,pr_pair__8630__auto__,"#clojure.test.check.properties.ErrorResult{",", ","}",opts__8629__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13563){
var self__ = this;
var G__13563__$1 = this;
return (new cljs.core.RecordIter((0),G__13563__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8611__auto__){
var self__ = this;
var this__8611__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8607__auto__){
var self__ = this;
var this__8607__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8617__auto__){
var self__ = this;
var this__8617__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8608__auto__){
var self__ = this;
var this__8608__auto____$1 = this;
var h__8380__auto__ = self__.__hash;
if(!((h__8380__auto__ == null))){
return h__8380__auto__;
} else {
var h__8380__auto____$1 = cljs.core.hash_imap.call(null,this__8608__auto____$1);
self__.__hash = h__8380__auto____$1;

return h__8380__auto____$1;
}
});

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$ = cljs.core.PROTOCOL_SENTINEL;

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$passing_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$result_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635),self__.error], null);
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8609__auto__,other__8610__auto__){
var self__ = this;
var this__8609__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7926__auto__ = other__8610__auto__;
if(cljs.core.truth_(and__7926__auto__)){
return ((this__8609__auto____$1.constructor === other__8610__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__8609__auto____$1,other__8610__auto__));
} else {
return and__7926__auto__;
}
})())){
return true;
} else {
return false;
}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8622__auto__,k__8623__auto__){
var self__ = this;
var this__8622__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__8623__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8622__auto____$1),self__.__meta),k__8623__auto__);
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8623__auto__)),null));
}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8620__auto__,k__8621__auto__,G__13563){
var self__ = this;
var this__8620__auto____$1 = this;
var pred__13567 = cljs.core.keyword_identical_QMARK_;
var expr__13568 = k__8621__auto__;
if(cljs.core.truth_(pred__13567.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__13568))){
return (new clojure.test.check.properties.ErrorResult(G__13563,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8621__auto__,G__13563),null));
}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8625__auto__){
var self__ = this;
var this__8625__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8612__auto__,G__13563){
var self__ = this;
var this__8612__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,G__13563,self__.__extmap,self__.__hash));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8618__auto__,entry__8619__auto__){
var self__ = this;
var this__8618__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8619__auto__)){
return this__8618__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8619__auto__,(0)),cljs.core._nth.call(null,entry__8619__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8618__auto____$1,entry__8619__auto__);
}
});

clojure.test.check.properties.ErrorResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

clojure.test.check.properties.ErrorResult.cljs$lang$type = true;

clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrSeq = (function (this__8649__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clojure.test.check.properties/ErrorResult");
});

clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrWriter = (function (this__8649__auto__,writer__8650__auto__){
return cljs.core._write.call(null,writer__8650__auto__,"clojure.test.check.properties/ErrorResult");
});

clojure.test.check.properties.__GT_ErrorResult = (function clojure$test$check$properties$__GT_ErrorResult(error){
return (new clojure.test.check.properties.ErrorResult(error,null,null,null));
});

clojure.test.check.properties.map__GT_ErrorResult = (function clojure$test$check$properties$map__GT_ErrorResult(G__13565){
return (new clojure.test.check.properties.ErrorResult(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__13565),null,cljs.core.dissoc.call(null,G__13565,new cljs.core.Keyword(null,"error","error",-978969032)),null));
});

clojure.test.check.properties.exception_QMARK_ = (function clojure$test$check$properties$exception_QMARK_(x){
return (x instanceof Error);
});
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{var ret = cljs.core.apply.call(null,function$,args);
if(cljs.core.truth_(clojure.test.check.properties.exception_QMARK_.call(null,ret))){
throw ret;
} else {
return ret;
}
}catch (e13572){var ex = e13572;
return clojure.test.check.properties.__GT_ErrorResult.call(null,ex);
}})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
});
});
/**
 * Creates a property (properties are also generators). A property
 *   is a generator that generates the result of applying the function
 *   under test with the realized arguments. Once realized, the arguments
 *   will be applied to `function` with `apply`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/int gen/int] (fn [a b] (>= (+ a b) a)))
 *   
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap.call(null,clojure.test.check.properties.apply_gen.call(null,function$),cljs.core.apply.call(null,clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),bindings));
});
var ret__9204__auto___13577 = (function (){
/**
 * Macro sugar for `for-all*`. `for-all` lets you name the parameter
 *   and use them in expression, without wrapping them in a lambda. Like
 *   `for-all*`, it returns a property.
 * 
 *   Examples
 * 
 *   (for-all [a gen/int
 *          b gen/int]
 *  (>= (+ a b) a))
 *   
 */
clojure.test.check.properties.for_all = (function clojure$test$check$properties$for_all(var_args){
var args__9166__auto__ = [];
var len__9159__auto___13578 = arguments.length;
var i__9160__auto___13579 = (0);
while(true){
if((i__9160__auto___13579 < len__9159__auto___13578)){
args__9166__auto__.push((arguments[i__9160__auto___13579]));

var G__13580 = (i__9160__auto___13579 + (1));
i__9160__auto___13579 = G__13580;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((3) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((3)),(0),null)):null);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9167__auto__);
});

clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),(function (){var x__8872__auto__ = cljs.core.vec.call(null,clojure.test.check.properties.binding_gens.call(null,bindings));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8872__auto__);
})(),(function (){var x__8872__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__8872__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,clojure.test.check.properties.binding_vars.call(null,bindings)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8872__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8872__auto__);
})())));
});

clojure.test.check.properties.for_all.cljs$lang$maxFixedArity = (3);

clojure.test.check.properties.for_all.cljs$lang$applyTo = (function (seq13573){
var G__13574 = cljs.core.first.call(null,seq13573);
var seq13573__$1 = cljs.core.next.call(null,seq13573);
var G__13575 = cljs.core.first.call(null,seq13573__$1);
var seq13573__$2 = cljs.core.next.call(null,seq13573__$1);
var G__13576 = cljs.core.first.call(null,seq13573__$2);
var seq13573__$3 = cljs.core.next.call(null,seq13573__$2);
return clojure.test.check.properties.for_all.cljs$core$IFn$_invoke$arity$variadic(G__13574,G__13575,G__13576,seq13573__$3);
});

return null;
})()
;
clojure.test.check.properties.for_all.cljs$lang$macro = true;


//# sourceMappingURL=properties.js.map