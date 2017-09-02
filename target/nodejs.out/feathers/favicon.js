// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.favicon');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.favicon.favicon = cljs.nodejs.require.call(null,"serve-favicon");
feathers.favicon.using = (function feathers$favicon$using(app,path){
return feathers.core.using.call(null,app,feathers.favicon.favicon.call(null,path));
});

//# sourceMappingURL=favicon.js.map