// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('app.server');
goog.require('cljs.core');
goog.require('meta.server');
goog.require('app.services');
app.services.messages.call(null,meta.server.app);
app.server.main = (function app$server$main(){
return meta.server.listen.call(null,meta.server.app,"8080");
});
app.server.init = (function app$server$init(){
return meta.server.init_BANG_.call(null,app.server.main);
});

//# sourceMappingURL=server.js.map