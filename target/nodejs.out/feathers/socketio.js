// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.socketio');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.socketio.socketio = cljs.nodejs.require.call(null,"feathers-socketio");
feathers.socketio.configure = (function feathers$socketio$configure(app){
return feathers.core.configure.call(null,app,feathers.socketio.socketio.call(null));
});

//# sourceMappingURL=socketio.js.map