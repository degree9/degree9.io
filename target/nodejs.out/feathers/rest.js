// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.rest');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.rest.rest = cljs.nodejs.require.call(null,"feathers-rest");
feathers.rest.configure = (function feathers$rest$configure(app){
return feathers.core.configure.call(null,app,feathers.rest.rest.call(null));
});

//# sourceMappingURL=rest.js.map