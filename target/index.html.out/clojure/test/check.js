// Compiled by ClojureScript 1.9.542 {}
goog.provide('clojure.test.check');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.random');
goog.require('clojure.test.check.results');
goog.require('clojure.test.check.rose_tree');
goog.require('clojure.test.check.impl');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.call(null,seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.call(null,non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed,reporter_fn){
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
});
/**
 * Tests `property` `num-tests` times.
 * 
 *   Takes several optional keys:
 * 
 *   `:seed`
 *  Can be used to re-run previous tests, as the seed used is returned
 *  after a test is run.
 * 
 *   `:max-size`.
 *  can be used to control the 'size' of generated values. The size will
 *  start at 0, and grow up to max-size, as the number of tests increases.
 *  Generators will use the size parameter to bound their growth. This
 *  prevents, for example, generating a five-thousand element vector on
 *  the very first test.
 * 
 *   `:reporter-fn`
 *  A callback function that will be called at various points in the test
 *  run, with a map like:
 * 
 *    ;; called after a passing trial
 *    {:type      :trial
 *     :property  #<...>
 *     :so-far    <number of tests run so far>
 *     :num-tests <total number of tests>}
 * 
 *    ;; called after each failing trial
 *    {:type         :failure
 *     :property     #<...>
 *     :result       ...
 *     :trial-number <tests ran before failure found>
 *     :failing-args [...]}
 * 
 *  It will also be called on :complete, :shrink-step and :shrunk.
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/pos-int] (> (* a a) a)))
 * 
 *    (quick-check 100 p)
 *    (quick-check 200 p
 *                 :seed 42
 *                 :max-size 50
 *                 :reporter-fn (fn [m]
 *                                (when (= :failure (:type m))
 *                                  (println "Uh oh..."))))
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__9166__auto__ = [];
var len__9159__auto___9761 = arguments.length;
var i__9160__auto___9762 = (0);
while(true){
if((i__9160__auto___9762 < len__9159__auto___9761)){
args__9166__auto__.push((arguments[i__9160__auto___9762]));

var G__9763 = (i__9160__auto___9762 + (1));
i__9160__auto___9762 = G__9763;
continue;
} else {
}
break;
}

var argseq__9167__auto__ = ((((2) < args__9166__auto__.length))?(new cljs.core.IndexedSeq(args__9166__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9167__auto__);
});

clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__9749){
var map__9750 = p__9749;
var map__9750__$1 = ((((!((map__9750 == null)))?((((map__9750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9750):map__9750);
var seed = cljs.core.get.call(null,map__9750__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var max_size = cljs.core.get.call(null,map__9750__$1,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(200));
var reporter_fn = cljs.core.get.call(null,map__9750__$1,new cljs.core.Keyword(null,"reporter-fn","reporter-fn",1280520247),cljs.core.constantly.call(null,null));
var vec__9752 = clojure.test.check.make_rng.call(null,seed);
var created_seed = cljs.core.nth.call(null,vec__9752,(0),null);
var rng = cljs.core.nth.call(null,vec__9752,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq.call(null,max_size);
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete.call(null,property,num_tests,created_seed,reporter_fn);
} else {
var vec__9755 = size_seq__$1;
var seq__9756 = cljs.core.seq.call(null,vec__9755);
var first__9757 = cljs.core.first.call(null,seq__9756);
var seq__9756__$1 = cljs.core.next.call(null,seq__9756);
var size = first__9757;
var rest_size_seq = seq__9756__$1;
var vec__9758 = clojure.test.check.random.split.call(null,rstate);
var r1 = cljs.core.nth.call(null,vec__9758,(0),null);
var r2 = cljs.core.nth.call(null,vec__9758,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen.call(null,property,r1,size);
var result_map = clojure.test.check.rose_tree.root.call(null,result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(result_map);
var so_far__$1 = (so_far + (1));
if(cljs.core.truth_(clojure.test.check.results.passing_QMARK_.call(null,result))){
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"trial","trial",-677458347),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"so-far","so-far",-1973642241),so_far__$1,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_tests], null));

var G__9764 = so_far__$1;
var G__9765 = rest_size_seq;
var G__9766 = r2;
so_far = G__9764;
size_seq__$1 = G__9765;
rstate = G__9766;
continue;
} else {
return clojure.test.check.failure.call(null,property,result_map_rose,so_far__$1,size,created_seed,reporter_fn);
}
}
break;
}
});

clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2);

clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq9746){
var G__9747 = cljs.core.first.call(null,seq9746);
var seq9746__$1 = cljs.core.next.call(null,seq9746);
var G__9748 = cljs.core.first.call(null,seq9746__$1);
var seq9746__$2 = cljs.core.next.call(null,seq9746__$1);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic(G__9747,G__9748,seq9746__$2);
});

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest){
var map__9769 = smallest;
var map__9769__$1 = ((((!((map__9769 == null)))?((((map__9769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9769):map__9769);
var result = cljs.core.get.call(null,map__9769__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.results.passing_QMARK_.call(null,result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data.call(null,result),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 * 
 *   Calls reporter-fn on every shrink step.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree,reporter_fn){
var shrinks_this_depth = clojure.test.check.rose_tree.children.call(null,rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root.call(null,rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,nodes)){
return clojure.test.check.smallest_shrink.call(null,total_nodes_visited,depth,current_smallest);
} else {
var head = cljs.core.first.call(null,nodes);
var tail = cljs.core.rest.call(null,nodes);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root.call(null,head));
var shrink_step_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrink-step","shrink-step",-541828120),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
if(cljs.core.truth_(clojure.test.check.results.passing_QMARK_.call(null,result))){
reporter_fn.call(null,cljs.core.merge.call(null,shrink_step_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pass?","pass?",-424635753),true,new cljs.core.Keyword(null,"current-smallest","current-smallest",1840631643),current_smallest], null)));

var G__9771 = tail;
var G__9772 = current_smallest;
var G__9773 = (total_nodes_visited + (1));
var G__9774 = depth;
nodes = G__9771;
current_smallest = G__9772;
total_nodes_visited = G__9773;
depth = G__9774;
continue;
} else {
var new_smallest = clojure.test.check.rose_tree.root.call(null,head);
reporter_fn.call(null,cljs.core.merge.call(null,shrink_step_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pass?","pass?",-424635753),false,new cljs.core.Keyword(null,"current-smallest","current-smallest",1840631643),new_smallest], null)));

var temp__5276__auto__ = cljs.core.seq.call(null,clojure.test.check.rose_tree.children.call(null,head));
if(temp__5276__auto__){
var children = temp__5276__auto__;
var G__9775 = children;
var G__9776 = new_smallest;
var G__9777 = (total_nodes_visited + (1));
var G__9778 = (depth + (1));
nodes = G__9775;
current_smallest = G__9776;
total_nodes_visited = G__9777;
depth = G__9778;
continue;
} else {
var G__9779 = tail;
var G__9780 = new_smallest;
var G__9781 = (total_nodes_visited + (1));
var G__9782 = depth;
nodes = G__9779;
current_smallest = G__9780;
total_nodes_visited = G__9781;
depth = G__9782;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed,reporter_fn){
var root = clojure.test.check.rose_tree.root.call(null,failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(root);
var failing_args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(root);
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.results.passing_QMARK_.call(null,result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data.call(null,result),new cljs.core.Keyword(null,"trial-number","trial-number",1762056689),trial_number,new cljs.core.Keyword(null,"failing-args","failing-args",-890623811),failing_args], null));

var shrunk = clojure.test.check.shrink_loop.call(null,failing_rose_tree,((function (root,result,failing_args){
return (function (p1__9783_SHARP_){
return reporter_fn.call(null,cljs.core.assoc.call(null,p1__9783_SHARP_,new cljs.core.Keyword(null,"property","property",-1114278232),property));
});})(root,result,failing_args))
);
reporter_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"trial-number","trial-number",1762056689),trial_number,new cljs.core.Keyword(null,"failing-args","failing-args",-890623811),failing_args,new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk], null));

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.results.passing_QMARK_.call(null,result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data.call(null,result),new cljs.core.Keyword(null,"seed","seed",68613327),seed,new cljs.core.Keyword(null,"failing-size","failing-size",-429562538),size,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),trial_number,new cljs.core.Keyword(null,"fail","fail",1706214930),cljs.core.vec.call(null,failing_args),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk], null);
});

//# sourceMappingURL=check.js.map