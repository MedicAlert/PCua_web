$(document).ready(function() {
	var stringGrub = 
	[
	"salamin",
	"toy_story_grub",
	"coatesnew_memes",
	"uranimum",
	"papas_in_thehouse",
	"egghead",
	"jizzman",
	"handor_banks",
	"sucal_dankinovic",
	"bushes_baked_steel_beans",
	"im_a_niceguy",
	"parsely",
	"白人看不懂",
	"지즈 남자"
	];

var stateGrub =
	[
	"Executing",
	"Forking",
	"Baking",
	"Littering",
	"Wringing",
	"Chopping",
	"Drowning",
	"Burning",
	"Hacking"
	];

	var ranCho1 = Math.floor(Math.random() * stringGrub.length);
	var ranCho2 = Math.floor(Math.random() * stateGrub.length);
	var ranInt = Math.floor((Math.random()* 9999) + 1000);

	var conCat = stringGrub[ranCho1] + "-" + ranInt + " - [" + stateGrub[ranCho2] + "]";

	$('#window_id').text(conCat);
});