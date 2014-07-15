
$(document).ready(function(){
$('.eff').mouseenter(function(){$(this).animate({backgroundColor: '#E4D8B8'})
});
$('.eff').mouseleave(function(){$(this).animate({backgroundColor: 'transparent'})
 
});

$('.active').change(function(){alert($(".active").attr("data-slide-to"));
});

});
// JavaScript Document*/