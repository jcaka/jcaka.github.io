//CAROUSEL
var activeImg=1;
var images = document.getElementsByClassName('carousel')[0].getElementsByTagName('img');

console.log(images);


var carousel = setInterval(function(){
  for( var h=0,len=images.length; h<len; h++){
    images[h].className = '';
  }
  images[activeImg].className = 'active';
  console.log(activeImg,images.length)
  if( activeImg >= images.length-1 )
    activeImg = 0;
  else
    activeImg++;
},2500);
