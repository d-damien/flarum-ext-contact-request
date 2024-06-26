(()=>{var t={n:n=>{var o=n&&n.__esModule?()=>n.default:()=>n;return t.d(o,{a:o}),o},d:(n,o)=>{for(var e in o)t.o(o,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};(()=>{"use strict";t.r(n);const o=flarum.core.compat["forum/app"];var e=t.n(o);const r=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/UserPage"];var c=t.n(a);const i=flarum.core.compat["forum/components/NotificationGrid"];var s=t.n(i);function u(t,n){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},u(t,n)}function p(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,u(t,n)}const f=flarum.core.compat["forum/components/Notification"];var l=function(t){function n(){return t.apply(this,arguments)||this}p(n,t);var o=n.prototype;return o.icon=function(){return"fas fa-paper-plane"},o.href=function(){var t=this.attrs.notification.subject();return app.route.user(t)},o.content=function(){return app.translator.trans("d-damien-contact-request.forum.notifications.sent",{user:this.attrs.notification.fromUser()})},n}(t.n(f)());const d=flarum.core.compat["common/components/Button"];var y=t.n(d);const h=flarum.core.compat["common/helpers/icon"];var b=t.n(h);const v=flarum.core.compat["common/components/LoadingIndicator"];var g=t.n(v),q=function(t){function n(){for(var n,o=arguments.length,e=new Array(o),r=0;r<o;r++)e[r]=arguments[r];return(n=t.call.apply(t,[this].concat(e))||this).buttonText="",n.loading=null,n}p(n,t);var o=n.prototype;return o.oncreate=function(){this.buttonText=app.translator.trans("d-damien-contact-request.forum.send")},o.onclick=function(){var t=this;null===this.loading&&(this.loading=!0,app.request({method:"POST",url:"/u/"+this.attrs.userId+"/contact-request"}).then((function(n){t.buttonText=app.translator.trans("d-damien-contact-request.forum.sent"),t.loading=!1,m.redraw()})))},o.getButtonContent=function(t){var n=this;return[b()("fas fa-paper-plane",{className:"Button-icon"}),t&&m("span",{onclick:function(t){return n.onclick()},className:"Button-label"},this.buttonText),this.loading&&m(g(),{size:"small",display:"inline"})]},n}(y());e().initializers.add("d-damien/contact-request",(function(t){e().notificationComponents.contactRequestSent=l,(0,r.extend)(s().prototype,"notificationTypes",(function(t){t.add("contactRequestSent",{name:"contactRequestSent",icon:"fas fa-paper-plane",label:e().translator.trans("d-damien-contact-request.forum.settings.notify_sent")})})),(0,r.extend)(c().prototype,"navItems",(function(t){e().session.user.id()!==this.user.id()&&t.add("contact-request",m(q,{userId:this.user.id()}))}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map