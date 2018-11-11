console.log ('test');
(function($) {
$(function() {

console.log ($('ul.menu'));

  $('ul.menu').each(function() {  // для каждого из выбранных элементов ul с классом menu запускается функция
    console.log (this);
    $(this).find('li').each(function(i) {
      console.log(i);
          console.log (this);
      $(this).click(function(){
        console.log(i);
            console.log (this);
        $(this).addClass('activeItem').siblings().removeClass('activeItem');
        // в строке ниже идёт ссылка на блок, в котором находятся одновременно и кнопки закладок и текст. 
        // У меня структура несколько иная, надо подумать, как правильно обратиться!
        $('div.textContent').removeClass('active').eq(i).addClass('active');
      });
    });
  });

})
})(jQuery)