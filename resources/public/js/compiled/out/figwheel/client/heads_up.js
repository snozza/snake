// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19514__auto__ = [];
var len__19507__auto___27530 = arguments.length;
var i__19508__auto___27531 = (0);
while(true){
if((i__19508__auto___27531 < len__19507__auto___27530)){
args__19514__auto__.push((arguments[i__19508__auto___27531]));

var G__27532 = (i__19508__auto___27531 + (1));
i__19508__auto___27531 = G__27532;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((2) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19515__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27522_27533 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27523_27534 = null;
var count__27524_27535 = (0);
var i__27525_27536 = (0);
while(true){
if((i__27525_27536 < count__27524_27535)){
var k_27537 = cljs.core._nth.call(null,chunk__27523_27534,i__27525_27536);
e.setAttribute(cljs.core.name.call(null,k_27537),cljs.core.get.call(null,attrs,k_27537));

var G__27538 = seq__27522_27533;
var G__27539 = chunk__27523_27534;
var G__27540 = count__27524_27535;
var G__27541 = (i__27525_27536 + (1));
seq__27522_27533 = G__27538;
chunk__27523_27534 = G__27539;
count__27524_27535 = G__27540;
i__27525_27536 = G__27541;
continue;
} else {
var temp__4657__auto___27542 = cljs.core.seq.call(null,seq__27522_27533);
if(temp__4657__auto___27542){
var seq__27522_27543__$1 = temp__4657__auto___27542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27522_27543__$1)){
var c__19249__auto___27544 = cljs.core.chunk_first.call(null,seq__27522_27543__$1);
var G__27545 = cljs.core.chunk_rest.call(null,seq__27522_27543__$1);
var G__27546 = c__19249__auto___27544;
var G__27547 = cljs.core.count.call(null,c__19249__auto___27544);
var G__27548 = (0);
seq__27522_27533 = G__27545;
chunk__27523_27534 = G__27546;
count__27524_27535 = G__27547;
i__27525_27536 = G__27548;
continue;
} else {
var k_27549 = cljs.core.first.call(null,seq__27522_27543__$1);
e.setAttribute(cljs.core.name.call(null,k_27549),cljs.core.get.call(null,attrs,k_27549));

var G__27550 = cljs.core.next.call(null,seq__27522_27543__$1);
var G__27551 = null;
var G__27552 = (0);
var G__27553 = (0);
seq__27522_27533 = G__27550;
chunk__27523_27534 = G__27551;
count__27524_27535 = G__27552;
i__27525_27536 = G__27553;
continue;
}
} else {
}
}
break;
}

var seq__27526_27554 = cljs.core.seq.call(null,children);
var chunk__27527_27555 = null;
var count__27528_27556 = (0);
var i__27529_27557 = (0);
while(true){
if((i__27529_27557 < count__27528_27556)){
var ch_27558 = cljs.core._nth.call(null,chunk__27527_27555,i__27529_27557);
e.appendChild(ch_27558);

var G__27559 = seq__27526_27554;
var G__27560 = chunk__27527_27555;
var G__27561 = count__27528_27556;
var G__27562 = (i__27529_27557 + (1));
seq__27526_27554 = G__27559;
chunk__27527_27555 = G__27560;
count__27528_27556 = G__27561;
i__27529_27557 = G__27562;
continue;
} else {
var temp__4657__auto___27563 = cljs.core.seq.call(null,seq__27526_27554);
if(temp__4657__auto___27563){
var seq__27526_27564__$1 = temp__4657__auto___27563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27526_27564__$1)){
var c__19249__auto___27565 = cljs.core.chunk_first.call(null,seq__27526_27564__$1);
var G__27566 = cljs.core.chunk_rest.call(null,seq__27526_27564__$1);
var G__27567 = c__19249__auto___27565;
var G__27568 = cljs.core.count.call(null,c__19249__auto___27565);
var G__27569 = (0);
seq__27526_27554 = G__27566;
chunk__27527_27555 = G__27567;
count__27528_27556 = G__27568;
i__27529_27557 = G__27569;
continue;
} else {
var ch_27570 = cljs.core.first.call(null,seq__27526_27564__$1);
e.appendChild(ch_27570);

var G__27571 = cljs.core.next.call(null,seq__27526_27564__$1);
var G__27572 = null;
var G__27573 = (0);
var G__27574 = (0);
seq__27526_27554 = G__27571;
chunk__27527_27555 = G__27572;
count__27528_27556 = G__27573;
i__27529_27557 = G__27574;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27519){
var G__27520 = cljs.core.first.call(null,seq27519);
var seq27519__$1 = cljs.core.next.call(null,seq27519);
var G__27521 = cljs.core.first.call(null,seq27519__$1);
var seq27519__$2 = cljs.core.next.call(null,seq27519__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27520,G__27521,seq27519__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19362__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19363__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19364__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19366__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19362__auto__,prefer_table__19363__auto__,method_cache__19364__auto__,cached_hierarchy__19365__auto__,hierarchy__19366__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19362__auto__,prefer_table__19363__auto__,method_cache__19364__auto__,cached_hierarchy__19365__auto__,hierarchy__19366__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19366__auto__,method_table__19362__auto__,prefer_table__19363__auto__,method_cache__19364__auto__,cached_hierarchy__19365__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27575 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27575.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27575.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27575.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27575);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27576,st_map){
var map__27581 = p__27576;
var map__27581__$1 = ((((!((map__27581 == null)))?((((map__27581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27581):map__27581);
var container_el = cljs.core.get.call(null,map__27581__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27581,map__27581__$1,container_el){
return (function (p__27583){
var vec__27584 = p__27583;
var k = cljs.core.nth.call(null,vec__27584,(0),null);
var v = cljs.core.nth.call(null,vec__27584,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27581,map__27581__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27585,dom_str){
var map__27588 = p__27585;
var map__27588__$1 = ((((!((map__27588 == null)))?((((map__27588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27588):map__27588);
var c = map__27588__$1;
var content_area_el = cljs.core.get.call(null,map__27588__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27590){
var map__27593 = p__27590;
var map__27593__$1 = ((((!((map__27593 == null)))?((((map__27593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27593):map__27593);
var content_area_el = cljs.core.get.call(null,map__27593__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__){
return (function (state_27636){
var state_val_27637 = (state_27636[(1)]);
if((state_val_27637 === (1))){
var inst_27621 = (state_27636[(7)]);
var inst_27621__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27622 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27623 = ["10px","10px","100%","68px","1.0"];
var inst_27624 = cljs.core.PersistentHashMap.fromArrays(inst_27622,inst_27623);
var inst_27625 = cljs.core.merge.call(null,inst_27624,style);
var inst_27626 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27621__$1,inst_27625);
var inst_27627 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27621__$1,msg);
var inst_27628 = cljs.core.async.timeout.call(null,(300));
var state_27636__$1 = (function (){var statearr_27638 = state_27636;
(statearr_27638[(7)] = inst_27621__$1);

(statearr_27638[(8)] = inst_27626);

(statearr_27638[(9)] = inst_27627);

return statearr_27638;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27636__$1,(2),inst_27628);
} else {
if((state_val_27637 === (2))){
var inst_27621 = (state_27636[(7)]);
var inst_27630 = (state_27636[(2)]);
var inst_27631 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_27632 = ["auto"];
var inst_27633 = cljs.core.PersistentHashMap.fromArrays(inst_27631,inst_27632);
var inst_27634 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27621,inst_27633);
var state_27636__$1 = (function (){var statearr_27639 = state_27636;
(statearr_27639[(10)] = inst_27630);

return statearr_27639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27636__$1,inst_27634);
} else {
return null;
}
}
});})(c__23601__auto__))
;
return ((function (switch__23489__auto__,c__23601__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto____0 = (function (){
var statearr_27643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27643[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto__);

(statearr_27643[(1)] = (1));

return statearr_27643;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto____1 = (function (state_27636){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_27636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e27644){if((e27644 instanceof Object)){
var ex__23493__auto__ = e27644;
var statearr_27645_27647 = state_27636;
(statearr_27645_27647[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27648 = state_27636;
state_27636 = G__27648;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto__ = function(state_27636){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto____1.call(this,state_27636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__))
})();
var state__23603__auto__ = (function (){var statearr_27646 = f__23602__auto__.call(null);
(statearr_27646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_27646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__))
);

return c__23601__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__27650 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__27650,(0),null);
var ln = cljs.core.nth.call(null,vec__27650,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__27653 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__27653,(0),null);
var file_line = cljs.core.nth.call(null,vec__27653,(1),null);
var file_column = cljs.core.nth.call(null,vec__27653,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__27653,file_name,file_line,file_column){
return (function (p1__27651_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__27651_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__27653,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18438__auto__ = file_line;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
var and__18426__auto__ = cause;
if(cljs.core.truth_(and__18426__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18426__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__27656 = figwheel.client.heads_up.ensure_container.call(null);
var map__27656__$1 = ((((!((map__27656 == null)))?((((map__27656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27656):map__27656);
var content_area_el = cljs.core.get.call(null,map__27656__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__){
return (function (state_27704){
var state_val_27705 = (state_27704[(1)]);
if((state_val_27705 === (1))){
var inst_27687 = (state_27704[(7)]);
var inst_27687__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_27688 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_27689 = ["0.0"];
var inst_27690 = cljs.core.PersistentHashMap.fromArrays(inst_27688,inst_27689);
var inst_27691 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27687__$1,inst_27690);
var inst_27692 = cljs.core.async.timeout.call(null,(300));
var state_27704__$1 = (function (){var statearr_27706 = state_27704;
(statearr_27706[(8)] = inst_27691);

(statearr_27706[(7)] = inst_27687__$1);

return statearr_27706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27704__$1,(2),inst_27692);
} else {
if((state_val_27705 === (2))){
var inst_27687 = (state_27704[(7)]);
var inst_27694 = (state_27704[(2)]);
var inst_27695 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_27696 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_27697 = cljs.core.PersistentHashMap.fromArrays(inst_27695,inst_27696);
var inst_27698 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_27687,inst_27697);
var inst_27699 = cljs.core.async.timeout.call(null,(200));
var state_27704__$1 = (function (){var statearr_27707 = state_27704;
(statearr_27707[(9)] = inst_27694);

(statearr_27707[(10)] = inst_27698);

return statearr_27707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27704__$1,(3),inst_27699);
} else {
if((state_val_27705 === (3))){
var inst_27687 = (state_27704[(7)]);
var inst_27701 = (state_27704[(2)]);
var inst_27702 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_27687,"");
var state_27704__$1 = (function (){var statearr_27708 = state_27704;
(statearr_27708[(11)] = inst_27701);

return statearr_27708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27704__$1,inst_27702);
} else {
return null;
}
}
}
});})(c__23601__auto__))
;
return ((function (switch__23489__auto__,c__23601__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23490__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23490__auto____0 = (function (){
var statearr_27712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27712[(0)] = figwheel$client$heads_up$clear_$_state_machine__23490__auto__);

(statearr_27712[(1)] = (1));

return statearr_27712;
});
var figwheel$client$heads_up$clear_$_state_machine__23490__auto____1 = (function (state_27704){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_27704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e27713){if((e27713 instanceof Object)){
var ex__23493__auto__ = e27713;
var statearr_27714_27716 = state_27704;
(statearr_27714_27716[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27717 = state_27704;
state_27704 = G__27717;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23490__auto__ = function(state_27704){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23490__auto____1.call(this,state_27704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23490__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23490__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__))
})();
var state__23603__auto__ = (function (){var statearr_27715 = f__23602__auto__.call(null);
(statearr_27715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_27715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__))
);

return c__23601__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__){
return (function (state_27749){
var state_val_27750 = (state_27749[(1)]);
if((state_val_27750 === (1))){
var inst_27739 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27749__$1,(2),inst_27739);
} else {
if((state_val_27750 === (2))){
var inst_27741 = (state_27749[(2)]);
var inst_27742 = cljs.core.async.timeout.call(null,(400));
var state_27749__$1 = (function (){var statearr_27751 = state_27749;
(statearr_27751[(7)] = inst_27741);

return statearr_27751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27749__$1,(3),inst_27742);
} else {
if((state_val_27750 === (3))){
var inst_27744 = (state_27749[(2)]);
var inst_27745 = figwheel.client.heads_up.clear.call(null);
var state_27749__$1 = (function (){var statearr_27752 = state_27749;
(statearr_27752[(8)] = inst_27744);

return statearr_27752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27749__$1,(4),inst_27745);
} else {
if((state_val_27750 === (4))){
var inst_27747 = (state_27749[(2)]);
var state_27749__$1 = state_27749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27749__$1,inst_27747);
} else {
return null;
}
}
}
}
});})(c__23601__auto__))
;
return ((function (switch__23489__auto__,c__23601__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto____0 = (function (){
var statearr_27756 = [null,null,null,null,null,null,null,null,null];
(statearr_27756[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto__);

(statearr_27756[(1)] = (1));

return statearr_27756;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto____1 = (function (state_27749){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_27749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e27757){if((e27757 instanceof Object)){
var ex__23493__auto__ = e27757;
var statearr_27758_27760 = state_27749;
(statearr_27758_27760[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27761 = state_27749;
state_27749 = G__27761;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto__ = function(state_27749){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto____1.call(this,state_27749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__))
})();
var state__23603__auto__ = (function (){var statearr_27759 = f__23602__auto__.call(null);
(statearr_27759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__))
);

return c__23601__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1466146184141