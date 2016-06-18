// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23646 = [];
var len__19507__auto___23652 = arguments.length;
var i__19508__auto___23653 = (0);
while(true){
if((i__19508__auto___23653 < len__19507__auto___23652)){
args23646.push((arguments[i__19508__auto___23653]));

var G__23654 = (i__19508__auto___23653 + (1));
i__19508__auto___23653 = G__23654;
continue;
} else {
}
break;
}

var G__23648 = args23646.length;
switch (G__23648) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23646.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23649 = (function (f,blockable,meta23650){
this.f = f;
this.blockable = blockable;
this.meta23650 = meta23650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23651,meta23650__$1){
var self__ = this;
var _23651__$1 = this;
return (new cljs.core.async.t_cljs$core$async23649(self__.f,self__.blockable,meta23650__$1));
});

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23651){
var self__ = this;
var _23651__$1 = this;
return self__.meta23650;
});

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23650","meta23650",-1141059328,null)], null);
});

cljs.core.async.t_cljs$core$async23649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23649";

cljs.core.async.t_cljs$core$async23649.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async23649");
});

cljs.core.async.__GT_t_cljs$core$async23649 = (function cljs$core$async$__GT_t_cljs$core$async23649(f__$1,blockable__$1,meta23650){
return (new cljs.core.async.t_cljs$core$async23649(f__$1,blockable__$1,meta23650));
});

}

return (new cljs.core.async.t_cljs$core$async23649(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23658 = [];
var len__19507__auto___23661 = arguments.length;
var i__19508__auto___23662 = (0);
while(true){
if((i__19508__auto___23662 < len__19507__auto___23661)){
args23658.push((arguments[i__19508__auto___23662]));

var G__23663 = (i__19508__auto___23662 + (1));
i__19508__auto___23662 = G__23663;
continue;
} else {
}
break;
}

var G__23660 = args23658.length;
switch (G__23660) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23658.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23665 = [];
var len__19507__auto___23668 = arguments.length;
var i__19508__auto___23669 = (0);
while(true){
if((i__19508__auto___23669 < len__19507__auto___23668)){
args23665.push((arguments[i__19508__auto___23669]));

var G__23670 = (i__19508__auto___23669 + (1));
i__19508__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var G__23667 = args23665.length;
switch (G__23667) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23665.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23672 = [];
var len__19507__auto___23675 = arguments.length;
var i__19508__auto___23676 = (0);
while(true){
if((i__19508__auto___23676 < len__19507__auto___23675)){
args23672.push((arguments[i__19508__auto___23676]));

var G__23677 = (i__19508__auto___23676 + (1));
i__19508__auto___23676 = G__23677;
continue;
} else {
}
break;
}

var G__23674 = args23672.length;
switch (G__23674) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23672.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23679 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23679);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23679,ret){
return (function (){
return fn1.call(null,val_23679);
});})(val_23679,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23680 = [];
var len__19507__auto___23683 = arguments.length;
var i__19508__auto___23684 = (0);
while(true){
if((i__19508__auto___23684 < len__19507__auto___23683)){
args23680.push((arguments[i__19508__auto___23684]));

var G__23685 = (i__19508__auto___23684 + (1));
i__19508__auto___23684 = G__23685;
continue;
} else {
}
break;
}

var G__23682 = args23680.length;
switch (G__23682) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23680.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19352__auto___23687 = n;
var x_23688 = (0);
while(true){
if((x_23688 < n__19352__auto___23687)){
(a[x_23688] = (0));

var G__23689 = (x_23688 + (1));
x_23688 = G__23689;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23690 = (i + (1));
i = G__23690;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23694 = (function (alt_flag,flag,meta23695){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23695 = meta23695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23696,meta23695__$1){
var self__ = this;
var _23696__$1 = this;
return (new cljs.core.async.t_cljs$core$async23694(self__.alt_flag,self__.flag,meta23695__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23696){
var self__ = this;
var _23696__$1 = this;
return self__.meta23695;
});})(flag))
;

cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23694.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23695","meta23695",-1261508970,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23694";

cljs.core.async.t_cljs$core$async23694.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async23694");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23694 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23694(alt_flag__$1,flag__$1,meta23695){
return (new cljs.core.async.t_cljs$core$async23694(alt_flag__$1,flag__$1,meta23695));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23694(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23700 = (function (alt_handler,flag,cb,meta23701){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23701 = meta23701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23702,meta23701__$1){
var self__ = this;
var _23702__$1 = this;
return (new cljs.core.async.t_cljs$core$async23700(self__.alt_handler,self__.flag,self__.cb,meta23701__$1));
});

cljs.core.async.t_cljs$core$async23700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23702){
var self__ = this;
var _23702__$1 = this;
return self__.meta23701;
});

cljs.core.async.t_cljs$core$async23700.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23700.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23701","meta23701",-309118898,null)], null);
});

cljs.core.async.t_cljs$core$async23700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23700";

cljs.core.async.t_cljs$core$async23700.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async23700");
});

cljs.core.async.__GT_t_cljs$core$async23700 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23700(alt_handler__$1,flag__$1,cb__$1,meta23701){
return (new cljs.core.async.t_cljs$core$async23700(alt_handler__$1,flag__$1,cb__$1,meta23701));
});

}

return (new cljs.core.async.t_cljs$core$async23700(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23703_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23703_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23704_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23704_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18438__auto__ = wport;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23705 = (i + (1));
i = G__23705;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18438__auto__ = ret;
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18426__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18426__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18426__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___23711 = arguments.length;
var i__19508__auto___23712 = (0);
while(true){
if((i__19508__auto___23712 < len__19507__auto___23711)){
args__19514__auto__.push((arguments[i__19508__auto___23712]));

var G__23713 = (i__19508__auto___23712 + (1));
i__19508__auto___23712 = G__23713;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((1) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19515__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23708){
var map__23709 = p__23708;
var map__23709__$1 = ((((!((map__23709 == null)))?((((map__23709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23709):map__23709);
var opts = map__23709__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23706){
var G__23707 = cljs.core.first.call(null,seq23706);
var seq23706__$1 = cljs.core.next.call(null,seq23706);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23707,seq23706__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23714 = [];
var len__19507__auto___23764 = arguments.length;
var i__19508__auto___23765 = (0);
while(true){
if((i__19508__auto___23765 < len__19507__auto___23764)){
args23714.push((arguments[i__19508__auto___23765]));

var G__23766 = (i__19508__auto___23765 + (1));
i__19508__auto___23765 = G__23766;
continue;
} else {
}
break;
}

var G__23716 = args23714.length;
switch (G__23716) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23714.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23601__auto___23768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___23768){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___23768){
return (function (state_23740){
var state_val_23741 = (state_23740[(1)]);
if((state_val_23741 === (7))){
var inst_23736 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23742_23769 = state_23740__$1;
(statearr_23742_23769[(2)] = inst_23736);

(statearr_23742_23769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (1))){
var state_23740__$1 = state_23740;
var statearr_23743_23770 = state_23740__$1;
(statearr_23743_23770[(2)] = null);

(statearr_23743_23770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (4))){
var inst_23719 = (state_23740[(7)]);
var inst_23719__$1 = (state_23740[(2)]);
var inst_23720 = (inst_23719__$1 == null);
var state_23740__$1 = (function (){var statearr_23744 = state_23740;
(statearr_23744[(7)] = inst_23719__$1);

return statearr_23744;
})();
if(cljs.core.truth_(inst_23720)){
var statearr_23745_23771 = state_23740__$1;
(statearr_23745_23771[(1)] = (5));

} else {
var statearr_23746_23772 = state_23740__$1;
(statearr_23746_23772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (13))){
var state_23740__$1 = state_23740;
var statearr_23747_23773 = state_23740__$1;
(statearr_23747_23773[(2)] = null);

(statearr_23747_23773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (6))){
var inst_23719 = (state_23740[(7)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23740__$1,(11),to,inst_23719);
} else {
if((state_val_23741 === (3))){
var inst_23738 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23740__$1,inst_23738);
} else {
if((state_val_23741 === (12))){
var state_23740__$1 = state_23740;
var statearr_23748_23774 = state_23740__$1;
(statearr_23748_23774[(2)] = null);

(statearr_23748_23774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (2))){
var state_23740__$1 = state_23740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23740__$1,(4),from);
} else {
if((state_val_23741 === (11))){
var inst_23729 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
if(cljs.core.truth_(inst_23729)){
var statearr_23749_23775 = state_23740__$1;
(statearr_23749_23775[(1)] = (12));

} else {
var statearr_23750_23776 = state_23740__$1;
(statearr_23750_23776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (9))){
var state_23740__$1 = state_23740;
var statearr_23751_23777 = state_23740__$1;
(statearr_23751_23777[(2)] = null);

(statearr_23751_23777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (5))){
var state_23740__$1 = state_23740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23752_23778 = state_23740__$1;
(statearr_23752_23778[(1)] = (8));

} else {
var statearr_23753_23779 = state_23740__$1;
(statearr_23753_23779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (14))){
var inst_23734 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23754_23780 = state_23740__$1;
(statearr_23754_23780[(2)] = inst_23734);

(statearr_23754_23780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (10))){
var inst_23726 = (state_23740[(2)]);
var state_23740__$1 = state_23740;
var statearr_23755_23781 = state_23740__$1;
(statearr_23755_23781[(2)] = inst_23726);

(statearr_23755_23781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23741 === (8))){
var inst_23723 = cljs.core.async.close_BANG_.call(null,to);
var state_23740__$1 = state_23740;
var statearr_23756_23782 = state_23740__$1;
(statearr_23756_23782[(2)] = inst_23723);

(statearr_23756_23782[(1)] = (10));


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
});})(c__23601__auto___23768))
;
return ((function (switch__23489__auto__,c__23601__auto___23768){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_23760 = [null,null,null,null,null,null,null,null];
(statearr_23760[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_23760[(1)] = (1));

return statearr_23760;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_23740){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_23740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e23761){if((e23761 instanceof Object)){
var ex__23493__auto__ = e23761;
var statearr_23762_23783 = state_23740;
(statearr_23762_23783[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23784 = state_23740;
state_23740 = G__23784;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_23740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_23740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___23768))
})();
var state__23603__auto__ = (function (){var statearr_23763 = f__23602__auto__.call(null);
(statearr_23763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___23768);

return statearr_23763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___23768))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23968){
var vec__23969 = p__23968;
var v = cljs.core.nth.call(null,vec__23969,(0),null);
var p = cljs.core.nth.call(null,vec__23969,(1),null);
var job = vec__23969;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23601__auto___24151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___24151,res,vec__23969,v,p,job,jobs,results){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___24151,res,vec__23969,v,p,job,jobs,results){
return (function (state_23974){
var state_val_23975 = (state_23974[(1)]);
if((state_val_23975 === (1))){
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23974__$1,(2),res,v);
} else {
if((state_val_23975 === (2))){
var inst_23971 = (state_23974[(2)]);
var inst_23972 = cljs.core.async.close_BANG_.call(null,res);
var state_23974__$1 = (function (){var statearr_23976 = state_23974;
(statearr_23976[(7)] = inst_23971);

return statearr_23976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23974__$1,inst_23972);
} else {
return null;
}
}
});})(c__23601__auto___24151,res,vec__23969,v,p,job,jobs,results))
;
return ((function (switch__23489__auto__,c__23601__auto___24151,res,vec__23969,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0 = (function (){
var statearr_23980 = [null,null,null,null,null,null,null,null];
(statearr_23980[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__);

(statearr_23980[(1)] = (1));

return statearr_23980;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1 = (function (state_23974){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_23974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e23981){if((e23981 instanceof Object)){
var ex__23493__auto__ = e23981;
var statearr_23982_24152 = state_23974;
(statearr_23982_24152[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24153 = state_23974;
state_23974 = G__24153;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = function(state_23974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1.call(this,state_23974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___24151,res,vec__23969,v,p,job,jobs,results))
})();
var state__23603__auto__ = (function (){var statearr_23983 = f__23602__auto__.call(null);
(statearr_23983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___24151);

return statearr_23983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___24151,res,vec__23969,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23984){
var vec__23985 = p__23984;
var v = cljs.core.nth.call(null,vec__23985,(0),null);
var p = cljs.core.nth.call(null,vec__23985,(1),null);
var job = vec__23985;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19352__auto___24154 = n;
var __24155 = (0);
while(true){
if((__24155 < n__19352__auto___24154)){
var G__23986_24156 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23986_24156) {
case "compute":
var c__23601__auto___24158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24155,c__23601__auto___24158,G__23986_24156,n__19352__auto___24154,jobs,results,process,async){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (__24155,c__23601__auto___24158,G__23986_24156,n__19352__auto___24154,jobs,results,process,async){
return (function (state_23999){
var state_val_24000 = (state_23999[(1)]);
if((state_val_24000 === (1))){
var state_23999__$1 = state_23999;
var statearr_24001_24159 = state_23999__$1;
(statearr_24001_24159[(2)] = null);

(statearr_24001_24159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (2))){
var state_23999__$1 = state_23999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23999__$1,(4),jobs);
} else {
if((state_val_24000 === (3))){
var inst_23997 = (state_23999[(2)]);
var state_23999__$1 = state_23999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23999__$1,inst_23997);
} else {
if((state_val_24000 === (4))){
var inst_23989 = (state_23999[(2)]);
var inst_23990 = process.call(null,inst_23989);
var state_23999__$1 = state_23999;
if(cljs.core.truth_(inst_23990)){
var statearr_24002_24160 = state_23999__$1;
(statearr_24002_24160[(1)] = (5));

} else {
var statearr_24003_24161 = state_23999__$1;
(statearr_24003_24161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (5))){
var state_23999__$1 = state_23999;
var statearr_24004_24162 = state_23999__$1;
(statearr_24004_24162[(2)] = null);

(statearr_24004_24162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (6))){
var state_23999__$1 = state_23999;
var statearr_24005_24163 = state_23999__$1;
(statearr_24005_24163[(2)] = null);

(statearr_24005_24163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24000 === (7))){
var inst_23995 = (state_23999[(2)]);
var state_23999__$1 = state_23999;
var statearr_24006_24164 = state_23999__$1;
(statearr_24006_24164[(2)] = inst_23995);

(statearr_24006_24164[(1)] = (3));


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
});})(__24155,c__23601__auto___24158,G__23986_24156,n__19352__auto___24154,jobs,results,process,async))
;
return ((function (__24155,switch__23489__auto__,c__23601__auto___24158,G__23986_24156,n__19352__auto___24154,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0 = (function (){
var statearr_24010 = [null,null,null,null,null,null,null];
(statearr_24010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__);

(statearr_24010[(1)] = (1));

return statearr_24010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1 = (function (state_23999){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_23999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e24011){if((e24011 instanceof Object)){
var ex__23493__auto__ = e24011;
var statearr_24012_24165 = state_23999;
(statearr_24012_24165[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24166 = state_23999;
state_23999 = G__24166;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = function(state_23999){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1.call(this,state_23999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__;
})()
;})(__24155,switch__23489__auto__,c__23601__auto___24158,G__23986_24156,n__19352__auto___24154,jobs,results,process,async))
})();
var state__23603__auto__ = (function (){var statearr_24013 = f__23602__auto__.call(null);
(statearr_24013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___24158);

return statearr_24013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(__24155,c__23601__auto___24158,G__23986_24156,n__19352__auto___24154,jobs,results,process,async))
);


break;
case "async":
var c__23601__auto___24167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24155,c__23601__auto___24167,G__23986_24156,n__19352__auto___24154,jobs,results,process,async){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (__24155,c__23601__auto___24167,G__23986_24156,n__19352__auto___24154,jobs,results,process,async){
return (function (state_24026){
var state_val_24027 = (state_24026[(1)]);
if((state_val_24027 === (1))){
var state_24026__$1 = state_24026;
var statearr_24028_24168 = state_24026__$1;
(statearr_24028_24168[(2)] = null);

(statearr_24028_24168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (2))){
var state_24026__$1 = state_24026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24026__$1,(4),jobs);
} else {
if((state_val_24027 === (3))){
var inst_24024 = (state_24026[(2)]);
var state_24026__$1 = state_24026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24026__$1,inst_24024);
} else {
if((state_val_24027 === (4))){
var inst_24016 = (state_24026[(2)]);
var inst_24017 = async.call(null,inst_24016);
var state_24026__$1 = state_24026;
if(cljs.core.truth_(inst_24017)){
var statearr_24029_24169 = state_24026__$1;
(statearr_24029_24169[(1)] = (5));

} else {
var statearr_24030_24170 = state_24026__$1;
(statearr_24030_24170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (5))){
var state_24026__$1 = state_24026;
var statearr_24031_24171 = state_24026__$1;
(statearr_24031_24171[(2)] = null);

(statearr_24031_24171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (6))){
var state_24026__$1 = state_24026;
var statearr_24032_24172 = state_24026__$1;
(statearr_24032_24172[(2)] = null);

(statearr_24032_24172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24027 === (7))){
var inst_24022 = (state_24026[(2)]);
var state_24026__$1 = state_24026;
var statearr_24033_24173 = state_24026__$1;
(statearr_24033_24173[(2)] = inst_24022);

(statearr_24033_24173[(1)] = (3));


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
});})(__24155,c__23601__auto___24167,G__23986_24156,n__19352__auto___24154,jobs,results,process,async))
;
return ((function (__24155,switch__23489__auto__,c__23601__auto___24167,G__23986_24156,n__19352__auto___24154,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0 = (function (){
var statearr_24037 = [null,null,null,null,null,null,null];
(statearr_24037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__);

(statearr_24037[(1)] = (1));

return statearr_24037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1 = (function (state_24026){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_24026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e24038){if((e24038 instanceof Object)){
var ex__23493__auto__ = e24038;
var statearr_24039_24174 = state_24026;
(statearr_24039_24174[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24175 = state_24026;
state_24026 = G__24175;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = function(state_24026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1.call(this,state_24026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__;
})()
;})(__24155,switch__23489__auto__,c__23601__auto___24167,G__23986_24156,n__19352__auto___24154,jobs,results,process,async))
})();
var state__23603__auto__ = (function (){var statearr_24040 = f__23602__auto__.call(null);
(statearr_24040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___24167);

return statearr_24040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(__24155,c__23601__auto___24167,G__23986_24156,n__19352__auto___24154,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24176 = (__24155 + (1));
__24155 = G__24176;
continue;
} else {
}
break;
}

var c__23601__auto___24177 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___24177,jobs,results,process,async){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___24177,jobs,results,process,async){
return (function (state_24062){
var state_val_24063 = (state_24062[(1)]);
if((state_val_24063 === (1))){
var state_24062__$1 = state_24062;
var statearr_24064_24178 = state_24062__$1;
(statearr_24064_24178[(2)] = null);

(statearr_24064_24178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (2))){
var state_24062__$1 = state_24062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24062__$1,(4),from);
} else {
if((state_val_24063 === (3))){
var inst_24060 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24062__$1,inst_24060);
} else {
if((state_val_24063 === (4))){
var inst_24043 = (state_24062[(7)]);
var inst_24043__$1 = (state_24062[(2)]);
var inst_24044 = (inst_24043__$1 == null);
var state_24062__$1 = (function (){var statearr_24065 = state_24062;
(statearr_24065[(7)] = inst_24043__$1);

return statearr_24065;
})();
if(cljs.core.truth_(inst_24044)){
var statearr_24066_24179 = state_24062__$1;
(statearr_24066_24179[(1)] = (5));

} else {
var statearr_24067_24180 = state_24062__$1;
(statearr_24067_24180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (5))){
var inst_24046 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24062__$1 = state_24062;
var statearr_24068_24181 = state_24062__$1;
(statearr_24068_24181[(2)] = inst_24046);

(statearr_24068_24181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (6))){
var inst_24048 = (state_24062[(8)]);
var inst_24043 = (state_24062[(7)]);
var inst_24048__$1 = cljs.core.async.chan.call(null,(1));
var inst_24049 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24050 = [inst_24043,inst_24048__$1];
var inst_24051 = (new cljs.core.PersistentVector(null,2,(5),inst_24049,inst_24050,null));
var state_24062__$1 = (function (){var statearr_24069 = state_24062;
(statearr_24069[(8)] = inst_24048__$1);

return statearr_24069;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24062__$1,(8),jobs,inst_24051);
} else {
if((state_val_24063 === (7))){
var inst_24058 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
var statearr_24070_24182 = state_24062__$1;
(statearr_24070_24182[(2)] = inst_24058);

(statearr_24070_24182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (8))){
var inst_24048 = (state_24062[(8)]);
var inst_24053 = (state_24062[(2)]);
var state_24062__$1 = (function (){var statearr_24071 = state_24062;
(statearr_24071[(9)] = inst_24053);

return statearr_24071;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24062__$1,(9),results,inst_24048);
} else {
if((state_val_24063 === (9))){
var inst_24055 = (state_24062[(2)]);
var state_24062__$1 = (function (){var statearr_24072 = state_24062;
(statearr_24072[(10)] = inst_24055);

return statearr_24072;
})();
var statearr_24073_24183 = state_24062__$1;
(statearr_24073_24183[(2)] = null);

(statearr_24073_24183[(1)] = (2));


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
});})(c__23601__auto___24177,jobs,results,process,async))
;
return ((function (switch__23489__auto__,c__23601__auto___24177,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0 = (function (){
var statearr_24077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__);

(statearr_24077[(1)] = (1));

return statearr_24077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1 = (function (state_24062){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_24062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e24078){if((e24078 instanceof Object)){
var ex__23493__auto__ = e24078;
var statearr_24079_24184 = state_24062;
(statearr_24079_24184[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24185 = state_24062;
state_24062 = G__24185;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = function(state_24062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1.call(this,state_24062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___24177,jobs,results,process,async))
})();
var state__23603__auto__ = (function (){var statearr_24080 = f__23602__auto__.call(null);
(statearr_24080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___24177);

return statearr_24080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___24177,jobs,results,process,async))
);


var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__,jobs,results,process,async){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__,jobs,results,process,async){
return (function (state_24118){
var state_val_24119 = (state_24118[(1)]);
if((state_val_24119 === (7))){
var inst_24114 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
var statearr_24120_24186 = state_24118__$1;
(statearr_24120_24186[(2)] = inst_24114);

(statearr_24120_24186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (20))){
var state_24118__$1 = state_24118;
var statearr_24121_24187 = state_24118__$1;
(statearr_24121_24187[(2)] = null);

(statearr_24121_24187[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (1))){
var state_24118__$1 = state_24118;
var statearr_24122_24188 = state_24118__$1;
(statearr_24122_24188[(2)] = null);

(statearr_24122_24188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (4))){
var inst_24083 = (state_24118[(7)]);
var inst_24083__$1 = (state_24118[(2)]);
var inst_24084 = (inst_24083__$1 == null);
var state_24118__$1 = (function (){var statearr_24123 = state_24118;
(statearr_24123[(7)] = inst_24083__$1);

return statearr_24123;
})();
if(cljs.core.truth_(inst_24084)){
var statearr_24124_24189 = state_24118__$1;
(statearr_24124_24189[(1)] = (5));

} else {
var statearr_24125_24190 = state_24118__$1;
(statearr_24125_24190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (15))){
var inst_24096 = (state_24118[(8)]);
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24118__$1,(18),to,inst_24096);
} else {
if((state_val_24119 === (21))){
var inst_24109 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
var statearr_24126_24191 = state_24118__$1;
(statearr_24126_24191[(2)] = inst_24109);

(statearr_24126_24191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (13))){
var inst_24111 = (state_24118[(2)]);
var state_24118__$1 = (function (){var statearr_24127 = state_24118;
(statearr_24127[(9)] = inst_24111);

return statearr_24127;
})();
var statearr_24128_24192 = state_24118__$1;
(statearr_24128_24192[(2)] = null);

(statearr_24128_24192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (6))){
var inst_24083 = (state_24118[(7)]);
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24118__$1,(11),inst_24083);
} else {
if((state_val_24119 === (17))){
var inst_24104 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
if(cljs.core.truth_(inst_24104)){
var statearr_24129_24193 = state_24118__$1;
(statearr_24129_24193[(1)] = (19));

} else {
var statearr_24130_24194 = state_24118__$1;
(statearr_24130_24194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (3))){
var inst_24116 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24118__$1,inst_24116);
} else {
if((state_val_24119 === (12))){
var inst_24093 = (state_24118[(10)]);
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24118__$1,(14),inst_24093);
} else {
if((state_val_24119 === (2))){
var state_24118__$1 = state_24118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24118__$1,(4),results);
} else {
if((state_val_24119 === (19))){
var state_24118__$1 = state_24118;
var statearr_24131_24195 = state_24118__$1;
(statearr_24131_24195[(2)] = null);

(statearr_24131_24195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (11))){
var inst_24093 = (state_24118[(2)]);
var state_24118__$1 = (function (){var statearr_24132 = state_24118;
(statearr_24132[(10)] = inst_24093);

return statearr_24132;
})();
var statearr_24133_24196 = state_24118__$1;
(statearr_24133_24196[(2)] = null);

(statearr_24133_24196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (9))){
var state_24118__$1 = state_24118;
var statearr_24134_24197 = state_24118__$1;
(statearr_24134_24197[(2)] = null);

(statearr_24134_24197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (5))){
var state_24118__$1 = state_24118;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24135_24198 = state_24118__$1;
(statearr_24135_24198[(1)] = (8));

} else {
var statearr_24136_24199 = state_24118__$1;
(statearr_24136_24199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (14))){
var inst_24096 = (state_24118[(8)]);
var inst_24098 = (state_24118[(11)]);
var inst_24096__$1 = (state_24118[(2)]);
var inst_24097 = (inst_24096__$1 == null);
var inst_24098__$1 = cljs.core.not.call(null,inst_24097);
var state_24118__$1 = (function (){var statearr_24137 = state_24118;
(statearr_24137[(8)] = inst_24096__$1);

(statearr_24137[(11)] = inst_24098__$1);

return statearr_24137;
})();
if(inst_24098__$1){
var statearr_24138_24200 = state_24118__$1;
(statearr_24138_24200[(1)] = (15));

} else {
var statearr_24139_24201 = state_24118__$1;
(statearr_24139_24201[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (16))){
var inst_24098 = (state_24118[(11)]);
var state_24118__$1 = state_24118;
var statearr_24140_24202 = state_24118__$1;
(statearr_24140_24202[(2)] = inst_24098);

(statearr_24140_24202[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (10))){
var inst_24090 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
var statearr_24141_24203 = state_24118__$1;
(statearr_24141_24203[(2)] = inst_24090);

(statearr_24141_24203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (18))){
var inst_24101 = (state_24118[(2)]);
var state_24118__$1 = state_24118;
var statearr_24142_24204 = state_24118__$1;
(statearr_24142_24204[(2)] = inst_24101);

(statearr_24142_24204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24119 === (8))){
var inst_24087 = cljs.core.async.close_BANG_.call(null,to);
var state_24118__$1 = state_24118;
var statearr_24143_24205 = state_24118__$1;
(statearr_24143_24205[(2)] = inst_24087);

(statearr_24143_24205[(1)] = (10));


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
});})(c__23601__auto__,jobs,results,process,async))
;
return ((function (switch__23489__auto__,c__23601__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0 = (function (){
var statearr_24147 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24147[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__);

(statearr_24147[(1)] = (1));

return statearr_24147;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1 = (function (state_24118){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_24118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e24148){if((e24148 instanceof Object)){
var ex__23493__auto__ = e24148;
var statearr_24149_24206 = state_24118;
(statearr_24149_24206[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24207 = state_24118;
state_24118 = G__24207;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__ = function(state_24118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1.call(this,state_24118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23490__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__,jobs,results,process,async))
})();
var state__23603__auto__ = (function (){var statearr_24150 = f__23602__auto__.call(null);
(statearr_24150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_24150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__,jobs,results,process,async))
);

return c__23601__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24208 = [];
var len__19507__auto___24211 = arguments.length;
var i__19508__auto___24212 = (0);
while(true){
if((i__19508__auto___24212 < len__19507__auto___24211)){
args24208.push((arguments[i__19508__auto___24212]));

var G__24213 = (i__19508__auto___24212 + (1));
i__19508__auto___24212 = G__24213;
continue;
} else {
}
break;
}

var G__24210 = args24208.length;
switch (G__24210) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24208.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24215 = [];
var len__19507__auto___24218 = arguments.length;
var i__19508__auto___24219 = (0);
while(true){
if((i__19508__auto___24219 < len__19507__auto___24218)){
args24215.push((arguments[i__19508__auto___24219]));

var G__24220 = (i__19508__auto___24219 + (1));
i__19508__auto___24219 = G__24220;
continue;
} else {
}
break;
}

var G__24217 = args24215.length;
switch (G__24217) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24215.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24222 = [];
var len__19507__auto___24275 = arguments.length;
var i__19508__auto___24276 = (0);
while(true){
if((i__19508__auto___24276 < len__19507__auto___24275)){
args24222.push((arguments[i__19508__auto___24276]));

var G__24277 = (i__19508__auto___24276 + (1));
i__19508__auto___24276 = G__24277;
continue;
} else {
}
break;
}

var G__24224 = args24222.length;
switch (G__24224) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24222.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23601__auto___24279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___24279,tc,fc){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___24279,tc,fc){
return (function (state_24250){
var state_val_24251 = (state_24250[(1)]);
if((state_val_24251 === (7))){
var inst_24246 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24252_24280 = state_24250__$1;
(statearr_24252_24280[(2)] = inst_24246);

(statearr_24252_24280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (1))){
var state_24250__$1 = state_24250;
var statearr_24253_24281 = state_24250__$1;
(statearr_24253_24281[(2)] = null);

(statearr_24253_24281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (4))){
var inst_24227 = (state_24250[(7)]);
var inst_24227__$1 = (state_24250[(2)]);
var inst_24228 = (inst_24227__$1 == null);
var state_24250__$1 = (function (){var statearr_24254 = state_24250;
(statearr_24254[(7)] = inst_24227__$1);

return statearr_24254;
})();
if(cljs.core.truth_(inst_24228)){
var statearr_24255_24282 = state_24250__$1;
(statearr_24255_24282[(1)] = (5));

} else {
var statearr_24256_24283 = state_24250__$1;
(statearr_24256_24283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (13))){
var state_24250__$1 = state_24250;
var statearr_24257_24284 = state_24250__$1;
(statearr_24257_24284[(2)] = null);

(statearr_24257_24284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (6))){
var inst_24227 = (state_24250[(7)]);
var inst_24233 = p.call(null,inst_24227);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24233)){
var statearr_24258_24285 = state_24250__$1;
(statearr_24258_24285[(1)] = (9));

} else {
var statearr_24259_24286 = state_24250__$1;
(statearr_24259_24286[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (3))){
var inst_24248 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24250__$1,inst_24248);
} else {
if((state_val_24251 === (12))){
var state_24250__$1 = state_24250;
var statearr_24260_24287 = state_24250__$1;
(statearr_24260_24287[(2)] = null);

(statearr_24260_24287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (2))){
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(4),ch);
} else {
if((state_val_24251 === (11))){
var inst_24227 = (state_24250[(7)]);
var inst_24237 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24250__$1,(8),inst_24237,inst_24227);
} else {
if((state_val_24251 === (9))){
var state_24250__$1 = state_24250;
var statearr_24261_24288 = state_24250__$1;
(statearr_24261_24288[(2)] = tc);

(statearr_24261_24288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (5))){
var inst_24230 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24231 = cljs.core.async.close_BANG_.call(null,fc);
var state_24250__$1 = (function (){var statearr_24262 = state_24250;
(statearr_24262[(8)] = inst_24230);

return statearr_24262;
})();
var statearr_24263_24289 = state_24250__$1;
(statearr_24263_24289[(2)] = inst_24231);

(statearr_24263_24289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (14))){
var inst_24244 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24264_24290 = state_24250__$1;
(statearr_24264_24290[(2)] = inst_24244);

(statearr_24264_24290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (10))){
var state_24250__$1 = state_24250;
var statearr_24265_24291 = state_24250__$1;
(statearr_24265_24291[(2)] = fc);

(statearr_24265_24291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (8))){
var inst_24239 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24239)){
var statearr_24266_24292 = state_24250__$1;
(statearr_24266_24292[(1)] = (12));

} else {
var statearr_24267_24293 = state_24250__$1;
(statearr_24267_24293[(1)] = (13));

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
});})(c__23601__auto___24279,tc,fc))
;
return ((function (switch__23489__auto__,c__23601__auto___24279,tc,fc){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_24271 = [null,null,null,null,null,null,null,null,null];
(statearr_24271[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_24271[(1)] = (1));

return statearr_24271;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_24250){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_24250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e24272){if((e24272 instanceof Object)){
var ex__23493__auto__ = e24272;
var statearr_24273_24294 = state_24250;
(statearr_24273_24294[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24295 = state_24250;
state_24250 = G__24295;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_24250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_24250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___24279,tc,fc))
})();
var state__23603__auto__ = (function (){var statearr_24274 = f__23602__auto__.call(null);
(statearr_24274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___24279);

return statearr_24274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___24279,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__){
return (function (state_24359){
var state_val_24360 = (state_24359[(1)]);
if((state_val_24360 === (7))){
var inst_24355 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24361_24382 = state_24359__$1;
(statearr_24361_24382[(2)] = inst_24355);

(statearr_24361_24382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (1))){
var inst_24339 = init;
var state_24359__$1 = (function (){var statearr_24362 = state_24359;
(statearr_24362[(7)] = inst_24339);

return statearr_24362;
})();
var statearr_24363_24383 = state_24359__$1;
(statearr_24363_24383[(2)] = null);

(statearr_24363_24383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (4))){
var inst_24342 = (state_24359[(8)]);
var inst_24342__$1 = (state_24359[(2)]);
var inst_24343 = (inst_24342__$1 == null);
var state_24359__$1 = (function (){var statearr_24364 = state_24359;
(statearr_24364[(8)] = inst_24342__$1);

return statearr_24364;
})();
if(cljs.core.truth_(inst_24343)){
var statearr_24365_24384 = state_24359__$1;
(statearr_24365_24384[(1)] = (5));

} else {
var statearr_24366_24385 = state_24359__$1;
(statearr_24366_24385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (6))){
var inst_24339 = (state_24359[(7)]);
var inst_24346 = (state_24359[(9)]);
var inst_24342 = (state_24359[(8)]);
var inst_24346__$1 = f.call(null,inst_24339,inst_24342);
var inst_24347 = cljs.core.reduced_QMARK_.call(null,inst_24346__$1);
var state_24359__$1 = (function (){var statearr_24367 = state_24359;
(statearr_24367[(9)] = inst_24346__$1);

return statearr_24367;
})();
if(inst_24347){
var statearr_24368_24386 = state_24359__$1;
(statearr_24368_24386[(1)] = (8));

} else {
var statearr_24369_24387 = state_24359__$1;
(statearr_24369_24387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (3))){
var inst_24357 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24359__$1,inst_24357);
} else {
if((state_val_24360 === (2))){
var state_24359__$1 = state_24359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24359__$1,(4),ch);
} else {
if((state_val_24360 === (9))){
var inst_24346 = (state_24359[(9)]);
var inst_24339 = inst_24346;
var state_24359__$1 = (function (){var statearr_24370 = state_24359;
(statearr_24370[(7)] = inst_24339);

return statearr_24370;
})();
var statearr_24371_24388 = state_24359__$1;
(statearr_24371_24388[(2)] = null);

(statearr_24371_24388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (5))){
var inst_24339 = (state_24359[(7)]);
var state_24359__$1 = state_24359;
var statearr_24372_24389 = state_24359__$1;
(statearr_24372_24389[(2)] = inst_24339);

(statearr_24372_24389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (10))){
var inst_24353 = (state_24359[(2)]);
var state_24359__$1 = state_24359;
var statearr_24373_24390 = state_24359__$1;
(statearr_24373_24390[(2)] = inst_24353);

(statearr_24373_24390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24360 === (8))){
var inst_24346 = (state_24359[(9)]);
var inst_24349 = cljs.core.deref.call(null,inst_24346);
var state_24359__$1 = state_24359;
var statearr_24374_24391 = state_24359__$1;
(statearr_24374_24391[(2)] = inst_24349);

(statearr_24374_24391[(1)] = (10));


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
});})(c__23601__auto__))
;
return ((function (switch__23489__auto__,c__23601__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23490__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23490__auto____0 = (function (){
var statearr_24378 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24378[(0)] = cljs$core$async$reduce_$_state_machine__23490__auto__);

(statearr_24378[(1)] = (1));

return statearr_24378;
});
var cljs$core$async$reduce_$_state_machine__23490__auto____1 = (function (state_24359){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_24359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e24379){if((e24379 instanceof Object)){
var ex__23493__auto__ = e24379;
var statearr_24380_24392 = state_24359;
(statearr_24380_24392[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24393 = state_24359;
state_24359 = G__24393;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23490__auto__ = function(state_24359){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23490__auto____1.call(this,state_24359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23490__auto____0;
cljs$core$async$reduce_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23490__auto____1;
return cljs$core$async$reduce_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__))
})();
var state__23603__auto__ = (function (){var statearr_24381 = f__23602__auto__.call(null);
(statearr_24381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_24381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__))
);

return c__23601__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24394 = [];
var len__19507__auto___24446 = arguments.length;
var i__19508__auto___24447 = (0);
while(true){
if((i__19508__auto___24447 < len__19507__auto___24446)){
args24394.push((arguments[i__19508__auto___24447]));

var G__24448 = (i__19508__auto___24447 + (1));
i__19508__auto___24447 = G__24448;
continue;
} else {
}
break;
}

var G__24396 = args24394.length;
switch (G__24396) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24394.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__){
return (function (state_24421){
var state_val_24422 = (state_24421[(1)]);
if((state_val_24422 === (7))){
var inst_24403 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24423_24450 = state_24421__$1;
(statearr_24423_24450[(2)] = inst_24403);

(statearr_24423_24450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (1))){
var inst_24397 = cljs.core.seq.call(null,coll);
var inst_24398 = inst_24397;
var state_24421__$1 = (function (){var statearr_24424 = state_24421;
(statearr_24424[(7)] = inst_24398);

return statearr_24424;
})();
var statearr_24425_24451 = state_24421__$1;
(statearr_24425_24451[(2)] = null);

(statearr_24425_24451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (4))){
var inst_24398 = (state_24421[(7)]);
var inst_24401 = cljs.core.first.call(null,inst_24398);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24421__$1,(7),ch,inst_24401);
} else {
if((state_val_24422 === (13))){
var inst_24415 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24426_24452 = state_24421__$1;
(statearr_24426_24452[(2)] = inst_24415);

(statearr_24426_24452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (6))){
var inst_24406 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
if(cljs.core.truth_(inst_24406)){
var statearr_24427_24453 = state_24421__$1;
(statearr_24427_24453[(1)] = (8));

} else {
var statearr_24428_24454 = state_24421__$1;
(statearr_24428_24454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (3))){
var inst_24419 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24421__$1,inst_24419);
} else {
if((state_val_24422 === (12))){
var state_24421__$1 = state_24421;
var statearr_24429_24455 = state_24421__$1;
(statearr_24429_24455[(2)] = null);

(statearr_24429_24455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (2))){
var inst_24398 = (state_24421[(7)]);
var state_24421__$1 = state_24421;
if(cljs.core.truth_(inst_24398)){
var statearr_24430_24456 = state_24421__$1;
(statearr_24430_24456[(1)] = (4));

} else {
var statearr_24431_24457 = state_24421__$1;
(statearr_24431_24457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (11))){
var inst_24412 = cljs.core.async.close_BANG_.call(null,ch);
var state_24421__$1 = state_24421;
var statearr_24432_24458 = state_24421__$1;
(statearr_24432_24458[(2)] = inst_24412);

(statearr_24432_24458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (9))){
var state_24421__$1 = state_24421;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24433_24459 = state_24421__$1;
(statearr_24433_24459[(1)] = (11));

} else {
var statearr_24434_24460 = state_24421__$1;
(statearr_24434_24460[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (5))){
var inst_24398 = (state_24421[(7)]);
var state_24421__$1 = state_24421;
var statearr_24435_24461 = state_24421__$1;
(statearr_24435_24461[(2)] = inst_24398);

(statearr_24435_24461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (10))){
var inst_24417 = (state_24421[(2)]);
var state_24421__$1 = state_24421;
var statearr_24436_24462 = state_24421__$1;
(statearr_24436_24462[(2)] = inst_24417);

(statearr_24436_24462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24422 === (8))){
var inst_24398 = (state_24421[(7)]);
var inst_24408 = cljs.core.next.call(null,inst_24398);
var inst_24398__$1 = inst_24408;
var state_24421__$1 = (function (){var statearr_24437 = state_24421;
(statearr_24437[(7)] = inst_24398__$1);

return statearr_24437;
})();
var statearr_24438_24463 = state_24421__$1;
(statearr_24438_24463[(2)] = null);

(statearr_24438_24463[(1)] = (2));


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
});})(c__23601__auto__))
;
return ((function (switch__23489__auto__,c__23601__auto__){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_24442 = [null,null,null,null,null,null,null,null];
(statearr_24442[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_24442[(1)] = (1));

return statearr_24442;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_24421){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_24421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e24443){if((e24443 instanceof Object)){
var ex__23493__auto__ = e24443;
var statearr_24444_24464 = state_24421;
(statearr_24444_24464[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24465 = state_24421;
state_24421 = G__24465;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_24421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_24421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__))
})();
var state__23603__auto__ = (function (){var statearr_24445 = f__23602__auto__.call(null);
(statearr_24445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_24445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__))
);

return c__23601__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19101__auto__ = (((_ == null))?null:_);
var m__19102__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,_);
} else {
var m__19102__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19102__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,ch);
} else {
var m__19102__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m);
} else {
var m__19102__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24687 = (function (mult,ch,cs,meta24688){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24688 = meta24688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24689,meta24688__$1){
var self__ = this;
var _24689__$1 = this;
return (new cljs.core.async.t_cljs$core$async24687(self__.mult,self__.ch,self__.cs,meta24688__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24689){
var self__ = this;
var _24689__$1 = this;
return self__.meta24688;
});})(cs))
;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24687.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24687.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24688","meta24688",-648701088,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24687";

cljs.core.async.t_cljs$core$async24687.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async24687");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24687 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24687(mult__$1,ch__$1,cs__$1,meta24688){
return (new cljs.core.async.t_cljs$core$async24687(mult__$1,ch__$1,cs__$1,meta24688));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24687(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23601__auto___24908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___24908,cs,m,dchan,dctr,done){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___24908,cs,m,dchan,dctr,done){
return (function (state_24820){
var state_val_24821 = (state_24820[(1)]);
if((state_val_24821 === (7))){
var inst_24816 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24822_24909 = state_24820__$1;
(statearr_24822_24909[(2)] = inst_24816);

(statearr_24822_24909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (20))){
var inst_24721 = (state_24820[(7)]);
var inst_24731 = cljs.core.first.call(null,inst_24721);
var inst_24732 = cljs.core.nth.call(null,inst_24731,(0),null);
var inst_24733 = cljs.core.nth.call(null,inst_24731,(1),null);
var state_24820__$1 = (function (){var statearr_24823 = state_24820;
(statearr_24823[(8)] = inst_24732);

return statearr_24823;
})();
if(cljs.core.truth_(inst_24733)){
var statearr_24824_24910 = state_24820__$1;
(statearr_24824_24910[(1)] = (22));

} else {
var statearr_24825_24911 = state_24820__$1;
(statearr_24825_24911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (27))){
var inst_24763 = (state_24820[(9)]);
var inst_24768 = (state_24820[(10)]);
var inst_24692 = (state_24820[(11)]);
var inst_24761 = (state_24820[(12)]);
var inst_24768__$1 = cljs.core._nth.call(null,inst_24761,inst_24763);
var inst_24769 = cljs.core.async.put_BANG_.call(null,inst_24768__$1,inst_24692,done);
var state_24820__$1 = (function (){var statearr_24826 = state_24820;
(statearr_24826[(10)] = inst_24768__$1);

return statearr_24826;
})();
if(cljs.core.truth_(inst_24769)){
var statearr_24827_24912 = state_24820__$1;
(statearr_24827_24912[(1)] = (30));

} else {
var statearr_24828_24913 = state_24820__$1;
(statearr_24828_24913[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (1))){
var state_24820__$1 = state_24820;
var statearr_24829_24914 = state_24820__$1;
(statearr_24829_24914[(2)] = null);

(statearr_24829_24914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (24))){
var inst_24721 = (state_24820[(7)]);
var inst_24738 = (state_24820[(2)]);
var inst_24739 = cljs.core.next.call(null,inst_24721);
var inst_24701 = inst_24739;
var inst_24702 = null;
var inst_24703 = (0);
var inst_24704 = (0);
var state_24820__$1 = (function (){var statearr_24830 = state_24820;
(statearr_24830[(13)] = inst_24738);

(statearr_24830[(14)] = inst_24704);

(statearr_24830[(15)] = inst_24703);

(statearr_24830[(16)] = inst_24701);

(statearr_24830[(17)] = inst_24702);

return statearr_24830;
})();
var statearr_24831_24915 = state_24820__$1;
(statearr_24831_24915[(2)] = null);

(statearr_24831_24915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (39))){
var state_24820__$1 = state_24820;
var statearr_24835_24916 = state_24820__$1;
(statearr_24835_24916[(2)] = null);

(statearr_24835_24916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (4))){
var inst_24692 = (state_24820[(11)]);
var inst_24692__$1 = (state_24820[(2)]);
var inst_24693 = (inst_24692__$1 == null);
var state_24820__$1 = (function (){var statearr_24836 = state_24820;
(statearr_24836[(11)] = inst_24692__$1);

return statearr_24836;
})();
if(cljs.core.truth_(inst_24693)){
var statearr_24837_24917 = state_24820__$1;
(statearr_24837_24917[(1)] = (5));

} else {
var statearr_24838_24918 = state_24820__$1;
(statearr_24838_24918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (15))){
var inst_24704 = (state_24820[(14)]);
var inst_24703 = (state_24820[(15)]);
var inst_24701 = (state_24820[(16)]);
var inst_24702 = (state_24820[(17)]);
var inst_24717 = (state_24820[(2)]);
var inst_24718 = (inst_24704 + (1));
var tmp24832 = inst_24703;
var tmp24833 = inst_24701;
var tmp24834 = inst_24702;
var inst_24701__$1 = tmp24833;
var inst_24702__$1 = tmp24834;
var inst_24703__$1 = tmp24832;
var inst_24704__$1 = inst_24718;
var state_24820__$1 = (function (){var statearr_24839 = state_24820;
(statearr_24839[(14)] = inst_24704__$1);

(statearr_24839[(15)] = inst_24703__$1);

(statearr_24839[(16)] = inst_24701__$1);

(statearr_24839[(17)] = inst_24702__$1);

(statearr_24839[(18)] = inst_24717);

return statearr_24839;
})();
var statearr_24840_24919 = state_24820__$1;
(statearr_24840_24919[(2)] = null);

(statearr_24840_24919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (21))){
var inst_24742 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24844_24920 = state_24820__$1;
(statearr_24844_24920[(2)] = inst_24742);

(statearr_24844_24920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (31))){
var inst_24768 = (state_24820[(10)]);
var inst_24772 = done.call(null,null);
var inst_24773 = cljs.core.async.untap_STAR_.call(null,m,inst_24768);
var state_24820__$1 = (function (){var statearr_24845 = state_24820;
(statearr_24845[(19)] = inst_24772);

return statearr_24845;
})();
var statearr_24846_24921 = state_24820__$1;
(statearr_24846_24921[(2)] = inst_24773);

(statearr_24846_24921[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (32))){
var inst_24762 = (state_24820[(20)]);
var inst_24763 = (state_24820[(9)]);
var inst_24760 = (state_24820[(21)]);
var inst_24761 = (state_24820[(12)]);
var inst_24775 = (state_24820[(2)]);
var inst_24776 = (inst_24763 + (1));
var tmp24841 = inst_24762;
var tmp24842 = inst_24760;
var tmp24843 = inst_24761;
var inst_24760__$1 = tmp24842;
var inst_24761__$1 = tmp24843;
var inst_24762__$1 = tmp24841;
var inst_24763__$1 = inst_24776;
var state_24820__$1 = (function (){var statearr_24847 = state_24820;
(statearr_24847[(20)] = inst_24762__$1);

(statearr_24847[(9)] = inst_24763__$1);

(statearr_24847[(22)] = inst_24775);

(statearr_24847[(21)] = inst_24760__$1);

(statearr_24847[(12)] = inst_24761__$1);

return statearr_24847;
})();
var statearr_24848_24922 = state_24820__$1;
(statearr_24848_24922[(2)] = null);

(statearr_24848_24922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (40))){
var inst_24788 = (state_24820[(23)]);
var inst_24792 = done.call(null,null);
var inst_24793 = cljs.core.async.untap_STAR_.call(null,m,inst_24788);
var state_24820__$1 = (function (){var statearr_24849 = state_24820;
(statearr_24849[(24)] = inst_24792);

return statearr_24849;
})();
var statearr_24850_24923 = state_24820__$1;
(statearr_24850_24923[(2)] = inst_24793);

(statearr_24850_24923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (33))){
var inst_24779 = (state_24820[(25)]);
var inst_24781 = cljs.core.chunked_seq_QMARK_.call(null,inst_24779);
var state_24820__$1 = state_24820;
if(inst_24781){
var statearr_24851_24924 = state_24820__$1;
(statearr_24851_24924[(1)] = (36));

} else {
var statearr_24852_24925 = state_24820__$1;
(statearr_24852_24925[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (13))){
var inst_24711 = (state_24820[(26)]);
var inst_24714 = cljs.core.async.close_BANG_.call(null,inst_24711);
var state_24820__$1 = state_24820;
var statearr_24853_24926 = state_24820__$1;
(statearr_24853_24926[(2)] = inst_24714);

(statearr_24853_24926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (22))){
var inst_24732 = (state_24820[(8)]);
var inst_24735 = cljs.core.async.close_BANG_.call(null,inst_24732);
var state_24820__$1 = state_24820;
var statearr_24854_24927 = state_24820__$1;
(statearr_24854_24927[(2)] = inst_24735);

(statearr_24854_24927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (36))){
var inst_24779 = (state_24820[(25)]);
var inst_24783 = cljs.core.chunk_first.call(null,inst_24779);
var inst_24784 = cljs.core.chunk_rest.call(null,inst_24779);
var inst_24785 = cljs.core.count.call(null,inst_24783);
var inst_24760 = inst_24784;
var inst_24761 = inst_24783;
var inst_24762 = inst_24785;
var inst_24763 = (0);
var state_24820__$1 = (function (){var statearr_24855 = state_24820;
(statearr_24855[(20)] = inst_24762);

(statearr_24855[(9)] = inst_24763);

(statearr_24855[(21)] = inst_24760);

(statearr_24855[(12)] = inst_24761);

return statearr_24855;
})();
var statearr_24856_24928 = state_24820__$1;
(statearr_24856_24928[(2)] = null);

(statearr_24856_24928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (41))){
var inst_24779 = (state_24820[(25)]);
var inst_24795 = (state_24820[(2)]);
var inst_24796 = cljs.core.next.call(null,inst_24779);
var inst_24760 = inst_24796;
var inst_24761 = null;
var inst_24762 = (0);
var inst_24763 = (0);
var state_24820__$1 = (function (){var statearr_24857 = state_24820;
(statearr_24857[(20)] = inst_24762);

(statearr_24857[(9)] = inst_24763);

(statearr_24857[(27)] = inst_24795);

(statearr_24857[(21)] = inst_24760);

(statearr_24857[(12)] = inst_24761);

return statearr_24857;
})();
var statearr_24858_24929 = state_24820__$1;
(statearr_24858_24929[(2)] = null);

(statearr_24858_24929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (43))){
var state_24820__$1 = state_24820;
var statearr_24859_24930 = state_24820__$1;
(statearr_24859_24930[(2)] = null);

(statearr_24859_24930[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (29))){
var inst_24804 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24860_24931 = state_24820__$1;
(statearr_24860_24931[(2)] = inst_24804);

(statearr_24860_24931[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (44))){
var inst_24813 = (state_24820[(2)]);
var state_24820__$1 = (function (){var statearr_24861 = state_24820;
(statearr_24861[(28)] = inst_24813);

return statearr_24861;
})();
var statearr_24862_24932 = state_24820__$1;
(statearr_24862_24932[(2)] = null);

(statearr_24862_24932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (6))){
var inst_24752 = (state_24820[(29)]);
var inst_24751 = cljs.core.deref.call(null,cs);
var inst_24752__$1 = cljs.core.keys.call(null,inst_24751);
var inst_24753 = cljs.core.count.call(null,inst_24752__$1);
var inst_24754 = cljs.core.reset_BANG_.call(null,dctr,inst_24753);
var inst_24759 = cljs.core.seq.call(null,inst_24752__$1);
var inst_24760 = inst_24759;
var inst_24761 = null;
var inst_24762 = (0);
var inst_24763 = (0);
var state_24820__$1 = (function (){var statearr_24863 = state_24820;
(statearr_24863[(20)] = inst_24762);

(statearr_24863[(9)] = inst_24763);

(statearr_24863[(30)] = inst_24754);

(statearr_24863[(29)] = inst_24752__$1);

(statearr_24863[(21)] = inst_24760);

(statearr_24863[(12)] = inst_24761);

return statearr_24863;
})();
var statearr_24864_24933 = state_24820__$1;
(statearr_24864_24933[(2)] = null);

(statearr_24864_24933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (28))){
var inst_24779 = (state_24820[(25)]);
var inst_24760 = (state_24820[(21)]);
var inst_24779__$1 = cljs.core.seq.call(null,inst_24760);
var state_24820__$1 = (function (){var statearr_24865 = state_24820;
(statearr_24865[(25)] = inst_24779__$1);

return statearr_24865;
})();
if(inst_24779__$1){
var statearr_24866_24934 = state_24820__$1;
(statearr_24866_24934[(1)] = (33));

} else {
var statearr_24867_24935 = state_24820__$1;
(statearr_24867_24935[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (25))){
var inst_24762 = (state_24820[(20)]);
var inst_24763 = (state_24820[(9)]);
var inst_24765 = (inst_24763 < inst_24762);
var inst_24766 = inst_24765;
var state_24820__$1 = state_24820;
if(cljs.core.truth_(inst_24766)){
var statearr_24868_24936 = state_24820__$1;
(statearr_24868_24936[(1)] = (27));

} else {
var statearr_24869_24937 = state_24820__$1;
(statearr_24869_24937[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (34))){
var state_24820__$1 = state_24820;
var statearr_24870_24938 = state_24820__$1;
(statearr_24870_24938[(2)] = null);

(statearr_24870_24938[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (17))){
var state_24820__$1 = state_24820;
var statearr_24871_24939 = state_24820__$1;
(statearr_24871_24939[(2)] = null);

(statearr_24871_24939[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (3))){
var inst_24818 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24820__$1,inst_24818);
} else {
if((state_val_24821 === (12))){
var inst_24747 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24872_24940 = state_24820__$1;
(statearr_24872_24940[(2)] = inst_24747);

(statearr_24872_24940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (2))){
var state_24820__$1 = state_24820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24820__$1,(4),ch);
} else {
if((state_val_24821 === (23))){
var state_24820__$1 = state_24820;
var statearr_24873_24941 = state_24820__$1;
(statearr_24873_24941[(2)] = null);

(statearr_24873_24941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (35))){
var inst_24802 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24874_24942 = state_24820__$1;
(statearr_24874_24942[(2)] = inst_24802);

(statearr_24874_24942[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (19))){
var inst_24721 = (state_24820[(7)]);
var inst_24725 = cljs.core.chunk_first.call(null,inst_24721);
var inst_24726 = cljs.core.chunk_rest.call(null,inst_24721);
var inst_24727 = cljs.core.count.call(null,inst_24725);
var inst_24701 = inst_24726;
var inst_24702 = inst_24725;
var inst_24703 = inst_24727;
var inst_24704 = (0);
var state_24820__$1 = (function (){var statearr_24875 = state_24820;
(statearr_24875[(14)] = inst_24704);

(statearr_24875[(15)] = inst_24703);

(statearr_24875[(16)] = inst_24701);

(statearr_24875[(17)] = inst_24702);

return statearr_24875;
})();
var statearr_24876_24943 = state_24820__$1;
(statearr_24876_24943[(2)] = null);

(statearr_24876_24943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (11))){
var inst_24701 = (state_24820[(16)]);
var inst_24721 = (state_24820[(7)]);
var inst_24721__$1 = cljs.core.seq.call(null,inst_24701);
var state_24820__$1 = (function (){var statearr_24877 = state_24820;
(statearr_24877[(7)] = inst_24721__$1);

return statearr_24877;
})();
if(inst_24721__$1){
var statearr_24878_24944 = state_24820__$1;
(statearr_24878_24944[(1)] = (16));

} else {
var statearr_24879_24945 = state_24820__$1;
(statearr_24879_24945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (9))){
var inst_24749 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24880_24946 = state_24820__$1;
(statearr_24880_24946[(2)] = inst_24749);

(statearr_24880_24946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (5))){
var inst_24699 = cljs.core.deref.call(null,cs);
var inst_24700 = cljs.core.seq.call(null,inst_24699);
var inst_24701 = inst_24700;
var inst_24702 = null;
var inst_24703 = (0);
var inst_24704 = (0);
var state_24820__$1 = (function (){var statearr_24881 = state_24820;
(statearr_24881[(14)] = inst_24704);

(statearr_24881[(15)] = inst_24703);

(statearr_24881[(16)] = inst_24701);

(statearr_24881[(17)] = inst_24702);

return statearr_24881;
})();
var statearr_24882_24947 = state_24820__$1;
(statearr_24882_24947[(2)] = null);

(statearr_24882_24947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (14))){
var state_24820__$1 = state_24820;
var statearr_24883_24948 = state_24820__$1;
(statearr_24883_24948[(2)] = null);

(statearr_24883_24948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (45))){
var inst_24810 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24884_24949 = state_24820__$1;
(statearr_24884_24949[(2)] = inst_24810);

(statearr_24884_24949[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (26))){
var inst_24752 = (state_24820[(29)]);
var inst_24806 = (state_24820[(2)]);
var inst_24807 = cljs.core.seq.call(null,inst_24752);
var state_24820__$1 = (function (){var statearr_24885 = state_24820;
(statearr_24885[(31)] = inst_24806);

return statearr_24885;
})();
if(inst_24807){
var statearr_24886_24950 = state_24820__$1;
(statearr_24886_24950[(1)] = (42));

} else {
var statearr_24887_24951 = state_24820__$1;
(statearr_24887_24951[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (16))){
var inst_24721 = (state_24820[(7)]);
var inst_24723 = cljs.core.chunked_seq_QMARK_.call(null,inst_24721);
var state_24820__$1 = state_24820;
if(inst_24723){
var statearr_24888_24952 = state_24820__$1;
(statearr_24888_24952[(1)] = (19));

} else {
var statearr_24889_24953 = state_24820__$1;
(statearr_24889_24953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (38))){
var inst_24799 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24890_24954 = state_24820__$1;
(statearr_24890_24954[(2)] = inst_24799);

(statearr_24890_24954[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (30))){
var state_24820__$1 = state_24820;
var statearr_24891_24955 = state_24820__$1;
(statearr_24891_24955[(2)] = null);

(statearr_24891_24955[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (10))){
var inst_24704 = (state_24820[(14)]);
var inst_24702 = (state_24820[(17)]);
var inst_24710 = cljs.core._nth.call(null,inst_24702,inst_24704);
var inst_24711 = cljs.core.nth.call(null,inst_24710,(0),null);
var inst_24712 = cljs.core.nth.call(null,inst_24710,(1),null);
var state_24820__$1 = (function (){var statearr_24892 = state_24820;
(statearr_24892[(26)] = inst_24711);

return statearr_24892;
})();
if(cljs.core.truth_(inst_24712)){
var statearr_24893_24956 = state_24820__$1;
(statearr_24893_24956[(1)] = (13));

} else {
var statearr_24894_24957 = state_24820__$1;
(statearr_24894_24957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (18))){
var inst_24745 = (state_24820[(2)]);
var state_24820__$1 = state_24820;
var statearr_24895_24958 = state_24820__$1;
(statearr_24895_24958[(2)] = inst_24745);

(statearr_24895_24958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (42))){
var state_24820__$1 = state_24820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24820__$1,(45),dchan);
} else {
if((state_val_24821 === (37))){
var inst_24788 = (state_24820[(23)]);
var inst_24779 = (state_24820[(25)]);
var inst_24692 = (state_24820[(11)]);
var inst_24788__$1 = cljs.core.first.call(null,inst_24779);
var inst_24789 = cljs.core.async.put_BANG_.call(null,inst_24788__$1,inst_24692,done);
var state_24820__$1 = (function (){var statearr_24896 = state_24820;
(statearr_24896[(23)] = inst_24788__$1);

return statearr_24896;
})();
if(cljs.core.truth_(inst_24789)){
var statearr_24897_24959 = state_24820__$1;
(statearr_24897_24959[(1)] = (39));

} else {
var statearr_24898_24960 = state_24820__$1;
(statearr_24898_24960[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24821 === (8))){
var inst_24704 = (state_24820[(14)]);
var inst_24703 = (state_24820[(15)]);
var inst_24706 = (inst_24704 < inst_24703);
var inst_24707 = inst_24706;
var state_24820__$1 = state_24820;
if(cljs.core.truth_(inst_24707)){
var statearr_24899_24961 = state_24820__$1;
(statearr_24899_24961[(1)] = (10));

} else {
var statearr_24900_24962 = state_24820__$1;
(statearr_24900_24962[(1)] = (11));

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
});})(c__23601__auto___24908,cs,m,dchan,dctr,done))
;
return ((function (switch__23489__auto__,c__23601__auto___24908,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23490__auto__ = null;
var cljs$core$async$mult_$_state_machine__23490__auto____0 = (function (){
var statearr_24904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24904[(0)] = cljs$core$async$mult_$_state_machine__23490__auto__);

(statearr_24904[(1)] = (1));

return statearr_24904;
});
var cljs$core$async$mult_$_state_machine__23490__auto____1 = (function (state_24820){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_24820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e24905){if((e24905 instanceof Object)){
var ex__23493__auto__ = e24905;
var statearr_24906_24963 = state_24820;
(statearr_24906_24963[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24964 = state_24820;
state_24820 = G__24964;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23490__auto__ = function(state_24820){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23490__auto____1.call(this,state_24820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23490__auto____0;
cljs$core$async$mult_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23490__auto____1;
return cljs$core$async$mult_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___24908,cs,m,dchan,dctr,done))
})();
var state__23603__auto__ = (function (){var statearr_24907 = f__23602__auto__.call(null);
(statearr_24907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___24908);

return statearr_24907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___24908,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24965 = [];
var len__19507__auto___24968 = arguments.length;
var i__19508__auto___24969 = (0);
while(true){
if((i__19508__auto___24969 < len__19507__auto___24968)){
args24965.push((arguments[i__19508__auto___24969]));

var G__24970 = (i__19508__auto___24969 + (1));
i__19508__auto___24969 = G__24970;
continue;
} else {
}
break;
}

var G__24967 = args24965.length;
switch (G__24967) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24965.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,ch);
} else {
var m__19102__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,ch);
} else {
var m__19102__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m);
} else {
var m__19102__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,state_map);
} else {
var m__19102__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19101__auto__ = (((m == null))?null:m);
var m__19102__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,m,mode);
} else {
var m__19102__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19514__auto__ = [];
var len__19507__auto___24982 = arguments.length;
var i__19508__auto___24983 = (0);
while(true){
if((i__19508__auto___24983 < len__19507__auto___24982)){
args__19514__auto__.push((arguments[i__19508__auto___24983]));

var G__24984 = (i__19508__auto___24983 + (1));
i__19508__auto___24983 = G__24984;
continue;
} else {
}
break;
}

var argseq__19515__auto__ = ((((3) < args__19514__auto__.length))?(new cljs.core.IndexedSeq(args__19514__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19515__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24976){
var map__24977 = p__24976;
var map__24977__$1 = ((((!((map__24977 == null)))?((((map__24977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24977):map__24977);
var opts = map__24977__$1;
var statearr_24979_24985 = state;
(statearr_24979_24985[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24977,map__24977__$1,opts){
return (function (val){
var statearr_24980_24986 = state;
(statearr_24980_24986[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24977,map__24977__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24981_24987 = state;
(statearr_24981_24987[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24972){
var G__24973 = cljs.core.first.call(null,seq24972);
var seq24972__$1 = cljs.core.next.call(null,seq24972);
var G__24974 = cljs.core.first.call(null,seq24972__$1);
var seq24972__$2 = cljs.core.next.call(null,seq24972__$1);
var G__24975 = cljs.core.first.call(null,seq24972__$2);
var seq24972__$3 = cljs.core.next.call(null,seq24972__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24973,G__24974,G__24975,seq24972__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25151 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25152){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25152 = meta25152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25153,meta25152__$1){
var self__ = this;
var _25153__$1 = this;
return (new cljs.core.async.t_cljs$core$async25151(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25152__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25153){
var self__ = this;
var _25153__$1 = this;
return self__.meta25152;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25152","meta25152",967044714,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25151.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25151";

cljs.core.async.t_cljs$core$async25151.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async25151");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25151 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25151(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25152){
return (new cljs.core.async.t_cljs$core$async25151(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25152));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25151(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23601__auto___25314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___25314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___25314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25251){
var state_val_25252 = (state_25251[(1)]);
if((state_val_25252 === (7))){
var inst_25169 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25253_25315 = state_25251__$1;
(statearr_25253_25315[(2)] = inst_25169);

(statearr_25253_25315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (20))){
var inst_25181 = (state_25251[(7)]);
var state_25251__$1 = state_25251;
var statearr_25254_25316 = state_25251__$1;
(statearr_25254_25316[(2)] = inst_25181);

(statearr_25254_25316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (27))){
var state_25251__$1 = state_25251;
var statearr_25255_25317 = state_25251__$1;
(statearr_25255_25317[(2)] = null);

(statearr_25255_25317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (1))){
var inst_25157 = (state_25251[(8)]);
var inst_25157__$1 = calc_state.call(null);
var inst_25159 = (inst_25157__$1 == null);
var inst_25160 = cljs.core.not.call(null,inst_25159);
var state_25251__$1 = (function (){var statearr_25256 = state_25251;
(statearr_25256[(8)] = inst_25157__$1);

return statearr_25256;
})();
if(inst_25160){
var statearr_25257_25318 = state_25251__$1;
(statearr_25257_25318[(1)] = (2));

} else {
var statearr_25258_25319 = state_25251__$1;
(statearr_25258_25319[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (24))){
var inst_25225 = (state_25251[(9)]);
var inst_25204 = (state_25251[(10)]);
var inst_25211 = (state_25251[(11)]);
var inst_25225__$1 = inst_25204.call(null,inst_25211);
var state_25251__$1 = (function (){var statearr_25259 = state_25251;
(statearr_25259[(9)] = inst_25225__$1);

return statearr_25259;
})();
if(cljs.core.truth_(inst_25225__$1)){
var statearr_25260_25320 = state_25251__$1;
(statearr_25260_25320[(1)] = (29));

} else {
var statearr_25261_25321 = state_25251__$1;
(statearr_25261_25321[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (4))){
var inst_25172 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25172)){
var statearr_25262_25322 = state_25251__$1;
(statearr_25262_25322[(1)] = (8));

} else {
var statearr_25263_25323 = state_25251__$1;
(statearr_25263_25323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (15))){
var inst_25198 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25198)){
var statearr_25264_25324 = state_25251__$1;
(statearr_25264_25324[(1)] = (19));

} else {
var statearr_25265_25325 = state_25251__$1;
(statearr_25265_25325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (21))){
var inst_25203 = (state_25251[(12)]);
var inst_25203__$1 = (state_25251[(2)]);
var inst_25204 = cljs.core.get.call(null,inst_25203__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25205 = cljs.core.get.call(null,inst_25203__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25206 = cljs.core.get.call(null,inst_25203__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25251__$1 = (function (){var statearr_25266 = state_25251;
(statearr_25266[(12)] = inst_25203__$1);

(statearr_25266[(10)] = inst_25204);

(statearr_25266[(13)] = inst_25205);

return statearr_25266;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25251__$1,(22),inst_25206);
} else {
if((state_val_25252 === (31))){
var inst_25233 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25233)){
var statearr_25267_25326 = state_25251__$1;
(statearr_25267_25326[(1)] = (32));

} else {
var statearr_25268_25327 = state_25251__$1;
(statearr_25268_25327[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (32))){
var inst_25210 = (state_25251[(14)]);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25251__$1,(35),out,inst_25210);
} else {
if((state_val_25252 === (33))){
var inst_25203 = (state_25251[(12)]);
var inst_25181 = inst_25203;
var state_25251__$1 = (function (){var statearr_25269 = state_25251;
(statearr_25269[(7)] = inst_25181);

return statearr_25269;
})();
var statearr_25270_25328 = state_25251__$1;
(statearr_25270_25328[(2)] = null);

(statearr_25270_25328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (13))){
var inst_25181 = (state_25251[(7)]);
var inst_25188 = inst_25181.cljs$lang$protocol_mask$partition0$;
var inst_25189 = (inst_25188 & (64));
var inst_25190 = inst_25181.cljs$core$ISeq$;
var inst_25191 = (inst_25189) || (inst_25190);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25191)){
var statearr_25271_25329 = state_25251__$1;
(statearr_25271_25329[(1)] = (16));

} else {
var statearr_25272_25330 = state_25251__$1;
(statearr_25272_25330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (22))){
var inst_25210 = (state_25251[(14)]);
var inst_25211 = (state_25251[(11)]);
var inst_25209 = (state_25251[(2)]);
var inst_25210__$1 = cljs.core.nth.call(null,inst_25209,(0),null);
var inst_25211__$1 = cljs.core.nth.call(null,inst_25209,(1),null);
var inst_25212 = (inst_25210__$1 == null);
var inst_25213 = cljs.core._EQ_.call(null,inst_25211__$1,change);
var inst_25214 = (inst_25212) || (inst_25213);
var state_25251__$1 = (function (){var statearr_25273 = state_25251;
(statearr_25273[(14)] = inst_25210__$1);

(statearr_25273[(11)] = inst_25211__$1);

return statearr_25273;
})();
if(cljs.core.truth_(inst_25214)){
var statearr_25274_25331 = state_25251__$1;
(statearr_25274_25331[(1)] = (23));

} else {
var statearr_25275_25332 = state_25251__$1;
(statearr_25275_25332[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (36))){
var inst_25203 = (state_25251[(12)]);
var inst_25181 = inst_25203;
var state_25251__$1 = (function (){var statearr_25276 = state_25251;
(statearr_25276[(7)] = inst_25181);

return statearr_25276;
})();
var statearr_25277_25333 = state_25251__$1;
(statearr_25277_25333[(2)] = null);

(statearr_25277_25333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (29))){
var inst_25225 = (state_25251[(9)]);
var state_25251__$1 = state_25251;
var statearr_25278_25334 = state_25251__$1;
(statearr_25278_25334[(2)] = inst_25225);

(statearr_25278_25334[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (6))){
var state_25251__$1 = state_25251;
var statearr_25279_25335 = state_25251__$1;
(statearr_25279_25335[(2)] = false);

(statearr_25279_25335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (28))){
var inst_25221 = (state_25251[(2)]);
var inst_25222 = calc_state.call(null);
var inst_25181 = inst_25222;
var state_25251__$1 = (function (){var statearr_25280 = state_25251;
(statearr_25280[(7)] = inst_25181);

(statearr_25280[(15)] = inst_25221);

return statearr_25280;
})();
var statearr_25281_25336 = state_25251__$1;
(statearr_25281_25336[(2)] = null);

(statearr_25281_25336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (25))){
var inst_25247 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25282_25337 = state_25251__$1;
(statearr_25282_25337[(2)] = inst_25247);

(statearr_25282_25337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (34))){
var inst_25245 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25283_25338 = state_25251__$1;
(statearr_25283_25338[(2)] = inst_25245);

(statearr_25283_25338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (17))){
var state_25251__$1 = state_25251;
var statearr_25284_25339 = state_25251__$1;
(statearr_25284_25339[(2)] = false);

(statearr_25284_25339[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (3))){
var state_25251__$1 = state_25251;
var statearr_25285_25340 = state_25251__$1;
(statearr_25285_25340[(2)] = false);

(statearr_25285_25340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (12))){
var inst_25249 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25251__$1,inst_25249);
} else {
if((state_val_25252 === (2))){
var inst_25157 = (state_25251[(8)]);
var inst_25162 = inst_25157.cljs$lang$protocol_mask$partition0$;
var inst_25163 = (inst_25162 & (64));
var inst_25164 = inst_25157.cljs$core$ISeq$;
var inst_25165 = (inst_25163) || (inst_25164);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25165)){
var statearr_25286_25341 = state_25251__$1;
(statearr_25286_25341[(1)] = (5));

} else {
var statearr_25287_25342 = state_25251__$1;
(statearr_25287_25342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (23))){
var inst_25210 = (state_25251[(14)]);
var inst_25216 = (inst_25210 == null);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25216)){
var statearr_25288_25343 = state_25251__$1;
(statearr_25288_25343[(1)] = (26));

} else {
var statearr_25289_25344 = state_25251__$1;
(statearr_25289_25344[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (35))){
var inst_25236 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
if(cljs.core.truth_(inst_25236)){
var statearr_25290_25345 = state_25251__$1;
(statearr_25290_25345[(1)] = (36));

} else {
var statearr_25291_25346 = state_25251__$1;
(statearr_25291_25346[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (19))){
var inst_25181 = (state_25251[(7)]);
var inst_25200 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25181);
var state_25251__$1 = state_25251;
var statearr_25292_25347 = state_25251__$1;
(statearr_25292_25347[(2)] = inst_25200);

(statearr_25292_25347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (11))){
var inst_25181 = (state_25251[(7)]);
var inst_25185 = (inst_25181 == null);
var inst_25186 = cljs.core.not.call(null,inst_25185);
var state_25251__$1 = state_25251;
if(inst_25186){
var statearr_25293_25348 = state_25251__$1;
(statearr_25293_25348[(1)] = (13));

} else {
var statearr_25294_25349 = state_25251__$1;
(statearr_25294_25349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (9))){
var inst_25157 = (state_25251[(8)]);
var state_25251__$1 = state_25251;
var statearr_25295_25350 = state_25251__$1;
(statearr_25295_25350[(2)] = inst_25157);

(statearr_25295_25350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (5))){
var state_25251__$1 = state_25251;
var statearr_25296_25351 = state_25251__$1;
(statearr_25296_25351[(2)] = true);

(statearr_25296_25351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (14))){
var state_25251__$1 = state_25251;
var statearr_25297_25352 = state_25251__$1;
(statearr_25297_25352[(2)] = false);

(statearr_25297_25352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (26))){
var inst_25211 = (state_25251[(11)]);
var inst_25218 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25211);
var state_25251__$1 = state_25251;
var statearr_25298_25353 = state_25251__$1;
(statearr_25298_25353[(2)] = inst_25218);

(statearr_25298_25353[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (16))){
var state_25251__$1 = state_25251;
var statearr_25299_25354 = state_25251__$1;
(statearr_25299_25354[(2)] = true);

(statearr_25299_25354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (38))){
var inst_25241 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25300_25355 = state_25251__$1;
(statearr_25300_25355[(2)] = inst_25241);

(statearr_25300_25355[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (30))){
var inst_25204 = (state_25251[(10)]);
var inst_25211 = (state_25251[(11)]);
var inst_25205 = (state_25251[(13)]);
var inst_25228 = cljs.core.empty_QMARK_.call(null,inst_25204);
var inst_25229 = inst_25205.call(null,inst_25211);
var inst_25230 = cljs.core.not.call(null,inst_25229);
var inst_25231 = (inst_25228) && (inst_25230);
var state_25251__$1 = state_25251;
var statearr_25301_25356 = state_25251__$1;
(statearr_25301_25356[(2)] = inst_25231);

(statearr_25301_25356[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (10))){
var inst_25157 = (state_25251[(8)]);
var inst_25177 = (state_25251[(2)]);
var inst_25178 = cljs.core.get.call(null,inst_25177,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25179 = cljs.core.get.call(null,inst_25177,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25180 = cljs.core.get.call(null,inst_25177,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25181 = inst_25157;
var state_25251__$1 = (function (){var statearr_25302 = state_25251;
(statearr_25302[(7)] = inst_25181);

(statearr_25302[(16)] = inst_25178);

(statearr_25302[(17)] = inst_25179);

(statearr_25302[(18)] = inst_25180);

return statearr_25302;
})();
var statearr_25303_25357 = state_25251__$1;
(statearr_25303_25357[(2)] = null);

(statearr_25303_25357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (18))){
var inst_25195 = (state_25251[(2)]);
var state_25251__$1 = state_25251;
var statearr_25304_25358 = state_25251__$1;
(statearr_25304_25358[(2)] = inst_25195);

(statearr_25304_25358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (37))){
var state_25251__$1 = state_25251;
var statearr_25305_25359 = state_25251__$1;
(statearr_25305_25359[(2)] = null);

(statearr_25305_25359[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25252 === (8))){
var inst_25157 = (state_25251[(8)]);
var inst_25174 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25157);
var state_25251__$1 = state_25251;
var statearr_25306_25360 = state_25251__$1;
(statearr_25306_25360[(2)] = inst_25174);

(statearr_25306_25360[(1)] = (10));


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
});})(c__23601__auto___25314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23489__auto__,c__23601__auto___25314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23490__auto__ = null;
var cljs$core$async$mix_$_state_machine__23490__auto____0 = (function (){
var statearr_25310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25310[(0)] = cljs$core$async$mix_$_state_machine__23490__auto__);

(statearr_25310[(1)] = (1));

return statearr_25310;
});
var cljs$core$async$mix_$_state_machine__23490__auto____1 = (function (state_25251){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_25251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e25311){if((e25311 instanceof Object)){
var ex__23493__auto__ = e25311;
var statearr_25312_25361 = state_25251;
(statearr_25312_25361[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25362 = state_25251;
state_25251 = G__25362;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23490__auto__ = function(state_25251){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23490__auto____1.call(this,state_25251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23490__auto____0;
cljs$core$async$mix_$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23490__auto____1;
return cljs$core$async$mix_$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___25314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23603__auto__ = (function (){var statearr_25313 = f__23602__auto__.call(null);
(statearr_25313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___25314);

return statearr_25313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___25314,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19101__auto__ = (((p == null))?null:p);
var m__19102__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19102__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19101__auto__ = (((p == null))?null:p);
var m__19102__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,p,v,ch);
} else {
var m__19102__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25363 = [];
var len__19507__auto___25366 = arguments.length;
var i__19508__auto___25367 = (0);
while(true){
if((i__19508__auto___25367 < len__19507__auto___25366)){
args25363.push((arguments[i__19508__auto___25367]));

var G__25368 = (i__19508__auto___25367 + (1));
i__19508__auto___25367 = G__25368;
continue;
} else {
}
break;
}

var G__25365 = args25363.length;
switch (G__25365) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25363.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19101__auto__ = (((p == null))?null:p);
var m__19102__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,p);
} else {
var m__19102__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19101__auto__ = (((p == null))?null:p);
var m__19102__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19101__auto__)]);
if(!((m__19102__auto__ == null))){
return m__19102__auto__.call(null,p,v);
} else {
var m__19102__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19102__auto____$1 == null))){
return m__19102__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25371 = [];
var len__19507__auto___25496 = arguments.length;
var i__19508__auto___25497 = (0);
while(true){
if((i__19508__auto___25497 < len__19507__auto___25496)){
args25371.push((arguments[i__19508__auto___25497]));

var G__25498 = (i__19508__auto___25497 + (1));
i__19508__auto___25497 = G__25498;
continue;
} else {
}
break;
}

var G__25373 = args25371.length;
switch (G__25373) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25371.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18438__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18438__auto__)){
return or__18438__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18438__auto__,mults){
return (function (p1__25370_SHARP_){
if(cljs.core.truth_(p1__25370_SHARP_.call(null,topic))){
return p1__25370_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25370_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18438__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25374 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25375){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25375 = meta25375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25376,meta25375__$1){
var self__ = this;
var _25376__$1 = this;
return (new cljs.core.async.t_cljs$core$async25374(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25375__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25376){
var self__ = this;
var _25376__$1 = this;
return self__.meta25375;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25374.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25375","meta25375",485912227,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25374";

cljs.core.async.t_cljs$core$async25374.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async25374");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25374 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25374(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25375){
return (new cljs.core.async.t_cljs$core$async25374(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25375));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25374(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23601__auto___25500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___25500,mults,ensure_mult,p){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___25500,mults,ensure_mult,p){
return (function (state_25448){
var state_val_25449 = (state_25448[(1)]);
if((state_val_25449 === (7))){
var inst_25444 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25450_25501 = state_25448__$1;
(statearr_25450_25501[(2)] = inst_25444);

(statearr_25450_25501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (20))){
var state_25448__$1 = state_25448;
var statearr_25451_25502 = state_25448__$1;
(statearr_25451_25502[(2)] = null);

(statearr_25451_25502[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (1))){
var state_25448__$1 = state_25448;
var statearr_25452_25503 = state_25448__$1;
(statearr_25452_25503[(2)] = null);

(statearr_25452_25503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (24))){
var inst_25427 = (state_25448[(7)]);
var inst_25436 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25427);
var state_25448__$1 = state_25448;
var statearr_25453_25504 = state_25448__$1;
(statearr_25453_25504[(2)] = inst_25436);

(statearr_25453_25504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (4))){
var inst_25379 = (state_25448[(8)]);
var inst_25379__$1 = (state_25448[(2)]);
var inst_25380 = (inst_25379__$1 == null);
var state_25448__$1 = (function (){var statearr_25454 = state_25448;
(statearr_25454[(8)] = inst_25379__$1);

return statearr_25454;
})();
if(cljs.core.truth_(inst_25380)){
var statearr_25455_25505 = state_25448__$1;
(statearr_25455_25505[(1)] = (5));

} else {
var statearr_25456_25506 = state_25448__$1;
(statearr_25456_25506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (15))){
var inst_25421 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25457_25507 = state_25448__$1;
(statearr_25457_25507[(2)] = inst_25421);

(statearr_25457_25507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (21))){
var inst_25441 = (state_25448[(2)]);
var state_25448__$1 = (function (){var statearr_25458 = state_25448;
(statearr_25458[(9)] = inst_25441);

return statearr_25458;
})();
var statearr_25459_25508 = state_25448__$1;
(statearr_25459_25508[(2)] = null);

(statearr_25459_25508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (13))){
var inst_25403 = (state_25448[(10)]);
var inst_25405 = cljs.core.chunked_seq_QMARK_.call(null,inst_25403);
var state_25448__$1 = state_25448;
if(inst_25405){
var statearr_25460_25509 = state_25448__$1;
(statearr_25460_25509[(1)] = (16));

} else {
var statearr_25461_25510 = state_25448__$1;
(statearr_25461_25510[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (22))){
var inst_25433 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25433)){
var statearr_25462_25511 = state_25448__$1;
(statearr_25462_25511[(1)] = (23));

} else {
var statearr_25463_25512 = state_25448__$1;
(statearr_25463_25512[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (6))){
var inst_25379 = (state_25448[(8)]);
var inst_25427 = (state_25448[(7)]);
var inst_25429 = (state_25448[(11)]);
var inst_25427__$1 = topic_fn.call(null,inst_25379);
var inst_25428 = cljs.core.deref.call(null,mults);
var inst_25429__$1 = cljs.core.get.call(null,inst_25428,inst_25427__$1);
var state_25448__$1 = (function (){var statearr_25464 = state_25448;
(statearr_25464[(7)] = inst_25427__$1);

(statearr_25464[(11)] = inst_25429__$1);

return statearr_25464;
})();
if(cljs.core.truth_(inst_25429__$1)){
var statearr_25465_25513 = state_25448__$1;
(statearr_25465_25513[(1)] = (19));

} else {
var statearr_25466_25514 = state_25448__$1;
(statearr_25466_25514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (25))){
var inst_25438 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25467_25515 = state_25448__$1;
(statearr_25467_25515[(2)] = inst_25438);

(statearr_25467_25515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (17))){
var inst_25403 = (state_25448[(10)]);
var inst_25412 = cljs.core.first.call(null,inst_25403);
var inst_25413 = cljs.core.async.muxch_STAR_.call(null,inst_25412);
var inst_25414 = cljs.core.async.close_BANG_.call(null,inst_25413);
var inst_25415 = cljs.core.next.call(null,inst_25403);
var inst_25389 = inst_25415;
var inst_25390 = null;
var inst_25391 = (0);
var inst_25392 = (0);
var state_25448__$1 = (function (){var statearr_25468 = state_25448;
(statearr_25468[(12)] = inst_25392);

(statearr_25468[(13)] = inst_25414);

(statearr_25468[(14)] = inst_25390);

(statearr_25468[(15)] = inst_25391);

(statearr_25468[(16)] = inst_25389);

return statearr_25468;
})();
var statearr_25469_25516 = state_25448__$1;
(statearr_25469_25516[(2)] = null);

(statearr_25469_25516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (3))){
var inst_25446 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25448__$1,inst_25446);
} else {
if((state_val_25449 === (12))){
var inst_25423 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25470_25517 = state_25448__$1;
(statearr_25470_25517[(2)] = inst_25423);

(statearr_25470_25517[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (2))){
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25448__$1,(4),ch);
} else {
if((state_val_25449 === (23))){
var state_25448__$1 = state_25448;
var statearr_25471_25518 = state_25448__$1;
(statearr_25471_25518[(2)] = null);

(statearr_25471_25518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (19))){
var inst_25379 = (state_25448[(8)]);
var inst_25429 = (state_25448[(11)]);
var inst_25431 = cljs.core.async.muxch_STAR_.call(null,inst_25429);
var state_25448__$1 = state_25448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25448__$1,(22),inst_25431,inst_25379);
} else {
if((state_val_25449 === (11))){
var inst_25389 = (state_25448[(16)]);
var inst_25403 = (state_25448[(10)]);
var inst_25403__$1 = cljs.core.seq.call(null,inst_25389);
var state_25448__$1 = (function (){var statearr_25472 = state_25448;
(statearr_25472[(10)] = inst_25403__$1);

return statearr_25472;
})();
if(inst_25403__$1){
var statearr_25473_25519 = state_25448__$1;
(statearr_25473_25519[(1)] = (13));

} else {
var statearr_25474_25520 = state_25448__$1;
(statearr_25474_25520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (9))){
var inst_25425 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25475_25521 = state_25448__$1;
(statearr_25475_25521[(2)] = inst_25425);

(statearr_25475_25521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (5))){
var inst_25386 = cljs.core.deref.call(null,mults);
var inst_25387 = cljs.core.vals.call(null,inst_25386);
var inst_25388 = cljs.core.seq.call(null,inst_25387);
var inst_25389 = inst_25388;
var inst_25390 = null;
var inst_25391 = (0);
var inst_25392 = (0);
var state_25448__$1 = (function (){var statearr_25476 = state_25448;
(statearr_25476[(12)] = inst_25392);

(statearr_25476[(14)] = inst_25390);

(statearr_25476[(15)] = inst_25391);

(statearr_25476[(16)] = inst_25389);

return statearr_25476;
})();
var statearr_25477_25522 = state_25448__$1;
(statearr_25477_25522[(2)] = null);

(statearr_25477_25522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (14))){
var state_25448__$1 = state_25448;
var statearr_25481_25523 = state_25448__$1;
(statearr_25481_25523[(2)] = null);

(statearr_25481_25523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (16))){
var inst_25403 = (state_25448[(10)]);
var inst_25407 = cljs.core.chunk_first.call(null,inst_25403);
var inst_25408 = cljs.core.chunk_rest.call(null,inst_25403);
var inst_25409 = cljs.core.count.call(null,inst_25407);
var inst_25389 = inst_25408;
var inst_25390 = inst_25407;
var inst_25391 = inst_25409;
var inst_25392 = (0);
var state_25448__$1 = (function (){var statearr_25482 = state_25448;
(statearr_25482[(12)] = inst_25392);

(statearr_25482[(14)] = inst_25390);

(statearr_25482[(15)] = inst_25391);

(statearr_25482[(16)] = inst_25389);

return statearr_25482;
})();
var statearr_25483_25524 = state_25448__$1;
(statearr_25483_25524[(2)] = null);

(statearr_25483_25524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (10))){
var inst_25392 = (state_25448[(12)]);
var inst_25390 = (state_25448[(14)]);
var inst_25391 = (state_25448[(15)]);
var inst_25389 = (state_25448[(16)]);
var inst_25397 = cljs.core._nth.call(null,inst_25390,inst_25392);
var inst_25398 = cljs.core.async.muxch_STAR_.call(null,inst_25397);
var inst_25399 = cljs.core.async.close_BANG_.call(null,inst_25398);
var inst_25400 = (inst_25392 + (1));
var tmp25478 = inst_25390;
var tmp25479 = inst_25391;
var tmp25480 = inst_25389;
var inst_25389__$1 = tmp25480;
var inst_25390__$1 = tmp25478;
var inst_25391__$1 = tmp25479;
var inst_25392__$1 = inst_25400;
var state_25448__$1 = (function (){var statearr_25484 = state_25448;
(statearr_25484[(17)] = inst_25399);

(statearr_25484[(12)] = inst_25392__$1);

(statearr_25484[(14)] = inst_25390__$1);

(statearr_25484[(15)] = inst_25391__$1);

(statearr_25484[(16)] = inst_25389__$1);

return statearr_25484;
})();
var statearr_25485_25525 = state_25448__$1;
(statearr_25485_25525[(2)] = null);

(statearr_25485_25525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (18))){
var inst_25418 = (state_25448[(2)]);
var state_25448__$1 = state_25448;
var statearr_25486_25526 = state_25448__$1;
(statearr_25486_25526[(2)] = inst_25418);

(statearr_25486_25526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25449 === (8))){
var inst_25392 = (state_25448[(12)]);
var inst_25391 = (state_25448[(15)]);
var inst_25394 = (inst_25392 < inst_25391);
var inst_25395 = inst_25394;
var state_25448__$1 = state_25448;
if(cljs.core.truth_(inst_25395)){
var statearr_25487_25527 = state_25448__$1;
(statearr_25487_25527[(1)] = (10));

} else {
var statearr_25488_25528 = state_25448__$1;
(statearr_25488_25528[(1)] = (11));

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
});})(c__23601__auto___25500,mults,ensure_mult,p))
;
return ((function (switch__23489__auto__,c__23601__auto___25500,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_25492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25492[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_25492[(1)] = (1));

return statearr_25492;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_25448){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_25448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e25493){if((e25493 instanceof Object)){
var ex__23493__auto__ = e25493;
var statearr_25494_25529 = state_25448;
(statearr_25494_25529[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25530 = state_25448;
state_25448 = G__25530;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_25448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_25448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___25500,mults,ensure_mult,p))
})();
var state__23603__auto__ = (function (){var statearr_25495 = f__23602__auto__.call(null);
(statearr_25495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___25500);

return statearr_25495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___25500,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25531 = [];
var len__19507__auto___25534 = arguments.length;
var i__19508__auto___25535 = (0);
while(true){
if((i__19508__auto___25535 < len__19507__auto___25534)){
args25531.push((arguments[i__19508__auto___25535]));

var G__25536 = (i__19508__auto___25535 + (1));
i__19508__auto___25535 = G__25536;
continue;
} else {
}
break;
}

var G__25533 = args25531.length;
switch (G__25533) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25531.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25538 = [];
var len__19507__auto___25541 = arguments.length;
var i__19508__auto___25542 = (0);
while(true){
if((i__19508__auto___25542 < len__19507__auto___25541)){
args25538.push((arguments[i__19508__auto___25542]));

var G__25543 = (i__19508__auto___25542 + (1));
i__19508__auto___25542 = G__25543;
continue;
} else {
}
break;
}

var G__25540 = args25538.length;
switch (G__25540) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25538.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25545 = [];
var len__19507__auto___25616 = arguments.length;
var i__19508__auto___25617 = (0);
while(true){
if((i__19508__auto___25617 < len__19507__auto___25616)){
args25545.push((arguments[i__19508__auto___25617]));

var G__25618 = (i__19508__auto___25617 + (1));
i__19508__auto___25617 = G__25618;
continue;
} else {
}
break;
}

var G__25547 = args25545.length;
switch (G__25547) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25545.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23601__auto___25620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___25620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___25620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25586){
var state_val_25587 = (state_25586[(1)]);
if((state_val_25587 === (7))){
var state_25586__$1 = state_25586;
var statearr_25588_25621 = state_25586__$1;
(statearr_25588_25621[(2)] = null);

(statearr_25588_25621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (1))){
var state_25586__$1 = state_25586;
var statearr_25589_25622 = state_25586__$1;
(statearr_25589_25622[(2)] = null);

(statearr_25589_25622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (4))){
var inst_25550 = (state_25586[(7)]);
var inst_25552 = (inst_25550 < cnt);
var state_25586__$1 = state_25586;
if(cljs.core.truth_(inst_25552)){
var statearr_25590_25623 = state_25586__$1;
(statearr_25590_25623[(1)] = (6));

} else {
var statearr_25591_25624 = state_25586__$1;
(statearr_25591_25624[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (15))){
var inst_25582 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25592_25625 = state_25586__$1;
(statearr_25592_25625[(2)] = inst_25582);

(statearr_25592_25625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (13))){
var inst_25575 = cljs.core.async.close_BANG_.call(null,out);
var state_25586__$1 = state_25586;
var statearr_25593_25626 = state_25586__$1;
(statearr_25593_25626[(2)] = inst_25575);

(statearr_25593_25626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (6))){
var state_25586__$1 = state_25586;
var statearr_25594_25627 = state_25586__$1;
(statearr_25594_25627[(2)] = null);

(statearr_25594_25627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (3))){
var inst_25584 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25586__$1,inst_25584);
} else {
if((state_val_25587 === (12))){
var inst_25572 = (state_25586[(8)]);
var inst_25572__$1 = (state_25586[(2)]);
var inst_25573 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25572__$1);
var state_25586__$1 = (function (){var statearr_25595 = state_25586;
(statearr_25595[(8)] = inst_25572__$1);

return statearr_25595;
})();
if(cljs.core.truth_(inst_25573)){
var statearr_25596_25628 = state_25586__$1;
(statearr_25596_25628[(1)] = (13));

} else {
var statearr_25597_25629 = state_25586__$1;
(statearr_25597_25629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (2))){
var inst_25549 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25550 = (0);
var state_25586__$1 = (function (){var statearr_25598 = state_25586;
(statearr_25598[(7)] = inst_25550);

(statearr_25598[(9)] = inst_25549);

return statearr_25598;
})();
var statearr_25599_25630 = state_25586__$1;
(statearr_25599_25630[(2)] = null);

(statearr_25599_25630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (11))){
var inst_25550 = (state_25586[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25586,(10),Object,null,(9));
var inst_25559 = chs__$1.call(null,inst_25550);
var inst_25560 = done.call(null,inst_25550);
var inst_25561 = cljs.core.async.take_BANG_.call(null,inst_25559,inst_25560);
var state_25586__$1 = state_25586;
var statearr_25600_25631 = state_25586__$1;
(statearr_25600_25631[(2)] = inst_25561);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (9))){
var inst_25550 = (state_25586[(7)]);
var inst_25563 = (state_25586[(2)]);
var inst_25564 = (inst_25550 + (1));
var inst_25550__$1 = inst_25564;
var state_25586__$1 = (function (){var statearr_25601 = state_25586;
(statearr_25601[(7)] = inst_25550__$1);

(statearr_25601[(10)] = inst_25563);

return statearr_25601;
})();
var statearr_25602_25632 = state_25586__$1;
(statearr_25602_25632[(2)] = null);

(statearr_25602_25632[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (5))){
var inst_25570 = (state_25586[(2)]);
var state_25586__$1 = (function (){var statearr_25603 = state_25586;
(statearr_25603[(11)] = inst_25570);

return statearr_25603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25586__$1,(12),dchan);
} else {
if((state_val_25587 === (14))){
var inst_25572 = (state_25586[(8)]);
var inst_25577 = cljs.core.apply.call(null,f,inst_25572);
var state_25586__$1 = state_25586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25586__$1,(16),out,inst_25577);
} else {
if((state_val_25587 === (16))){
var inst_25579 = (state_25586[(2)]);
var state_25586__$1 = (function (){var statearr_25604 = state_25586;
(statearr_25604[(12)] = inst_25579);

return statearr_25604;
})();
var statearr_25605_25633 = state_25586__$1;
(statearr_25605_25633[(2)] = null);

(statearr_25605_25633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (10))){
var inst_25554 = (state_25586[(2)]);
var inst_25555 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25586__$1 = (function (){var statearr_25606 = state_25586;
(statearr_25606[(13)] = inst_25554);

return statearr_25606;
})();
var statearr_25607_25634 = state_25586__$1;
(statearr_25607_25634[(2)] = inst_25555);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25586__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (8))){
var inst_25568 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25608_25635 = state_25586__$1;
(statearr_25608_25635[(2)] = inst_25568);

(statearr_25608_25635[(1)] = (5));


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
});})(c__23601__auto___25620,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23489__auto__,c__23601__auto___25620,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_25612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25612[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_25612[(1)] = (1));

return statearr_25612;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_25586){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_25586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e25613){if((e25613 instanceof Object)){
var ex__23493__auto__ = e25613;
var statearr_25614_25636 = state_25586;
(statearr_25614_25636[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25637 = state_25586;
state_25586 = G__25637;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_25586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_25586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___25620,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23603__auto__ = (function (){var statearr_25615 = f__23602__auto__.call(null);
(statearr_25615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___25620);

return statearr_25615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___25620,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25639 = [];
var len__19507__auto___25695 = arguments.length;
var i__19508__auto___25696 = (0);
while(true){
if((i__19508__auto___25696 < len__19507__auto___25695)){
args25639.push((arguments[i__19508__auto___25696]));

var G__25697 = (i__19508__auto___25696 + (1));
i__19508__auto___25696 = G__25697;
continue;
} else {
}
break;
}

var G__25641 = args25639.length;
switch (G__25641) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25639.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23601__auto___25699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___25699,out){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___25699,out){
return (function (state_25671){
var state_val_25672 = (state_25671[(1)]);
if((state_val_25672 === (7))){
var inst_25650 = (state_25671[(7)]);
var inst_25651 = (state_25671[(8)]);
var inst_25650__$1 = (state_25671[(2)]);
var inst_25651__$1 = cljs.core.nth.call(null,inst_25650__$1,(0),null);
var inst_25652 = cljs.core.nth.call(null,inst_25650__$1,(1),null);
var inst_25653 = (inst_25651__$1 == null);
var state_25671__$1 = (function (){var statearr_25673 = state_25671;
(statearr_25673[(7)] = inst_25650__$1);

(statearr_25673[(8)] = inst_25651__$1);

(statearr_25673[(9)] = inst_25652);

return statearr_25673;
})();
if(cljs.core.truth_(inst_25653)){
var statearr_25674_25700 = state_25671__$1;
(statearr_25674_25700[(1)] = (8));

} else {
var statearr_25675_25701 = state_25671__$1;
(statearr_25675_25701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (1))){
var inst_25642 = cljs.core.vec.call(null,chs);
var inst_25643 = inst_25642;
var state_25671__$1 = (function (){var statearr_25676 = state_25671;
(statearr_25676[(10)] = inst_25643);

return statearr_25676;
})();
var statearr_25677_25702 = state_25671__$1;
(statearr_25677_25702[(2)] = null);

(statearr_25677_25702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (4))){
var inst_25643 = (state_25671[(10)]);
var state_25671__$1 = state_25671;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25671__$1,(7),inst_25643);
} else {
if((state_val_25672 === (6))){
var inst_25667 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
var statearr_25678_25703 = state_25671__$1;
(statearr_25678_25703[(2)] = inst_25667);

(statearr_25678_25703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (3))){
var inst_25669 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25671__$1,inst_25669);
} else {
if((state_val_25672 === (2))){
var inst_25643 = (state_25671[(10)]);
var inst_25645 = cljs.core.count.call(null,inst_25643);
var inst_25646 = (inst_25645 > (0));
var state_25671__$1 = state_25671;
if(cljs.core.truth_(inst_25646)){
var statearr_25680_25704 = state_25671__$1;
(statearr_25680_25704[(1)] = (4));

} else {
var statearr_25681_25705 = state_25671__$1;
(statearr_25681_25705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (11))){
var inst_25643 = (state_25671[(10)]);
var inst_25660 = (state_25671[(2)]);
var tmp25679 = inst_25643;
var inst_25643__$1 = tmp25679;
var state_25671__$1 = (function (){var statearr_25682 = state_25671;
(statearr_25682[(10)] = inst_25643__$1);

(statearr_25682[(11)] = inst_25660);

return statearr_25682;
})();
var statearr_25683_25706 = state_25671__$1;
(statearr_25683_25706[(2)] = null);

(statearr_25683_25706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (9))){
var inst_25651 = (state_25671[(8)]);
var state_25671__$1 = state_25671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25671__$1,(11),out,inst_25651);
} else {
if((state_val_25672 === (5))){
var inst_25665 = cljs.core.async.close_BANG_.call(null,out);
var state_25671__$1 = state_25671;
var statearr_25684_25707 = state_25671__$1;
(statearr_25684_25707[(2)] = inst_25665);

(statearr_25684_25707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (10))){
var inst_25663 = (state_25671[(2)]);
var state_25671__$1 = state_25671;
var statearr_25685_25708 = state_25671__$1;
(statearr_25685_25708[(2)] = inst_25663);

(statearr_25685_25708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25672 === (8))){
var inst_25650 = (state_25671[(7)]);
var inst_25643 = (state_25671[(10)]);
var inst_25651 = (state_25671[(8)]);
var inst_25652 = (state_25671[(9)]);
var inst_25655 = (function (){var cs = inst_25643;
var vec__25648 = inst_25650;
var v = inst_25651;
var c = inst_25652;
return ((function (cs,vec__25648,v,c,inst_25650,inst_25643,inst_25651,inst_25652,state_val_25672,c__23601__auto___25699,out){
return (function (p1__25638_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25638_SHARP_);
});
;})(cs,vec__25648,v,c,inst_25650,inst_25643,inst_25651,inst_25652,state_val_25672,c__23601__auto___25699,out))
})();
var inst_25656 = cljs.core.filterv.call(null,inst_25655,inst_25643);
var inst_25643__$1 = inst_25656;
var state_25671__$1 = (function (){var statearr_25686 = state_25671;
(statearr_25686[(10)] = inst_25643__$1);

return statearr_25686;
})();
var statearr_25687_25709 = state_25671__$1;
(statearr_25687_25709[(2)] = null);

(statearr_25687_25709[(1)] = (2));


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
});})(c__23601__auto___25699,out))
;
return ((function (switch__23489__auto__,c__23601__auto___25699,out){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_25691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25691[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_25691[(1)] = (1));

return statearr_25691;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_25671){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_25671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e25692){if((e25692 instanceof Object)){
var ex__23493__auto__ = e25692;
var statearr_25693_25710 = state_25671;
(statearr_25693_25710[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25711 = state_25671;
state_25671 = G__25711;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_25671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_25671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___25699,out))
})();
var state__23603__auto__ = (function (){var statearr_25694 = f__23602__auto__.call(null);
(statearr_25694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___25699);

return statearr_25694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___25699,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25712 = [];
var len__19507__auto___25761 = arguments.length;
var i__19508__auto___25762 = (0);
while(true){
if((i__19508__auto___25762 < len__19507__auto___25761)){
args25712.push((arguments[i__19508__auto___25762]));

var G__25763 = (i__19508__auto___25762 + (1));
i__19508__auto___25762 = G__25763;
continue;
} else {
}
break;
}

var G__25714 = args25712.length;
switch (G__25714) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25712.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23601__auto___25765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___25765,out){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___25765,out){
return (function (state_25738){
var state_val_25739 = (state_25738[(1)]);
if((state_val_25739 === (7))){
var inst_25720 = (state_25738[(7)]);
var inst_25720__$1 = (state_25738[(2)]);
var inst_25721 = (inst_25720__$1 == null);
var inst_25722 = cljs.core.not.call(null,inst_25721);
var state_25738__$1 = (function (){var statearr_25740 = state_25738;
(statearr_25740[(7)] = inst_25720__$1);

return statearr_25740;
})();
if(inst_25722){
var statearr_25741_25766 = state_25738__$1;
(statearr_25741_25766[(1)] = (8));

} else {
var statearr_25742_25767 = state_25738__$1;
(statearr_25742_25767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25739 === (1))){
var inst_25715 = (0);
var state_25738__$1 = (function (){var statearr_25743 = state_25738;
(statearr_25743[(8)] = inst_25715);

return statearr_25743;
})();
var statearr_25744_25768 = state_25738__$1;
(statearr_25744_25768[(2)] = null);

(statearr_25744_25768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25739 === (4))){
var state_25738__$1 = state_25738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25738__$1,(7),ch);
} else {
if((state_val_25739 === (6))){
var inst_25733 = (state_25738[(2)]);
var state_25738__$1 = state_25738;
var statearr_25745_25769 = state_25738__$1;
(statearr_25745_25769[(2)] = inst_25733);

(statearr_25745_25769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25739 === (3))){
var inst_25735 = (state_25738[(2)]);
var inst_25736 = cljs.core.async.close_BANG_.call(null,out);
var state_25738__$1 = (function (){var statearr_25746 = state_25738;
(statearr_25746[(9)] = inst_25735);

return statearr_25746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25738__$1,inst_25736);
} else {
if((state_val_25739 === (2))){
var inst_25715 = (state_25738[(8)]);
var inst_25717 = (inst_25715 < n);
var state_25738__$1 = state_25738;
if(cljs.core.truth_(inst_25717)){
var statearr_25747_25770 = state_25738__$1;
(statearr_25747_25770[(1)] = (4));

} else {
var statearr_25748_25771 = state_25738__$1;
(statearr_25748_25771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25739 === (11))){
var inst_25715 = (state_25738[(8)]);
var inst_25725 = (state_25738[(2)]);
var inst_25726 = (inst_25715 + (1));
var inst_25715__$1 = inst_25726;
var state_25738__$1 = (function (){var statearr_25749 = state_25738;
(statearr_25749[(10)] = inst_25725);

(statearr_25749[(8)] = inst_25715__$1);

return statearr_25749;
})();
var statearr_25750_25772 = state_25738__$1;
(statearr_25750_25772[(2)] = null);

(statearr_25750_25772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25739 === (9))){
var state_25738__$1 = state_25738;
var statearr_25751_25773 = state_25738__$1;
(statearr_25751_25773[(2)] = null);

(statearr_25751_25773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25739 === (5))){
var state_25738__$1 = state_25738;
var statearr_25752_25774 = state_25738__$1;
(statearr_25752_25774[(2)] = null);

(statearr_25752_25774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25739 === (10))){
var inst_25730 = (state_25738[(2)]);
var state_25738__$1 = state_25738;
var statearr_25753_25775 = state_25738__$1;
(statearr_25753_25775[(2)] = inst_25730);

(statearr_25753_25775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25739 === (8))){
var inst_25720 = (state_25738[(7)]);
var state_25738__$1 = state_25738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25738__$1,(11),out,inst_25720);
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
});})(c__23601__auto___25765,out))
;
return ((function (switch__23489__auto__,c__23601__auto___25765,out){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_25757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25757[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_25757[(1)] = (1));

return statearr_25757;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_25738){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_25738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e25758){if((e25758 instanceof Object)){
var ex__23493__auto__ = e25758;
var statearr_25759_25776 = state_25738;
(statearr_25759_25776[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25777 = state_25738;
state_25738 = G__25777;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_25738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_25738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___25765,out))
})();
var state__23603__auto__ = (function (){var statearr_25760 = f__23602__auto__.call(null);
(statearr_25760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___25765);

return statearr_25760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___25765,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25785 = (function (map_LT_,f,ch,meta25786){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25786 = meta25786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25787,meta25786__$1){
var self__ = this;
var _25787__$1 = this;
return (new cljs.core.async.t_cljs$core$async25785(self__.map_LT_,self__.f,self__.ch,meta25786__$1));
});

cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25787){
var self__ = this;
var _25787__$1 = this;
return self__.meta25786;
});

cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25788 = (function (map_LT_,f,ch,meta25786,_,fn1,meta25789){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25786 = meta25786;
this._ = _;
this.fn1 = fn1;
this.meta25789 = meta25789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25790,meta25789__$1){
var self__ = this;
var _25790__$1 = this;
return (new cljs.core.async.t_cljs$core$async25788(self__.map_LT_,self__.f,self__.ch,self__.meta25786,self__._,self__.fn1,meta25789__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25790){
var self__ = this;
var _25790__$1 = this;
return self__.meta25789;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25778_SHARP_){
return f1.call(null,(((p1__25778_SHARP_ == null))?null:self__.f.call(null,p1__25778_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25788.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25786","meta25786",317582616,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25785","cljs.core.async/t_cljs$core$async25785",782799111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25789","meta25789",-1181021407,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25788";

cljs.core.async.t_cljs$core$async25788.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async25788");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25788 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25788(map_LT___$1,f__$1,ch__$1,meta25786__$1,___$2,fn1__$1,meta25789){
return (new cljs.core.async.t_cljs$core$async25788(map_LT___$1,f__$1,ch__$1,meta25786__$1,___$2,fn1__$1,meta25789));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25788(self__.map_LT_,self__.f,self__.ch,self__.meta25786,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18426__auto__ = ret;
if(cljs.core.truth_(and__18426__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18426__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25785.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25786","meta25786",317582616,null)], null);
});

cljs.core.async.t_cljs$core$async25785.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25785";

cljs.core.async.t_cljs$core$async25785.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async25785");
});

cljs.core.async.__GT_t_cljs$core$async25785 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25785(map_LT___$1,f__$1,ch__$1,meta25786){
return (new cljs.core.async.t_cljs$core$async25785(map_LT___$1,f__$1,ch__$1,meta25786));
});

}

return (new cljs.core.async.t_cljs$core$async25785(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25794 = (function (map_GT_,f,ch,meta25795){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25795 = meta25795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25796,meta25795__$1){
var self__ = this;
var _25796__$1 = this;
return (new cljs.core.async.t_cljs$core$async25794(self__.map_GT_,self__.f,self__.ch,meta25795__$1));
});

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25796){
var self__ = this;
var _25796__$1 = this;
return self__.meta25795;
});

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25794.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25795","meta25795",756336385,null)], null);
});

cljs.core.async.t_cljs$core$async25794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25794";

cljs.core.async.t_cljs$core$async25794.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async25794");
});

cljs.core.async.__GT_t_cljs$core$async25794 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25794(map_GT___$1,f__$1,ch__$1,meta25795){
return (new cljs.core.async.t_cljs$core$async25794(map_GT___$1,f__$1,ch__$1,meta25795));
});

}

return (new cljs.core.async.t_cljs$core$async25794(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25800 = (function (filter_GT_,p,ch,meta25801){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25801 = meta25801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25802,meta25801__$1){
var self__ = this;
var _25802__$1 = this;
return (new cljs.core.async.t_cljs$core$async25800(self__.filter_GT_,self__.p,self__.ch,meta25801__$1));
});

cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25802){
var self__ = this;
var _25802__$1 = this;
return self__.meta25801;
});

cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25801","meta25801",-1907353371,null)], null);
});

cljs.core.async.t_cljs$core$async25800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25800";

cljs.core.async.t_cljs$core$async25800.cljs$lang$ctorPrWriter = (function (this__19044__auto__,writer__19045__auto__,opt__19046__auto__){
return cljs.core._write.call(null,writer__19045__auto__,"cljs.core.async/t_cljs$core$async25800");
});

cljs.core.async.__GT_t_cljs$core$async25800 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25800(filter_GT___$1,p__$1,ch__$1,meta25801){
return (new cljs.core.async.t_cljs$core$async25800(filter_GT___$1,p__$1,ch__$1,meta25801));
});

}

return (new cljs.core.async.t_cljs$core$async25800(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25803 = [];
var len__19507__auto___25847 = arguments.length;
var i__19508__auto___25848 = (0);
while(true){
if((i__19508__auto___25848 < len__19507__auto___25847)){
args25803.push((arguments[i__19508__auto___25848]));

var G__25849 = (i__19508__auto___25848 + (1));
i__19508__auto___25848 = G__25849;
continue;
} else {
}
break;
}

var G__25805 = args25803.length;
switch (G__25805) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25803.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23601__auto___25851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___25851,out){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___25851,out){
return (function (state_25826){
var state_val_25827 = (state_25826[(1)]);
if((state_val_25827 === (7))){
var inst_25822 = (state_25826[(2)]);
var state_25826__$1 = state_25826;
var statearr_25828_25852 = state_25826__$1;
(statearr_25828_25852[(2)] = inst_25822);

(statearr_25828_25852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (1))){
var state_25826__$1 = state_25826;
var statearr_25829_25853 = state_25826__$1;
(statearr_25829_25853[(2)] = null);

(statearr_25829_25853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (4))){
var inst_25808 = (state_25826[(7)]);
var inst_25808__$1 = (state_25826[(2)]);
var inst_25809 = (inst_25808__$1 == null);
var state_25826__$1 = (function (){var statearr_25830 = state_25826;
(statearr_25830[(7)] = inst_25808__$1);

return statearr_25830;
})();
if(cljs.core.truth_(inst_25809)){
var statearr_25831_25854 = state_25826__$1;
(statearr_25831_25854[(1)] = (5));

} else {
var statearr_25832_25855 = state_25826__$1;
(statearr_25832_25855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (6))){
var inst_25808 = (state_25826[(7)]);
var inst_25813 = p.call(null,inst_25808);
var state_25826__$1 = state_25826;
if(cljs.core.truth_(inst_25813)){
var statearr_25833_25856 = state_25826__$1;
(statearr_25833_25856[(1)] = (8));

} else {
var statearr_25834_25857 = state_25826__$1;
(statearr_25834_25857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (3))){
var inst_25824 = (state_25826[(2)]);
var state_25826__$1 = state_25826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25826__$1,inst_25824);
} else {
if((state_val_25827 === (2))){
var state_25826__$1 = state_25826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25826__$1,(4),ch);
} else {
if((state_val_25827 === (11))){
var inst_25816 = (state_25826[(2)]);
var state_25826__$1 = state_25826;
var statearr_25835_25858 = state_25826__$1;
(statearr_25835_25858[(2)] = inst_25816);

(statearr_25835_25858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (9))){
var state_25826__$1 = state_25826;
var statearr_25836_25859 = state_25826__$1;
(statearr_25836_25859[(2)] = null);

(statearr_25836_25859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (5))){
var inst_25811 = cljs.core.async.close_BANG_.call(null,out);
var state_25826__$1 = state_25826;
var statearr_25837_25860 = state_25826__$1;
(statearr_25837_25860[(2)] = inst_25811);

(statearr_25837_25860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (10))){
var inst_25819 = (state_25826[(2)]);
var state_25826__$1 = (function (){var statearr_25838 = state_25826;
(statearr_25838[(8)] = inst_25819);

return statearr_25838;
})();
var statearr_25839_25861 = state_25826__$1;
(statearr_25839_25861[(2)] = null);

(statearr_25839_25861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25827 === (8))){
var inst_25808 = (state_25826[(7)]);
var state_25826__$1 = state_25826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25826__$1,(11),out,inst_25808);
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
});})(c__23601__auto___25851,out))
;
return ((function (switch__23489__auto__,c__23601__auto___25851,out){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_25843 = [null,null,null,null,null,null,null,null,null];
(statearr_25843[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_25843[(1)] = (1));

return statearr_25843;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_25826){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_25826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e25844){if((e25844 instanceof Object)){
var ex__23493__auto__ = e25844;
var statearr_25845_25862 = state_25826;
(statearr_25845_25862[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25863 = state_25826;
state_25826 = G__25863;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_25826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_25826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___25851,out))
})();
var state__23603__auto__ = (function (){var statearr_25846 = f__23602__auto__.call(null);
(statearr_25846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___25851);

return statearr_25846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___25851,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25864 = [];
var len__19507__auto___25867 = arguments.length;
var i__19508__auto___25868 = (0);
while(true){
if((i__19508__auto___25868 < len__19507__auto___25867)){
args25864.push((arguments[i__19508__auto___25868]));

var G__25869 = (i__19508__auto___25868 + (1));
i__19508__auto___25868 = G__25869;
continue;
} else {
}
break;
}

var G__25866 = args25864.length;
switch (G__25866) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25864.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23601__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto__){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto__){
return (function (state_26036){
var state_val_26037 = (state_26036[(1)]);
if((state_val_26037 === (7))){
var inst_26032 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26038_26079 = state_26036__$1;
(statearr_26038_26079[(2)] = inst_26032);

(statearr_26038_26079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (20))){
var inst_26002 = (state_26036[(7)]);
var inst_26013 = (state_26036[(2)]);
var inst_26014 = cljs.core.next.call(null,inst_26002);
var inst_25988 = inst_26014;
var inst_25989 = null;
var inst_25990 = (0);
var inst_25991 = (0);
var state_26036__$1 = (function (){var statearr_26039 = state_26036;
(statearr_26039[(8)] = inst_25988);

(statearr_26039[(9)] = inst_26013);

(statearr_26039[(10)] = inst_25991);

(statearr_26039[(11)] = inst_25990);

(statearr_26039[(12)] = inst_25989);

return statearr_26039;
})();
var statearr_26040_26080 = state_26036__$1;
(statearr_26040_26080[(2)] = null);

(statearr_26040_26080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (1))){
var state_26036__$1 = state_26036;
var statearr_26041_26081 = state_26036__$1;
(statearr_26041_26081[(2)] = null);

(statearr_26041_26081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (4))){
var inst_25977 = (state_26036[(13)]);
var inst_25977__$1 = (state_26036[(2)]);
var inst_25978 = (inst_25977__$1 == null);
var state_26036__$1 = (function (){var statearr_26042 = state_26036;
(statearr_26042[(13)] = inst_25977__$1);

return statearr_26042;
})();
if(cljs.core.truth_(inst_25978)){
var statearr_26043_26082 = state_26036__$1;
(statearr_26043_26082[(1)] = (5));

} else {
var statearr_26044_26083 = state_26036__$1;
(statearr_26044_26083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (15))){
var state_26036__$1 = state_26036;
var statearr_26048_26084 = state_26036__$1;
(statearr_26048_26084[(2)] = null);

(statearr_26048_26084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (21))){
var state_26036__$1 = state_26036;
var statearr_26049_26085 = state_26036__$1;
(statearr_26049_26085[(2)] = null);

(statearr_26049_26085[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (13))){
var inst_25988 = (state_26036[(8)]);
var inst_25991 = (state_26036[(10)]);
var inst_25990 = (state_26036[(11)]);
var inst_25989 = (state_26036[(12)]);
var inst_25998 = (state_26036[(2)]);
var inst_25999 = (inst_25991 + (1));
var tmp26045 = inst_25988;
var tmp26046 = inst_25990;
var tmp26047 = inst_25989;
var inst_25988__$1 = tmp26045;
var inst_25989__$1 = tmp26047;
var inst_25990__$1 = tmp26046;
var inst_25991__$1 = inst_25999;
var state_26036__$1 = (function (){var statearr_26050 = state_26036;
(statearr_26050[(8)] = inst_25988__$1);

(statearr_26050[(10)] = inst_25991__$1);

(statearr_26050[(11)] = inst_25990__$1);

(statearr_26050[(12)] = inst_25989__$1);

(statearr_26050[(14)] = inst_25998);

return statearr_26050;
})();
var statearr_26051_26086 = state_26036__$1;
(statearr_26051_26086[(2)] = null);

(statearr_26051_26086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (22))){
var state_26036__$1 = state_26036;
var statearr_26052_26087 = state_26036__$1;
(statearr_26052_26087[(2)] = null);

(statearr_26052_26087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (6))){
var inst_25977 = (state_26036[(13)]);
var inst_25986 = f.call(null,inst_25977);
var inst_25987 = cljs.core.seq.call(null,inst_25986);
var inst_25988 = inst_25987;
var inst_25989 = null;
var inst_25990 = (0);
var inst_25991 = (0);
var state_26036__$1 = (function (){var statearr_26053 = state_26036;
(statearr_26053[(8)] = inst_25988);

(statearr_26053[(10)] = inst_25991);

(statearr_26053[(11)] = inst_25990);

(statearr_26053[(12)] = inst_25989);

return statearr_26053;
})();
var statearr_26054_26088 = state_26036__$1;
(statearr_26054_26088[(2)] = null);

(statearr_26054_26088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (17))){
var inst_26002 = (state_26036[(7)]);
var inst_26006 = cljs.core.chunk_first.call(null,inst_26002);
var inst_26007 = cljs.core.chunk_rest.call(null,inst_26002);
var inst_26008 = cljs.core.count.call(null,inst_26006);
var inst_25988 = inst_26007;
var inst_25989 = inst_26006;
var inst_25990 = inst_26008;
var inst_25991 = (0);
var state_26036__$1 = (function (){var statearr_26055 = state_26036;
(statearr_26055[(8)] = inst_25988);

(statearr_26055[(10)] = inst_25991);

(statearr_26055[(11)] = inst_25990);

(statearr_26055[(12)] = inst_25989);

return statearr_26055;
})();
var statearr_26056_26089 = state_26036__$1;
(statearr_26056_26089[(2)] = null);

(statearr_26056_26089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (3))){
var inst_26034 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26036__$1,inst_26034);
} else {
if((state_val_26037 === (12))){
var inst_26022 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26057_26090 = state_26036__$1;
(statearr_26057_26090[(2)] = inst_26022);

(statearr_26057_26090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (2))){
var state_26036__$1 = state_26036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26036__$1,(4),in$);
} else {
if((state_val_26037 === (23))){
var inst_26030 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26058_26091 = state_26036__$1;
(statearr_26058_26091[(2)] = inst_26030);

(statearr_26058_26091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (19))){
var inst_26017 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26059_26092 = state_26036__$1;
(statearr_26059_26092[(2)] = inst_26017);

(statearr_26059_26092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (11))){
var inst_25988 = (state_26036[(8)]);
var inst_26002 = (state_26036[(7)]);
var inst_26002__$1 = cljs.core.seq.call(null,inst_25988);
var state_26036__$1 = (function (){var statearr_26060 = state_26036;
(statearr_26060[(7)] = inst_26002__$1);

return statearr_26060;
})();
if(inst_26002__$1){
var statearr_26061_26093 = state_26036__$1;
(statearr_26061_26093[(1)] = (14));

} else {
var statearr_26062_26094 = state_26036__$1;
(statearr_26062_26094[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (9))){
var inst_26024 = (state_26036[(2)]);
var inst_26025 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26036__$1 = (function (){var statearr_26063 = state_26036;
(statearr_26063[(15)] = inst_26024);

return statearr_26063;
})();
if(cljs.core.truth_(inst_26025)){
var statearr_26064_26095 = state_26036__$1;
(statearr_26064_26095[(1)] = (21));

} else {
var statearr_26065_26096 = state_26036__$1;
(statearr_26065_26096[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (5))){
var inst_25980 = cljs.core.async.close_BANG_.call(null,out);
var state_26036__$1 = state_26036;
var statearr_26066_26097 = state_26036__$1;
(statearr_26066_26097[(2)] = inst_25980);

(statearr_26066_26097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (14))){
var inst_26002 = (state_26036[(7)]);
var inst_26004 = cljs.core.chunked_seq_QMARK_.call(null,inst_26002);
var state_26036__$1 = state_26036;
if(inst_26004){
var statearr_26067_26098 = state_26036__$1;
(statearr_26067_26098[(1)] = (17));

} else {
var statearr_26068_26099 = state_26036__$1;
(statearr_26068_26099[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (16))){
var inst_26020 = (state_26036[(2)]);
var state_26036__$1 = state_26036;
var statearr_26069_26100 = state_26036__$1;
(statearr_26069_26100[(2)] = inst_26020);

(statearr_26069_26100[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26037 === (10))){
var inst_25991 = (state_26036[(10)]);
var inst_25989 = (state_26036[(12)]);
var inst_25996 = cljs.core._nth.call(null,inst_25989,inst_25991);
var state_26036__$1 = state_26036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26036__$1,(13),out,inst_25996);
} else {
if((state_val_26037 === (18))){
var inst_26002 = (state_26036[(7)]);
var inst_26011 = cljs.core.first.call(null,inst_26002);
var state_26036__$1 = state_26036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26036__$1,(20),out,inst_26011);
} else {
if((state_val_26037 === (8))){
var inst_25991 = (state_26036[(10)]);
var inst_25990 = (state_26036[(11)]);
var inst_25993 = (inst_25991 < inst_25990);
var inst_25994 = inst_25993;
var state_26036__$1 = state_26036;
if(cljs.core.truth_(inst_25994)){
var statearr_26070_26101 = state_26036__$1;
(statearr_26070_26101[(1)] = (10));

} else {
var statearr_26071_26102 = state_26036__$1;
(statearr_26071_26102[(1)] = (11));

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
});})(c__23601__auto__))
;
return ((function (switch__23489__auto__,c__23601__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23490__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23490__auto____0 = (function (){
var statearr_26075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26075[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23490__auto__);

(statearr_26075[(1)] = (1));

return statearr_26075;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23490__auto____1 = (function (state_26036){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_26036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e26076){if((e26076 instanceof Object)){
var ex__23493__auto__ = e26076;
var statearr_26077_26103 = state_26036;
(statearr_26077_26103[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26104 = state_26036;
state_26036 = G__26104;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23490__auto__ = function(state_26036){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23490__auto____1.call(this,state_26036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23490__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23490__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto__))
})();
var state__23603__auto__ = (function (){var statearr_26078 = f__23602__auto__.call(null);
(statearr_26078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto__);

return statearr_26078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto__))
);

return c__23601__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26105 = [];
var len__19507__auto___26108 = arguments.length;
var i__19508__auto___26109 = (0);
while(true){
if((i__19508__auto___26109 < len__19507__auto___26108)){
args26105.push((arguments[i__19508__auto___26109]));

var G__26110 = (i__19508__auto___26109 + (1));
i__19508__auto___26109 = G__26110;
continue;
} else {
}
break;
}

var G__26107 = args26105.length;
switch (G__26107) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26105.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26112 = [];
var len__19507__auto___26115 = arguments.length;
var i__19508__auto___26116 = (0);
while(true){
if((i__19508__auto___26116 < len__19507__auto___26115)){
args26112.push((arguments[i__19508__auto___26116]));

var G__26117 = (i__19508__auto___26116 + (1));
i__19508__auto___26116 = G__26117;
continue;
} else {
}
break;
}

var G__26114 = args26112.length;
switch (G__26114) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26112.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26119 = [];
var len__19507__auto___26170 = arguments.length;
var i__19508__auto___26171 = (0);
while(true){
if((i__19508__auto___26171 < len__19507__auto___26170)){
args26119.push((arguments[i__19508__auto___26171]));

var G__26172 = (i__19508__auto___26171 + (1));
i__19508__auto___26171 = G__26172;
continue;
} else {
}
break;
}

var G__26121 = args26119.length;
switch (G__26121) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26119.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23601__auto___26174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___26174,out){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___26174,out){
return (function (state_26145){
var state_val_26146 = (state_26145[(1)]);
if((state_val_26146 === (7))){
var inst_26140 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26147_26175 = state_26145__$1;
(statearr_26147_26175[(2)] = inst_26140);

(statearr_26147_26175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (1))){
var inst_26122 = null;
var state_26145__$1 = (function (){var statearr_26148 = state_26145;
(statearr_26148[(7)] = inst_26122);

return statearr_26148;
})();
var statearr_26149_26176 = state_26145__$1;
(statearr_26149_26176[(2)] = null);

(statearr_26149_26176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (4))){
var inst_26125 = (state_26145[(8)]);
var inst_26125__$1 = (state_26145[(2)]);
var inst_26126 = (inst_26125__$1 == null);
var inst_26127 = cljs.core.not.call(null,inst_26126);
var state_26145__$1 = (function (){var statearr_26150 = state_26145;
(statearr_26150[(8)] = inst_26125__$1);

return statearr_26150;
})();
if(inst_26127){
var statearr_26151_26177 = state_26145__$1;
(statearr_26151_26177[(1)] = (5));

} else {
var statearr_26152_26178 = state_26145__$1;
(statearr_26152_26178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (6))){
var state_26145__$1 = state_26145;
var statearr_26153_26179 = state_26145__$1;
(statearr_26153_26179[(2)] = null);

(statearr_26153_26179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (3))){
var inst_26142 = (state_26145[(2)]);
var inst_26143 = cljs.core.async.close_BANG_.call(null,out);
var state_26145__$1 = (function (){var statearr_26154 = state_26145;
(statearr_26154[(9)] = inst_26142);

return statearr_26154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26145__$1,inst_26143);
} else {
if((state_val_26146 === (2))){
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26145__$1,(4),ch);
} else {
if((state_val_26146 === (11))){
var inst_26125 = (state_26145[(8)]);
var inst_26134 = (state_26145[(2)]);
var inst_26122 = inst_26125;
var state_26145__$1 = (function (){var statearr_26155 = state_26145;
(statearr_26155[(7)] = inst_26122);

(statearr_26155[(10)] = inst_26134);

return statearr_26155;
})();
var statearr_26156_26180 = state_26145__$1;
(statearr_26156_26180[(2)] = null);

(statearr_26156_26180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (9))){
var inst_26125 = (state_26145[(8)]);
var state_26145__$1 = state_26145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26145__$1,(11),out,inst_26125);
} else {
if((state_val_26146 === (5))){
var inst_26122 = (state_26145[(7)]);
var inst_26125 = (state_26145[(8)]);
var inst_26129 = cljs.core._EQ_.call(null,inst_26125,inst_26122);
var state_26145__$1 = state_26145;
if(inst_26129){
var statearr_26158_26181 = state_26145__$1;
(statearr_26158_26181[(1)] = (8));

} else {
var statearr_26159_26182 = state_26145__$1;
(statearr_26159_26182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (10))){
var inst_26137 = (state_26145[(2)]);
var state_26145__$1 = state_26145;
var statearr_26160_26183 = state_26145__$1;
(statearr_26160_26183[(2)] = inst_26137);

(statearr_26160_26183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26146 === (8))){
var inst_26122 = (state_26145[(7)]);
var tmp26157 = inst_26122;
var inst_26122__$1 = tmp26157;
var state_26145__$1 = (function (){var statearr_26161 = state_26145;
(statearr_26161[(7)] = inst_26122__$1);

return statearr_26161;
})();
var statearr_26162_26184 = state_26145__$1;
(statearr_26162_26184[(2)] = null);

(statearr_26162_26184[(1)] = (2));


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
});})(c__23601__auto___26174,out))
;
return ((function (switch__23489__auto__,c__23601__auto___26174,out){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_26166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26166[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_26166[(1)] = (1));

return statearr_26166;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_26145){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_26145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e26167){if((e26167 instanceof Object)){
var ex__23493__auto__ = e26167;
var statearr_26168_26185 = state_26145;
(statearr_26168_26185[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26186 = state_26145;
state_26145 = G__26186;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_26145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_26145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___26174,out))
})();
var state__23603__auto__ = (function (){var statearr_26169 = f__23602__auto__.call(null);
(statearr_26169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___26174);

return statearr_26169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___26174,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26187 = [];
var len__19507__auto___26257 = arguments.length;
var i__19508__auto___26258 = (0);
while(true){
if((i__19508__auto___26258 < len__19507__auto___26257)){
args26187.push((arguments[i__19508__auto___26258]));

var G__26259 = (i__19508__auto___26258 + (1));
i__19508__auto___26258 = G__26259;
continue;
} else {
}
break;
}

var G__26189 = args26187.length;
switch (G__26189) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26187.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23601__auto___26261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___26261,out){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___26261,out){
return (function (state_26227){
var state_val_26228 = (state_26227[(1)]);
if((state_val_26228 === (7))){
var inst_26223 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26229_26262 = state_26227__$1;
(statearr_26229_26262[(2)] = inst_26223);

(statearr_26229_26262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (1))){
var inst_26190 = (new Array(n));
var inst_26191 = inst_26190;
var inst_26192 = (0);
var state_26227__$1 = (function (){var statearr_26230 = state_26227;
(statearr_26230[(7)] = inst_26191);

(statearr_26230[(8)] = inst_26192);

return statearr_26230;
})();
var statearr_26231_26263 = state_26227__$1;
(statearr_26231_26263[(2)] = null);

(statearr_26231_26263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (4))){
var inst_26195 = (state_26227[(9)]);
var inst_26195__$1 = (state_26227[(2)]);
var inst_26196 = (inst_26195__$1 == null);
var inst_26197 = cljs.core.not.call(null,inst_26196);
var state_26227__$1 = (function (){var statearr_26232 = state_26227;
(statearr_26232[(9)] = inst_26195__$1);

return statearr_26232;
})();
if(inst_26197){
var statearr_26233_26264 = state_26227__$1;
(statearr_26233_26264[(1)] = (5));

} else {
var statearr_26234_26265 = state_26227__$1;
(statearr_26234_26265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (15))){
var inst_26217 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26235_26266 = state_26227__$1;
(statearr_26235_26266[(2)] = inst_26217);

(statearr_26235_26266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (13))){
var state_26227__$1 = state_26227;
var statearr_26236_26267 = state_26227__$1;
(statearr_26236_26267[(2)] = null);

(statearr_26236_26267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (6))){
var inst_26192 = (state_26227[(8)]);
var inst_26213 = (inst_26192 > (0));
var state_26227__$1 = state_26227;
if(cljs.core.truth_(inst_26213)){
var statearr_26237_26268 = state_26227__$1;
(statearr_26237_26268[(1)] = (12));

} else {
var statearr_26238_26269 = state_26227__$1;
(statearr_26238_26269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (3))){
var inst_26225 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26227__$1,inst_26225);
} else {
if((state_val_26228 === (12))){
var inst_26191 = (state_26227[(7)]);
var inst_26215 = cljs.core.vec.call(null,inst_26191);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26227__$1,(15),out,inst_26215);
} else {
if((state_val_26228 === (2))){
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(4),ch);
} else {
if((state_val_26228 === (11))){
var inst_26207 = (state_26227[(2)]);
var inst_26208 = (new Array(n));
var inst_26191 = inst_26208;
var inst_26192 = (0);
var state_26227__$1 = (function (){var statearr_26239 = state_26227;
(statearr_26239[(10)] = inst_26207);

(statearr_26239[(7)] = inst_26191);

(statearr_26239[(8)] = inst_26192);

return statearr_26239;
})();
var statearr_26240_26270 = state_26227__$1;
(statearr_26240_26270[(2)] = null);

(statearr_26240_26270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (9))){
var inst_26191 = (state_26227[(7)]);
var inst_26205 = cljs.core.vec.call(null,inst_26191);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26227__$1,(11),out,inst_26205);
} else {
if((state_val_26228 === (5))){
var inst_26191 = (state_26227[(7)]);
var inst_26195 = (state_26227[(9)]);
var inst_26200 = (state_26227[(11)]);
var inst_26192 = (state_26227[(8)]);
var inst_26199 = (inst_26191[inst_26192] = inst_26195);
var inst_26200__$1 = (inst_26192 + (1));
var inst_26201 = (inst_26200__$1 < n);
var state_26227__$1 = (function (){var statearr_26241 = state_26227;
(statearr_26241[(11)] = inst_26200__$1);

(statearr_26241[(12)] = inst_26199);

return statearr_26241;
})();
if(cljs.core.truth_(inst_26201)){
var statearr_26242_26271 = state_26227__$1;
(statearr_26242_26271[(1)] = (8));

} else {
var statearr_26243_26272 = state_26227__$1;
(statearr_26243_26272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (14))){
var inst_26220 = (state_26227[(2)]);
var inst_26221 = cljs.core.async.close_BANG_.call(null,out);
var state_26227__$1 = (function (){var statearr_26245 = state_26227;
(statearr_26245[(13)] = inst_26220);

return statearr_26245;
})();
var statearr_26246_26273 = state_26227__$1;
(statearr_26246_26273[(2)] = inst_26221);

(statearr_26246_26273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (10))){
var inst_26211 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26247_26274 = state_26227__$1;
(statearr_26247_26274[(2)] = inst_26211);

(statearr_26247_26274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (8))){
var inst_26191 = (state_26227[(7)]);
var inst_26200 = (state_26227[(11)]);
var tmp26244 = inst_26191;
var inst_26191__$1 = tmp26244;
var inst_26192 = inst_26200;
var state_26227__$1 = (function (){var statearr_26248 = state_26227;
(statearr_26248[(7)] = inst_26191__$1);

(statearr_26248[(8)] = inst_26192);

return statearr_26248;
})();
var statearr_26249_26275 = state_26227__$1;
(statearr_26249_26275[(2)] = null);

(statearr_26249_26275[(1)] = (2));


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
});})(c__23601__auto___26261,out))
;
return ((function (switch__23489__auto__,c__23601__auto___26261,out){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_26253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26253[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_26253[(1)] = (1));

return statearr_26253;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_26227){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_26227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e26254){if((e26254 instanceof Object)){
var ex__23493__auto__ = e26254;
var statearr_26255_26276 = state_26227;
(statearr_26255_26276[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26277 = state_26227;
state_26227 = G__26277;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_26227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_26227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___26261,out))
})();
var state__23603__auto__ = (function (){var statearr_26256 = f__23602__auto__.call(null);
(statearr_26256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___26261);

return statearr_26256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___26261,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26278 = [];
var len__19507__auto___26352 = arguments.length;
var i__19508__auto___26353 = (0);
while(true){
if((i__19508__auto___26353 < len__19507__auto___26352)){
args26278.push((arguments[i__19508__auto___26353]));

var G__26354 = (i__19508__auto___26353 + (1));
i__19508__auto___26353 = G__26354;
continue;
} else {
}
break;
}

var G__26280 = args26278.length;
switch (G__26280) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26278.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23601__auto___26356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23601__auto___26356,out){
return (function (){
var f__23602__auto__ = (function (){var switch__23489__auto__ = ((function (c__23601__auto___26356,out){
return (function (state_26322){
var state_val_26323 = (state_26322[(1)]);
if((state_val_26323 === (7))){
var inst_26318 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
var statearr_26324_26357 = state_26322__$1;
(statearr_26324_26357[(2)] = inst_26318);

(statearr_26324_26357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (1))){
var inst_26281 = [];
var inst_26282 = inst_26281;
var inst_26283 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26322__$1 = (function (){var statearr_26325 = state_26322;
(statearr_26325[(7)] = inst_26283);

(statearr_26325[(8)] = inst_26282);

return statearr_26325;
})();
var statearr_26326_26358 = state_26322__$1;
(statearr_26326_26358[(2)] = null);

(statearr_26326_26358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (4))){
var inst_26286 = (state_26322[(9)]);
var inst_26286__$1 = (state_26322[(2)]);
var inst_26287 = (inst_26286__$1 == null);
var inst_26288 = cljs.core.not.call(null,inst_26287);
var state_26322__$1 = (function (){var statearr_26327 = state_26322;
(statearr_26327[(9)] = inst_26286__$1);

return statearr_26327;
})();
if(inst_26288){
var statearr_26328_26359 = state_26322__$1;
(statearr_26328_26359[(1)] = (5));

} else {
var statearr_26329_26360 = state_26322__$1;
(statearr_26329_26360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (15))){
var inst_26312 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
var statearr_26330_26361 = state_26322__$1;
(statearr_26330_26361[(2)] = inst_26312);

(statearr_26330_26361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (13))){
var state_26322__$1 = state_26322;
var statearr_26331_26362 = state_26322__$1;
(statearr_26331_26362[(2)] = null);

(statearr_26331_26362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (6))){
var inst_26282 = (state_26322[(8)]);
var inst_26307 = inst_26282.length;
var inst_26308 = (inst_26307 > (0));
var state_26322__$1 = state_26322;
if(cljs.core.truth_(inst_26308)){
var statearr_26332_26363 = state_26322__$1;
(statearr_26332_26363[(1)] = (12));

} else {
var statearr_26333_26364 = state_26322__$1;
(statearr_26333_26364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (3))){
var inst_26320 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26322__$1,inst_26320);
} else {
if((state_val_26323 === (12))){
var inst_26282 = (state_26322[(8)]);
var inst_26310 = cljs.core.vec.call(null,inst_26282);
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26322__$1,(15),out,inst_26310);
} else {
if((state_val_26323 === (2))){
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26322__$1,(4),ch);
} else {
if((state_val_26323 === (11))){
var inst_26286 = (state_26322[(9)]);
var inst_26290 = (state_26322[(10)]);
var inst_26300 = (state_26322[(2)]);
var inst_26301 = [];
var inst_26302 = inst_26301.push(inst_26286);
var inst_26282 = inst_26301;
var inst_26283 = inst_26290;
var state_26322__$1 = (function (){var statearr_26334 = state_26322;
(statearr_26334[(7)] = inst_26283);

(statearr_26334[(8)] = inst_26282);

(statearr_26334[(11)] = inst_26300);

(statearr_26334[(12)] = inst_26302);

return statearr_26334;
})();
var statearr_26335_26365 = state_26322__$1;
(statearr_26335_26365[(2)] = null);

(statearr_26335_26365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (9))){
var inst_26282 = (state_26322[(8)]);
var inst_26298 = cljs.core.vec.call(null,inst_26282);
var state_26322__$1 = state_26322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26322__$1,(11),out,inst_26298);
} else {
if((state_val_26323 === (5))){
var inst_26283 = (state_26322[(7)]);
var inst_26286 = (state_26322[(9)]);
var inst_26290 = (state_26322[(10)]);
var inst_26290__$1 = f.call(null,inst_26286);
var inst_26291 = cljs.core._EQ_.call(null,inst_26290__$1,inst_26283);
var inst_26292 = cljs.core.keyword_identical_QMARK_.call(null,inst_26283,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26293 = (inst_26291) || (inst_26292);
var state_26322__$1 = (function (){var statearr_26336 = state_26322;
(statearr_26336[(10)] = inst_26290__$1);

return statearr_26336;
})();
if(cljs.core.truth_(inst_26293)){
var statearr_26337_26366 = state_26322__$1;
(statearr_26337_26366[(1)] = (8));

} else {
var statearr_26338_26367 = state_26322__$1;
(statearr_26338_26367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (14))){
var inst_26315 = (state_26322[(2)]);
var inst_26316 = cljs.core.async.close_BANG_.call(null,out);
var state_26322__$1 = (function (){var statearr_26340 = state_26322;
(statearr_26340[(13)] = inst_26315);

return statearr_26340;
})();
var statearr_26341_26368 = state_26322__$1;
(statearr_26341_26368[(2)] = inst_26316);

(statearr_26341_26368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (10))){
var inst_26305 = (state_26322[(2)]);
var state_26322__$1 = state_26322;
var statearr_26342_26369 = state_26322__$1;
(statearr_26342_26369[(2)] = inst_26305);

(statearr_26342_26369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26323 === (8))){
var inst_26282 = (state_26322[(8)]);
var inst_26286 = (state_26322[(9)]);
var inst_26290 = (state_26322[(10)]);
var inst_26295 = inst_26282.push(inst_26286);
var tmp26339 = inst_26282;
var inst_26282__$1 = tmp26339;
var inst_26283 = inst_26290;
var state_26322__$1 = (function (){var statearr_26343 = state_26322;
(statearr_26343[(7)] = inst_26283);

(statearr_26343[(8)] = inst_26282__$1);

(statearr_26343[(14)] = inst_26295);

return statearr_26343;
})();
var statearr_26344_26370 = state_26322__$1;
(statearr_26344_26370[(2)] = null);

(statearr_26344_26370[(1)] = (2));


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
});})(c__23601__auto___26356,out))
;
return ((function (switch__23489__auto__,c__23601__auto___26356,out){
return (function() {
var cljs$core$async$state_machine__23490__auto__ = null;
var cljs$core$async$state_machine__23490__auto____0 = (function (){
var statearr_26348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26348[(0)] = cljs$core$async$state_machine__23490__auto__);

(statearr_26348[(1)] = (1));

return statearr_26348;
});
var cljs$core$async$state_machine__23490__auto____1 = (function (state_26322){
while(true){
var ret_value__23491__auto__ = (function (){try{while(true){
var result__23492__auto__ = switch__23489__auto__.call(null,state_26322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23492__auto__;
}
break;
}
}catch (e26349){if((e26349 instanceof Object)){
var ex__23493__auto__ = e26349;
var statearr_26350_26371 = state_26322;
(statearr_26350_26371[(5)] = ex__23493__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23491__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26372 = state_26322;
state_26322 = G__26372;
continue;
} else {
return ret_value__23491__auto__;
}
break;
}
});
cljs$core$async$state_machine__23490__auto__ = function(state_26322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23490__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23490__auto____1.call(this,state_26322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23490__auto____0;
cljs$core$async$state_machine__23490__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23490__auto____1;
return cljs$core$async$state_machine__23490__auto__;
})()
;})(switch__23489__auto__,c__23601__auto___26356,out))
})();
var state__23603__auto__ = (function (){var statearr_26351 = f__23602__auto__.call(null);
(statearr_26351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23601__auto___26356);

return statearr_26351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23603__auto__);
});})(c__23601__auto___26356,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1466146183095