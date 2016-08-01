function blinker() {
  $('.star').each(function(index, item) {
    var Speed = Math.floor(Math.random() * 4000) + 1000;
    $(item).fadeOut(Speed).fadeIn(Speed);
  });
  setTimeout(blinker, 3900);
}

blinker();

$(function() {
  $('.star').each(function(index, item) {
    var max_width  = $(window).width();
    var max_height = $(window).height();
    var starPosX    = Math.floor(Math.random() * max_width) + 1;
    var starPosY    = Math.floor(Math.random() * max_height) + 1;
    $(item).css({
      left: starPosX -8,
      top : starPosY -8
    });
    console.log(starPosX)
  })
});
