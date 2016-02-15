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

	var conCat = stringGrub[ranCho1] + "-" + ranInt + " - [" + stateGrub[ranCho2] + "... ]";

	$('#window_id').text(conCat);

	$('.windows').hover(function() {
		$('#qbox').show();
		$('#qbox').empty();
		$('#qbox').append("<h4>Requirements</h4><ul><li>Windows Vista or above</li><li>At least 1 core CPU</li><li>At least 2 GB of RAM</li><li>At least 100 GB of diskspace</li><li>An internet connection (DSL or better)</li></ul>	");
	});

	$('.github').hover(function() {
		$('#qbox').show();
		$('#qbox').empty();
		$('#qbox').append("<h4>See how it's done!</h4><p>We're a bunch of lazy bastards with computers, so we let the power of programming take care of fetching and compiling the best hardware for you. If you want to know how we did things and want to contribute check out our GitHub repo.</p>	");	
	});

	$('.doc').hover(function() {
		$('#qbox').hide();
	});
});