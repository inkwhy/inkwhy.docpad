YUI().use('node','event',
function(Y)
{
	Y.one('.splash-publisher').on({
		mouseover: function(){
			Y.one('#splash-img-1').setStyle('opacity',1);
		},
		mouseout: function(){
			Y.one('#splash-img-1').setStyle('opacity',0.44);
		}
	});
	Y.one('.ad-splash').on({
		mouseover: function(){
			Y.one('#splash-img-2').setStyle('opacity',1);
		},
		mouseout: function(){
			Y.one('#splash-img-2').setStyle('opacity',0.44);
		}
	});
});