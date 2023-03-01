$(document).ready(function() {
    // Header Style App
    $("header li a").on("click" , function() {
        $(this)                   // a
            .addClass("active")  //a.active
            .parent()           // li
            .siblings()        // li , li , li
            .find("a")        // li a , li a , li a
            .removeClass("active");
    })

    // Window App
    var homeOffset = $(".home").offset().top //صفحة ال هوم  علي بعد اد ايه من الصفحة
    console.log(homeOffset);
    $(window).scroll(function() {
        var windowScroll = $(this).scrollTop(); // كل ما اعمل سكرول يقولي انا علي بعد اد ايه من الصفحة
        if ( windowScroll > 200) {
            $("header").addClass("changeHeader")
        }else{
            $("header").removeClass("changeHeader")
        }
    })

    //Dynamic Tabs
    $("header a").click(function() {
        var myId = $(this).attr("id");//home about portfolio contact
        $("body section").hide();
        $("." + myId).fadeIn();      //.home .about .portfolio .contact
    })

    //Filter Images 
    //mixitup jquery plugin " دي مكتبة جاهزة بتعمل نفس الفكرة"
    $(".tabs button").click(function() {
        var myClass = $(this).attr("class");
        if (myClass =="all") {
            $(".images img").fadeIn();
        }else{
            $(".images img").hide();
            $(".images ." + myClass).fadeIn();
        }
    })

    //Calculate | CountDown Characters of Textarea App
    $("textarea").keyup(function(e){
        var myLength = e.target.value.length;
        console.log(myLength);
        if(myLength >= 50) {
            e.target.value = e.target.value.substr(0,50);
        }
    })
})