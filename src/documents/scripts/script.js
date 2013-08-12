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
	function adCircleAnim(title, text, circle){ // homepage circle hover animation start ->
		var adspaceTitleOver = new Y.Anim({
		    node: title,
		    to: {
		    	marginTop: 106
		    },
		    duration: .2
		});
		var adspaceTextOver = new Y.Anim({
		    node: text,
		    to: {
		        opacity: 1
		    },
		    duration: .1
		});
		var adspaceTitleOut = new Y.Anim({
		    node: title,
		    to: {
		    	marginTop: 142
		    },
		    duration: .2
		});
		var adspaceTextOut = new Y.Anim({
		    node: text,
		    to: {
		        opacity: 0
		    },
		    duration: .1
		});
		Y.one(circle).on({
			mouseover: function(){
				adspaceTextOver.run();
				adspaceTitleOver.run();
			},
			mouseout: function(){
				adspaceTextOut.run();
				adspaceTitleOut.run();
			}
		});
	}
	adCircleAnim('#buyAdspaceTitle','#buyAdspaceText', '.ad-layer');
	adCircleAnim('#sellAdspaceTitle','#sellAdspaceText', '.publisher-layer');
	// homepage circle hover animation end <-

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
			Y.one('.publisher-layer').detach();
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
			Y.one('title').setStyles({
				width: '77%',
				textAlign: 'right'
			});
			Y.one('.ad-layer').setStyle('z-index', '1');
			Y.one('.splash-ad-circle').setStyle('position','absolute');
			adCircleAnim.run();
			adLayerAnim.run();
			Y.one('.ad-layer').detach();
		}
	});
	// homepage ad circle animation end <-

});