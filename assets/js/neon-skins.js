// ;(function($,window,undefined)
// {"use strict";$(document).ready(function()
// {var domain=$("body").data('url').replace('http://','').replace('/neon','').replace('themes.','');$(".theme-skins").on('click','li a',function(ev)
// {ev.preventDefault();var $this=$(this);Cookies.set('current-skin',$this.data('skin'),{domain:domain,expires:3600});window.location.href=$this.attr('href');});});})(jQuery,window);