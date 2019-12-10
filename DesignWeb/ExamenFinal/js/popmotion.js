!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(t.popmotion={})}(this,function(t){"use strict";var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(t,n)};function n(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var e=function(){return(e=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function o(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)r.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(n[e[o]]=t[e[o]])}return n}var i=function(){return(i=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},u=function(t,r){return function(n){return Math.max(Math.min(n,r),t)}},a=function(t){return t%1?Number(t.toFixed(5)):t},s=/(-)?(\d[\d\.]*)/g,c=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,f=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,p={test:function(t){return"number"==typeof t},parse:parseFloat,transform:function(t){return t}},d=i(i({},p),{transform:u(0,1)}),l=i(i({},p),{default:1}),v=function(t){return{test:function(r){return"string"==typeof r&&r.endsWith(t)&&1===r.split(" ").length},parse:parseFloat,transform:function(r){return""+r+t}}},h=v("deg"),m=v("%"),y=v("px"),g=v("vh"),b=v("vw"),w=i(i({},m),{parse:function(t){return m.parse(t)/100},transform:function(t){return m.transform(100*t)}}),O=u(0,255),x=function(t){return void 0!==t.red},M=function(t){return void 0!==t.hue},A=function(t){return function(r){if("string"!=typeof r)return r;for(var n,e={},o=(n=r,n.substring(n.indexOf("(")+1,n.lastIndexOf(")"))).split(/,\s*/),i=0;i<4;i++)e[t[i]]=void 0!==o[i]?parseFloat(o[i]):1;return e}},S=i(i({},p),{transform:function(t){return Math.round(O(t))}});function C(t,r){return t.startsWith(r)&&f.test(t)}var k={test:function(t){return"string"==typeof t?C(t,"rgb"):x(t)},parse:A(["red","green","blue","alpha"]),transform:function(t){var r=t.red,n=t.green,e=t.blue,o=t.alpha,i=void 0===o?1:o;return function(t){var r=t.red,n=t.green,e=t.blue,o=t.alpha;return"rgba("+r+", "+n+", "+e+", "+(void 0===o?1:o)+")"}({red:S.transform(r),green:S.transform(n),blue:S.transform(e),alpha:a(d.transform(i))})}},P={test:function(t){return"string"==typeof t?C(t,"hsl"):M(t)},parse:A(["hue","saturation","lightness","alpha"]),transform:function(t){var r=t.hue,n=t.saturation,e=t.lightness,o=t.alpha,i=void 0===o?1:o;return function(t){var r=t.hue,n=t.saturation,e=t.lightness,o=t.alpha;return"hsla("+r+", "+n+", "+e+", "+(void 0===o?1:o)+")"}({hue:Math.round(r),saturation:m.transform(a(n)),lightness:m.transform(a(e)),alpha:a(d.transform(i))})}},R=i(i({},k),{test:function(t){return"string"==typeof t&&C(t,"#")},parse:function(t){var r="",n="",e="";return t.length>4?(r=t.substr(1,2),n=t.substr(3,2),e=t.substr(5,2)):(r=t.substr(1,1),n=t.substr(2,1),e=t.substr(3,1),r+=r,n+=n,e+=e),{red:parseInt(r,16),green:parseInt(n,16),blue:parseInt(e,16),alpha:1}}}),V={test:function(t){return"string"==typeof t&&f.test(t)||x(t)||M(t)},parse:function(t){return k.test(t)?k.parse(t):P.test(t)?P.parse(t):R.test(t)?R.parse(t):t},transform:function(t){return x(t)?k.transform(t):M(t)?P.transform(t):t}},T=function(t){return"number"==typeof t?0:t},j={test:function(t){if("string"!=typeof t||!isNaN(t))return!1;var r=0,n=t.match(s),e=t.match(c);return n&&(r+=n.length),e&&(r+=e.length),r>0},parse:function(t){var r=t,n=[],e=r.match(c);e&&(r=r.replace(c,"${c}"),n.push.apply(n,e.map(V.parse)));var o=r.match(s);return o&&n.push.apply(n,o.map(p.parse)),n},createTransformer:function(t){var r=t,n=0,e=t.match(c),o=e?e.length:0;if(e)for(var i=0;i<o;i++)r=r.replace(e[i],"${c}"),n++;var u=r.match(s),f=u?u.length:0;if(u)for(i=0;i<f;i++)r=r.replace(u[i],"${n}"),n++;return function(t){for(var e=r,i=0;i<n;i++)e=e.replace(i<o?"${c}":"${n}",i<o?V.transform(t[i]):a(t[i]));return e}},getAnimatableNone:function(t){var r=j.parse(t);return j.createTransformer(t)(r.map(T))}},E=Object.freeze({number:p,scale:l,alpha:d,degrees:h,percent:m,progressPercentage:w,px:y,vw:b,vh:g,rgba:k,rgbUnit:S,hsla:P,hex:R,color:V,complex:j}),X=function(){};X=function(t,r){if(!t)throw new Error(r)};var Y,L;Y=function(t,r){t||"undefined"==typeof console||console.warn("Hey, listen! "+r)},L=function(t,r){if(!t)throw new Error("Hey, listen! ".toUpperCase()+r)};var F,B=0,D="undefined"!=typeof window&&void 0!==window.requestAnimationFrame?function(t){return window.requestAnimationFrame(t)}:function(t){var r=Date.now(),n=Math.max(0,16.7-(r-B));B=r+n,setTimeout(function(){return t(B)},n)};!function(t){t.Read="read",t.Update="update",t.Render="render",t.PostRender="postRender",t.FixedUpdate="fixedUpdate"}(F||(F={}));var I=1/60*1e3,z=!0,W=!1,H=!1,U={delta:0,timestamp:0},q=[F.Read,F.Update,F.Render,F.PostRender],N=function(t){return W=t},Z=q.reduce(function(t,r){var n,e,o,i,u,a,s,c,f,p=(n=N,e=[],o=[],i=0,u=!1,a=0,s=new WeakSet,c=new WeakSet,f={cancel:function(t){var r=o.indexOf(t);s.add(t),-1!==r&&o.splice(r,1)},process:function(t){var r,p;if(u=!0,e=(r=[o,e])[0],(o=r[1]).length=0,i=e.length)for(a=0;a<i;a++)(p=e[a])(t),!0!==c.has(p)||s.has(p)||(f.schedule(p),n(!0));u=!1},schedule:function(t,r,n){void 0===r&&(r=!1),void 0===n&&(n=!1),L("function"==typeof t,"Argument must be a function");var a=n&&u,f=a?e:o;s.delete(t),r&&c.add(t),-1===f.indexOf(t)&&(f.push(t),a&&(i=e.length))}});return t.sync[r]=function(t,r,n){return void 0===r&&(r=!1),void 0===n&&(n=!1),W||Q(),p.schedule(t,r,n),t},t.cancelSync[r]=function(t){return p.cancel(t)},t.steps[r]=p,t},{steps:{},sync:{},cancelSync:{}}),_=Z.steps,$=Z.sync,G=Z.cancelSync,K=function(t){return _[t].process(U)},J=function(t){W=!1,U.delta=z?I:Math.max(Math.min(t-U.timestamp,40),1),z||(I=U.delta),U.timestamp=t,H=!0,q.forEach(K),H=!1,W&&(z=!1,D(J))},Q=function(){W=!0,z=!0,H||D(J)},tt=function(){return U},rt=function(t){return function(r){return 1-t(1-r)}},nt=function(t){return function(r){return r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2}},et=rt,ot=nt,it=function(t){return function(r){return Math.pow(r,t)}},ut=function(t){return function(r){return r*r*((t+1)*r-t)}},at=function(t){var r=ut(t);return function(t){return(t*=2)<1?.5*r(t):.5*(2-Math.pow(2,-10*(t-1)))}},st=function(t){return t},ct=it(2),ft=rt(ct),pt=nt(ct),dt=function(t){return 1-Math.sin(Math.acos(t))},lt=rt(dt),vt=nt(lt),ht=ut(1.525),mt=rt(ht),yt=nt(ht),gt=at(1.525),bt=function(t){var r=t*t;return t<4/11?7.5625*r:t<8/11?9.075*r-9.9*t+3.4:t<.9?4356/361*r-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72},wt=8,Ot=.001,xt=1e-7,Mt=10,At=11,St=1/(At-1),Ct="undefined"!=typeof Float32Array,kt=function(t,r){return 1-3*r+3*t},Pt=function(t,r){return 3*r-6*t},Rt=function(t){return 3*t},Vt=function(t,r,n){return 3*kt(r,n)*t*t+2*Pt(r,n)*t+Rt(r)},Tt=function(t,r,n){return((kt(r,n)*t+Pt(r,n))*t+Rt(r))*t};var jt=Object.freeze({reversed:rt,mirrored:nt,createReversedEasing:et,createMirroredEasing:ot,createExpoIn:it,createBackIn:ut,createAnticipateEasing:at,linear:st,easeIn:ct,easeOut:ft,easeInOut:pt,circIn:dt,circOut:lt,circInOut:vt,backIn:ht,backOut:mt,backInOut:yt,anticipate:gt,bounceOut:bt,bounceIn:function(t){return 1-bt(1-t)},bounceInOut:function(t){return t<.5?.5*(1-bt(1-2*t)):.5*bt(2*t-1)+.5},cubicBezier:function(t,r,n,e){var o=Ct?new Float32Array(At):new Array(At),i=function(r){for(var e,i,u,a=0,s=1,c=At-1;s!==c&&o[s]<=r;++s)a+=St;return e=(r-o[--s])/(o[s+1]-o[s]),(u=Vt(i=a+e*St,t,n))>=Ot?function(r,e){for(var o=0,i=0;o<wt;++o){if(0===(i=Vt(e,t,n)))return e;e-=(Tt(e,t,n)-r)/i}return e}(r,i):0===u?i:function(r,e,o){var i,u,a=0;do{(i=Tt(u=e+(o-e)/2,t,n)-r)>0?o=u:e=u}while(Math.abs(i)>xt&&++a<Mt);return u}(r,a,a+St)};return function(){for(var r=0;r<At;++r)o[r]=Tt(r*St,t,n)}(),function(o){return t===r&&n===e?o:0===o?0:1===o?1:Tt(i(o),r,e)}}}),Et={x:0,y:0,z:0},Xt=function(t){return"number"==typeof t},Yt=function(t){return 180*t/Math.PI},Lt=function(t,r){return void 0===r&&(r=Et),Yt(Math.atan2(r.y-t.y,r.x-t.x))},Ft=function(t,r){var n=!0;return void 0===r&&(r=t,n=!1),function(e){return n?e-t+r:(t=e,n=!0,r)}},Bt=function(t){return function(r,n,e){return void 0!==e?t(r,n,e):function(e){return t(r,n,e)}}},Dt=Bt(function(t,r,n){return Math.min(Math.max(n,t),r)}),It=function(t){return t*Math.PI/180},zt=function(t){return t.hasOwnProperty("x")&&t.hasOwnProperty("y")},Wt=function(t){return zt(t)&&t.hasOwnProperty("z")},Ht=function(t,r){return Math.abs(t-r)},Ut=function(t,r){if(void 0===r&&(r=Et),Xt(t)&&Xt(r))return Ht(t,r);if(zt(t)&&zt(r)){var n=Ht(t.x,r.x),e=Ht(t.y,r.y),o=Wt(t)&&Wt(r)?Ht(t.z,r.z):0;return Math.sqrt(Math.pow(n,2)+Math.pow(e,2)+Math.pow(o,2))}return 0},qt=function(t,r,n){var e=r-t;return 0===e?1:(n-t)/e},Nt=function(t,r,n){return-n*t+n*r+t},Zt=function(){return(Zt=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},_t=function(t,r,n){var e=t*t,o=r*r;return Math.sqrt(Math.max(0,n*(o-e)+e))},$t=[R,k,P],Gt=function(t){return $t.find(function(r){return r.test(t)})},Kt=function(t){return"'"+t+"' is not an animatable color. Use the equivalent color code instead."},Jt=function(t,r){var n=Gt(t),e=Gt(r);X(!!n,Kt(t)),X(!!e,Kt(r)),X(n.transform===e.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var o=n.parse(t),i=e.parse(r),u=Zt({},o),a=n===P?Nt:_t;return function(t){for(var r in u)"alpha"!==r&&(u[r]=a(o[r],i[r],t));return u.alpha=Nt(o.alpha,i.alpha,t),n.transform(u)}},Qt=function(t,r){return function(n){return r(t(n))}},tr=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.reduce(Qt)};function rr(t,r){return Xt(t)?function(n){return Nt(t,r,n)}:V.test(t)?Jt(t,r):ir(t,r)}var nr=function(t,r){var n=t.slice(),e=n.length,o=t.map(function(t,n){return rr(t,r[n])});return function(t){for(var r=0;r<e;r++)n[r]=o[r](t);return n}},er=function(t,r){var n=Zt({},t,r),e={};for(var o in n)void 0!==t[o]&&void 0!==r[o]&&(e[o]=rr(t[o],r[o]));return function(t){for(var r in e)n[r]=e[r](t);return n}};function or(t){for(var r=j.parse(t),n=r.length,e=0,o=0,i=0,u=0;u<n;u++)e||"number"==typeof r[u]?e++:void 0!==r[u].hue?i++:o++;return{parsed:r,numNumbers:e,numRGB:o,numHSL:i}}var ir=function(t,r){var n=j.createTransformer(r),e=or(t),o=or(r);return X(e.numHSL===o.numHSL&&e.numRGB===o.numRGB&&e.numNumbers>=o.numNumbers,"Complex values '"+t+"' and '"+r+"' too different to mix. Ensure all colors are of the same type."),tr(nr(e.parsed,o.parsed),n)},ur=function(t,r){return function(n){return Nt(t,r,n)}};function ar(t,r,n){for(var e,o=[],i=n||("number"==typeof(e=t[0])?ur:"string"==typeof e?V.test(e)?Jt:ir:Array.isArray(e)?nr:"object"==typeof e?er:void 0),u=t.length-1,a=0;a<u;a++){var s=i(t[a],t[a+1]);if(r){var c=Array.isArray(r)?r[a]:r;s=tr(c,s)}o.push(s)}return o}var sr=function(t,r,n,e){return void 0===e&&(e=0),o=t+n*(r-t)/Math.max(e,n),void 0===i&&(i=2),i=Math.pow(10,i),Math.round(o*i)/i;var o,i},cr=function(t){return t},fr=function(t){return void 0===t&&(t=cr),Bt(function(r,n,e){var o=n-e,i=-(0-r+1)*(0-t(Math.abs(o)));return o<=0?n+i:n-i})},pr=fr(),dr=fr(Math.sqrt),lr=function(t,r){return Xt(t)?t/(1e3/r):0},vr=function(t,r){return r?t*(1e3/r):0},hr=Bt(function(t,r,n){var e=r-t;return((n-t)%e+e)%e+t}),mr=(Dt(0,1),function(){function t(t){void 0===t&&(t={}),this.props=t}return t.prototype.applyMiddleware=function(t){return this.create(e({},this.props,{middleware:this.props.middleware?[t].concat(this.props.middleware):[t]}))},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=1===t.length?t[0]:tr.apply(void 0,t);return this.applyMiddleware(function(t){return function(r){return t(n(r))}})},t.prototype.while=function(t){return this.applyMiddleware(function(r,n){return function(e){return t(e)?r(e):n()}})},t.prototype.filter=function(t){return this.applyMiddleware(function(r){return function(n){return t(n)&&r(n)}})},t}()),yr=function(){return function(t,r){var n=t.middleware,e=t.onComplete,o=this;this.isActive=!0,this.update=function(t){o.observer.update&&o.updateObserver(t)},this.complete=function(){o.observer.complete&&o.isActive&&o.observer.complete(),o.onComplete&&o.onComplete(),o.isActive=!1},this.error=function(t){o.observer.error&&o.isActive&&o.observer.error(t),o.isActive=!1},this.observer=r,this.updateObserver=function(t){return r.update(t)},this.onComplete=e,r.update&&n&&n.length&&n.forEach(function(t){return o.updateObserver=t(o.updateObserver,o.complete)})}}(),gr=function(t,r,n){var e=r.middleware;return new yr({middleware:e,onComplete:n},"function"==typeof t?{update:t}:t)},br=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n(r,t),r.prototype.create=function(t){return new r(t)},r.prototype.start=function(t){void 0===t&&(t={});var r=!1,n={stop:function(){}},i=this.props,u=i.init,a=o(i,["init"]),s=u(gr(t,a,function(){r=!0,n.stop()}));return n=s?e({},n,s):n,t.registerParent&&t.registerParent(n),r&&n.stop(),n},r}(mr),wr=function(t){return new br({init:t})},Or=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.subscribers=[],r}return n(r,t),r.prototype.complete=function(){this.subscribers.forEach(function(t){return t.complete()})},r.prototype.error=function(t){this.subscribers.forEach(function(r){return r.error(t)})},r.prototype.update=function(t){for(var r=0;r<this.subscribers.length;r++)this.subscribers[r].update(t)},r.prototype.subscribe=function(t){var r=this,n=gr(t,this.props);return this.subscribers.push(n),{unsubscribe:function(){var t=r.subscribers.indexOf(n);-1!==t&&r.subscribers.splice(t,1)}}},r.prototype.stop=function(){this.parent&&this.parent.stop()},r.prototype.registerParent=function(t){this.stop(),this.parent=t},r}(mr),xr=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return n(r,t),r.prototype.create=function(t){return new r(t)},r}(Or),Mr=function(t,r){var n=1/(t-1),e=1/(2*(t-1)),o=Math.min(r,1)/e;return Math.floor((o+1)/2)*n},Ar=Object.freeze({angle:Lt,degreesToRadians:It,distance:Ut,isPoint3D:Wt,isPoint:zt,dilate:Nt,getValueFromProgress:Nt,pointFromAngleAndDistance:function(t,r,n){return r=It(r),{x:n*Math.cos(r)+t.x,y:n*Math.sin(r)+t.y}},getProgressFromValue:qt,radiansToDegrees:Yt,smooth:sr,speedPerFrame:lr,speedPerSecond:vr,stepProgress:Mr}),Sr=function(t){return Array.isArray(t)},Cr=function(t){var r=typeof t;return"string"===r||"number"===r},kr=function(t){function r(r){var n=t.call(this,r)||this;return n.scheduleVelocityCheck=function(){return $.postRender(n.velocityCheck)},n.velocityCheck=function(t){t.timestamp!==n.lastUpdated&&(n.prev=n.current)},n.prev=n.current=r.value||0,Cr(n.current)?(n.updateCurrent=function(t){return n.current=t},n.getVelocityOfCurrent=function(){return n.getSingleVelocity(n.current,n.prev)}):Sr(n.current)?(n.updateCurrent=function(t){return n.current=t.slice()},n.getVelocityOfCurrent=function(){return n.getListVelocity()}):(n.updateCurrent=function(t){for(var r in n.current={},t)t.hasOwnProperty(r)&&(n.current[r]=t[r])},n.getVelocityOfCurrent=function(){return n.getMapVelocity()}),r.initialSubscription&&n.subscribe(r.initialSubscription),n}return n(r,t),r.prototype.create=function(t){return new r(t)},r.prototype.get=function(){return this.current},r.prototype.getVelocity=function(){return this.getVelocityOfCurrent()},r.prototype.update=function(r){t.prototype.update.call(this,r),this.prev=this.current,this.updateCurrent(r);var n=tt(),e=n.delta,o=n.timestamp;this.timeDelta=e,this.lastUpdated=o,$.postRender(this.scheduleVelocityCheck)},r.prototype.subscribe=function(r){var n=t.prototype.subscribe.call(this,r);return this.subscribers[this.subscribers.length-1].update(this.current),n},r.prototype.getSingleVelocity=function(t,r){return"number"==typeof t&&"number"==typeof r?vr(t-r,this.timeDelta):vr(parseFloat(t)-parseFloat(r),this.timeDelta)||0},r.prototype.getListVelocity=function(){var t=this;return this.current.map(function(r,n){return t.getSingleVelocity(r,t.prev[n])})},r.prototype.getMapVelocity=function(){var t={};for(var r in this.current)this.current.hasOwnProperty(r)&&(t[r]=this.getSingleVelocity(this.current[r],this.prev[r]));return t},r}(Or),Pr=function(t,r){return new kr({value:t,initialSubscription:r})},Rr=function(t){var r=t.getCount,n=t.getFirst,e=t.getOutput,o=t.mapApi,i=t.setProp,u=t.startActions;return function(t){return wr(function(a){var s=a.update,c=a.complete,f=a.error,p=r(t),d=e(),l=function(){return s(d)},v=0,h=u(t,function(t,r){var n=!1;return t.start({complete:function(){n||(n=!0,++v===p&&$.update(c))},error:f,update:function(t){i(d,r,t),$.update(l,!1,!0)}})});return Object.keys(n(h)).reduce(function(t,r){return t[r]=o(h,r),t},{})})}},Vr=Rr({getOutput:function(){return{}},getCount:function(t){return Object.keys(t).length},getFirst:function(t){return t[Object.keys(t)[0]]},mapApi:function(t,r){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Object.keys(t).reduce(function(e,o){var i;return t[o][r]&&(n[0]&&void 0!==n[0][o]?e[o]=t[o][r](n[0][o]):e[o]=(i=t[o])[r].apply(i,n)),e},{})}},setProp:function(t,r,n){return t[r]=n},startActions:function(t,r){return Object.keys(t).reduce(function(n,e){return n[e]=r(t[e],e),n},{})}}),Tr=Rr({getOutput:function(){return[]},getCount:function(t){return t.length},getFirst:function(t){return t[0]},mapApi:function(t,r){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.map(function(t,e){if(t[r])return Array.isArray(n[0])?t[r](n[0][e]):t[r].apply(t,n)})}},setProp:function(t,r,n){return t[r]=n},startActions:function(t,r){return t.map(function(t,n){return r(t,n)})}}),jr=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Tr(t)},Er=[y,m,h,g,b],Xr=function(t){return Er.find(function(r){return r.test(t)})},Yr=function(t,r){return t(r)},Lr=function(t,r,n){var o=n[0],i=r[o].map(function(o,i){var u=n.reduce(function(t){return function(r,n){return r[n]=r[n][t],r}}(i),e({},r));return Hr(o)(t,u)});return jr.apply(void 0,i)},Fr=function(t,r,n){var o=n[0],i=Object.keys(r[o]).reduce(function(i,u){var a=n.reduce(function(t){return function(r,n){return r[n]=r[n][t],r}}(u),e({},r));return i[u]=Hr(r[o][u])(t,a),i},{});return Vr(i)},Br=function(t,r){var n=r.from,i=r.to,u=o(r,["from","to"]),a=Xr(n)||Xr(i),s=a.transform,c=a.parse;return t(e({},u,{from:"string"==typeof n?c(n):n,to:"string"==typeof i?c(i):i})).pipe(s)},Dr=function(t){return function(r,n){var i=n.from,u=n.to,a=o(n,["from","to"]);return r(e({},a,{from:0,to:1})).pipe(t(i,u))}},Ir=Dr(Jt),zr=Dr(ir),Wr=function(t,r){var n=function(t){var r=Object.keys(t),n=function(r,n){return void 0!==r&&!t[n](r)};return{getVectorKeys:function(t){return r.reduce(function(r,e){return n(t[e],e)&&r.push(e),r},[])},testVectorProps:function(t){return t&&r.some(function(r){return n(t[r],r)})}}}(r),e=n.testVectorProps,o=n.getVectorKeys;return function(r){if(!e(r))return t(r);var n=o(r),i=r[n[0]];return Hr(i)(t,r,n)}},Hr=function(t){return"number"==typeof t?Yr:Array.isArray(t)?Lr:function(t){return Boolean(Xr(t))}(t)?Br:V.test(t)?Ir:j.test(t)?zr:"object"==typeof t?Fr:Yr},Ur=Wr(function(t){return void 0===t&&(t={}),wr(function(r){var n=r.complete,e=r.update,o=t.velocity,i=void 0===o?0:o,u=t.from,a=void 0===u?0:u,s=t.power,c=void 0===s?.8:s,f=t.timeConstant,p=void 0===f?350:f,d=t.restDelta,l=void 0===d?.5:d,v=t.modifyTarget,h=0,m=c*i,y=Math.round(a+m),g=void 0===v?y:v(y),b=$.update(function(t){var r=t.delta;h+=r;var o=-m*Math.exp(-h/p),i=o>l||o<-l;e(i?g+o:g),i||(G.update(b),n())},!0);return{stop:function(){return G.update(b)}}})},{from:p.test,modifyTarget:function(t){return"function"==typeof t},velocity:p.test}),qr=Wr(function(t){return void 0===t&&(t={}),wr(function(r){var n=r.update,e=r.complete,o=t.velocity,i=void 0===o?0:o,u=t.from,a=void 0===u?0:u,s=t.to,c=void 0===s?0:s,f=t.stiffness,p=void 0===f?100:f,d=t.damping,l=void 0===d?10:d,v=t.mass,h=void 0===v?1:v,m=t.restSpeed,y=void 0===m?.01:m,g=t.restDelta,b=void 0===g?.01:g,w=i?-i/1e3:0,O=0,x=c-a,M=a,A=M,S=$.update(function(t){var r=t.delta;O+=r;var o=l/(2*Math.sqrt(p*h)),u=Math.sqrt(p/h)/1e3;if(A=M,o<1){var a=Math.exp(-o*u*O),s=u*Math.sqrt(1-o*o);M=c-a*((w+o*u*x)/s*Math.sin(s*O)+x*Math.cos(s*O))}else a=Math.exp(-u*O),M=c-a*(x+(w+u*x)*O);i=vr(M-A,r);var f=Math.abs(i)<=y,d=Math.abs(c-M)<=b;f&&d?(n(M=c),G.update(S),e()):n(M)},!0);return{stop:function(){return G.update(S)}}})},{from:p.test,to:p.test,stiffness:p.test,damping:p.test,mass:p.test,velocity:p.test}),Nr=Wr(function(t){var r=t.from,n=void 0===r?0:r,o=t.velocity,i=void 0===o?0:o,u=t.min,a=t.max,s=t.power,c=void 0===s?.8:s,f=t.timeConstant,p=void 0===f?700:f,d=t.bounceStiffness,l=void 0===d?500:d,v=t.bounceDamping,h=void 0===v?10:v,m=t.restDelta,y=void 0===m?1:m,g=t.modifyTarget;return wr(function(t){var r,o=t.update,s=t.complete,f=Pr(n),d=!1,v=function(t){return void 0!==u&&t<=u},m=function(t){return void 0!==a&&t>=a},b=function(t){return v(t)||m(t)},w=function(t,n){r&&r.stop(),r=t.start({update:function(t){return f.update(t)},complete:function(){n?n():s()}})},O=function(t){d=!0,w(qr(e({},t,{to:v(t.from)?u:a,stiffness:l,damping:h,restDelta:y})))};if(f.subscribe(function(t){o(t);var n=f.getVelocity();r&&!d&&function(t,r){return v(t)&&r<0||m(t)&&r>0}(t,n)&&O({from:t,velocity:n})}),b(n))O({from:n,velocity:i});else if(0!==i){var x=Ur({from:n,velocity:i,timeConstant:p,power:c,restDelta:b(n)?20:y,modifyTarget:g});w(x,function(){var t=f.get();b(t)?O({from:t,velocity:f.getVelocity()}):s()})}else s();return{stop:function(){return r&&r.stop()}}})},{from:p.test,velocity:p.test,min:p.test,max:p.test,damping:p.test,stiffness:p.test,modifyTarget:function(t){return"function"==typeof t}}),Zr=Wr(function(t){var r=t.from,n=void 0===r?0:r,e=t.to,o=void 0===e?1:e,i=t.ease,u=void 0===i?st:i,a=t.reverseEase;return void 0!==a&&a&&(u=et(u)),wr(function(t){var r=t.update;return{seek:function(t){return r(t)}}}).pipe(u,function(t){return Nt(n,o,t)})},{ease:function(t){return"function"==typeof t},from:p.test,to:p.test}),_r=Dt(0,1),$r=function(t){return void 0===t&&(t={}),wr(function(r){var n,e=r.update,o=r.complete,i=t.duration,u=void 0===i?300:i,a=t.ease,s=void 0===a?ft:a,c=t.flip,f=void 0===c?0:c,p=t.loop,d=void 0===p?0:p,l=t.yoyo,v=void 0===l?0:l,h=t.repeatDelay,m=void 0===h?0:h,y=t.from,g=void 0===y?0:y,b=t.to,w=void 0===b?1:b,O=t.elapsed,x=void 0===O?0:O,M=t.flipCount,A=void 0===M?0:M,S=t.yoyoCount,C=void 0===S?0:S,k=t.loopCount,P=void 0===k?0:k,R=Zr({from:g,to:w,ease:s}).start(e),V=0,T=!1,j=function(t){var r;void 0===t&&(t=!1),R=Zr({from:g=(r=[w,g])[0],to:w=r[1],ease:s,reverseEase:t}).start(e)},E=function(){V=_r(qt(0,u,x)),R.seek(V)},X=function(){T=!0,n=$.update(function(t){var r,e=t.delta;x+=e,E(),!(r=T&&x>u+m)||(!r||d||f||v)&&(x=u-(x-m),d&&P<d?(P++,1):f&&A<f?(A++,j(),1):v&&C<v&&(j(++C%2!=0),1))||(G.update(n),o&&$.update(o,!1,!0))},!0)},Y=function(){T=!1,n&&G.update(n)};return X(),{isActive:function(){return T},getElapsed:function(){return Dt(0,u,x)},getProgress:function(){return V},stop:function(){Y()},pause:function(){return Y(),this},resume:function(){return T||X(),this},seek:function(t){return x=Nt(0,u,t),$.update(E,!1,!0),this},reverse:function(){return j(),this}}})},Gr=Dt(0,1),Kr=function(t){var r=t.easings,n=t.ease,i=void 0===n?st:n,u=t.times,a=t.values,s=o(t,["easings","ease","times","values"]);r=Array.isArray(r)?r:function(t,r){return t.map(function(){return r||ft}).splice(0,t.length-1)}(a,r),u=u||function(t){var r=t.length;return t.map(function(t,n){return 0!==n?n/(r-1):0})}(a);var c=r.map(function(t,r){return Zr({from:a[r],to:a[r+1],ease:t})});return $r(e({},s,{ease:i})).applyMiddleware(function(t){return function(t,r,n){var e=t.length,o=e-1,i=o-1,u=r.map(function(t){return t.start(n)});return function(r){r<=t[0]&&u[0].seek(0),r>=t[o]&&u[i].seek(1);for(var n=1;n<e&&!(t[n]>r||n===o);n++);var a=qt(t[n-1],t[n],r);u[n-1].seek(Gr(a))}}(u,c,t)})},Jr=Wr(function(t){return void 0===t&&(t={}),wr(function(r){var n=r.complete,e=r.update,o=t.acceleration,i=void 0===o?0:o,u=t.friction,a=void 0===u?0:u,s=t.velocity,c=void 0===s?0:s,f=t.springStrength,p=t.to,d=t.restSpeed,l=void 0===d?.001:d,v=t.from,h=void 0===v?0:v,m=$.update(function(t){var r=t.delta,o=Math.max(r,16);i&&(c+=lr(i,o)),a&&(c*=Math.pow(1-a,o/100)),void 0!==f&&void 0!==p&&(c+=(p-h)*lr(f,o)),h+=lr(c,o),e(h),!1!==l&&(!c||Math.abs(c)<=l)&&(G.update(m),n())},!0);return{set:function(t){return h=t,this},setAcceleration:function(t){return i=t,this},setFriction:function(t){return a=t,this},setSpringStrength:function(t){return f=t,this},setSpringTarget:function(t){return p=t,this},setVelocity:function(t){return c=t,this},stop:function(){return G.update(m)}}})},{acceleration:p.test,friction:p.test,velocity:p.test,from:p.test,to:p.test,springStrength:p.test}),Qr=function(t,r){return Array.isArray(r)?t.push.apply(t,function(t){var r=[],n=t[t.length-1],e="number"==typeof n,o=e?n:0,i=e?t.slice(0,-1):t,u=i.length,a=0;return i.forEach(function(t,n){if(r.push(t),n!==u-1){var e=t.duration||300;a+=o,r.push("-"+(e-a))}}),r}(r)):t.push(r),t},tn=function(t,r,n){var e=t.duration,o=t.easings,i=t.times,u=t.values,a=u.length,s=i[a-1],c=0===r.at?0:r.at/e,f=(r.at+r.duration)/e;if(0===n)u.push(r.from),i.push(c);else if(s!==c){void 0!==r.from&&(u.push(u[a-1]),i.push(c),o.push(st));var p=void 0!==r.from?r.from:u[a-1];u.push(p),i.push(c),o.push(st)}else void 0!==r.from&&(u.push(r.from),i.push(c),o.push(st));return u.push(r.to),i.push(f),o.push(r.ease||pt),t},rn=function(t,r,n){return wr(function(e){var o=e.update,i=r.split(" ").map(function(r){return t.addEventListener(r,o,n),r});return{stop:function(){return i.forEach(function(r){return t.removeEventListener(r,o,n)})}}})},nn=function(t,r){return void 0===r&&(r={clientX:0,clientY:0,pageX:0,pageY:0,x:0,y:0}),r.clientX=r.x=t.clientX,r.clientY=r.y=t.clientY,r.pageX=t.pageX,r.pageY=t.pageY,r},en=[{clientX:0,clientY:0,pageX:0,pageY:0,x:0,y:0}],on=!1;if("undefined"!=typeof document){rn(document,"touchstart touchmove",{passive:!0,capture:!0}).start(function(t){var r=t.touches;on=!0;var n=r.length;en.length=0;for(var e=0;e<n;e++){var o=r[e];en.push(nn(o))}})}var un=function(t){var r=void 0===t?{}:t,n=r.preventDefault,e=void 0===n||n,o=r.scale,i=void 0===o?1:o,u=r.rotate,a=void 0===u?0:u;return wr(function(t){var r=t.update,n={touches:en,scale:i,rotate:a},o=0,u=0,s=en.length>1;if(s){var c=en[0],f=en[1];o=Ut(c,f),u=Lt(c,f)}var p=function(){if(s){var t=en[0],e=en[1],c=Ut(t,e),f=Lt(t,e);n.scale=i*(c/o),n.rotate=a+(f-u)}r(n)},d=rn(document,"touchmove",{passive:!e}).start(function(t){(e||t.touches.length>1)&&t.preventDefault(),$.update(p)});return on&&$.update(p),{stop:function(){G.update(p),d.stop()}}})},an={clientX:0,clientY:0,pageX:0,pageY:0,x:0,y:0},sn=!1;if("undefined"!=typeof document){rn(document,"mousedown mousemove",!0).start(function(t){sn=!0,nn(t,an)})}var cn,fn=function(t){var r=(void 0===t?{}:t).preventDefault,n=void 0===r||r;return wr(function(t){var r=t.update,e=function(){return r(an)},o=rn(document,"mousemove").start(function(t){n&&t.preventDefault(),$.update(e)});return sn&&$.update(e),{stop:function(){G.update(e),o.stop()}}})},pn=function(t){return t[0]},dn=function(t){return void 0===t&&(t={}),on?un(t).pipe(function(t){return t.touches},pn):fn(t)},ln=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return wr(function(r){var n,e=r.update,o=r.complete,i=0,u=function(){n=t[i].start({complete:function(){++i>=t.length?o():u()},update:e})};return u(),{stop:function(){return n&&n.stop()}}})},vn=function(t){return wr(function(r){var n=r.complete,e=setTimeout(n,t);return{stop:function(){return clearTimeout(e)}}})},hn=Object.freeze({applyOffset:Ft,clamp:Dt,conditional:function(t,r){return function(n){return t(n)?r(n):n}},interpolate:function(t,r,n){var e=void 0===n?{}:n,o=e.clamp,i=void 0===o||o,u=e.ease,a=e.mixer,s=t.length;X(s===r.length,"Both input and output ranges must be the same length"),X(!u||!Array.isArray(u)||u.length===s-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[s-1]&&(t=[].concat(t),r=[].concat(r),t.reverse(),r.reverse());var c=ar(r,u,a),f=2===s?function(t,r){var n=t[0],e=t[1],o=r[0];return function(t){return o(qt(n,e,t))}}(t,c):function(t,r){var n=t.length,e=n-1;return function(o){var i=0,u=!1;if(o<=t[0]?u=!0:o>=t[e]&&(i=e-1,u=!0),!u){for(var a=1;a<n&&!(t[a]>o||a===e);a++);i=a-1}var s=qt(t[i],t[i+1],o);return r[i](s)}}(t,c);return i?tr(Dt(t[0],t[s-1]),f):f},blendArray:nr,blendColor:Jt,pipe:tr,smooth:function(t){void 0===t&&(t=50);var r=0,n=0;return function(e){var o=tt().timestamp,i=o!==n?o-n:0,u=i?sr(r,e,i,t):r;return n=o,r=u,u}},snap:function(t){if("number"==typeof t)return function(r){return Math.round(r/t)*t};var r=0,n=t.length;return function(e){var o=Math.abs(t[0]-e);for(r=1;r<n;r++){var i=t[r],u=Math.abs(i-e);if(0===u)return i;if(u>o)return t[r-1];if(r===n-1)return i;o=u}}},generateStaticSpring:fr,nonlinearSpring:dr,linearSpring:pr,wrap:hr,appendUnit:function(t){return function(r){return""+r+t}},steps:function(t,r,n){return void 0===r&&(r=0),void 0===n&&(n=1),function(e){var o=qt(r,n,e);return Nt(r,n,Mr(t,o))}},transformMap:function(t){return function(r){var n=e({},r);for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];n[o]=i(r[o])}return n}}});cn=function(t,r){if(!t)throw new Error(r)};var mn,yn=function(t){var r=t.onRead,n=t.onRender,e=t.uncachedValues,i=void 0===e?new Set:e,u=t.useCache,a=void 0===u||u;return function(t){void 0===t&&(t={});var e=o(t,[]),u={},s=[],c=!1;function f(t,r){t.startsWith("--")&&(e.hasCSSVariable=!0);var n=u[t];u[t]=r,u[t]!==n&&(-1===s.indexOf(t)&&s.push(t),c||(c=!0,$.render(p.render)))}var p={get:function(t,n){return void 0===n&&(n=!1),!n&&a&&!i.has(t)&&void 0!==u[t]?u[t]:r(t,e)},set:function(t,r){if("string"==typeof t)f(t,r);else for(var n in t)f(n,t[n]);return this},render:function(t){return void 0===t&&(t=!1),(c||!0===t)&&(n(u,e,s),c=!1,s.length=0),this}};return p}},gn=/([a-z])([A-Z])/g,bn=function(t){return t.replace(gn,"$1-$2").toLowerCase()},wn=new Map,On=new Map,xn=["Webkit","Moz","O","ms",""],Mn=xn.length,An="undefined"!=typeof document,Sn=function(t,r){return On.set(t,bn(r))},Cn=function(t,r){void 0===r&&(r=!1);var n=r?On:wn;return n.has(t)||(An?function(t){mn=mn||document.createElement("div");for(var r=0;r<Mn;r++){var n=xn[r],e=""===n,o=e?t:n+t.charAt(0).toUpperCase()+t.slice(1);if(o in mn.style||e){if(e&&"clipPath"===t&&On.has(t))return;wn.set(t,o),Sn(t,(e?"":"-")+bn(o))}}}(t):function(t){Sn(t,t)}(t)),n.get(t)||t},kn=["","X","Y","Z"],Pn=["translate","scale","rotate","skew","transformPerspective"].reduce(function(t,r){return kn.reduce(function(t,n){return t.push(r+n),t},t)},["x","y","z"]),Rn=Pn.reduce(function(t,r){return t[r]=!0,t},{});function Vn(t){return!0===Rn[t]}function Tn(t,r){return Pn.indexOf(t)-Pn.indexOf(r)}var jn=new Set(["originX","originY","originZ"]);function En(t){return jn.has(t)}var Xn=e(e({},p),{transform:Math.round}),Yn={color:V,backgroundColor:V,outlineColor:V,fill:V,stroke:V,borderColor:V,borderTopColor:V,borderRightColor:V,borderBottomColor:V,borderLeftColor:V,borderWidth:y,borderTopWidth:y,borderRightWidth:y,borderBottomWidth:y,borderLeftWidth:y,borderRadius:y,radius:y,borderTopLeftRadius:y,borderTopRightRadius:y,borderBottomRightRadius:y,borderBottomLeftRadius:y,width:y,maxWidth:y,height:y,maxHeight:y,size:y,top:y,right:y,bottom:y,left:y,padding:y,paddingTop:y,paddingRight:y,paddingBottom:y,paddingLeft:y,margin:y,marginTop:y,marginRight:y,marginBottom:y,marginLeft:y,rotate:h,rotateX:h,rotateY:h,rotateZ:h,scale:l,scaleX:l,scaleY:l,scaleZ:l,skew:h,skewX:h,skewY:h,distance:y,translateX:y,translateY:y,translateZ:y,x:y,y:y,z:y,perspective:y,opacity:d,originX:w,originY:w,originZ:y,zIndex:Xn,fillOpacity:d,strokeOpacity:d,numOctaves:Xn},Ln=function(t){return Yn[t]},Fn=function(t,r){return r&&"number"==typeof t?r.transform(t):t},Bn="scrollLeft",Dn="scrollTop",In=new Set([Bn,Dn]),zn=new Set([Bn,Dn,"transform"]),Wn={x:"translateX",y:"translateY",z:"translateZ"};function Hn(t){return"function"==typeof t}function Un(t,r,n,e,o,i,u){void 0===r&&(r=!0),void 0===n&&(n={}),void 0===e&&(e={}),void 0===o&&(o={}),void 0===i&&(i=[]),void 0===u&&(u=!1);var a=!0,s=!1,c=!1;for(var f in t){var p=t[f],d=Ln(f),l=Fn(p,d);Vn(f)?(s=!0,e[f]=l,i.push(f),a&&(d.default&&p!==d.default||!d.default&&0!==p)&&(a=!1)):En(f)?(o[f]=l,c=!0):zn.has(f)&&Hn(l)||(n[Cn(f,u)]=l)}return(s||"function"==typeof t.transform)&&(n.transform=function(t,r,n,e,o){var i="",u=!1;n.sort(Tn);for(var a=n.length,s=0;s<a;s++){var c=n[s];i+=(Wn[c]||c)+"("+r[c]+") ",u="z"===c||u}return!u&&o?i+="translateZ(0)":i=i.trim(),Hn(t.transform)?i=t.transform(r,i):e&&(i="none"),i}(t,e,i,a,r)),c&&(n.transformOrigin=(o.originX||"50%")+" "+(o.originY||"50%")+" "+(o.originZ||0)),n}function qn(t,r){void 0===t&&(t=!0),void 0===r&&(r=!0);var n={},e={},o={},i=[];return function(u){return i.length=0,Un(u,t,n,e,o,i,r),n}}var Nn=yn({onRead:function(t,r){var n=r.element,e=r.preparseOutput,o=Ln(t);if(Vn(t))return o&&o.default||0;if(In.has(t))return n[t];var i=window.getComputedStyle(n,null).getPropertyValue(Cn(t,!0))||0;return e&&o&&o.test(i)&&o.parse?o.parse(i):i},onRender:function(t,r,n){var e=r.element,o=r.buildStyles,i=r.hasCSSVariable;if(Object.assign(e.style,o(t)),i)for(var u=n.length,a=0;a<u;a++){var s=n[a];s.startsWith("--")&&e.style.setProperty(s,t[s])}-1!==n.indexOf(Bn)&&(e[Bn]=t[Bn]),-1!==n.indexOf(Dn)&&(e[Dn]=t[Dn])},uncachedValues:In});var Zn=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues"]),_n=.5,$n=function(){return{style:{}}},Gn=function(t,r){return y.transform(t*r)},Kn={x:0,y:0,width:0,height:0};function Jn(t,r,n){return"string"==typeof t?t:y.transform(r+n*t)}function Qn(t,r,n,e,i,u){void 0===r&&(r=Kn),void 0===e&&(e=qn(!1,!1)),void 0===i&&(i=$n()),void 0===u&&(u=!0);var a=t.attrX,s=t.attrY,c=t.originX,f=t.originY,p=t.pathLength,d=t.pathSpacing,l=void 0===d?1:d,v=t.pathOffset,h=void 0===v?0:v,m=e(o(t,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]));for(var y in m){if("transform"===y)i.style.transform=m[y];else i[u&&!Zn.has(y)?bn(y):y]=m[y]}return(void 0!==c||void 0!==f||m.transform)&&(i.style.transformOrigin=function(t,r,n){return Jn(r,t.x,t.width)+" "+Jn(n,t.y,t.height)}(r,void 0!==c?c:_n,void 0!==f?f:_n)),void 0!==a&&(i.x=a),void 0!==s&&(i.y=s),void 0!==n&&void 0!==p&&(i[u?"stroke-dashoffset":"strokeDashoffset"]=Gn(-h,n),i[u?"stroke-dasharray":"strokeDasharray"]=Gn(p,n)+" "+Gn(l,n)),i}var te=yn({onRead:function(t,r){var n=r.element;if(Vn(t=Zn.has(t)?t:bn(t))){var e=Ln(t);return e&&e.default||0}return n.getAttribute(t)},onRender:function(t,r){var n=r.element,e=(0,r.buildAttrs)(t);for(var o in e)"style"===o?Object.assign(n.style,e.style):n.setAttribute(o,e[o])}}),re=function(t){var r=function(t){try{return function(t){return"function"==typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}(t)}catch(t){return{x:0,y:0,width:0,height:0}}}(t),n=function(t){return"path"===t.tagName}(t)&&t.getTotalLength?t.getTotalLength():void 0;return te({element:t,buildAttrs:function(t,r,n){void 0===n&&(n=!0);var e=$n(),o=qn(!1,!1);return function(i){return Qn(i,t,r,o,e,n)}}(r,n)})},ne=yn({useCache:!1,onRead:function(t){return"scrollTop"===t?window.pageYOffset:window.pageXOffset},onRender:function(t){var r=t.scrollTop,n=void 0===r?0:r,e=t.scrollLeft,o=void 0===e?0:e;return window.scrollTo(o,n)}}),ee=new WeakMap,oe=function(t,r){var n;return t instanceof HTMLElement?n=function(t,r){void 0===r&&(r={});var n=r.enableHardwareAcceleration,i=o(r,["enableHardwareAcceleration"]);return Nn(e({element:t,buildStyles:qn(n),preparseOutput:!0},i))}(t,r):t instanceof SVGElement?n=re(t):t===window&&(n=ne(t)),cn(void 0!==n,"No valid node provided. Node must be HTMLElement, SVGElement or window."),ee.set(t,n),n},ie=function(t,r){return ee.has(t)?ee.get(t):oe(t,r)};function ue(t,r){var n="string"==typeof t?document.querySelector(t):t;return ie(n,r)}t.action=wr,t.multicast=function(){return new xr},t.value=Pr,t.decay=Ur,t.inertia=Nr,t.keyframes=Kr,t.everyFrame=function(){return wr(function(t){var r=t.update,n=0,e=$.update(function(t){var e=t.timestamp;n||(n=e),r(e-n)},!0,!0);return{stop:function(){return G.update(e)}}})},t.physics=Jr,t.spring=qr,t.timeline=function(t,r){var n=void 0===r?{}:r,o=n.duration,i=n.elapsed,u=n.ease,a=n.loop,s=n.flip,c=n.yoyo,f=0,p=0,d=[];t.reduce(Qr,[]).forEach(function(t){if("string"==typeof t)f+=parseFloat(t);else if("number"==typeof t)f=t;else{var r=e({},t,{at:f});r.duration=void 0===r.duration?300:r.duration,d.push(r),f+=r.duration,p=Math.max(p,r.at+r.duration)}});for(var l={},v=d.length,h=0;h<v;h++){var m=d[h],y=m.track;if(void 0===y)throw new Error("No track defined");l.hasOwnProperty(y)||(l[y]=[]),l[y].push(m)}var g={};for(var b in l)if(l.hasOwnProperty(b)){var w=l[b].reduce(tn,{duration:p,easings:[],times:[],values:[]});g[b]=Kr(e({},w,{duration:o||p,ease:u,elapsed:i,loop:a,yoyo:c,flip:s}))}return Vr(g)},t.tween=$r,t.listen=rn,t.pointer=function(t){void 0===t&&(t={});var r=t.x,n=t.y,e=o(t,["x","y"]);if(void 0!==r||void 0!==n){var i=Ft(r||0),u=Ft(n||0),a={x:0,y:0};return dn(e).pipe(function(t){return a.x=i(t.x),a.y=u(t.y),a})}return dn(e)},t.mouse=fn,t.multitouch=un,t.chain=ln,t.composite=Vr,t.crossfade=function(t,r){return wr(function(n){var o=0,i=jr(t,r).start(e({},n,{update:function(t){var r=t[0],e=t[1];n.update(Nt(r,e,o))}}));return{setBalance:function(t){return o=t},stop:function(){return i.stop()}}})},t.delay=vn,t.merge=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return wr(function(r){var n=t.map(function(t){return t.start(r)});return{stop:function(){return n.forEach(function(t){return t.stop()})}}})},t.parallel=jr,t.schedule=function(t,r){return wr(function(n){var e,o=n.update,i=n.complete,u=t.start({update:function(){return void 0!==e&&o(e)},complete:i}),a=r.start({update:function(t){return e=t},complete:i});return{stop:function(){u.stop(),a.stop()}}})},t.stagger=function(t,r){var n="number"==typeof r,e=t.map(function(t,e){var o=n?r*e:r(e);return ln(vn(o),t)});return jr.apply(void 0,e)},t.calc=Ar,t.easing=jt,t.transform=hn,t.styler=ue,t.css=function(t,r){return Y(!1,"css() is deprecated, use styler instead"),ue(t,r)},t.svg=function(t,r){return Y(!1,"svg() is deprecated, use styler instead"),ue(t,r)},t.valueTypes=E,t.Action=br,t.ValueReaction=kr,Object.defineProperty(t,"__esModule",{value:!0})});