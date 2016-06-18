// Compiled by ClojureScript 1.8.34 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
if(cljs.core.vector_QMARK_.call(null,taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(11),(0)], null));
} else {
taoensso.encore.assert_min_encore_version.call(null,2.11);
}
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__29365 = x;
var ev_id = cljs.core.nth.call(null,vec__29365,(0),null);
var _ = cljs.core.nth.call(null,vec__29365,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4657__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4657__auto__)){
var _QMARK_err = temp__4657__auto__;
var err_fmt = [cljs.core.str((function (){var G__29367 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__29367) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__18426__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__18426__auto__){
var and__18426__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__18426__auto____$1)){
var map__29371 = x;
var map__29371__$1 = ((((!((map__29371 == null)))?((((map__29371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29371):map__29371);
var ch_recv = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__29371__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__18426__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__18426__auto____$2)){
var and__18426__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__18426__auto____$3){
var and__18426__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__18426__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__18426__auto____$4;
}
} else {
return and__18426__auto____$3;
}
} else {
return and__18426__auto____$2;
}
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__18426__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__18426__auto__){
var and__18426__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__18426__auto____$1)){
var map__29375 = x;
var map__29375__$1 = ((((!((map__29375 == null)))?((((map__29375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29375):map__29375);
var ch_recv = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__29375__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var and__18426__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__18426__auto____$2)){
var and__18426__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__18426__auto____$3){
var and__18426__auto____$4 = taoensso.encore.atom_QMARK_.call(null,connected_uids);
if(cljs.core.truth_(and__18426__auto____$4)){
var and__18426__auto____$5 = cljs.core.map_QMARK_.call(null,ring_req);
if(and__18426__auto____$5){
var and__18426__auto____$6 = taoensso.encore.nblank_str_QMARK_.call(null,client_id);
if(cljs.core.truth_(and__18426__auto____$6)){
var and__18426__auto____$7 = taoensso.sente.event_QMARK_.call(null,event);
if(cljs.core.truth_(and__18426__auto____$7)){
return ((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_reply_fn));
} else {
return and__18426__auto____$7;
}
} else {
return and__18426__auto____$6;
}
} else {
return and__18426__auto____$5;
}
} else {
return and__18426__auto____$4;
}
} else {
return and__18426__auto____$3;
}
} else {
return and__18426__auto____$2;
}
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__29377){
var map__29381 = p__29377;
var map__29381__$1 = ((((!((map__29381 == null)))?((((map__29381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29381):map__29381);
var ev_msg = map__29381__$1;
var event = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.call(null,map__29381__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__29383 = taoensso.sente.as_event.call(null,event);
var ev_id = cljs.core.nth.call(null,vec__29383,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__29383,(1),null);
var valid_event = vec__29383;
var ev_msg_STAR_ = cljs.core.merge.call(null,ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null));
if(cljs.core.not.call(null,taoensso.sente.server_event_msg_QMARK_.call(null,ev_msg_STAR_))){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",159,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29383,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__29381,map__29381__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__29383,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__29381,map__29381__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null);
} else {
return cljs.core.async.put_BANG_.call(null,ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj);
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,taoensso.sente.cb_error_QMARK_.call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var __x = pstr;
try{if(typeof __x === 'string'){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29387){if((e29387 instanceof Error)){
var __t = e29387;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? pstr)",__x,__t,null);
} else {
throw e29387;

}
}})());
}catch (e29386){var t = e29386;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",175,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args29388 = [];
var len__19507__auto___29391 = arguments.length;
var i__19508__auto___29392 = (0);
while(true){
if((i__19508__auto___29392 < len__19507__auto___29391)){
args29388.push((arguments[i__19508__auto___29392]));

var G__29393 = (i__19508__auto___29392 + (1));
i__19508__auto___29392 = G__29393;
continue;
} else {
}
break;
}

var G__29390 = args29388.length;
switch (G__29390) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29388.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__19514__auto__ = [];
var len__19507__auto___29396 = arguments.length;
var i__19508__auto___29397 = (0);
while(true){
if((i__19508__auto___29397 < len__19507__auto___29396)){
args__19514__auto__.push((arguments[i__19508__auto___29397]));

var G__29398 = (i__19508__auto___29397 + (1));
i__19508__auto___29397 = G__29398;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",193,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq29395){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29395));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var __x_29405 = prefixed_pstr;
try{if(typeof __x_29405 === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29402){if((e29402 instanceof Error)){
var __t_29406 = e29402;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(string? prefixed-pstr)",__x_29405,__t_29406,null);
} else {
throw e29402;

}
}
var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__29404 = prefix;
switch (G__29404) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__29403 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__29403,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29403,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",205,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__29403,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__29403,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ; (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; (fn [ring-req]) -> CSRF token for Ajax POSTs.
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation (experimental).
 * 
 *   [1] e.g. `taoensso.sente.server-adapters.http-kit/http-kit-adapter` or
 *         `taoensso.sente.server-adapters.immutant/immutant-adapter`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___29577 = arguments.length;
var i__19508__auto___29578 = (0);
while(true){
if((i__19508__auto___29578 < len__19507__auto___29577)){
args__19514__auto__.push((arguments[i__19508__auto___29578]));

var G__29579 = (i__19508__auto___29578 + (1));
i__19508__auto___29578 = G__29579;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_adapter,p__29411){
var vec__29412 = p__29411;
var map__29413 = cljs.core.nth.call(null,vec__29412,(0),null);
var map__29413__$1 = ((((!((map__29413 == null)))?((((map__29413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29413):map__29413);
var recv_buf_or_n = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(1000)));
var send_buf_ms_ajax = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var send_buf_ms_ws = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var user_id_fn = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws){
return (function (ring_req){
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws))
);
var csrf_token_fn = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn){
return (function (ring_req){
var or__18438__auto__ = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var or__18438__auto____$1 = cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__18438__auto____$1)){
return or__18438__auto____$1;
} else {
return cljs.core.get_in.call(null,ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
});})(vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn))
);
var handshake_data_fn = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn){
return (function (ring_req){
return null;
});})(vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn))
);
var packer = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
if(cljs.core.truth_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var __x = send_buf_ms_ajax;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29415){if((e29415 instanceof Error)){
var __t = e29415;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ajax)",__x,__t,null);
} else {
throw e29415;

}
}})(),(function (){var __x = send_buf_ms_ws;
try{if(cljs.core.truth_(taoensso.encore.pos_int_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29416){if((e29416 instanceof Error)){
var __t = e29416;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/pos-int? send-buf-ms-ws)",__x,__t,null);
} else {
throw e29416;

}
}})()], null))){
} else {
throw (new Error("Assert failed: (have? enc/pos-int? send-buf-ms-ajax send-buf-ms-ws)"));
}

if(cljs.core.truth_((function (){var __x = web_server_adapter;
try{if(((function (__x,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p1__29408_SHARP_){
if(!((p1__29408_SHARP_ == null))){
if((false) || (p1__29408_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)){
return true;
} else {
if((!p1__29408_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__29408_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IServerChanAdapter,p1__29408_SHARP_);
}
});})(__x,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29417){if((e29417 instanceof Error)){
var __t = e29417;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__29408#] (satisfies? interfaces/IServerChanAdapter p1__29408#)) web-server-adapter)",__x,__t,null);
} else {
throw e29417;

}
}})())){
} else {
throw (new Error("Assert failed: (have? (fn* [p1__29408#] (satisfies? interfaces/IServerChanAdapter p1__29408#)) web-server-adapter)"));
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var ch_recv = cljs.core.async.chan.call(null,recv_buf_or_n);
var conns_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var send_buffers_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var user_id_fn__$1 = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req,client_id){
var or__18438__auto__ = user_id_fn.call(null,cljs.core.assoc.call(null,ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id));
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type,uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29419){if((e29419 instanceof Error)){
var __t = e29419;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e29419;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29420){
var map__29421 = p__29420;
var map__29421__$1 = ((((!((map__29421 == null)))?((((map__29421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29421):map__29421);
var old_m = map__29421__$1;
var ws = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__29421__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__29423 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29423) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.call(null,ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.call(null,ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.call(null,any,uid)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((!(cljs.core.contains_QMARK_.call(null,old_any,uid))) && (cljs.core.contains_QMARK_.call(null,new_any,uid))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (uid){
if(cljs.core.truth_((function (){var __x = uid;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29424){if((e29424 instanceof Error)){
var __t = e29424;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? uid)",__x,__t,null);
} else {
throw e29424;

}
}})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29425){
var map__29426 = p__29425;
var map__29426__$1 = ((((!((map__29426 == null)))?((((map__29426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29426):map__29426);
var old_m = map__29426__$1;
var ws = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.call(null,map__29426__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref.call(null,conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = (any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_);
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.call(null,ws,uid):cljs.core.disj.call(null,ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.call(null,ajax,uid):cljs.core.disj.call(null,ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.call(null,any,uid):cljs.core.disj.call(null,any,uid))], null);
return taoensso.encore.swapped.call(null,new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((cljs.core.contains_QMARK_.call(null,old_any,uid)) && (!(cljs.core.contains_QMARK_.call(null,new_any,uid)))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var send_fn = ((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__29581__delegate = function (user_id,ev,p__29428){
var vec__29429 = p__29428;
var map__29430 = cljs.core.nth.call(null,vec__29429,(0),null);
var map__29430__$1 = ((((!((map__29430 == null)))?((((map__29430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29430):map__29430);
var opts = map__29430__$1;
var flush_QMARK_ = cljs.core.get.call(null,map__29430__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_29582 = ((cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __29583 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",324,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_29582,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_29582,ev], null);
});})(uid_29582,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);
var __29584__$1 = (cljs.core.truth_(uid_29582)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Support for sending to `nil` user-ids has been REMOVED. "),cljs.core.str("Please send to `:sente/all-users-without-uid` instead.")].join('')),cljs.core.str("\n"),cljs.core.str("uid")].join('')))})());
var __29585__$2 = taoensso.sente.assert_event.call(null,ev);
var ev_uuid_29586 = taoensso.encore.uuid_str.call(null);
var flush_buffer_BANG__29587 = ((function (uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (type){
var temp__4657__auto__ = taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null),((function (uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (m){
var vec__29432 = cljs.core.get.call(null,m,uid_29582);
var ___$3 = cljs.core.nth.call(null,vec__29432,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29432,(1),null);
if(cljs.core.contains_QMARK_.call(null,ev_uuids,ev_uuid_29586)){
return taoensso.encore.swapped.call(null,cljs.core.dissoc.call(null,m,uid_29582),cljs.core.get.call(null,m,uid_29582));
} else {
return taoensso.encore.swapped.call(null,m,null);
}
});})(uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
if(cljs.core.truth_(temp__4657__auto__)){
var pulled = temp__4657__auto__;
var vec__29433 = pulled;
var buffered_evs = cljs.core.nth.call(null,vec__29433,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29433,(1),null);
var __x_29588 = buffered_evs;
try{if(cljs.core.vector_QMARK_.call(null,__x_29588)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29434){if((e29434 instanceof Error)){
var __t_29589 = e29434;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? buffered-evs)",__x_29588,__t_29589,null);
} else {
throw e29434;

}
}
var __x_29590 = ev_uuids;
try{if(cljs.core.set_QMARK_.call(null,__x_29590)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29435){if((e29435 instanceof Error)){
var __t_29591 = e29435;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(set? ev-uuids)",__x_29590,__t_29591,null);
} else {
throw e29435;

}
}
var packer_metas = cljs.core.mapv.call(null,cljs.core.meta,buffered_evs);
var combined_packer_meta = cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,packer_metas);
var buffered_evs_ppstr = taoensso.sente.pack.call(null,packer__$1,combined_packer_meta,buffered_evs);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",357,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__29433,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s (with meta %s)",buffered_evs_ppstr,combined_packer_meta], null);
});})(packer_metas,combined_packer_meta,buffered_evs_ppstr,vec__29433,buffered_evs,ev_uuids,pulled,temp__4657__auto__,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var G__29436 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29436) {
case "ws":
return taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_29582,buffered_evs_ppstr);

break;
case "ajax":
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_29582,buffered_evs_ppstr);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
} else {
return null;
}
});})(uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(cljs.core._EQ_.call(null,ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",367,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_29582], null);
});})(uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

if(cljs.core.truth_(flush_QMARK_)){
var seq__29437_29593 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__29438_29594 = null;
var count__29439_29595 = (0);
var i__29440_29596 = (0);
while(true){
if((i__29440_29596 < count__29439_29595)){
var type_29597 = cljs.core._nth.call(null,chunk__29438_29594,i__29440_29596);
flush_buffer_BANG__29587.call(null,type_29597);

var G__29598 = seq__29437_29593;
var G__29599 = chunk__29438_29594;
var G__29600 = count__29439_29595;
var G__29601 = (i__29440_29596 + (1));
seq__29437_29593 = G__29598;
chunk__29438_29594 = G__29599;
count__29439_29595 = G__29600;
i__29440_29596 = G__29601;
continue;
} else {
var temp__4657__auto___29602 = cljs.core.seq.call(null,seq__29437_29593);
if(temp__4657__auto___29602){
var seq__29437_29603__$1 = temp__4657__auto___29602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29437_29603__$1)){
var c__19249__auto___29604 = cljs.core.chunk_first.call(null,seq__29437_29603__$1);
var G__29605 = cljs.core.chunk_rest.call(null,seq__29437_29603__$1);
var G__29606 = c__19249__auto___29604;
var G__29607 = cljs.core.count.call(null,c__19249__auto___29604);
var G__29608 = (0);
seq__29437_29593 = G__29605;
chunk__29438_29594 = G__29606;
count__29439_29595 = G__29607;
i__29440_29596 = G__29608;
continue;
} else {
var type_29609 = cljs.core.first.call(null,seq__29437_29603__$1);
flush_buffer_BANG__29587.call(null,type_29609);

var G__29610 = cljs.core.next.call(null,seq__29437_29603__$1);
var G__29611 = null;
var G__29612 = (0);
var G__29613 = (0);
seq__29437_29593 = G__29610;
chunk__29438_29594 = G__29611;
count__29439_29595 = G__29612;
i__29440_29596 = G__29613;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__29441_29614 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_29582], null))));
var chunk__29442_29615 = null;
var count__29443_29616 = (0);
var i__29444_29617 = (0);
while(true){
if((i__29444_29617 < count__29443_29616)){
var server_ch_29618 = cljs.core._nth.call(null,chunk__29442_29615,i__29444_29617);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_29618);

var G__29619 = seq__29441_29614;
var G__29620 = chunk__29442_29615;
var G__29621 = count__29443_29616;
var G__29622 = (i__29444_29617 + (1));
seq__29441_29614 = G__29619;
chunk__29442_29615 = G__29620;
count__29443_29616 = G__29621;
i__29444_29617 = G__29622;
continue;
} else {
var temp__4657__auto___29623 = cljs.core.seq.call(null,seq__29441_29614);
if(temp__4657__auto___29623){
var seq__29441_29624__$1 = temp__4657__auto___29623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29441_29624__$1)){
var c__19249__auto___29625 = cljs.core.chunk_first.call(null,seq__29441_29624__$1);
var G__29626 = cljs.core.chunk_rest.call(null,seq__29441_29624__$1);
var G__29627 = c__19249__auto___29625;
var G__29628 = cljs.core.count.call(null,c__19249__auto___29625);
var G__29629 = (0);
seq__29441_29614 = G__29626;
chunk__29442_29615 = G__29627;
count__29443_29616 = G__29628;
i__29444_29617 = G__29629;
continue;
} else {
var server_ch_29630 = cljs.core.first.call(null,seq__29441_29624__$1);
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_29630);

var G__29631 = cljs.core.next.call(null,seq__29441_29624__$1);
var G__29632 = null;
var G__29633 = (0);
var G__29634 = (0);
seq__29441_29614 = G__29631;
chunk__29442_29615 = G__29632;
count__29443_29616 = G__29633;
i__29444_29617 = G__29634;
continue;
}
} else {
}
}
break;
}

var seq__29445_29635 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_29582], null))));
var chunk__29446_29636 = null;
var count__29447_29637 = (0);
var i__29448_29638 = (0);
while(true){
if((i__29448_29638 < count__29447_29637)){
var vec__29449_29639 = cljs.core._nth.call(null,chunk__29446_29636,i__29448_29638);
var _QMARK_server_ch_29640 = cljs.core.nth.call(null,vec__29449_29639,(0),null);
var __29641__$3 = cljs.core.nth.call(null,vec__29449_29639,(1),null);
var temp__4657__auto___29642 = _QMARK_server_ch_29640;
if(cljs.core.truth_(temp__4657__auto___29642)){
var server_ch_29643 = temp__4657__auto___29642;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_29643);
} else {
}

var G__29644 = seq__29445_29635;
var G__29645 = chunk__29446_29636;
var G__29646 = count__29447_29637;
var G__29647 = (i__29448_29638 + (1));
seq__29445_29635 = G__29644;
chunk__29446_29636 = G__29645;
count__29447_29637 = G__29646;
i__29448_29638 = G__29647;
continue;
} else {
var temp__4657__auto___29648 = cljs.core.seq.call(null,seq__29445_29635);
if(temp__4657__auto___29648){
var seq__29445_29649__$1 = temp__4657__auto___29648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29445_29649__$1)){
var c__19249__auto___29650 = cljs.core.chunk_first.call(null,seq__29445_29649__$1);
var G__29651 = cljs.core.chunk_rest.call(null,seq__29445_29649__$1);
var G__29652 = c__19249__auto___29650;
var G__29653 = cljs.core.count.call(null,c__19249__auto___29650);
var G__29654 = (0);
seq__29445_29635 = G__29651;
chunk__29446_29636 = G__29652;
count__29447_29637 = G__29653;
i__29448_29638 = G__29654;
continue;
} else {
var vec__29450_29655 = cljs.core.first.call(null,seq__29445_29649__$1);
var _QMARK_server_ch_29656 = cljs.core.nth.call(null,vec__29450_29655,(0),null);
var __29657__$3 = cljs.core.nth.call(null,vec__29450_29655,(1),null);
var temp__4657__auto___29658__$1 = _QMARK_server_ch_29656;
if(cljs.core.truth_(temp__4657__auto___29658__$1)){
var server_ch_29659 = temp__4657__auto___29658__$1;
taoensso.sente.interfaces.sch_close_BANG_.call(null,server_ch_29659);
} else {
}

var G__29660 = cljs.core.next.call(null,seq__29445_29649__$1);
var G__29661 = null;
var G__29662 = (0);
var G__29663 = (0);
seq__29445_29635 = G__29660;
chunk__29446_29636 = G__29661;
count__29447_29637 = G__29662;
i__29448_29638 = G__29663;
continue;
}
} else {
}
}
break;
}
} else {
var seq__29451_29664 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__29452_29665 = null;
var count__29453_29666 = (0);
var i__29454_29667 = (0);
while(true){
if((i__29454_29667 < count__29453_29666)){
var type_29668 = cljs.core._nth.call(null,chunk__29452_29665,i__29454_29667);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_29668,uid_29582], null),((function (seq__29451_29664,chunk__29452_29665,count__29453_29666,i__29454_29667,type_29668,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_29586], true)], null);
} else {
var vec__29455 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__29455,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29455,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_29586)], null);
}
});})(seq__29451_29664,chunk__29452_29665,count__29453_29666,i__29454_29667,type_29668,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__29669 = seq__29451_29664;
var G__29670 = chunk__29452_29665;
var G__29671 = count__29453_29666;
var G__29672 = (i__29454_29667 + (1));
seq__29451_29664 = G__29669;
chunk__29452_29665 = G__29670;
count__29453_29666 = G__29671;
i__29454_29667 = G__29672;
continue;
} else {
var temp__4657__auto___29673 = cljs.core.seq.call(null,seq__29451_29664);
if(temp__4657__auto___29673){
var seq__29451_29674__$1 = temp__4657__auto___29673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29451_29674__$1)){
var c__19249__auto___29675 = cljs.core.chunk_first.call(null,seq__29451_29674__$1);
var G__29676 = cljs.core.chunk_rest.call(null,seq__29451_29674__$1);
var G__29677 = c__19249__auto___29675;
var G__29678 = cljs.core.count.call(null,c__19249__auto___29675);
var G__29679 = (0);
seq__29451_29664 = G__29676;
chunk__29452_29665 = G__29677;
count__29453_29666 = G__29678;
i__29454_29667 = G__29679;
continue;
} else {
var type_29680 = cljs.core.first.call(null,seq__29451_29674__$1);
taoensso.encore.swap_in_BANG_.call(null,send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_29680,uid_29582], null),((function (seq__29451_29664,chunk__29452_29665,count__29453_29666,i__29454_29667,type_29680,seq__29451_29674__$1,temp__4657__auto___29673,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
if(cljs.core.not.call(null,_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.fromArray([ev_uuid_29586], true)], null);
} else {
var vec__29456 = _QMARK_v;
var buffered_evs = cljs.core.nth.call(null,vec__29456,(0),null);
var ev_uuids = cljs.core.nth.call(null,vec__29456,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,buffered_evs,ev),cljs.core.conj.call(null,ev_uuids,ev_uuid_29586)], null);
}
});})(seq__29451_29664,chunk__29452_29665,count__29453_29666,i__29454_29667,type_29680,seq__29451_29674__$1,temp__4657__auto___29673,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var G__29681 = cljs.core.next.call(null,seq__29451_29674__$1);
var G__29682 = null;
var G__29683 = (0);
var G__29684 = (0);
seq__29451_29664 = G__29681;
chunk__29452_29665 = G__29682;
count__29453_29666 = G__29683;
i__29454_29667 = G__29684;
continue;
}
} else {
}
}
break;
}

var c__23601__auto___29685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___29685,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___29685,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29466){
var state_val_29467 = (state_29466[(1)]);
if((state_val_29467 === (1))){
var state_29466__$1 = state_29466;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_29468_29686 = state_29466__$1;
(statearr_29468_29686[(1)] = (2));

} else {
var statearr_29469_29687 = state_29466__$1;
(statearr_29469_29687[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (2))){
var state_29466__$1 = state_29466;
var statearr_29470_29688 = state_29466__$1;
(statearr_29470_29688[(2)] = null);

(statearr_29470_29688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29467 === (3))){
var inst_29459 = cljs.core.async.timeout.call(null,send_buf_ms_ws);
var state_29466__$1 = state_29466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29466__$1,(5),inst_29459);
} else {
if((state_val_29467 === (4))){
var inst_29463 = (state_29466[(2)]);
var inst_29464 = flush_buffer_BANG__29587.call(null,new cljs.core.Keyword(null,"ws","ws",86841443));
var state_29466__$1 = (function (){var statearr_29471 = state_29466;
(statearr_29471[(7)] = inst_29463);

return statearr_29471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29466__$1,inst_29464);
} else {
if((state_val_29467 === (5))){
var inst_29461 = (state_29466[(2)]);
var state_29466__$1 = state_29466;
var statearr_29472_29689 = state_29466__$1;
(statearr_29472_29689[(2)] = inst_29461);

(statearr_29472_29689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__23601__auto___29685,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23489__auto__,c__23601__auto___29685,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23490__auto__ = null;
var taoensso$sente$state_machine__23490__auto____0 = (function (){
var statearr_29476 = [null,null,null,null,null,null,null,null];
(statearr_29476[(0)] = taoensso$sente$state_machine__23490__auto__);

(statearr_29476[(1)] = (1));

return statearr_29476;
});
var taoensso$sente$state_machine__23490__auto____1 = (function (state_29466){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_29466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e29477){if((e29477 instanceof Object)){
var ex__23493__auto__ = e29477;
var statearr_29478_29690 = state_29466;
(statearr_29478_29690[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29691 = state_29466;
state_29466 = G__29691;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
taoensso$sente$state_machine__23490__auto__ = function(state_29466){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23490__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23490__auto____1.call(this,state_29466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23490__auto____0;
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23490__auto____1;
return taoensso$sente$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___29685,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23603__auto__ = (function (){var statearr_29479 = f__23602__auto__.call(null);
(statearr_29479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___29685);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___29685,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);


var c__23601__auto___29692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___29692,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___29692,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29489){
var state_val_29490 = (state_29489[(1)]);
if((state_val_29490 === (1))){
var state_29489__$1 = state_29489;
if(cljs.core.truth_(flush_QMARK_)){
var statearr_29491_29693 = state_29489__$1;
(statearr_29491_29693[(1)] = (2));

} else {
var statearr_29492_29694 = state_29489__$1;
(statearr_29492_29694[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (2))){
var state_29489__$1 = state_29489;
var statearr_29493_29695 = state_29489__$1;
(statearr_29493_29695[(2)] = null);

(statearr_29493_29695[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29490 === (3))){
var inst_29482 = cljs.core.async.timeout.call(null,send_buf_ms_ajax);
var state_29489__$1 = state_29489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29489__$1,(5),inst_29482);
} else {
if((state_val_29490 === (4))){
var inst_29486 = (state_29489[(2)]);
var inst_29487 = flush_buffer_BANG__29587.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_29489__$1 = (function (){var statearr_29494 = state_29489;
(statearr_29494[(7)] = inst_29486);

return statearr_29494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29489__$1,inst_29487);
} else {
if((state_val_29490 === (5))){
var inst_29484 = (state_29489[(2)]);
var state_29489__$1 = state_29489;
var statearr_29495_29696 = state_29489__$1;
(statearr_29495_29696[(2)] = inst_29484);

(statearr_29495_29696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__23601__auto___29692,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23489__auto__,c__23601__auto___29692,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23490__auto__ = null;
var taoensso$sente$state_machine__23490__auto____0 = (function (){
var statearr_29499 = [null,null,null,null,null,null,null,null];
(statearr_29499[(0)] = taoensso$sente$state_machine__23490__auto__);

(statearr_29499[(1)] = (1));

return statearr_29499;
});
var taoensso$sente$state_machine__23490__auto____1 = (function (state_29489){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_29489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e29500){if((e29500 instanceof Object)){
var ex__23493__auto__ = e29500;
var statearr_29501_29697 = state_29489;
(statearr_29501_29697[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29698 = state_29489;
state_29489 = G__29698;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
taoensso$sente$state_machine__23490__auto__ = function(state_29489){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23490__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23490__auto____1.call(this,state_29489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23490__auto____0;
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23490__auto____1;
return taoensso$sente$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___29692,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23603__auto__ = (function (){var statearr_29502 = f__23602__auto__.call(null);
(statearr_29502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___29692);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___29692,uid_29582,__29583,__29584__$1,__29585__$2,ev_uuid_29586,flush_buffer_BANG__29587,vec__29429,map__29430,map__29430__$1,opts,flush_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

}

return null;
};
var G__29581 = function (user_id,ev,var_args){
var p__29428 = null;
if (arguments.length > 2) {
var G__29699__i = 0, G__29699__a = new Array(arguments.length -  2);
while (G__29699__i < G__29699__a.length) {G__29699__a[G__29699__i] = arguments[G__29699__i + 2]; ++G__29699__i;}
  p__29428 = new cljs.core.IndexedSeq(G__29699__a,0);
} 
return G__29581__delegate.call(this,user_id,ev,p__29428);};
G__29581.cljs$lang$maxFixedArity = 2;
G__29581.cljs$lang$applyTo = (function (arglist__29700){
var user_id = cljs.core.first(arglist__29700);
arglist__29700 = cljs.core.next(arglist__29700);
var ev = cljs.core.first(arglist__29700);
var p__29428 = cljs.core.rest(arglist__29700);
return G__29581__delegate(user_id,ev,p__29428);
});
G__29581.cljs$core$IFn$_invoke$arity$variadic = G__29581__delegate;
return G__29581;
})()
;})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__29503 = taoensso.sente.unpack.call(null,packer__$1,ppstr);
var clj = cljs.core.nth.call(null,vec__29503,(0),null);
var has_cb_QMARK_ = cljs.core.nth.call(null,vec__29503,(1),null);
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1.call(null,ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?((function (params,ppstr,client_id,vec__29503,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",435,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__29503,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): %s",resp_clj], null);
});})(params,ppstr,client_id,vec__29503,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
});})(params,ppstr,client_id,vec__29503,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null)], null)));

if(cljs.core.truth_(has_cb_QMARK_)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",442,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (params,ppstr,client_id,vec__29503,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax reply): dummy-cb-200"], null);
});})(params,ppstr,client_id,vec__29503,clj,has_cb_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337)),new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (ring_req){
var csrf_token = csrf_token_fn.call(null,ring_req);
var params = cljs.core.get.call(null,ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.call(null,params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1.call(null,ring_req,client_id);
var websocket_QMARK_ = new cljs.core.Keyword(null,"websocket?","websocket?",1552493139).cljs$core$IFn$_invoke$arity$1(ring_req);
var receive_event_msg_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() { 
var G__29701__delegate = function (event,p__29504){
var vec__29505 = p__29504;
var _QMARK_reply_fn = cljs.core.nth.call(null,vec__29505,(0),null);
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_.call(null,ch_recv,cljs.core.merge.call(null,ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)));
};
var G__29701 = function (event,var_args){
var p__29504 = null;
if (arguments.length > 1) {
var G__29702__i = 0, G__29702__a = new Array(arguments.length -  1);
while (G__29702__i < G__29702__a.length) {G__29702__a[G__29702__i] = arguments[G__29702__i + 1]; ++G__29702__i;}
  p__29504 = new cljs.core.IndexedSeq(G__29702__a,0);
} 
return G__29701__delegate.call(this,event,p__29504);};
G__29701.cljs$lang$maxFixedArity = 1;
G__29701.cljs$lang$applyTo = (function (arglist__29703){
var event = cljs.core.first(arglist__29703);
var p__29504 = cljs.core.rest(arglist__29703);
return G__29701__delegate(event,p__29504);
});
G__29701.cljs$core$IFn$_invoke$arity$variadic = G__29701__delegate;
return G__29701;
})()
;})(csrf_token,params,client_id,uid,websocket_QMARK_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
var handshake_BANG_ = ((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",467,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handshake!"], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

var _QMARK_handshake_data = handshake_data_fn.call(null,ring_req);
var handshake_ev = ((!((_QMARK_handshake_data == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token,_QMARK_handshake_data], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,csrf_token], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,null,handshake_ev),cljs.core.not.call(null,websocket_QMARK_));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
if(clojure.string.blank_QMARK_.call(null,client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",479,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(err_msg),cljs.core.str(": %s")].join(''),ring_req], null);
});})(err_msg,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

throw cljs.core.ex_info.call(null,err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp.call(null,web_server_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",487,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,[cljs.core.str(server_ch)].join('')], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

taoensso.encore.reset_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id], null),server_ch);

if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

return handshake_BANG_.call(null,server_ch);
} else {
var initial_conn_from_client_QMARK_ = taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_v){
return taoensso.encore.swapped.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [server_ch,taoensso.encore.now_udt.call(null)], null),(_QMARK_v == null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);
var handshake_QMARK_ = (function (){var or__18438__auto__ = initial_conn_from_client_QMARK_;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_.call(null,new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954)], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return handshake_BANG_.call(null,server_ch);
} else {
return null;
}
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,req_ppstr){
var vec__29506 = taoensso.sente.unpack.call(null,packer__$1,req_ppstr);
var clj = cljs.core.nth.call(null,vec__29506,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29506,(1),null);
return receive_event_msg_BANG_.call(null,clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__29506,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",514,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29506,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__29506,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,null)),null);

return taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,taoensso.sente.pack.call(null,packer__$1,cljs.core.meta.call(null,resp_clj),resp_clj,_QMARK_cb_uuid));
});})(vec__29506,clj,_QMARK_cb_uuid,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
:null));
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (server_ch,status){
if(cljs.core.truth_(websocket_QMARK_)){
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
if(cljs.core.empty_QMARK_.call(null,new_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return new_m;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29520){
var state_val_29521 = (state_29520[(1)]);
if((state_val_29521 === (1))){
var inst_29507 = cljs.core.async.timeout.call(null,(5000));
var state_29520__$1 = state_29520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29520__$1,(2),inst_29507);
} else {
if((state_val_29521 === (2))){
var inst_29509 = (state_29520[(2)]);
var inst_29510 = upd_connected_uid_BANG_.call(null,uid);
var state_29520__$1 = (function (){var statearr_29522 = state_29520;
(statearr_29522[(7)] = inst_29509);

return statearr_29522;
})();
if(cljs.core.truth_(inst_29510)){
var statearr_29523_29704 = state_29520__$1;
(statearr_29523_29704[(1)] = (3));

} else {
var statearr_29524_29705 = state_29520__$1;
(statearr_29524_29705[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (3))){
var inst_29512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29513 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_29514 = (new cljs.core.PersistentVector(null,1,(5),inst_29512,inst_29513,null));
var inst_29515 = receive_event_msg_BANG_.call(null,inst_29514);
var state_29520__$1 = state_29520;
var statearr_29525_29706 = state_29520__$1;
(statearr_29525_29706[(2)] = inst_29515);

(statearr_29525_29706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (4))){
var state_29520__$1 = state_29520;
var statearr_29526_29707 = state_29520__$1;
(statearr_29526_29707[(2)] = null);

(statearr_29526_29707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29521 === (5))){
var inst_29518 = (state_29520[(2)]);
var state_29520__$1 = state_29520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29520__$1,inst_29518);
} else {
return null;
}
}
}
}
}
});})(c__23601__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23489__auto__,c__23601__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23490__auto__ = null;
var taoensso$sente$state_machine__23490__auto____0 = (function (){
var statearr_29530 = [null,null,null,null,null,null,null,null];
(statearr_29530[(0)] = taoensso$sente$state_machine__23490__auto__);

(statearr_29530[(1)] = (1));

return statearr_29530;
});
var taoensso$sente$state_machine__23490__auto____1 = (function (state_29520){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_29520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e29531){if((e29531 instanceof Object)){
var ex__23493__auto__ = e29531;
var statearr_29532_29708 = state_29520;
(statearr_29532_29708[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29709 = state_29520;
state_29520 = G__29709;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
taoensso$sente$state_machine__23490__auto__ = function(state_29520){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23490__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23490__auto____1.call(this,state_29520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23490__auto____0;
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23490__auto____1;
return taoensso$sente$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23603__auto__ = (function (){var statearr_29533 = f__23602__auto__.call(null);
(statearr_29533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_29533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__23601__auto__;
} else {
taoensso.encore.swap_in_BANG_.call(null,conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,new cljs.core.Keyword(null,"ajax","ajax",814345549),client_id], null),((function (csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (p__29534){
var vec__29535 = p__29534;
var server_ch__$1 = cljs.core.nth.call(null,vec__29535,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__29535,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null);
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

var udt_disconnected = taoensso.encore.now_udt.call(null);
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (state_29558){
var state_val_29559 = (state_29558[(1)]);
if((state_val_29559 === (1))){
var inst_29536 = cljs.core.async.timeout.call(null,(5000));
var state_29558__$1 = state_29558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29558__$1,(2),inst_29536);
} else {
if((state_val_29559 === (2))){
var inst_29538 = (state_29558[(2)]);
var inst_29539 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29540 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_29541 = (new cljs.core.PersistentVector(null,2,(5),inst_29539,inst_29540,null));
var inst_29542 = (function (){return ((function (inst_29538,inst_29539,inst_29540,inst_29541,state_val_29559,c__23601__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function (_QMARK_m){
var vec__29560 = cljs.core.get.call(null,_QMARK_m,client_id);
var _ = cljs.core.nth.call(null,vec__29560,(0),null);
var _QMARK_udt_last_connected = cljs.core.nth.call(null,vec__29560,(1),null);
var disconnected_QMARK_ = (function (){var and__18426__auto__ = _QMARK_udt_last_connected;
if(cljs.core.truth_(and__18426__auto__)){
return (udt_disconnected >= _QMARK_udt_last_connected);
} else {
return and__18426__auto__;
}
})();
if(cljs.core.not.call(null,disconnected_QMARK_)){
return taoensso.encore.swapped.call(null,_QMARK_m,cljs.core.not.call(null,new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586)));
} else {
var new_m = cljs.core.dissoc.call(null,_QMARK_m,client_id);
return taoensso.encore.swapped.call(null,((cljs.core.empty_QMARK_.call(null,new_m))?new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782):new_m),new cljs.core.Keyword(null,"disconnected","disconnected",-1908014586));
}
});
;})(inst_29538,inst_29539,inst_29540,inst_29541,state_val_29559,c__23601__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var inst_29543 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29541,inst_29542);
var state_29558__$1 = (function (){var statearr_29561 = state_29558;
(statearr_29561[(7)] = inst_29538);

return statearr_29561;
})();
if(cljs.core.truth_(inst_29543)){
var statearr_29562_29710 = state_29558__$1;
(statearr_29562_29710[(1)] = (3));

} else {
var statearr_29563_29711 = state_29558__$1;
(statearr_29563_29711[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (3))){
var inst_29545 = upd_connected_uid_BANG_.call(null,uid);
var state_29558__$1 = state_29558;
if(cljs.core.truth_(inst_29545)){
var statearr_29564_29712 = state_29558__$1;
(statearr_29564_29712[(1)] = (6));

} else {
var statearr_29565_29713 = state_29558__$1;
(statearr_29565_29713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (4))){
var state_29558__$1 = state_29558;
var statearr_29566_29714 = state_29558__$1;
(statearr_29566_29714[(2)] = null);

(statearr_29566_29714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (5))){
var inst_29556 = (state_29558[(2)]);
var state_29558__$1 = state_29558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29558__$1,inst_29556);
} else {
if((state_val_29559 === (6))){
var inst_29547 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29548 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678)];
var inst_29549 = (new cljs.core.PersistentVector(null,1,(5),inst_29547,inst_29548,null));
var inst_29550 = receive_event_msg_BANG_.call(null,inst_29549);
var state_29558__$1 = state_29558;
var statearr_29567_29715 = state_29558__$1;
(statearr_29567_29715[(2)] = inst_29550);

(statearr_29567_29715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (7))){
var state_29558__$1 = state_29558;
var statearr_29568_29716 = state_29558__$1;
(statearr_29568_29716[(2)] = null);

(statearr_29568_29716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29559 === (8))){
var inst_29553 = (state_29558[(2)]);
var state_29558__$1 = state_29558;
var statearr_29569_29717 = state_29558__$1;
(statearr_29569_29717[(2)] = inst_29553);

(statearr_29569_29717[(1)] = (5));


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
});})(c__23601__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
;
return ((function (switch__23489__auto__,c__23601__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer){
return (function() {
var taoensso$sente$state_machine__23490__auto__ = null;
var taoensso$sente$state_machine__23490__auto____0 = (function (){
var statearr_29573 = [null,null,null,null,null,null,null,null];
(statearr_29573[(0)] = taoensso$sente$state_machine__23490__auto__);

(statearr_29573[(1)] = (1));

return statearr_29573;
});
var taoensso$sente$state_machine__23490__auto____1 = (function (state_29558){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_29558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e29574){if((e29574 instanceof Object)){
var ex__23493__auto__ = e29574;
var statearr_29575_29718 = state_29558;
(statearr_29575_29718[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29719 = state_29558;
state_29558 = G__29719;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
taoensso$sente$state_machine__23490__auto__ = function(state_29558){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23490__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23490__auto____1.call(this,state_29558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23490__auto____0;
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23490__auto____1;
return taoensso$sente$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
})();
var state__23603__auto__ = (function (){var statearr_29576 = f__23602__auto__.call(null);
(statearr_29576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_29576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__,udt_disconnected,csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
);

return c__23601__auto__;
}
});})(csrf_token,params,client_id,uid,websocket_QMARK_,receive_event_msg_BANG_,handshake_BANG_,packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null));
}
});})(packer__$1,ch_recv,conns_,connected_uids_,send_buffers_,user_id_fn__$1,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,ev_msg_const,vec__29412,map__29413,map__29413__$1,recv_buf_or_n,send_buf_ms_ajax,send_buf_ms_ws,user_id_fn,csrf_token_fn,handshake_data_fn,packer))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq29409){
var G__29410 = cljs.core.first.call(null,seq29409);
var seq29409__$1 = cljs.core.next.call(null,seq29409);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29410,seq29409__$1);
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",576,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null);

var seq__29724 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null))));
var chunk__29725 = null;
var count__29726 = (0);
var i__29727 = (0);
while(true){
if((i__29727 < count__29726)){
var server_ch = cljs.core._nth.call(null,chunk__29725,i__29727);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__29728 = seq__29724;
var G__29729 = chunk__29725;
var G__29730 = count__29726;
var G__29731 = (i__29727 + (1));
seq__29724 = G__29728;
chunk__29725 = G__29729;
count__29726 = G__29730;
i__29727 = G__29731;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29724);
if(temp__4657__auto__){
var seq__29724__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29724__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__29724__$1);
var G__29732 = cljs.core.chunk_rest.call(null,seq__29724__$1);
var G__29733 = c__19249__auto__;
var G__29734 = cljs.core.count.call(null,c__19249__auto__);
var G__29735 = (0);
seq__29724 = G__29732;
chunk__29725 = G__29733;
count__29726 = G__29734;
i__29727 = G__29735;
continue;
} else {
var server_ch = cljs.core.first.call(null,seq__29724__$1);
taoensso.sente.interfaces.sch_send_BANG_.call(null,server_ch,buffered_evs_pstr);

var G__29736 = cljs.core.next.call(null,seq__29724__$1);
var G__29737 = null;
var G__29738 = (0);
var G__29739 = (0);
seq__29724 = G__29736;
chunk__29725 = G__29737;
count__29726 = G__29738;
i__29727 = G__29739;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___29829 = arguments.length;
var i__19508__auto___29830 = (0);
while(true){
if((i__19508__auto___29830 < len__19507__auto___29829)){
args__19514__auto__.push((arguments[i__19508__auto___29830]));

var G__29831 = (i__19508__auto___29830 + (1));
i__19508__auto___29830 = G__29831;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((3) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((3)),(0),null)):null);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19515__auto__);
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns_,uid,buffered_evs_pstr,p__29744){
var vec__29745 = p__29744;
var map__29746 = cljs.core.nth.call(null,vec__29745,(0),null);
var map__29746__$1 = ((((!((map__29746 == null)))?((((map__29746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29746):map__29746);
var nmax_attempts = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"nmax-attempts","nmax-attempts",1471144610),(7));
var ms_base = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"ms-base","ms-base",-1962784511),(90));
var ms_rand = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"ms-rand","ms-rand",1169398874),(90));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",589,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
});})(vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand))
,null)),null);

var client_ids_unsatisfied = cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_.call(null,client_ids_unsatisfied)){
return null;
} else {
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand){
return (function (state_29795){
var state_val_29796 = (state_29795[(1)]);
if((state_val_29796 === (7))){
var inst_29749 = (state_29795[(7)]);
var inst_29750 = (state_29795[(8)]);
var inst_29756 = (state_29795[(9)]);
var inst_29767 = (function (){var n = inst_29749;
var client_ids_satisfied = inst_29750;
var _QMARK_pulled = inst_29756;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_29749,inst_29750,inst_29756,state_val_29796,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand){
return (function (s,client_id,p__29766){
var vec__29797 = p__29766;
var _QMARK_server_ch = cljs.core.nth.call(null,vec__29797,(0),null);
var _ = cljs.core.nth.call(null,vec__29797,(1),null);
if(((_QMARK_server_ch == null)) || (cljs.core.not.call(null,taoensso.sente.interfaces.sch_send_BANG_.call(null,_QMARK_server_ch,buffered_evs_pstr,new cljs.core.Keyword(null,"close-after-send","close-after-send",1264946103))))){
return s;
} else {
return cljs.core.conj.call(null,s,client_id);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_29749,inst_29750,inst_29756,state_val_29796,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_29768 = cljs.core.PersistentHashSet.EMPTY;
var inst_29769 = cljs.core.reduce_kv.call(null,inst_29767,inst_29768,inst_29756);
var state_29795__$1 = state_29795;
var statearr_29798_29832 = state_29795__$1;
(statearr_29798_29832[(2)] = inst_29769);

(statearr_29798_29832[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (1))){
var inst_29748 = cljs.core.PersistentHashSet.EMPTY;
var inst_29749 = (0);
var inst_29750 = inst_29748;
var state_29795__$1 = (function (){var statearr_29799 = state_29795;
(statearr_29799[(7)] = inst_29749);

(statearr_29799[(8)] = inst_29750);

return statearr_29799;
})();
var statearr_29800_29833 = state_29795__$1;
(statearr_29800_29833[(2)] = null);

(statearr_29800_29833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (4))){
var state_29795__$1 = state_29795;
var statearr_29801_29834 = state_29795__$1;
(statearr_29801_29834[(2)] = true);

(statearr_29801_29834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (15))){
var inst_29791 = (state_29795[(2)]);
var state_29795__$1 = state_29795;
var statearr_29802_29835 = state_29795__$1;
(statearr_29802_29835[(2)] = inst_29791);

(statearr_29802_29835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (13))){
var inst_29782 = cljs.core.rand_int.call(null,ms_rand);
var inst_29783 = (ms_base + inst_29782);
var inst_29784 = cljs.core.async.timeout.call(null,inst_29783);
var state_29795__$1 = state_29795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29795__$1,(16),inst_29784);
} else {
if((state_val_29796 === (6))){
var inst_29756 = (state_29795[(9)]);
var inst_29764 = (state_29795[(2)]);
var state_29795__$1 = (function (){var statearr_29803 = state_29795;
(statearr_29803[(10)] = inst_29764);

return statearr_29803;
})();
if(cljs.core.truth_(inst_29756)){
var statearr_29804_29836 = state_29795__$1;
(statearr_29804_29836[(1)] = (7));

} else {
var statearr_29805_29837 = state_29795__$1;
(statearr_29805_29837[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (3))){
var inst_29793 = (state_29795[(2)]);
var state_29795__$1 = state_29795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29795__$1,inst_29793);
} else {
if((state_val_29796 === (12))){
var inst_29780 = (state_29795[(2)]);
var state_29795__$1 = state_29795;
if(cljs.core.truth_(inst_29780)){
var statearr_29806_29838 = state_29795__$1;
(statearr_29806_29838[(1)] = (13));

} else {
var statearr_29807_29839 = state_29795__$1;
(statearr_29807_29839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (2))){
var inst_29749 = (state_29795[(7)]);
var inst_29750 = (state_29795[(8)]);
var inst_29756 = (state_29795[(9)]);
var inst_29752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29753 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_29754 = (new cljs.core.PersistentVector(null,2,(5),inst_29752,inst_29753,null));
var inst_29755 = (function (){var n = inst_29749;
var client_ids_satisfied = inst_29750;
return ((function (n,client_ids_satisfied,inst_29749,inst_29750,inst_29756,inst_29752,inst_29753,inst_29754,state_val_29796,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand){
return (function (m){
var ks_to_pull = cljs.core.remove.call(null,client_ids_satisfied,cljs.core.keys.call(null,m));
if(cljs.core.empty_QMARK_.call(null,ks_to_pull)){
return taoensso.encore.swapped.call(null,m,null);
} else {
return taoensso.encore.swapped.call(null,cljs.core.reduce.call(null,((function (ks_to_pull,n,client_ids_satisfied,inst_29749,inst_29750,inst_29756,inst_29752,inst_29753,inst_29754,state_val_29796,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand){
return (function (m__$1,k){
var vec__29808 = cljs.core.get.call(null,m__$1,k);
var _QMARK_server_ch = cljs.core.nth.call(null,vec__29808,(0),null);
var udt_last_connected = cljs.core.nth.call(null,vec__29808,(1),null);
return cljs.core.assoc.call(null,m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt_last_connected], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_29749,inst_29750,inst_29756,inst_29752,inst_29753,inst_29754,state_val_29796,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand))
,m,ks_to_pull),cljs.core.select_keys.call(null,m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_29749,inst_29750,inst_29756,inst_29752,inst_29753,inst_29754,state_val_29796,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_29756__$1 = taoensso.encore.swap_in_BANG_.call(null,conns_,inst_29754,inst_29755);
var inst_29757 = (function (){var n = inst_29749;
var client_ids_satisfied = inst_29750;
var _QMARK_pulled = inst_29756__$1;
var __x = inst_29756__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,__x,inst_29749,inst_29750,inst_29756,inst_29752,inst_29753,inst_29754,inst_29755,inst_29756__$1,state_val_29796,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand){
return (function (__x__$1){
var or__18438__auto__ = taoensso.truss.impl.non_throwing.call(null,cljs.core.nil_QMARK_).call(null,__x__$1);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.truss.impl.non_throwing.call(null,cljs.core.map_QMARK_).call(null,__x__$1);
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,__x,inst_29749,inst_29750,inst_29756,inst_29752,inst_29753,inst_29754,inst_29755,inst_29756__$1,state_val_29796,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand))
})();
var inst_29758 = inst_29757.call(null,inst_29756__$1);
var state_29795__$1 = (function (){var statearr_29809 = state_29795;
(statearr_29809[(9)] = inst_29756__$1);

return statearr_29809;
})();
if(cljs.core.truth_(inst_29758)){
var statearr_29810_29840 = state_29795__$1;
(statearr_29810_29840[(1)] = (4));

} else {
var statearr_29811_29841 = state_29795__$1;
(statearr_29811_29841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (11))){
var inst_29774 = (state_29795[(11)]);
var state_29795__$1 = state_29795;
var statearr_29812_29842 = state_29795__$1;
(statearr_29812_29842[(2)] = inst_29774);

(statearr_29812_29842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (9))){
var inst_29749 = (state_29795[(7)]);
var inst_29750 = (state_29795[(8)]);
var inst_29774 = (state_29795[(11)]);
var inst_29772 = (state_29795[(2)]);
var inst_29773 = cljs.core.into.call(null,inst_29750,inst_29772);
var inst_29774__$1 = (inst_29749 < nmax_attempts);
var state_29795__$1 = (function (){var statearr_29813 = state_29795;
(statearr_29813[(12)] = inst_29773);

(statearr_29813[(11)] = inst_29774__$1);

return statearr_29813;
})();
if(cljs.core.truth_(inst_29774__$1)){
var statearr_29814_29843 = state_29795__$1;
(statearr_29814_29843[(1)] = (10));

} else {
var statearr_29815_29844 = state_29795__$1;
(statearr_29815_29844[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (5))){
var inst_29756 = (state_29795[(9)]);
var inst_29761 = "([:or nil? map?] ?pulled)";
var inst_29762 = taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,inst_29761,inst_29756,null,null);
var state_29795__$1 = state_29795;
var statearr_29816_29845 = state_29795__$1;
(statearr_29816_29845[(2)] = inst_29762);

(statearr_29816_29845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (14))){
var state_29795__$1 = state_29795;
var statearr_29817_29846 = state_29795__$1;
(statearr_29817_29846[(2)] = null);

(statearr_29817_29846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (16))){
var inst_29773 = (state_29795[(12)]);
var inst_29749 = (state_29795[(7)]);
var inst_29786 = (state_29795[(2)]);
var inst_29787 = (inst_29749 + (1));
var inst_29749__$1 = inst_29787;
var inst_29750 = inst_29773;
var state_29795__$1 = (function (){var statearr_29818 = state_29795;
(statearr_29818[(7)] = inst_29749__$1);

(statearr_29818[(8)] = inst_29750);

(statearr_29818[(13)] = inst_29786);

return statearr_29818;
})();
var statearr_29819_29847 = state_29795__$1;
(statearr_29819_29847[(2)] = null);

(statearr_29819_29847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (10))){
var inst_29773 = (state_29795[(12)]);
var inst_29776 = cljs.core.complement.call(null,inst_29773);
var inst_29777 = cljs.core.some.call(null,inst_29776,client_ids_unsatisfied);
var state_29795__$1 = state_29795;
var statearr_29820_29848 = state_29795__$1;
(statearr_29820_29848[(2)] = inst_29777);

(statearr_29820_29848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29796 === (8))){
var state_29795__$1 = state_29795;
var statearr_29821_29849 = state_29795__$1;
(statearr_29821_29849[(2)] = null);

(statearr_29821_29849[(1)] = (9));


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
});})(c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand))
;
return ((function (switch__23489__auto__,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand){
return (function() {
var taoensso$sente$state_machine__23490__auto__ = null;
var taoensso$sente$state_machine__23490__auto____0 = (function (){
var statearr_29825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29825[(0)] = taoensso$sente$state_machine__23490__auto__);

(statearr_29825[(1)] = (1));

return statearr_29825;
});
var taoensso$sente$state_machine__23490__auto____1 = (function (state_29795){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_29795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e29826){if((e29826 instanceof Object)){
var ex__23493__auto__ = e29826;
var statearr_29827_29850 = state_29795;
(statearr_29827_29850[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29851 = state_29795;
state_29795 = G__29851;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
taoensso$sente$state_machine__23490__auto__ = function(state_29795){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23490__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23490__auto____1.call(this,state_29795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23490__auto____0;
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23490__auto____1;
return taoensso$sente$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand))
})();
var state__23603__auto__ = (function (){var statearr_29828 = f__23602__auto__.call(null);
(statearr_29828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_29828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__,client_ids_unsatisfied,vec__29745,map__29746,map__29746__$1,nmax_attempts,ms_base,ms_rand))
);

return c__23601__auto__;
}
});

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$maxFixedArity = (3);

taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$lang$applyTo = (function (seq29740){
var G__29741 = cljs.core.first.call(null,seq29740);
var seq29740__$1 = cljs.core.next.call(null,seq29740);
var G__29742 = cljs.core.first.call(null,seq29740__$1);
var seq29740__$2 = cljs.core.next.call(null,seq29740__$1);
var G__29743 = cljs.core.first.call(null,seq29740__$2);
var seq29740__$3 = cljs.core.next.call(null,seq29740__$2);
return taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29741,G__29742,G__29743,seq29740__$3);
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail
 */
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk);
} else {
var m__19102__auto____$1 = (taoensso.sente._chsk_connect_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-connect!",chsk);
}
}
}
});

/**
 * Implementation detail
 */
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk,ev,opts);
} else {
var m__19102__auto____$1 = (taoensso.sente._chsk_send_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.-chsk-send!",chsk);
}
}
}
});

/**
 * DEPRECATED: Please use `chsk-disconnect!` instead
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk);
} else {
var m__19102__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Disconnects channel socket
 */
taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1(chsk);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente.chsk_disconnect_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk);
} else {
var m__19102__auto____$1 = (taoensso.sente.chsk_disconnect_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-disconnect!",chsk);
}
}
}
});

/**
 * Reconnects channel socket (useful for reauthenticating after login/logout, etc.)
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__19101__auto__ = (((chsk == null))?null:chsk);
var m__19102__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,chsk);
} else {
var m__19102__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args29852 = [];
var len__19507__auto___29855 = arguments.length;
var i__19508__auto___29856 = (0);
while(true){
if((i__19508__auto___29856 < len__19507__auto___29855)){
args29852.push((arguments[i__19508__auto___29856]));

var G__29857 = (i__19508__auto___29856 + (1));
i__19508__auto___29856 = G__29857;
continue;
} else {
}
break;
}

var G__29854 = args29852.length;
switch (G__29854) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29852.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",646,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente._chsk_send_BANG_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__18438__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__18438__auto__){
return or__18438__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str("(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nneg-int? ?timeout-ms)))")].join('')));
}

if(cljs.core.truth_((function (){var or__18438__auto__ = (_QMARK_cb == null);
if(or__18438__auto__){
return or__18438__auto__;
} else {
var or__18438__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__18438__auto____$1){
return or__18438__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str("(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))")].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4657__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto__)){
var cb_uuid = temp__4657__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4657__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4657__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__29859,merge_state){
var map__29863 = p__29859;
var map__29863__$1 = ((((!((map__29863 == null)))?((((map__29863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);
var chsk = map__29863__$1;
var chs = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__29865 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__29863,map__29863__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__18426__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__18426__auto__)){
var and__18426__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__18426__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__18426__auto____$1;
}
} else {
return and__18426__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__29863,map__29863__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__29865,(0),null);
var new_state = cljs.core.nth.call(null,vec__29865,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var __x_29870 = _QMARK_cb;
try{if(cljs.core.truth_(taoensso.encore.chan_QMARK_.call(null,__x_29870))){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29868){if((e29868 instanceof Error)){
var __t_29871 = e29868;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/chan? ?cb)",__x_29870,__t_29871,null);
} else {
throw e29868;

}
}
taoensso.sente.assert_event.call(null,ev);

var vec__29869 = ev;
var ev_id = cljs.core.nth.call(null,vec__29869,(0),null);
var _ = cljs.core.nth.call(null,vec__29869,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__29869,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__29869,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",703,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = (function (){var __x = clj;
try{if(cljs.core.vector_QMARK_.call(null,__x)){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29877){if((e29877 instanceof Error)){
var __t = e29877;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(vector? clj)",__x,__t,null);
} else {
throw e29877;

}
}})();
var seq__29878 = cljs.core.seq.call(null,buffered_evs);
var chunk__29879 = null;
var count__29880 = (0);
var i__29881 = (0);
while(true){
if((i__29881 < count__29880)){
var ev = cljs.core._nth.call(null,chunk__29879,i__29881);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__29882 = seq__29878;
var G__29883 = chunk__29879;
var G__29884 = count__29880;
var G__29885 = (i__29881 + (1));
seq__29878 = G__29882;
chunk__29879 = G__29883;
count__29880 = G__29884;
i__29881 = G__29885;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29878);
if(temp__4657__auto__){
var seq__29878__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29878__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__29878__$1);
var G__29886 = cljs.core.chunk_rest.call(null,seq__29878__$1);
var G__29887 = c__19249__auto__;
var G__29888 = cljs.core.count.call(null,c__19249__auto__);
var G__29889 = (0);
seq__29878 = G__29886;
chunk__29879 = G__29887;
count__29880 = G__29888;
i__29881 = G__29889;
continue;
} else {
var ev = cljs.core.first.call(null,seq__29878__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__29890 = cljs.core.next.call(null,seq__29878__$1);
var G__29891 = null;
var G__29892 = (0);
var G__29893 = (0);
seq__29878 = G__29890;
chunk__29879 = G__29891;
count__29880 = G__29892;
i__29881 = G__29893;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",713,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__29896 = clj;
var _ = cljs.core.nth.call(null,vec__29896,(0),null);
var vec__29897 = cljs.core.nth.call(null,vec__29896,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__29897,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__29897,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__29897,(2),null);
var handshake_ev = vec__29896;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",719,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__29896,_,vec__29897,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__29896,_,vec__29897,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.active_retry_id_ = active_retry_id_;
this.retry_count_ = retry_count_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19060__auto__,k__19061__auto__){
var self__ = this;
var this__19060__auto____$1 = this;
return cljs.core._lookup.call(null,this__19060__auto____$1,k__19061__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19062__auto__,k29899,else__19063__auto__){
var self__ = this;
var this__19062__auto____$1 = this;
var G__29901 = (((k29899 instanceof cljs.core.Keyword))?k29899.fqn:null);
switch (G__29901) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29899,else__19063__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19074__auto__,writer__19075__auto__,opts__19076__auto__){
var self__ = this;
var this__19074__auto____$1 = this;
var pr_pair__19077__auto__ = ((function (this__19074__auto____$1){
return (function (keyval__19078__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,cljs.core.pr_writer,""," ","",opts__19076__auto__,keyval__19078__auto__);
});})(this__19074__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,pr_pair__19077__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__19076__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29898){
var self__ = this;
var G__29898__$1 = this;
return (new cljs.core.RecordIter((0),G__29898__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19058__auto__){
var self__ = this;
var this__19058__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19054__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19064__auto__){
var self__ = this;
var this__19064__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19055__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19056__auto__,other__19057__auto__){
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19069__auto__,k__19070__auto__){
var self__ = this;
var this__19069__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__19070__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19069__auto____$1),self__.__meta),k__19070__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19070__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19067__auto__,k__19068__auto__,G__29898){
var self__ = this;
var this__19067__auto____$1 = this;
var pred__29902 = cljs.core.keyword_identical_QMARK_;
var expr__29903 = k__19068__auto__;
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__29903))){
return (new taoensso.sente.ChWebSocket(G__29898,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__29898,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__29898,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__29898,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__29898,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__29898,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__29898,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,G__29898,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,G__29898,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,G__29898,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__29898,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__29898,self__.active_retry_id_,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,G__29898,self__.retry_count_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29902.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__29903))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,G__29898,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19068__auto__,G__29898),null));
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
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19072__auto__){
var self__ = this;
var this__19072__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19059__auto__,G__29898){
var self__ = this;
var this__19059__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.cbs_waiting_,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.backoff_ms_fn,self__.active_retry_id_,self__.retry_count_,G__29898,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19065__auto__,entry__19066__auto__){
var self__ = this;
var this__19065__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19066__auto__)){
return cljs.core._assoc.call(null,this__19065__auto____$1,cljs.core._nth.call(null,entry__19066__auto__,(0)),cljs.core._nth.call(null,entry__19066__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19065__auto____$1,entry__19066__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__29905){
var self__ = this;
var map__29906 = p__29905;
var map__29906__$1 = ((((!((map__29906 == null)))?((((map__29906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29906):map__29906);
var opts = map__29906__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",750,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4657__auto___29942 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___29942)){
var cb_uuid_29943 = temp__4657__auto___29942;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_29943], null),(function (){var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29908){if((e29908 instanceof Error)){
var __t = e29908;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e29908;

}
}})());

var temp__4657__auto___29944__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4657__auto___29944__$1)){
var timeout_ms_29945 = temp__4657__auto___29944__$1;
var c__23601__auto___29946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___29946,timeout_ms_29945,temp__4657__auto___29944__$1,cb_uuid_29943,temp__4657__auto___29942,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___29946,timeout_ms_29945,temp__4657__auto___29944__$1,cb_uuid_29943,temp__4657__auto___29942,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_29919){
var state_val_29920 = (state_29919[(1)]);
if((state_val_29920 === (1))){
var inst_29909 = cljs.core.async.timeout.call(null,timeout_ms_29945);
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29919__$1,(2),inst_29909);
} else {
if((state_val_29920 === (2))){
var inst_29912 = (state_29919[(7)]);
var inst_29911 = (state_29919[(2)]);
var inst_29912__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_29919__$1 = (function (){var statearr_29921 = state_29919;
(statearr_29921[(7)] = inst_29912__$1);

(statearr_29921[(8)] = inst_29911);

return statearr_29921;
})();
if(cljs.core.truth_(inst_29912__$1)){
var statearr_29922_29947 = state_29919__$1;
(statearr_29922_29947[(1)] = (3));

} else {
var statearr_29923_29948 = state_29919__$1;
(statearr_29923_29948[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (3))){
var inst_29912 = (state_29919[(7)]);
var inst_29914 = inst_29912.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_29919__$1 = state_29919;
var statearr_29924_29949 = state_29919__$1;
(statearr_29924_29949[(2)] = inst_29914);

(statearr_29924_29949[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (4))){
var state_29919__$1 = state_29919;
var statearr_29925_29950 = state_29919__$1;
(statearr_29925_29950[(2)] = null);

(statearr_29925_29950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (5))){
var inst_29917 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29919__$1,inst_29917);
} else {
return null;
}
}
}
}
}
});})(c__23601__auto___29946,timeout_ms_29945,temp__4657__auto___29944__$1,cb_uuid_29943,temp__4657__auto___29942,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__23489__auto__,c__23601__auto___29946,timeout_ms_29945,temp__4657__auto___29944__$1,cb_uuid_29943,temp__4657__auto___29942,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__23490__auto__ = null;
var taoensso$sente$state_machine__23490__auto____0 = (function (){
var statearr_29929 = [null,null,null,null,null,null,null,null,null];
(statearr_29929[(0)] = taoensso$sente$state_machine__23490__auto__);

(statearr_29929[(1)] = (1));

return statearr_29929;
});
var taoensso$sente$state_machine__23490__auto____1 = (function (state_29919){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_29919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e29930){if((e29930 instanceof Object)){
var ex__23493__auto__ = e29930;
var statearr_29931_29951 = state_29919;
(statearr_29931_29951[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29952 = state_29919;
state_29919 = G__29952;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
taoensso$sente$state_machine__23490__auto__ = function(state_29919){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__23490__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__23490__auto____1.call(this,state_29919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__23490__auto____0;
taoensso$sente$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__23490__auto____1;
return taoensso$sente$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___29946,timeout_ms_29945,temp__4657__auto___29944__$1,cb_uuid_29943,temp__4657__auto___29942,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__23603__auto__ = (function (){var statearr_29932 = f__23602__auto__.call(null);
(statearr_29932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___29946);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___29946,timeout_ms_29945,temp__4657__auto___29944__$1,cb_uuid_29943,temp__4657__auto___29942,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e29933){if((e29933 instanceof Error)){
var e = e29933;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",769,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__29906,map__29906__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4657__auto___29953 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4657__auto___29953)){
var cb_uuid_29954 = temp__4657__auto___29953;
var cb_fn_STAR__29955 = (function (){var or__18438__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_29954);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var __x = _QMARK_cb_fn;
try{if(cljs.core.truth_(taoensso.truss.impl.nnil_QMARK_.call(null,__x))){
return __x;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e29934){if((e29934 instanceof Error)){
var __t = e29934;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(taoensso.truss.impl/nnil? ?cb-fn)",__x,__t,null);
} else {
throw e29934;

}
}}
})();
cb_fn_STAR__29955.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e29933;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto__)){
var s = temp__4657__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___29956 = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4657__auto___29956)){
var s_29957 = temp__4657__auto___29956;
s_29957.close((3000),"SENTE_RECONNECT");
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4657__auto__ = (function (){var or__18438__auto__ = taoensso.encore.oget.call(null,window,"WebSocket");
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.oget.call(null,window,"MozWebSocket");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var WebSocket = temp__4657__auto__;
var retry_id = taoensso.encore.uuid_str.call(null);
var connect_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
var retry_fn = ((function (retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = cljs.core.swap_BANG_.call(null,self__.retry_count_,cljs.core.inc);
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",800,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return window.setTimeout(taoensso$sente$connect_fn,backoff_ms);
} else {
return null;
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null)))));
}catch (e29938){if((e29938 instanceof Error)){
var e = e29938;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",811,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_fn,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e29938;

}
}})();
if(cljs.core.not.call(null,_QMARK_socket)){
return retry_fn.call(null);
} else {
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__29939 = _QMARK_socket;
(G__29939["onerror"] = ((function (G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",820,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
});})(G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__29939["onmessage"] = ((function (G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.call(null,ws_ev,"data");
var vec__29940 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__29940,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__29940,(1),null);
var or__18438__auto__ = (function (){var and__18426__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));
} else {
return and__18426__auto__;
}
})();
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var temp__4655__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4655__auto__)){
var cb_uuid = temp__4655__auto__;
var temp__4655__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4655__auto____$1)){
var cb_fn = temp__4655__auto____$1;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",838,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__18438__auto__,ppstr,vec__29940,clj,_QMARK_cb_uuid,G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4655__auto____$1,cb_uuid,temp__4655__auto__,or__18438__auto__,ppstr,vec__29940,clj,_QMARK_cb_uuid,G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__29939["onopen"] = ((function (G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

(G__29939["onclose"] = ((function (G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);
});})(G__29939,retry_fn,_QMARK_socket,retry_id,WebSocket,temp__4657__auto__,chsk__$1))
);

return G__29939;
})());
}
});})(retry_id,WebSocket,temp__4657__auto__,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

cljs.core.reset_BANG_.call(null,self__.retry_count_,(0));

connect_fn.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__19094__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__19094__auto__,writer__19095__auto__){
return cljs.core._write.call(null,writer__19095__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,state_,cbs_waiting_,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,backoff_ms_fn,active_retry_id_,retry_count_,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__29900){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__29900),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__29900),null,cljs.core.dissoc.call(null,G__29900,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093)),null));
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
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.active_retry_id_ = active_retry_id_;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19060__auto__,k__19061__auto__){
var self__ = this;
var this__19060__auto____$1 = this;
return cljs.core._lookup.call(null,this__19060__auto____$1,k__19061__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19062__auto__,k29959,else__19063__auto__){
var self__ = this;
var this__19062__auto____$1 = this;
var G__29961 = (((k29959 instanceof cljs.core.Keyword))?k29959.fqn:null);
switch (G__29961) {
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "client-id":
return self__.client_id;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "url":
return self__.url;

break;
case "active-retry-id_":
return self__.active_retry_id_;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29959,else__19063__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19074__auto__,writer__19075__auto__,opts__19076__auto__){
var self__ = this;
var this__19074__auto____$1 = this;
var pr_pair__19077__auto__ = ((function (this__19074__auto____$1){
return (function (keyval__19078__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,cljs.core.pr_writer,""," ","",opts__19076__auto__,keyval__19078__auto__);
});})(this__19074__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19075__auto__,pr_pair__19077__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__19076__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29958){
var self__ = this;
var G__29958__$1 = this;
return (new cljs.core.RecordIter((0),G__29958__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19058__auto__){
var self__ = this;
var this__19058__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19054__auto__){
var self__ = this;
var this__19054__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19064__auto__){
var self__ = this;
var this__19064__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19055__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19056__auto__,other__19057__auto__){
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19069__auto__,k__19070__auto__){
var self__ = this;
var this__19069__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__19070__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19069__auto____$1),self__.__meta),k__19070__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19070__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19067__auto__,k__19068__auto__,G__29958){
var self__ = this;
var this__19067__auto____$1 = this;
var pred__29962 = cljs.core.keyword_identical_QMARK_;
var expr__29963 = k__19068__auto__;
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(G__29958,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__29958,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__29958,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__29958,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__29958,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__29958,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__29958,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,G__29958,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,G__29958,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__29958,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29962.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__29963))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,G__29958,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19068__auto__,G__29958),null));
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
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19072__auto__){
var self__ = this;
var this__19072__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),self__.active_retry_id_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19059__auto__,G__29958){
var self__ = this;
var this__19059__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.active_retry_id_,self__.backoff_ms_fn,G__29958,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19065__auto__,entry__19066__auto__){
var self__ = this;
var this__19065__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19066__auto__)){
return cljs.core._assoc.call(null,this__19065__auto____$1,cljs.core._nth.call(null,entry__19066__auto__,(0)),cljs.core._nth.call(null,entry__19066__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19065__auto____$1,entry__19066__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,p__29965){
var self__ = this;
var map__29966 = p__29965;
var map__29966__$1 = ((((!((map__29966 == null)))?((((map__29966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29966):map__29966);
var opts = map__29966__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",879,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__29966,map__29966__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__29966,map__29966__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_));
taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null));
})()], null)),((function (csrf_token,_QMARK_cb_fn,chsk__$1,map__29966,map__29966__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__29968){
var map__29972 = p__29968;
var map__29972__$1 = ((((!((map__29972 == null)))?((((map__29972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29972):map__29972);
var _QMARK_error = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__29972__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__29974 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__29974,(0),null);
var _ = cljs.core.nth.call(null,vec__29974,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",919,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__29974,resp_clj,_,map__29972,map__29972__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__29966,map__29966__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__29974,resp_clj,_,map__29972,map__29972__$1,_QMARK_error,_QMARK_content,csrf_token,_QMARK_cb_fn,chsk__$1,map__29966,map__29966__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(csrf_token,_QMARK_cb_fn,chsk__$1,map__29966,map__29966__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
return taoensso.sente.chsk_disconnect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_disconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"disconnected");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

var temp__4657__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto__)){
var x = temp__4657__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,"reconnecting");

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4657__auto___29990 = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4657__auto___29990)){
var x_29991 = temp__4657__auto___29990;
x_29991.abort();
} else {
}

return taoensso.sente._chsk_connect_BANG_.call(null,chsk__$1);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var retry_id = taoensso.encore.uuid_str.call(null);
var poll_fn = ((function (retry_id,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",940,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(retry_id,chsk__$1))
,null)),null);

var retry_fn = ((function (retry_id,chsk__$1){
return (function (){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.active_retry_id_),retry_id)){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = self__.backoff_ms_fn.call(null,retry_count_STAR_);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",946,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s)",retry_count_STAR_], null);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,null)),null);

return window.setTimeout(((function (retry_count_STAR_,backoff_ms,retry_id,chsk__$1){
return (function (){
return taoensso$sente$poll_fn.call(null,retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,retry_id,chsk__$1))
,backoff_ms);
} else {
return null;
}
});})(retry_id,chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_fn,retry_id,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__29982){
var map__29986 = p__29982;
var map__29986__$1 = ((((!((map__29986 == null)))?((((map__29986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29986):map__29986);
var _QMARK_error = cljs.core.get.call(null,map__29986__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__29986__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_fn.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__29988 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__29988,(0),null);
var _ = cljs.core.nth.call(null,vec__29988,(1),null);
var or__18438__auto___29992 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__18438__auto___29992)){
} else {
var buffered_evs_29993 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_29993);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$poll_fn.call(null,(0));
}
});})(retry_fn,retry_id,chsk__$1))
));
});})(retry_id,chsk__$1))
;
cljs.core.reset_BANG_.call(null,self__.active_retry_id_,retry_id);

poll_fn.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"active-retry-id_","active-retry-id_",1468292413,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__19094__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__19094__auto__,writer__19095__auto__){
return cljs.core._write.call(null,writer__19095__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,timeout_ms,ajax_opts,curr_xhr_,active_retry_id_,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__29960){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114).cljs$core$IFn$_invoke$arity$1(G__29960),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__29960),null,cljs.core.dissoc.call(null,G__29960,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__29995 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29995) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :params         ; Map of any params to incl. in chsk Ring requests (handy for
 *                  ; application-level auth, etc.)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-timeout-ms  ; Ping to keep a long-polling (Ajax) conn alive '' [1]
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 * 
 *   [1] If you're using Immutant and override the default :lp-timeout-ms, you'll
 *    need to provide the same timeout value to
 *    `taoensso.sente.server-adapters.immutant/make-immutant-adapter` and use
 *    the result of that function as the web server adapter to your server-side
 *    `make-channel-socket-server!`.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___30011 = arguments.length;
var i__19508__auto___30012 = (0);
while(true){
if((i__19508__auto___30012 < len__19507__auto___30011)){
args__19514__auto__.push((arguments[i__19508__auto___30012]));

var G__30013 = (i__19508__auto___30012 + (1));
i__19508__auto___30012 = G__30013;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__30000){
var vec__30001 = p__30000;
var map__30002 = cljs.core.nth.call(null,vec__30001,(0),null);
var map__30002__$1 = ((((!((map__30002 == null)))?((((map__30002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30002):map__30002);
var opts = map__30002__$1;
var ajax_opts = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__18438__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__30002__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__30001,(1),null);
if(cljs.core.truth_((function (){var __x = type;
try{if(((function (__x,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (__x__$1){
return cljs.core.contains_QMARK_.call(null,taoensso.truss.impl.set_STAR_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)),__x__$1);
});})(__x,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e30004){if((e30004 instanceof Error)){
var __t = e30004;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"([:in #{:ws :ajax :auto}] type)",__x,__t,null);
} else {
throw e30004;

}
}})())){
} else {
throw (new Error("Assert failed: (have? [:in #{:ws :ajax :auto}] type)"));
}

if(cljs.core.truth_((function (){var __x = client_id;
try{if(cljs.core.truth_(taoensso.encore.nblank_str_QMARK_.call(null,__x))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e30005){if((e30005 instanceof Error)){
var __t = e30005;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"(enc/nblank-str? client-id)",__x,__t,null);
} else {
throw e30005;

}
}})())){
} else {
throw (new Error("Assert failed: (have? enc/nblank-str? client-id)"));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",1055,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",1057,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__18438__auto__ = host;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__18438__auto__ = path;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__18438__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__18438__auto__){
return or__18438__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__30006 = ev;
var id = cljs.core.nth.call(null,vec__30006,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__30006,(1),null);
var __x_30014 = (function (){try{return cljs.core.namespace.call(null,id);
}catch (e30007){if((e30007 instanceof Error)){
var __t = e30007;
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__29997#] (not= p1__29997# \"chsk\")) (namespace id))",taoensso.truss.impl._invar_undefined_val,__t,null);
} else {
throw e30007;

}
}})();
try{if(((function (__x_30014,vec__30006,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__29997_SHARP_){
return cljs.core.not_EQ_.call(null,p1__29997_SHARP_,"chsk");
});})(__x_30014,vec__30006,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
.call(null,__x_30014)){
} else {
taoensso.truss.impl._invar_violation_BANG_.call(null);
}
}catch (e30008){if((e30008 instanceof Error)){
var __t_30015 = e30008;
taoensso.truss.impl._invar_violation_BANG_.call(null,true,"taoensso.sente",null,"((fn* [p1__29997#] (not= p1__29997# \"chsk\")) (namespace id))",__x_30014,__t_30015,null);
} else {
throw e30008;

}
}
return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__18438__auto__ = (function (){var and__18426__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__18426__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,packer__$1,private_chs,params,cljs.core.atom.call(null,(0)),backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,"pending"),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__18426__auto__;
}
})();
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var and__18426__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__18426__auto__){
return taoensso.sente._chsk_connect_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"active-retry-id_","active-retry-id_",-172239114),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,params,backoff_ms_fn,(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),cljs.core.atom.call(null,"pending"),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null))])));
} else {
return and__18426__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str("chsk")].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__30010 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__30010,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__30010,(1),null);
var ev__$1 = vec__30010;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__30001,map__30002,map__30002__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq29998){
var G__29999 = cljs.core.first.call(null,seq29998);
var seq29998__$1 = cljs.core.next.call(null,seq29998);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29999,seq29998__$1);
});
taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__30222 = opts;
var map__30222__$1 = ((((!((map__30222 == null)))?((((map__30222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30222):map__30222);
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30222__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30222__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__23601__auto___30428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (state_30353){
var state_val_30354 = (state_30353[(1)]);
if((state_val_30354 === (7))){
var inst_30349 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30355_30429 = state_30353__$1;
(statearr_30355_30429[(2)] = inst_30349);

(statearr_30355_30429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (20))){
var inst_30230 = (state_30353[(7)]);
var inst_30231 = (state_30353[(8)]);
var inst_30232 = (state_30353[(9)]);
var inst_30258 = (state_30353[(10)]);
var inst_30257 = (state_30353[(11)]);
var inst_30233 = (state_30353[(12)]);
var inst_30268 = (function (){var vec__30225 = inst_30230;
var v = inst_30231;
var p = inst_30232;
var stop_QMARK_ = inst_30233;
var map__30236 = inst_30257;
var event_msg = inst_30257;
var event = inst_30258;
return ((function (vec__30225,v,p,stop_QMARK_,map__30236,event_msg,event,inst_30230,inst_30231,inst_30232,inst_30258,inst_30257,inst_30233,state_val_30354,c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__30225,v,p,stop_QMARK_,map__30236,event_msg,event,inst_30230,inst_30231,inst_30232,inst_30258,inst_30257,inst_30233,state_val_30354,c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_30269 = (new cljs.core.Delay(inst_30268,null));
var inst_30270 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",1176,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_30269,null);
var state_30353__$1 = state_30353;
var statearr_30356_30430 = state_30353__$1;
(statearr_30356_30430[(2)] = inst_30270);

(statearr_30356_30430[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (27))){
var inst_30257 = (state_30353[(11)]);
var inst_30275 = (state_30353[(2)]);
var inst_30276 = "(server-event-msg? event-msg)";
var inst_30277 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_30276,inst_30257,inst_30275,null);
var state_30353__$1 = state_30353;
var statearr_30357_30431 = state_30353__$1;
(statearr_30357_30431[(2)] = inst_30277);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (1))){
var state_30353__$1 = state_30353;
var statearr_30358_30432 = state_30353__$1;
(statearr_30358_30432[(2)] = null);

(statearr_30358_30432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (24))){
var state_30353__$1 = state_30353;
var statearr_30359_30433 = state_30353__$1;
(statearr_30359_30433[(2)] = null);

(statearr_30359_30433[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (39))){
var state_30353__$1 = state_30353;
var statearr_30360_30434 = state_30353__$1;
(statearr_30360_30434[(2)] = null);

(statearr_30360_30434[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (46))){
var inst_30322 = (state_30353[(13)]);
var inst_30330 = (state_30353[(2)]);
var inst_30331 = [inst_30330,null];
var inst_30332 = (new cljs.core.PersistentVector(null,2,(5),inst_30322,inst_30331,null));
var state_30353__$1 = state_30353;
var statearr_30361_30435 = state_30353__$1;
(statearr_30361_30435[(2)] = inst_30332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (4))){
var inst_30230 = (state_30353[(7)]);
var inst_30232 = (state_30353[(9)]);
var inst_30233 = (state_30353[(12)]);
var inst_30230__$1 = (state_30353[(2)]);
var inst_30231 = cljs.core.nth.call(null,inst_30230__$1,(0),null);
var inst_30232__$1 = cljs.core.nth.call(null,inst_30230__$1,(1),null);
var inst_30233__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_30232__$1,ch_ctrl);
var state_30353__$1 = (function (){var statearr_30362 = state_30353;
(statearr_30362[(7)] = inst_30230__$1);

(statearr_30362[(8)] = inst_30231);

(statearr_30362[(9)] = inst_30232__$1);

(statearr_30362[(12)] = inst_30233__$1);

return statearr_30362;
})();
if(cljs.core.truth_(inst_30233__$1)){
var statearr_30363_30436 = state_30353__$1;
(statearr_30363_30436[(1)] = (5));

} else {
var statearr_30364_30437 = state_30353__$1;
(statearr_30364_30437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (15))){
var inst_30231 = (state_30353[(8)]);
var state_30353__$1 = state_30353;
var statearr_30365_30438 = state_30353__$1;
(statearr_30365_30438[(2)] = inst_30231);

(statearr_30365_30438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (48))){
var state_30353__$1 = state_30353;
var statearr_30366_30439 = state_30353__$1;
(statearr_30366_30439[(2)] = null);

(statearr_30366_30439[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (21))){
var state_30353__$1 = state_30353;
var statearr_30367_30440 = state_30353__$1;
(statearr_30367_30440[(2)] = null);

(statearr_30367_30440[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (31))){
var inst_30286 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30368_30441 = state_30353__$1;
(statearr_30368_30441[(2)] = inst_30286);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (32))){
var inst_30303 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30369_30442 = state_30353__$1;
(statearr_30369_30442[(2)] = inst_30303);

(statearr_30369_30442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (40))){
var inst_30346 = (state_30353[(2)]);
var state_30353__$1 = (function (){var statearr_30370 = state_30353;
(statearr_30370[(14)] = inst_30346);

return statearr_30370;
})();
var statearr_30371_30443 = state_30353__$1;
(statearr_30371_30443[(2)] = null);

(statearr_30371_30443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (33))){
var inst_30257 = (state_30353[(11)]);
var inst_30290 = (state_30353[(2)]);
var inst_30291 = "(client-event-msg? event-msg)";
var inst_30292 = taoensso.truss.impl._invar_violation_BANG_.call(null,null,"taoensso.sente",null,inst_30291,inst_30257,inst_30290,null);
var state_30353__$1 = state_30353;
var statearr_30372_30444 = state_30353__$1;
(statearr_30372_30444[(2)] = inst_30292);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (13))){
var inst_30249 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30373_30445 = state_30353__$1;
(statearr_30373_30445[(2)] = inst_30249);

(statearr_30373_30445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (22))){
var inst_30273 = (state_30353[(2)]);
var state_30353__$1 = (function (){var statearr_30374 = state_30353;
(statearr_30374[(15)] = inst_30273);

return statearr_30374;
})();
if(cljs.core.truth_(server_QMARK_)){
var statearr_30375_30446 = state_30353__$1;
(statearr_30375_30446[(1)] = (23));

} else {
var statearr_30376_30447 = state_30353__$1;
(statearr_30376_30447[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (36))){
var inst_30299 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_30353__$1 = state_30353;
var statearr_30377_30448 = state_30353__$1;
(statearr_30377_30448[(2)] = inst_30299);

(statearr_30377_30448[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (41))){
var inst_30336 = (state_30353[(16)]);
var inst_30334 = (state_30353[(17)]);
var inst_30334__$1 = (state_30353[(2)]);
var inst_30335 = cljs.core.nth.call(null,inst_30334__$1,(0),null);
var inst_30336__$1 = cljs.core.nth.call(null,inst_30334__$1,(1),null);
var state_30353__$1 = (function (){var statearr_30378 = state_30353;
(statearr_30378[(18)] = inst_30335);

(statearr_30378[(16)] = inst_30336__$1);

(statearr_30378[(17)] = inst_30334__$1);

return statearr_30378;
})();
if(cljs.core.truth_(inst_30336__$1)){
var statearr_30379_30449 = state_30353__$1;
(statearr_30379_30449[(1)] = (47));

} else {
var statearr_30380_30450 = state_30353__$1;
(statearr_30380_30450[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (43))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30353,(42),Error,null,(41));
var inst_30322 = cljs.core.PersistentVector.EMPTY_NODE;
var state_30353__$1 = (function (){var statearr_30381 = state_30353;
(statearr_30381[(13)] = inst_30322);

return statearr_30381;
})();
if(cljs.core.truth_(error_handler)){
var statearr_30382_30451 = state_30353__$1;
(statearr_30382_30451[(1)] = (44));

} else {
var statearr_30383_30452 = state_30353__$1;
(statearr_30383_30452[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (29))){
var inst_30257 = (state_30353[(11)]);
var state_30353__$1 = state_30353;
var statearr_30384_30453 = state_30353__$1;
(statearr_30384_30453[(2)] = inst_30257);

(statearr_30384_30453[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (44))){
var inst_30257 = (state_30353[(11)]);
var inst_30312 = (state_30353[(19)]);
var inst_30324 = error_handler.call(null,inst_30312,inst_30257);
var state_30353__$1 = state_30353;
var statearr_30385_30454 = state_30353__$1;
(statearr_30385_30454[(2)] = inst_30324);

(statearr_30385_30454[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (6))){
var inst_30231 = (state_30353[(8)]);
var inst_30239 = (inst_30231 == null);
var inst_30240 = cljs.core.not.call(null,inst_30239);
var state_30353__$1 = state_30353;
if(inst_30240){
var statearr_30386_30455 = state_30353__$1;
(statearr_30386_30455[(1)] = (8));

} else {
var statearr_30387_30456 = state_30353__$1;
(statearr_30387_30456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (28))){
var inst_30257 = (state_30353[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30353,(27),Error,null,(26));
var inst_30281 = taoensso.sente.server_event_msg_QMARK_.call(null,inst_30257);
var state_30353__$1 = state_30353;
if(cljs.core.truth_(inst_30281)){
var statearr_30388_30457 = state_30353__$1;
(statearr_30388_30457[(1)] = (29));

} else {
var statearr_30389_30458 = state_30353__$1;
(statearr_30389_30458[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (25))){
var inst_30266 = (state_30353[(20)]);
var inst_30305 = (state_30353[(2)]);
var inst_30306 = event_msg_handler.call(null,inst_30305);
var inst_30307 = [inst_30306,null];
var inst_30308 = (new cljs.core.PersistentVector(null,2,(5),inst_30266,inst_30307,null));
var state_30353__$1 = state_30353;
var statearr_30390_30459 = state_30353__$1;
(statearr_30390_30459[(2)] = inst_30308);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (34))){
var inst_30257 = (state_30353[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30353,(33),Error,null,(32));
var inst_30296 = taoensso.sente.client_event_msg_QMARK_.call(null,inst_30257);
var state_30353__$1 = state_30353;
if(cljs.core.truth_(inst_30296)){
var statearr_30391_30460 = state_30353__$1;
(statearr_30391_30460[(1)] = (35));

} else {
var statearr_30392_30461 = state_30353__$1;
(statearr_30392_30461[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (17))){
var inst_30310 = (state_30353[(21)]);
var inst_30312 = (state_30353[(19)]);
var inst_30310__$1 = (state_30353[(2)]);
var inst_30311 = cljs.core.nth.call(null,inst_30310__$1,(0),null);
var inst_30312__$1 = cljs.core.nth.call(null,inst_30310__$1,(1),null);
var state_30353__$1 = (function (){var statearr_30393 = state_30353;
(statearr_30393[(21)] = inst_30310__$1);

(statearr_30393[(22)] = inst_30311);

(statearr_30393[(19)] = inst_30312__$1);

return statearr_30393;
})();
if(cljs.core.truth_(inst_30312__$1)){
var statearr_30394_30462 = state_30353__$1;
(statearr_30394_30462[(1)] = (38));

} else {
var statearr_30395_30463 = state_30353__$1;
(statearr_30395_30463[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (3))){
var inst_30351 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30353__$1,inst_30351);
} else {
if((state_val_30354 === (12))){
var state_30353__$1 = state_30353;
var statearr_30396_30464 = state_30353__$1;
(statearr_30396_30464[(2)] = false);

(statearr_30396_30464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (2))){
var inst_30226 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30227 = [ch_recv,ch_ctrl];
var inst_30228 = (new cljs.core.PersistentVector(null,2,(5),inst_30226,inst_30227,null));
var state_30353__$1 = state_30353;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30353__$1,(4),inst_30228);
} else {
if((state_val_30354 === (23))){
var state_30353__$1 = state_30353;
var statearr_30397_30465 = state_30353__$1;
(statearr_30397_30465[(2)] = null);

(statearr_30397_30465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (47))){
var inst_30230 = (state_30353[(7)]);
var inst_30335 = (state_30353[(18)]);
var inst_30310 = (state_30353[(21)]);
var inst_30231 = (state_30353[(8)]);
var inst_30232 = (state_30353[(9)]);
var inst_30336 = (state_30353[(16)]);
var inst_30334 = (state_30353[(17)]);
var inst_30258 = (state_30353[(10)]);
var inst_30257 = (state_30353[(11)]);
var inst_30233 = (state_30353[(12)]);
var inst_30312 = (state_30353[(19)]);
var inst_30338 = (function (){var vec__30225 = inst_30230;
var p = inst_30232;
var _QMARK_error = inst_30312;
var vec__30314 = inst_30334;
var map__30236 = inst_30257;
var v = inst_30231;
var _ = inst_30335;
var e2 = inst_30336;
var _QMARK_error2 = inst_30336;
var event_msg = inst_30257;
var e = inst_30312;
var temp__4657__auto__ = inst_30336;
var vec__30237 = inst_30310;
var event = inst_30258;
var stop_QMARK_ = inst_30233;
return ((function (vec__30225,p,_QMARK_error,vec__30314,map__30236,v,_,e2,_QMARK_error2,event_msg,e,temp__4657__auto__,vec__30237,event,stop_QMARK_,inst_30230,inst_30335,inst_30310,inst_30231,inst_30232,inst_30336,inst_30334,inst_30258,inst_30257,inst_30233,inst_30312,state_val_30354,c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});
;})(vec__30225,p,_QMARK_error,vec__30314,map__30236,v,_,e2,_QMARK_error2,event_msg,e,temp__4657__auto__,vec__30237,event,stop_QMARK_,inst_30230,inst_30335,inst_30310,inst_30231,inst_30232,inst_30336,inst_30334,inst_30258,inst_30257,inst_30233,inst_30312,state_val_30354,c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_30339 = (new cljs.core.Delay(inst_30338,null));
var inst_30340 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",1189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_30339,null);
var state_30353__$1 = state_30353;
var statearr_30398_30466 = state_30353__$1;
(statearr_30398_30466[(2)] = inst_30340);

(statearr_30398_30466[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (35))){
var inst_30257 = (state_30353[(11)]);
var state_30353__$1 = state_30353;
var statearr_30399_30467 = state_30353__$1;
(statearr_30399_30467[(2)] = inst_30257);

(statearr_30399_30467[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30353,(18),Error,null,(17));
var inst_30266 = cljs.core.PersistentVector.EMPTY_NODE;
var state_30353__$1 = (function (){var statearr_30400 = state_30353;
(statearr_30400[(20)] = inst_30266);

return statearr_30400;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_30401_30468 = state_30353__$1;
(statearr_30401_30468[(1)] = (20));

} else {
var statearr_30402_30469 = state_30353__$1;
(statearr_30402_30469[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (11))){
var state_30353__$1 = state_30353;
var statearr_30403_30470 = state_30353__$1;
(statearr_30403_30470[(2)] = true);

(statearr_30403_30470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (9))){
var state_30353__$1 = state_30353;
var statearr_30404_30471 = state_30353__$1;
(statearr_30404_30471[(2)] = false);

(statearr_30404_30471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (5))){
var state_30353__$1 = state_30353;
var statearr_30405_30472 = state_30353__$1;
(statearr_30405_30472[(2)] = null);

(statearr_30405_30472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (14))){
var inst_30231 = (state_30353[(8)]);
var inst_30254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30231);
var state_30353__$1 = state_30353;
var statearr_30406_30473 = state_30353__$1;
(statearr_30406_30473[(2)] = inst_30254);

(statearr_30406_30473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (45))){
var inst_30230 = (state_30353[(7)]);
var inst_30310 = (state_30353[(21)]);
var inst_30231 = (state_30353[(8)]);
var inst_30232 = (state_30353[(9)]);
var inst_30311 = (state_30353[(22)]);
var inst_30258 = (state_30353[(10)]);
var inst_30257 = (state_30353[(11)]);
var inst_30233 = (state_30353[(12)]);
var inst_30312 = (state_30353[(19)]);
var inst_30326 = (function (){var vec__30225 = inst_30230;
var p = inst_30232;
var _QMARK_error = inst_30312;
var map__30236 = inst_30257;
var v = inst_30231;
var temp__4655__auto__ = error_handler;
var _ = inst_30311;
var event_msg = inst_30257;
var e = inst_30312;
var temp__4657__auto__ = inst_30312;
var vec__30237 = inst_30310;
var event = inst_30258;
var stop_QMARK_ = inst_30233;
return ((function (vec__30225,p,_QMARK_error,map__30236,v,temp__4655__auto__,_,event_msg,e,temp__4657__auto__,vec__30237,event,stop_QMARK_,inst_30230,inst_30310,inst_30231,inst_30232,inst_30311,inst_30258,inst_30257,inst_30233,inst_30312,state_val_30354,c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router `event-msg-handler` error: %s",event], null);
});
;})(vec__30225,p,_QMARK_error,map__30236,v,temp__4655__auto__,_,event_msg,e,temp__4657__auto__,vec__30237,event,stop_QMARK_,inst_30230,inst_30310,inst_30231,inst_30232,inst_30311,inst_30258,inst_30257,inst_30233,inst_30312,state_val_30354,c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var inst_30327 = (new cljs.core.Delay(inst_30326,null));
var inst_30328 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/92/zfdt8lbx2zq7fwp09t_nfk894bxsq9/T/form-init938696374858710898.clj",1187,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_30327,null);
var state_30353__$1 = state_30353;
var statearr_30407_30474 = state_30353__$1;
(statearr_30407_30474[(2)] = inst_30328);

(statearr_30407_30474[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (26))){
var inst_30288 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30408_30475 = state_30353__$1;
(statearr_30408_30475[(2)] = inst_30288);

(statearr_30408_30475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (16))){
var inst_30257 = (state_30353[(11)]);
var inst_30257__$1 = (state_30353[(2)]);
var inst_30258 = cljs.core.get.call(null,inst_30257__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_30353__$1 = (function (){var statearr_30409 = state_30353;
(statearr_30409[(10)] = inst_30258);

(statearr_30409[(11)] = inst_30257__$1);

return statearr_30409;
})();
var statearr_30410_30476 = state_30353__$1;
(statearr_30410_30476[(2)] = null);

(statearr_30410_30476[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (38))){
var state_30353__$1 = state_30353;
var statearr_30411_30477 = state_30353__$1;
(statearr_30411_30477[(2)] = null);

(statearr_30411_30477[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (30))){
var inst_30284 = taoensso.truss.impl._invar_violation_BANG_.call(null);
var state_30353__$1 = state_30353;
var statearr_30412_30478 = state_30353__$1;
(statearr_30412_30478[(2)] = inst_30284);

(statearr_30412_30478[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (10))){
var inst_30252 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
if(cljs.core.truth_(inst_30252)){
var statearr_30413_30479 = state_30353__$1;
(statearr_30413_30479[(1)] = (14));

} else {
var statearr_30414_30480 = state_30353__$1;
(statearr_30414_30480[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (18))){
var inst_30259 = (state_30353[(2)]);
var inst_30260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30261 = [null,inst_30259];
var inst_30262 = (new cljs.core.PersistentVector(null,2,(5),inst_30260,inst_30261,null));
var state_30353__$1 = state_30353;
var statearr_30415_30481 = state_30353__$1;
(statearr_30415_30481[(2)] = inst_30262);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (42))){
var inst_30315 = (state_30353[(2)]);
var inst_30316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30317 = [null,inst_30315];
var inst_30318 = (new cljs.core.PersistentVector(null,2,(5),inst_30316,inst_30317,null));
var state_30353__$1 = state_30353;
var statearr_30416_30482 = state_30353__$1;
(statearr_30416_30482[(2)] = inst_30318);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (37))){
var inst_30301 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30417_30483 = state_30353__$1;
(statearr_30417_30483[(2)] = inst_30301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (8))){
var inst_30231 = (state_30353[(8)]);
var inst_30242 = inst_30231.cljs$lang$protocol_mask$partition0$;
var inst_30243 = (inst_30242 & (64));
var inst_30244 = inst_30231.cljs$core$ISeq$;
var inst_30245 = (inst_30243) || (inst_30244);
var state_30353__$1 = state_30353;
if(cljs.core.truth_(inst_30245)){
var statearr_30418_30484 = state_30353__$1;
(statearr_30418_30484[(1)] = (11));

} else {
var statearr_30419_30485 = state_30353__$1;
(statearr_30419_30485[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30354 === (49))){
var inst_30343 = (state_30353[(2)]);
var state_30353__$1 = state_30353;
var statearr_30420_30486 = state_30353__$1;
(statearr_30420_30486[(2)] = inst_30343);

(statearr_30420_30486[(1)] = (40));


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
}
}
}
});})(c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
;
return ((function (switch__23489__auto__,c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto____0 = (function (){
var statearr_30424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30424[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto__);

(statearr_30424[(1)] = (1));

return statearr_30424;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto____1 = (function (state_30353){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_30353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e30425){if((e30425 instanceof Object)){
var ex__23493__auto__ = e30425;
var statearr_30426_30487 = state_30353;
(statearr_30426_30487[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30488 = state_30353;
state_30353 = G__30488;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto__ = function(state_30353){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto____1.call(this,state_30353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
})();
var state__23603__auto__ = (function (){var statearr_30427 = f__23602__auto__.call(null);
(statearr_30427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___30428);

return statearr_30427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___30428,map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
);


return ((function (map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(map__30222,map__30222__$1,trace_evs_QMARK_,error_handler,ch_ctrl))
});
/**
 * Creates a go-loop to call `(event-msg-handler <server-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___30496 = arguments.length;
var i__19508__auto___30497 = (0);
while(true){
if((i__19508__auto___30497 < len__19507__auto___30496)){
args__19514__auto__.push((arguments[i__19508__auto___30497]));

var G__30498 = (i__19508__auto___30497 + (1));
i__19508__auto___30497 = G__30498;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__30492){
var vec__30493 = p__30492;
var map__30494 = cljs.core.nth.call(null,vec__30493,(0),null);
var map__30494__$1 = ((((!((map__30494 == null)))?((((map__30494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30494):map__30494);
var opts = map__30494__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30494__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30494__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq30489){
var G__30490 = cljs.core.first.call(null,seq30489);
var seq30489__$1 = cljs.core.next.call(null,seq30489);
var G__30491 = cljs.core.first.call(null,seq30489__$1);
var seq30489__$2 = cljs.core.next.call(null,seq30489__$1);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30490,G__30491,seq30489__$2);
});
/**
 * Creates a go-loop to call `(event-msg-handler <client-event-msg>)` and
 *   returns a `(fn stop! [])`. Catches & logs errors.
 * 
 *   Advanced users may instead prefer to write their own loop against `ch-recv`.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___30506 = arguments.length;
var i__19508__auto___30507 = (0);
while(true){
if((i__19508__auto___30507 < len__19507__auto___30506)){
args__19514__auto__.push((arguments[i__19508__auto___30507]));

var G__30508 = (i__19508__auto___30507 + (1));
i__19508__auto___30507 = G__30508;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__30502){
var vec__30503 = p__30502;
var map__30504 = cljs.core.nth.call(null,vec__30503,(0),null);
var map__30504__$1 = ((((!((map__30504 == null)))?((((map__30504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30504):map__30504);
var opts = map__30504__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_.call(null,cljs.core.not.call(null,new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq30499){
var G__30500 = cljs.core.first.call(null,seq30499);
var seq30499__$1 = cljs.core.next.call(null,seq30499);
var G__30501 = cljs.core.first.call(null,seq30499__$1);
var seq30499__$2 = cljs.core.next.call(null,seq30499__$1);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30500,G__30501,seq30499__$2);
});
taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED: Please use `ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__30509,websocket_QMARK_){
var map__30512 = p__30509;
var map__30512__$1 = ((((!((map__30512 == null)))?((((map__30512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30512):map__30512);
var location = map__30512__$1;
var adjusted_protocol = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__30512__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__18438__auto__ = path;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=sente.js.map?rel=1466146186139