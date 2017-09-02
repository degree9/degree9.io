// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.compression');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.compression.compression = cljs.nodejs.require.call(null,"compression");
feathers.compression.using = (function feathers$compression$using(app){
return feathers.core.using.call(null,app,feathers.compression.compression.call(null));
});

//# sourceMappingURL=compression.js.map