	hs.graphicsDir = 'img/highslide/';
	hs.align = 'center';
	hs.transitions = ['expand', 'crossfade'];
	hs.wrapperClassName = 'dark borderless floating-caption';
	hs.fadeInOut = true;
	hs.dimmingOpacity = .75;
	hs.dimmingDuration = 500;
	hs.captionOverlay.position = "rightpanel";
	hs.captionOverlay.width = "220px";
	hs.numberPosition = 'caption';
	hs.marginLeft = 150;

	// Add the controlbar
	if (hs.addSlideshow) hs.addSlideshow({
		//slideshowGroup: 'group1',
		interval: 15000,
		repeat: false,
		useControls: true,
		fixedControls: 'fit',
		overlayOptions: {
			opacity: .7,
			position: 'bottom center',
			offsetY: 60,
			hideOnMouseOut: true
		},
	thumbstrip: {
		position: 'left',
		mode: 'vertical',
		relativeTo: 'viewport'
	}
	});