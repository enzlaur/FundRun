/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
 
$(document).ready(function(){ 
                var bodyheight = $(window).height();
                $(".windowheight").css('min-height', bodyheight);
                $(window).resize(function(){
                var bodyheight = $(window).height();
                $(".windowheight").css('min-height', bodyheight);
                }); 
            });

		/*  
		ENTRANCES
		*/
		 
	
      
    $(window).scroll(function() {
              $('#bigEntrance').each(function(){
                  var imagePos = $(this).offset().top;
                  var topOfWindow = $(window).scrollTop();
                  if (imagePos < topOfWindow+400) { 
				    $(this).addClass("bigEntrance");
                  }
              });
           }); 
$(window).scroll(function() {
              $('.slideOpen').each(function(){
                  var imagePos = $(this).offset().top;
                  var topOfWindow = $(window).scrollTop();
                  if (imagePos < topOfWindow+200) {
				    $(this).addClass("slideOpen");
                  }
              });
           }); 

function clonePack()
{
    var dest   = document.getElementById("dest");
    var source = document.getElementById("copyMe");
    var target = source.cloneNode(true);
    dest.appendChild(target);
}





