function getEvents(start, end) {

	var seatgeekAPI = "https://api.seatgeek.com/2/events?";
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
					var time = new Date(event.datetime_utc);
					if (event.time_tbd === true) {
						time = "TBD";
					}
					var performers = [];
					$.each(event.performers, function(j, performer) {
						entry = new Object();
						entry.name = performer.name;
						entry.image = performer.image;
						if (performer.image === null) {
							entry.image = "https://s3.amazonaws.com/concerts-assets/images/standin/small"+Math.floor((Math.random()*40)+1)+".jpg";
						}
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
					$element.children('.event-individual').addClass(performers[0].name.replace(/[^a-z0-9A-Z]/g, ''));
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
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/g, ''));
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
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/g, ''));
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
					$elementvenue.addClass(venname.replace(/[^a-z0-9A-Z]/g, ''));
					$elementvenue.attr('id',venid);
					$elementvenue.appendTo($element);
				
					// Time below the venue
					var $templatetime = $("."+start).children('.template-time');
					var $elementtime = $templatetime.clone().removeClass('template-time');
					if (time === "TBD") {
						$elementtime.children('.timetiny').text(time);						
					} else {
						$elementtime.children('.timetiny').text(time.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}));
					}
					$elementtime.appendTo($element);
					
					// Show info
					var $templatelink = $('.'+start).children('.template-info');
					var $elementlink = $templatelink.clone().removeClass('template-info');
					$elementlink.children('.info-button').attr('id',id);
					$elementlink.children('.info-button').children('h4').children('a').attr('href','/events/'+id);
					$elementlink.appendTo($element);
				
					$element.appendTo($template.parent());
				}
			});
			//$("."+start+"loader").remove();
			
			if (bands.length === 0) {
				$("."+start).css("display","none");
				if($("."+start).parent().is(':last-child')) {
					$("."+start).parent().parent().remove();
				}
			}
			var total = data.meta.total;
		});
};

function getWeekEvents(start, end) {

	var seatgeekAPI = "https://api.seatgeek.com/2/events?";
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
					var time = new Date(event.datetime_utc);
					if (event.time_tbd === true) {
						time = "TBD";
					}
					var performers = [];
					$.each(event.performers, function(j, performer) {
						entry = new Object();
						entry.name = performer.name;
						entry.image = performer.image;
						if (performer.image === null) {
							entry.image = "https://s3.amazonaws.com/concerts-assets/images/standin/small"+Math.floor((Math.random()*40)+1)+".jpg";
						}
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
					$element.children(".event").children('.event-individual').addClass(performers[0].name.replace(/[^a-z0-9A-Z]/g, ''));
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
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/g, ''));
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
								$elementsec.addClass(performers[k+1].name.replace(/[^a-z0-9A-Z]/g, ''));
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
					$elementvenue.addClass(venname.replace(/[^a-z0-9A-Z]/g, ''));
					$elementvenue.attr('id',venid);
					$elementvenue.appendTo($element.children(".event"));
				
					// Time below the venue
					var $templatetime = $("."+start).children('.template-time');
					var $elementtime = $templatetime.clone().removeClass('template-time');
					if (time === "TBD") {
						$elementtime.children('.timetiny').text(time);						
					} else {
						$elementtime.children('.timetiny').text(time.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}));
					}
					$elementtime.appendTo($element.children(".event"));
					
					// Show info
					var $templatelink = $('.'+start).children('.template-info');
					var $elementlink = $templatelink.clone().removeClass('template-info');
					$elementlink.children('.info-button').attr('id',id);
					$elementlink.children('.info-button').children('h4').children('a').attr('href','/events/'+id);
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


function getDayEvents(eventid) {

	var seatgeekAPI = "https://api.seatgeek.com/2/events/"+eventid;
	$.getJSON(seatgeekAPI).done(function(data) {
			
			// Creates an array to store bands
			var bands = [];
			
			var id = data.id;
			var title = data.title;
			bands.push(title);
			var price = data.stats.lowest_price;
			var time = new Date(data.datetime_utc);
			var date = time.toLocaleDateString();
			if (data.time_tbd === true) {
				time = "TBD";
			}
			var performers = [];
			var primname;
			var primimage;
			$.each(data.performers, function(j, performer) {
				entry = new Object();
				entry.name = performer.name;
				entry.image = performer.image;
				if (performer.image === null) {
					entry.image = "https://s3.amazonaws.com/concerts-assets/images/standin/large"+Math.floor((Math.random()*28)+1)+".jpg";
				}
				if (performer.primary === true) {
					primname = performer.name;
					primimage = performer.image;
					if (performer.image === null) {
						primimage = "https://s3.amazonaws.com/concerts-assets/images/standin/large"+Math.floor((Math.random()*28)+1)+".jpg";
					}
				}
				performers.push(entry);
			});
			var venname = data.venue.name;
			var vennamerep = venname.replace(/ /g,'+');
			vennamerep = vennamerep.replace(/&/g,'+');
			var loc = data.venue.display_location;
			var locrep = loc.replace(/ /g,'+');
			var venid = data.venue.id;
			var perflen = performers.length;
			var lat = data.venue.location.lat;
			var lon = data.venue.location.lon;
			var url = data.url;
			var venueurl = data.venue.url;
			
			var $template = $(".moreinfo-top-template");
			var $element = $template.clone().removeClass('moreinfo-top-template');
			
			var $bottemplate = $(".moreinfo-bottom-template");
			var $botelement = $bottemplate.clone().removeClass('moreinfo-bottom-template');
			
			// Fills in the top half with first band information
			$element.children(".part5").children('.part5sub').children('.part1').children('.event-individual').children('.curr-event').children('h4').text(primname);
			$element.children(".part5").children('.part5sub').children('.part1').children('.event-individual').addClass(primname.replace(/[^a-z0-9A-Z]/g, ''));
			$element.children(".part5").children('.part5sub').children('.part1').children('.event-individual').attr('id',price);
			$element.children(".part5").children('.part5sub').children('.part1').children('.event-individual').children('.mover2').attr('name',primimage);
			
			// Adds band picture	
			$element.children(".part5").children('.part5sub').children('.bandpicture').children('.bandpic').children('.picture').attr('src',primimage);	
			
			// Adds event price
			if (price === null) {
				$element.children('.eventinfo').children('.bigspace').children('.price').children('a').children('h4').text('No Info');
				$element.children('.eventinfo').children('.bigspace').children('.curr-seller').children('a').children('h4').text('SEATGEEK >');
				$element.children('.eventinfo').children('.bigspace').children('.price').children('a').attr('href',url);
				$element.children('.eventinfo').children('.bigspace').children('.curr-seller').children('a').attr('href',url);
			} else {
				$element.children('.eventinfo').children('.bigspace').children('.price').children('a').children('h4').text('$'+price);
				$element.children('.eventinfo').children('.bigspace').children('.curr-seller').children('a').children('h4').text('SEATGEEK >');
				$element.children('.eventinfo').children('.bigspace').children('.price').children('a').attr('href',url);
				$element.children('.eventinfo').children('.bigspace').children('.curr-seller').children('a').attr('href',url);
			}
			
			// Adds event title
			$element.children('.eventinfo').children('.titleevent').children('.curr-event').children('h4').text(title);
			
			// Adds event time
			$element.children('.eventinfo').children('.time').children('.date').text('Date: '+date);
			if (time === "TBD") {
				$element.children('.eventinfo').children('.time').children('.showtime').text('Time: '+time);					
			} else {
				$element.children('.eventinfo').children('.time').children('.showtime').text('Time: '+time.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}));
			}
			
			// Adds venue name and info
			$element.children('.eventinfo').children('.titlevenue').children('.curr-venue').children('a').children('h4').text(venname);
			$element.children('.eventinfo').children('.titlevenue').children('.curr-venue').children('a').attr('href',venueurl);

			// Adds venue address
			$element.children('.eventinfo').children('.address').children('.address1').text(data.venue.address);
			$element.children('.eventinfo').children('.address').children('.address2').text(data.venue.extended_address);
			
			// Adds extra performers
			if (perflen > 1) {
				$.each(performers, function(k,perf) {
					if (perf.name !== primname) {
						var $tester = $element.children('.part5').children('.template5sub').clone().removeClass('template5sub');
						
						$tester.children('.part1').children('.event-individual').children('.curr-event').children('h4').text(perf.name);
						$tester.children('.part1').children('.event-individual').addClass(perf.name.replace(/[^a-z0-9A-Z]/g, ''));
						$tester.children('.part1').children('.event-individual').attr('id',price);
						$tester.children('.part1').children('.event-individual').children('.mover2').attr('name',perf.image);
			
						// Adds band picture	
						$tester.children('.bandpicture').children('.bandpic').children('.picture').attr('src',perf.image);	
						
						$tester.appendTo($element.children('.part5'));
						
					}
				});
			}
			
			$element.appendTo('.container-moreinfo');
			
			// Map details
			$botelement.children('.part4').children('iframe').attr('src','https://www.google.com/maps/embed/v1/place?key=AIzaSyBRSL6OcriI09lI4TztHLFgRB2UgrG_xNM&q='+vennamerep+','+locrep);
			
			$botelement.appendTo('.container-moreinfo');
	});
};
