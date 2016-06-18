// Compiled by ClojureScript 1.8.34 {}
goog.provide('snake.model');
goog.require('cljs.core');
goog.require('reagent.core');
snake.model.dictionary = cljs.core.PersistentVector.fromArray(["Slimy","Slippery","Slithering","Serpentine","Sassy","Slick","Sick","Sophisticated","Sentimental","Super","Sad","Silly","Scary","Scheming","Smart","Smelly","Snake","Serpent","Worm","Viper","Bite","Coil","Lake","Coder","Ninja","Monk","Pirate","Guard","Warrior","Dancer","Acrobat","Mongoose","Sente","Dragon","Clojure","Nomnom"], true);
if(typeof snake.model.app_state !== 'undefined'){
} else {
snake.model.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"username","username",1605666410),[cljs.core.str(cljs.core.rand_nth.call(null,snake.model.dictionary)),cljs.core.str(" "),cljs.core.str(cljs.core.rand_nth.call(null,snake.model.dictionary))].join('')], null));
}
snake.model.world_BANG_ = (function snake$model$world_BANG_(world){
return cljs.core.swap_BANG_.call(null,snake.model.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"world","world",-418292623),world);
});
snake.model.uid_BANG_ = (function snake$model$uid_BANG_(uid){
return cljs.core.swap_BANG_.call(null,snake.model.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid);
});
snake.model.username_BANG_ = (function snake$model$username_BANG_(username){
return cljs.core.swap_BANG_.call(null,snake.model.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),username);
});
snake.model.alive_QMARK_ = (function snake$model$alive_QMARK_(){
var temp__4657__auto__ = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,snake.model.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var me = temp__4657__auto__;
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"alive","alive",1424929930),(function (){var G__28496 = cljs.core.deref.call(null,snake.model.app_state);
var G__28496__$1 = (((G__28496 == null))?null:new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(G__28496));
var G__28496__$2 = (((G__28496__$1 == null))?null:new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(G__28496__$1));
var G__28496__$3 = (((G__28496__$2 == null))?null:cljs.core.get.call(null,G__28496__$2,me));
if((G__28496__$3 == null)){
return null;
} else {
return cljs.core.get.call(null,G__28496__$3,(0));
}
})());
} else {
return null;
}
});

//# sourceMappingURL=model.js.map?rel=1466146184554