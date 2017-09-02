// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.configuration');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.configuration.configuration = cljs.nodejs.require.call(null,"feathers-configuration");
feathers.configuration.configure = (function feathers$configuration$configure(app,path){
return feathers.core.configure.call(null,app,feathers.configuration.configuration.call(null,path));
});

//# sourceMappingURL=configuration.js.map