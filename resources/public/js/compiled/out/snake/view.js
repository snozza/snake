// Compiled by ClojureScript 1.8.34 {}
goog.provide('snake.view');
goog.require('cljs.core');
goog.require('goog.crypt');
goog.require('goog.dom.forms');
goog.require('goog.crypt.Md5');
goog.require('snake.model');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.events.KeyCodes');
goog.require('snake.communication');
snake.view.dir = (function snake$view$dir(e,p__23314){
var vec__23316 = p__23314;
var dx = cljs.core.nth.call(null,vec__23316,(0),null);
var dy = cljs.core.nth.call(null,vec__23316,(1),null);
e.preventDefault();

return snake.communication.dir.call(null,dx,dy);
});
snake.view.keydown = (function snake$view$keydown(e){
if(cljs.core.truth_(snake.model.alive_QMARK_.call(null))){
var pred__23320 = cljs.core._EQ_;
var expr__23321 = e.keyCode;
if(cljs.core.truth_(pred__23320.call(null,goog.events.KeyCodes.LEFT,expr__23321))){
return snake.view.dir.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
} else {
if(cljs.core.truth_(pred__23320.call(null,goog.events.KeyCodes.A,expr__23321))){
return snake.view.dir.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
} else {
if(cljs.core.truth_(pred__23320.call(null,goog.events.KeyCodes.RIGHT,expr__23321))){
return snake.view.dir.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
} else {
if(cljs.core.truth_(pred__23320.call(null,goog.events.KeyCodes.D,expr__23321))){
return snake.view.dir.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
} else {
if(cljs.core.truth_(pred__23320.call(null,goog.events.KeyCodes.UP,expr__23321))){
return snake.view.dir.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
} else {
if(cljs.core.truth_(pred__23320.call(null,goog.events.KeyCodes.W,expr__23321))){
return snake.view.dir.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
} else {
if(cljs.core.truth_(pred__23320.call(null,goog.events.KeyCodes.DOWN,expr__23321))){
return snake.view.dir.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
} else {
if(cljs.core.truth_(pred__23320.call(null,goog.events.KeyCodes.S,expr__23321))){
return snake.view.dir.call(null,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
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
} else {
return null;
}
});
if(typeof snake.view.listener !== 'undefined'){
} else {
snake.view.listener = goog.events.listen(document,"keydown",snake.view.keydown);
}
snake.view.segment = (function snake$view$segment(uid,i,j,me_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),(i + 0.55),new cljs.core.Keyword(null,"y","y",-1757859776),(j + 0.55),new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.subs.call(null,uid,(7),(14)),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.3,new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.subs.call(null,uid,(7),(14)),new cljs.core.Keyword(null,"rx","rx",1627208482),(cljs.core.truth_(me_QMARK_)?0.4:0.2),new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9], null)], null);
});
snake.view.food = (function snake$view$food(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(i + (1)),new cljs.core.Keyword(null,"cy","cy",755331060),(j + (1)),new cljs.core.Keyword(null,"r","r",-471384190),0.45,new cljs.core.Keyword(null,"fill","fill",883462889),"lightgreen",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"green"], null)], null);
});
snake.view.pixel = (function snake$view$pixel(uid,i,j,my_uid){
if(cljs.core._EQ_.call(null,uid,"food")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.food,i,j], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.segment,uid,i,j,cljs.core._EQ_.call(null,my_uid,uid)], null);
}
});
snake.view.eye = (function snake$view$eye(dx,dy){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(dx / (2)),new cljs.core.Keyword(null,"cy","cy",755331060),(dy / (2)),new cljs.core.Keyword(null,"r","r",-471384190),0.2,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.05,new cljs.core.Keyword(null,"fill","fill",883462889),"red"], null)], null);
});
snake.view.click = (function snake$view$click(e){
var elem = e.target;
var r = elem.getBoundingClientRect();
var left = r.left;
var top = r.top;
var width = r.width;
var height = r.height;
var ex = e.clientX;
var ey = e.clientY;
var x = ((ex - left) - (width / (2)));
var y = ((ey - top) - (height / (2)));
return snake.view.dir.call(null,e,(((Math.abs(y) > Math.abs(x)))?(((y > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)):(((x > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null))));
});
snake.view.board = (function snake$view$board(p__23323){
var map__23346 = p__23323;
var map__23346__$1 = ((((!((map__23346 == null)))?((((map__23346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23346):map__23346);
var map__23347 = cljs.core.get.call(null,map__23346__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var map__23347__$1 = ((((!((map__23347 == null)))?((((map__23347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23347):map__23347);
var board__$1 = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__23347__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var my_uid = cljs.core.get.call(null,map__23346__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
var width = cljs.core.count.call(null,cljs.core.first.call(null,board__$1));
var height = cljs.core.count.call(null,board__$1);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.board","svg.board",188703229),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),snake.view.click,new cljs.core.Keyword(null,"view-box","view-box",-1792199155),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(width + (1)),(height + (1))], null),new cljs.core.Keyword(null,"preserve-aspect-ratio","preserve-aspect-ratio",-1746347963),"xMidYMid meet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(width + (1)),new cljs.core.Keyword(null,"height","height",1025178622),(height + (1)),new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null),cljs.core.doall.call(null,(function (){var iter__19218__auto__ = ((function (width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid){
return (function snake$view$board_$_iter__23350(s__23351){
return (new cljs.core.LazySeq(null,((function (width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid){
return (function (){
var s__23351__$1 = s__23351;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23351__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19214__auto__ = ((function (s__23351__$1,i,xs__5205__auto__,temp__4657__auto__,width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid){
return (function snake$view$board_$_iter__23350_$_iter__23352(s__23353){
return (new cljs.core.LazySeq(null,((function (s__23351__$1,i,xs__5205__auto__,temp__4657__auto__,width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid){
return (function (){
var s__23353__$1 = s__23353;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23353__$1);
if(temp__4657__auto____$1){
var s__23353__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23353__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__23353__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__23355 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__23354 = (0);
while(true){
if((i__23354 < size__19217__auto__)){
var j = cljs.core._nth.call(null,c__19216__auto__,i__23354);
var uid = cljs.core.get_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(uid)){
cljs.core.chunk_append.call(null,b__23355,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.pixel,uid,i,j,my_uid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null)));

var G__23368 = (i__23354 + (1));
i__23354 = G__23368;
continue;
} else {
var G__23369 = (i__23354 + (1));
i__23354 = G__23369;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23355),snake$view$board_$_iter__23350_$_iter__23352.call(null,cljs.core.chunk_rest.call(null,s__23353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23355),null);
}
} else {
var j = cljs.core.first.call(null,s__23353__$2);
var uid = cljs.core.get_in.call(null,board__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));
if(cljs.core.truth_(uid)){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.pixel,uid,i,j,my_uid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null)),snake$view$board_$_iter__23350_$_iter__23352.call(null,cljs.core.rest.call(null,s__23353__$2)));
} else {
var G__23370 = cljs.core.rest.call(null,s__23353__$2);
s__23353__$1 = G__23370;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23351__$1,i,xs__5205__auto__,temp__4657__auto__,width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid))
,null,null));
});})(s__23351__$1,i,xs__5205__auto__,temp__4657__auto__,width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid))
;
var fs__19215__auto__ = cljs.core.seq.call(null,iterys__19214__auto__.call(null,cljs.core.range.call(null,height)));
if(fs__19215__auto__){
return cljs.core.concat.call(null,fs__19215__auto__,snake$view$board_$_iter__23350.call(null,cljs.core.rest.call(null,s__23351__$1)));
} else {
var G__23371 = cljs.core.rest.call(null,s__23351__$1);
s__23351__$1 = G__23371;
continue;
}
} else {
return null;
}
break;
}
});})(width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid))
,null,null));
});})(width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid))
;
return iter__19218__auto__.call(null,cljs.core.range.call(null,width));
})()),cljs.core.doall.call(null,(function (){var iter__19218__auto__ = ((function (width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid){
return (function snake$view$board_$_iter__23356(s__23357){
return (new cljs.core.LazySeq(null,((function (width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid){
return (function (){
var s__23357__$1 = s__23357;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23357__$1);
if(temp__4657__auto__){
var s__23357__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23357__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__23357__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__23359 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__23358 = (0);
while(true){
if((i__23358 < size__19217__auto__)){
var vec__23364 = cljs.core._nth.call(null,c__19216__auto__,i__23358);
var uid = cljs.core.nth.call(null,vec__23364,(0),null);
var vec__23365 = cljs.core.nth.call(null,vec__23364,(1),null);
var health = cljs.core.nth.call(null,vec__23365,(0),null);
var x = cljs.core.nth.call(null,vec__23365,(1),null);
var y = cljs.core.nth.call(null,vec__23365,(2),null);
var dx = cljs.core.nth.call(null,vec__23365,(3),null);
var dy = cljs.core.nth.call(null,vec__23365,(4),null);
if(cljs.core._EQ_.call(null,health,new cljs.core.Keyword(null,"alive","alive",1424929930))){
cljs.core.chunk_append.call(null,b__23359,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str((x + (1))),cljs.core.str(" "),cljs.core.str((y + (1))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.eye,((dx / (2)) + (dy / (2))),((dy / (2)) + (dx / (2)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.eye,((dx / (2)) - (dy / (2))),((dy / (2)) - (dx / (2)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__23372 = (i__23358 + (1));
i__23358 = G__23372;
continue;
} else {
var G__23373 = (i__23358 + (1));
i__23358 = G__23373;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23359),snake$view$board_$_iter__23356.call(null,cljs.core.chunk_rest.call(null,s__23357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23359),null);
}
} else {
var vec__23366 = cljs.core.first.call(null,s__23357__$2);
var uid = cljs.core.nth.call(null,vec__23366,(0),null);
var vec__23367 = cljs.core.nth.call(null,vec__23366,(1),null);
var health = cljs.core.nth.call(null,vec__23367,(0),null);
var x = cljs.core.nth.call(null,vec__23367,(1),null);
var y = cljs.core.nth.call(null,vec__23367,(2),null);
var dx = cljs.core.nth.call(null,vec__23367,(3),null);
var dy = cljs.core.nth.call(null,vec__23367,(4),null);
if(cljs.core._EQ_.call(null,health,new cljs.core.Keyword(null,"alive","alive",1424929930))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),[cljs.core.str("translate("),cljs.core.str((x + (1))),cljs.core.str(" "),cljs.core.str((y + (1))),cljs.core.str(")")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.eye,((dx / (2)) + (dy / (2))),((dy / (2)) + (dx / (2)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.eye,((dx / (2)) - (dy / (2))),((dy / (2)) - (dx / (2)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),snake$view$board_$_iter__23356.call(null,cljs.core.rest.call(null,s__23357__$2)));
} else {
var G__23374 = cljs.core.rest.call(null,s__23357__$2);
s__23357__$1 = G__23374;
continue;
}
}
} else {
return null;
}
break;
}
});})(width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid))
,null,null));
});})(width,height,map__23346,map__23346__$1,map__23347,map__23347__$1,board__$1,players,my_uid))
;
return iter__19218__auto__.call(null,players);
})())], null);
});
snake.view.respawn_form = (function snake$view$respawn_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"100px",new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null),(cljs.core.truth_(snake.model.alive_QMARK_.call(null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

snake.model.username_BANG_.call(null,goog.dom.forms.getValueByName(e.target,"username"));

snake.communication.send_username.call(null);

return snake.communication.respawn.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"You are "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"username",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),"autofocus",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.model.app_state)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9em"], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Respawn"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.5em"], null)], null),"(Can be a ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://en.gravatar.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"gravatar"], null),")"], null)], null)], null))], null);
});
snake.view.get_length = (function snake$view$get_length(p__23375){
var vec__23378 = p__23375;
var uid = cljs.core.nth.call(null,vec__23378,(0),null);
var vec__23379 = cljs.core.nth.call(null,vec__23378,(1),null);
var health = cljs.core.nth.call(null,vec__23379,(0),null);
var x = cljs.core.nth.call(null,vec__23379,(1),null);
var y = cljs.core.nth.call(null,vec__23379,(2),null);
var dx = cljs.core.nth.call(null,vec__23379,(3),null);
var dy = cljs.core.nth.call(null,vec__23379,(4),null);
var length = cljs.core.nth.call(null,vec__23379,(5),null);
var path = cljs.core.nth.call(null,vec__23379,(6),null);
var username = cljs.core.nth.call(null,vec__23379,(7),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [length,clojure.string.lower_case.call(null,username)], null);
});
snake.view.md5_hash = (function snake$view$md5_hash(s){
var md5 = (new goog.crypt.Md5());
md5.update(clojure.string.trim.call(null,s));

return goog.crypt.byteArrayToHex(md5.digest());
});
snake.view.gravatar_img = (function snake$view$gravatar_img(email){
return [cljs.core.str("//www.gravatar.com/avatar/"),cljs.core.str(snake.view.md5_hash.call(null,email)),cljs.core.str("?s=30&d=wavatar")].join('');
});
snake.view.scores = (function snake$view$scores(p__23380){
var map__23397 = p__23380;
var map__23397__$1 = ((((!((map__23397 == null)))?((((map__23397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23397):map__23397);
var map__23398 = cljs.core.get.call(null,map__23397__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var map__23398__$1 = ((((!((map__23398 == null)))?((((map__23398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23398):map__23398);
var board = cljs.core.get.call(null,map__23398__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var players = cljs.core.get.call(null,map__23398__$1,new cljs.core.Keyword(null,"players","players",-1361554569));
var my_uid = cljs.core.get.call(null,map__23397__$1,new cljs.core.Keyword(null,"uid","uid",-1447769400));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"height","height",1025178622),"0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Players"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,(function (){var iter__19218__auto__ = ((function (map__23397,map__23397__$1,map__23398,map__23398__$1,board,players,my_uid){
return (function snake$view$scores_$_iter__23401(s__23402){
return (new cljs.core.LazySeq(null,((function (map__23397,map__23397__$1,map__23398,map__23398__$1,board,players,my_uid){
return (function (){
var s__23402__$1 = s__23402;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23402__$1);
if(temp__4657__auto__){
var s__23402__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23402__$2)){
var c__19216__auto__ = cljs.core.chunk_first.call(null,s__23402__$2);
var size__19217__auto__ = cljs.core.count.call(null,c__19216__auto__);
var b__23404 = cljs.core.chunk_buffer.call(null,size__19217__auto__);
if((function (){var i__23403 = (0);
while(true){
if((i__23403 < size__19217__auto__)){
var vec__23409 = cljs.core._nth.call(null,c__19216__auto__,i__23403);
var uid = cljs.core.nth.call(null,vec__23409,(0),null);
var vec__23410 = cljs.core.nth.call(null,vec__23409,(1),null);
var health = cljs.core.nth.call(null,vec__23410,(0),null);
var x = cljs.core.nth.call(null,vec__23410,(1),null);
var y = cljs.core.nth.call(null,vec__23410,(2),null);
var dx = cljs.core.nth.call(null,vec__23410,(3),null);
var dy = cljs.core.nth.call(null,vec__23410,(4),null);
var length = cljs.core.nth.call(null,vec__23410,(5),null);
var path = cljs.core.nth.call(null,vec__23410,(6),null);
var username = cljs.core.nth.call(null,vec__23410,(7),null);
cljs.core.chunk_append.call(null,b__23404,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.number","td.number",-1930015800),(((length === (0)))?"Dead":length)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.subs.call(null,uid,(0),(7)),new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.subs.call(null,uid,(7),(14))], null)], null),cljs.core.first.call(null,clojure.string.split.call(null,username,/@/))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),snake.view.gravatar_img.call(null,username)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)));

var G__23413 = (i__23403 + (1));
i__23403 = G__23413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23404),snake$view$scores_$_iter__23401.call(null,cljs.core.chunk_rest.call(null,s__23402__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23404),null);
}
} else {
var vec__23411 = cljs.core.first.call(null,s__23402__$2);
var uid = cljs.core.nth.call(null,vec__23411,(0),null);
var vec__23412 = cljs.core.nth.call(null,vec__23411,(1),null);
var health = cljs.core.nth.call(null,vec__23412,(0),null);
var x = cljs.core.nth.call(null,vec__23412,(1),null);
var y = cljs.core.nth.call(null,vec__23412,(2),null);
var dx = cljs.core.nth.call(null,vec__23412,(3),null);
var dy = cljs.core.nth.call(null,vec__23412,(4),null);
var length = cljs.core.nth.call(null,vec__23412,(5),null);
var path = cljs.core.nth.call(null,vec__23412,(6),null);
var username = cljs.core.nth.call(null,vec__23412,(7),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.number","td.number",-1930015800),(((length === (0)))?"Dead":length)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.subs.call(null,uid,(0),(7)),new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.subs.call(null,uid,(7),(14))], null)], null),cljs.core.first.call(null,clojure.string.split.call(null,username,/@/))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),snake.view.gravatar_img.call(null,username)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid], null)),snake$view$scores_$_iter__23401.call(null,cljs.core.rest.call(null,s__23402__$2)));
}
} else {
return null;
}
break;
}
});})(map__23397,map__23397__$1,map__23398,map__23398__$1,board,players,my_uid))
,null,null));
});})(map__23397,map__23397__$1,map__23398,map__23398__$1,board,players,my_uid))
;
return iter__19218__auto__.call(null,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,snake.view.get_length,players)));
})())], null)], null)], null);
});
snake.view.main = (function snake$view$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Snake",((!(typeof new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.model.app_state)) === 'string'))?" - Server is full!":null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.respawn_form], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.scores,cljs.core.deref.call(null,snake.model.app_state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake.view.board,cljs.core.deref.call(null,snake.model.app_state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Multiplayer - invite your friends. Steer with the arrow keys, WASD, or click/touch the side of the board."], null)], null)], null);
});

//# sourceMappingURL=view.js.map?rel=1466240659234