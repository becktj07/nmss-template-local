$('.slider--tall').slick({
    dots: false
});

$('.slider--overlays').slick({
    dots: false
});

$('.slider--multiple').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

//Desktop
$('.slider-1').hover(function() {
  $('.location-1').addClass('hide');
  $('.location-2').addClass('location-hover');
  $('.location-3').addClass('location-hover--sf');
});

$('.slider-1').mouseleave(function() {
  $('.location-1').removeClass('hide');
  $('.location-2').removeClass('location-hover');
  $('.location-3').removeClass('location-hover--sf');
});

$('.slider-2').hover(function() {
  $('.location-2').addClass('hide');
  $('.location-1').addClass('location-hover');
  $('.location-3').addClass('location-hover--sf');
});

$('.slider-2').mouseleave(function() {
  $('.location-2').removeClass('hide');
  $('.location-1').removeClass('location-hover');
  $('.location-3').removeClass('location-hover--sf');
});

$('.slider-3').hover(function() {
  $('.location-3').addClass('hide');
  $('.location-1').addClass('location-hover');
  $('.location-2').addClass('location-hover');
});

$('.slider-3').mouseleave(function() { 
  $('.location-3').removeClass('hide');
  $('.location-1').removeClass('location-hover');
  $('.location-2').removeClass('location-hover');
});

//Mobile 
$('#location-tab li').click(function(){
  $('#location-tab li').removeClass('active');
  $(this).addClass('active');
  $('.hero-container--mobile__detail-container').addClass('visually-hidden');
  var activeContent= $(this).find('a').attr('href');
  $(activeContent).removeClass('visually-hidden');
  return false
});