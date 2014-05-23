$(function() {
	$('.emaillist').on('submit', function(e) {
		e.preventDefault();
		//var data = $('.emaillist').serialize();
		var comment = $('.comments').val();
		var email = $('.searchbox').val();
		
		if(comment==''&&email=='') {
			$('.errors').text('Please fill out at least one field.');
		}
		else {
		$.ajax({
			url: "https://docs.google.com/forms/d/1FRuM1h2mQyh1LLcT7_bnQ3SmoqfPN4uucZPvsr9TNR0/formResponse",
			//data: data,
			data: {"entry.428211031" : comment, "entry.1502143306" : email},
			type: "POST",
			dataType: "xml",
			success: function(){
				$('.container-search').hide();
				$('.errors').hide();
				$('.notice').text('Thank You!');
			},
			error: function(){
				//Cross domain problems, currently accept all entries
				//$('.errors').text('Uh oh! Something went wrong. Please try again later.');
				$('.container-search').hide();
				$('.errors').hide();
				$('.notice').text('Thank You!');
			}
		});
		}
		
		/*
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
		*/
		
	});
});

$(function() {
	$('.fbdirect').mouseover(function() {
		$('.shareinfo').children('h4').text('Share to Facebook!');
	}).mouseout(function() {
		$('.shareinfo').children('h4').text('');
	});
	
	$('.fblike').mouseover(function() {
		$('.shareinfo').children('h4').text('Like us on Facebook!');
	}).mouseout(function() {
		$('.shareinfo').children('h4').text('');
	});
	
	$('.twitter').mouseover(function() {
		$('.shareinfo').children('h4').text('Tweet about us!');
	}).mouseout(function() {
		$('.shareinfo').children('h4').text('');
	});
	
	$('.linkedin').mouseover(function() {
		$('.shareinfo').children('h4').text('Share to LinkedIn!');
	}).mouseout(function() {
		$('.shareinfo').children('h4').text('');
	});
	
	$('.tumblr').mouseover(function() {
		$('.shareinfo').children('h4').text('Share to Tumblr!');
	}).mouseout(function() {
		$('.shareinfo').children('h4').text('');
	});
	
	$('.googleplus').mouseover(function() {
		$('.shareinfo').children('h4').text('Share to Google+!');
	}).mouseout(function() {
		$('.shareinfo').children('h4').text('');
	});
	
	$('.pinterest').mouseover(function() {
		$('.shareinfo').children('h4').text('Pin It on Pinterest!');
	}).mouseout(function() {
		$('.shareinfo').children('h4').text('');
	});
	
	$('.reddit').mouseover(function() {
		$('.shareinfo').children('h4').text('Find us on Reddit!');
	}).mouseout(function() {
		$('.shareinfo').children('h4').text('');
	});
});

onload=function(){
	$('.comments').on('keyup',function() {
		$(this).height(0);
		$(this).height(this.scrollHeight);
	});
};
	
/*
onload=function(){
    var text=document.getElementsByName('entry.428211031')[0];
    
    text.onkeyup=function(){
    	
        if(text.scrollTop) 
        	while(text.scrollTop)
        		text.rows=parseInt(text.rows)+1;
        	
        if(text.value=='')
        	text.rows=3;
    };
};
*/
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