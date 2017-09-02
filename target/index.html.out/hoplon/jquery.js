// Compiled by ClojureScript 1.9.542 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args15076 = [];
var len__9159__auto___15095 = arguments.length;
var i__9160__auto___15096 = (0);
while(true){
if((i__9160__auto___15096 < len__9159__auto___15095)){
args15076.push((arguments[i__9160__auto___15096]));

var G__15097 = (i__9160__auto___15096 + (1));
i__9160__auto___15096 = G__15097;
continue;
} else {
}
break;
}

var G__15082 = args15076.length;
switch (G__15082) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9182__auto__ = (new cljs.core.IndexedSeq(args15076.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9182__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15083 = cljs.core.seq.call(null,kvs);
var chunk__15085 = null;
var count__15086 = (0);
var i__15087 = (0);
while(true){
if((i__15087 < count__15086)){
var vec__15089 = cljs.core._nth.call(null,chunk__15085,i__15087);
var k = cljs.core.nth.call(null,vec__15089,(0),null);
var v = cljs.core.nth.call(null,vec__15089,(1),null);
var k_15099__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_15099__$1);
} else {
e.attr(k_15099__$1,((cljs.core._EQ_.call(null,true,v))?k_15099__$1:v));
}

var G__15100 = seq__15083;
var G__15101 = chunk__15085;
var G__15102 = count__15086;
var G__15103 = (i__15087 + (1));
seq__15083 = G__15100;
chunk__15085 = G__15101;
count__15086 = G__15102;
i__15087 = G__15103;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__15083);
if(temp__5278__auto__){
var seq__15083__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15083__$1)){
var c__8849__auto__ = cljs.core.chunk_first.call(null,seq__15083__$1);
var G__15104 = cljs.core.chunk_rest.call(null,seq__15083__$1);
var G__15105 = c__8849__auto__;
var G__15106 = cljs.core.count.call(null,c__8849__auto__);
var G__15107 = (0);
seq__15083 = G__15104;
chunk__15085 = G__15105;
count__15086 = G__15106;
i__15087 = G__15107;
continue;
} else {
var vec__15092 = cljs.core.first.call(null,seq__15083__$1);
var k = cljs.core.nth.call(null,vec__15092,(0),null);
var v = cljs.core.nth.call(null,vec__15092,(1),null);
var k_15108__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttr(k_15108__$1);
} else {
e.attr(k_15108__$1,((cljs.core._EQ_.call(null,true,v))?k_15108__$1:v));
}

var G__15109 = cljs.core.next.call(null,seq__15083__$1);
var G__15110 = null;
var G__15111 = (0);
var G__15112 = (0);
seq__15083 = G__15109;
chunk__15085 = G__15110;
count__15086 = G__15111;
i__15087 = G__15112;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq15077){
var G__15078 = cljs.core.first.call(null,seq15077);
var seq15077__$1 = cljs.core.next.call(null,seq15077);
var G__15079 = cljs.core.first.call(null,seq15077__$1);
var seq15077__$2 = cljs.core.next.call(null,seq15077__$1);
var G__15080 = cljs.core.first.call(null,seq15077__$2);
var seq15077__$3 = cljs.core.next.call(null,seq15077__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15078,G__15079,G__15080,seq15077__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args15113 = [];
var len__9159__auto___15130 = arguments.length;
var i__9160__auto___15131 = (0);
while(true){
if((i__9160__auto___15131 < len__9159__auto___15130)){
args15113.push((arguments[i__9160__auto___15131]));

var G__15132 = (i__9160__auto___15131 + (1));
i__9160__auto___15131 = G__15132;
continue;
} else {
}
break;
}

var G__15119 = args15113.length;
switch (G__15119) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9182__auto__ = (new cljs.core.IndexedSeq(args15113.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9182__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__15120 = cljs.core.seq.call(null,kvs);
var chunk__15121 = null;
var count__15122 = (0);
var i__15123 = (0);
while(true){
if((i__15123 < count__15122)){
var vec__15124 = cljs.core._nth.call(null,chunk__15121,i__15123);
var k = cljs.core.nth.call(null,vec__15124,(0),null);
var v = cljs.core.nth.call(null,vec__15124,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15134 = seq__15120;
var G__15135 = chunk__15121;
var G__15136 = count__15122;
var G__15137 = (i__15123 + (1));
seq__15120 = G__15134;
chunk__15121 = G__15135;
count__15122 = G__15136;
i__15123 = G__15137;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__15120);
if(temp__5278__auto__){
var seq__15120__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15120__$1)){
var c__8849__auto__ = cljs.core.chunk_first.call(null,seq__15120__$1);
var G__15138 = cljs.core.chunk_rest.call(null,seq__15120__$1);
var G__15139 = c__8849__auto__;
var G__15140 = cljs.core.count.call(null,c__8849__auto__);
var G__15141 = (0);
seq__15120 = G__15138;
chunk__15121 = G__15139;
count__15122 = G__15140;
i__15123 = G__15141;
continue;
} else {
var vec__15127 = cljs.core.first.call(null,seq__15120__$1);
var k = cljs.core.nth.call(null,vec__15127,(0),null);
var v = cljs.core.nth.call(null,vec__15127,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15142 = cljs.core.next.call(null,seq__15120__$1);
var G__15143 = null;
var G__15144 = (0);
var G__15145 = (0);
seq__15120 = G__15142;
chunk__15121 = G__15143;
count__15122 = G__15144;
i__15123 = G__15145;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq15114){
var G__15115 = cljs.core.first.call(null,seq15114);
var seq15114__$1 = cljs.core.next.call(null,seq15114);
var G__15116 = cljs.core.first.call(null,seq15114__$1);
var seq15114__$2 = cljs.core.next.call(null,seq15114__$1);
var G__15117 = cljs.core.first.call(null,seq15114__$2);
var seq15114__$3 = cljs.core.next.call(null,seq15114__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15115,G__15116,G__15117,seq15114__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args15146 = [];
var len__9159__auto___15149 = arguments.length;
var i__9160__auto___15150 = (0);
while(true){
if((i__9160__auto___15150 < len__9159__auto___15149)){
args15146.push((arguments[i__9160__auto___15150]));

var G__15151 = (i__9160__auto___15150 + (1));
i__9160__auto___15150 = G__15151;
continue;
} else {
}
break;
}

var G__15148 = args15146.length;
switch (G__15148) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15146.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.jquery.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args15153 = [];
var len__9159__auto___15156 = arguments.length;
var i__9160__auto___15157 = (0);
while(true){
if((i__9160__auto___15157 < len__9159__auto___15156)){
args15153.push((arguments[i__9160__auto___15157]));

var G__15158 = (i__9160__auto___15157 + (1));
i__9160__auto___15157 = G__15158;
continue;
} else {
}
break;
}

var G__15155 = args15153.length;
switch (G__15155) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15153.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("attr","*","attr/*",-1283077225),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","map","hoplon.spec/map",-1715767780));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("prop","*","prop/*",-1283942139),(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("prop","*","prop/*",-1283942139),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (_){
return hoplon.spec.attr.call(null,cljs.core.any_QMARK_);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","map","hoplon.spec/map",-1715767780));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","map","hoplon.spec/map",-1715767780));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__15160__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15160 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15161__i = 0, G__15161__a = new Array(arguments.length -  2);
while (G__15161__i < G__15161__a.length) {G__15161__a[G__15161__i] = arguments[G__15161__i + 2]; ++G__15161__i;}
  args = new cljs.core.IndexedSeq(G__15161__a,0,null);
} 
return G__15160__delegate.call(this,elem,_,args);};
G__15160.cljs$lang$maxFixedArity = 2;
G__15160.cljs$lang$applyTo = (function (arglist__15162){
var elem = cljs.core.first(arglist__15162);
arglist__15162 = cljs.core.next(arglist__15162);
var _ = cljs.core.first(arglist__15162);
var args = cljs.core.rest(arglist__15162);
return G__15160__delegate(elem,_,args);
});
G__15160.cljs$core$IFn$_invoke$arity$variadic = G__15160__delegate;
return G__15160;
})()
);
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","value","hoplon.spec/value",-632980670));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__15163 = cljs.core.seq.call(null,clmap);
var chunk__15164 = null;
var count__15165 = (0);
var i__15166 = (0);
while(true){
if((i__15166 < count__15165)){
var vec__15167 = cljs.core._nth.call(null,chunk__15164,i__15166);
var c = cljs.core.nth.call(null,vec__15167,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__15167,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__15173 = seq__15163;
var G__15174 = chunk__15164;
var G__15175 = count__15165;
var G__15176 = (i__15166 + (1));
seq__15163 = G__15173;
chunk__15164 = G__15174;
count__15165 = G__15175;
i__15166 = G__15176;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__15163);
if(temp__5278__auto__){
var seq__15163__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15163__$1)){
var c__8849__auto__ = cljs.core.chunk_first.call(null,seq__15163__$1);
var G__15177 = cljs.core.chunk_rest.call(null,seq__15163__$1);
var G__15178 = c__8849__auto__;
var G__15179 = cljs.core.count.call(null,c__8849__auto__);
var G__15180 = (0);
seq__15163 = G__15177;
chunk__15164 = G__15178;
count__15165 = G__15179;
i__15166 = G__15180;
continue;
} else {
var vec__15170 = cljs.core.first.call(null,seq__15163__$1);
var c = cljs.core.nth.call(null,vec__15170,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__15170,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__15181 = cljs.core.next.call(null,seq__15163__$1);
var G__15182 = null;
var G__15183 = (0);
var G__15184 = (0);
seq__15163 = G__15181;
chunk__15164 = G__15182;
count__15165 = G__15183;
i__15166 = G__15184;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","class","hoplon.spec/class",1857757401));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","string","hoplon.spec/string",-1049501461));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","string","hoplon.spec/string",-1049501461));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.spec.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (_){
return hoplon.spec.attr.call(null,new cljs.core.Keyword("hoplon.spec","boolean","hoplon.spec/boolean",1167155619));
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));

//# sourceMappingURL=jquery.js.map