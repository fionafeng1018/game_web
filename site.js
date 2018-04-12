// JavaScript Document




$(function(){
	
	var weapon_intro_imgs =["assault rifles.jpg","melee weapons.jpg","miscellaneous weapons.jpg","pistols.jpg","shotguns.jpg","sniper rifles.jpeg","submachine guns.jpg","throwable weapons.jpg"];
	
   $(".gbox").click(function(){
	    $("#weapon_intro_img").attr("src","images/weapon/"+weapon_intro_imgs[this.id]);

   });
	
	$(".gbox").hover(function(){
		$(this).css("width","200px");
	}, function(){
		$(this).css("width","120px");
	}
					);
	
	

});
