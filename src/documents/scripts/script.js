YUI({
        gallery: 'gallery-2013.03.27-22-06'
    }).use('gallery-tipsy','gallery-popover','node','event','anim',
function(Y)
{
	// Tipsy render start ->
	var tipsy = new Y.Tipsy({
		selector: "[rel='tipsy']"
    });

    tipsy.render(); 
    // Tipsy render start <- 

	// homepage section background events start ->
	var buyAdspaceTitle = new Y.Anim({
	    node: '#buyAdspaceTitle',
	    to: {
	    	marginTop: 125
	    },
	    duration: .2
	});
	var adspaceText = new Y.Anim({
	    node: '.adspace-text',
	    to: {
	        opacity: 1
	    },
	    duration: .1
	});
	Y.one('.splash-ad').on({
		mouseover: function(){
			Y.one('#splash-img-1').setStyle('opacity',1);
			Y.one('#splash-img-2').setStyle('opacity',0.44);
		},
		mouseout: function(){
			Y.one('#splash-img-1').setStyle('opacity',0.44);
		}
	});
	Y.one('.splash-publisher').on({
		mouseover: function(){
			Y.one('#splash-img-2').setStyle('opacity',1);
			Y.one('#splash-img-1').setStyle('opacity',0.44);
		},
		mouseout: function(){
			Y.one('#splash-img-2').setStyle('opacity',0.44);
		}
	});
	Y.one('.home-slogan').on({
		mouseover: function(){
			Y.all('.splash-bg-image').setStyle('opacity',1);
		},
		mouseout: function(){
			Y.all('.splash-bg-image').setStyle('opacity','inherit');
		}
	})
	Y.one('.ad-layer').on({
		mouseover: function(){
			adspaceText.run();
			buyAdspaceTitle.run();
		}
	});
	// homepage section background events end <-

	// homepage publisher circle animation start -> 
    var publisherLayerAnim = new Y.Anim({
	    node: '.publisher-layer',
	    to: {
	        width: '100%',
	        height: 827,
	        opacity: 1,
	        borderRadius: 0
	    },
	    duration: .1
	});
	var publisherCircleAnim = new Y.Anim({
	    node: '.splash-publisher-circle',
	    to: {
	        marginTop: 0,
	        marginLeft: 0
	    },
	    duration: .1
	});
	Y.one('.publisher-layer').on({
		click: function(){
			Y.one('#logo').setStyle('color','#fff');
			Y.one('.publisher-layer').setStyle('z-index', '1');
			publisherCircleAnim.run();
			publisherLayerAnim.run();
		}
	});
	// homepage publisher circle animation end <-

	// homepage ad circle animation start -> 
    var adLayerAnim = new Y.Anim({
	    node: '.ad-layer',
	    to: {
	        width: '100%',
	        height: 827,
	        opacity: 1,
	        borderRadius: 0
	    },
	    duration: .1
	});
	var adCircleAnim = new Y.Anim({
	    node: '.splash-ad-circle',
	    to: {
	        marginTop: 0,
	        marginLeft: 0,
			width: '100%',
			left: 0
	    },
	    duration: .1
	});
	Y.one('.ad-layer').on({
		click: function(){
			Y.one('#buyAdspaceTitle').setStyles({
				width: '77%',
				textAlign: 'right'
			});
			Y.one('.ad-layer').setStyle('z-index', '1');
			Y.one('.splash-ad-circle').setStyle('position','absolute');
			adCircleAnim.run();
			adLayerAnim.run();
		}
	});
	// homepage ad circle animation end <-

});