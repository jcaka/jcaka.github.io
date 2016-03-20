//CAROUSEL
var activeImg = 1;
var carouselWrap = document.getElementsByClassName('carousel')[0].getElementsByClassName('wrapper')[0];
var images = carouselWrap.getElementsByTagName('img');


var carousel = setInterval(function(){
  carouselWrap.style.transform = 'translate3d(-'+680*activeImg+'px,0,0)';
  carouselWrap.style.webkitTransform  = 'translate3d(-'+680*activeImg+'px,0,0)';
  carouselWrap.style.msProperty  = 'translate3d(-'+680*activeImg+'px,0,0)';

  if( activeImg >= images.length-1 )
    activeImg = 0;
  else
    activeImg++;
},2500);
