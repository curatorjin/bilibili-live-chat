(function(e){function t(t){for(var r,u,a=t[0],i=t[1],l=t[2],f=0,p=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={index:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var b=i;c.push([0,"chunk-common","chunk-index-vendors"]),n()})({0:function(e,t,n){e.exports=n("df31")},"4e17":function(e,t,n){"use strict";n("e406")},df31:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("7a23"),o={id:"panel",class:"panel panel-default"},c=Object(r["g"])("div",{class:"panel-heading"},[Object(r["g"])("h2",{class:"panel-title",style:{"font-size":"30px",display:"inline-block","margin-right":"10px"}},"Bilibili Live Chat"),Object(r["g"])("iframe",{src:"https://ghbtns.com/github-btn.html?user=Tsuk1ko&repo=bilibili-live-chat&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px",style:{"vertical-align":"bottom"}})],-1),u={class:"panel-body"},a={class:"input-group-btn"},i=["disabled"],l=["value"],b=Object(r["g"])("a",{href:"https://github.com/Tsuk1ko/bilibili-live-chat#直接跨域",target:"_blank"},"查看说明",-1),f=["value"],p=Object(r["g"])("a",{href:"https://github.com/Tsuk1ko/bilibili-live-chat#显示头像",target:"_blank"},"查看说明",-1),s=["value"];function d(e,t,n,d,O,j){var m=Object(r["y"])("input-group");return Object(r["q"])(),Object(r["f"])("div",o,[c,Object(r["g"])("div",u,[Object(r["i"])(m,{header:"直播间号"},{default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("input",{class:"form-control",type:"number",min:"0",step:"1",placeholder:"必填，支持短号","onUpdate:modelValue":t[0]||(t[0]=function(e){return d.form.room=e})},null,512),[[r["D"],d.form.room,void 0,{number:!0}]]),Object(r["g"])("span",a,[Object(r["g"])("button",{class:"btn btn-primary",type:"button",disabled:!d.form.room,onClick:t[1]||(t[1]=function(){return d.goLive&&d.goLive.apply(d,arguments)})},"Go!",8,i)])]})),_:1}),Object(r["i"])(m,{header:"直接跨域"},{footer:Object(r["F"])((function(){return[b]})),default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("select",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return d.form.cors=e})},[(Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(d.options.cors,(function(e){var t=e.value,n=e.text;return Object(r["q"])(),Object(r["f"])("option",{key:t,value:t},Object(r["z"])(n),9,l)})),128))],512),[[r["C"],d.form.cors]])]})),_:1}),Object(r["i"])(m,{header:"显示头像"},{footer:Object(r["F"])((function(){return[p]})),default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("select",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return d.form.face=e})},[(Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(d.options.face,(function(e){var t=e.value,n=e.text;return Object(r["q"])(),Object(r["f"])("option",{key:t,value:t},Object(r["z"])(n),9,f)})),128))],512),[[r["C"],d.form.face]])]})),_:1}),Object(r["i"])(m,{header:"头像缓存",footer:"天"},{default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("input",{class:"form-control",type:"number",min:"0",step:"1",placeholder:"选填，头像 URL 缓存的时间，默认为 7 天","onUpdate:modelValue":t[4]||(t[4]=function(e){return d.form.faceExpireDay=e})},null,512),[[r["D"],d.form.faceExpireDay,void 0,{number:!0}]])]})),_:1}),Object(r["i"])(m,{header:"弹幕排列"},{default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("select",{class:"form-control","onUpdate:modelValue":t[5]||(t[5]=function(e){return d.form.display=e})},[(Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["w"])(d.options.display,(function(e){var t=e.value,n=e.text;return Object(r["q"])(),Object(r["f"])("option",{key:t,value:t},Object(r["z"])(n),9,s)})),128))],512),[[r["C"],d.form.display]])]})),_:1}),Object(r["i"])(m,{header:"弹幕停留",footer:"毫秒"},{default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("input",{class:"form-control",type:"number",min:"0",step:"1",placeholder:"选填，弹幕过这么久后会被隐藏，仅弹幕排列为“自底部”时有效","onUpdate:modelValue":t[6]||(t[6]=function(e){return d.form.stay=e})},null,512),[[r["D"],d.form.stay,void 0,{number:!0}]])]})),_:1}),Object(r["i"])(m,{header:"频率限制",footer:"条/秒"},{default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("input",{type:"number",min:"1",step:"1",class:"form-control",placeholder:"选填，限制弹幕频率（不包括礼物），若超出频率则会随机丢弃弹幕","onUpdate:modelValue":t[7]||(t[7]=function(e){return d.form.limit=e})},null,512),[[r["D"],d.form.limit,void 0,{number:!0}]])]})),_:1}),Object(r["i"])(m,{header:"礼物合并",footer:"毫秒"},{default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("input",{class:"form-control",type:"number",min:"0",step:"1",placeholder:"选填，合并统计的等待时间，不知道填多少可填 5000","onUpdate:modelValue":t[8]||(t[8]=function(e){return d.form.giftComb=e})},null,512),[[r["D"],d.form.giftComb,void 0,{number:!0}]])]})),_:1}),Object(r["i"])(m,{header:"礼物置顶",footer:"条"},{default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("input",{class:"form-control",type:"number",min:"0",step:"1",placeholder:"选填，可将礼物置顶，与弹幕分开展示，此项相当于设置礼物区域的高度","onUpdate:modelValue":t[9]||(t[9]=function(e){return d.form.giftPin=e})},null,512),[[r["D"],d.form.giftPin,void 0,{number:!0}]])]})),_:1}),Object(r["i"])(m,{header:"弹幕延迟",footer:"秒"},{default:Object(r["F"])((function(){return[Object(r["G"])(Object(r["g"])("input",{class:"form-control",type:"number",min:"0",step:"1",placeholder:"选填，收到弹幕后延迟这么久才会显示","onUpdate:modelValue":t[10]||(t[10]=function(e){return d.form.delay=e})},null,512),[[r["D"],d.form.delay,void 0,{number:!0}]])]})),_:1})])])}n("4de4"),n("4160"),n("d81d"),n("4fad"),n("b64b"),n("159b");var O=n("3835"),j=n("5530"),m=n("2593"),g=n.n(m),h=n("3bb8"),v=n.n(h),y={class:"input-group"},k={class:"input-group-addon"},x={key:0,class:"input-group-addon bl-0"},_={key:1,class:"input-group-addon bl-0"};function w(e,t,n,o,c,u){return Object(r["q"])(),Object(r["f"])("div",y,[Object(r["g"])("span",k,Object(r["z"])(n.header),1),Object(r["x"])(e.$slots,"default"),n.footer?(Object(r["q"])(),Object(r["f"])("span",x,Object(r["z"])(n.footer),1)):e.$slots.footer?(Object(r["q"])(),Object(r["f"])("span",_,[Object(r["x"])(e.$slots,"footer")])):Object(r["e"])("",!0)])}var F={props:{header:String,footer:String}};F.render=w;var G=F,U=n("5d2d"),q=n("f6cc"),V=n("b383"),D={components:{InputGroup:G},setup:function(){var e=Object(r["t"])(Object(j["a"])(Object(j["a"])({},q["a"]),Object(U["a"])("setting",{})));q["b"].forEach((function(t){Object(r["E"])((function(){"number"===typeof e[t]&&(e[t]=Math.max(Math.floor(e[t]),0))}))}));var t=Object(r["b"])((function(){return g()(v()(Object.entries(e).filter((function(e){var t=Object(O["a"])(e,2),n=t[0],o=t[1],c=Object(r["B"])(o);return c&&c!==q["a"][n]})).map((function(e){var t=Object(O["a"])(e,2),n=t[0],o=t[1];return[n,Object(r["B"])(o)]}))),Object.keys(q["a"]))}));return Object(r["E"])((function(){Object(U["b"])("setting",t.value)})),{form:e,goLive:function(){return window.location.href="live.html#".concat(Object(V["stringify"])(t.value))},options:Object(r["u"])(q["e"])}}};n("4e17");D.render=d;var P=D;Object(r["c"])(P).mount("#app")},e406:function(e,t,n){}});