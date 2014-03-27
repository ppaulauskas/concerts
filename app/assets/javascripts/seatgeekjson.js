function getEvents(start, end) {

	var seatgeekAPI = "http://api.seatgeek.com/2/events?";
	$.getJSON( seatgeekAPI, {
		"lat": "40.757997",
		"lon": "-73.981869",
		"range": "10km",
		"type": "concert",
		"datetime_utc.gte": start,
		"datetime_utc.lte": end,
		"per_page": "1000",
		"sort": "score.desc"
	})
		.done(function( data ) {
			var bands = [];
			$.each(data.events, function(i,event) {
				if (bands.indexOf(event.title) === -1) {
					var id = event.id;
					var title = event.title;
					bands.push(title);
					var price = event.stats.lowest_price;
					var time = new Date(event.datetime_local);
					var performers = [];
					$.each(event.performers, function(j, performer) {
						entry = new Object();
						entry.name = performer.name;
						entry.image = performer.image;
						performers.push(entry);
					});
					var venname = event.venue.name;
					var venid = event.venue.id;
					var perflen = performers.length;
				
					var $template = $("."+start).children('.template');
					var $element = $template.clone().removeClass('template');
					
					// Applies the top band image if it is the first band
					if (i === 0) {
						$template.parent().children('.bandpic').children('.topimg').attr('src',performers[0].image);
					}
					
					// Top Band information
					$element.children('.event-individual').children('.curr-event').children('h4').text(performers[0].name);
					$element.children('.event-individual').addClass(performers[0].name.replace(/[^a-z0-9A-Z]/, ''));
					$element.children('.event-individual').attr('id',price);
					$element.children('.event-individual').children('.mover').attr('name',performers[0].image);
				
					if (perflen > 1) {
						for (k = 0; k < perflen; k++) {
							if (k === 0) {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('with');
								$elementtiny.appendTo($element); 
								
								var $templatesec = $("."+start).children('.template-secondary');
								var $elementsec = $templatesec.clone().removeClass('template-secondary');
								$elementsec.children('.curr-event2').children('h4').text(performers[k+1].name);
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/, ''));
								$elementsec.attr('id',price);
								$elementsec.children('.mover2').attr('name',performers[k+1].image);	
								$elementsec.appendTo($element);
							}
							else if (k === perflen-1) {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('at');
								$elementtiny.appendTo($element); 
							}
							else {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('and');
								$elementtiny.appendTo($element); 
								
								var $templatesec = $("."+start).children('.template-secondary');
								var $elementsec = $templatesec.clone().removeClass('template-secondary');
								$elementsec.children('.curr-event2').children('h4').text(performers[k+1].name);
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/, ''));
								$elementsec.attr('id',price);
								$elementsec.children('.mover2').attr('name',performers[k+1].image);	
								$elementsec.appendTo($element);
							}
						}
					} else {
						var $templatetiny = $("."+start).children('.template-tiny');
						var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
						$elementtiny.children('.weektiny').text('at');
						$elementtiny.appendTo($element); 
					}
				
					// Venue information
					var $templatevenue = $("."+start).children('.template-venue');
					var $elementvenue = $templatevenue.clone().removeClass('template-venue');
					$elementvenue.children('.curr-venue').children('h4').text(venname);
					$elementvenue.addClass(venname.replace(/[^a-z0-9A-Z]/, ''));
					$elementvenue.attr('id',venid);
					$elementvenue.appendTo($element);
				
					// Time below the venue
					var $templatetime = $("."+start).children('.template-time');
					var $elementtime = $templatetime.clone().removeClass('template-time');
					$elementtime.children('.timetiny').text(time.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}));
					$elementtime.appendTo($element);
					
					// Show info
					var $templatelink = $('.'+start).children('.template-info');
					var $elementlink = $templatelink.clone().removeClass('template-info');
					$elementlink.children('.info-button').attr('id',id);
					$elementlink.appendTo($element);
				
					$element.appendTo($template.parent());
				}
			});
			if (bands.length === 0) {
				$("."+start).css("display","none");
			}
			var total = data.meta.total;
		});
};

function getWeekEvents(start, end) {

	var seatgeekAPI = "http://api.seatgeek.com/2/events?";
	$.getJSON( seatgeekAPI, {
		"lat": "40.757997",
		"lon": "-73.981869",
		"range": "10km",
		"type": "concert",
		"datetime_utc.gte": start,
		"datetime_utc.lte": end,
		"per_page": "1000",
		"sort": "score.desc"
	})
		.done(function( data ) {
			var bands = [];
			$.each(data.events, function(i,event) {
				if (bands.indexOf(event.title) === -1) {
					var id = event.id;
					var title = event.title;
					bands.push(title);
					var price = event.stats.lowest_price;
					var time = new Date(event.datetime_local);
					var performers = [];
					$.each(event.performers, function(j, performer) {
						entry = new Object();
						entry.name = performer.name;
						entry.image = performer.image;
						performers.push(entry);
					});
					var venname = event.venue.name;
					var venid = event.venue.id;
					var perflen = performers.length;
				
					var $template = $("."+start).children(".template-big");
					var $element = $template.clone().removeClass('template-big');
					
					// Applies the top band image if it is the first band
					$element.children(".event").children('.bandpic').children('.topimg').attr('src',performers[0].image);
					
					// Top Band information
					$element.children(".event").children('.event-individual').children('.curr-event').children('h4').text(performers[0].name);
					$element.children(".event").children('.event-individual').addClass(performers[0].name.replace(/[^a-z0-9A-Z]/, ''));
					$element.children(".event").children('.event-individual').attr('id',price);
					$element.children(".event").children('.event-individual').children('.mover2').attr('name',performers[0].image);
				
					if (perflen > 1) {
						for (k = 0; k < perflen; k++) {
							if (k === 0) {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('with');
								$elementtiny.appendTo($element.children(".event")); 
								
								var $templatesec = $("."+start).children('.template-secondary');
								var $elementsec = $templatesec.clone().removeClass('template-secondary');
								$elementsec.children('.curr-event2').children('h4').text(performers[k+1].name);
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/, ''));
								$elementsec.attr('id',price);
								$elementsec.children('.mover2').attr('name',performers[k+1].image);	
								$elementsec.appendTo($element.children(".event"));
							}
							else if (k === perflen-1) {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('at');
								$elementtiny.appendTo($element.children(".event")); 
							}
							else {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('and');
								$elementtiny.appendTo($element.children(".event")); 
								
								var $templatesec = $("."+start).children('.template-secondary');
								var $elementsec = $templatesec.clone().removeClass('template-secondary');
								$elementsec.children('.curr-event2').children('h4').text(performers[k+1].name);
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/, ''));
								$elementsec.attr('id',price);
								$elementsec.children('.mover2').attr('name',performers[k+1].image);	
								$elementsec.appendTo($element.children(".event"));
							}
						}
					} else {
						var $templatetiny = $("."+start).children('.template-tiny');
						var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
						$elementtiny.children('.weektiny').text('at');
						$elementtiny.appendTo($element.children(".event")); 
					}
				
					// Venue information
					var $templatevenue = $("."+start).children('.template-venue');
					var $elementvenue = $templatevenue.clone().removeClass('template-venue');
					$elementvenue.children('.curr-venue').children('h4').text(venname);
					$elementvenue.addClass(venname.replace(/[^a-z0-9A-Z]/, ''));
					$elementvenue.attr('id',venid);
					$elementvenue.appendTo($element.children(".event"));
				
					// Time below the venue
					var $templatetime = $("."+start).children('.template-time');
					var $elementtime = $templatetime.clone().removeClass('template-time');
					
					$elementtime.children('.timetiny').text(time.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}));
					$elementtime.appendTo($element.children(".event"));
					
					// Show info
					var $templatelink = $('.'+start).children('.template-info');
					var $elementlink = $templatelink.clone().removeClass('template-info');
					$elementlink.children('.info-button').attr('id',id);
					$elementlink.appendTo($element.children(".event"));
				
					$element.appendTo($template.parent());
				}
			});
			if (bands.length === 0) {
				$("."+start).children(".container-event").css("display","none");
			}
			var total = data.meta.total;
		});
};

/*
function getWeekEvents(start, end) {

	var seatgeekAPI = "http://api.seatgeek.com/2/events?";
	$.getJSON( seatgeekAPI, {
		"lat": "40.757997",
		"lon": "-73.981869",
		"range": "10km",
		"type": "concert",
		"datetime_utc.gte": start,
		"datetime_utc.lte": end,
		"per_page": "1000",
		"sort": "score.desc"
	})
		.done(function( data ) {
			var bands = [];
			$.each(data.events, function(i,event) {
				if (bands.indexOf(event.title) === -1) {
					var id = event.id;
					var title = event.title;
					bands.push(title);
					var price = event.stats.lowest_price;
					var time = new Date(event.datetime_local);
					var performers = [];
					$.each(event.performers, function(j, performer) {
						entry = new Object();
						entry.name = performer.name;
						entry.image = performer.image;
						performers.push(entry);
					});
					var venname = event.venue.name;
					var venid = event.venue.id;
					var perflen = performers.length;
				
					var $template = $("."+start).children(".template-big");
					var $element = $template.clone().removeClass('template-big');
					
					// Applies the top band image if it is the first band
					$element.children(".event").children('.bandpic').children('.topimg').attr('src',performers[0].image);
					
					// Top Band information
					$element.children(".event").children('.event-individual').children('.curr-event').children('h4').text(performers[0].name);
					$element.children(".event").children('.event-individual').addClass(performers[0].name.replace(/[^a-z0-9A-Z]/, ''));
					$element.children(".event").children('.event-individual').attr('id',price);
					$element.children(".event").children('.event-individual').children('.mover2').attr('name',performers[0].image);
				
					if (perflen > 1) {
						for (k = 0; k < perflen; k++) {
							if (k === 0) {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('with');
								$elementtiny.appendTo($element.children(".event")); 
								
								var $templatesec = $("."+start).children('.template-secondary');
								var $elementsec = $templatesec.clone().removeClass('template-secondary');
								$elementsec.children('.curr-event2').children('h4').text(performers[k+1].name);
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/, ''));
								$elementsec.attr('id',price);
								$elementsec.children('.mover2').attr('name',performers[k+1].image);	
								$elementsec.appendTo($element.children(".event"));
							}
							else if (k === perflen-1) {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('at');
								$elementtiny.appendTo($element.children(".event")); 
							}
							else {
								var $templatetiny = $("."+start).children('.template-tiny');
								var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
								$elementtiny.children('.weektiny').text('and');
								$elementtiny.appendTo($element.children(".event")); 
								
								var $templatesec = $("."+start).children('.template-secondary');
								var $elementsec = $templatesec.clone().removeClass('template-secondary');
								$elementsec.children('.curr-event2').children('h4').text(performers[k+1].name);
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/, ''));
								$elementsec.attr('id',price);
								$elementsec.children('.mover2').attr('name',performers[k+1].image);	
								$elementsec.appendTo($element.children(".event"));
							}
						}
					} else {
						var $templatetiny = $("."+start).children('.template-tiny');
						var $elementtiny = $templatetiny.clone().removeClass('template-tiny');
						$elementtiny.children('.weektiny').text('at');
						$elementtiny.appendTo($element.children(".event")); 
					}
				
					// Venue information
					var $templatevenue = $("."+start).children('.template-venue');
					var $elementvenue = $templatevenue.clone().removeClass('template-venue');
					$elementvenue.children('.curr-venue').children('h4').text(venname);
					$elementvenue.addClass(venname.replace(/[^a-z0-9A-Z]/, ''));
					$elementvenue.attr('id',venid);
					$elementvenue.appendTo($element.children(".event"));
				
					// Time below the venue
					var $templatetime = $("."+start).children('.template-time');
					var $elementtime = $templatetime.clone().removeClass('template-time');
					$elementtime.children('.timetiny').text(time.toLocaleTimeString());
					$elementtime.appendTo($element.children(".event"));
					
					// Show info
					var $templatelink = $('.'+start).children('.template-info');
					var $elementlink = $templatelink.clone().removeClass('template-info');
					$elementlink.children('.info-button').attr('id',id);
					$elementlink.appendTo($element.children(".event"));
				
					$element.appendTo($template.parent());
				}
			});
			if (bands.length === 0) {
				$("."+start).children(".container-event").css("display","none");
			}
			var total = data.meta.total;
		});
};
*/