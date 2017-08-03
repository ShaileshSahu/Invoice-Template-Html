

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
}



$(window).on("scroll",function(e)
			{
	
	
	
	var x = window.pageYOffset;

	if(x>219)
		{
			$(".navbar").css("boxShadow","0px 2px 8px rgba(0,0,0,.4)");
        }
	
	else{
		$(".navbar").css("boxShadow","0px 0px 0px");
	}
}
			
			);






