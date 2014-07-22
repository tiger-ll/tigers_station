
$(document).ready(function(){
$('.eff').mouseenter(function(){$(this).animate({backgroundColor: '#E4D8B8'})
});
$('.eff').mouseleave(function(){$(this).animate({backgroundColor: 'white'})
 
});

$('.active').change(function(){alert($(".active").attr("data-slide-to"));
});

$('.navbar-toggle').mouseenter(function(){$('.icon-bar').animate({backgroundColor: '#E4D8B8'})
});

$('.navbar-toggle').mouseleave(function(){$('.icon-bar').animate({backgroundColor: 'black'})
});

});
// JavaScript Document*/