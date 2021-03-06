;(function($){
    var litho = {
        btn: 0, //버튼 클릭을 기억하고 있는 변수 //전역 변수
                //헤더 영역에서 모바일버튼 클릭 시 변경
        
        init:function(){ //멤버 함수 == 메서드
            var that = this;
            that.scrollEventFn(); //여기서 btn 멤버 변수 가져다가 사용함
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
            that.section6Fn();
            that.section7Fn();
            that.section8Fn();
            that.section9Fn();
            that.section10Fn();
            that.footerFn();

        },
        scrollEventFn:function(){
            var scrollOld = 0;
            var scrollNew = 0;
            var $win = $(window);
            var result = null;
            var $header = $('#header');
            var $bar = $('.bar');
            var $mobileBtn = $('#header .mobile-btn');
            var that = this;
            // var $asideBtn = $('#aside ul li a');
            // var $bar = $('#header .bar');
            // var scrollTop = $(window).scrollTop;

            function scrollEventFn(){
                scrollNew = $win.scrollTop();
                var scr = function(){ //리터럴 함수==익명함수 (변수형식)
                    if(scrollOld - scrollNew > 0 ){
                        result = 'UP'
                    }
                    else{
                        result = 'DOWN'
                    }
                }
                //위에 if문 3항연산자로 쓰기
                // result = scrollOld - scrollNew > 0 ? 'UP' : 'DOWN';

                scr();

                scrollOld = scrollNew;

                if(scrollNew == 0){
                    $header.removeClass('addUp');
                    $header.removeClass('addDown');
                    $header.removeClass('addWhite');

                    

                }
                else{

                    //조건문
                    if(result == 'UP'){
                        //모바일 햄버거 버튼이 클릭된 상태의 이벤트
                        if( that.btn == 1){
                            $header.removeClass('addUp');
                            $header.addClass('addDown');
                            $header.addClass('addWhite')
                        }
                        //버튼 클릭안됐을때 & PC
                        else{
                            $header.removeClass('addWhite');
                            $header.removeClass('addUp');
                            $header.addClass('addDown');
                        }

                    }
                    else if(result == 'DOWN'){
                        //모바일 햄버거 버튼이 클릭된 상태의 이벤트
                        if( that.btn == 1){
                            $header.removeClass('addDown');
                            $header.removeClass('addUp');
                            $header.addClass('addWhite')
                        }
                        //버튼 클릭안됐을때 & PC
                        else{
                            $header.removeClass('addDown');
                            $header.addClass('addUp');
                        }

                    }
                }              
            }



            $win.scroll(function(){

                    scrollEventFn();
                

            })




















            // var scrollPrev = 0;
            // var scrollCurrent = 0;
            // var $window = $(window);
            // var result = null ;


            // function wheelPositionFn(){
            //     result = scrollPrev - scrollCurrent > 0 ? 'UP' : 'DOWN'
            //     return { //블록 기법 ,, 여러개 묶어서 출력,,?
            //         result,
            //         scrollPrev,
            //         scrollCurrent
            //     }
            // }

            // $window.scroll(function(){

            //     scrollCurrent = $(this).scrollTop();
            //     wheelPositionFn();
            //     if(scrollCurrent <= 10 ){ //top 값이 10보다 작거나 같을때
            //         $('#header').removeClass('addDown');
            //         $('#header').removeClass('addUp');
            //     }
            //     else{
            //         

            //         if(result == 'DOWN'){ //스크롤이 아래로 내려오면
            //             $('#header').removeClass('addDown'); //헤더가 내려오는걸 삭제
            //             $('#header').addClass('addUp'); //헤더 올라감
            //         }
            //         if(result == 'UP'){ //스크롤이 위로 올라가면
            //             $('#header').removeClass('addUp'); //헤더가 올라가는걸 삭제
            //             $('#header').addClass('addDown'); //헤더 내려감
            //         }
            //     }

            //     scrollPrev = scrollCurrent //old scroll 값

            // });

        },
        headerFn:function(){
           

           //메인메뉴, 서브메뉴 객체와 배열
           var lithoNav = {
            sub1:[
                {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]}, //서브메뉴 4개
                {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
            ], 
            sub2:[
                {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
            ],
            sub3:[
                {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
            ],
            sub4:[
                {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
            ],
            sub5:[
                {
                    sub:"Header and menu", 
                    subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                    subsubsub:{
                        subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu half"],
                        subsubsub2:["Left menu classic","Left menu modern"],
                        subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                        subsubsub4:["Classic","Modern","Full screen"]
                    }
                
                },
                {sub:"Footer", subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]},
                {sub:"Page title", subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]},
                {sub:"Modal popup", subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]},
                {sub:"Icon packs", subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]},
                {sub:"Animations"}
            ],
            sub6:[
                {sub:"Blog grid" },
                {sub:"Blog masonry" },
                {sub:"Blog classic" },
                {sub:"Blog simple" },
                {sub:"Blog side image" },
                {sub:"Blog metro" },
                {sub:"Blog overlay image" },
                {sub:"Blog modern" },
                {sub:"Blog clean" },
                {sub:"Blog widget" },
                {sub:"Blog standard" },
                {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},
                {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width post"]}
            ],
            sub7:[
                {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                {sub:["menu-banner-01.jpg"]},
                {sub:["menu-banner-02.jpg"]} //console.log로 배열값 찍히게하려고 1개지만 배열로 통일
            ]
            
        }; //lithoNav객체


        //lithoNav객체 배열 서브메뉴를 
        //컴포넌트 요소에 넣기


        function subObjectArrayFn(){
        //서브1 코딩
        var $col = $('#nav .col');
        var txt = '';

            //sub1 : 4칸
            //1~4열까지 반복처리
            /* 1번 방법 
            for(var i in lithoNav.sub1){
                txt="<dt>"+lithoNav.sub1[i].sub[0]+"</dt>"; //타이틀
                for(var j in lithoNav.sub1[i].sub){    
                   if(j>0){                
                    txt += "<dd><a href='#'>"+lithoNav.sub1[i].sub[j]+"</a></dd>"; // += ==> 누적
                }
            }
                $col.eq(i).html(txt);
                txt = ''; 
            }
            */

            //2번 방법
            for(var i in lithoNav.sub1){
                for(var j in lithoNav.sub1[i].sub){
                    if(j==0){//제목(서브서브 첫번째) 출력
                        txt="<dt>"+lithoNav.sub1[i].sub[0]+"</dt>";
                    }
                    else{//내용(서브서브 두번째) 출력
                        txt += "<dd><a href='#'>"+lithoNav.sub1[i].sub[j]+"</a></dd>"; 
                    }
                }
                $col.eq(i).html(txt);
                txt = ''; 
            }

/*
            //3번 방법
            for(var i in lithoNav.sub1){
                txt="<dt>"+lithoNav.sub1[i].sub[0]+"</dt>"; //타이틀
                for(var j =1; j<= lithoNav.sub1[i].sub.length ; j++){                   
                    txt += "<dd><a href='#'>"+lithoNav.sub1[i].sub[j]+"</a></dd>"; // += ==> 누적
                
            }
                $col.eq(i).html(txt);
                txt = ''; 
            }
            */


/*
            ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓설명

            txt = "<dt>" + 변수 + "</dt>"
            txt = "<dd><a href='#'>" + 변수 + "</a></dd>"

            $col.eq(0).html(txt);
            txt = '';


            //1열
            txt="<dt>"+lithoNav.sub1[0].sub[0]+"</dt>"; //타이틀
            for(var i in lithoNav.sub1[0].sub){
                txt += "<dd><a href='#'>"+lithoNav.sub1[0].sub[i]+"</a></dd>";
            }
            $col.eq(0).html(txt);
            txt = ''; //변수 초기화 (안하면 2번 서브메뉴가 1번 내용에 추가됨)

            //2열
            txt="<dt>"+lithoNav.sub1[1].sub[0]+"</dt>"; //타이틀
            for(var i in lithoNav.sub1[1].sub){
                txt += "<dd><a href='#'>"+lithoNav.sub1[1].sub[i]+"</a></dd>";
            }
            $col.eq(1).html(txt);
            txt = '';

            //3열
            txt="<dt>"+lithoNav.sub1[2].sub[0]+"</dt>"; //타이틀
            for(var i in lithoNav.sub1[2].sub){
                txt += "<dd><a href='#'>"+lithoNav.sub1[2].sub[i]+"</a></dd>";
            }
            $col.eq(2).html(txt);
            txt = '';

            //4열
            txt="<dt>"+lithoNav.sub1[3].sub[0]+"</dt>"; //타이틀
            for(var i in lithoNav.sub1[3].sub){
                txt += "<dd><a href='#'>"+lithoNav.sub1[3].sub[i]+"</a></dd>";
            }
            $col.eq(3).html(txt);
            txt = '';
        
            */

            
            //메인2번
            var $subBtn = $('.sub2 .sub-btn'); //텍스트만
            var $subsub = $('.sub2 .subsub') //태그도 함께 들어가야함 / li a 텍스트


            for(var i in lithoNav.sub2){ // 0~3까지 4행 반복
                txt+=lithoNav.sub2[i].sub+"<i class='fas fa-angle-right'></i>";
                $subBtn.eq(i).html(txt);
                txt='';
            }     

            //아래 쓴 subsub 줄이기
            for(var i in lithoNav.sub2){
                for(var j in lithoNav.sub2[i].subsub){
                    txt+="<li><a href='#'>"+lithoNav.sub2[i].subsub[j]+"</a></li>";
                 }
                 $subsub.eq(i).html(txt); 
                 txt='';
            }


/*

            //subsub
            //sub2의 about의 subsub

            for(var i in lithoNav.sub2[0].subsub){
                txt+="<li><a href='#'>"+lithoNav.sub2[0].subsub[i]+"</a></li>";
             }
             $subsub.eq(0).html(txt); 
             txt='';


            //sub2의 services의 subsub
            for(var i in lithoNav.sub2[1].subsub){
            txt+="<li><a href='#'>"+lithoNav.sub2[1].subsub[i]+"</a></li>";
             }
            $subsub.eq(1).html(txt);
            txt='';


            for(var i in lithoNav.sub2[2].subsub){
            txt+="<li><a href='#'>"+lithoNav.sub2[2].subsub[i]+"</a></li>";
            }
            $subsub.eq(2).html(txt);
            txt='';


            for(var i in lithoNav.sub2[3].subsub){
            txt+="<li><a href='#'>"+lithoNav.sub2[3].subsub[i]+"</a></li>";
            }
            $subsub.eq(3).html(txt);
            txt='';

*/


            //메인메뉴3 
            var $sub3Btn = $('.sub3 .sub-btn');
            var $sub3Sub = $('.sub3 .subsub');
            var tem = '';

            for(var i=0; i<lithoNav.sub3.length; i++){
                txt=lithoNav.sub3[i].sub;
                tem = $sub3Btn.eq(i).html(); //화살표 만들기 위해 sub-btn (a태그) 안에 있는 html속성 값
                txt +=tem;
                $sub3Btn.eq(i).html(txt);
                txt='';
            }

            for(var i in lithoNav.sub3){
                for(var j in lithoNav.sub3[i].subsub){
                    txt+="<li><a href='#'>"+lithoNav.sub3[i].subsub[j]+"</a></li>";
                }
                $sub3Sub.eq(i).html(txt);
                txt='';
            }
           

            //메인메뉴4
            var $subCol = $('.sub4 .col');
            
            for(var i in lithoNav.sub4){
                for(var j in lithoNav.sub4[i].sub){
                    if(j==0){
                        txt+="<dt>"+ lithoNav.sub4[i].sub[j]+"</dt>";
                    }
                    else{
                        txt+="<dd><a href='#'>"+lithoNav.sub4[i].sub[j]+"</a></dd>";
                    }
                }
                $subCol.eq(i).html(txt);
                txt='';
            }


            // txt+="<dd><a href='#'>"+lithoNav.sub4[0].sub[2]+"</a></dd>";
            // txt+="<dd><a href='#'>"+lithoNav.sub4[0].sub[3]+"</a></dd>";
            // txt+="<dd><a href='#'>"+lithoNav.sub4[0].sub[4]+"</a></dd>";
            // txt+="<dd><a href='#'>"+lithoNav.sub4[0].sub[5]+"</a></dd>";


            //메인메뉴5
            var $sub5Btn = $('.sub5 .sub-btn');
            var $sub5Menu = $('.sub5 .sub-menu');



            //메인5의 서브 6개 (0~5까지)
            for(var i in lithoNav.sub5){
                txt=lithoNav.sub5[i].sub
                tem = $sub5Btn.eq(i).html(); //아이콘(화살표) 가져오기
                txt += tem;
                $sub5Btn.eq(i).html(txt);
                txt='';

                //서브서브
                if(i==0){ //0번 서브메뉴 (화살표가 있고, 서브서브서브가 있어서 혼자 따로 뺌!)
                    for(var j in lithoNav.sub5[i].subsub){
                        if(j < 9){ // 0~8번까지
                            txt+="<li><a href='#' class='sub-sub-btn'>"+ lithoNav.sub5[i].subsub[j] +"</a></li>";
                        }
                        else{ //9~12번까지 //화살표때문에
                            txt+="<li><a href='#' class='sub-sub-btn'>"+ lithoNav.sub5[i].subsub[j] + "<i class='fas fa-angle-right'></i></a></li>";
                        }
                        
                    }
                    $sub5Menu.eq(i).html(txt);
                    txt='';
                    //4depth
                    //5-1 서브서브서브 //태그 자체가 다르기때문에 반복할 수 없음
                    //10번쨰
                    txt = $('.sub5-sub1 > div > ul > li ').eq(9).html(); //10번째 내용 가져오기 ★★★★ 가져오지 않으면, 기존 내용 지워짐
                          
                    txt += "<div class='sub-sub-sub sub5-sub1-sub10'>";
                    txt += "    <div class='sub-sub-sub-gap'>";
                    txt += "        <ul>";
                    txt += "            <li><a href='#'>Hamburger menu</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu half</a></li>";
                    txt += "        </ul>";
                    txt += "    </div>";
                    txt += "</div>";
                          
                    $('.sub5-sub1 > div > ul > li ').eq(9).html(txt); //a태그 다음에 내용이 추가되는 것임!!!!!!!!!!!!!!!!!!!!!!
                                                                      //내용이 .next로 추가가됨
                                                                      //따라서 li를 가져왔는데 (li 는 li>a 인 것임, a 형제요소로 추가내용이 추가되는 것임)
                    txt='';
                          
                    //11번쨰
                    txt = $('.sub5-sub1 > div > ul > li ').eq(10).html(); //11번째 내용 가져오기
                          
                    txt += "<div class='sub-sub-sub sub5-sub1-sub11'>";
                    txt += "    <div class='sub-sub-sub-gap'>";
                    txt += "        <ul>";
                    txt += "            <li><a href='#'>Hamburger menu</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "        </ul>";
                    txt += "    </div>";
                    txt += "</div>";
                          
                    $('.sub5-sub1 > div > ul > li ').eq(10).html(txt);
                    txt='';
                          
                    //12번쨰
                    txt = $('.sub5-sub1 > div > ul > li ').eq(11).html(); //12번째 내용 가져오기
                          
                    txt += "<div class='sub-sub-sub sub5-sub1-sub12'>";
                    txt += "    <div class='sub-sub-sub-gap'>";
                    txt += "        <ul>";
                    txt += "            <li><a href='#'>Hamburger menu</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "        </ul>";
                    txt += "    </div>";
                    txt += "</div>";
                          
                    $('.sub5-sub1 > div > ul > li ').eq(11).html(txt);
                    txt='';
                          
                    //13번쨰
                    txt = $('.sub5-sub1 > div > ul > li ').eq(12).html(); //13번째 내용 가져오기
                          
                    txt += "<div class='sub-sub-sub sub5-sub1-sub13'>";
                    txt += "    <div class='sub-sub-sub-gap'>";
                    txt += "        <ul>";
                    txt += "            <li><a href='#'>Hamburger menu</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "            <li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "        </ul>";
                    txt += "    </div>";
                    txt += "</div>";
                          
                    $('.sub5-sub1 > div > ul > li ').eq(12).html(txt);
                    txt='';

                }
                else if(i>0 && i<5){ //1~4번 서브메뉴
                    for(var j in lithoNav.sub5[i].subsub){
                        txt+="<li><a href='#'>"+ lithoNav.sub5[i].subsub[j] +"</a></li>";
                    }
                    $sub5Menu.eq(i).html(txt);
                    txt='';
                }
            }




            //서브서브


            // for(var i in lithoNav.sub5[0].subsub){
            //     if(i < 9){ // 0~8번까지
            //         txt+="<li><a href='#' class='sub-sub-btn'>"+ lithoNav.sub5[0].subsub[i] +"</a></li>";
            //     }
            //     else{ //9~12번까지 //화살표때문에
            //         txt+="<li><a href='#' class='sub-sub-btn'>"+ lithoNav.sub5[0].subsub[i] + "<i class='fas fa-angle-right'></i></a></li>";
            //     }
                
            // }
            // $sub5Menu.eq(0).html(txt);
            // txt='';


            // for(var i in lithoNav.sub5[1].subsub){
            //     txt+="<li><a href='#'>"+ lithoNav.sub5[1].subsub[i] +"</a></li>";
            // }
            // $sub5Menu.eq(1).html(txt);
            // txt='';
            
            // for(var i in lithoNav.sub5[2].subsub){
            //     txt+="<li><a href='#'>"+ lithoNav.sub5[2].subsub[i] +"</a></li>";
            // }
            // $sub5Menu.eq(2).html(txt);
            // txt='';
            
            // for(var i in lithoNav.sub5[3].subsub){
            //     txt+="<li><a href='#'>"+ lithoNav.sub5[3].subsub[i] +"</a></li>";
            // }
            // $sub5Menu.eq(3).html(txt);
            // txt='';
            
            // for(var i in lithoNav.sub5[4].subsub){
            //     txt+="<li><a href='#'>"+ lithoNav.sub5[4].subsub[i] +"</a></li>";
            // }
            // $sub5Menu.eq(4).html(txt);
            // txt='';



                 //메인메뉴6

    
                 var $sub6Btn = $('.sub6 .sub-btn');
                 var $ul12 = $('.sub6 .sub6-sub12 ul');
                 var $ul13 = $('.sub6 .sub6-sub13 ul');
    
    
                 //서브


                 for(var i in lithoNav.sub6){  
                     if(i<11){ 
                        $sub6Btn.eq(i).html(lithoNav.sub6[i].sub);
                     }
                     else{
                        $sub6Btn.eq(i).html(lithoNav.sub6[i].sub+"<i class='fas fa-angle-right'></i>");
                     }
                 }
    
                 //12번째꺼 서브서브

                 for(var j in lithoNav.sub6[11].subsub){
                    txt+="<li><a href='#'>"+lithoNav.sub6[11].subsub[j]+"</a></li>";
                 }
                 $ul12.html(txt);
                 txt='';

 
                 //13번째꺼 서브서브

                 for(var j in lithoNav.sub6[12].subsub){
                    txt+="<li><a href='#'>"+lithoNav.sub6[12].subsub[j]+"</a></li>";
                 }
                 $ul13.html(txt);
                 txt='';




                 //메인메뉴7
                 var $sub7Dl1 = $('.sub7 dl').eq(0); 
                 var $img = $('.sub7 dl img');


                 for(var i in lithoNav.sub7[0].sub){
                    if(i==0 || i==6){  ///  또는(OR) == ||
                        txt+="<dt>"+lithoNav.sub7[0].sub[i]+"</dt>";

                    }
                    else{
                        txt+="<dd><a href='#'>"+lithoNav.sub7[0].sub[i]+"</a></dd>";
                    }                    
                 }
                 $sub7Dl1.html(txt);
                 txt='';

                 //이미지

                 for(var i=0; i<$img.length; i++){
                    txt+=$img.eq(i).attr('src'); 
                    txt+=lithoNav.sub7[i+1].sub[0];
                    $img.eq(i).attr('src', txt); 
                    txt='';
                 }
                 // ↑↑↑ 원래는 each 문 사용해야함!


                // //이미지1 / 이미지 경로 정보 가져와서 객체,배열 이미지 추가
                // txt+=$img.eq(0).attr('src'); // 1) 속성 = src 가져오기
                // // txt+=$img.eq(0).prop('src'); //property 속성 (root 부터 더 세밀한 경로 가져옴)
                // txt+=lithoNav.sub7[1].sub[0]; // 2) 이미지 경로 누적 시키기
                // // console.log('이미지경로', txt);
                // $img.eq(0).attr('src', txt); //attr의 src(소스)를 , === txt로 변경한다 == 1)+2)의 결과값이 됨
                // txt='';

                // //이미지2
                // txt+=$img.eq(1).attr('src'); // ./img/
                // txt+=lithoNav.sub7[2].sub[0];// menu-banner-01.jpg
                // $img.eq(1).attr('src', txt); //
                // txt='';
            }//객체 배열로 메뉴 만들기 함수
            subObjectArrayFn();


           //네비게이션
           
           var $mainBtn = $('.main-btn');
           var $sub = $('.sub');
           var $navUlLi = $('#nav > ul > li');
        
           var $subBtn = $('.sub-btn');
           var $subSub = $('.sub-sub');

           var $subSubBtn = $('.sub-sub-btn');
           var $subSubSub = $('.sub-sub-sub');

           var $mobileBtn = $('#header .mobile-btn');
           var $bar = $('#header .bar');
           var $nav = $('#nav')

           var $window = $(window);
           var pc = 0;
           var mobile = 0;

           var $logoImg = $('#header #logo a img');
           var that = this; // this = litho 라는 객체임


           function pcModeFn(){
           
            $nav.stop().show(0); //얘가 display:block 이라 모바일->pc로 갈때 블럭으로 넓이 100% 잡혀서 어사이드가 내려가버림
            $nav.css({display:'inline-block'}); //따라서 인라인블럭으로 다시 한 번 바꿔줘야함!
            $sub.stop().hide(); // == $sub.css({display:'none'})
            $subSub.stop().hide();
            $subSubSub.stop().hide(); 
            //초기화 (=기본값)
           // $mainBtn.off('click')

           //로고 이미지 바꾸기
           $logoImg.attr('src','./img/logo-white.png');

           //메인버튼(메뉴)
           $mainBtn.on({
               mouseenter:function(e){
                   e.preventDefault();
                $(this).next().stop().show();
               }
           });
           $navUlLi.on({
               mouseleave:function(e){
                e.preventDefault();
                $sub.stop().hide();
                $subSub.stop().hide();
               }
           });
           
           //서브-서브 메뉴
           $subBtn.on({
               mouseenter:function(e){
                e.preventDefault();
                   $subSub.stop().hide();
                   $(this).next().stop().show();
               }
           });

           //서브-서브-서브 메뉴
           $subSubBtn.on({
               mouseenter:function(e){
                e.preventDefault();
                   $subSubSub.stop().hide();
                   $(this).next().stop().show();
               }
           });
           $subSub.on({
               mouseleave:function(e){
                e.preventDefault();
                $subSubSub.stop().hide();
               }
           });
        } //pcModeFn()


           //모바일 메뉴 (980px 이하에서만) : 클릭이벤트

           function mobileModeFn(){
            $sub.stop().hide(); // == $sub.css({display:'none'})
            $subSub.stop().show();
            $subSubSub.stop().show(); 
            $bar.removeClass('addMobile');
            $nav.stop().slideUp(0);
            //초기화 설정 / pc로 갔다가 돌아왔을때 모두 다 초기화되어있어야함!

            //이벤트 삭제하기
            $mainBtn.off('mouseenter');
            $navUlLi.off('mouseleave');
            $subBtn.off('mouseenter');
            $subSubBtn.off('mouseenter');
            $subSub.off('mouseleave');
            $mainBtn.on('click')

            //로고 이미지 바꾸기
            $logoImg.attr('src','./img/logo-yellow-ochre-alt.png');
  



        } // mobileModeFn()

       

          //pc & mobile

        function pcMobileFn(){
            if($window.innerWidth() > 980 ){
                
                pc =1;
                mobile=0;
                that.btn = 0; //pc 버전에서 버튼이 눌러지지 않은 상태로 초기화
                              //얘를 하지 않으면 모바일에서 네비 연상태(that.btn=1)에서 접지 않고
                              //pc로 갔다가 돌아오면, 네비를 다시 열때 (that.btn=0)이되어서 꼬여버림
                pcModeFn();
            }
            else {
                
                pc =0;
                mobile=1;
                mobileModeFn();
            }
        }

        pcMobileFn();
        setTimeout(pcMobileFn, 100); //로딩 시 

      
        $window.resize(function(){
            setTimeout(pcMobileFn, 100); //크기 변경될 시
        });

        window.addEventListener('orientationchange',function(){
            setTimeout(pcMobileFn, 100);
        })

        mobileModeFn();

        //메인버튼(메뉴)
        $mainBtn.on({
            click:function(e){
                e.preventDefault();
                if(mobile==1){
                    $sub.stop().slideUp();
                    $(this).next().stop().slideToggle(300);
                }
            }
        });
        //모바일에서만 동작
        //햄버거 
        $mobileBtn.on({
            click:function(e){
                e.preventDefault();
                $bar.toggleClass('addMobile'); //add + remove 한번 누르면 애드 한번 누르면 리무브
                $nav.stop().slideToggle(300);

                return that.btn == 0 ? that.btn = 1 : that.btn = 0 ;

                //최상위 객체 변수 this.btn으로 하면 litho.btn이 아니라, 햄버거 메뉴 안에 있어서 햄버거함수가 this가됨!
                // == litho.btn = 1;
                // 한번 누르면(메뉴가 내려오면) 1, 다시 누르면(메뉴가 올라가면) 0이 되도록 3항 연산자 사용해서 만듦


                

            },
        });
        

        },
        section1Fn:function(){
           //슬라이드 반응형 
           var $slide = $('#section1 .slide'); //로딩 시 변수 설정
           var $window = $(window);            //로딩 시 변수 설정

           var $winW = $(window).width(); //창 너비 / 즉시 반환
           var $winH = $(window).height(); // 창 높이 / 즉시 반환
           var $slideWrap = $('#section1 .slide-wrap');
           var $nextBtn = $('#section1 .next-btn');
           var $prevBtn = $('#section1 .prev-btn');
           var $pageBtn = $('#section1 .page-btn');
           var $slideView = $('#section1 .slide-view'); //터치 선택자
           var $section1 = $('#section1'); //section1 즉 슬라이드 높이 잡기
           var cnt=0;
           var n = $('#section1 .slide').length - 3; //슬라이드 총갯수 -3(맨앞1, 맨뒤1,인덱스값 만들기) = 2
           var setId = null;
           var setId2 = null;


           function resizeFn(){
               
           $winW = $(window).width();
           $winH = $(window).height();
           $slide.css({width:$winW}); 
           
           //반응형 (자바스크립트 버전)
           
                if(window.orientation==0 || window.orientation==180){ //세로 portrait
                 $winH = $winH
                }
                else if(window.orientation==90 || window.orientation==-90){ //가로 landscape
                // $section1.css({height:600}); 
                if($winW > 980){  // 가로방향에서도 
                 $winH = $winH
                }
                else{
                 $winH = 600;
                }
           }
               
          
           $section1.css({width:$winW, height:$winH}); 
           mainSlideFn();
           }

           
        //    //js버전
        //    $(window).on('orientationchange',function(){
        //     if(window.orientation==0 || window.orientation==180){ //세로 portrait
        //         $section1.css({width:$winW, height:$winH}); 
    
        //        }
        //        else if(window.orientation==90 || window.orientation==-90){ //가로 landscape
        //         $section1.css({width:$winW, height:600}); 
    
        //        }
        //    })


           resizeFn();
           setTimeout(resizeFn,100);
           //setTimeout(실행할 함수, 숫자); == 0.1초 후에 반드시 (실행할 함수)를 실행해라
           //혹시 즉시 실행이 안될 수 있기 때문에 
           


           $window.resize(function(){
            setTimeout(resizeFn, 100);
           });

           window.addEventListener('orientationchange',function(){
            setTimeout(resizeFn, 100);
           })



           //메인슬라이드

           // 1. 메인슬라이드 함수
           // 2. 카운트함수(다음/이전)
           // 3. 버튼이벤트(다음/이전)



           function mainSlideFn(){
              $slideWrap.stop().animate({left:-$winW*cnt}, 300,'easeInOutExpo',function(){
                  if(cnt>n){cnt=0}
                  if(cnt<0){cnt=n}
                  $slideWrap.stop().animate({left:-$winW*cnt}, 0); //초기화

                // 이 안에서 페이지 함수 실행하면 콜백 함수 떄문에 버튼에 불이 한템포 느리게 들어옴
              }); 
              pageBtnColorEventFn(); //페이지 색상 버튼 이벤트 발생을 위해 호출(밖에서)

           }




           function nextSlideCountFn(){
               cnt++;
               mainSlideFn();
           }

           function prevSlideCountFn(){
               cnt--;
               mainSlideFn();
           }

           $nextBtn.on({
               click:function(){
                   if(!$slideWrap.is(':animated')){
                    pauseFn();
                    nextSlideCountFn();
                   }

               }
           });

           $prevBtn.on({
               click:function(){
                   if(!$slideWrap.is(':animated')){
                    pauseFn();
                    prevSlideCountFn();
                   }

               }
           });

           //페이지 버튼 이벤트 (해당 버튼의 색상 변경(addClass))
           //페이지 버튼 색상 변경 이벤트  함수  
           function pageBtnColorEventFn(){
            var z = cnt; //여기서 cnt를 그대로 쓰면 위에 슬라이드에 영향을 미침
            if(z>2)      //슬라이드 함수에서 페이지 함수를 밖에 부르면 1 2 3 이렇게 cnt가 나가서 첫번째에 불이 안들어오기때문에
            {z=0}        //여기서 cnt를 0 1 2로 나오게 설정해줌
            // console.log(z); // 0 1 2 0 1 2 ...
            $pageBtn.removeClass('addPage');
            $pageBtn.eq(z).addClass('addPage'); //위에서 호출해줘야 cnt 연결됨

            // $pageBtn.eq(cnt>2?0:cnt).addClass('addPage'); z사용하지 않고 3항 연산자 사용
           }

           pageBtnColorEventFn(); //로딩 시 실행 -> 페이지켰을때부터 첫번째 버튼에 불 들어와 있음 cnt==0

           //페이지 버튼 클릭 이벤트 (해당 버튼의 슬라이드로 이동)


           //콜백함수가 포함되어있기때문에 each메서드 사용!!

           //최종
           $pageBtn.each(function(idx){
            $(this).on({ 
                click:function(){
                    pauseFn();
                    cnt = idx ; // 클릭한 버튼 인덱스 번호가 슬라이드 번호!
                    mainSlideFn(); 
                }
             });
           });

           //터치 스와이프
           //슬라이드를 오른쪽에서 왼쪽으로 터치하면 다음 슬라이드 카운트함수를 호출
           //슬라이드를 왼쪽에서 오른쪽으로 터치하면 이전 슬라이드 카운트함수를 호출

           $slideView.swipe({
               swipeLeft:function(){  //오른쪽에서 왼쪽으로 = 다음슬라이드
                if(!$slideWrap.is(':animated')){
                    pauseFn();
                    nextSlideCountFn();
                   }
               },
               swipeRight:function(){ //왼쪽에서 오른쪽으로 = 이전슬라이드
                if(!$slideWrap.is(':animated')){
                    pauseFn();
                    prevSlideCountFn();
                   }
               }
           });

           //자동 타이머 실행
           function autoTimerFn(){
               setId = setInterval(nextSlideCountFn, 4000);
           }

           autoTimerFn();


           function pauseFn(){
               clearInterval(setId)
               clearInterval(setId2)
               setId2 = setInterval(function(){
                clearInterval(setId)
                clearInterval(setId2)
                nextSlideCountFn();
                autoTimerFn();
               }, 6000)
           }

        },
        section2Fn:function(){




        },
        section3Fn:function(){
            var $slideWrap = $('#section3 .slide-wrap');
            var $nextBtn = $('#section3 .next-btn');
            var $prevBtn = $('#section3 .prev-btn');
            var $slideView = $('#section3 .slide-view');
            var $slide = $('#section3 .slide');
            var $slideW = $('#section3 .slide').innerWidth(); //슬라이드 한개당 넓이 //반응형 슬라이드 너비
            var $window = $(window);
            var cnt=0;
            var n = $slide.length - 9;
            var setId = null; 


            //반응형 슬라이드
            //1.반응형 함수 만들기
            function responseFn(){
                $slideW = $('#section3 .slide').innerWidth();
                $section3SlideFn();
            }

            //responseFn(); //로딩시
            setTimeout(responseFn, 100);

            //2.윈도우 리사이즈 resize(); 
            $window.resize(function(){
                responseFn(); //화면크기 바뀔때마다
            });
            

            
             function $section3SlideFn(){
                 $slideWrap.stop().animate({left:-$slideW*cnt}, 400,'easeOutExpo', function(){
                     if(cnt>n){cnt=0}
                     if(cnt<0){cnt=n}
                     $slideWrap.stop().animate({left:-$slideW*cnt}, 0)

                 });
             }

             function nextCountFn(){
                 cnt++;
                 $section3SlideFn();

             }
 
             function prevCountFn(){
                 cnt--;
                 $section3SlideFn();
                //  console.log(cnt);
             }
 
             $nextBtn.on({
                 click:function(){
                    timerFn();
                     if(!$slideWrap.is(':animated')){
                     nextCountFn();
                    }
                 }
             });
 
             $prevBtn.on({
                 click:function(){
                    timerFn();
                     if(!$slideWrap.is(':animated')){
                     prevCountFn();
                    }
                 }
             });

             $slideView.swipe({
                 swipeLeft:function(){
                    timerFn();
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                       } 
                 },
                 swipeRight:function(){
                    timerFn();
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                       }
                 }
             });

             
             //자동 타이머
             function autoPlay(){
                //console.log(setId); //할당 이전 번호 = null;
                setId = setInterval(nextCountFn, 4000); //로딩 시 4초 간격으로 재생 //setId 타이머가 돌아갈때 할당되는 메모리 번호?/환경변수
                //console.log(setId); //할당 후 메모리 번호 (컴퓨터에서 랜덤 지정)
             }

             autoPlay();

             /*
             //1. 
             //이벤트(클릭,스와이프) 발생하면 애니메이션 일시중지 => 타이머함수 만들기
             //4초간 이벤트가 없으면 (클릭,스와이프) 
             //다음 슬라이드 곧바로 실행 nextCountFn()
             //자동 타이머 재생 autoPlay()

             var t =0;
             setId2 = null;
             function timerFn(){
                t=0; //초기화
                 clearInterval(setId);
                 clearInterval(setId2);
                 //console.log(setId); //일시 중지된 메모리 번호 (컴퓨터에서 랜덤 지정)
                 setId2 = setInterval(counterFn, 1000);

                 function counterFn(){
                     t++;
                     console.log(t);
                     if(t>=4){
                         t=0; //초기화
                     clearInterval(setId);
                     clearInterval(setId2);
                     nextCountFn();
                     autoPlay();
                     console.log('setId2 일시중지:', setId2)
                    }

                 }
             }
*/
             //setId = 이미지 슬라이드가 자동 진행되는 번호
             //setId2 = 이벤트 발생으로 자동 진행 중지 후 시간 재기 //얘가 중지 안되면 counterFn 에 if문 계속 진행됨
             


             //2. 콜백 함수로 타이머
             //이벤트(클릭,스와이프) 발생하면 애니메이션 일시중지 => 타이머함수 만들기
             //4초간 이벤트가 없으면 (클릭,스와이프) 
             //다음 슬라이드 곧바로 실행 nextCountFn()
             //자동 타이머 재생 autoPlay()

             var t=0;
             var setId2 = null;

             function timerFn(){
                 t=0;
                 clearInterval(setId);
                 clearInterval(setId2); //이건 터치가 안됐을때 중지 시키는거
                 setId2 = setInterval(function(){
                     t++;
                     if(t>=4){
                         clearInterval(setId2);
                         clearInterval(setId);
                         t=0;

                         nextCountFn();
                         autoPlay();
                     }
                 }, 1000);
             }






        },
        section4Fn:function(){
            
        },
        section5Fn:function(){
            // 크기가 다른 슬라이드 이동하기 ★★★★
          var $slideWrap = $('#section5 .slide-wrap');
          var $slide = $('#section5 .slide');
          var $slideW = 445; //1번째 -445*0 2번째 -445*1 -235  3번째 -445*2 -235 4번째 -445*3 -235 리턴 -445*0 -0이되어야함
          var cnt = 0;
          var n = $slide.length -9;
          var a = 0;
          var setId = null;
          var setId2 = null;
            


          function slide5Fn(){

            
            if(cnt>1){ //2번째 이상 슬라이드부터 -235를 추가
                a=-235;
            }
            // if(cnt<=1)
            //     a=0; 
            else{
                a=0;
            }
            $slideWrap.stop().animate({left:(-$slideW*cnt)+a}, 400, function(){
                if(cnt>n){
                    cnt=0;
                    a=0; /* 마지막 슬라이드에서 a 초기화 해야함 */}
                if(cnt<0){
                    cnt=n;
                    a=-235; //4 3 2 순으로 넘어가니까 -235가 들어가있어야함?!
                }
                $slideWrap.stop().animate({left:(-$slideW*cnt)+a}, 0)
            })

        // 1 만 445 이고,
        // 2, 3, 4 슬라이드는 모두 235가 추가되어있어야함!
            
          }

          function nextSlideFn(){
              cnt++;
              slide5Fn();
          }
          function prevSlideFn(){
              cnt--;
              slide5Fn();
          }

          $slideWrap.swipe({
              swipeLeft:function(){
                pause();
                nextSlideFn();
              },
              swipeRight:function(){
                pause();
                prevSlideFn();
              }
          });
          

          function autoPlay(){
              setId = setInterval(nextSlideFn, 4000);
          }

          autoPlay();

          function pause(){
            clearInterval(setId);
            clearInterval(setId2);

            setId2 = setInterval(function(){
                clearInterval(setId);
                clearInterval(setId2);
                nextSlideFn();
                autoPlay();
            },5000)
          }

          

        },
        section6Fn:function(){
            var $columnUl = $('#section6 .wrap .gap .container > ul > li ul');
            var $column0 = $('#section6 .wrap .gap .container > ul > li').eq(0);
            var $column1 = $('#section6 .wrap .gap .container > ul > li').eq(1);
            var $column2 = $('#section6 .wrap .gap .container > ul > li').eq(2);
            var $column3 = $('#section6 .wrap .gap .container > ul > li').eq(3);
            var cnt=0;
            var cnt2=0;
            var cnt3=0;
            var cnt4=0;
            var setId = null;
            var setId2 = null;
            var setId3 = null;
            var setId4 = null;

            //자동화
            var timer = 5;
            
            var cnt1 = [0,0,0,0];
            var cnt2 = [0,0,0,0];
            var cnt3 = [0,0,0,0];
            var cnt4 = [0,0,0,0];

            var setId1 = [null, null, null, null];
            var setId2 = [null, null, null, null];
            var setId3 = [null, null, null, null];
            var setId4 = [null, null, null, null];

            var num1 = [];
            var num2 = [];
            var num3 = [];
            var num4 = [];

            var t = 0;
            var st1 = null;
            var st2 = null;

            var $height = $('#section6 .wrap .gap .container > ul');

            //html data-?(number:변경가능)가져오기
            //객체 요소 내에 data-? 속성을 가져오기
            
            // console.log($column0.find('.col').eq(0).data('number'));
            // console.log($column0.find('.col').eq(1).data('number'));
            // console.log($column0.find('.col').eq(2).data('number'));
            // console.log($column0.find('.col').eq(3).data('number'));

            $column0.find('.col').each(function(idx){
               num1[idx] = $(this).data('number'); //누적되어 들어감
               //console.log(num1); 
            });

            $column1.find('.col').each(function(idx){
               num2[idx] = $(this).data('number'); 
            });

            $column2.find('.col').each(function(idx){
               num3[idx] = $(this).data('number'); 
            });

            $column3.find('.col').each(function(idx){
               num4[idx] = $(this).data('number'); 
            });





            //find 주의점
            //find 는 자식요소 또는 자손요소만 검색 가능! (자기 자신은 못 찾음)

            //2530
            // $column0.find('ul').eq(0).animate({top:-65*2},600)
            // $column0.find('ul').eq(1).animate({top:-65*5},600)
            // $column0.find('ul').eq(2).animate({top:-65*3},600)
            // $column0.find('ul').eq(3).animate({top:-65*0},600)
     
           
            //타이머
            //ul 1번째칸 1번 = 2
            // setId = setInterval(function(){
            //     cnt++;
            //     if(cnt>65*2){
            //         clearInterval(setId);
            //         cnt=0;
            //     }
            //     else{
            //         $column0.find('ul').eq(0).css({ top:-cnt }) //0.001초에 1px씩 움직임
            //     }
            // },1)
            // //ul 1번째칸 2번 = 5
            // setId2 = setInterval(function(){
            //     cnt2+=2;
            //     if(cnt2>65*5){
            //         clearInterval(setId2);
            //         cnt2=0;
            //     }
            //     else{
            //         $column0.find('ul').eq(1).css({ top:-cnt2 }) //0.001초에 1px씩 움직임
            //     }
            // },1)

            // //ul 1번째칸 3번 = 3
            // setId3 = setInterval(function(){
            //     cnt3+=1;
            //     if(cnt3>65*3){
            //         clearInterval(setId3);
            //         cnt3=0;
            //     }
            //     else{
            //         $column0.find('ul').eq(2).css({ top:-cnt3 }) //0.001초에 1px씩 움직임
            //     }
            // },1)

            // //ul 1번째칸 4번 = 0
            // setId4 = setInterval(function(){
            //     cnt4+=1;
            //     if(cnt4>65*0){
            //         clearInterval(setId4);
            //         cnt4=0;
            //     }
            //     else{
            //         $column0.find('ul').eq(3).css({ top:-cnt4 }) //0.001초에 1px씩 움직임
            //     }
            // },1)


            //스크롤 이벤트 
            $(window).scroll(function(){
                
                //offset - 맨위에서 section5의 top까지의 간격
                if($(window).scrollTop() >= $('#section5').offset().top ){
                    if(t==0){
                         t=1; //변수 수정해서 다음에 조건 만족못하게 (=한번만 실행하고 끝나게)
                         $('#section6 .wrap .gap .container > ul').addClass('addCount');
                        setTimeout(formatFn,100);
                        setTimeout(countFn,200);
                         
                    }
                }

                if($(window).scrollTop() == 0){ //윈도우 맨위에 올라갔을때 다시 초기화
                   t = 0;
                   cnt1 = [0,0,0,0];
                   cnt2 = [0,0,0,0];
                   cnt3 = [0,0,0,0];
                   cnt4 = [0,0,0,0];
                   $('#section6 .wrap .gap .container > ul').removeClass('addCount');
                   
                }

                
            });


            //초기화 함수
            function formatFn(){
                $columnUl.css({top:0});     
            }
            
           st1 = setTimeout(formatFn,100);
           clearTimeout(st1);
                

            //카운트 함수
            st2 = setTimeout(countFn,200);
            clearTimeout(st2);


            function countFn(){

            setId1.forEach(function(el,idx){
                setId1[idx] = setInterval(function(){
                    cnt1[idx]++;
                    if(cnt1[idx]> 65*num1[idx]){
                        clearInterval(setId1[idx]);
    
                    }
                    else{
                        $column0.find('ul').eq(idx).css({ top:-cnt1[idx] }) 
                    }
                },5)

            });

            setId2.forEach(function(el,idx){
                setId2[idx] = setInterval(function(){
                    cnt2[idx]++;
                    if(cnt2[idx] > 65*num2[idx]){
                        clearInterval(setId2[idx]);
                    }
                    else{
                        $column1.find('ul').eq(idx).css({top:-cnt2[idx]})
                    }
                },5)
            });

            setId3.forEach(function(el,idx){
                setId3[idx] = setInterval(function(){
                    cnt3[idx]++;
                    if(cnt3[idx] > 65*num3[idx]){
                        clearInterval(setId3[idx]);
                    }
                    else{
                        $column2.find('ul').eq(idx).css({top:-cnt3[idx]})
                    }
                },5)
            });
                

            setId4.forEach(function(el,idx){
                setId4[idx] = setInterval(function(){
                    cnt4[idx]++;
                    if(cnt4[idx] > 65*num4[idx]){
                        clearInterval(setId4[idx]);
                    }
                    else{
                        $column3.find('ul').eq(idx).css({top:-cnt4[idx]})
                    }
                },5)
            });
                
        }

                
            


            

            
    
           

        },
        section7Fn:function(){
           
        },
        section8Fn:function(){
        
        },
        section9Fn:function(){
            
        },
        section10Fn:function(){
            
        },
        footerFn:function(){

        }
    };
    litho.init();
})(jQuery);