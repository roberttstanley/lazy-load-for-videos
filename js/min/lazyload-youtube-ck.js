var $lly=jQuery.noConflict(),classBranding="lazyload-info-icon",classBrandingDot="."+classBranding,$lly_o,setOptionsYoutube=function(l){$lly_o=$lly.extend({theme:"dark",colour:"red",controls:!0,relations:!0,playlist:"",videoseo:!1},l)};$lly(document).ready(function(){var l=function(){$lly("a.lazy-load-youtube").each(function(l){var t=this,e=$lly(this).attr("href").split("/embed/")[1];e||(e=$lly(this).attr("href").split("://youtu.be/")[1]),e||(e=$lly(this).attr("href").split("v=")[1].replace(/\&/,"?"));var i=e.split("?")[0].split("#")[0],o=e.match(/[#&]t=(\d+)s/);o?o=o[1]:(o=e.match(/[#&]t=(\d+)m(\d+)s/),o?o=60*parseInt(o[1])+parseInt(o[2]):(o=e.match(/[?&]start=(\d+)/),o&&(o=o[1])));var a="//i2.ytimg.com/vi/"+i+"/0.jpg",s="//www.youtube.com/embed/"+e,r=function(){return'<a class="'+classBranding+'" href="http://kevinw.de/lazyloadvideos" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>'},n=function(){var l=$lly(t),e=$lly(r());l.before(e)};n();var y=function(){return void 0!==$lly(t).attr("video-title")?$lly(t).attr("video-title"):""!==$lly(this).html()&&void 0!==$lly(this).html()?$lly(this).html():""},c=function(l){return"//www.youtube.com/watch?v="+l};e=e.split("#")[0],o&&-1===e.indexOf("start=")&&(e+=(-1===e.indexOf("?")?"?":"&")+"start="+o);var d="";$lly_o.videoseo===!0&&(d=' itemprop="name"'),$lly(this).html(-1!==e.indexOf("showinfo=0")?"":'<div class="lazy-load-youtube-info"><span class="titletext youtube"'+d+">"+y()+"</span></div>"),$lly(this).prepend('<div style="height:'+(parseInt($lly(this).css("height"))-4)+"px;width:"+(parseInt($lly(this).css("width"))-4)+'px;" class="lazy-load-youtube-div"></div>'),$lly(this).css("background","#000 url("+a+") center center no-repeat"),$lly_o.videoseo===!0&&($lly(this).append('<meta itemprop="contentLocation" content="'+c(i)+'" />'),$lly(this).append('<meta itemprop="embedUrl" content="'+s+'" />'),$lly(this).append('<meta itemprop="thumbnail" content="'+a+'" />')),$lly(this).attr("id",i+l),$lly(this).attr("href",c(i)+(o?"#t="+o+"s":""));var h="";$lly_o.theme!==h&&void 0!==$lly_o.theme&&"dark"!==$lly_o.theme&&(h="&theme="+$lly_o.theme);var p="";$lly_o.colour!==p&&void 0!==$lly_o.colour&&"red"!==$lly_o.colour&&(p="&color="+$lly_o.colour);var u="";$lly_o.relations||(u="&rel=0");var v="";$lly_o.controls||(v="&controls=0");var m="";$lly_o.playlist!==m&&void 0!==$lly_o.playlist&&(m="&playlist="+$lly_o.playlist),s+=(-1===s.indexOf("?")?"?":"&")+"autoplay=1"+h+p+v+u+m;var f='<iframe width="'+parseInt($lly(this).css("width"))+'" height="'+parseInt($lly(this).css("height"))+'" style="vertical-align:top;" src="'+s+'" frameborder="0" allowfullscreen></iframe>';$lly(this).on("click",function(){return $lly(this).prev(classBrandingDot).remove(),$lly("#"+i+l).replaceWith(f),!1})})};$lly(document).ready(l()).ajaxStop(function(){l()});var t=function(){$lly_o.displayBranding!==!1&&$lly(classBrandingDot).css({display:"block",visibility:"visible"})};t()});