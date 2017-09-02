// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.hooks');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.hooks.hooks = cljs.nodejs.require.call(null,"feathers-hooks");
feathers.hooks.configure = (function feathers$hooks$configure(app){
return feathers.core.configure.call(null,app,feathers.hooks.hooks.call(null));
});
feathers.hooks.remove = (function feathers$hooks$remove(field){
return feathers.hooks.hooks.remove(field);
});

//# sourceMappingURL=hooks.js.map