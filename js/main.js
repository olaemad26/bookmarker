
let homeHeight=$("#about").offset().top;
$(window).scroll(function(){
    let currentOffset=$(window).scrollTop();
    if(currentOffset>homeHeight)
    {
        console.log(currentOffset)
        $(".cf").css({"background-color":"rgba(0,0,0,0.6)","transition":"all 2s"})  
    }
    else
    {
        $(".cf").css({"background-color":"transparent"})
    }
})

let colors=["#373540","#5b6b65","#945c49","#273a5a"]

for(let i=0;i<colors.length;i++)
{
    $(".color-option ul li").eq(i).css("background-color",colors[i])
}

$(".color-option ul li").click(function(){
    let color=$(this).css("background-color");
    $(".change").css("color",color)
})
$("#navbarSupportedContent ul li a").click(function(){
    $("#navbarSupportedContent ul li a").removeClass("active")
    $(this).addClass("active")
   
})

$(".setting").click(function(){
    let width=$(".color-option").outerWidth();
    if($(".color-box").css("right")=="0px"){
        $(".color-box").animate({"right":-width},2000)
    }
    else{
        $(".color-box").animate({"right":0},1500)
    }
    
})
// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel();
//   });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})