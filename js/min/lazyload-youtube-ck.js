var $lly=jQuery.noConflict(),classPreviewYoutube="preview-youtube",classBranding="lazyload-info-icon",classBrandingDot="."+classBranding,videoratio=.5625,$lly_o,setOptionsYoutube=function(t){$lly_o=$lly.extend({theme:"dark",colour:"red",controls:!0,relations:!0,playlist:"",videoseo:!1,responsive:!0},t)};$lly(document).ready(function(){var t=function(){$lly("a.lazy-load-youtube").each(function(t){var l=this,i=$lly(this).attr("href").split("/embed/")[1];i||(i=$lly(this).attr("href").split("://youtu.be/")[1]),i||(i=$lly(this).attr("href").split("v=")[1].replace(/\&/,"?"));var o=i.split("?")[0].split("#")[0],a=i.match(/[#&]t=(\d+)s/);a?a=a[1]:(a=i.match(/[#&]t=(\d+)m(\d+)s/),a?a=60*parseInt(a[1])+parseInt(a[2]):(a=i.match(/[?&]start=(\d+)/),a&&(a=a[1])));var n="//i2.ytimg.com/vi/"+o+"/0.jpg",r="//www.youtube.com/embed/"+i,s=function(){return'<a class="'+classBranding+'" href="http://kevinw.de/lazyloadvideos" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>'},y=function(){if($lly_o.displayBranding!==!1){var t=$lly(l),e=$lly(s());t.before(e)}};y();var d=function(){return void 0!==$lly(l).attr("video-title")?$lly(l).attr("video-title"):""!==$lly(this).html()&&void 0!==$lly(this).html()?$lly(this).html():""},c=function(t){return"//www.youtube.com/watch?v="+t},p=function(){},u=function(t){var l=parseInt(t.css("width"))-4;return l},h=function(t){var l=0;if($lly_o.responsive===!1)l=parseInt(t.css("height"))-4;else{var e=u(t);l=Math.round(e*videoratio)}return l};i=i.split("#")[0],a&&-1===i.indexOf("start=")&&(i+=(-1===i.indexOf("?")?"?":"&")+"start="+a);var v="";$lly_o.videoseo===!0&&(v=' itemprop="name"'),$lly(this).html(-1!==i.indexOf("showinfo=0")?"":'<div class="lazy-load-youtube-info"><span class="titletext youtube"'+v+">"+d()+"</span></div>"),$lly(this).prepend('<div style="height:'+h($lly(this))+"px;width:"+u($lly(this))+'px;" class="lazy-load-youtube-div"></div>'),$lly(this).css("background","#000 url("+n+") center center no-repeat"),$lly_o.videoseo===!0&&($lly(l).append('<meta itemprop="contentLocation" content="'+c(o)+'" />'),$lly(l).append('<meta itemprop="embedUrl" content="'+r+'" />'),$lly(this).append('<meta itemprop="thumbnail" content="'+n+'" />'),$lly.getJSON("http://gdata.youtube.com/feeds/api/videos/"+o+"?v=2&alt=jsonc&callback=?",function(t){$lly(l).append('<meta itemprop="datePublished" content="'+t.data.uploaded+'" />'),$lly(l).append('<meta itemprop="duration" content="'+t.data.duration+'" />'),$lly(l).append('<meta itemprop="aggregateRating" content="'+t.data.rating+'" />')})),$lly(this).attr("id",o+t),$lly(this).attr("href",c(o)+(a?"#t="+a+"s":""));var f="";$lly_o.theme!==f&&void 0!==$lly_o.theme&&"dark"!==$lly_o.theme&&(f="&theme="+$lly_o.theme);var m="";$lly_o.colour!==m&&void 0!==$lly_o.colour&&"red"!==$lly_o.colour&&(m="&color="+$lly_o.colour);var g="";$lly_o.relations||(g="&rel=0");var b="";$lly_o.controls||(b="&controls=0");var w="";$lly_o.playlist!==w&&void 0!==$lly_o.playlist&&(w="&playlist="+$lly_o.playlist),r+=(-1===r.indexOf("?")?"?":"&")+"autoplay=1"+f+m+b+g+w;var _='<iframe width="'+parseInt($lly(this).css("width"))+'" height="'+parseInt($lly(this).css("height"))+'" style="vertical-align:top;" src="'+r+'" frameborder="0" allowfullscreen></iframe>';$lly(this).on("click",function(){return z(this),x(this),$lly("#"+o+t).replaceWith(_),"function"==typeof e.resize&&$lly_o.responsive===!0&&e.resize(),!1});var z=function(t){$lly(t).removeClass(classPreviewYoutube)},x=function(t){$lly(t).prev(classBrandingDot).remove()}})};$lly(document).ready(t()).ajaxStop(function(){t()});var l=function(){$lly_o.displayBranding!==!1&&$lly(classBrandingDot).css({display:"block",visibility:"visible"})};l();var e={config:{container:$lly(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(t){e.config.container.length>0&&$lly(window).on("resize load",e.resize)},resize:function(){$lly(e.config.selector,e.config.container).each(function(){var t=$lly(this),l=t.parent().width(),e=Math.round(l*videoratio);t.attr("height",e),t.attr("width",l),t.css({height:e,width:l})})}};"function"==typeof e.init&&$lly_o.responsive===!0&&e.init()});