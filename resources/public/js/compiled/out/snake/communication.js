// Compiled by ClojureScript 1.8.34 {}
goog.provide('snake.communication');
goog.require('cljs.core');
goog.require('snake.ainit');
goog.require('snake.model');
goog.require('snake.config');
goog.require('taoensso.sente');
/**
 * Connect to a configured server instead of the page host
 */
snake.communication.get_chsk_url = (function snake$communication$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__22759 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22759) {
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
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(snake.config.server),cljs.core.str(chsk_path)].join('');
});
if(typeof snake.communication.channel_socket !== 'undefined'){
} else {
snake.communication.channel_socket = (function (){var get_chsk_url22761 = taoensso.sente.get_chsk_url;
taoensso.sente.get_chsk_url = snake.communication.get_chsk_url;

try{return taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
}finally {taoensso.sente.get_chsk_url = get_chsk_url22761;
}})();
}
if(typeof snake.communication.chsk !== 'undefined'){
} else {
snake.communication.chsk = new cljs.core.Keyword(null,"chsk","chsk",-863703081).cljs$core$IFn$_invoke$arity$1(snake.communication.channel_socket);
}
if(typeof snake.communication.ch_chsk !== 'undefined'){
} else {
snake.communication.ch_chsk = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(snake.communication.channel_socket);
}
if(typeof snake.communication.chsk_send_BANG_ !== 'undefined'){
} else {
snake.communication.chsk_send_BANG_ = new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(snake.communication.channel_socket);
}
if(typeof snake.communication.chsk_state !== 'undefined'){
} else {
snake.communication.chsk_state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(snake.communication.channel_socket);
}
snake.communication.dir = (function snake$communication$dir(dx,dy){
return snake.communication.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","dir","snake/dir",1641064997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null)], null));
});
if(typeof snake.communication.event_msg_handler !== 'undefined'){
} else {
snake.communication.event_msg_handler = (function (){var method_table__19362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19366__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snake.communication","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19366__auto__,method_table__19362__auto__,prefer_table__19363__auto__,method_cache__19364__auto__,cached_hierarchy__19365__auto__));
})();
}
cljs.core._add_method.call(null,snake.communication.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22762){
var map__22763 = p__22762;
var map__22763__$1 = ((((!((map__22763 == null)))?((((map__22763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22763):map__22763);
var ev_msg = map__22763__$1;
var event = cljs.core.get.call(null,map__22763__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.println.call(null,"Unhandled event: %s",event);
}));
cljs.core._add_method.call(null,snake.communication.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__22765){
var map__22766 = p__22765;
var map__22766__$1 = ((((!((map__22766 == null)))?((((map__22766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22766):map__22766);
var ev_msg = map__22766__$1;
var _QMARK_data = cljs.core.get.call(null,map__22766__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return cljs.core.println.call(null,"Channel socket successfully established!");
} else {
return cljs.core.println.call(null,"Channel socket state change:",_QMARK_data);
}
}));
cljs.core._add_method.call(null,snake.communication.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__22768){
var map__22769 = p__22768;
var map__22769__$1 = ((((!((map__22769 == null)))?((((map__22769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22769):map__22769);
var ev_msg = map__22769__$1;
var _QMARK_data = cljs.core.get.call(null,map__22769__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return snake.model.world_BANG_.call(null,cljs.core.second.call(null,_QMARK_data));
}));
snake.communication.send_username = (function snake$communication$send_username(){
return snake.communication.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","username","snake/username",2049742250),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.model.app_state))], null));
});
cljs.core._add_method.call(null,snake.communication.event_msg_handler,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__22771){
var map__22772 = p__22771;
var map__22772__$1 = ((((!((map__22772 == null)))?((((map__22772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22772):map__22772);
var ev_msg = map__22772__$1;
var _QMARK_data = cljs.core.get.call(null,map__22772__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__22774 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.call(null,vec__22774,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__22774,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__22774,(2),null);
cljs.core.println.call(null,"Handshake:",_QMARK_data);

snake.model.uid_BANG_.call(null,_QMARK_uid);

return snake.communication.send_username.call(null);
}));
if(typeof snake.communication.router !== 'undefined'){
} else {
snake.communication.router = taoensso.sente.start_client_chsk_router_BANG_.call(null,snake.communication.ch_chsk,snake.communication.event_msg_handler);
}
snake.communication.respawn = (function snake$communication$respawn(){
return snake.communication.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snake","respawn","snake/respawn",-996750908)], null));
});

//# sourceMappingURL=communication.js.map?rel=1466146831323