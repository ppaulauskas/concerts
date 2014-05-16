$(function() {
	$('.emaillist').on('submit', function(e) {
		e.preventDefault();
		var data = $('.emaillist').serialize();
		
		$.ajax({
			url: "/splash/emailsubmit",
			type: "post",
			data: data,
			success: function(){
			$('.container-search').hide();
			$('.errors').hide();
			$('.notice').text('Thank You! We\'ll let you know when we\'re up and running!');
			},
			error: function(){
			$('.errors').text('Uh oh! Something went wrong. Please try again later.');
			}
		});
		
	});
});

/*
$(document).on('click', '.ajaxsubmit', function(){ 
		var email = $(this).parent().children('.emailer').children('.searchbox').attr('value');
		alert(email);
		
		var values = $('.emaillist').serialize();
		alert(values);
		/*
			$.ajax({
				url: "/bands/remove",
				type: "post",
				data: values,
			});
			
			$.when(
			$('.'+$(this).parent().attr('class').split(' ')[1]).each(function() {
			
				$(this).parent().insertAfter($(this).parent().nextAll('.event-full').last());
			
				//$(this).parent().insertBefore($(this).parent().prevAll('.event-full').first()).hide().slideDown();

 			})
 			).done(function() { fader2(); } )
 			*/
//	});