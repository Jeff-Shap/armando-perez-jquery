

var main = function() {
  
  $('.nav li').click(function() {
    
    var category = $(this).attr('class');
		$('.nav li').removeClass('active');
		$('.thumbnail').removeClass('selected');
		$(this).addClass('active');
    
    if (category==='nav-consumer') {
    	console.log('nav-consumer clicked');
    		$('.consumer').addClass('selected');
    }else if(category==='nav-mobile') {
    	console.log('nav-mobile clicked');
    		$('.mobile').addClass('selected');
    }else if(category==="nav-commerce") {
    	console.log('nav-commerce clicked');
    		$('.commerce').addClass('selected');
    }else if(category==="nav-enterprise") {
    	console.log('nav-enterprise clicked');
    		$('.enterprise').addClass('selected');
    }

  });

};
 
$(document).ready(main);