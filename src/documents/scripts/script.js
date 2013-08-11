YUI({
        gallery: 'gallery-2013.03.27-22-06'
    }).use('gallery-tipsy','gallery-popover','node','event',
function(Y)
{
	// homepage section background events
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

     var tipsy = new Y.Tipsy({
        selector: "[rel='tipsy']"
    });

    tipsy.render(); 

});