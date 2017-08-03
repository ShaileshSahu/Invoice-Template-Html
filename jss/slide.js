//Specify the slider's width (in pixels)
var sliderwidth="100%"
//Specify the slider's height
var sliderheight="53px"
//Specify the slider's slide speed (larger is faster 1-10)
var slidespeed=1
//configure background color:
slidebgcolor="" 
//Specify the slider's images 
var leftrightslide=new Array()
var finalslide=''
leftrightslide[0]='<a href="#"><img src="http://www.industowers.com/images/airtel.jpg" border=0  /></a>'
leftrightslide[1]='<a href="#"><img src="http://www.industowers.com/images/vodafone.jpg" border=0 /></a>'
leftrightslide[2]='<a href="#"><img src="http://www.industowers.com/images/idea.jpg" border=0 /></a>'
leftrightslide[3]='<a href="#"><img src="http://www.industowers.com/images/aricel.jpg" border=0 /></a>'
leftrightslide[4]='<a href="#"><img src="http://www.industowers.com/images/tata_tele1.jpg" border=0 /></a>'
leftrightslide[5]='<a href="#"><img src="http://www.industowers.com/images/uninor.jpg" border=0 /></a>'
leftrightslide[6]='<a href="#"><img src="http://www.industowers.com/images/jio_small.jpg" border=0 /></a>'
leftrightslide[7]='<a href="#"><img src="http://www.industowers.com/images/reliance.jpg" border=0 /></a>'
leftrightslide[8]='<a href="#"><img src="http://www.industowers.com/images/videocon.jpg" border=0 /></a>'
//leftrightslide[8]='<a href=""><img src="http://www.industowers.com/images/etisalate.jpg" border=0 /></a>'
leftrightslide[9]='<a href="#"><img src="http://www.industowers.com/images/bsnl.jpg" border=0 /></a>'
leftrightslide[10]='<a href="#"><img src="http://www.industowers.com/images/mtc.jpg" border=0 /></a>'
leftrightslide[11]='<a href="#"><img src="http://www.industowers.com/images/mtnl.jpg" border=0 /></a>'
//leftrightslide[12]='<a href=""><img src="http://www.industowers.com/images/loop.jpg" border=0 /></a>'
leftrightslide[13]='<a href="#"><img src="http://www.industowers.com/images/iso_certificate_new.jpg" border=0 /></a>'
//Specify gap between each image (use HTML):
var imagegap="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
//Specify pixels gap between each slideshow rotation (use integer):
var slideshowgap=50
////NO NEED TO EDIT BELOW THIS LINE//////////// 
var copyspeed=slidespeed
leftrightslide='<nobr>'+leftrightslide.join(imagegap)+'</nobr>'
var iedom=document.all||document.getElementById
if (iedom)
document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-9000px">'+leftrightslide+'</span>')
var actualwidth=''
var cross_slide, ns_slide
 
function fillup(){
if (iedom){
cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2
cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3
cross_slide.innerHTML=cross_slide2.innerHTML=leftrightslide
actualwidth=document.all? cross_slide.offsetWidth : document.getElementById("temp").offsetWidth
cross_slide2.style.left=actualwidth+slideshowgap+"px"
}
else if (document.layers){
ns_slide=document.ns_slidemenu.document.ns_slidemenu2
ns_slide2=document.ns_slidemenu.document.ns_slidemenu3
ns_slide.document.write(leftrightslide)
ns_slide.document.close()
actualwidth=ns_slide.document.width
ns_slide2.left=actualwidth+slideshowgap
ns_slide2.document.write(leftrightslide)
ns_slide2.document.close()
}
lefttime=setInterval("slideleft()",30)
}
window.onload=fillup
 
function slideleft(){
if (iedom){
if (parseInt(cross_slide.style.left)>(actualwidth*(-1)+8))
cross_slide.style.left=parseInt(cross_slide.style.left)-copyspeed+"px"
else
cross_slide.style.left=parseInt(cross_slide2.style.left)+actualwidth+slideshowgap+"px"
 
if (parseInt(cross_slide2.style.left)>(actualwidth*(-1)+8))
cross_slide2.style.left=parseInt(cross_slide2.style.left)-copyspeed+"px"
else
cross_slide2.style.left=parseInt(cross_slide.style.left)+actualwidth+slideshowgap+"px"
 
}
else if (document.layers){
if (ns_slide.left>(actualwidth*(-1)+8))
ns_slide.left-=copyspeed
else
ns_slide.left=ns_slide2.left+actualwidth+slideshowgap
 
if (ns_slide2.left>(actualwidth*(-1)+8))
ns_slide2.left-=copyspeed
else
ns_slide2.left=ns_slide.left+actualwidth+slideshowgap
}
}
 
 
if (iedom||document.layers){
with (document){
document.write('<table border="0" cellspacing="0" cellpadding="0" width="100%"><td>')
if (iedom){
write('<div style="position:relative;width:'+sliderwidth+';height:'+sliderheight+';overflow:hidden">')
write('<div style="position:absolute;width:'+sliderwidth+';height:'+sliderheight+';background-color:'+slidebgcolor+'" onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed">')
write('<div id="test2" style="position:absolute;left:0px;top:0px"></div>')
write('<div id="test3" style="position:absolute;left:-1000px;top:0px"></div>')
write('</div></div>')
}
else if (document.layers){
write('<ilayer width='+sliderwidth+' height='+sliderheight+' name="ns_slidemenu" bgColor='+slidebgcolor+'>')
write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('</ilayer>')
}
document.write('</td></table>');
}
}
 $(document).ready(function() {
    setInterval('swapImages()', 5000);
  });

  function swapImages(){
  var active = $('#swap_img_container .active');
  var next = ($('#swap_img_container .active').next().length > 0) ? $('#swap_img_container .active').next() : $('#swap_img_container img:first');
  active.fadeOut(function(){
    active.removeClass('active');
    next.fadeIn().addClass('active');
  });
}

$(document).ready(function(){	
	var headerh	=	$('.header').offset().top;
	$(window).scroll(function(){		
		var scrolling	=	$(window).scrollTop();		
		if(scrolling >= headerh){
			$('.header').addClass('fix_top');
		}else if(scrolling <= headerh){
			$('.header').removeClass('fix_top');
		}
	});
});
