var is_full_screen = false;
var token;

var fixed_full_screen_btn = $("#fixed-full-screen-btn");
var fixed_full_screen_icon = fixed_full_screen_btn.find("i");

$.postJSON = function(url, data, callback){
    $.post(url, data, callback,"json");
};

// If Dom Loaded
$(function(){

    // Toggle a Full Screen
    __full_screen_btn_click_event();

    // Get a IP Address
    __get_ip();

    // Get Token to All Form Input Element
    __set_token_in_all_forms();

    // Run All "a-tag" Prefetch
    __prefetch();

    // Activation ToolTip
    activation_tooltip();

});

/**
 * If Full Screen Button Click,Toggle a Full Screen
 */
function __full_screen_btn_click_event()
{
    fixed_full_screen_btn.on("click",function(){
        if(!is_full_screen)
        {
            __run_full_screen();
        }
        else
        {
            __exit_full_screen();
        }
    });
}

/**
 * Run Full Screen
 */
function __run_full_screen()
{
    fixed_full_screen_icon.addClass("fa-compress-arrows-alt");
    fixed_full_screen_icon.removeClass("fa-expand-arrows-alt");
    is_full_screen = true;
    $('html').fullscreen();
}

/**
 * Exit Full Screen
 */
function __exit_full_screen()
{
    fixed_full_screen_icon.addClass("fa-expand-arrows-alt");
    fixed_full_screen_icon.removeClass("fa-compress-arrows-alt");
    is_full_screen = false;
    $.fullscreen.exit();
    /* Or
    fixed_full_screen_icon.addClass("fa-expand-arrows-alt");
    fixed_full_screen_icon.removeClass("fa-compress-arrows-alt");
    */
}

/**
 * Get a IP Address
 */
function __get_ip()
{
    $.postJSON(
        api_url + "get/ip/",
        null,
        function(data){
            let ip_address = data["ip"];
        }
    );
}

/**
 * If Dom Loaded,Get Token to All Form Input Element
 */
function __set_token_in_all_forms()
{
    let temp_token = $("#main-js").data("token");
    let form = $("form");
    (
        form.length === 0
        ||
        $.postJSON(
            api_url + "get/token/",
            {
                "temp_token":temp_token
            },
            function(data){
                token = data["token"];
                for(let i = 0;i < form.length;i++)
                {
                    form.eq(i).append(
                        $("<input>",
                            {
                                type:"hidden",
                                name:"token",
                                value:token
                            }
                        )
                    );
                }
            }
        )
    );
}

/**
 * If Dom Loaded,Run All "a-tag" Prefetch
 */
function __prefetch()
{
    let a = $("a");
    let temp_hrefs = [];
    for(let i = 0;i < a.length;i++)
    {
        let target_href = a.eq(i).attr("href");
        (
            (
                target_href.indexOf("#") > -1
                ||
                temp_hrefs.indexOf(target_href) > -1
            )
            ||
            $("<link>",
                {
                    rel:"prefetch",
                    href:target_href,
                }
            ).appendTo('head')
        );
        temp_hrefs.push(target_href);
    }
}

/**
 * Activation ToolTip
 */
function activation_tooltip()
{
    $("[data-toggle='tooltip']").tooltip();
}