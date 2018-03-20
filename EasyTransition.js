let EasyTransition = function(class_name,time){
  const target_class = class_name || 'easy_transition';
  const duration = time || 1000;

  const elements = document.getElementsByClassName(target_class);
  let scroll_amount = 0;
  let top_map = new Map();
  let transform_map = new Map();
  let finish_map = new Map();
  Array.prototype.forEach.call(elements,function(element){
    top_map.set(element,element.getBoundingClientRect().top+pageYOffset);
    
    element.style.transition = duration + 'ms';
    let transform = '';
    let finish = '';
    if(element.classList.contains('from_right')){
      transform += ' translateX('+window.innerWidth+'px)';
    }else if(element.classList.contains('from_left')){
      transform += ' translateX(-'+window.innerWidth+'px)';
    }
    if(element.classList.contains('zoom')){
      transform += ' scale(0)';
    }
    if(element.classList.contains('spin')){
      transform += ' rotateZ(-720deg)';
    }
    if(element.classList.contains('spinX')){
      transform += ' rotateX(-720deg)';
    }
    if(element.classList.contains('spinY')){
      transform += ' rotateY(-720deg)';
    }
    element.style.transform = transform;
    transform_map.set(element,transform);

    if(element.classList.contains('fade')){
      element.style.opacity = 0;
    }
  });
  window.addEventListener('scroll',function(){  
    if(scroll_amount < pageYOffset){
      Array.prototype.forEach.call(elements,function(element){
        if(
          (window.innerHeight * 0.6 + pageYOffset >= top_map.get(element))||
          (window.innerHeight + pageYOffset >= document.body.clientHeight)
          ){
          element.style.transform = '';
          element.style.opacity = '';
        }
      });
    }else{
      Array.prototype.forEach.call(elements,function(element){
        if(window.innerHeight + pageYOffset < top_map.get(element)){
          element.style.transform = transform_map.get(element);
          if(element.classList.contains('fade')){
            element.style.opacity = 0;
          }
        }
      });
    }
    scroll_amount = pageYOffset;
  },false);
}