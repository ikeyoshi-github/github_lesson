$(function () {
  
  $('.course-list').click(function () {
    var $itemList = $(this).find('.item-list');
    if ($itemList.hasClass('open')) {
      $itemList.removeClass('open');

      $itemList.slideUp();

    } else {
      $itemList.addClass('open');
      $itemList.slideDown();

    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 80) {
      $('.floating').fadeIn(300);
    } else {
      $('.floating').fadeOut(300);
    }
  });

  $('.floating').click(function () {
    $('body,html').animate({
      scrollTop: 0
      
    }, 500);
    return false;
  })

  $('#first-show').click(function () {
    $('#first-modal').fadeIn();
  });

  $('#second-show').click(function () {
    $('#second-modal').fadeIn();
  });

  $('#third-show').click(function () {
    $('#third-modal').fadeIn();
  });

  $('#first-modal').click(function () {
    $('#first-modal').fadeOut();
  });

  $('#second-modal').click(function () {
    $('#second-modal').fadeOut();
  });

  $('#third-modal').click(function () {
    $('#third-modal').fadeOut();
  });


});