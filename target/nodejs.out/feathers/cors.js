// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.cors');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.cors.cors = cljs.nodejs.require.call(null,"cors");
feathers.cors.using = (function feathers$cors$using(app){
return feathers.core.using.call(null,app,feathers.cors.cors.call(null));
});

//# sourceMappingURL=cors.js.map