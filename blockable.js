(function($){
	$.fn.extend({ 
		blockable: function(options) {
			var defaults = {
				cursor: true,
				hover: true
			}
			
			var options = $.extend(defaults, options);
			
			return this.each(function() {
				var url = $(this).find('a').attr('href');
				
				if(url) {
					$(this).click(function() {
						window.location = url;
					});
					
					if(options.cursor === true) $(this).css('cursor', 'pointer');
					
					if(options.hover === true) {
						$(this).hover(function() {
							$(this).addClass('hover');
						}, function() {
							$(this).removeClass('hover');
						});
					}
				}
			});
		}
	});
})(jQuery);