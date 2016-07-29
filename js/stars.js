function blinker() {
  $('.star').fadeOut(1900);
  $('.star').fadeIn(1900);
}
setInterval(blinker, 1000);

$(function() {
  $('.star').each(function(index, item) {
    var max_width  = $(window).width();
    var max_height = $(window).height();
    var starPosX    = Math.floor(Math.random() * max_width) + 1;
    var starPosY    = Math.floor(Math.random() * max_height) + 1;
    $(item).css({
      left: starPosX,
      top : starPosY
    });
    console.log(starPosX)
  })
});
