"use strict";function handleImgError(){var r=event.srcElement;r.src="https://cdn.jsdelivr.net/gh/sunchaser-lilu/sunchaser-cdn@master/lilu.org.cn/avatar.png",r.onerror=null}$(function(){$.getJSON("../json/friends.json",function(r){var t=$(".links-content");t.html("");var e=r.filter(function(r){return 0===r.valid});r=r.filter(function(r){return 0!==r.valid}).sort(function(r,e){return.5<Math.random()?-1:1}),t.append("<div class='friend-title-item'><br>大佬们<br><br><hr></div>"),$.each(r,function(r,e){var n="<div class='friend-card-item'>";void 0===e.src?n+="    <img class='ava' src='https://cdn.jsdelivr.net/gh/sunchaser-lilu/sunchaser-cdn@master/lilu.org.cn/avatar.png' alt='友链头像' title='图片链接不可用，使用的默认图片'>":n+='    <img class="ava" src="'+e.src+'" onerror="handleImgError();">',n+="<div class='text-desc' title='"+e.desc+"'>    网址：<a href='"+e.url+"' target='_blank'>"+e.name+"</a>    <br>时间："+e.date+"<br>简介："+e.desc+"</div>    </div>",t.append(n)}),0<e.length&&(t.append("<div class='friend-title-item'><br>异常的大佬们<br><br><hr></div></div>"),$.each(e,function(r,e){var n="<div class='friend-card-item'>";n+="    <img class='ava' src='https://cdn.jsdelivr.net/gh/sunchaser-lilu/sunchaser-cdn@master/lilu.org.cn/avatar.png' alt='友链头像' title='图片链接不可用，使用的默认图片'>",n+="<div class='text-desc' title='"+e.desc+"'>    网址：<a href='"+e.url+"' target='_blank'>"+e.name+"</a>    <br>访问时间："+e.stopTime+"<br>简介："+e.desc+"</div>    </div>",t.append(n)})),t.append("</div>")})});