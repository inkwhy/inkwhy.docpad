var angle = 1;

$("body").mousemove(function(e){
      $('#inky').css('top', e.clientY + 13).css('left', e.clientX + 13);
      $("#inky").css('-moz-transform', 'rotate('+angle+'deg)').css('-webkit-transform', 'rotate('+angle+'deg)').css('-o-transform', 'rotate('+angle+'deg)').css('-ms-transform', 'rotate('+angle+'deg)');
                                angle+=6;
                                if(angle==360) {
                                angle=0;
                                }

});
