// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18438__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18438__auto__){
return or__18438__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18438__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26434_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26434_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26439 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26440 = null;
var count__26441 = (0);
var i__26442 = (0);
while(true){
if((i__26442 < count__26441)){
var n = cljs.core._nth.call(null,chunk__26440,i__26442);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26443 = seq__26439;
var G__26444 = chunk__26440;
var G__26445 = count__26441;
var G__26446 = (i__26442 + (1));
seq__26439 = G__26443;
chunk__26440 = G__26444;
count__26441 = G__26445;
i__26442 = G__26446;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26439);
if(temp__4657__auto__){
var seq__26439__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26439__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__26439__$1);
var G__26447 = cljs.core.chunk_rest.call(null,seq__26439__$1);
var G__26448 = c__19249__auto__;
var G__26449 = cljs.core.count.call(null,c__19249__auto__);
var G__26450 = (0);
seq__26439 = G__26447;
chunk__26440 = G__26448;
count__26441 = G__26449;
i__26442 = G__26450;
continue;
} else {
var n = cljs.core.first.call(null,seq__26439__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26451 = cljs.core.next.call(null,seq__26439__$1);
var G__26452 = null;
var G__26453 = (0);
var G__26454 = (0);
seq__26439 = G__26451;
chunk__26440 = G__26452;
count__26441 = G__26453;
i__26442 = G__26454;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26493_26500 = cljs.core.seq.call(null,deps);
var chunk__26494_26501 = null;
var count__26495_26502 = (0);
var i__26496_26503 = (0);
while(true){
if((i__26496_26503 < count__26495_26502)){
var dep_26504 = cljs.core._nth.call(null,chunk__26494_26501,i__26496_26503);
topo_sort_helper_STAR_.call(null,dep_26504,(depth + (1)),state);

var G__26505 = seq__26493_26500;
var G__26506 = chunk__26494_26501;
var G__26507 = count__26495_26502;
var G__26508 = (i__26496_26503 + (1));
seq__26493_26500 = G__26505;
chunk__26494_26501 = G__26506;
count__26495_26502 = G__26507;
i__26496_26503 = G__26508;
continue;
} else {
var temp__4657__auto___26509 = cljs.core.seq.call(null,seq__26493_26500);
if(temp__4657__auto___26509){
var seq__26493_26510__$1 = temp__4657__auto___26509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26493_26510__$1)){
var c__19249__auto___26511 = cljs.core.chunk_first.call(null,seq__26493_26510__$1);
var G__26512 = cljs.core.chunk_rest.call(null,seq__26493_26510__$1);
var G__26513 = c__19249__auto___26511;
var G__26514 = cljs.core.count.call(null,c__19249__auto___26511);
var G__26515 = (0);
seq__26493_26500 = G__26512;
chunk__26494_26501 = G__26513;
count__26495_26502 = G__26514;
i__26496_26503 = G__26515;
continue;
} else {
var dep_26516 = cljs.core.first.call(null,seq__26493_26510__$1);
topo_sort_helper_STAR_.call(null,dep_26516,(depth + (1)),state);

var G__26517 = cljs.core.next.call(null,seq__26493_26510__$1);
var G__26518 = null;
var G__26519 = (0);
var G__26520 = (0);
seq__26493_26500 = G__26517;
chunk__26494_26501 = G__26518;
count__26495_26502 = G__26519;
i__26496_26503 = G__26520;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26497){
var vec__26499 = p__26497;
var x = cljs.core.nth.call(null,vec__26499,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26499,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26499,x,xs,get_deps__$1){
return (function (p1__26455_SHARP_){
return clojure.set.difference.call(null,p1__26455_SHARP_,x);
});})(vec__26499,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26533 = cljs.core.seq.call(null,provides);
var chunk__26534 = null;
var count__26535 = (0);
var i__26536 = (0);
while(true){
if((i__26536 < count__26535)){
var prov = cljs.core._nth.call(null,chunk__26534,i__26536);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26537_26545 = cljs.core.seq.call(null,requires);
var chunk__26538_26546 = null;
var count__26539_26547 = (0);
var i__26540_26548 = (0);
while(true){
if((i__26540_26548 < count__26539_26547)){
var req_26549 = cljs.core._nth.call(null,chunk__26538_26546,i__26540_26548);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26549,prov);

var G__26550 = seq__26537_26545;
var G__26551 = chunk__26538_26546;
var G__26552 = count__26539_26547;
var G__26553 = (i__26540_26548 + (1));
seq__26537_26545 = G__26550;
chunk__26538_26546 = G__26551;
count__26539_26547 = G__26552;
i__26540_26548 = G__26553;
continue;
} else {
var temp__4657__auto___26554 = cljs.core.seq.call(null,seq__26537_26545);
if(temp__4657__auto___26554){
var seq__26537_26555__$1 = temp__4657__auto___26554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26537_26555__$1)){
var c__19249__auto___26556 = cljs.core.chunk_first.call(null,seq__26537_26555__$1);
var G__26557 = cljs.core.chunk_rest.call(null,seq__26537_26555__$1);
var G__26558 = c__19249__auto___26556;
var G__26559 = cljs.core.count.call(null,c__19249__auto___26556);
var G__26560 = (0);
seq__26537_26545 = G__26557;
chunk__26538_26546 = G__26558;
count__26539_26547 = G__26559;
i__26540_26548 = G__26560;
continue;
} else {
var req_26561 = cljs.core.first.call(null,seq__26537_26555__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26561,prov);

var G__26562 = cljs.core.next.call(null,seq__26537_26555__$1);
var G__26563 = null;
var G__26564 = (0);
var G__26565 = (0);
seq__26537_26545 = G__26562;
chunk__26538_26546 = G__26563;
count__26539_26547 = G__26564;
i__26540_26548 = G__26565;
continue;
}
} else {
}
}
break;
}

var G__26566 = seq__26533;
var G__26567 = chunk__26534;
var G__26568 = count__26535;
var G__26569 = (i__26536 + (1));
seq__26533 = G__26566;
chunk__26534 = G__26567;
count__26535 = G__26568;
i__26536 = G__26569;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26533);
if(temp__4657__auto__){
var seq__26533__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26533__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__26533__$1);
var G__26570 = cljs.core.chunk_rest.call(null,seq__26533__$1);
var G__26571 = c__19249__auto__;
var G__26572 = cljs.core.count.call(null,c__19249__auto__);
var G__26573 = (0);
seq__26533 = G__26570;
chunk__26534 = G__26571;
count__26535 = G__26572;
i__26536 = G__26573;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26533__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26541_26574 = cljs.core.seq.call(null,requires);
var chunk__26542_26575 = null;
var count__26543_26576 = (0);
var i__26544_26577 = (0);
while(true){
if((i__26544_26577 < count__26543_26576)){
var req_26578 = cljs.core._nth.call(null,chunk__26542_26575,i__26544_26577);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26578,prov);

var G__26579 = seq__26541_26574;
var G__26580 = chunk__26542_26575;
var G__26581 = count__26543_26576;
var G__26582 = (i__26544_26577 + (1));
seq__26541_26574 = G__26579;
chunk__26542_26575 = G__26580;
count__26543_26576 = G__26581;
i__26544_26577 = G__26582;
continue;
} else {
var temp__4657__auto___26583__$1 = cljs.core.seq.call(null,seq__26541_26574);
if(temp__4657__auto___26583__$1){
var seq__26541_26584__$1 = temp__4657__auto___26583__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26541_26584__$1)){
var c__19249__auto___26585 = cljs.core.chunk_first.call(null,seq__26541_26584__$1);
var G__26586 = cljs.core.chunk_rest.call(null,seq__26541_26584__$1);
var G__26587 = c__19249__auto___26585;
var G__26588 = cljs.core.count.call(null,c__19249__auto___26585);
var G__26589 = (0);
seq__26541_26574 = G__26586;
chunk__26542_26575 = G__26587;
count__26543_26576 = G__26588;
i__26544_26577 = G__26589;
continue;
} else {
var req_26590 = cljs.core.first.call(null,seq__26541_26584__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26590,prov);

var G__26591 = cljs.core.next.call(null,seq__26541_26584__$1);
var G__26592 = null;
var G__26593 = (0);
var G__26594 = (0);
seq__26541_26574 = G__26591;
chunk__26542_26575 = G__26592;
count__26543_26576 = G__26593;
i__26544_26577 = G__26594;
continue;
}
} else {
}
}
break;
}

var G__26595 = cljs.core.next.call(null,seq__26533__$1);
var G__26596 = null;
var G__26597 = (0);
var G__26598 = (0);
seq__26533 = G__26595;
chunk__26534 = G__26596;
count__26535 = G__26597;
i__26536 = G__26598;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26603_26607 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26604_26608 = null;
var count__26605_26609 = (0);
var i__26606_26610 = (0);
while(true){
if((i__26606_26610 < count__26605_26609)){
var ns_26611 = cljs.core._nth.call(null,chunk__26604_26608,i__26606_26610);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26611);

var G__26612 = seq__26603_26607;
var G__26613 = chunk__26604_26608;
var G__26614 = count__26605_26609;
var G__26615 = (i__26606_26610 + (1));
seq__26603_26607 = G__26612;
chunk__26604_26608 = G__26613;
count__26605_26609 = G__26614;
i__26606_26610 = G__26615;
continue;
} else {
var temp__4657__auto___26616 = cljs.core.seq.call(null,seq__26603_26607);
if(temp__4657__auto___26616){
var seq__26603_26617__$1 = temp__4657__auto___26616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26603_26617__$1)){
var c__19249__auto___26618 = cljs.core.chunk_first.call(null,seq__26603_26617__$1);
var G__26619 = cljs.core.chunk_rest.call(null,seq__26603_26617__$1);
var G__26620 = c__19249__auto___26618;
var G__26621 = cljs.core.count.call(null,c__19249__auto___26618);
var G__26622 = (0);
seq__26603_26607 = G__26619;
chunk__26604_26608 = G__26620;
count__26605_26609 = G__26621;
i__26606_26610 = G__26622;
continue;
} else {
var ns_26623 = cljs.core.first.call(null,seq__26603_26617__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26623);

var G__26624 = cljs.core.next.call(null,seq__26603_26617__$1);
var G__26625 = null;
var G__26626 = (0);
var G__26627 = (0);
seq__26603_26607 = G__26624;
chunk__26604_26608 = G__26625;
count__26605_26609 = G__26626;
i__26606_26610 = G__26627;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18438__auto__ = goog.require__;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26628__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26628 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26629__i = 0, G__26629__a = new Array(arguments.length -  0);
while (G__26629__i < G__26629__a.length) {G__26629__a[G__26629__i] = arguments[G__26629__i + 0]; ++G__26629__i;}
  args = new cljs.core.IndexedSeq(G__26629__a,0);
} 
return G__26628__delegate.call(this,args);};
G__26628.cljs$lang$maxFixedArity = 0;
G__26628.cljs$lang$applyTo = (function (arglist__26630){
var args = cljs.core.seq(arglist__26630);
return G__26628__delegate(args);
});
G__26628.cljs$core$IFn$_invoke$arity$variadic = G__26628__delegate;
return G__26628;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26632 = cljs.core._EQ_;
var expr__26633 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26632.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26633))){
var path_parts = ((function (pred__26632,expr__26633){
return (function (p1__26631_SHARP_){
return clojure.string.split.call(null,p1__26631_SHARP_,/[\/\\]/);
});})(pred__26632,expr__26633))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26632,expr__26633){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26635){if((e26635 instanceof Error)){
var e = e26635;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26635;

}
}})());
});
;})(path_parts,sep,root,pred__26632,expr__26633))
} else {
if(cljs.core.truth_(pred__26632.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26633))){
return ((function (pred__26632,expr__26633){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26632,expr__26633){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26632,expr__26633))
);

return deferred.addErrback(((function (deferred,pred__26632,expr__26633){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26632,expr__26633))
);
});
;})(pred__26632,expr__26633))
} else {
return ((function (pred__26632,expr__26633){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26632,expr__26633))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26636,callback){
var map__26639 = p__26636;
var map__26639__$1 = ((((!((map__26639 == null)))?((((map__26639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26639):map__26639);
var file_msg = map__26639__$1;
var request_url = cljs.core.get.call(null,map__26639__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26639,map__26639__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26639,map__26639__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__){
return (function (state_26663){
var state_val_26664 = (state_26663[(1)]);
if((state_val_26664 === (7))){
var inst_26659 = (state_26663[(2)]);
var state_26663__$1 = state_26663;
var statearr_26665_26685 = state_26663__$1;
(statearr_26665_26685[(2)] = inst_26659);

(statearr_26665_26685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26664 === (1))){
var state_26663__$1 = state_26663;
var statearr_26666_26686 = state_26663__$1;
(statearr_26666_26686[(2)] = null);

(statearr_26666_26686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26664 === (4))){
var inst_26643 = (state_26663[(7)]);
var inst_26643__$1 = (state_26663[(2)]);
var state_26663__$1 = (function (){var statearr_26667 = state_26663;
(statearr_26667[(7)] = inst_26643__$1);

return statearr_26667;
})();
if(cljs.core.truth_(inst_26643__$1)){
var statearr_26668_26687 = state_26663__$1;
(statearr_26668_26687[(1)] = (5));

} else {
var statearr_26669_26688 = state_26663__$1;
(statearr_26669_26688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26664 === (6))){
var state_26663__$1 = state_26663;
var statearr_26670_26689 = state_26663__$1;
(statearr_26670_26689[(2)] = null);

(statearr_26670_26689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26664 === (3))){
var inst_26661 = (state_26663[(2)]);
var state_26663__$1 = state_26663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26663__$1,inst_26661);
} else {
if((state_val_26664 === (2))){
var state_26663__$1 = state_26663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26663__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26664 === (11))){
var inst_26655 = (state_26663[(2)]);
var state_26663__$1 = (function (){var statearr_26671 = state_26663;
(statearr_26671[(8)] = inst_26655);

return statearr_26671;
})();
var statearr_26672_26690 = state_26663__$1;
(statearr_26672_26690[(2)] = null);

(statearr_26672_26690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26664 === (9))){
var inst_26647 = (state_26663[(9)]);
var inst_26649 = (state_26663[(10)]);
var inst_26651 = inst_26649.call(null,inst_26647);
var state_26663__$1 = state_26663;
var statearr_26673_26691 = state_26663__$1;
(statearr_26673_26691[(2)] = inst_26651);

(statearr_26673_26691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26664 === (5))){
var inst_26643 = (state_26663[(7)]);
var inst_26645 = figwheel.client.file_reloading.blocking_load.call(null,inst_26643);
var state_26663__$1 = state_26663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26663__$1,(8),inst_26645);
} else {
if((state_val_26664 === (10))){
var inst_26647 = (state_26663[(9)]);
var inst_26653 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26647);
var state_26663__$1 = state_26663;
var statearr_26674_26692 = state_26663__$1;
(statearr_26674_26692[(2)] = inst_26653);

(statearr_26674_26692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26664 === (8))){
var inst_26643 = (state_26663[(7)]);
var inst_26649 = (state_26663[(10)]);
var inst_26647 = (state_26663[(2)]);
var inst_26648 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26649__$1 = cljs.core.get.call(null,inst_26648,inst_26643);
var state_26663__$1 = (function (){var statearr_26675 = state_26663;
(statearr_26675[(9)] = inst_26647);

(statearr_26675[(10)] = inst_26649__$1);

return statearr_26675;
})();
if(cljs.core.truth_(inst_26649__$1)){
var statearr_26676_26693 = state_26663__$1;
(statearr_26676_26693[(1)] = (9));

} else {
var statearr_26677_26694 = state_26663__$1;
(statearr_26677_26694[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23601__auto__))
;
return ((function (switch__23489__auto__,c__23601__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23490__auto__ = null;
var figwheel$client$file_reloading$state_machine__23490__auto____0 = (function (){
var statearr_26681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26681[(0)] = figwheel$client$file_reloading$state_machine__23490__auto__);

(statearr_26681[(1)] = (1));

return statearr_26681;
});
var figwheel$client$file_reloading$state_machine__23490__auto____1 = (function (state_26663){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_26663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e26682){if((e26682 instanceof Object)){
var ex__23493__auto__ = e26682;
var statearr_26683_26695 = state_26663;
(statearr_26683_26695[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26696 = state_26663;
state_26663 = G__26696;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23490__auto__ = function(state_26663){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23490__auto____1.call(this,state_26663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23490__auto____0;
figwheel$client$file_reloading$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23490__auto____1;
return figwheel$client$file_reloading$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__))
})();
var state__23603__auto__ = (function (){var statearr_26684 = f__23602__auto__.call(null);
(statearr_26684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_26684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__))
);

return c__23601__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26697,callback){
var map__26700 = p__26697;
var map__26700__$1 = ((((!((map__26700 == null)))?((((map__26700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26700):map__26700);
var file_msg = map__26700__$1;
var namespace = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26700,map__26700__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26700,map__26700__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26702){
var map__26705 = p__26702;
var map__26705__$1 = ((((!((map__26705 == null)))?((((map__26705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26705):map__26705);
var file_msg = map__26705__$1;
var namespace = cljs.core.get.call(null,map__26705__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18426__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18426__auto__){
var or__18438__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var or__18438__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18438__auto____$1)){
return or__18438__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18426__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26707,callback){
var map__26710 = p__26707;
var map__26710__$1 = ((((!((map__26710 == null)))?((((map__26710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26710):map__26710);
var file_msg = map__26710__$1;
var request_url = cljs.core.get.call(null,map__26710__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23601__auto___26798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___26798,out){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___26798,out){
return (function (state_26780){
var state_val_26781 = (state_26780[(1)]);
if((state_val_26781 === (1))){
var inst_26758 = cljs.core.nth.call(null,files,(0),null);
var inst_26759 = cljs.core.nthnext.call(null,files,(1));
var inst_26760 = files;
var state_26780__$1 = (function (){var statearr_26782 = state_26780;
(statearr_26782[(7)] = inst_26760);

(statearr_26782[(8)] = inst_26759);

(statearr_26782[(9)] = inst_26758);

return statearr_26782;
})();
var statearr_26783_26799 = state_26780__$1;
(statearr_26783_26799[(2)] = null);

(statearr_26783_26799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (2))){
var inst_26760 = (state_26780[(7)]);
var inst_26763 = (state_26780[(10)]);
var inst_26763__$1 = cljs.core.nth.call(null,inst_26760,(0),null);
var inst_26764 = cljs.core.nthnext.call(null,inst_26760,(1));
var inst_26765 = (inst_26763__$1 == null);
var inst_26766 = cljs.core.not.call(null,inst_26765);
var state_26780__$1 = (function (){var statearr_26784 = state_26780;
(statearr_26784[(10)] = inst_26763__$1);

(statearr_26784[(11)] = inst_26764);

return statearr_26784;
})();
if(inst_26766){
var statearr_26785_26800 = state_26780__$1;
(statearr_26785_26800[(1)] = (4));

} else {
var statearr_26786_26801 = state_26780__$1;
(statearr_26786_26801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (3))){
var inst_26778 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26780__$1,inst_26778);
} else {
if((state_val_26781 === (4))){
var inst_26763 = (state_26780[(10)]);
var inst_26768 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26763);
var state_26780__$1 = state_26780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26780__$1,(7),inst_26768);
} else {
if((state_val_26781 === (5))){
var inst_26774 = cljs.core.async.close_BANG_.call(null,out);
var state_26780__$1 = state_26780;
var statearr_26787_26802 = state_26780__$1;
(statearr_26787_26802[(2)] = inst_26774);

(statearr_26787_26802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (6))){
var inst_26776 = (state_26780[(2)]);
var state_26780__$1 = state_26780;
var statearr_26788_26803 = state_26780__$1;
(statearr_26788_26803[(2)] = inst_26776);

(statearr_26788_26803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26781 === (7))){
var inst_26764 = (state_26780[(11)]);
var inst_26770 = (state_26780[(2)]);
var inst_26771 = cljs.core.async.put_BANG_.call(null,out,inst_26770);
var inst_26760 = inst_26764;
var state_26780__$1 = (function (){var statearr_26789 = state_26780;
(statearr_26789[(7)] = inst_26760);

(statearr_26789[(12)] = inst_26771);

return statearr_26789;
})();
var statearr_26790_26804 = state_26780__$1;
(statearr_26790_26804[(2)] = null);

(statearr_26790_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23601__auto___26798,out))
;
return ((function (switch__23489__auto__,c__23601__auto___26798,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto____0 = (function (){
var statearr_26794 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26794[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto__);

(statearr_26794[(1)] = (1));

return statearr_26794;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto____1 = (function (state_26780){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_26780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e26795){if((e26795 instanceof Object)){
var ex__23493__auto__ = e26795;
var statearr_26796_26805 = state_26780;
(statearr_26796_26805[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26806 = state_26780;
state_26780 = G__26806;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto__ = function(state_26780){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto____1.call(this,state_26780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___26798,out))
})();
var state__23603__auto__ = (function (){var statearr_26797 = f__23602__auto__.call(null);
(statearr_26797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___26798);

return statearr_26797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___26798,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26807,opts){
var map__26811 = p__26807;
var map__26811__$1 = ((((!((map__26811 == null)))?((((map__26811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26811):map__26811);
var eval_body__$1 = cljs.core.get.call(null,map__26811__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18426__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18426__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18426__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26813){var e = e26813;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26814_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26819){
var vec__26820 = p__26819;
var k = cljs.core.nth.call(null,vec__26820,(0),null);
var v = cljs.core.nth.call(null,vec__26820,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26821){
var vec__26822 = p__26821;
var k = cljs.core.nth.call(null,vec__26822,(0),null);
var v = cljs.core.nth.call(null,vec__26822,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26826,p__26827){
var map__27074 = p__26826;
var map__27074__$1 = ((((!((map__27074 == null)))?((((map__27074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27074):map__27074);
var opts = map__27074__$1;
var before_jsload = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27075 = p__26827;
var map__27075__$1 = ((((!((map__27075 == null)))?((((map__27075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27075):map__27075);
var msg = map__27075__$1;
var files = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27228){
var state_val_27229 = (state_27228[(1)]);
if((state_val_27229 === (7))){
var inst_27092 = (state_27228[(7)]);
var inst_27090 = (state_27228[(8)]);
var inst_27089 = (state_27228[(9)]);
var inst_27091 = (state_27228[(10)]);
var inst_27097 = cljs.core._nth.call(null,inst_27090,inst_27092);
var inst_27098 = figwheel.client.file_reloading.eval_body.call(null,inst_27097,opts);
var inst_27099 = (inst_27092 + (1));
var tmp27230 = inst_27090;
var tmp27231 = inst_27089;
var tmp27232 = inst_27091;
var inst_27089__$1 = tmp27231;
var inst_27090__$1 = tmp27230;
var inst_27091__$1 = tmp27232;
var inst_27092__$1 = inst_27099;
var state_27228__$1 = (function (){var statearr_27233 = state_27228;
(statearr_27233[(7)] = inst_27092__$1);

(statearr_27233[(11)] = inst_27098);

(statearr_27233[(8)] = inst_27090__$1);

(statearr_27233[(9)] = inst_27089__$1);

(statearr_27233[(10)] = inst_27091__$1);

return statearr_27233;
})();
var statearr_27234_27320 = state_27228__$1;
(statearr_27234_27320[(2)] = null);

(statearr_27234_27320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (20))){
var inst_27132 = (state_27228[(12)]);
var inst_27140 = figwheel.client.file_reloading.sort_files.call(null,inst_27132);
var state_27228__$1 = state_27228;
var statearr_27235_27321 = state_27228__$1;
(statearr_27235_27321[(2)] = inst_27140);

(statearr_27235_27321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (27))){
var state_27228__$1 = state_27228;
var statearr_27236_27322 = state_27228__$1;
(statearr_27236_27322[(2)] = null);

(statearr_27236_27322[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (1))){
var inst_27081 = (state_27228[(13)]);
var inst_27078 = before_jsload.call(null,files);
var inst_27079 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27080 = (function (){return ((function (inst_27081,inst_27078,inst_27079,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26823_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26823_SHARP_);
});
;})(inst_27081,inst_27078,inst_27079,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27081__$1 = cljs.core.filter.call(null,inst_27080,files);
var inst_27082 = cljs.core.not_empty.call(null,inst_27081__$1);
var state_27228__$1 = (function (){var statearr_27237 = state_27228;
(statearr_27237[(13)] = inst_27081__$1);

(statearr_27237[(14)] = inst_27079);

(statearr_27237[(15)] = inst_27078);

return statearr_27237;
})();
if(cljs.core.truth_(inst_27082)){
var statearr_27238_27323 = state_27228__$1;
(statearr_27238_27323[(1)] = (2));

} else {
var statearr_27239_27324 = state_27228__$1;
(statearr_27239_27324[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (24))){
var state_27228__$1 = state_27228;
var statearr_27240_27325 = state_27228__$1;
(statearr_27240_27325[(2)] = null);

(statearr_27240_27325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (39))){
var inst_27182 = (state_27228[(16)]);
var state_27228__$1 = state_27228;
var statearr_27241_27326 = state_27228__$1;
(statearr_27241_27326[(2)] = inst_27182);

(statearr_27241_27326[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (46))){
var inst_27223 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27242_27327 = state_27228__$1;
(statearr_27242_27327[(2)] = inst_27223);

(statearr_27242_27327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (4))){
var inst_27126 = (state_27228[(2)]);
var inst_27127 = cljs.core.List.EMPTY;
var inst_27128 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27127);
var inst_27129 = (function (){return ((function (inst_27126,inst_27127,inst_27128,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26824_SHARP_){
var and__18426__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26824_SHARP_);
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26824_SHARP_));
} else {
return and__18426__auto__;
}
});
;})(inst_27126,inst_27127,inst_27128,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27130 = cljs.core.filter.call(null,inst_27129,files);
var inst_27131 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27132 = cljs.core.concat.call(null,inst_27130,inst_27131);
var state_27228__$1 = (function (){var statearr_27243 = state_27228;
(statearr_27243[(12)] = inst_27132);

(statearr_27243[(17)] = inst_27126);

(statearr_27243[(18)] = inst_27128);

return statearr_27243;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27244_27328 = state_27228__$1;
(statearr_27244_27328[(1)] = (16));

} else {
var statearr_27245_27329 = state_27228__$1;
(statearr_27245_27329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (15))){
var inst_27116 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27246_27330 = state_27228__$1;
(statearr_27246_27330[(2)] = inst_27116);

(statearr_27246_27330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (21))){
var inst_27142 = (state_27228[(19)]);
var inst_27142__$1 = (state_27228[(2)]);
var inst_27143 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27142__$1);
var state_27228__$1 = (function (){var statearr_27247 = state_27228;
(statearr_27247[(19)] = inst_27142__$1);

return statearr_27247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27228__$1,(22),inst_27143);
} else {
if((state_val_27229 === (31))){
var inst_27226 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27228__$1,inst_27226);
} else {
if((state_val_27229 === (32))){
var inst_27182 = (state_27228[(16)]);
var inst_27187 = inst_27182.cljs$lang$protocol_mask$partition0$;
var inst_27188 = (inst_27187 & (64));
var inst_27189 = inst_27182.cljs$core$ISeq$;
var inst_27190 = (inst_27188) || (inst_27189);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27190)){
var statearr_27248_27331 = state_27228__$1;
(statearr_27248_27331[(1)] = (35));

} else {
var statearr_27249_27332 = state_27228__$1;
(statearr_27249_27332[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (40))){
var inst_27203 = (state_27228[(20)]);
var inst_27202 = (state_27228[(2)]);
var inst_27203__$1 = cljs.core.get.call(null,inst_27202,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27204 = cljs.core.get.call(null,inst_27202,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27205 = cljs.core.not_empty.call(null,inst_27203__$1);
var state_27228__$1 = (function (){var statearr_27250 = state_27228;
(statearr_27250[(20)] = inst_27203__$1);

(statearr_27250[(21)] = inst_27204);

return statearr_27250;
})();
if(cljs.core.truth_(inst_27205)){
var statearr_27251_27333 = state_27228__$1;
(statearr_27251_27333[(1)] = (41));

} else {
var statearr_27252_27334 = state_27228__$1;
(statearr_27252_27334[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (33))){
var state_27228__$1 = state_27228;
var statearr_27253_27335 = state_27228__$1;
(statearr_27253_27335[(2)] = false);

(statearr_27253_27335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (13))){
var inst_27102 = (state_27228[(22)]);
var inst_27106 = cljs.core.chunk_first.call(null,inst_27102);
var inst_27107 = cljs.core.chunk_rest.call(null,inst_27102);
var inst_27108 = cljs.core.count.call(null,inst_27106);
var inst_27089 = inst_27107;
var inst_27090 = inst_27106;
var inst_27091 = inst_27108;
var inst_27092 = (0);
var state_27228__$1 = (function (){var statearr_27254 = state_27228;
(statearr_27254[(7)] = inst_27092);

(statearr_27254[(8)] = inst_27090);

(statearr_27254[(9)] = inst_27089);

(statearr_27254[(10)] = inst_27091);

return statearr_27254;
})();
var statearr_27255_27336 = state_27228__$1;
(statearr_27255_27336[(2)] = null);

(statearr_27255_27336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (22))){
var inst_27142 = (state_27228[(19)]);
var inst_27146 = (state_27228[(23)]);
var inst_27145 = (state_27228[(24)]);
var inst_27150 = (state_27228[(25)]);
var inst_27145__$1 = (state_27228[(2)]);
var inst_27146__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27145__$1);
var inst_27147 = (function (){var all_files = inst_27142;
var res_SINGLEQUOTE_ = inst_27145__$1;
var res = inst_27146__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27142,inst_27146,inst_27145,inst_27150,inst_27145__$1,inst_27146__$1,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26825_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26825_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27142,inst_27146,inst_27145,inst_27150,inst_27145__$1,inst_27146__$1,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27148 = cljs.core.filter.call(null,inst_27147,inst_27145__$1);
var inst_27149 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27150__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27149);
var inst_27151 = cljs.core.not_empty.call(null,inst_27150__$1);
var state_27228__$1 = (function (){var statearr_27256 = state_27228;
(statearr_27256[(26)] = inst_27148);

(statearr_27256[(23)] = inst_27146__$1);

(statearr_27256[(24)] = inst_27145__$1);

(statearr_27256[(25)] = inst_27150__$1);

return statearr_27256;
})();
if(cljs.core.truth_(inst_27151)){
var statearr_27257_27337 = state_27228__$1;
(statearr_27257_27337[(1)] = (23));

} else {
var statearr_27258_27338 = state_27228__$1;
(statearr_27258_27338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (36))){
var state_27228__$1 = state_27228;
var statearr_27259_27339 = state_27228__$1;
(statearr_27259_27339[(2)] = false);

(statearr_27259_27339[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (41))){
var inst_27203 = (state_27228[(20)]);
var inst_27207 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27208 = cljs.core.map.call(null,inst_27207,inst_27203);
var inst_27209 = cljs.core.pr_str.call(null,inst_27208);
var inst_27210 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27209)].join('');
var inst_27211 = figwheel.client.utils.log.call(null,inst_27210);
var state_27228__$1 = state_27228;
var statearr_27260_27340 = state_27228__$1;
(statearr_27260_27340[(2)] = inst_27211);

(statearr_27260_27340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (43))){
var inst_27204 = (state_27228[(21)]);
var inst_27214 = (state_27228[(2)]);
var inst_27215 = cljs.core.not_empty.call(null,inst_27204);
var state_27228__$1 = (function (){var statearr_27261 = state_27228;
(statearr_27261[(27)] = inst_27214);

return statearr_27261;
})();
if(cljs.core.truth_(inst_27215)){
var statearr_27262_27341 = state_27228__$1;
(statearr_27262_27341[(1)] = (44));

} else {
var statearr_27263_27342 = state_27228__$1;
(statearr_27263_27342[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (29))){
var inst_27182 = (state_27228[(16)]);
var inst_27148 = (state_27228[(26)]);
var inst_27142 = (state_27228[(19)]);
var inst_27146 = (state_27228[(23)]);
var inst_27145 = (state_27228[(24)]);
var inst_27150 = (state_27228[(25)]);
var inst_27178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27181 = (function (){var all_files = inst_27142;
var res_SINGLEQUOTE_ = inst_27145;
var res = inst_27146;
var files_not_loaded = inst_27148;
var dependencies_that_loaded = inst_27150;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27182,inst_27148,inst_27142,inst_27146,inst_27145,inst_27150,inst_27178,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27180){
var map__27264 = p__27180;
var map__27264__$1 = ((((!((map__27264 == null)))?((((map__27264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27264):map__27264);
var namespace = cljs.core.get.call(null,map__27264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27182,inst_27148,inst_27142,inst_27146,inst_27145,inst_27150,inst_27178,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27182__$1 = cljs.core.group_by.call(null,inst_27181,inst_27148);
var inst_27184 = (inst_27182__$1 == null);
var inst_27185 = cljs.core.not.call(null,inst_27184);
var state_27228__$1 = (function (){var statearr_27266 = state_27228;
(statearr_27266[(16)] = inst_27182__$1);

(statearr_27266[(28)] = inst_27178);

return statearr_27266;
})();
if(inst_27185){
var statearr_27267_27343 = state_27228__$1;
(statearr_27267_27343[(1)] = (32));

} else {
var statearr_27268_27344 = state_27228__$1;
(statearr_27268_27344[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (44))){
var inst_27204 = (state_27228[(21)]);
var inst_27217 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27204);
var inst_27218 = cljs.core.pr_str.call(null,inst_27217);
var inst_27219 = [cljs.core.str("not required: "),cljs.core.str(inst_27218)].join('');
var inst_27220 = figwheel.client.utils.log.call(null,inst_27219);
var state_27228__$1 = state_27228;
var statearr_27269_27345 = state_27228__$1;
(statearr_27269_27345[(2)] = inst_27220);

(statearr_27269_27345[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (6))){
var inst_27123 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27270_27346 = state_27228__$1;
(statearr_27270_27346[(2)] = inst_27123);

(statearr_27270_27346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (28))){
var inst_27148 = (state_27228[(26)]);
var inst_27175 = (state_27228[(2)]);
var inst_27176 = cljs.core.not_empty.call(null,inst_27148);
var state_27228__$1 = (function (){var statearr_27271 = state_27228;
(statearr_27271[(29)] = inst_27175);

return statearr_27271;
})();
if(cljs.core.truth_(inst_27176)){
var statearr_27272_27347 = state_27228__$1;
(statearr_27272_27347[(1)] = (29));

} else {
var statearr_27273_27348 = state_27228__$1;
(statearr_27273_27348[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (25))){
var inst_27146 = (state_27228[(23)]);
var inst_27162 = (state_27228[(2)]);
var inst_27163 = cljs.core.not_empty.call(null,inst_27146);
var state_27228__$1 = (function (){var statearr_27274 = state_27228;
(statearr_27274[(30)] = inst_27162);

return statearr_27274;
})();
if(cljs.core.truth_(inst_27163)){
var statearr_27275_27349 = state_27228__$1;
(statearr_27275_27349[(1)] = (26));

} else {
var statearr_27276_27350 = state_27228__$1;
(statearr_27276_27350[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (34))){
var inst_27197 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27197)){
var statearr_27277_27351 = state_27228__$1;
(statearr_27277_27351[(1)] = (38));

} else {
var statearr_27278_27352 = state_27228__$1;
(statearr_27278_27352[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (17))){
var state_27228__$1 = state_27228;
var statearr_27279_27353 = state_27228__$1;
(statearr_27279_27353[(2)] = recompile_dependents);

(statearr_27279_27353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (3))){
var state_27228__$1 = state_27228;
var statearr_27280_27354 = state_27228__$1;
(statearr_27280_27354[(2)] = null);

(statearr_27280_27354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (12))){
var inst_27119 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27281_27355 = state_27228__$1;
(statearr_27281_27355[(2)] = inst_27119);

(statearr_27281_27355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (2))){
var inst_27081 = (state_27228[(13)]);
var inst_27088 = cljs.core.seq.call(null,inst_27081);
var inst_27089 = inst_27088;
var inst_27090 = null;
var inst_27091 = (0);
var inst_27092 = (0);
var state_27228__$1 = (function (){var statearr_27282 = state_27228;
(statearr_27282[(7)] = inst_27092);

(statearr_27282[(8)] = inst_27090);

(statearr_27282[(9)] = inst_27089);

(statearr_27282[(10)] = inst_27091);

return statearr_27282;
})();
var statearr_27283_27356 = state_27228__$1;
(statearr_27283_27356[(2)] = null);

(statearr_27283_27356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (23))){
var inst_27148 = (state_27228[(26)]);
var inst_27142 = (state_27228[(19)]);
var inst_27146 = (state_27228[(23)]);
var inst_27145 = (state_27228[(24)]);
var inst_27150 = (state_27228[(25)]);
var inst_27153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27155 = (function (){var all_files = inst_27142;
var res_SINGLEQUOTE_ = inst_27145;
var res = inst_27146;
var files_not_loaded = inst_27148;
var dependencies_that_loaded = inst_27150;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27142,inst_27146,inst_27145,inst_27150,inst_27153,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27154){
var map__27284 = p__27154;
var map__27284__$1 = ((((!((map__27284 == null)))?((((map__27284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27284):map__27284);
var request_url = cljs.core.get.call(null,map__27284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27142,inst_27146,inst_27145,inst_27150,inst_27153,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27156 = cljs.core.reverse.call(null,inst_27150);
var inst_27157 = cljs.core.map.call(null,inst_27155,inst_27156);
var inst_27158 = cljs.core.pr_str.call(null,inst_27157);
var inst_27159 = figwheel.client.utils.log.call(null,inst_27158);
var state_27228__$1 = (function (){var statearr_27286 = state_27228;
(statearr_27286[(31)] = inst_27153);

return statearr_27286;
})();
var statearr_27287_27357 = state_27228__$1;
(statearr_27287_27357[(2)] = inst_27159);

(statearr_27287_27357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (35))){
var state_27228__$1 = state_27228;
var statearr_27288_27358 = state_27228__$1;
(statearr_27288_27358[(2)] = true);

(statearr_27288_27358[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (19))){
var inst_27132 = (state_27228[(12)]);
var inst_27138 = figwheel.client.file_reloading.expand_files.call(null,inst_27132);
var state_27228__$1 = state_27228;
var statearr_27289_27359 = state_27228__$1;
(statearr_27289_27359[(2)] = inst_27138);

(statearr_27289_27359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (11))){
var state_27228__$1 = state_27228;
var statearr_27290_27360 = state_27228__$1;
(statearr_27290_27360[(2)] = null);

(statearr_27290_27360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (9))){
var inst_27121 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27291_27361 = state_27228__$1;
(statearr_27291_27361[(2)] = inst_27121);

(statearr_27291_27361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (5))){
var inst_27092 = (state_27228[(7)]);
var inst_27091 = (state_27228[(10)]);
var inst_27094 = (inst_27092 < inst_27091);
var inst_27095 = inst_27094;
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27095)){
var statearr_27292_27362 = state_27228__$1;
(statearr_27292_27362[(1)] = (7));

} else {
var statearr_27293_27363 = state_27228__$1;
(statearr_27293_27363[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (14))){
var inst_27102 = (state_27228[(22)]);
var inst_27111 = cljs.core.first.call(null,inst_27102);
var inst_27112 = figwheel.client.file_reloading.eval_body.call(null,inst_27111,opts);
var inst_27113 = cljs.core.next.call(null,inst_27102);
var inst_27089 = inst_27113;
var inst_27090 = null;
var inst_27091 = (0);
var inst_27092 = (0);
var state_27228__$1 = (function (){var statearr_27294 = state_27228;
(statearr_27294[(7)] = inst_27092);

(statearr_27294[(32)] = inst_27112);

(statearr_27294[(8)] = inst_27090);

(statearr_27294[(9)] = inst_27089);

(statearr_27294[(10)] = inst_27091);

return statearr_27294;
})();
var statearr_27295_27364 = state_27228__$1;
(statearr_27295_27364[(2)] = null);

(statearr_27295_27364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (45))){
var state_27228__$1 = state_27228;
var statearr_27296_27365 = state_27228__$1;
(statearr_27296_27365[(2)] = null);

(statearr_27296_27365[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (26))){
var inst_27148 = (state_27228[(26)]);
var inst_27142 = (state_27228[(19)]);
var inst_27146 = (state_27228[(23)]);
var inst_27145 = (state_27228[(24)]);
var inst_27150 = (state_27228[(25)]);
var inst_27165 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27167 = (function (){var all_files = inst_27142;
var res_SINGLEQUOTE_ = inst_27145;
var res = inst_27146;
var files_not_loaded = inst_27148;
var dependencies_that_loaded = inst_27150;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27142,inst_27146,inst_27145,inst_27150,inst_27165,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27166){
var map__27297 = p__27166;
var map__27297__$1 = ((((!((map__27297 == null)))?((((map__27297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27297):map__27297);
var namespace = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27142,inst_27146,inst_27145,inst_27150,inst_27165,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27168 = cljs.core.map.call(null,inst_27167,inst_27146);
var inst_27169 = cljs.core.pr_str.call(null,inst_27168);
var inst_27170 = figwheel.client.utils.log.call(null,inst_27169);
var inst_27171 = (function (){var all_files = inst_27142;
var res_SINGLEQUOTE_ = inst_27145;
var res = inst_27146;
var files_not_loaded = inst_27148;
var dependencies_that_loaded = inst_27150;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27142,inst_27146,inst_27145,inst_27150,inst_27165,inst_27167,inst_27168,inst_27169,inst_27170,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27148,inst_27142,inst_27146,inst_27145,inst_27150,inst_27165,inst_27167,inst_27168,inst_27169,inst_27170,state_val_27229,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27172 = setTimeout(inst_27171,(10));
var state_27228__$1 = (function (){var statearr_27299 = state_27228;
(statearr_27299[(33)] = inst_27165);

(statearr_27299[(34)] = inst_27170);

return statearr_27299;
})();
var statearr_27300_27366 = state_27228__$1;
(statearr_27300_27366[(2)] = inst_27172);

(statearr_27300_27366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (16))){
var state_27228__$1 = state_27228;
var statearr_27301_27367 = state_27228__$1;
(statearr_27301_27367[(2)] = reload_dependents);

(statearr_27301_27367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (38))){
var inst_27182 = (state_27228[(16)]);
var inst_27199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27182);
var state_27228__$1 = state_27228;
var statearr_27302_27368 = state_27228__$1;
(statearr_27302_27368[(2)] = inst_27199);

(statearr_27302_27368[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (30))){
var state_27228__$1 = state_27228;
var statearr_27303_27369 = state_27228__$1;
(statearr_27303_27369[(2)] = null);

(statearr_27303_27369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (10))){
var inst_27102 = (state_27228[(22)]);
var inst_27104 = cljs.core.chunked_seq_QMARK_.call(null,inst_27102);
var state_27228__$1 = state_27228;
if(inst_27104){
var statearr_27304_27370 = state_27228__$1;
(statearr_27304_27370[(1)] = (13));

} else {
var statearr_27305_27371 = state_27228__$1;
(statearr_27305_27371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (18))){
var inst_27136 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
if(cljs.core.truth_(inst_27136)){
var statearr_27306_27372 = state_27228__$1;
(statearr_27306_27372[(1)] = (19));

} else {
var statearr_27307_27373 = state_27228__$1;
(statearr_27307_27373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (42))){
var state_27228__$1 = state_27228;
var statearr_27308_27374 = state_27228__$1;
(statearr_27308_27374[(2)] = null);

(statearr_27308_27374[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (37))){
var inst_27194 = (state_27228[(2)]);
var state_27228__$1 = state_27228;
var statearr_27309_27375 = state_27228__$1;
(statearr_27309_27375[(2)] = inst_27194);

(statearr_27309_27375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27229 === (8))){
var inst_27102 = (state_27228[(22)]);
var inst_27089 = (state_27228[(9)]);
var inst_27102__$1 = cljs.core.seq.call(null,inst_27089);
var state_27228__$1 = (function (){var statearr_27310 = state_27228;
(statearr_27310[(22)] = inst_27102__$1);

return statearr_27310;
})();
if(inst_27102__$1){
var statearr_27311_27376 = state_27228__$1;
(statearr_27311_27376[(1)] = (10));

} else {
var statearr_27312_27377 = state_27228__$1;
(statearr_27312_27377[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23489__auto__,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto____0 = (function (){
var statearr_27316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27316[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto__);

(statearr_27316[(1)] = (1));

return statearr_27316;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto____1 = (function (state_27228){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_27228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e27317){if((e27317 instanceof Object)){
var ex__23493__auto__ = e27317;
var statearr_27318_27378 = state_27228;
(statearr_27318_27378[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27379 = state_27228;
state_27228 = G__27379;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto__ = function(state_27228){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto____1.call(this,state_27228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23603__auto__ = (function (){var statearr_27319 = f__23602__auto__.call(null);
(statearr_27319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__,map__27074,map__27074__$1,opts,before_jsload,on_jsload,reload_dependents,map__27075,map__27075__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23601__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27382,link){
var map__27385 = p__27382;
var map__27385__$1 = ((((!((map__27385 == null)))?((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var file = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27385,map__27385__$1,file){
return (function (p1__27380_SHARP_,p2__27381_SHARP_){
if(cljs.core._EQ_.call(null,p1__27380_SHARP_,p2__27381_SHARP_)){
return p1__27380_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27385,map__27385__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27391){
var map__27392 = p__27391;
var map__27392__$1 = ((((!((map__27392 == null)))?((((map__27392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27392):map__27392);
var match_length = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27392__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27387_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27387_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27394 = [];
var len__19507__auto___27397 = arguments.length;
var i__19508__auto___27398 = (0);
while(true){
if((i__19508__auto___27398 < len__19507__auto___27397)){
args27394.push((arguments[i__19508__auto___27398]));

var G__27399 = (i__19508__auto___27398 + (1));
i__19508__auto___27398 = G__27399;
continue;
} else {
}
break;
}

var G__27396 = args27394.length;
switch (G__27396) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27394.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27401_SHARP_,p2__27402_SHARP_){
return cljs.core.assoc.call(null,p1__27401_SHARP_,cljs.core.get.call(null,p2__27402_SHARP_,key),p2__27402_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27403){
var map__27406 = p__27403;
var map__27406__$1 = ((((!((map__27406 == null)))?((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var f_data = map__27406__$1;
var file = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27408,files_msg){
var map__27415 = p__27408;
var map__27415__$1 = ((((!((map__27415 == null)))?((((map__27415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var opts = map__27415__$1;
var on_cssload = cljs.core.get.call(null,map__27415__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27417_27421 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27418_27422 = null;
var count__27419_27423 = (0);
var i__27420_27424 = (0);
while(true){
if((i__27420_27424 < count__27419_27423)){
var f_27425 = cljs.core._nth.call(null,chunk__27418_27422,i__27420_27424);
figwheel.client.file_reloading.reload_css_file.call(null,f_27425);

var G__27426 = seq__27417_27421;
var G__27427 = chunk__27418_27422;
var G__27428 = count__27419_27423;
var G__27429 = (i__27420_27424 + (1));
seq__27417_27421 = G__27426;
chunk__27418_27422 = G__27427;
count__27419_27423 = G__27428;
i__27420_27424 = G__27429;
continue;
} else {
var temp__4657__auto___27430 = cljs.core.seq.call(null,seq__27417_27421);
if(temp__4657__auto___27430){
var seq__27417_27431__$1 = temp__4657__auto___27430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27417_27431__$1)){
var c__19249__auto___27432 = cljs.core.chunk_first.call(null,seq__27417_27431__$1);
var G__27433 = cljs.core.chunk_rest.call(null,seq__27417_27431__$1);
var G__27434 = c__19249__auto___27432;
var G__27435 = cljs.core.count.call(null,c__19249__auto___27432);
var G__27436 = (0);
seq__27417_27421 = G__27433;
chunk__27418_27422 = G__27434;
count__27419_27423 = G__27435;
i__27420_27424 = G__27436;
continue;
} else {
var f_27437 = cljs.core.first.call(null,seq__27417_27431__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27437);

var G__27438 = cljs.core.next.call(null,seq__27417_27431__$1);
var G__27439 = null;
var G__27440 = (0);
var G__27441 = (0);
seq__27417_27421 = G__27438;
chunk__27418_27422 = G__27439;
count__27419_27423 = G__27440;
i__27420_27424 = G__27441;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27415,map__27415__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27415,map__27415__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1466146183864