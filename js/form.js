$(document).ready(function(){
  $('.escolher-form button').click(function(){
     $('.escolher-form button').removeClass('active');
     $(this).addClass('active');
     var options = $('.escolher-form > button');
     var number = options.index($(this));
     number++;
     console.log(number);
     $('.form-container > form').removeClass('active');
     $('.form-container > form:nth-child(' + number + ')').addClass('active');
  })
})
