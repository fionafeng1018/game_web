// JavaScript Document

"use strict";


$(function () {

	var weapon_intro_imgs = ["assault rifles.jpg", "melee weapons.jpg", "miscellaneous weapons.jpg", "pistols.jpg", "shotguns.jpg", "sniper rifles.jpeg", "submachine guns.jpg", "throwable weapons.jpg"];
	var armor_intro_imgs = ["防具-armored vests.jpg", "防具-back.jpg", "防具-headgear.jpg"];
	var supplies_intro_imgs =["消耗品-ammunition.jpg","消耗品-supplies.jpg"];

	$(".gbox").click(function () {
		$("#weapon_intro_img").attr("src", "images/weapon/" + weapon_intro_imgs[this.id]);
	});

	$(".gbox").hover(function () {
		$(this).css("width", "180px");
	}, function () {
		$(this).css("width", "120px");
	});

	$(".gbox2").click(function () {
		$("#armor_intro_img").attr("src", "images/armor/" + armor_intro_imgs[this.id - 8]);
	});

	$(".gbox2").hover(function () {
		$(this).css("width", "180px");
	}, function () {
		$(this).css("width", "120px");
	});
	
	$(".gbox3").click(function () {
		$("#supplies_intro_img").attr("src", "images/supplies/" + supplies_intro_imgs[this.id - 11]);
	});

	$(".gbox3").hover(function () {
		$(this).css("width", "180px");
	}, function () {
		$(this).css("width", "120px");
	});
});
