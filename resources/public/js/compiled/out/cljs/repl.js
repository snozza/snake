// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27460_27474 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27461_27475 = null;
var count__27462_27476 = (0);
var i__27463_27477 = (0);
while(true){
if((i__27463_27477 < count__27462_27476)){
var f_27478 = cljs.core._nth.call(null,chunk__27461_27475,i__27463_27477);
cljs.core.println.call(null,"  ",f_27478);

var G__27479 = seq__27460_27474;
var G__27480 = chunk__27461_27475;
var G__27481 = count__27462_27476;
var G__27482 = (i__27463_27477 + (1));
seq__27460_27474 = G__27479;
chunk__27461_27475 = G__27480;
count__27462_27476 = G__27481;
i__27463_27477 = G__27482;
continue;
} else {
var temp__4657__auto___27483 = cljs.core.seq.call(null,seq__27460_27474);
if(temp__4657__auto___27483){
var seq__27460_27484__$1 = temp__4657__auto___27483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27460_27484__$1)){
var c__19249__auto___27485 = cljs.core.chunk_first.call(null,seq__27460_27484__$1);
var G__27486 = cljs.core.chunk_rest.call(null,seq__27460_27484__$1);
var G__27487 = c__19249__auto___27485;
var G__27488 = cljs.core.count.call(null,c__19249__auto___27485);
var G__27489 = (0);
seq__27460_27474 = G__27486;
chunk__27461_27475 = G__27487;
count__27462_27476 = G__27488;
i__27463_27477 = G__27489;
continue;
} else {
var f_27490 = cljs.core.first.call(null,seq__27460_27484__$1);
cljs.core.println.call(null,"  ",f_27490);

var G__27491 = cljs.core.next.call(null,seq__27460_27484__$1);
var G__27492 = null;
var G__27493 = (0);
var G__27494 = (0);
seq__27460_27474 = G__27491;
chunk__27461_27475 = G__27492;
count__27462_27476 = G__27493;
i__27463_27477 = G__27494;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27495 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18438__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27495);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27495)))?cljs.core.second.call(null,arglists_27495):arglists_27495));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27465 = null;
var count__27466 = (0);
var i__27467 = (0);
while(true){
if((i__27467 < count__27466)){
var vec__27468 = cljs.core._nth.call(null,chunk__27465,i__27467);
var name = cljs.core.nth.call(null,vec__27468,(0),null);
var map__27469 = cljs.core.nth.call(null,vec__27468,(1),null);
var map__27469__$1 = ((((!((map__27469 == null)))?((((map__27469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27469):map__27469);
var doc = cljs.core.get.call(null,map__27469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27496 = seq__27464;
var G__27497 = chunk__27465;
var G__27498 = count__27466;
var G__27499 = (i__27467 + (1));
seq__27464 = G__27496;
chunk__27465 = G__27497;
count__27466 = G__27498;
i__27467 = G__27499;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27464);
if(temp__4657__auto__){
var seq__27464__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27464__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__27464__$1);
var G__27500 = cljs.core.chunk_rest.call(null,seq__27464__$1);
var G__27501 = c__19249__auto__;
var G__27502 = cljs.core.count.call(null,c__19249__auto__);
var G__27503 = (0);
seq__27464 = G__27500;
chunk__27465 = G__27501;
count__27466 = G__27502;
i__27467 = G__27503;
continue;
} else {
var vec__27471 = cljs.core.first.call(null,seq__27464__$1);
var name = cljs.core.nth.call(null,vec__27471,(0),null);
var map__27472 = cljs.core.nth.call(null,vec__27471,(1),null);
var map__27472__$1 = ((((!((map__27472 == null)))?((((map__27472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27472):map__27472);
var doc = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27504 = cljs.core.next.call(null,seq__27464__$1);
var G__27505 = null;
var G__27506 = (0);
var G__27507 = (0);
seq__27464 = G__27504;
chunk__27465 = G__27505;
count__27466 = G__27506;
i__27467 = G__27507;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1466146183943