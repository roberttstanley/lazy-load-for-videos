var $lly=jQuery.noConflict();!function(t,$,e){var i="preview-youtube",n="lazyload-info-icon",o="."+n,a=.5625,r="";t.init=function(t){l(t),$(document).ready(c()).ajaxStop(function(){c()}),"function"==typeof d.init&&s.responsive===!0&&d.init()};var s,l=function(t){s=$.extend({theme:"dark",colour:"red",controls:!0,relations:!0,buttonstyle:"",preroll:"",postroll:"",videoseo:!1,responsive:!0,thumbnailquality:"0"},t)},c=function(){$("a.lazy-load-youtube").each(function(t){var l=this,c=$(this).attr("href").split("/embed/")[1];c||(c=$(this).attr("href").split("://youtu.be/")[1]),c||(c=$(this).attr("href").split("v=")[1].replace(/\&/,"?"));var u=function(){return c.split("?")[0].split("#")[0]},p=u(),h=function(){var t="";return s.preroll!==t&&s.preroll!==e?s.preroll:u()},v=h(),f=c.match(/[#&]t=(\d+)s/);f?f=f[1]:(f=c.match(/[#&]t=(\d+)m(\d+)s/),f?f=60*parseInt(f[1])+parseInt(f[2]):(f=c.match(/[?&]start=(\d+)/),f&&(f=f[1])));var m="//www.youtube.com/embed/"+h(),y=function(){return'<a class="'+n+'" href="http://kevinw.de/lazy-load-videos/" title="Lazy Load for Videos by Kevin Weber" target="_blank">i</a>'},b=function(){if(s.displayBranding!==!1){var t=$(l),e=$(y());t.before(e)}};b();var w=function(){return $(l).attr("video-title")!==e?$(l).attr("video-title"):""!==$(this).html()&&$(this).html()!==e?$(this).html():""},g=function(t){return"//www.youtube.com/watch?v="+t},z=function(t){var e=parseInt(t.css("width"))-4;return e},x=function(t){var e=0;if(s.responsive===!1)e=parseInt(t.css("height"))-4;else{var i=z(t);e=Math.round(i*a)}return e};c=c.split("#")[0],f&&-1===c.indexOf("start=")&&(c+=(-1===c.indexOf("?")?"?":"&")+"start="+f);var k="";s.videoseo===!0&&(k=' itemprop="name"'),$(this).html(-1!==c.indexOf("showinfo=0")?"":'<div class="lazy-load-youtube-info"><span class="titletext youtube"'+k+">"+w()+"</span></div>"),$(this).prepend('<div style="height:'+x($(this))+"px;width:"+z($(this))+'px;" class="lazy-load-youtube-div"></div>').addClass(s.buttonstyle);var I=function(t){var e="//i2.ytimg.com/vi/"+t+"/"+s.thumbnailquality+".jpg";r=e};I(p);var j=function(){return r};$(this).css("background","#000 url("+j()+") center center no-repeat"),s.videoseo===!0&&($(l).append('<meta itemprop="contentLocation" content="'+g(p)+'" />'),$(l).append('<meta itemprop="embedUrl" content="'+m+'" />'),$(this).append('<meta itemprop="thumbnail" content="'+j()+'" />'),$.getJSON("http://gdata.youtube.com/feeds/api/videos/"+p+"?v=2&alt=jsonc&callback=?",function(t){$(l).append('<meta itemprop="datePublished" content="'+t.data.uploaded+'" />'),$(l).append('<meta itemprop="duration" content="'+t.data.duration+'" />'),$(l).append('<meta itemprop="aggregateRating" content="'+t.data.rating+'" />')})),$(this).attr("id",p+t),$(this).attr("href",g(p)+(f?"#t="+f+"s":""));var O="";s.theme!==O&&s.theme!==e&&"dark"!==s.theme&&(O="&theme="+s.theme);var _="";s.colour!==_&&s.colour!==e&&"red"!==s.colour&&(_="&color="+s.colour);var C="";s.relations||(C="&rel=0");var L="";s.controls||(L="&controls=0"),v=v!==p?p+",":"";var q="";s.postroll!==q&&s.postroll!==e&&(q=s.postroll);var F="&playlist="+v+q;m+=(-1===m.indexOf("?")?"?":"&")+"autoplay=1"+O+_+L+C+F;var M='<iframe width="'+parseInt($(this).css("width"))+'" height="'+parseInt($(this).css("height"))+'" style="vertical-align:top;" src="'+m+'" frameborder="0" allowfullscreen></iframe>';$(this).on("click",function(){return S(this),W(this),$("#"+p+t).replaceWith(M),"function"==typeof d.resize&&s.responsive===!0&&d.resize(),!1});var S=function(t){$(t).removeClass(i)},W=function(t){$(t).prev(o).remove()}})};$.fn.bindFirst=function(t,e){var i=$(this);i.unbind(t,e),i.bind(t,e);var n=$._data(i[0]).events,o=n[t];o.unshift(o.pop()),n[t]=o};var d={config:{container:$(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){d.config.container.length>0&&($(window).on("resize",d.resize),$(window).bindFirst("load",function(){d.resize()}))},resize:function(){$(d.config.selector,d.config.container).each(function(){var t=$(this),e=t.parent().width(),i=Math.round(e*a);t.attr("height",i),t.attr("width",e),t.css({height:i,width:e})})}}}(window.lazyload_youtube=window.lazyload_youtube||{},$lly);