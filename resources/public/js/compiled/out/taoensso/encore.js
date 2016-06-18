// Compiled by ClojureScript 1.8.34 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('cljs.tools.reader.edn');
goog.require('taoensso.truss');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(36),(2)], null);
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__21376 = taoensso.encore.encore_version;
var xc = cljs.core.nth.call(null,vec__21376,(0),null);
var yc = cljs.core.nth.call(null,vec__21376,(1),null);
var zc = cljs.core.nth.call(null,vec__21376,(2),null);
var vec__21377 = ((cljs.core.vector_QMARK_.call(null,min_version))?min_version:cljs.core.re_seq.call(null,/\d+/,[cljs.core.str(min_version)].join('')));
var xm = cljs.core.nth.call(null,vec__21377,(0),null);
var ym = cljs.core.nth.call(null,vec__21377,(1),null);
var zm = cljs.core.nth.call(null,vec__21377,(2),null);
var vec__21378 = cljs.core.mapv.call(null,((function (vec__21376,xc,yc,zc,vec__21377,xm,ym,zm){
return (function (p1__21372_SHARP_){
var or__18438__auto__ = taoensso.encore.as__QMARK_int.call(null,p1__21372_SHARP_);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return (0);
}
});})(vec__21376,xc,yc,zc,vec__21377,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.call(null,vec__21378,(0),null);
var ym__$1 = cljs.core.nth.call(null,vec__21378,(1),null);
var zm__$1 = cljs.core.nth.call(null,vec__21378,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.call(null,xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.call(null,yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Insufficient com.taoensso/encore version. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 *   Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__21381 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__21381,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__21381,(1),null);
var vec__21382 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__21382,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__21382,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.get_dynamic_assertion_data = (function taoensso$encore$get_dynamic_assertion_data(){
return taoensso.truss.get_dynamic_assertion_data.call(null);
});

/**
 * Experimental. Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a bit of a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args21383 = [];
var len__19507__auto___21386 = arguments.length;
var i__19508__auto___21387 = (0);
while(true){
if((i__19508__auto___21387 < len__19507__auto___21386)){
args21383.push((arguments[i__19508__auto___21387]));

var G__21388 = (i__19508__auto___21387 + (1));
i__19508__auto___21387 = G__21388;
continue;
} else {
}
break;
}

var G__21385 = args21383.length;
switch (G__21385) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21383.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.call(null,null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(!(typeof s === 'string')){
throw cljs.core.ex_info.call(null,"`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,s)], null));
} else {
var readers = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,readers,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?readers:taoensso.encore.map_keys.call(null,cljs.core.symbol,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)));
var default$__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,default$,new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399))))?default$:cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_));
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], null));
return cljs.tools.reader.edn.read_string.call(null,opts__$1,s);
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args21390 = [];
var len__19507__auto___21395 = arguments.length;
var i__19508__auto___21396 = (0);
while(true){
if((i__19508__auto___21396 < len__19507__auto___21395)){
args21390.push((arguments[i__19508__auto___21396]));

var G__21397 = (i__19508__auto___21396 + (1));
i__19508__auto___21396 = G__21397;
continue;
} else {
}
break;
}

var G__21392 = args21390.length;
switch (G__21392) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21390.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.call(null,null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_21393 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_21394 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.call(null,x);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_21394;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_21393;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4657__auto__ = (function (){var or__18438__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var data_map = temp__4657__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});
taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_.call(null,x)) || (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,taoensso.encore.set_STAR_.call(null,x))));
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_.call(null,x)){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(cljs.core.truth_(taoensso.encore.named_QMARK_.call(null,x))){
var n = cljs.core.name.call(null,x);
var temp__4655__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var ns = temp__4655__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find.call(null,/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim.call(null,_QMARK_s));
} else {
return null;
}
});
taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var temp__4657__auto__ = taoensso.encore.as__QMARK_email.call(null,_QMARK_s);
if(cljs.core.truth_(temp__4657__auto__)){
var email = temp__4657__auto__;
return clojure.string.lower_case.call(null,email);
} else {
return null;
}
});
taoensso.encore._QMARK_as_throw = (function taoensso$encore$_QMARK_as_throw(as_name,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("nil as-?"),cljs.core.str(cljs.core.name.call(null,as_name)),cljs.core.str(" against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
});
taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__18438__auto__ = taoensso.encore.as__QMARK_nblank.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});
taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__18438__auto__ = taoensso.encore.as__QMARK_kw.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});
taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__18438__auto__ = taoensso.encore.as__QMARK_name.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});
taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__18438__auto__ = taoensso.encore.as__QMARK_qname.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool.call(null,x);
if(!((_QMARK_b == null))){
return _QMARK_b;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"bool","bool",1444635321),x);
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__18438__auto__ = taoensso.encore.as__QMARK_int.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__18438__auto__ = taoensso.encore.as__QMARK_float.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});
taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__18438__auto__ = taoensso.encore.as__QMARK_email.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});
taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__18438__auto__ = taoensso.encore.as__QMARK_nemail.call(null,x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore._QMARK_as_throw.call(null,new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args21403 = [];
var len__19507__auto___21409 = arguments.length;
var i__19508__auto___21410 = (0);
while(true){
if((i__19508__auto___21410 < len__19507__auto___21409)){
args21403.push((arguments[i__19508__auto___21410]));

var G__21411 = (i__19508__auto___21410 + (1));
i__19508__auto___21410 = G__21411;
continue;
} else {
}
break;
}

var G__21408 = args21403.length;
switch (G__21408) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19526__auto__ = (new cljs.core.IndexedSeq(args21403.slice((2)),(0),null));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19526__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__18426__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__18426__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__18426__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__18426__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq21404){
var G__21405 = cljs.core.first.call(null,seq21404);
var seq21404__$1 = cljs.core.next.call(null,seq21404);
var G__21406 = cljs.core.first.call(null,seq21404__$1);
var seq21404__$2 = cljs.core.next.call(null,seq21404__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21405,G__21406,seq21404__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta.call(null,x))){
return cljs.core.with_meta.call(null,x,null);
} else {
return x;
}
});
/**
 * Like `name` but includes keyword namespaces in name string
 */
taoensso.encore.qname = taoensso.encore.as_qname;
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.qname.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21417 = arguments.length;
var i__19508__auto___21418 = (0);
while(true){
if((i__19508__auto___21418 < len__19507__auto___21417)){
args__19514__auto__.push((arguments[i__19508__auto___21418]));

var G__21419 = (i__19508__auto___21418 + (1));
i__19508__auto___21418 = G__21419;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__21415){
var vec__21416 = p__21415;
var no_slash_QMARK_ = cljs.core.nth.call(null,vec__21416,(0),null);
var parts = cljs.core.reduce.call(null,((function (vec__21416,no_slash_QMARK_){
return (function (acc,in$){
if(cljs.core.truth_(in$)){
return cljs.core.into.call(null,acc,taoensso.encore.explode_keyword.call(null,in$));
} else {
return acc;
}
});})(vec__21416,no_slash_QMARK_))
,cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(no_slash_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq21413){
var G__21414 = cljs.core.first.call(null,seq21413);
var seq21413__$1 = cljs.core.next.call(null,seq21413);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__21414,seq21413__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args21420 = [];
var len__19507__auto___21424 = arguments.length;
var i__19508__auto___21425 = (0);
while(true){
if((i__19508__auto___21425 < len__19507__auto___21424)){
args21420.push((arguments[i__19508__auto___21425]));

var G__21426 = (i__19508__auto___21425 + (1));
i__19508__auto___21425 = G__21426;
continue;
} else {
}
break;
}

var G__21422 = args21420.length;
switch (G__21422) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21420.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.call(null,new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.call(null,type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__21423 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21423) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;
taoensso.encore.round0 = (function taoensso$encore$round0(n){
return Math.round(n);
});
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21435 = arguments.length;
var i__19508__auto___21436 = (0);
while(true){
if((i__19508__auto___21436 < len__19507__auto___21435)){
args__19514__auto__.push((arguments[i__19508__auto___21436]));

var G__21437 = (i__19508__auto___21436 + (1));
i__19508__auto___21436 = G__21437;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__21431){
var vec__21432 = p__21431;
var map__21433 = cljs.core.nth.call(null,vec__21432,(0),null);
var map__21433__$1 = ((((!((map__21433 == null)))?((((map__21433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21433):map__21433);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__21433__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__21433__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__21433__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__18769__auto__ = cljs.core.long$.call(null,min_SINGLEQUOTE_);
var y__18770__auto__ = cljs.core.long$.call(null,time);
return ((x__18769__auto__ > y__18770__auto__) ? x__18769__auto__ : y__18770__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__18776__auto__ = cljs.core.long$.call(null,max_SINGLEQUOTE_);
var y__18777__auto__ = cljs.core.long$.call(null,time__$1);
return ((x__18776__auto__ < y__18777__auto__) ? x__18776__auto__ : y__18777__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq21429){
var G__21430 = cljs.core.first.call(null,seq21429);
var seq21429__$1 = cljs.core.next.call(null,seq21429);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__21430,seq21429__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$.call(null,secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,cljs.core.long$.call(null,ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21455 = arguments.length;
var i__19508__auto___21456 = (0);
while(true){
if((i__19508__auto___21456 < len__19507__auto___21455)){
args__19514__auto__.push((arguments[i__19508__auto___21456]));

var G__21457 = (i__19508__auto___21456 + (1));
i__19508__auto___21456 = G__21457;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__21451){
var map__21452 = p__21451;
var map__21452__$1 = ((((!((map__21452 == null)))?((((map__21452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21452):map__21452);
var opts = map__21452__$1;
var years = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__21452__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__21452,map__21452__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
var __x = __in;
try{if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null).call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21454){if((e21454 instanceof Error)){
var __t = e21454;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__x,__t,null);
} else {
throw e21454;

}
}});})(map__21452,map__21452__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error("Assert failed: (have #{:msecs :secs :months :days :mins :hours :years :ms :weeks} :in (keys opts))"));
}

return taoensso.encore.round_STAR_.call(null,(((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq21450){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21450));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
/**
 * Like `aget` for JS objects, Ref. https://goo.gl/eze8hY.
 *   Unlike `aget`, returns nil for missing keys instead of throwing.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args21462 = [];
var len__19507__auto___21469 = arguments.length;
var i__19508__auto___21470 = (0);
while(true){
if((i__19508__auto___21470 < len__19507__auto___21469)){
args21462.push((arguments[i__19508__auto___21470]));

var G__21471 = (i__19508__auto___21470 + (1));
i__19508__auto___21470 = G__21471;
continue;
} else {
}
break;
}

var G__21468 = args21462.length;
switch (G__21468) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19526__auto__ = (new cljs.core.IndexedSeq(args21462.slice((3)),(0),null));
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19526__auto__);

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
if(cljs.core.truth_(o)){
return goog.object.get(o,k,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k1,k2){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return goog.object.get(o__$1,k2,null);
} else {
return null;
}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic = (function (o,k1,k2,ks){
var temp__4657__auto__ = taoensso.encore.oget.call(null,o,k1,k2);
if(cljs.core.truth_(temp__4657__auto__)){
var o__$1 = temp__4657__auto__;
return cljs.core.apply.call(null,taoensso.encore.oget,o__$1,ks);
} else {
return null;
}
});

taoensso.encore.oget.cljs$lang$applyTo = (function (seq21463){
var G__21464 = cljs.core.first.call(null,seq21463);
var seq21463__$1 = cljs.core.next.call(null,seq21463);
var G__21465 = cljs.core.first.call(null,seq21463__$1);
var seq21463__$2 = cljs.core.next.call(null,seq21463__$1);
var G__21466 = cljs.core.first.call(null,seq21463__$2);
var seq21463__$3 = cljs.core.next.call(null,seq21463__$2);
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$variadic(G__21464,G__21465,G__21466,seq21463__$3);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = (3);
taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_.call(null,coll)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),(1));
} else {
return cljs.core.not.call(null,cljs.core.next.call(null,coll));
}
});
taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_.call(null,coll))){
var vec__21474 = coll;
var c1 = cljs.core.nth.call(null,vec__21474,(0),null);
return c1;
} else {
return null;
}
});
taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.vec.call(null,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count.call(null,v) > (1))){
return cljs.core.subvec.call(null,v,(1));
} else {
return null;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop.call(null,v):null),cljs.core.peek.call(null,v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count.call(null,v);
if((c > (0))){
var vec__21476 = v;
var v1 = cljs.core.nth.call(null,vec__21476,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.call(null,v,(1)):null)], null);
} else {
return null;
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args21477 = [];
var len__19507__auto___21483 = arguments.length;
var i__19508__auto___21484 = (0);
while(true){
if((i__19508__auto___21484 < len__19507__auto___21483)){
args21477.push((arguments[i__19508__auto___21484]));

var G__21485 = (i__19508__auto___21484 + (1));
i__19508__auto___21484 = G__21485;
continue;
} else {
}
break;
}

var G__21482 = args21477.length;
switch (G__21482) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19526__auto__ = (new cljs.core.IndexedSeq(args21477.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19526__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,_QMARK_x,_QMARK_xs){
return cljs.core.reduce.call(null,taoensso.encore.conj_some,taoensso.encore.conj_some.call(null,coll,_QMARK_x),_QMARK_xs);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq21478){
var G__21479 = cljs.core.first.call(null,seq21478);
var seq21478__$1 = cljs.core.next.call(null,seq21478);
var G__21480 = cljs.core.first.call(null,seq21478__$1);
var seq21478__$2 = cljs.core.next.call(null,seq21478__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__21479,G__21480,seq21478__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);
/**
 * As `clojure.core/preserving-reduced`
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = rf.call(null,acc,in$);
if(cljs.core.reduced_QMARK_.call(null,result)){
return cljs.core.reduced.call(null,result);
} else {
return result;
}
});
});
taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv.call(null,(function (p1__21489_SHARP_,p2__21487_SHARP_,p3__21488_SHARP_){
return proc.call(null,p2__21487_SHARP_,p3__21488_SHARP_);
}),null,m);

return null;
});
taoensso.encore.run_BANG__STAR_ = (function taoensso$encore$run_BANG__STAR_(proc,coll){
cljs.core.reduce.call(null,(function (p1__21491_SHARP_,p2__21490_SHARP_){
return proc.call(null,p2__21490_SHARP_);
}),null,coll);

return null;
});
/**
 * Faster `some` based on `reduce`
 */
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
var temp__4657__auto__ = pred.call(null,in$);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.core.reduced.call(null,p);
} else {
return null;
}
}),null,coll);
});
/**
 * Faster `every?` based on `reduce`
 */
taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (acc,in$){
if(cljs.core.truth_(pred.call(null,in$))){
return true;
} else {
return cljs.core.reduced.call(null,null);
}
}),true,coll);
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_.call(null,(function (p1__21492_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__21492_SHARP_));
}),ks);
});
/**
 * Like `update-in` but faster, more flexible, and simpler (less ambiguous)
 */
taoensso.encore.update_in_STAR_ = (function taoensso$encore$update_in_STAR_(m,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
return f.call(null,m);
} else {
var vec__21494 = ks;
var k = cljs.core.nth.call(null,vec__21494,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__21494,(1));
if(cljs.core.truth_(ks__$1)){
return cljs.core.assoc.call(null,m,k,taoensso$encore$update_in_STAR_.call(null,cljs.core.get.call(null,m,k),ks__$1,f));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
}
}
});
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__18776__auto__ = signed_idx;
var y__18777__auto__ = max_idx;
return ((x__18776__auto__ < y__18777__auto__) ? x__18776__auto__ : y__18777__auto__);
} else {
var x__18769__auto__ = (0);
var y__18770__auto__ = (signed_idx + max_idx);
return ((x__18769__auto__ > y__18770__auto__) ? x__18769__auto__ : y__18770__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 *   input (str, vec, etc.) with support for:
 *  * Clamping of indexes beyond limits.
 *  * Max-length -> end-index.
 *  * -ive indexes (as +ive indexes but work from back of input):
 *    (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 *      h    e    l    l    o   ; 5 count
 *    (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21501 = arguments.length;
var i__19508__auto___21502 = (0);
while(true){
if((i__19508__auto___21502 < len__19507__auto___21501)){
args__19514__auto__.push((arguments[i__19508__auto___21502]));

var G__21503 = (i__19508__auto___21502 + (1));
i__19508__auto___21502 = G__21503;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__21498){
var map__21499 = p__21498;
var map__21499__$1 = ((((!((map__21499 == null)))?((((map__21499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21499):map__21499);
var max_len = cljs.core.get.call(null,map__21499__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__21499__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if(cljs.core.truth_((function (){var __x = max_len;
if(cljs.core.truth_(((function (__x,map__21499,map__21499__$1,max_len,end_idx){
return (function (__x__$1){
var or__18438__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__21499,map__21499__$1,max_len,end_idx))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] max-len)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] max-len)"));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$.call(null,(cljs.core.truth_(max_len)?(function (){var n1__20596__auto__ = (start_idx_STAR_ + max_len);
var n2__20597__auto__ = xlen;
if((n1__20596__auto__ > n2__20597__auto__)){
return n2__20597__auto__;
} else {
return n1__20596__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq21495){
var G__21496 = cljs.core.first.call(null,seq21495);
var seq21495__$1 = cljs.core.next.call(null,seq21495);
var G__21497 = cljs.core.first.call(null,seq21495__$1);
var seq21495__$2 = cljs.core.next.call(null,seq21495__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__21496,G__21497,seq21495__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21511 = arguments.length;
var i__19508__auto___21512 = (0);
while(true){
if((i__19508__auto___21512 < len__19507__auto___21511)){
args__19514__auto__.push((arguments[i__19508__auto___21512]));

var G__21513 = (i__19508__auto___21512 + (1));
i__19508__auto___21512 = G__21513;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__21507){
var vec__21508 = p__21507;
var _QMARK_max_len = cljs.core.nth.call(null,vec__21508,(0),null);
if(cljs.core.truth_((function (){var __x = v;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21509){if((e21509 instanceof Error)){
var __t = e21509;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(vector? v)",__x,__t,null);
} else {
throw e21509;

}
}})())){
} else {
throw (new Error("Assert failed: (have? vector? v)"));
}

var vec__21510 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__21510,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__21510,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq21504){
var G__21505 = cljs.core.first.call(null,seq21504);
var seq21504__$1 = cljs.core.next.call(null,seq21504);
var G__21506 = cljs.core.first.call(null,seq21504__$1);
var seq21504__$2 = cljs.core.next.call(null,seq21504__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21505,G__21506,seq21504__$2);
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args21518 = [];
var len__19507__auto___21521 = arguments.length;
var i__19508__auto___21522 = (0);
while(true){
if((i__19508__auto___21522 < len__19507__auto___21521)){
args21518.push((arguments[i__19508__auto___21522]));

var G__21523 = (i__19508__auto___21522 + (1));
i__19508__auto___21522 = G__21523;
continue;
} else {
}
break;
}

var G__21520 = args21518.length;
switch (G__21520) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21518.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.call(null,xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;
taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_.call(null,x))){
return null;
} else {
return x;
}
});
/**
 * Returns a sorted vector of the top n items from coll of N items in O(N.logn)
 *   time. (take n (sort-by ...)) is O(N.logN) time, so much slower when n << N.
 *   Ref. http://stevehanov.ca/blog/index.php?id=122
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args21527 = [];
var len__19507__auto___21530 = arguments.length;
var i__19508__auto___21531 = (0);
while(true){
if((i__19508__auto___21531 < len__19507__auto___21530)){
args21527.push((arguments[i__19508__auto___21531]));

var G__21532 = (i__19508__auto___21531 + (1));
i__19508__auto___21531 = G__21532;
continue;
} else {
}
break;
}

var G__21529 = args21527.length;
switch (G__21529) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21527.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top.call(null,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top.call(null,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),cljs.core.sort_by.call(null,keyfn,cmp,coll));
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21537 = arguments.length;
var i__19508__auto___21538 = (0);
while(true){
if((i__19508__auto___21538 < len__19507__auto___21537)){
args__19514__auto__.push((arguments[i__19508__auto___21538]));

var G__21539 = (i__19508__auto___21538 + (1));
i__19508__auto___21538 = G__21539;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return taoensso.encore.update_in_STAR_.call(null,m,ks,(function (m__$1){
return cljs.core.apply.call(null,cljs.core.dissoc,m__$1,dissoc_ks);
}));
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq21534){
var G__21535 = cljs.core.first.call(null,seq21534);
var seq21534__$1 = cljs.core.next.call(null,seq21534);
var G__21536 = cljs.core.first.call(null,seq21534__$1);
var seq21534__$2 = cljs.core.next.call(null,seq21534__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__21535,G__21536,seq21534__$2);
});
/**
 * Assocs each kv iff its value is not nil
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21552 = arguments.length;
var i__19508__auto___21553 = (0);
while(true){
if((i__19508__auto___21553 < len__19507__auto___21552)){
args__19514__auto__.push((arguments[i__19508__auto___21553]));

var G__21554 = (i__19508__auto___21553 + (1));
i__19508__auto___21553 = G__21554;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e21542){if((e21542 instanceof Error)){
var __t = e21542;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e21542;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21543){if((e21543 instanceof Error)){
var __t = e21543;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e21543;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__18438__auto__ = m;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__19218__auto__ = (function taoensso$encore$iter__21544(s__21545){
return (new cljs.core.LazySeq(null,(function (){
var s__21545__$1 = s__21545;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21545__$1);
if(temp__4657__auto__){
var s__21545__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21545__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__21545__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__21547 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__21546 = (0);
while(true){
if((i__21546 < size__19217__auto__)){
var vec__21550 = cljs.core._nth.call(null,c__19216__auto__,i__21546);
var k = cljs.core.nth.call(null,vec__21550,(0),null);
var v = cljs.core.nth.call(null,vec__21550,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__21547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21555 = (i__21546 + (1));
i__21546 = G__21555;
continue;
} else {
var G__21556 = (i__21546 + (1));
i__21546 = G__21556;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21547),taoensso$encore$iter__21544.call(null,cljs.core.chunk_rest.call(null,s__21545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21547),null);
}
} else {
var vec__21551 = cljs.core.first.call(null,s__21545__$2);
var k = cljs.core.nth.call(null,vec__21551,(0),null);
var v = cljs.core.nth.call(null,vec__21551,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__21544.call(null,cljs.core.rest.call(null,s__21545__$2)));
} else {
var G__21557 = cljs.core.rest.call(null,s__21545__$2);
s__21545__$1 = G__21557;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19218__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq21540){
var G__21541 = cljs.core.first.call(null,seq21540);
var seq21540__$1 = cljs.core.next.call(null,seq21540);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__21541,seq21540__$1);
});
/**
 * Assocs each kv iff its val is truthy
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21570 = arguments.length;
var i__19508__auto___21571 = (0);
while(true){
if((i__19508__auto___21571 < len__19507__auto___21570)){
args__19514__auto__.push((arguments[i__19508__auto___21571]));

var G__21572 = (i__19508__auto___21571 + (1));
i__19508__auto___21571 = G__21572;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,kvs);
}catch (e21560){if((e21560 instanceof Error)){
var __t = e21560;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e21560;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21561){if((e21561 instanceof Error)){
var __t = e21561;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count kvs))",__x,__t,null);
} else {
throw e21561;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count kvs))"));
}

return cljs.core.into.call(null,(function (){var or__18438__auto__ = m;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__19218__auto__ = (function taoensso$encore$iter__21562(s__21563){
return (new cljs.core.LazySeq(null,(function (){
var s__21563__$1 = s__21563;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__21563__$1);
if(temp__4657__auto__){
var s__21563__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21563__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__21563__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__21565 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__21564 = (0);
while(true){
if((i__21564 < size__19217__auto__)){
var vec__21568 = cljs.core._nth.call(null,c__19216__auto__,i__21564);
var k = cljs.core.nth.call(null,vec__21568,(0),null);
var v = cljs.core.nth.call(null,vec__21568,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__21565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__21573 = (i__21564 + (1));
i__21564 = G__21573;
continue;
} else {
var G__21574 = (i__21564 + (1));
i__21564 = G__21574;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21565),taoensso$encore$iter__21562.call(null,cljs.core.chunk_rest.call(null,s__21563__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21565),null);
}
} else {
var vec__21569 = cljs.core.first.call(null,s__21563__$2);
var k = cljs.core.nth.call(null,vec__21569,(0),null);
var v = cljs.core.nth.call(null,vec__21569,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__21562.call(null,cljs.core.rest.call(null,s__21563__$2)));
} else {
var G__21575 = cljs.core.rest.call(null,s__21563__$2);
s__21563__$1 = G__21575;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19218__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq21558){
var G__21559 = cljs.core.first.call(null,seq21558);
var seq21558__$1 = cljs.core.next.call(null,seq21558);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__21559,seq21558__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args21576 = [];
var len__19507__auto___21579 = arguments.length;
var i__19508__auto___21580 = (0);
while(true){
if((i__19508__auto___21580 < len__19507__auto___21579)){
args21576.push((arguments[i__19508__auto___21580]));

var G__21581 = (i__19508__auto___21580 + (1));
i__19508__auto___21580 = G__21581;
continue;
} else {
}
break;
}

var G__21578 = args21576.length;
switch (G__21578) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21576.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21584 = arguments.length;
var i__19508__auto___21585 = (0);
while(true){
if((i__19508__auto___21585 < len__19507__auto___21584)){
args__19514__auto__.push((arguments[i__19508__auto___21585]));

var G__21586 = (i__19508__auto___21585 + (1));
i__19508__auto___21585 = G__21586;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq21583){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21583));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21589 = arguments.length;
var i__19508__auto___21590 = (0);
while(true){
if((i__19508__auto___21590 < len__19507__auto___21589)){
args__19514__auto__.push((arguments[i__19508__auto___21590]));

var G__21591 = (i__19508__auto___21590 + (1));
i__19508__auto___21590 = G__21591;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq21587){
var G__21588 = cljs.core.first.call(null,seq21587);
var seq21587__$1 = cljs.core.next.call(null,seq21587);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__21588,seq21587__$1);
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf
);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1))
:kf
));
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,kf__$1.call(null,k,v),vf__$1.call(null,k,v));
});})(vf__$1,kf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?new cljs.core.Keyword(null,"keywordize","keywordize",1381210758):(function (k,_){
return f.call(null,k);
})),null,m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__18426__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__18426__auto__)){
return predv.call(null,v);
} else {
return and__18426__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
taoensso.encore.as_map_STAR_ = (function taoensso$encore$as_map_STAR_(kf,vf,kvs){
return cljs.core.transduce.call(null,cljs.core.partition_all.call(null,(2)),cljs.core.completing.call(null,(function (acc,p__21598){
var vec__21599 = p__21598;
var k = cljs.core.nth.call(null,vec__21599,(0),null);
var v = cljs.core.nth.call(null,vec__21599,(1),null);
return cljs.core.assoc_BANG_.call(null,acc,kf.call(null,k,v),vf.call(null,k,v));
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),kvs);
});
/**
 * Cross between `hash-map` & `map-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21604 = arguments.length;
var i__19508__auto___21605 = (0);
while(true){
if((i__19508__auto___21605 < len__19507__auto___21604)){
args__19514__auto__.push((arguments[i__19508__auto___21605]));

var G__21606 = (i__19508__auto___21605 + (1));
i__19508__auto___21605 = G__21606;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__21602){
var vec__21603 = p__21602;
var kf = cljs.core.nth.call(null,vec__21603,(0),null);
var vf = cljs.core.nth.call(null,vec__21603,(1),null);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__21603,kf,vf){
return (function (_,v){
return v;
});})(vec__21603,kf,vf))
:vf
);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__21603,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__21603,kf,vf))
:(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))?((function (vf__$1,vec__21603,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vf__$1,vec__21603,kf,vf))
:kf
));
return taoensso.encore.as_map_STAR_.call(null,kf__$1,vf__$1,kvs);
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq21600){
var G__21601 = cljs.core.first.call(null,seq21600);
var seq21600__$1 = cljs.core.next.call(null,seq21600);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__21601,seq21600__$1);
});
/**
 * Faster `zipmap` using transients
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__21607 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__21608 = cljs.core.next.call(null,ks__$1);
var G__21609 = cljs.core.next.call(null,vs__$1);
m = G__21607;
ks__$1 = G__21608;
vs__$1 = G__21609;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args21610 = [];
var len__19507__auto___21616 = arguments.length;
var i__19508__auto___21617 = (0);
while(true){
if((i__19508__auto___21617 < len__19507__auto___21616)){
args21610.push((arguments[i__19508__auto___21617]));

var G__21618 = (i__19508__auto___21617 + (1));
i__19508__auto___21617 = G__21618;
continue;
} else {
}
break;
}

var G__21615 = args21610.length;
switch (G__21615) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19526__auto__ = (new cljs.core.IndexedSeq(args21610.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19526__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq21611){
var G__21612 = cljs.core.first.call(null,seq21611);
var seq21611__$1 = cljs.core.next.call(null,seq21611);
var G__21613 = cljs.core.first.call(null,seq21611__$1);
var seq21611__$2 = cljs.core.next.call(null,seq21611__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__21612,G__21613,seq21611__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`, Ref. http://goo.gl/KvzqWb
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args21620 = [];
var len__19507__auto___21626 = arguments.length;
var i__19508__auto___21627 = (0);
while(true){
if((i__19508__auto___21627 < len__19507__auto___21626)){
args21620.push((arguments[i__19508__auto___21627]));

var G__21628 = (i__19508__auto___21627 + (1));
i__19508__auto___21627 = G__21628;
continue;
} else {
}
break;
}

var G__21625 = args21620.length;
switch (G__21625) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19526__auto__ = (new cljs.core.IndexedSeq(args21620.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19526__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq21621){
var G__21622 = cljs.core.first.call(null,seq21621);
var seq21621__$1 = cljs.core.next.call(null,seq21621);
var G__21623 = cljs.core.first.call(null,seq21621__$1);
var seq21621__$2 = cljs.core.next.call(null,seq21621__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__21622,G__21623,seq21621__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__21636,seen__$1){
while(true){
var vec__21637 = p__21636;
var v = cljs.core.nth.call(null,vec__21637,(0),null);
var xs__$1 = vec__21637;
var temp__4657__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4657__auto__){
var s = temp__4657__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__21638 = cljs.core.rest.call(null,s);
var G__21639 = seen__$1;
p__21636 = G__21638;
seen__$1 = G__21639;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args21644 = [];
var len__19507__auto___21647 = arguments.length;
var i__19508__auto___21648 = (0);
while(true){
if((i__19508__auto___21648 < len__19507__auto___21647)){
args21644.push((arguments[i__19508__auto___21648]));

var G__21649 = (i__19508__auto___21648 + (1));
i__19508__auto___21648 = G__21649;
continue;
} else {
}
break;
}

var G__21646 = args21644.length;
switch (G__21646) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21644.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.call(null);
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__21651 = null;
var G__21651__0 = (function (){
return rf.call(null);
});
var G__21651__1 = (function (acc){
return rf.call(null,acc);
});
var G__21651__2 = (function (acc,input){
var k = keyfn.call(null,input);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen_),k)){
return acc;
} else {
cljs.core._vreset_BANG_.call(null,seen_,cljs.core.conj.call(null,cljs.core._deref.call(null,seen_),k));

return rf.call(null,acc,input);
}
});
G__21651 = function(acc,input){
switch(arguments.length){
case 0:
return G__21651__0.call(this);
case 1:
return G__21651__1.call(this,acc);
case 2:
return G__21651__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21651.cljs$core$IFn$_invoke$arity$0 = G__21651__0;
G__21651.cljs$core$IFn$_invoke$arity$1 = G__21651__1;
G__21651.cljs$core$IFn$_invoke$arity$2 = G__21651__2;
return G__21651;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,n),coll);
}
});
taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv.call(null,cljs.core.complement.call(null,pred),coll);
});
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args21656 = [];
var len__19507__auto___21661 = arguments.length;
var i__19508__auto___21662 = (0);
while(true){
if((i__19508__auto___21662 < len__19507__auto___21661)){
args21656.push((arguments[i__19508__auto___21662]));

var G__21663 = (i__19508__auto___21662 + (1));
i__19508__auto___21662 = G__21663;
continue;
} else {
}
break;
}

var G__21658 = args21656.length;
switch (G__21658) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21656.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.call(null,cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.call(null,(function (p__21659,in$){
var vec__21660 = p__21659;
var v = cljs.core.nth.call(null,vec__21660,(0),null);
var seen = cljs.core.nth.call(null,vec__21660,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Reverse comparator
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21667 = arguments.length;
var i__19508__auto___21668 = (0);
while(true){
if((i__19508__auto___21668 < len__19507__auto___21667)){
args__19514__auto__.push((arguments[i__19508__auto___21668]));

var G__21669 = (i__19508__auto___21668 + (1));
i__19508__auto___21668 = G__21669;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__18438__auto__ = m1;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq21665){
var G__21666 = cljs.core.first.call(null,seq21665);
var seq21665__$1 = cljs.core.next.call(null,seq21665);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__21666,seq21665__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Like `repeatedly` but faster and `conj`s items into given collection
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((function (){var and__18426__auto__ = (n > (10));
if(and__18426__auto__){
if(!((coll == null))){
if(((coll.cljs$lang$protocol_mask$partition1$ & (4))) || (coll.cljs$core$IEditableCollection$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__18426__auto__;
}
})()){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx === n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__21674 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__21675 = (idx + (1));
v = G__21674;
idx = G__21675;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx === n)){
return v;
} else {
var G__21676 = cljs.core.conj.call(null,v,f.call(null));
var G__21677 = (idx + (1));
v = G__21676;
idx = G__21677;
continue;
}
break;
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19060__auto__,k__19061__auto__){
var self__ = this;
var this__19060__auto____$1 = this;
return cljs.core._lookup.call(null,this__19060__auto____$1,k__19061__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19062__auto__,k21679,else__19063__auto__){
var self__ = this;
var this__19062__auto____$1 = this;
var G__21681 = (((k21679 instanceof cljs.core.Keyword))?k21679.fqn:null);
switch (G__21681) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21679,else__19063__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19074__auto__,writer__19075__auto__,opts__19076__auto__){
var self__ = this;
var this__19074__auto____$1 = this;
var pr_pair__19077__auto__ = ((function (this__19074__auto____$1){
return (function (keyval__19078__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,cljs.core.pr_writer,""," ","",opts__19076__auto__,keyval__19078__auto__);
});})(this__19074__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,pr_pair__19077__auto__,"#taoensso.encore.Swapped{",", ","}",opts__19076__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21678){
var self__ = this;
var G__21678__$1 = this;
return (new cljs.core.RecordIter((0),G__21678__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19058__auto__){
var self__ = this;
var this__19058__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19054__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19064__auto__){
var self__ = this;
var this__19064__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19055__auto__){
var self__ = this;
var this__19055__auto____$1 = this;
var h__18873__auto__ = self__.__hash;
if(!((h__18873__auto__ == null))){
return h__18873__auto__;
} else {
var h__18873__auto____$1 = cljs.core.hash_imap.call(null,this__19055__auto____$1);
self__.__hash = h__18873__auto____$1;

return h__18873__auto____$1;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19056__auto__,other__19057__auto__){
var self__ = this;
var this__19056__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18426__auto__ = other__19057__auto__;
if(cljs.core.truth_(and__18426__auto__)){
var and__18426__auto____$1 = (this__19056__auto____$1.constructor === other__19057__auto__.constructor);
if(and__18426__auto____$1){
return cljs.core.equiv_map.call(null,this__19056__auto____$1,other__19057__auto__);
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19069__auto__,k__19070__auto__){
var self__ = this;
var this__19069__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__19070__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19069__auto____$1),self__.__meta),k__19070__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19070__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19067__auto__,k__19068__auto__,G__21678){
var self__ = this;
var this__19067__auto____$1 = this;
var pred__21682 = cljs.core.keyword_identical_QMARK_;
var expr__21683 = k__19068__auto__;
if(cljs.core.truth_(pred__21682.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__21683))){
return (new taoensso.encore.Swapped(G__21678,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21682.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__21683))){
return (new taoensso.encore.Swapped(self__.new_val,G__21678,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19068__auto__,G__21678),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19072__auto__){
var self__ = this;
var this__19072__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19059__auto__,G__21678){
var self__ = this;
var this__19059__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__21678,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19065__auto__,entry__19066__auto__){
var self__ = this;
var this__19065__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19066__auto__)){
return cljs.core._assoc.call(null,this__19065__auto____$1,cljs.core._nth.call(null,entry__19066__auto__,(0)),cljs.core._nth.call(null,entry__19066__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19065__auto____$1,entry__19066__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__19094__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__19094__auto__,writer__19095__auto__){
return cljs.core._write.call(null,writer__19095__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__21680){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__21680),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__21680),null,cljs.core.dissoc.call(null,G__21680,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if(cljs.core.truth_(taoensso.encore.swapped_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__21687 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__21687,(0),null);
var return_val = cljs.core.nth.call(null,vec__21687,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__21690 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__21690,(0),null);
var ks = cljs.core.nth.call(null,vec__21690,(1),null);
var valf = cljs.core.nth.call(null,vec__21690,(2),null);
var G__21691 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__21691) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if((valf == null)){
return accum;
} else {
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21695 = arguments.length;
var i__19508__auto___21696 = (0);
while(true){
if((i__19508__auto___21696 < len__19507__auto___21695)){
args__19514__auto__.push((arguments[i__19508__auto___21696]));

var G__21697 = (i__19508__auto___21696 + (1));
i__19508__auto___21696 = G__21697;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq21693){
var G__21694 = cljs.core.first.call(null,seq21693);
var seq21693__$1 = cljs.core.next.call(null,seq21693);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__21694,seq21693__$1);
});
/**
 * Minor optimization for single-threaded Cljs
 */
taoensso.encore.platform_cas_BANG_ = (function taoensso$encore$platform_cas_BANG_(atom_,old_val,new_val){
cljs.core.reset_BANG_.call(null,atom_,new_val);

return true;
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args21698 = [];
var len__19507__auto___21709 = arguments.length;
var i__19508__auto___21710 = (0);
while(true){
if((i__19508__auto___21710 < len__19507__auto___21709)){
args21698.push((arguments[i__19508__auto___21710]));

var G__21711 = (i__19508__auto___21710 + (1));
i__19508__auto___21710 = G__21711;
continue;
} else {
}
break;
}

var G__21704 = args21698.length;
switch (G__21704) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19526__auto__ = (new cljs.core.IndexedSeq(args21698.slice((3)),(0),null));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19526__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__21705 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__21705,(0),null);
var return_val = cljs.core.nth.call(null,vec__21705,(1),null);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__21706 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__21706,(0),null);
var return_val = cljs.core.nth.call(null,vec__21706,(1),null);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return return_val;
} else {
continue;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e21707){if((e21707 instanceof Error)){
var __t = e21707;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e21707;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21708){if((e21708 instanceof Error)){
var __t = e21708;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e21708;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
} else {
continue;
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq21699){
var G__21700 = cljs.core.first.call(null,seq21699);
var seq21699__$1 = cljs.core.next.call(null,seq21699);
var G__21701 = cljs.core.first.call(null,seq21699__$1);
var seq21699__$2 = cljs.core.next.call(null,seq21699__$1);
var G__21702 = cljs.core.first.call(null,seq21699__$2);
var seq21699__$3 = cljs.core.next.call(null,seq21699__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21700,G__21701,G__21702,seq21699__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args21713 = [];
var len__19507__auto___21722 = arguments.length;
var i__19508__auto___21723 = (0);
while(true){
if((i__19508__auto___21723 < len__19507__auto___21722)){
args21713.push((arguments[i__19508__auto___21723]));

var G__21724 = (i__19508__auto___21723 + (1));
i__19508__auto___21723 = G__21724;
continue;
} else {
}
break;
}

var G__21719 = args21713.length;
switch (G__21719) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19526__auto__ = (new cljs.core.IndexedSeq(args21713.slice((3)),(0),null));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19526__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.truth_((function (){var __x = (function (){try{return cljs.core.count.call(null,more);
}catch (e21720){if((e21720 instanceof Error)){
var __t = e21720;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e21720;

}
}})();
try{if(cljs.core.even_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21721){if((e21721 instanceof Error)){
var __t = e21721;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(even? (count more))",__x,__t,null);
} else {
throw e21721;

}
}})())){
} else {
throw (new Error("Assert failed: (have? even? (count more))"));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_val,new_val__$1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
} else {
continue;
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq21714){
var G__21715 = cljs.core.first.call(null,seq21714);
var seq21714__$1 = cljs.core.next.call(null,seq21714);
var G__21716 = cljs.core.first.call(null,seq21714__$1);
var seq21714__$2 = cljs.core.next.call(null,seq21714__$1);
var G__21717 = cljs.core.first.call(null,seq21714__$2);
var seq21714__$3 = cljs.core.next.call(null,seq21714__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21715,G__21716,G__21717,seq21714__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(str_builder,s){
return str_builder.append(s);
});
/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.call(null);
});
var taoensso$encore$str_rf__1 = (function (acc){
if(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))){
return acc;
} else {
return taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.call(null,(cljs.core.truth_(taoensso.encore.str_builder_QMARK_.call(null,acc))?acc:taoensso.encore.str_builder.call(null,[cljs.core.str(acc)].join(''))),[cljs.core.str(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args21730 = [];
var len__19507__auto___21733 = arguments.length;
var i__19508__auto___21734 = (0);
while(true){
if((i__19508__auto___21734 < len__19507__auto___21733)){
args21730.push((arguments[i__19508__auto___21734]));

var G__21735 = (i__19508__auto___21734 + (1));
i__19508__auto___21734 = G__21735;
continue;
} else {
}
break;
}

var G__21732 = args21730.length;
switch (G__21732) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21730.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.call(null,null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.call(null,separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__18426__auto__ = separator;
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.not_EQ_.call(null,separator,"");
} else {
return and__18426__auto__;
}
})())){
var sep_xform = cljs.core.interpose.call(null,separator);
var str_rf_STAR_ = cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,cljs.core.comp.call(null,xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.call(null,sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.call(null,xform,cljs.core.completing.call(null,taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str(cljs.core.reduce.call(null,taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;
taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__18438__auto__ = fmt;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});
/**
 * Like `clojure.core/format` but:
 *  * Returns "" when fmt is nil rather than throwing an NPE.
 *  * Formats nil as "nil" rather than "null".
 *  * Provides ClojureScript support via goog.string.format (this has fewer
 *    formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21739 = arguments.length;
var i__19508__auto___21740 = (0);
while(true){
if((i__19508__auto___21740 < len__19507__auto___21739)){
args__19514__auto__.push((arguments[i__19508__auto___21740]));

var G__21741 = (i__19508__auto___21740 + (1));
i__19508__auto___21740 = G__21741;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_.call(null,fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq21737){
var G__21738 = cljs.core.first.call(null,seq21737);
var seq21737__$1 = cljs.core.next.call(null,seq21737);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__21738,seq21737__$1);
});
/**
 * Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *                http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 technically introduced a breaking "fix" for
 *   CLJS-911 (Ref. https://goo.gl/bk5hcT) but it's a mess in an attempt to keep
 *   some compatibility with the previous broken behaviour. The merged CLJS-911 fix
 *   provides only inconsistent (single-match) and error-prone compatibility with
 *   Clojure's `str/replace`. CLJS-794 is also still unresolved.
 * 
 *   This util provides proper consistent Clojure/Script replace behaviour.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str("g"),cljs.core.str((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__21742__delegate = function (args){
return replacement.call(null,cljs.core.vec.call(null,args));
};
var G__21742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21743__i = 0, G__21743__a = new Array(arguments.length -  0);
while (G__21743__i < G__21743__a.length) {G__21743__a[G__21743__i] = arguments[G__21743__i + 0]; ++G__21743__i;}
  args = new cljs.core.IndexedSeq(G__21743__a,0);
} 
return G__21742__delegate.call(this,args);};
G__21742.cljs$lang$maxFixedArity = 0;
G__21742.cljs$lang$applyTo = (function (arglist__21744){
var args = cljs.core.seq(arglist__21744);
return G__21742__delegate(args);
});
G__21742.cljs$core$IFn$_invoke$arity$variadic = G__21742__delegate;
return G__21742;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');

}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 *   `sub-indexes`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21752 = arguments.length;
var i__19508__auto___21753 = (0);
while(true){
if((i__19508__auto___21753 < len__19507__auto___21752)){
args__19514__auto__.push((arguments[i__19508__auto___21753]));

var G__21754 = (i__19508__auto___21753 + (1));
i__19508__auto___21753 = G__21754;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__21748){
var vec__21749 = p__21748;
var _QMARK_max_len = cljs.core.nth.call(null,vec__21749,(0),null);
if(cljs.core.truth_((function (){var __x = s;
try{if(typeof __x === 'string'){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21750){if((e21750 instanceof Error)){
var __t = e21750;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(string? s)",__x,__t,null);
} else {
throw e21750;

}
}})())){
} else {
throw (new Error("Assert failed: (have? string? s)"));
}

var vec__21751 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__21751,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__21751,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq21745){
var G__21746 = cljs.core.first.call(null,seq21745);
var seq21745__$1 = cljs.core.next.call(null,seq21745);
var G__21747 = cljs.core.first.call(null,seq21745__$1);
var seq21745__$2 = cljs.core.next.call(null,seq21745__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__21746,G__21747,seq21745__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21760 = arguments.length;
var i__19508__auto___21761 = (0);
while(true){
if((i__19508__auto___21761 < len__19507__auto___21760)){
args__19514__auto__.push((arguments[i__19508__auto___21761]));

var G__21762 = (i__19508__auto___21761 + (1));
i__19508__auto___21761 = G__21762;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic = (function (s,substr,p__21758){
var vec__21759 = p__21758;
var start_idx = cljs.core.nth.call(null,vec__21759,(0),null);
var last_QMARK_ = cljs.core.nth.call(null,vec__21759,(1),null);
var start_idx__$1 = ((function (){var or__18438__auto__ = start_idx;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return (0);
}
})() | (0));
var result = ((cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx__$1):s.indexOf(substr,start_idx__$1)) | (0));
if(cljs.core.not_EQ_.call(null,result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = (2);

taoensso.encore.str__QMARK_index.cljs$lang$applyTo = (function (seq21755){
var G__21756 = cljs.core.first.call(null,seq21755);
var seq21755__$1 = cljs.core.next.call(null,seq21755);
var G__21757 = cljs.core.first.call(null,seq21755__$1);
var seq21755__$2 = cljs.core.next.call(null,seq21755__$1);
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$variadic(G__21756,G__21757,seq21755__$2);
});
/**
 * Like `clojure.string/join` but ensures no double separators
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21765 = arguments.length;
var i__19508__auto___21766 = (0);
while(true){
if((i__19508__auto___21766 < len__19507__auto___21765)){
args__19514__auto__.push((arguments[i__19508__auto___21766]));

var G__21767 = (i__19508__auto___21766 + (1));
i__19508__auto___21766 = G__21767;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq21763){
var G__21764 = cljs.core.first.call(null,seq21763);
var seq21763__$1 = cljs.core.next.call(null,seq21763);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__21764,seq21763__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21769 = arguments.length;
var i__19508__auto___21770 = (0);
while(true){
if((i__19508__auto___21770 < len__19507__auto___21769)){
args__19514__auto__.push((arguments[i__19508__auto___21770]));

var G__21771 = (i__19508__auto___21770 + (1));
i__19508__auto___21770 = G__21771;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq21768){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21768));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args21772 = [];
var len__19507__auto___21775 = arguments.length;
var i__19508__auto___21776 = (0);
while(true){
if((i__19508__auto___21776 < len__19507__auto___21775)){
args21772.push((arguments[i__19508__auto___21776]));

var G__21777 = (i__19508__auto___21776 + (1));
i__19508__auto___21776 = G__21777;
continue;
} else {
}
break;
}

var G__21774 = args21772.length;
switch (G__21774) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21772.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int.call(null,(16)))).toString((16));
return [cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str("4"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(rhex),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str("-"),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null)),cljs.core.str(hex.call(null))].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return pred.call(null,x);
}catch (e21780){if((e21780 instanceof Error)){
var _ = e21780;
return false;
} else {
throw e21780;

}
}});
/**
 * Experimental. Cheaper `have!` alt that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args21781 = [];
var len__19507__auto___21784 = arguments.length;
var i__19508__auto___21785 = (0);
while(true){
if((i__19508__auto___21785 < len__19507__auto___21784)){
args21781.push((arguments[i__19508__auto___21785]));

var G__21786 = (i__19508__auto___21785 + (1));
i__19508__auto___21785 = G__21786;
continue;
} else {
}
break;
}

var G__21783 = args21781.length;
switch (G__21783) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21781.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(x)){
return x;
} else {
return taoensso.encore.is_BANG_.call(null,cljs.core.identity,x);
}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("`is!` "),cljs.core.str([cljs.core.str(pred)].join('')),cljs.core.str(" failure against arg: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arg","arg",-1747261837),x,new cljs.core.Keyword(null,"arg-type","arg-type",-2020167363),cljs.core.type.call(null,x)], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Experimental. For use with `if-let`s, `when-let`s, etc.
 */
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred.call(null,pred,x))){
return x;
} else {
return null;
}
});
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value. Specialized, fast
 *   `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(taoensso.encore.platform_cas_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `clojure.core/memoize` but faster, uses delays to avoid write races
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__21788__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__18438__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args,((function (or__18438__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__18438__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__18438__auto__,cache_))
,null));
}
});})(or__18438__auto__,cache_))
);
}
})());
};
var G__21788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21789__i = 0, G__21789__a = new Array(arguments.length -  0);
while (G__21789__i < G__21789__a.length) {G__21789__a[G__21789__i] = arguments[G__21789__i + 0]; ++G__21789__i;}
  args = new cljs.core.IndexedSeq(G__21789__a,0);
} 
return G__21788__delegate.call(this,args);};
G__21788.cljs$lang$maxFixedArity = 0;
G__21788.cljs$lang$applyTo = (function (arglist__21790){
var args = cljs.core.seq(arglist__21790);
return G__21788__delegate(args);
});
G__21788.cljs$core$IFn$_invoke$arity$variadic = G__21788__delegate;
return G__21788;
})()
;
;})(cache_))
});
/**
 * Fastest possible 0-arg `memoize_`
 */
taoensso.encore.memoize_a0_ = (function taoensso$encore$memoize_a0_(f){
var cache_ = cljs.core.atom.call(null,null);
return ((function (cache_){
return (function (){
return cljs.core.deref.call(null,(function (){var or__18438__auto__ = cljs.core.deref.call(null,cache_);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.swap_BANG_.call(null,cache_,((function (or__18438__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__18438__auto__,cache_){
return (function (){
return f.call(null);
});})(or__18438__auto__,cache_))
,null));
}
});})(or__18438__auto__,cache_))
);
}
})());
});
;})(cache_))
});
/**
 * Fastest possible 0/1-arg `memoize_`
 */
taoensso.encore.memoize_a1_ = (function taoensso$encore$memoize_a1_(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() {
var G__21791 = null;
var G__21791__0 = (function (){
return cljs.core.deref.call(null,(function (){var or__18438__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),taoensso.encore.sentinel);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,taoensso.encore.sentinel,((function (or__18438__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__18438__auto__,cache_){
return (function (){
return f.call(null);
});})(or__18438__auto__,cache_))
,null));
}
});})(or__18438__auto__,cache_))
);
}
})());
});
var G__21791__1 = (function (x){
return cljs.core.deref.call(null,(function (){var or__18438__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),x);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,x,((function (or__18438__auto__,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__18438__auto__,cache_){
return (function (){
return f.call(null,x);
});})(or__18438__auto__,cache_))
,null));
}
});})(or__18438__auto__,cache_))
);
}
})());
});
G__21791 = function(x){
switch(arguments.length){
case 0:
return G__21791__0.call(this);
case 1:
return G__21791__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21791.cljs$core$IFn$_invoke$arity$0 = G__21791__0;
G__21791.cljs$core$IFn$_invoke$arity$1 = G__21791__1;
return G__21791;
})()
;})(cache_))
});
/**
 * Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize1 = (function taoensso$encore$memoize1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__21792__delegate = function (args){
return cljs.core.deref.call(null,(function (){var or__18438__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,cache_,((function (or__18438__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.call(null,cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (or__18438__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(or__18438__auto__,cache_))
,null))], true, false);
}
});})(or__18438__auto__,cache_))
),args);
}
})());
};
var G__21792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21793__i = 0, G__21793__a = new Array(arguments.length -  0);
while (G__21793__i < G__21793__a.length) {G__21793__a[G__21793__i] = arguments[G__21793__i + 0]; ++G__21793__i;}
  args = new cljs.core.IndexedSeq(G__21793__a,0);
} 
return G__21792__delegate.call(this,args);};
G__21792.cljs$lang$maxFixedArity = 0;
G__21792.cljs$lang$applyTo = (function (arglist__21794){
var args = cljs.core.seq(arglist__21794);
return G__21792__delegate(args);
});
G__21792.cljs$core$IFn$_invoke$arity$variadic = G__21792__delegate;
return G__21792;
})()
;
;})(cache_))
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21798 = arguments.length;
var i__19508__auto___21799 = (0);
while(true){
if((i__19508__auto___21799 < len__19507__auto___21798)){
args__19514__auto__.push((arguments[i__19508__auto___21799]));

var G__21800 = (i__19508__auto___21799 + (1));
i__19508__auto___21799 = G__21800;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq21795){
var G__21796 = cljs.core.first.call(null,seq21795);
var seq21795__$1 = cljs.core.next.call(null,seq21795);
var G__21797 = cljs.core.first.call(null,seq21795__$1);
var seq21795__$2 = cljs.core.next.call(null,seq21795__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__21796,G__21797,seq21795__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Can be significantly faster (depends on opts)
 *  * Uses delays to prevent race conditions on writes
 *  * Supports auto invalidation & gc with `ttl-ms` option
 *  * Supports cache size limit & gc with `cache-size` option
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args21801 = [];
var len__19507__auto___21824 = arguments.length;
var i__19508__auto___21825 = (0);
while(true){
if((i__19508__auto___21825 < len__19507__auto___21824)){
args21801.push((arguments[i__19508__auto___21825]));

var G__21826 = (i__19508__auto___21825 + (1));
i__19508__auto___21825 = G__21826;
continue;
} else {
}
break;
}

var G__21803 = args21801.length;
switch (G__21803) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21801.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__21828__delegate = function (p__21804){
var vec__21805 = p__21804;
var arg1 = cljs.core.nth.call(null,vec__21805,(0),null);
var argn = cljs.core.nthnext.call(null,vec__21805,(1));
var args = vec__21805;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return cache_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,(function (){var or__18438__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args__$1);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (or__18438__auto__,fresh_QMARK_,args__$1,vec__21805,arg1,argn,args,cache_){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__18426__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__18426__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (or__18438__auto__,fresh_QMARK_,args__$1,vec__21805,arg1,argn,args,cache_){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(or__18438__auto__,fresh_QMARK_,args__$1,vec__21805,arg1,argn,args,cache_))
,null));
}
});})(or__18438__auto__,fresh_QMARK_,args__$1,vec__21805,arg1,argn,args,cache_))
);
}
})());

}
}
};
var G__21828 = function (var_args){
var p__21804 = null;
if (arguments.length > 0) {
var G__21829__i = 0, G__21829__a = new Array(arguments.length -  0);
while (G__21829__i < G__21829__a.length) {G__21829__a[G__21829__i] = arguments[G__21829__i + 0]; ++G__21829__i;}
  p__21804 = new cljs.core.IndexedSeq(G__21829__a,0);
} 
return G__21828__delegate.call(this,p__21804);};
G__21828.cljs$lang$maxFixedArity = 0;
G__21828.cljs$lang$applyTo = (function (arglist__21830){
var p__21804 = cljs.core.seq(arglist__21830);
return G__21828__delegate(p__21804);
});
G__21828.cljs$core$IFn$_invoke$arity$variadic = G__21828__delegate;
return G__21828;
})()
;
;})(cache_))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var __x_21831 = ttl_ms;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_21831))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21806){if((e21806 instanceof Error)){
var __t_21832 = e21806;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? ttl-ms)",__x_21831,__t_21832,null);
} else {
throw e21806;

}
}
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms__$1 = cljs.core.long$.call(null,ttl_ms);
var gc_fn = ((function (cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (){
if(cljs.core.truth_((function (){var and__18426__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__18426__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__18426__auto__,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__18426__auto__,cache_,gc_running_QMARK__,ttl_ms__$1))
);
} else {
return and__18426__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
var snapshot = cljs.core.deref.call(null,cache_);
var ks_to_gc = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,k,p__21807){
var vec__21808 = p__21807;
var dv = cljs.core.nth.call(null,vec__21808,(0),null);
var udt = cljs.core.nth.call(null,vec__21808,(1),null);
var cv = vec__21808;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(instant,snapshot,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot));
cljs.core.swap_BANG_.call(null,cache_,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
,cljs.core.transient$.call(null,m),ks_to_gc));
});})(instant,snapshot,ks_to_gc,cache_,gc_running_QMARK__,ttl_ms__$1))
);

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(cache_,gc_running_QMARK__,ttl_ms__$1))
;
return ((function (cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function() { 
var G__21833__delegate = function (p__21809){
var vec__21810 = p__21809;
var arg1 = cljs.core.nth.call(null,vec__21810,(0),null);
var argn = cljs.core.nthnext.call(null,vec__21810,(1));
var args = vec__21810;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return cache_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__21811 = taoensso.encore.swap_val_BANG_.call(null,cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__21810,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__18426__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__18426__auto__)){
var and__18426__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__18426__auto____$1){
var vec__21813 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__21813,(0),null);
var udt = cljs.core.nth.call(null,vec__21813,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__21810,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__21810,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__21810,arg1,argn,args,cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
);
var dv = cljs.core.nth.call(null,vec__21811,(0),null);
return cljs.core.deref.call(null,dv);

}
}
};
var G__21833 = function (var_args){
var p__21809 = null;
if (arguments.length > 0) {
var G__21834__i = 0, G__21834__a = new Array(arguments.length -  0);
while (G__21834__i < G__21834__a.length) {G__21834__a[G__21834__i] = arguments[G__21834__i + 0]; ++G__21834__i;}
  p__21809 = new cljs.core.IndexedSeq(G__21834__a,0);
} 
return G__21833__delegate.call(this,p__21809);};
G__21833.cljs$lang$maxFixedArity = 0;
G__21833.cljs$lang$applyTo = (function (arglist__21835){
var p__21809 = cljs.core.seq(arglist__21835);
return G__21833__delegate(p__21809);
});
G__21833.cljs$core$IFn$_invoke$arity$variadic = G__21833__delegate;
return G__21833;
})()
;
;})(cache_,gc_running_QMARK__,ttl_ms__$1,gc_fn))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var __x_21836 = ttl_ms;
if(cljs.core.truth_(((function (__x_21836){
return (function (__x__$1){
var or__18438__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.pos_int_QMARK_).call(null,__x__$1);
}
});})(__x_21836))
.call(null,__x_21836))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? pos-int?] ttl-ms)",__x_21836,null,null);
}

var __x_21837 = cache_size;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x_21837))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e21814){if((e21814 instanceof Error)){
var __t_21838 = e21814;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(pos-int? cache-size)",__x_21837,__t_21838,null);
} else {
throw e21814;

}
}
var state_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
var gc_running_QMARK__ = cljs.core.atom.call(null,false);
var ttl_ms_QMARK_ = !((ttl_ms == null));
var ttl_ms__$1 = cljs.core.long$.call(null,(function (){var or__18438__auto__ = ttl_ms;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return (0);
}
})());
var cache_size__$1 = cljs.core.long$.call(null,cache_size);
var gc_fn = ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (){
if(cljs.core.truth_((function (){var and__18426__auto__ = taoensso.encore.gc_now_QMARK_.call(null);
if(cljs.core.truth_(and__18426__auto__)){
return taoensso.encore.swap_in_BANG_.call(null,gc_running_QMARK__,cljs.core.PersistentVector.EMPTY,((function (and__18426__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (b){
return taoensso.encore.swapped.call(null,true,cljs.core.not.call(null,b));
});})(and__18426__auto__,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
return and__18426__auto__;
}
})())){
var instant = taoensso.encore.now_udt.call(null);
if(ttl_ms_QMARK_){
var snapshot_21839 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var ks_to_gc_21840 = cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (snapshot_21839,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,k,p__21815){
var vec__21816 = p__21815;
var dv = cljs.core.nth.call(null,vec__21816,(0),null);
var udt = cljs.core.nth.call(null,vec__21816,(1),null);
var _ = cljs.core.nth.call(null,vec__21816,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__21816,(3),null);
var cv = vec__21816;
if(((instant - udt) > ttl_ms__$1)){
return cljs.core.conj_BANG_.call(null,acc,k);
} else {
return acc;
}
});})(snapshot_21839,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),snapshot_21839));
cljs.core.swap_BANG_.call(null,state_,((function (snapshot_21839,ks_to_gc_21840,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (snapshot_21839,ks_to_gc_21840,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(snapshot_21839,ks_to_gc_21840,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_21840));
});})(snapshot_21839,ks_to_gc_21840,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

var snapshot_21841 = cljs.core.dissoc.call(null,cljs.core.deref.call(null,state_),new cljs.core.Keyword(null,"tick","tick",-835886976));
var n_to_gc_21842 = (cljs.core.count.call(null,snapshot_21841) - cache_size__$1);
if((n_to_gc_21842 > (64))){
var ks_to_gc_21843 = taoensso.encore.top.call(null,n_to_gc_21842,((function (snapshot_21841,n_to_gc_21842,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (k){
var vec__21817 = snapshot_21841.call(null,k);
var _ = cljs.core.nth.call(null,vec__21817,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21817,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__21817,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__21817,(3),null);
return (tick_lru + tick_lfu);
});})(snapshot_21841,n_to_gc_21842,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.keys.call(null,snapshot_21841));
cljs.core.swap_BANG_.call(null,state_,((function (ks_to_gc_21843,snapshot_21841,n_to_gc_21842,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (ks_to_gc_21843,snapshot_21841,n_to_gc_21842,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.call(null,acc,in$);
});})(ks_to_gc_21843,snapshot_21841,n_to_gc_21842,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
,cljs.core.transient$.call(null,m),ks_to_gc_21843));
});})(ks_to_gc_21843,snapshot_21841,n_to_gc_21842,instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
);
} else {
}

return cljs.core.reset_BANG_.call(null,gc_running_QMARK__,false);
} else {
return null;
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1))
;
var cv_fn = ((!(ttl_ms_QMARK_))?((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__18426__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__18426__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),null,tick,(1)], null);
}
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
:((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (args,fresh_QMARK_,tick){
var instant = taoensso.encore.now_udt.call(null);
return taoensso.encore.swap_val_BANG_.call(null,state_,args,((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__18426__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__18426__auto__)){
var and__18426__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__18426__auto____$1){
var vec__21819 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__21819,(0),null);
var udt = cljs.core.nth.call(null,vec__21819,(1),null);
return ((instant - udt) < ttl_ms__$1);
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
,null)),instant,tick,(1)], null);
}
});})(instant,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
});})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn))
);
return ((function (state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function() { 
var G__21844__delegate = function (p__21820){
var vec__21821 = p__21820;
var arg1 = cljs.core.nth.call(null,vec__21821,(0),null);
var argn = cljs.core.nthnext.call(null,vec__21821,(1));
var args = vec__21821;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","debug","mem/debug",-1608833359)))){
return state_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state_,cljs.core.dissoc,argn);
}

return null;
} else {
gc_fn.call(null);

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var tick = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_));
var vec__21822 = cv_fn.call(null,args__$1,fresh_QMARK_,tick);
var dv = cljs.core.nth.call(null,vec__21822,(0),null);
cljs.core.swap_BANG_.call(null,state_,((function (fresh_QMARK_,args__$1,tick,vec__21822,dv,vec__21821,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn){
return (function (m){
var temp__4655__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__21823 = temp__4655__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__21823,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__21823,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__21823,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__21823,(3),null);
var cv = vec__21823;
return cljs.core.merge.call(null,m,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick,(tick_lfu + (1))], null)], true, false));
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(tick + (1))], null));
}
});})(fresh_QMARK_,args__$1,tick,vec__21822,dv,vec__21821,arg1,argn,args,state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
);

return cljs.core.deref.call(null,dv);

}
}
};
var G__21844 = function (var_args){
var p__21820 = null;
if (arguments.length > 0) {
var G__21845__i = 0, G__21845__a = new Array(arguments.length -  0);
while (G__21845__i < G__21845__a.length) {G__21845__a[G__21845__i] = arguments[G__21845__i + 0]; ++G__21845__i;}
  p__21820 = new cljs.core.IndexedSeq(G__21845__a,0);
} 
return G__21844__delegate.call(this,p__21820);};
G__21844.cljs$lang$maxFixedArity = 0;
G__21844.cljs$lang$applyTo = (function (arglist__21846){
var p__21820 = cljs.core.seq(arglist__21846);
return G__21844__delegate(p__21820);
});
G__21844.cljs$core$IFn$_invoke$arity$variadic = G__21844__delegate;
return G__21844;
})()
;
;})(state_,gc_running_QMARK__,ttl_ms_QMARK_,ttl_ms__$1,cache_size__$1,gc_fn,cv_fn))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Takes one or more rate specs of form [ncalls-limit window-ms ?spec-id] and
 *   returns a (fn [& [req-id])) that returns `nil` (=> all rate limits passed), or
 *   [<ms-wait> <worst-offending-spec-id>] / <ms-wait>.
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
if(cljs.core.empty_QMARK_.call(null,specs)){
return cljs.core.constantly.call(null,null);
} else {
var vspecs = cljs.core.vec.call(null,specs);
var vstates_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var max_win_ms = cljs.core.long$.call(null,cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.mapv.call(null,((function (vspecs,vstates_){
return (function (p__21882){
var vec__21883 = p__21882;
var _ = cljs.core.nth.call(null,vec__21883,(0),null);
var win_ms = cljs.core.nth.call(null,vec__21883,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__21883,(2),null);
var spec = vec__21883;
return win_ms;
});})(vspecs,vstates_))
,vspecs)));
var nspecs = cljs.core.count.call(null,vspecs);
var nid_specs = cljs.core.count.call(null,cljs.core.filterv.call(null,((function (vspecs,vstates_,max_win_ms,nspecs){
return (function (p__21884){
var vec__21885 = p__21884;
var _ = cljs.core.nth.call(null,vec__21885,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21885,(1),null);
var id = cljs.core.nth.call(null,vec__21885,(2),null);
return id;
});})(vspecs,vstates_,max_win_ms,nspecs))
,vspecs));
var _ = ((((nid_specs === (0))) || (cljs.core._EQ_.call(null,nid_specs,nspecs)))?null:(function(){throw (new Error("Assert failed: (or (zero? nid-specs) (= nid-specs nspecs))"))})());
var return_ids_QMARK_ = !((nid_specs === (0)));
return ((function (vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function() { 
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate = function (p__21886){
var vec__21902 = p__21886;
var _QMARK_a1 = cljs.core.nth.call(null,vec__21902,(0),null);
var _QMARK_a2 = cljs.core.nth.call(null,vec__21902,(1),null);
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","debug","rl/debug",-1608167914)))){
return vstates_;
} else {
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","reset","rl/reset",-800926172)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a2,new cljs.core.Keyword("rl","all","rl/all",892118056)))){
cljs.core.reset_BANG_.call(null,vstates_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,vstates_,cljs.core.dissoc,_QMARK_a2);
}

return null;
} else {
var peek_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,_QMARK_a1,new cljs.core.Keyword("rl","peek","rl/peek",-291391771));
var req_id = (cljs.core.truth_(peek_QMARK_)?_QMARK_a2:_QMARK_a1);
var instant = taoensso.encore.now_udt.call(null);
if(cljs.core.truth_((function (){var and__18426__auto__ = req_id;
if(cljs.core.truth_(and__18426__auto__)){
return taoensso.encore.gc_now_QMARK_.call(null);
} else {
return and__18426__auto__;
}
})())){
taoensso.encore.swap_in_BANG_.call(null,vstates_,cljs.core.PersistentVector.EMPTY,((function (peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function taoensso$encore$rate_limiter_STAR__$_check_rate_limits_$_gc(m){
return cljs.core.reduce_kv.call(null,((function (peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (m_STAR_,req_id__$1,vstate){
var max_udt_win_start = cljs.core.reduce.call(null,((function (peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (acc,p__21905){
var vec__21906 = p__21905;
var ___$1 = cljs.core.nth.call(null,vec__21906,(0),null);
var udt = cljs.core.nth.call(null,vec__21906,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__21906,(2),null);
var x__18769__auto__ = acc;
var y__18770__auto__ = udt;
return ((x__18769__auto__ > y__18770__auto__) ? x__18769__auto__ : y__18770__auto__);
});})(peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,(0),vstate);
var min_win_ms_elapsed = (instant - max_udt_win_start);
if((min_win_ms_elapsed > max_win_ms)){
return cljs.core.dissoc.call(null,m_STAR_,req_id__$1);
} else {
return m_STAR_;
}
});})(peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,m,m);
});})(peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);
} else {
}

return taoensso.encore.swap_in_BANG_.call(null,vstates_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [req_id], null),((function (peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (_QMARK_vstate){
if(cljs.core.not.call(null,_QMARK_vstate)){
if(cljs.core.truth_(peek_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_vstate,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,nspecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),instant], null))),null);
}
} else {
var vec__21907 = (function (){var in_vspecs = vspecs;
var in_vstate = _QMARK_vstate;
var out_vstate = cljs.core.PersistentVector.EMPTY;
var _QMARK_worst_limit_offence = null;
while(true){
var vec__21908 = in_vspecs;
var vec__21909 = cljs.core.nth.call(null,vec__21908,(0),null);
var ncalls_limit = cljs.core.nth.call(null,vec__21909,(0),null);
var win_ms = cljs.core.nth.call(null,vec__21909,(1),null);
var _QMARK_spec_id = cljs.core.nth.call(null,vec__21909,(2),null);
var next_in_vspecs = cljs.core.nthnext.call(null,vec__21908,(1));
var vec__21910 = in_vstate;
var vec__21911 = cljs.core.nth.call(null,vec__21910,(0),null);
var ncalls = cljs.core.nth.call(null,vec__21911,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__21911,(1),null);
var next_in_vstate = cljs.core.nthnext.call(null,vec__21910,(1));
var win_ms_elapsed = (instant - udt_win_start);
var reset_due_QMARK_ = (win_ms_elapsed >= win_ms);
var rate_limited_QMARK_ = (!(reset_due_QMARK_)) && ((ncalls >= ncalls_limit));
var new_out_vstate = cljs.core.conj.call(null,out_vstate,((reset_due_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),instant], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls,udt_win_start], null)));
var new__QMARK_worst_limit_offence = ((!(rate_limited_QMARK_))?_QMARK_worst_limit_offence:(function (){var ms_wait = (win_ms - win_ms_elapsed);
if((function (){var or__18438__auto__ = (_QMARK_worst_limit_offence == null);
if(or__18438__auto__){
return or__18438__auto__;
} else {
var vec__21913 = _QMARK_worst_limit_offence;
var max_ms_wait = cljs.core.nth.call(null,vec__21913,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21913,(1),null);
return (ms_wait > max_ms_wait);
}
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms_wait,_QMARK_spec_id], null);
} else {
return _QMARK_worst_limit_offence;
}
})());
if(cljs.core.not.call(null,next_in_vspecs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_out_vstate,new__QMARK_worst_limit_offence], null);
} else {
var G__21917 = next_in_vspecs;
var G__21918 = next_in_vstate;
var G__21919 = new_out_vstate;
var G__21920 = new__QMARK_worst_limit_offence;
in_vspecs = G__21917;
in_vstate = G__21918;
out_vstate = G__21919;
_QMARK_worst_limit_offence = G__21920;
continue;
}
break;
}
})();
var vstate_with_resets = cljs.core.nth.call(null,vec__21907,(0),null);
var _QMARK_worst_limit_offence = cljs.core.nth.call(null,vec__21907,(1),null);
var all_limits_pass_QMARK_ = (_QMARK_worst_limit_offence == null);
var new_vstate = (cljs.core.truth_(peek_QMARK_)?_QMARK_vstate:((!(all_limits_pass_QMARK_))?vstate_with_resets:cljs.core.mapv.call(null,((function (vec__21907,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_){
return (function (p__21914){
var vec__21915 = p__21914;
var ncalls = cljs.core.nth.call(null,vec__21915,(0),null);
var udt_win_start = cljs.core.nth.call(null,vec__21915,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ncalls + (1)),udt_win_start], null);
});})(vec__21907,vstate_with_resets,_QMARK_worst_limit_offence,all_limits_pass_QMARK_,peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
,vstate_with_resets)
));
var result = (function (){var temp__4657__auto__ = _QMARK_worst_limit_offence;
if(cljs.core.truth_(temp__4657__auto__)){
var wlo = temp__4657__auto__;
if(return_ids_QMARK_){
return wlo;
} else {
var vec__21916 = wlo;
var ms_wait = cljs.core.nth.call(null,vec__21916,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__21916,(1),null);
return ms_wait;
}
} else {
return null;
}
})();
return taoensso.encore.swapped.call(null,new_vstate,result);
}
});})(peek_QMARK_,req_id,instant,vec__21902,_QMARK_a1,_QMARK_a2,vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
);

}
}
};
var taoensso$encore$rate_limiter_STAR__$_check_rate_limits = function (var_args){
var p__21886 = null;
if (arguments.length > 0) {
var G__21921__i = 0, G__21921__a = new Array(arguments.length -  0);
while (G__21921__i < G__21921__a.length) {G__21921__a[G__21921__i] = arguments[G__21921__i + 0]; ++G__21921__i;}
  p__21886 = new cljs.core.IndexedSeq(G__21921__a,0);
} 
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate.call(this,p__21886);};
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$maxFixedArity = 0;
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$lang$applyTo = (function (arglist__21922){
var p__21886 = cljs.core.seq(arglist__21922);
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate(p__21886);
});
taoensso$encore$rate_limiter_STAR__$_check_rate_limits.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$rate_limiter_STAR__$_check_rate_limits__delegate;
return taoensso$encore$rate_limiter_STAR__$_check_rate_limits;
})()
;
;})(vspecs,vstates_,max_win_ms,nspecs,nid_specs,_,return_ids_QMARK_))
}
});
taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,specs);
return ((function (rl){
return (function() { 
var G__21923__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),null], null);
}
};
var G__21923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21924__i = 0, G__21924__a = new Array(arguments.length -  0);
while (G__21924__i < G__21924__a.length) {G__21924__a[G__21924__i] = arguments[G__21924__i + 0]; ++G__21924__i;}
  args = new cljs.core.IndexedSeq(G__21924__a,0);
} 
return G__21923__delegate.call(this,args);};
G__21923.cljs$lang$maxFixedArity = 0;
G__21923.cljs$lang$applyTo = (function (arglist__21925){
var args = cljs.core.seq(arglist__21925);
return G__21923__delegate(args);
});
G__21923.cljs$core$IFn$_invoke$arity$variadic = G__21923__delegate;
return G__21923;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4655__auto__ = (function (){var and__18426__auto__ = typeof window !== 'undefined';
if(and__18426__auto__){
return (window["performance"]);
} else {
return and__18426__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var perf = temp__4655__auto__;
var temp__4655__auto____$1 = (function (){var or__18438__auto__ = (perf["now"]);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var or__18438__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__18438__auto____$1)){
return or__18438__auto____$1;
} else {
var or__18438__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__18438__auto____$2)){
return or__18438__auto____$2;
} else {
var or__18438__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__18438__auto____$3)){
return or__18438__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return ((function (f,temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4655__auto____$1,perf,temp__4655__auto__))
} else {
return ((function (temp__4655__auto____$1,perf,temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto____$1,perf,temp__4655__auto__))
}
} else {
return ((function (temp__4655__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4655__auto__))
}
})();
taoensso.encore.console_log = (function (){var temp__4655__auto__ = (function (){var and__18426__auto__ = typeof console !== 'undefined';
if(and__18426__auto__){
return console.log;
} else {
return and__18426__auto__;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return ((function (f,temp__4655__auto__){
return (function (xs){
return f.apply(console,cljs.core.into_array.call(null,xs));
});
;})(f,temp__4655__auto__))
} else {
return ((function (temp__4655__auto__){
return (function (xs){
return null;
});
;})(temp__4655__auto__))
}
})();

taoensso.encore.log = (function taoensso$encore$log(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21933 = arguments.length;
var i__19508__auto___21934 = (0);
while(true){
if((i__19508__auto___21934 < len__19507__auto___21933)){
args__19514__auto__.push((arguments[i__19508__auto___21934]));

var G__21935 = (i__19508__auto___21934 + (1));
i__19508__auto___21934 = G__21935;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq21926){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21926));
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21936 = arguments.length;
var i__19508__auto___21937 = (0);
while(true){
if((i__19508__auto___21937 < len__19507__auto___21936)){
args__19514__auto__.push((arguments[i__19508__auto___21937]));

var G__21938 = (i__19508__auto___21937 + (1));
i__19508__auto___21937 = G__21938;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.spaced_str_with_nils.call(null,xs)], null));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq21927){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21927));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21939 = arguments.length;
var i__19508__auto___21940 = (0);
while(true){
if((i__19508__auto___21940 < len__19507__auto___21939)){
args__19514__auto__.push((arguments[i__19508__auto___21940]));

var G__21941 = (i__19508__auto___21940 + (1));
i__19508__auto___21940 = G__21941;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.format_STAR_.call(null,fmt,xs)], null));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq21928){
var G__21929 = cljs.core.first.call(null,seq21928);
var seq21928__$1 = cljs.core.next.call(null,seq21928);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__21929,seq21928__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21942 = arguments.length;
var i__19508__auto___21943 = (0);
while(true){
if((i__19508__auto___21943 < len__19507__auto___21942)){
args__19514__auto__.push((arguments[i__19508__auto___21943]));

var G__21944 = (i__19508__auto___21943 + (1));
i__19508__auto___21943 = G__21944;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str_with_nils.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq21930){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21930));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__19514__auto__ = [];
var len__19507__auto___21945 = arguments.length;
var i__19508__auto___21946 = (0);
while(true){
if((i__19508__auto___21946 < len__19507__auto___21945)){
args__19514__auto__.push((arguments[i__19508__auto___21946]));

var G__21947 = (i__19508__auto___21946 + (1));
i__19508__auto___21946 = G__21947;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_.call(null,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq21931){
var G__21932 = cljs.core.first.call(null,seq21931);
var seq21931__$1 = cljs.core.next.call(null,seq21931);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__21932,seq21931__$1);
});
/**
 * Returns browser window's current location. These details can be forged!
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(cljs.core.truth_((function (){var __x = params;
if(cljs.core.truth_(((function (__x){
return (function (__x__$1){
var or__18438__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});})(__x))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? map?] params)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? map?] params)"));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__21949 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__21949) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
case "put":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status  - 200, 404, ..., or nil on no response
 *      ;; ?error   - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                  :timeout :no-content <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__21953,callback){
var map__21971 = p__21953;
var map__21971__$1 = ((((!((map__21971 == null)))?((((map__21971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21971):map__21971);
var opts = map__21971__$1;
var method = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var progress_fn = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855));
var errorf = cljs.core.get.call(null,map__21971__$1,new cljs.core.Keyword(null,"errorf","errorf",-620376044),taoensso.encore.logf);
if(cljs.core.truth_((function (){var __x = timeout_ms;
if(cljs.core.truth_(((function (__x,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (__x__$1){
var or__18438__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,taoensso.encore.nneg_int_QMARK_).call(null,__x__$1);
}
});})(__x,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"([:or nil? nneg-int?] timeout-ms)",__x,null,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? [:or nil? nneg-int?] timeout-ms)"));
}

var temp__4655__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var xhr = temp__4655__auto__;
try{var timeout_ms__$1 = (function (){var or__18438__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__21975 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__21975) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__21974 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__21974,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__21974,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__21976_21989 = xhr;
goog.events.listenOnce(G__21976_21989,goog.net.EventType.READY,((function (G__21976_21989,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21974,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__21976_21989,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21974,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);

goog.events.listenOnce(G__21976_21989,goog.net.EventType.COMPLETE,((function (G__21976_21989,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21974,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var success_QMARK_ = xhr.isSuccess();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__21982 = ((function (status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__21976_21989,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21974,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (p1__21952_SHARP_,p2__21951_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__21951_SHARP_,p1__21952_SHARP_);
});})(status,success_QMARK_,_QMARK_http_status,_QMARK_content_type,G__21976_21989,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21974,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
;
var expr__21983 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__21982.call(null,"/edn",expr__21983))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__21982.call(null,"/json",expr__21983))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__21982.call(null,"/xml",expr__21983))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__21982.call(null,"/html",expr__21983))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__21986 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__21986) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return taoensso.encore.read_edn.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e21985){if((e21985 instanceof Error)){
var e = e21985;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e21985;

}
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__18438__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if(cljs.core.truth_(success_QMARK_)){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
if(((_QMARK_content == null)) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(204),null,(1223),null], null), null).call(null,_QMARK_http_status)))){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__21976_21989,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21974,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);


var temp__4657__auto___21991 = progress_fn;
if(cljs.core.truth_(temp__4657__auto___21991)){
var pf_21992 = temp__4657__auto___21991;
goog.events.listen(xhr,goog.net.EventType.PROGRESS,((function (pf_21992,temp__4657__auto___21991,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21974,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__18426__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.not_EQ_.call(null,total,(0));
} else {
return and__18426__auto__;
}
})())?(loaded / total):null);
return pf_21992.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});})(pf_21992,temp__4657__auto___21991,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__21974,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4655__auto__,map__21971,map__21971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_,progress_fn,errorf))
);
} else {
}

var G__21987_21993 = xhr;
var temp__4657__auto___21994 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___21994)){
var x_21995 = temp__4657__auto___21994;
G__21987_21993.setTimeoutInterval((function (){var or__18438__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return (0);
}
})());
} else {
}

var temp__4657__auto___21996 = with_credentials_QMARK_;
if(cljs.core.truth_(temp__4657__auto___21996)){
var x_21997 = temp__4657__auto___21996;
G__21987_21993.setWithCredentials(true);
} else {
}

var temp__4657__auto___21998 = new cljs.core.Keyword(null,"always","always",-1772028770);
if(cljs.core.truth_(temp__4657__auto___21998)){
var x_21999 = temp__4657__auto___21998;
G__21987_21993.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);
} else {
}


return xhr;
}catch (e21973){if((e21973 instanceof Error)){
var e = e21973;
cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e21973;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22004 = arguments.length;
var i__19508__auto___22005 = (0);
while(true){
if((i__19508__auto___22005 < len__19507__auto___22004)){
args__19514__auto__.push((arguments[i__19508__auto___22005]));

var G__22006 = (i__19508__auto___22005 + (1));
i__19508__auto___22005 = G__22006;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__22002){
var vec__22003 = p__22002;
var encoding = cljs.core.nth.call(null,vec__22003,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq22000){
var G__22001 = cljs.core.first.call(null,seq22000);
var seq22000__$1 = cljs.core.next.call(null,seq22000);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__22001,seq22000__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,taoensso.encore.qname.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,(function (){var or__18438__auto__ = taoensso.encore.as__QMARK_qname.call(null,v);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return [cljs.core.str(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return "";
} else {
return join.call(null,(function (){var iter__19218__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__22015(s__22016){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__22016__$1 = s__22016;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22016__$1);
if(temp__4657__auto__){
var s__22016__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22016__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__22016__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__22018 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__22017 = (0);
while(true){
if((i__22017 < size__19217__auto__)){
var vec__22021 = cljs.core._nth.call(null,c__19216__auto__,i__22017);
var k = cljs.core.nth.call(null,vec__22021,(0),null);
var v = cljs.core.nth.call(null,vec__22021,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
cljs.core.chunk_append.call(null,b__22018,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__18438__auto__ = cljs.core.seq.call(null,v);
if(or__18438__auto__){
return or__18438__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__22023 = (i__22017 + (1));
i__22017 = G__22023;
continue;
} else {
var G__22024 = (i__22017 + (1));
i__22017 = G__22024;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22018),taoensso$encore$format_query_string_$_iter__22015.call(null,cljs.core.chunk_rest.call(null,s__22016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22018),null);
}
} else {
var vec__22022 = cljs.core.first.call(null,s__22016__$2);
var k = cljs.core.nth.call(null,vec__22022,(0),null);
var v = cljs.core.nth.call(null,vec__22022,(1),null);
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,v))){
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__18438__auto__ = cljs.core.seq.call(null,v);
if(or__18438__auto__){
return or__18438__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__22015.call(null,cljs.core.rest.call(null,s__22016__$2)));
} else {
var G__22025 = cljs.core.rest.call(null,s__22016__$2);
s__22016__$1 = G__22025;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__19218__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cur = temp__4655__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22032 = arguments.length;
var i__19508__auto___22033 = (0);
while(true){
if((i__19508__auto___22033 < len__19507__auto___22032)){
args__19514__auto__.push((arguments[i__19508__auto___22033]));

var G__22034 = (i__19508__auto___22033 + (1));
i__19508__auto___22033 = G__22034;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__22028){
var vec__22029 = p__22028;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__22029,(0),null);
var encoding = cljs.core.nth.call(null,vec__22029,(1),null);
var _PERCENT_ = ((clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__22029,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4655__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__22030 = temp__4655__auto__;
var k = cljs.core.nth.call(null,vec__22030,(0),null);
var v = cljs.core.nth.call(null,vec__22030,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__22029,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if(cljs.core.truth_((function (){var __x = _PERCENT_;
try{if(cljs.core.map_QMARK_.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e22031){if((e22031 instanceof Error)){
var __t = e22031;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.encore",null,"(map? %)",__x,__t,null);
} else {
throw e22031;

}
}})())){
} else {
throw (new Error("Assert failed: (have? map? %)"));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq22026){
var G__22027 = cljs.core.first.call(null,seq22026);
var seq22026__$1 = cljs.core.next.call(null,seq22026);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__22027,seq22026__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__22036 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__22036,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__22036,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank.call(null,taoensso.encore.format_query_string.call(null,qmap));
var temp__4655__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(temp__4655__auto__)){
var qstr = temp__4655__auto__;
return [cljs.core.str(url__$1),cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore.a0_memoize_ = taoensso.encore.memoize_a0_;
taoensso.encore.a1_memoize_ = taoensso.encore.memoize_a1_;
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG__STAR_;
taoensso.encore.fq_name = taoensso.encore.qname;
taoensso.encore.memoize_1 = taoensso.encore.memoize1;
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22041 = arguments.length;
var i__19508__auto___22042 = (0);
while(true){
if((i__19508__auto___22042 < len__19507__auto___22041)){
args__19514__auto__.push((arguments[i__19508__auto___22042]));

var G__22043 = (i__19508__auto___22042 + (1));
i__19508__auto___22042 = G__22043;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__22039){
var vec__22040 = p__22039;
var type = cljs.core.nth.call(null,vec__22040,(0),null);
var nplaces = cljs.core.nth.call(null,vec__22040,(1),null);
return taoensso.encore.round_STAR_.call(null,(function (){var or__18438__auto__ = type;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq22037){
var G__22038 = cljs.core.first.call(null,seq22037);
var seq22037__$1 = cljs.core.next.call(null,seq22037);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__22038,seq22037__$1);
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22048 = arguments.length;
var i__19508__auto___22049 = (0);
while(true){
if((i__19508__auto___22049 < len__19507__auto___22048)){
args__19514__auto__.push((arguments[i__19508__auto___22049]));

var G__22050 = (i__19508__auto___22049 + (1));
i__19508__auto___22049 = G__22050;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__22046){
var vec__22047 = p__22046;
var nattempt = cljs.core.nth.call(null,vec__22047,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__18438__auto__ = nattempt;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq22044){
var G__22045 = cljs.core.first.call(null,seq22044);
var seq22044__$1 = cljs.core.next.call(null,seq22044);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22045,seq22044__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;
taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;
taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__22051__delegate = function (args){
var temp__4655__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4655__auto__)){
var backoff_ms = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__22051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22052__i = 0, G__22052__a = new Array(arguments.length -  0);
while (G__22052__i < G__22052__a.length) {G__22052__a[G__22052__i] = arguments[G__22052__i + 0]; ++G__22052__i;}
  args = new cljs.core.IndexedSeq(G__22052__a,0);
} 
return G__22051__delegate.call(this,args);};
G__22051.cljs$lang$maxFixedArity = 0;
G__22051.cljs$lang$applyTo = (function (arglist__22053){
var args = cljs.core.seq(arglist__22053);
return G__22051__delegate(args);
});
G__22051.cljs$core$IFn$_invoke$arity$variadic = G__22051__delegate;
return G__22051;
})()
;
;})(rl))
});
if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return (__GT_n.call(null,level) >= __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22068 = arguments.length;
var i__19508__auto___22069 = (0);
while(true){
if((i__19508__auto___22069 < len__19507__auto___22068)){
args__19514__auto__.push((arguments[i__19508__auto___22069]));

var G__22070 = (i__19508__auto___22069 + (1));
i__19508__auto___22069 = G__22070;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq22054){
var G__22055 = cljs.core.first.call(null,seq22054);
var seq22054__$1 = cljs.core.next.call(null,seq22054);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__22055,seq22054__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22071 = arguments.length;
var i__19508__auto___22072 = (0);
while(true){
if((i__19508__auto___22072 < len__19507__auto___22071)){
args__19514__auto__.push((arguments[i__19508__auto___22072]));

var G__22073 = (i__19508__auto___22072 + (1));
i__19508__auto___22072 = G__22073;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq22056){
var G__22057 = cljs.core.first.call(null,seq22056);
var seq22056__$1 = cljs.core.next.call(null,seq22056);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__22057,seq22056__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22074 = arguments.length;
var i__19508__auto___22075 = (0);
while(true){
if((i__19508__auto___22075 < len__19507__auto___22074)){
args__19514__auto__.push((arguments[i__19508__auto___22075]));

var G__22076 = (i__19508__auto___22075 + (1));
i__19508__auto___22075 = G__22076;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq22058){
var G__22059 = cljs.core.first.call(null,seq22058);
var seq22058__$1 = cljs.core.next.call(null,seq22058);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__22059,seq22058__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22077 = arguments.length;
var i__19508__auto___22078 = (0);
while(true){
if((i__19508__auto___22078 < len__19507__auto___22077)){
args__19514__auto__.push((arguments[i__19508__auto___22078]));

var G__22079 = (i__19508__auto___22078 + (1));
i__19508__auto___22078 = G__22079;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("WARN: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq22060){
var G__22061 = cljs.core.first.call(null,seq22060);
var seq22060__$1 = cljs.core.next.call(null,seq22060);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__22061,seq22060__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22080 = arguments.length;
var i__19508__auto___22081 = (0);
while(true){
if((i__19508__auto___22081 < len__19507__auto___22080)){
args__19514__auto__.push((arguments[i__19508__auto___22081]));

var G__22082 = (i__19508__auto___22081 + (1));
i__19508__auto___22081 = G__22082;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("ERROR: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq22062){
var G__22063 = cljs.core.first.call(null,seq22062);
var seq22062__$1 = cljs.core.next.call(null,seq22062);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__22063,seq22062__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22083 = arguments.length;
var i__19508__auto___22084 = (0);
while(true){
if((i__19508__auto___22084 < len__19507__auto___22083)){
args__19514__auto__.push((arguments[i__19508__auto___22084]));

var G__22085 = (i__19508__auto___22084 + (1));
i__19508__auto___22084 = G__22085;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return cljs.core.apply.call(null,taoensso.encore.logf,[cljs.core.str("FATAL: "),cljs.core.str(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq22064){
var G__22065 = cljs.core.first.call(null,seq22064);
var seq22064__$1 = cljs.core.next.call(null,seq22064);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__22065,seq22064__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22086 = arguments.length;
var i__19508__auto___22087 = (0);
while(true){
if((i__19508__auto___22087 < len__19507__auto___22086)){
args__19514__auto__.push((arguments[i__19508__auto___22087]));

var G__22088 = (i__19508__auto___22087 + (1));
i__19508__auto___22087 = G__22088;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq22066){
var G__22067 = cljs.core.first.call(null,seq22066);
var seq22066__$1 = cljs.core.next.call(null,seq22066);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__22067,seq22066__$1);
});
/**
 * Deprecated
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22095 = arguments.length;
var i__19508__auto___22096 = (0);
while(true){
if((i__19508__auto___22096 < len__19507__auto___22095)){
args__19514__auto__.push((arguments[i__19508__auto___22096]));

var G__22097 = (i__19508__auto___22096 + (1));
i__19508__auto___22096 = G__22097;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__22093){
var vec__22094 = p__22093;
var _QMARK_comparator = cljs.core.nth.call(null,vec__22094,(0),null);
var comparator = (function (){var or__18438__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__22094,_QMARK_comparator){
return (function (p1__22089_SHARP_,p2__22090_SHARP_){
if((comparator.call(null,p1__22089_SHARP_,p2__22090_SHARP_) > (0))){
return p2__22090_SHARP_;
} else {
return p1__22089_SHARP_;
}
});})(comparator,vec__22094,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq22091){
var G__22092 = cljs.core.first.call(null,seq22091);
var seq22091__$1 = cljs.core.next.call(null,seq22091);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__22092,seq22091__$1);
});
/**
 * Deprecated
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__19514__auto__ = [];
var len__19507__auto___22104 = arguments.length;
var i__19508__auto___22105 = (0);
while(true){
if((i__19508__auto___22105 < len__19507__auto___22104)){
args__19514__auto__.push((arguments[i__19508__auto___22105]));

var G__22106 = (i__19508__auto___22105 + (1));
i__19508__auto___22105 = G__22106;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__22102){
var vec__22103 = p__22102;
var _QMARK_comparator = cljs.core.nth.call(null,vec__22103,(0),null);
var comparator = (function (){var or__18438__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__22103,_QMARK_comparator){
return (function (p1__22098_SHARP_,p2__22099_SHARP_){
if((comparator.call(null,p1__22098_SHARP_,p2__22099_SHARP_) < (0))){
return p2__22099_SHARP_;
} else {
return p1__22098_SHARP_;
}
});})(comparator,vec__22103,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq22100){
var G__22101 = cljs.core.first.call(null,seq22100);
var seq22100__$1 = cljs.core.next.call(null,seq22100);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__22101,seq22100__$1);
});
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__18438__auto__ = x;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

//# sourceMappingURL=encore.js.map?rel=1466146179883