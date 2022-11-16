var seccionesPagina = new fullpage('#fullpage', {
	autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: false,
	navigation: true,
	menu: '#menu',
	anchors: ['inicio','promos' ,'crew','contacto'],
	navigationTooltips: ['Inicio','infografias','crew','Contacto'],
	showActiveTooltip: false,
	sectionsColor : ['#000', '#c2c2c2', '#c2c2c2', '#000', '#000'],
	verticalCentered: true,
	controlArrows: true,
	slidesNavigation: false,
	afterLoad: function(origin, destination){
		if(destination.anchor == 'contacto'){
			document.querySelector('.footer').querySelector('h2').style.opacity = 1;
		}
	}
});



<section class="section videos">
<article class="slide">
	<div class="infoProducto video">
		<video src="/2.mp4" loop autoplay controls muted></video>
	</div>
</article>
<article class="slide">
	<div class="infoProducto video">
		<video src="/3.mp4" loop autoplay controls muted></video>
	</div>
</article>
<article class="slide">
	<div class="infoProducto video">
		<video src="/4.mp4" loop autoplay controls muted></video>
	</div>
</article>
<article class="slide">
   <div class="infoProducto video">
	   <video src="/1.mp4" loop autoplay controls muted></video>
   </div>
</article>
</section>