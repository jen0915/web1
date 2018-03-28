var Links = {
  SetColor:function(color){
    // var list=document.querySelectorAll('a');
    // var i=0;
    // while(i<list.length){
    //    console.log(list[i]);
    //    list[i].style.color=color;
    //    i=i+1;
    //  }
    $('a').css('color', color); //'color'를 뒤에 나오는 인자로 바꾸기
  }
}
// function LinksSetColor(color){
//   var list=document.querySelectorAll('a');
//   var i=0;
//   while(i<list.length){
//      console.log(list[i]);
//      list[i].style.color=color;
//      i=i+1;
//    }
// }
//Body 객체 생성, 프로퍼티 생성
var Body= {
    SetColor:function(color){
        // document.querySelector('body').style.color=color;
        $('body').css('color', color);
    },
    BackgroundColor:function(color){
        // document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor', color);
    }
}
// function BodySetColor(color){
//     document.querySelector('body').style.color=color;
// }

// function BodyBackgroundColor(color){
//     document.querySelector('body').style.backgroundColor=color;
// }

function nightdayHandler(self){
    var target=document.querySelector('body');
    if(self.value=='night'){
      Body.BackgroundColor('black');

      Body.SetColor('white');
      self.value='day';
      Links.SetColor('powderblue');
    }else{
      Body.BackgroundColor('white');
      Body.SetColor('black');
      Links.SetColor('black');
      self.value='night';

    }
}
