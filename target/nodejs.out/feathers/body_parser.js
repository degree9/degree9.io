// Compiled by ClojureScript 1.9.542 {:target :nodejs}
goog.provide('feathers.body_parser');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('feathers.core');
feathers.body_parser.body_parser = cljs.nodejs.require.call(null,"body-parser");
feathers.body_parser.json = (function feathers$body_parser$json(app){
return feathers.core.using.call(null,app,feathers.body_parser.body_parser.json());
});
feathers.body_parser.urlencoded = (function feathers$body_parser$urlencoded(app,conf){
return feathers.core.using.call(null,app,feathers.body_parser.body_parser.urlencoded(conf));
});

//# sourceMappingURL=body_parser.js.map