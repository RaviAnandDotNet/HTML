$(document).ready(function(){
  
})


// $('.nav-fabrics').hover(function(){
//     $('.dropdown-menu').toggleClass('show')
// })
$('.viscose-jacquard').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image.png")
})
$('.viscose-stripe').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image2.png")
})
$('.viscose-slub').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image3.png")
})
$('.viscose-plain').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image4.png")
})
$('.viscose-dobby').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image5.png")
})
$('.viscose-crepe').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image6.png")
})
$('.viscose-boota').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image7.png")
})
$('.viscose-lurex').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image8.png")
})
$('.viscose-georgette').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image9.png")
})
$('.cotton-jacquard').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image10.png")
})
$('.viscose-check').hover(function(){
    $(".nav-fabric-image").toggleClass("d-none")
    $(".nav-fabric-image").find("img").attr("src","/image/navimage/jpeg-optimizer_image11.png")
})
var multipleCardCarousel1 = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel1, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel1).addClass("slide");
  }
// second slider
  var multipleCardCarousel2 = document.querySelector("#carouselExampleControls1");
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel2, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls1 .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls1 .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls1 .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls1 .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel2).addClass("slide");
  }


  
