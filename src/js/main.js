$(document).ready(function(){
    $(document).ready(function(){
        $(".js-tab a").click(function(e) {
            e.preventDefault(e);
            var current_tab = $(this).attr("href");

            $(".js-tab a").removeClass('active');

            $(this).addClass("active");
            $(".tab-content-item").removeClass('active');
            $(current_tab).addClass("active");
        });
    });
});

