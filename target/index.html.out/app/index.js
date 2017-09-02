// Compiled by ClojureScript 1.9.542 {}
goog.provide('app.index');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('hoplon.jquery');
goog.require('uikit_hl.align');
goog.require('uikit_hl.button');
goog.require('uikit_hl.card');
goog.require('uikit_hl.container');
goog.require('uikit_hl.description_list');
goog.require('uikit_hl.flex');
goog.require('uikit_hl.grid');
goog.require('uikit_hl.icon');
goog.require('uikit_hl.margin');
goog.require('uikit_hl.padding');
goog.require('uikit_hl.text');
goog.require('uikit_hl.utility');
goog.require('uikit_hl.width');
goog.require('meta.ui.uikit');
/**
 * @param {...*} var_args
 */
app.index.card = (function() { 
var app$index$card__delegate = function (args__14031__auto__){
var vec__15265 = hoplon.core.parse_args.call(null,args__14031__auto__);
var attr = cljs.core.nth.call(null,vec__15265,(0),null);
var kids = cljs.core.nth.call(null,vec__15265,(1),null);
return (function (){var map__15268 = attr;
var map__15268__$1 = ((((!((map__15268 == null)))?((((map__15268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15268):map__15268);
var header = cljs.core.get.call(null,map__15268__$1,new cljs.core.Keyword(null,"header","header",119441134));
var body = cljs.core.get.call(null,map__15268__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var footer = cljs.core.get.call(null,map__15268__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var G__15270 = cljs.core.PersistentVector.EMPTY;
var G__15270__$1 = (cljs.core.truth_(header)?cljs.core.conj.call(null,G__15270,uikit_hl.card.header.call(null,header)):G__15270);
var G__15270__$2 = (cljs.core.truth_(body)?cljs.core.conj.call(null,G__15270__$1,uikit_hl.card.body.call(null,body)):G__15270__$1);
if(cljs.core.truth_(footer)){
return cljs.core.conj.call(null,G__15270__$2,uikit_hl.card.footer.call(null,footer));
} else {
return G__15270__$2;
}
})().call(null);
};
var app$index$card = function (var_args){
var args__14031__auto__ = null;
if (arguments.length > 0) {
var G__15271__i = 0, G__15271__a = new Array(arguments.length -  0);
while (G__15271__i < G__15271__a.length) {G__15271__a[G__15271__i] = arguments[G__15271__i + 0]; ++G__15271__i;}
  args__14031__auto__ = new cljs.core.IndexedSeq(G__15271__a,0,null);
} 
return app$index$card__delegate.call(this,args__14031__auto__);};
app$index$card.cljs$lang$maxFixedArity = 0;
app$index$card.cljs$lang$applyTo = (function (arglist__15272){
var args__14031__auto__ = cljs.core.seq(arglist__15272);
return app$index$card__delegate(args__14031__auto__);
});
app$index$card.cljs$core$IFn$_invoke$arity$variadic = app$index$card__delegate;
return app$index$card;
})()
;
hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"href","href",-793805698),"css/theme.css")),hoplon.core.body.call(null,uikit_hl.container.container.call(null,uikit_hl.grid.grid.call(null,new cljs.core.Keyword(null,"flex-middle","flex-middle",-259767711),true,new cljs.core.Keyword(null,"child-width-1-3","child-width-1-3",601608219),true,new cljs.core.Keyword(null,"uk-height-viewport","uk-height-viewport",1215755821),true,new cljs.core.Keyword(null,"match","match",1220059550),true,new cljs.core.Keyword(null,"uk-height-match","uk-height-match",1306841167),"target: > div > div",uikit_hl.grid.cell.call(null,uikit_hl.card.card.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),true,uikit_hl.card.header.call(null,uikit_hl.grid.grid.call(null,new cljs.core.Keyword(null,"small","small",2133478704),true,new cljs.core.Keyword(null,"flex-middle","flex-middle",-259767711),true,uikit_hl.grid.cell.call(null,new cljs.core.Keyword(null,"width-auto","width-auto",-495573647),true,hoplon.core.img.call(null,new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"src","src",-1651076051),"https://pbs.twimg.com/profile_images/749758739494961152/0H4f4o4O_400x400.jpg")),uikit_hl.grid.cell.call(null,new cljs.core.Keyword(null,"width-expand","width-expand",-1343393809),true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uikit_hl.card.title.call(null,new cljs.core.Keyword(null,"margin-remove-bottom","margin-remove-bottom",2019892058),true,"Degree9 Solutions Inc."),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),true,new cljs.core.Keyword(null,"margin-remove-top","margin-remove-top",1153249062),true,"DevOps & IT Automation Solutions")], null)))),uikit_hl.card.body.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.p.call(null,"Founded in 2014 we provide DevOps and IT Automation solutions to enterprise clients."),hoplon.core.p.call(null,"Degree9 maintains an \"Open-Source Everything\" approach to software development and technology. "),hoplon.core.p.call(null,"All of our work is published on Github and available under the MIT license.")], null)),uikit_hl.card.footer.call(null,uikit_hl.button.group.call(null,new cljs.core.Keyword(null,"align-right","align-right",-189896040),true,uikit_hl.button.a_button.call(null,new cljs.core.Keyword(null,"primary","primary",817773892),true,"Open-Source",new cljs.core.Keyword(null,"href","href",-793805698),"http://github.com/degree9"),uikit_hl.button.a_button.call(null,new cljs.core.Keyword(null,"secondary","secondary",-669381460),true,"Dev Blog",new cljs.core.Keyword(null,"href","href",-793805698),"http://medium.com/degree9"))))),uikit_hl.grid.cell.call(null,uikit_hl.card.card.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"480px"], null),uikit_hl.card.header.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uikit_hl.card.title.call(null,new cljs.core.Keyword(null,"margin-remove-bottom","margin-remove-bottom",2019892058),true,"Solutions"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),true,new cljs.core.Keyword(null,"margin-remove-top","margin-remove-top",1153249062),true,"powered by D9 Enterprise Platform")], null)),hoplon.core.div.call(null,new cljs.core.Keyword(null,"uk-inline","uk-inline",-884136304),true,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.img.call(null,new cljs.core.Keyword(null,"src","src",-1651076051),"images/cannabit.png")], null)),uikit_hl.card.body.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hoplon.core.p.call(null,"Cannabit is an Enterprise Management Software for Canadian Licensed Producers of Medical Marijuana.")], null)))),uikit_hl.grid.cell.call(null,uikit_hl.card.card.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),true,uikit_hl.card.header.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uikit_hl.card.title.call(null,new cljs.core.Keyword(null,"margin-remove-bottom","margin-remove-bottom",2019892058),true,"D9 Enterprise Platform"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),true,new cljs.core.Keyword(null,"margin-remove-top","margin-remove-top",1153249062),true,"Functional Enterprise Platform-as-a-Service")], null)),uikit_hl.card.body.call(null,uikit_hl.grid.grid.call(null,new cljs.core.Keyword(null,"small","small",2133478704),true,uikit_hl.grid.cell.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"margin-remove-bottom","margin-remove-bottom",2019892058),true,uikit_hl.icon.icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541),"check"),"Shipped as Code"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),true,new cljs.core.Keyword(null,"margin-remove-top","margin-remove-top",1153249062),true,"Shipped as Source Code Repository")], null)),uikit_hl.grid.cell.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"margin-remove-bottom","margin-remove-bottom",2019892058),true,uikit_hl.icon.icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541),"check"),"Continuous Deployment"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),true,new cljs.core.Keyword(null,"margin-remove-top","margin-remove-top",1153249062),true,"Automatically build and deploy enterprise applications")], null)),uikit_hl.grid.cell.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"margin-remove-bottom","margin-remove-bottom",2019892058),true,uikit_hl.icon.icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541),"check"),"Modern Lisp"),uikit_hl.text.text.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),true,new cljs.core.Keyword(null,"margin-remove-top","margin-remove-top",1153249062),true,"Built entirely using Clojure + ClojureScript")], null)))),uikit_hl.card.footer.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uikit_hl.button.group.call(null,new cljs.core.Keyword(null,"align-right","align-right",-189896040),true,uikit_hl.button.button.call(null,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"primary","primary",817773892),true,"Manage",new cljs.core.Keyword(null,"click","click",1912301393),(function (){
return cljs.core.prn.call(null,"contact us modal");
})))], null))))))));

//# sourceMappingURL=index.js.map