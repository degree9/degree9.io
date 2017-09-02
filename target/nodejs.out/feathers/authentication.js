// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.authentication');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.authentication.auth = cljs.nodejs.require.call(null,"feathers-authentication");
feathers.authentication.jwt = cljs.nodejs.require.call(null,"feathers-authentication-jwt");
feathers.authentication.local = cljs.nodejs.require.call(null,"feathers-authentication-local");
feathers.authentication.oauth1 = cljs.nodejs.require.call(null,"feathers-authentication-oauth1");
feathers.authentication.oauth2 = cljs.nodejs.require.call(null,"feathers-authentication-oauth2");
feathers.authentication.hooks = cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.object.get(feathers.authentication.auth,"hooks"),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),cljs.core.js__GT_clj.call(null,goog.object.get(feathers.authentication.local,"hooks"),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
feathers.authentication.configure = (function feathers$authentication$configure(app,conf){
return feathers.core.configure.call(null,feathers.core.configure.call(null,feathers.core.configure.call(null,app,feathers.authentication.auth.call(null,conf)),feathers.authentication.jwt.call(null)),feathers.authentication.local.call(null));
});
feathers.authentication.service = (function feathers$authentication$service(app){
var svc = feathers.core.service.call(null,app,"authentication");
var auth = new cljs.core.Keyword(null,"authenticate","authenticate",743951231).cljs$core$IFn$_invoke$arity$1(feathers.authentication.hooks);
var G__9277_9278 = svc;
G__9277_9278.before(({"create": (new auth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["jwt","local"], null)))}));


return app;
});

//# sourceMappingURL=authentication.js.map