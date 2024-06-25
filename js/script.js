$(document).ready(function(){
	
	$("#home").css("height", window.innerHeight);
});

$(".card").on("mouseover", function(){
	$(this).removeClass("border-secondary");
	$(this).addClass("border-success");
});

$(".card").on("mouseout", function(){
	$(this).removeClass("border-success");
	$(this).addClass("border-secondary");
});

$("#contact a").on("mouseover", function(){
	$(this).removeClass("text-dark");
	$(this).addClass("text-success");
});

$("#contact a").on("mouseout", function(){
	$(this).removeClass("text-success");
	$(this).addClass("text-secondary");
});

$(document).on("scroll", function(){
	if(window.scrollY > $("#about").offset().top - 100 && window.scrollY < $("#portfolio").offset().top - 100 ){
		$(".nav-item").removeClass("active");
		$("#aboutLink").addClass("active");
	}
	else if(window.scrollY >= $("#portfolio").offset().top - 100 && window.scrollY < $("#certifications").offset().top - 100){
		$(".nav-item").removeClass("active");
		$("#portfolioLink").addClass("active");
	}
	else if(window.scrollY >= $("#certifications").offset().top - 100 && window.scrollY < $("#contact").offset().top - 100){
		$(".nav-item").removeClass("active");
		$("#certLink").addClass("active");
	}
	else if(window.scrollY >= $("#contact").offset().top - 100){
		$(".nav-item").removeClass("active");
		$("#contactLink").addClass("active");
	}
	else{
		$(".nav-item").removeClass("active");
	}
});