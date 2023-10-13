import ELEM from './elem.js';

$(function(){
    const szuloElem = $('article');
    console.log(szuloElem);
    new ELEM(szuloElem);
    $('article div').addClass("div_class");
    $('article div').on("click", function() {
        $('article div').text("X");
      });      
})


