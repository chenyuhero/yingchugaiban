
$(window).load(function() {
});


$(function(){
    // $("header .menublock .menulink>li").eq(2).after("<li class='logo2'><a href='/'><img src='/images/logo.png' alt='{dede:global.cfg_webname/}'></a></li>");

    // 导航变色
    var loc_currenturl = window.location.href;
    var currenturl = loc_currenturl.substring(loc_currenturl.lastIndexOf('/') + 1);

    // 导航变色  二级导航变色


    $("header .menublock .menulink>li>a").each(function(){
        var currurl_1 = $(this).attr("href");
        var currul = currurl_1.substring(currurl_1.lastIndexOf('/')+1);
        if ((currenturl)==currul) {
            $(this).parent().addClass("active");
        }
    });

    $("header .menublock .menulink .sub-nav>li>a").each(function(){
        var currurl_12 = $(this).attr("href");
        var currul2 = currurl_12.substring(currurl_12.lastIndexOf('/')+1);
        if ((currenturl)==currul2) {
            $(this).parents(".sub-nav").parent("li").addClass("active");
        }
    });
});
