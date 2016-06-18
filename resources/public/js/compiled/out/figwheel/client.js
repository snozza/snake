// Compiled by ClojureScript 1.8.34 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27764 = cljs.core._EQ_;
var expr__27765 = (function (){var or__18438__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e27768){if((e27768 instanceof Error)){
var e = e27768;
return false;
} else {
throw e27768;

}
}})();
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27764.call(null,"true",expr__27765))){
return true;
} else {
if(cljs.core.truth_(pred__27764.call(null,"false",expr__27765))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27765)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e27770){if((e27770 instanceof Error)){
var e = e27770;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e27770;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19514__auto__ = [];
var len__19507__auto___27772 = arguments.length;
var i__19508__auto___27773 = (0);
while(true){
if((i__19508__auto___27773 < len__19507__auto___27772)){
args__19514__auto__.push((arguments[i__19508__auto___27773]));

var G__27774 = (i__19508__auto___27773 + (1));
i__19508__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27771){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27771));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27775){
var map__27778 = p__27775;
var map__27778__$1 = ((((!((map__27778 == null)))?((((map__27778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27778):map__27778);
var message = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27778__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18438__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18426__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18426__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18426__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23601__auto___27940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___27940,ch){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___27940,ch){
return (function (state_27909){
var state_val_27910 = (state_27909[(1)]);
if((state_val_27910 === (7))){
var inst_27905 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27911_27941 = state_27909__$1;
(statearr_27911_27941[(2)] = inst_27905);

(statearr_27911_27941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (1))){
var state_27909__$1 = state_27909;
var statearr_27912_27942 = state_27909__$1;
(statearr_27912_27942[(2)] = null);

(statearr_27912_27942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (4))){
var inst_27862 = (state_27909[(7)]);
var inst_27862__$1 = (state_27909[(2)]);
var state_27909__$1 = (function (){var statearr_27913 = state_27909;
(statearr_27913[(7)] = inst_27862__$1);

return statearr_27913;
})();
if(cljs.core.truth_(inst_27862__$1)){
var statearr_27914_27943 = state_27909__$1;
(statearr_27914_27943[(1)] = (5));

} else {
var statearr_27915_27944 = state_27909__$1;
(statearr_27915_27944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (15))){
var inst_27869 = (state_27909[(8)]);
var inst_27884 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27869);
var inst_27885 = cljs.core.first.call(null,inst_27884);
var inst_27886 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27885);
var inst_27887 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27886)].join('');
var inst_27888 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27887);
var state_27909__$1 = state_27909;
var statearr_27916_27945 = state_27909__$1;
(statearr_27916_27945[(2)] = inst_27888);

(statearr_27916_27945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (13))){
var inst_27893 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27917_27946 = state_27909__$1;
(statearr_27917_27946[(2)] = inst_27893);

(statearr_27917_27946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (6))){
var state_27909__$1 = state_27909;
var statearr_27918_27947 = state_27909__$1;
(statearr_27918_27947[(2)] = null);

(statearr_27918_27947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (17))){
var inst_27891 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27919_27948 = state_27909__$1;
(statearr_27919_27948[(2)] = inst_27891);

(statearr_27919_27948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (3))){
var inst_27907 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27909__$1,inst_27907);
} else {
if((state_val_27910 === (12))){
var inst_27868 = (state_27909[(9)]);
var inst_27882 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27868,opts);
var state_27909__$1 = state_27909;
if(cljs.core.truth_(inst_27882)){
var statearr_27920_27949 = state_27909__$1;
(statearr_27920_27949[(1)] = (15));

} else {
var statearr_27921_27950 = state_27909__$1;
(statearr_27921_27950[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (2))){
var state_27909__$1 = state_27909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27909__$1,(4),ch);
} else {
if((state_val_27910 === (11))){
var inst_27869 = (state_27909[(8)]);
var inst_27874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27875 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27869);
var inst_27876 = cljs.core.async.timeout.call(null,(1000));
var inst_27877 = [inst_27875,inst_27876];
var inst_27878 = (new cljs.core.PersistentVector(null,2,(5),inst_27874,inst_27877,null));
var state_27909__$1 = state_27909;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27909__$1,(14),inst_27878);
} else {
if((state_val_27910 === (9))){
var inst_27869 = (state_27909[(8)]);
var inst_27895 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27896 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27869);
var inst_27897 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27896);
var inst_27898 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27897)].join('');
var inst_27899 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27898);
var state_27909__$1 = (function (){var statearr_27922 = state_27909;
(statearr_27922[(10)] = inst_27895);

return statearr_27922;
})();
var statearr_27923_27951 = state_27909__$1;
(statearr_27923_27951[(2)] = inst_27899);

(statearr_27923_27951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (5))){
var inst_27862 = (state_27909[(7)]);
var inst_27864 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27865 = (new cljs.core.PersistentArrayMap(null,2,inst_27864,null));
var inst_27866 = (new cljs.core.PersistentHashSet(null,inst_27865,null));
var inst_27867 = figwheel.client.focus_msgs.call(null,inst_27866,inst_27862);
var inst_27868 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27867);
var inst_27869 = cljs.core.first.call(null,inst_27867);
var inst_27870 = figwheel.client.autoload_QMARK_.call(null);
var state_27909__$1 = (function (){var statearr_27924 = state_27909;
(statearr_27924[(9)] = inst_27868);

(statearr_27924[(8)] = inst_27869);

return statearr_27924;
})();
if(cljs.core.truth_(inst_27870)){
var statearr_27925_27952 = state_27909__$1;
(statearr_27925_27952[(1)] = (8));

} else {
var statearr_27926_27953 = state_27909__$1;
(statearr_27926_27953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (14))){
var inst_27880 = (state_27909[(2)]);
var state_27909__$1 = state_27909;
var statearr_27927_27954 = state_27909__$1;
(statearr_27927_27954[(2)] = inst_27880);

(statearr_27927_27954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (16))){
var state_27909__$1 = state_27909;
var statearr_27928_27955 = state_27909__$1;
(statearr_27928_27955[(2)] = null);

(statearr_27928_27955[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (10))){
var inst_27901 = (state_27909[(2)]);
var state_27909__$1 = (function (){var statearr_27929 = state_27909;
(statearr_27929[(11)] = inst_27901);

return statearr_27929;
})();
var statearr_27930_27956 = state_27909__$1;
(statearr_27930_27956[(2)] = null);

(statearr_27930_27956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27910 === (8))){
var inst_27868 = (state_27909[(9)]);
var inst_27872 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27868,opts);
var state_27909__$1 = state_27909;
if(cljs.core.truth_(inst_27872)){
var statearr_27931_27957 = state_27909__$1;
(statearr_27931_27957[(1)] = (11));

} else {
var statearr_27932_27958 = state_27909__$1;
(statearr_27932_27958[(1)] = (12));

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
});})(c__23601__auto___27940,ch))
;
return ((function (switch__23489__auto__,c__23601__auto___27940,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23490__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23490__auto____0 = (function (){
var statearr_27936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27936[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23490__auto__);

(statearr_27936[(1)] = (1));

return statearr_27936;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23490__auto____1 = (function (state_27909){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_27909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e27937){if((e27937 instanceof Object)){
var ex__23493__auto__ = e27937;
var statearr_27938_27959 = state_27909;
(statearr_27938_27959[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27960 = state_27909;
state_27909 = G__27960;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23490__auto__ = function(state_27909){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23490__auto____1.call(this,state_27909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23490__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23490__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___27940,ch))
})();
var state__23603__auto__ = (function (){var statearr_27939 = f__23602__auto__.call(null);
(statearr_27939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___27940);

return statearr_27939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___27940,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27961_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27961_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27968 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27968){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27966 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27967 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27967;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27966;
}}catch (e27965){if((e27965 instanceof Error)){
var e = e27965;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27968], null));
} else {
var e = e27965;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27968))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27969){
var map__27976 = p__27969;
var map__27976__$1 = ((((!((map__27976 == null)))?((((map__27976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27976):map__27976);
var opts = map__27976__$1;
var build_id = cljs.core.get.call(null,map__27976__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27976,map__27976__$1,opts,build_id){
return (function (p__27978){
var vec__27979 = p__27978;
var map__27980 = cljs.core.nth.call(null,vec__27979,(0),null);
var map__27980__$1 = ((((!((map__27980 == null)))?((((map__27980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27980):map__27980);
var msg = map__27980__$1;
var msg_name = cljs.core.get.call(null,map__27980__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27979,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27979,map__27980,map__27980__$1,msg,msg_name,_,map__27976,map__27976__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27979,map__27980,map__27980__$1,msg,msg_name,_,map__27976,map__27976__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27976,map__27976__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27986){
var vec__27987 = p__27986;
var map__27988 = cljs.core.nth.call(null,vec__27987,(0),null);
var map__27988__$1 = ((((!((map__27988 == null)))?((((map__27988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27988):map__27988);
var msg = map__27988__$1;
var msg_name = cljs.core.get.call(null,map__27988__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27987,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27990){
var map__28000 = p__27990;
var map__28000__$1 = ((((!((map__28000 == null)))?((((map__28000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28000):map__28000);
var on_compile_warning = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28000__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28000,map__28000__$1,on_compile_warning,on_compile_fail){
return (function (p__28002){
var vec__28003 = p__28002;
var map__28004 = cljs.core.nth.call(null,vec__28003,(0),null);
var map__28004__$1 = ((((!((map__28004 == null)))?((((map__28004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004):map__28004);
var msg = map__28004__$1;
var msg_name = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28003,(1));
var pred__28006 = cljs.core._EQ_;
var expr__28007 = msg_name;
if(cljs.core.truth_(pred__28006.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28007))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28006.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28007))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28000,map__28000__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__,msg_hist,msg_names,msg){
return (function (state_28223){
var state_val_28224 = (state_28223[(1)]);
if((state_val_28224 === (7))){
var inst_28147 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28147)){
var statearr_28225_28271 = state_28223__$1;
(statearr_28225_28271[(1)] = (8));

} else {
var statearr_28226_28272 = state_28223__$1;
(statearr_28226_28272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (20))){
var inst_28217 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28227_28273 = state_28223__$1;
(statearr_28227_28273[(2)] = inst_28217);

(statearr_28227_28273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (27))){
var inst_28213 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28228_28274 = state_28223__$1;
(statearr_28228_28274[(2)] = inst_28213);

(statearr_28228_28274[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (1))){
var inst_28140 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28140)){
var statearr_28229_28275 = state_28223__$1;
(statearr_28229_28275[(1)] = (2));

} else {
var statearr_28230_28276 = state_28223__$1;
(statearr_28230_28276[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (24))){
var inst_28215 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28231_28277 = state_28223__$1;
(statearr_28231_28277[(2)] = inst_28215);

(statearr_28231_28277[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (4))){
var inst_28221 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28223__$1,inst_28221);
} else {
if((state_val_28224 === (15))){
var inst_28219 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28232_28278 = state_28223__$1;
(statearr_28232_28278[(2)] = inst_28219);

(statearr_28232_28278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (21))){
var inst_28178 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28233_28279 = state_28223__$1;
(statearr_28233_28279[(2)] = inst_28178);

(statearr_28233_28279[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (31))){
var inst_28202 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28202)){
var statearr_28234_28280 = state_28223__$1;
(statearr_28234_28280[(1)] = (34));

} else {
var statearr_28235_28281 = state_28223__$1;
(statearr_28235_28281[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (32))){
var inst_28211 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28236_28282 = state_28223__$1;
(statearr_28236_28282[(2)] = inst_28211);

(statearr_28236_28282[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (33))){
var inst_28200 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28237_28283 = state_28223__$1;
(statearr_28237_28283[(2)] = inst_28200);

(statearr_28237_28283[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (13))){
var inst_28161 = figwheel.client.heads_up.clear.call(null);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(16),inst_28161);
} else {
if((state_val_28224 === (22))){
var inst_28182 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28183 = figwheel.client.heads_up.append_message.call(null,inst_28182);
var state_28223__$1 = state_28223;
var statearr_28238_28284 = state_28223__$1;
(statearr_28238_28284[(2)] = inst_28183);

(statearr_28238_28284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (36))){
var inst_28209 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28239_28285 = state_28223__$1;
(statearr_28239_28285[(2)] = inst_28209);

(statearr_28239_28285[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (29))){
var inst_28193 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28240_28286 = state_28223__$1;
(statearr_28240_28286[(2)] = inst_28193);

(statearr_28240_28286[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (6))){
var inst_28142 = (state_28223[(7)]);
var state_28223__$1 = state_28223;
var statearr_28241_28287 = state_28223__$1;
(statearr_28241_28287[(2)] = inst_28142);

(statearr_28241_28287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (28))){
var inst_28189 = (state_28223[(2)]);
var inst_28190 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28191 = figwheel.client.heads_up.display_warning.call(null,inst_28190);
var state_28223__$1 = (function (){var statearr_28242 = state_28223;
(statearr_28242[(8)] = inst_28189);

return statearr_28242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(29),inst_28191);
} else {
if((state_val_28224 === (25))){
var inst_28187 = figwheel.client.heads_up.clear.call(null);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(28),inst_28187);
} else {
if((state_val_28224 === (34))){
var inst_28204 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(37),inst_28204);
} else {
if((state_val_28224 === (17))){
var inst_28169 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28243_28288 = state_28223__$1;
(statearr_28243_28288[(2)] = inst_28169);

(statearr_28243_28288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (3))){
var inst_28159 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28159)){
var statearr_28244_28289 = state_28223__$1;
(statearr_28244_28289[(1)] = (13));

} else {
var statearr_28245_28290 = state_28223__$1;
(statearr_28245_28290[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (12))){
var inst_28155 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28246_28291 = state_28223__$1;
(statearr_28246_28291[(2)] = inst_28155);

(statearr_28246_28291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (2))){
var inst_28142 = (state_28223[(7)]);
var inst_28142__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28223__$1 = (function (){var statearr_28247 = state_28223;
(statearr_28247[(7)] = inst_28142__$1);

return statearr_28247;
})();
if(cljs.core.truth_(inst_28142__$1)){
var statearr_28248_28292 = state_28223__$1;
(statearr_28248_28292[(1)] = (5));

} else {
var statearr_28249_28293 = state_28223__$1;
(statearr_28249_28293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (23))){
var inst_28185 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28185)){
var statearr_28250_28294 = state_28223__$1;
(statearr_28250_28294[(1)] = (25));

} else {
var statearr_28251_28295 = state_28223__$1;
(statearr_28251_28295[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (35))){
var state_28223__$1 = state_28223;
var statearr_28252_28296 = state_28223__$1;
(statearr_28252_28296[(2)] = null);

(statearr_28252_28296[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (19))){
var inst_28180 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28180)){
var statearr_28253_28297 = state_28223__$1;
(statearr_28253_28297[(1)] = (22));

} else {
var statearr_28254_28298 = state_28223__$1;
(statearr_28254_28298[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (11))){
var inst_28151 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28255_28299 = state_28223__$1;
(statearr_28255_28299[(2)] = inst_28151);

(statearr_28255_28299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (9))){
var inst_28153 = figwheel.client.heads_up.clear.call(null);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(12),inst_28153);
} else {
if((state_val_28224 === (5))){
var inst_28144 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28223__$1 = state_28223;
var statearr_28256_28300 = state_28223__$1;
(statearr_28256_28300[(2)] = inst_28144);

(statearr_28256_28300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (14))){
var inst_28171 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28171)){
var statearr_28257_28301 = state_28223__$1;
(statearr_28257_28301[(1)] = (18));

} else {
var statearr_28258_28302 = state_28223__$1;
(statearr_28258_28302[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (26))){
var inst_28195 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28195)){
var statearr_28259_28303 = state_28223__$1;
(statearr_28259_28303[(1)] = (30));

} else {
var statearr_28260_28304 = state_28223__$1;
(statearr_28260_28304[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (16))){
var inst_28163 = (state_28223[(2)]);
var inst_28164 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28165 = figwheel.client.format_messages.call(null,inst_28164);
var inst_28166 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28167 = figwheel.client.heads_up.display_error.call(null,inst_28165,inst_28166);
var state_28223__$1 = (function (){var statearr_28261 = state_28223;
(statearr_28261[(9)] = inst_28163);

return statearr_28261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(17),inst_28167);
} else {
if((state_val_28224 === (30))){
var inst_28197 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28198 = figwheel.client.heads_up.display_warning.call(null,inst_28197);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(33),inst_28198);
} else {
if((state_val_28224 === (10))){
var inst_28157 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28262_28305 = state_28223__$1;
(statearr_28262_28305[(2)] = inst_28157);

(statearr_28262_28305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (18))){
var inst_28173 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28174 = figwheel.client.format_messages.call(null,inst_28173);
var inst_28175 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28176 = figwheel.client.heads_up.display_error.call(null,inst_28174,inst_28175);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(21),inst_28176);
} else {
if((state_val_28224 === (37))){
var inst_28206 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28263_28306 = state_28223__$1;
(statearr_28263_28306[(2)] = inst_28206);

(statearr_28263_28306[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (8))){
var inst_28149 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(11),inst_28149);
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
});})(c__23601__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23489__auto__,c__23601__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto____0 = (function (){
var statearr_28267 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28267[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto__);

(statearr_28267[(1)] = (1));

return statearr_28267;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto____1 = (function (state_28223){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_28223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e28268){if((e28268 instanceof Object)){
var ex__23493__auto__ = e28268;
var statearr_28269_28307 = state_28223;
(statearr_28269_28307[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28308 = state_28223;
state_28223 = G__28308;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto__ = function(state_28223){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto____1.call(this,state_28223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__,msg_hist,msg_names,msg))
})();
var state__23603__auto__ = (function (){var statearr_28270 = f__23602__auto__.call(null);
(statearr_28270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_28270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__,msg_hist,msg_names,msg))
);

return c__23601__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23601__auto___28371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___28371,ch){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___28371,ch){
return (function (state_28354){
var state_val_28355 = (state_28354[(1)]);
if((state_val_28355 === (1))){
var state_28354__$1 = state_28354;
var statearr_28356_28372 = state_28354__$1;
(statearr_28356_28372[(2)] = null);

(statearr_28356_28372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (2))){
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28354__$1,(4),ch);
} else {
if((state_val_28355 === (3))){
var inst_28352 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28354__$1,inst_28352);
} else {
if((state_val_28355 === (4))){
var inst_28342 = (state_28354[(7)]);
var inst_28342__$1 = (state_28354[(2)]);
var state_28354__$1 = (function (){var statearr_28357 = state_28354;
(statearr_28357[(7)] = inst_28342__$1);

return statearr_28357;
})();
if(cljs.core.truth_(inst_28342__$1)){
var statearr_28358_28373 = state_28354__$1;
(statearr_28358_28373[(1)] = (5));

} else {
var statearr_28359_28374 = state_28354__$1;
(statearr_28359_28374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (5))){
var inst_28342 = (state_28354[(7)]);
var inst_28344 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28342);
var state_28354__$1 = state_28354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28354__$1,(8),inst_28344);
} else {
if((state_val_28355 === (6))){
var state_28354__$1 = state_28354;
var statearr_28360_28375 = state_28354__$1;
(statearr_28360_28375[(2)] = null);

(statearr_28360_28375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (7))){
var inst_28350 = (state_28354[(2)]);
var state_28354__$1 = state_28354;
var statearr_28361_28376 = state_28354__$1;
(statearr_28361_28376[(2)] = inst_28350);

(statearr_28361_28376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28355 === (8))){
var inst_28346 = (state_28354[(2)]);
var state_28354__$1 = (function (){var statearr_28362 = state_28354;
(statearr_28362[(8)] = inst_28346);

return statearr_28362;
})();
var statearr_28363_28377 = state_28354__$1;
(statearr_28363_28377[(2)] = null);

(statearr_28363_28377[(1)] = (2));


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
});})(c__23601__auto___28371,ch))
;
return ((function (switch__23489__auto__,c__23601__auto___28371,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23490__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23490__auto____0 = (function (){
var statearr_28367 = [null,null,null,null,null,null,null,null,null];
(statearr_28367[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23490__auto__);

(statearr_28367[(1)] = (1));

return statearr_28367;
});
var figwheel$client$heads_up_plugin_$_state_machine__23490__auto____1 = (function (state_28354){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_28354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e28368){if((e28368 instanceof Object)){
var ex__23493__auto__ = e28368;
var statearr_28369_28378 = state_28354;
(statearr_28369_28378[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28379 = state_28354;
state_28354 = G__28379;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23490__auto__ = function(state_28354){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23490__auto____1.call(this,state_28354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23490__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23490__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___28371,ch))
})();
var state__23603__auto__ = (function (){var statearr_28370 = f__23602__auto__.call(null);
(statearr_28370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___28371);

return statearr_28370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___28371,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__){
return (function (state_28400){
var state_val_28401 = (state_28400[(1)]);
if((state_val_28401 === (1))){
var inst_28395 = cljs.core.async.timeout.call(null,(3000));
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28400__$1,(2),inst_28395);
} else {
if((state_val_28401 === (2))){
var inst_28397 = (state_28400[(2)]);
var inst_28398 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28400__$1 = (function (){var statearr_28402 = state_28400;
(statearr_28402[(7)] = inst_28397);

return statearr_28402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28400__$1,inst_28398);
} else {
return null;
}
}
});})(c__23601__auto__))
;
return ((function (switch__23489__auto__,c__23601__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23490__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23490__auto____0 = (function (){
var statearr_28406 = [null,null,null,null,null,null,null,null];
(statearr_28406[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23490__auto__);

(statearr_28406[(1)] = (1));

return statearr_28406;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23490__auto____1 = (function (state_28400){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_28400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e28407){if((e28407 instanceof Object)){
var ex__23493__auto__ = e28407;
var statearr_28408_28410 = state_28400;
(statearr_28408_28410[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28411 = state_28400;
state_28400 = G__28411;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23490__auto__ = function(state_28400){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23490__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23490__auto____1.call(this,state_28400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23490__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23490__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__))
})();
var state__23603__auto__ = (function (){var statearr_28409 = f__23602__auto__.call(null);
(statearr_28409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_28409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__))
);

return c__23601__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28412){
var map__28419 = p__28412;
var map__28419__$1 = ((((!((map__28419 == null)))?((((map__28419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28419):map__28419);
var ed = map__28419__$1;
var formatted_exception = cljs.core.get.call(null,map__28419__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28419__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28419__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28421_28425 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28422_28426 = null;
var count__28423_28427 = (0);
var i__28424_28428 = (0);
while(true){
if((i__28424_28428 < count__28423_28427)){
var msg_28429 = cljs.core._nth.call(null,chunk__28422_28426,i__28424_28428);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28429);

var G__28430 = seq__28421_28425;
var G__28431 = chunk__28422_28426;
var G__28432 = count__28423_28427;
var G__28433 = (i__28424_28428 + (1));
seq__28421_28425 = G__28430;
chunk__28422_28426 = G__28431;
count__28423_28427 = G__28432;
i__28424_28428 = G__28433;
continue;
} else {
var temp__4657__auto___28434 = cljs.core.seq.call(null,seq__28421_28425);
if(temp__4657__auto___28434){
var seq__28421_28435__$1 = temp__4657__auto___28434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28421_28435__$1)){
var c__19249__auto___28436 = cljs.core.chunk_first.call(null,seq__28421_28435__$1);
var G__28437 = cljs.core.chunk_rest.call(null,seq__28421_28435__$1);
var G__28438 = c__19249__auto___28436;
var G__28439 = cljs.core.count.call(null,c__19249__auto___28436);
var G__28440 = (0);
seq__28421_28425 = G__28437;
chunk__28422_28426 = G__28438;
count__28423_28427 = G__28439;
i__28424_28428 = G__28440;
continue;
} else {
var msg_28441 = cljs.core.first.call(null,seq__28421_28435__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28441);

var G__28442 = cljs.core.next.call(null,seq__28421_28435__$1);
var G__28443 = null;
var G__28444 = (0);
var G__28445 = (0);
seq__28421_28425 = G__28442;
chunk__28422_28426 = G__28443;
count__28423_28427 = G__28444;
i__28424_28428 = G__28445;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28446){
var map__28449 = p__28446;
var map__28449__$1 = ((((!((map__28449 == null)))?((((map__28449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28449):map__28449);
var w = map__28449__$1;
var message = cljs.core.get.call(null,map__28449__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18426__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18426__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18426__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28457 = cljs.core.seq.call(null,plugins);
var chunk__28458 = null;
var count__28459 = (0);
var i__28460 = (0);
while(true){
if((i__28460 < count__28459)){
var vec__28461 = cljs.core._nth.call(null,chunk__28458,i__28460);
var k = cljs.core.nth.call(null,vec__28461,(0),null);
var plugin = cljs.core.nth.call(null,vec__28461,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28463 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28457,chunk__28458,count__28459,i__28460,pl_28463,vec__28461,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28463.call(null,msg_hist);
});})(seq__28457,chunk__28458,count__28459,i__28460,pl_28463,vec__28461,k,plugin))
);
} else {
}

var G__28464 = seq__28457;
var G__28465 = chunk__28458;
var G__28466 = count__28459;
var G__28467 = (i__28460 + (1));
seq__28457 = G__28464;
chunk__28458 = G__28465;
count__28459 = G__28466;
i__28460 = G__28467;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28457);
if(temp__4657__auto__){
var seq__28457__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28457__$1)){
var c__19249__auto__ = cljs.core.chunk_first.call(null,seq__28457__$1);
var G__28468 = cljs.core.chunk_rest.call(null,seq__28457__$1);
var G__28469 = c__19249__auto__;
var G__28470 = cljs.core.count.call(null,c__19249__auto__);
var G__28471 = (0);
seq__28457 = G__28468;
chunk__28458 = G__28469;
count__28459 = G__28470;
i__28460 = G__28471;
continue;
} else {
var vec__28462 = cljs.core.first.call(null,seq__28457__$1);
var k = cljs.core.nth.call(null,vec__28462,(0),null);
var plugin = cljs.core.nth.call(null,vec__28462,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28472 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28457,chunk__28458,count__28459,i__28460,pl_28472,vec__28462,k,plugin,seq__28457__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28472.call(null,msg_hist);
});})(seq__28457,chunk__28458,count__28459,i__28460,pl_28472,vec__28462,k,plugin,seq__28457__$1,temp__4657__auto__))
);
} else {
}

var G__28473 = cljs.core.next.call(null,seq__28457__$1);
var G__28474 = null;
var G__28475 = (0);
var G__28476 = (0);
seq__28457 = G__28473;
chunk__28458 = G__28474;
count__28459 = G__28475;
i__28460 = G__28476;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28477 = [];
var len__19507__auto___28480 = arguments.length;
var i__19508__auto___28481 = (0);
while(true){
if((i__19508__auto___28481 < len__19507__auto___28480)){
args28477.push((arguments[i__19508__auto___28481]));

var G__28482 = (i__19508__auto___28481 + (1));
i__19508__auto___28481 = G__28482;
continue;
} else {
}
break;
}

var G__28479 = args28477.length;
switch (G__28479) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28477.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19514__auto__ = [];
var len__19507__auto___28488 = arguments.length;
var i__19508__auto___28489 = (0);
while(true){
if((i__19508__auto___28489 < len__19507__auto___28488)){
args__19514__auto__.push((arguments[i__19508__auto___28489]));

var G__28490 = (i__19508__auto___28489 + (1));
i__19508__auto___28489 = G__28490;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((0) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19515__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28485){
var map__28486 = p__28485;
var map__28486__$1 = ((((!((map__28486 == null)))?((((map__28486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28486):map__28486);
var opts = map__28486__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28484){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28484));
});

//# sourceMappingURL=client.js.map?rel=1466146184502