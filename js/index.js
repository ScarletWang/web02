
											$(document).ready(function(e) {	
												$('#apDiv1 img').fadeTo(0,0.5);
												var imgz=1;
												$('#apDiv1 img').hover(
													function(){
														$(this).fadeTo(400,1).css({'transform':'scale(1.5,1.5) rotate(10deg)'})
														.css({'transition':'all 0.4s'})
														.css({'z-index':imgz});imgz+=1;
													},
													function(){
														$(this).fadeTo(400,0.5).css({'transform':'scale(1,1) rotate(0deg)'});
													});
											});

											// -----------------nav-----------------------

											$(function(){
			                                $('nav').hide();
			                        $('#close').hide();

			// $('header img').click(function(){
			// $('nav').slideToggle(800);
			// });
			$('#open').click(function(){
				$('nav').slideDown(800);
				$('#close').show();
				$('#open').hide();
			});

			$('#close').click(function(){
				$('nav').slideUp(800);
				$('#close').hide();
				$('#open').show();

			});

			$('#symptoms').click(function(){
		     $('nav').hide();
		     $('#close').hide();
		     $('#open').show();
			});
			$('#why').click(function(){
		     $('nav').hide();
		     $('#close').hide();
		     $('#open').show();
			});
			$('#resources').click(function(){
		     $('nav').hide();
		     $('#close').hide();
		     $('#open').show();
			});
			$('#action').click(function(){
		     $('nav').hide();
		     $('#close').hide();
		     $('#open').show();
			});
			
			$('.top').click(function(){
				$('html,body').animate({scrollTop:0},1000);
			});
		});
										
