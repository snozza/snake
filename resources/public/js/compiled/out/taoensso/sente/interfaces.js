// Compiled by ClojureScript 1.8.34 {}
goog.provide('taoensso.sente.interfaces');
goog.require('cljs.core');
goog.require('taoensso.encore');

/**
 * @interface
 */
taoensso.sente.interfaces.IServerChan = function(){};

/**
 * Returns true iff the server channel is currently open
 */
taoensso.sente.interfaces.sch_open_QMARK_ = (function taoensso$sente$interfaces$sch_open_QMARK_(server_ch){
if((!((server_ch == null))) && (!((server_ch.taoensso$sente$interfaces$IServerChan$sch_open_QMARK_$arity$1 == null)))){
return server_ch.taoensso$sente$interfaces$IServerChan$sch_open_QMARK_$arity$1(server_ch);
} else {
var x__19101__auto__ = (((server_ch == null))?null:server_ch);
var m__19102__auto__ = (taoensso.sente.interfaces.sch_open_QMARK_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,server_ch);
} else {
var m__19102__auto____$1 = (taoensso.sente.interfaces.sch_open_QMARK_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,server_ch);
} else {
throw cljs.core.missing_protocol.call(null,"IServerChan.sch-open?",server_ch);
}
}
}
});

/**
 * Closes the server channel and returns true iff the channel was open when
 *  called.
 */
taoensso.sente.interfaces.sch_close_BANG_ = (function taoensso$sente$interfaces$sch_close_BANG_(server_ch){
if((!((server_ch == null))) && (!((server_ch.taoensso$sente$interfaces$IServerChan$sch_close_BANG_$arity$1 == null)))){
return server_ch.taoensso$sente$interfaces$IServerChan$sch_close_BANG_$arity$1(server_ch);
} else {
var x__19101__auto__ = (((server_ch == null))?null:server_ch);
var m__19102__auto__ = (taoensso.sente.interfaces.sch_close_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,server_ch);
} else {
var m__19102__auto____$1 = (taoensso.sente.interfaces.sch_close_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,server_ch);
} else {
throw cljs.core.missing_protocol.call(null,"IServerChan.sch-close!",server_ch);
}
}
}
});

/**
 * Sends a message to server channel. Returns true iff the channel was open
 *  when called.
 */
taoensso.sente.interfaces._sch_send_BANG_ = (function taoensso$sente$interfaces$_sch_send_BANG_(server_ch,msg,close_after_send_QMARK_){
if((!((server_ch == null))) && (!((server_ch.taoensso$sente$interfaces$IServerChan$_sch_send_BANG_$arity$3 == null)))){
return server_ch.taoensso$sente$interfaces$IServerChan$_sch_send_BANG_$arity$3(server_ch,msg,close_after_send_QMARK_);
} else {
var x__19101__auto__ = (((server_ch == null))?null:server_ch);
var m__19102__auto__ = (taoensso.sente.interfaces._sch_send_BANG_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,server_ch,msg,close_after_send_QMARK_);
} else {
var m__19102__auto____$1 = (taoensso.sente.interfaces._sch_send_BANG_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,server_ch,msg,close_after_send_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"IServerChan.-sch-send!",server_ch);
}
}
}
});

/**
 * Sends a message to server channel. Returns true iff the channel was open
 * when called.
 */
taoensso.sente.interfaces.sch_send_BANG_ = (function taoensso$sente$interfaces$sch_send_BANG_(var_args){
var args22598 = [];
var len__19507__auto___22601 = arguments.length;
var i__19508__auto___22602 = (0);
while(true){
if((i__19508__auto___22602 < len__19507__auto___22601)){
args22598.push((arguments[i__19508__auto___22602]));

var G__22603 = (i__19508__auto___22602 + (1));
i__19508__auto___22602 = G__22603;
continue;
} else {
}
break;
}

var G__22600 = args22598.length;
switch (G__22600) {
case 2:
return taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22598.length)].join('')));

}
});

taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (server_ch,msg){
return taoensso.sente.interfaces._sch_send_BANG_.call(null,server_ch,msg,false);
});

taoensso.sente.interfaces.sch_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (server_ch,msg,close_after_send_QMARK_){
return taoensso.sente.interfaces._sch_send_BANG_.call(null,server_ch,msg,close_after_send_QMARK_);
});

taoensso.sente.interfaces.sch_send_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
taoensso.sente.interfaces.IServerChanAdapter = function(){};

/**
 * Given a Ring request (WebSocket handshake or Ajax GET/POST), returns a Ring
 *  response map with a web-server-specific channel :body that implements
 *  Sente's IServerChan protocol.
 * 
 *  Configures channel callbacks with a callbacks map using keys:
 *    :on-open  - (fn [server-ch]) called exactly once after channel is
 *                available for sending.
 *    :on-close - (fn [server-ch status]) called exactly once after channel is
 *                closed for ANY cause, incl. a call to `close!`.
 *    :on-msg   - (fn [server-ch msg]) called for each String or byte[] message
 *                received from client. Currently only used for WebSocket clients.
 */
taoensso.sente.interfaces.ring_req__GT_server_ch_resp = (function taoensso$sente$interfaces$ring_req__GT_server_ch_resp(server_ch_adapter,ring_req,callbacks_map){
if((!((server_ch_adapter == null))) && (!((server_ch_adapter.taoensso$sente$interfaces$IServerChanAdapter$ring_req__GT_server_ch_resp$arity$3 == null)))){
return server_ch_adapter.taoensso$sente$interfaces$IServerChanAdapter$ring_req__GT_server_ch_resp$arity$3(server_ch_adapter,ring_req,callbacks_map);
} else {
var x__19101__auto__ = (((server_ch_adapter == null))?null:server_ch_adapter);
var m__19102__auto__ = (taoensso.sente.interfaces.ring_req__GT_server_ch_resp[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,server_ch_adapter,ring_req,callbacks_map);
} else {
var m__19102__auto____$1 = (taoensso.sente.interfaces.ring_req__GT_server_ch_resp["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,server_ch_adapter,ring_req,callbacks_map);
} else {
throw cljs.core.missing_protocol.call(null,"IServerChanAdapter.ring-req->server-ch-resp",server_ch_adapter);
}
}
}
});


/**
 * Extension pt. for client<->server comms data un/packers:
 *   arbitrary Clojure data <-> serialized strings.
 * @interface
 */
taoensso.sente.interfaces.IPacker = function(){};

taoensso.sente.interfaces.pack = (function taoensso$sente$interfaces$pack(_,x){
if((!((_ == null))) && (!((_.taoensso$sente$interfaces$IPacker$pack$arity$2 == null)))){
return _.taoensso$sente$interfaces$IPacker$pack$arity$2(_,x);
} else {
var x__19101__auto__ = (((_ == null))?null:_);
var m__19102__auto__ = (taoensso.sente.interfaces.pack[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,_,x);
} else {
var m__19102__auto____$1 = (taoensso.sente.interfaces.pack["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IPacker.pack",_);
}
}
}
});

taoensso.sente.interfaces.unpack = (function taoensso$sente$interfaces$unpack(_,x){
if((!((_ == null))) && (!((_.taoensso$sente$interfaces$IPacker$unpack$arity$2 == null)))){
return _.taoensso$sente$interfaces$IPacker$unpack$arity$2(_,x);
} else {
var x__19101__auto__ = (((_ == null))?null:_);
var m__19102__auto__ = (taoensso.sente.interfaces.unpack[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,_,x);
} else {
var m__19102__auto____$1 = (taoensso.sente.interfaces.unpack["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,_,x);
} else {
throw cljs.core.missing_protocol.call(null,"IPacker.unpack",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.interfaces.EdnPacker = (function (){
})
taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = true;

taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.call(null,x);
});

taoensso.sente.interfaces.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.call(null,s);
});

taoensso.sente.interfaces.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.interfaces.EdnPacker.cljs$lang$type = true;

taoensso.sente.interfaces.EdnPacker.cljs$lang$ctorStr = "taoensso.sente.interfaces/EdnPacker";

taoensso.sente.interfaces.EdnPacker.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"taoensso.sente.interfaces/EdnPacker");
});

taoensso.sente.interfaces.__GT_EdnPacker = (function taoensso$sente$interfaces$__GT_EdnPacker(){
return (new taoensso.sente.interfaces.EdnPacker());
});

/**
 * Default Edn packer
 */
taoensso.sente.interfaces.edn_packer = taoensso.sente.interfaces.__GT_EdnPacker.call(null);
taoensso.sente.interfaces.coerce_packer = (function taoensso$sente$interfaces$coerce_packer(x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.interfaces.edn_packer;
} else {
if(((!((x == null)))?(((false) || (x.taoensso$sente$interfaces$IPacker$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,x):false)):cljs.core.native_satisfies_QMARK_.call(null,taoensso.sente.interfaces.IPacker,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Given packer doesn't satisfy IPacker protocol?")].join('')),cljs.core.str("\n"),cljs.core.str("(satisfies? IPacker x)")].join('')));
}

return x;
}
});

//# sourceMappingURL=interfaces.js.map?rel=1466146181101