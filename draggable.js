$(function(){
    var curDown = false,
        curYPos = 0,
        curXPos = 0;
    
    $(window).mousemove(function(m){
      if(curDown){
        window.scrollBy(curXPos - m.pageX, curYPos - m.pageY)
      }
    });
    
    $(window).mousedown(function(m){
      curYPos = m.pageY;
      curXPos = m.pageX;
      curDown = true;
      $('#drag_img').css('cursor', 'grabbing')
    });
    
    $(window).mouseup(function(){
      curDown = false;
      $('#drag_img').css('cursor', 'grab')
    });
  })