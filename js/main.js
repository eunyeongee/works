$(document).ready(function(){
    //함수 isMobile 함수호출
   isMobile();
    
    //모바일로 접속을 했는지 안했는지 감지하는 함수선언
    function isMobile() {
    var filter = "win16|win32|win64|mac|macintel";
        
        //navigator.platform 브라우저가 실행되는 플랫폼 정보를 반환합니다.
    if( navigator.platform ){
        
      if( filter.indexOf(navigator.platform.toLowerCase())< 0 ){
          //모바일 접속    
          
          var btn=$('nav>ul>li>a');
          
          
          btn.click(function(){
              if($(this).attr('class') !='active'){
                  
                  btn.next().slideUp();
                  btn.removeClass('active');
                  
                  $(this).addClass('active');
                  
                  $(this).next().slideDown();
              } else {
                  $(this).removeClass('active');
                  $(this).next().slideUp();
              }
          });
          
              //햄버거 메뉴 클릭하면 nav나옴
              
              $('.mobile_menu').click(function(){
                  $('nav').stop().animate({right:0});
              });
              
              $('.close_btn').click(function(){
                  $('nav').stop().animate({right:'-100%'
              });
          });
         
          
          
      }else{
          
         //PC 접속
          
          
    //nav 주메뉴에 마우스 올리면 서브메뉴 나타나고 ,서브배경 나타남 
    $('nav > ul >li').hover(function(){
        $('.sub').stop().slideDown();
        
        $('.sub_bg').stop().slideDown();
    });
    
    
    //nav메뉴영역에서 마우스 아웃하면 서브메누, 서브 배경 사라짐
    $('nav> ul > li').mouseleave(function(){
        $('.sub').stop().slideUp();
        
        $('.sub_bg').stop().slideUp();
        
    });
    
      }
    }
  }
    
     
});
