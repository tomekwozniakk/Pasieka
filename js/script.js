const $burger = $("button.burger");
const $nav = $("nav");
const $icon = $(".burger i");

$burger.on("click", function() {
    $icon.toggleClass("active")
    $nav.toggleClass("active")
});

$("section").on("click", function() {
    $(".popup_wrap, popup_wrap div").addClass("active");
    $("div.wrap").addClass("blur");
});

$("button.close").on("click", function() {
    $(".popup_wrap, .popup_wrap div").removeClass("active");
    $("div.wrap").removeClass("blur");
    $("button.close").removeClass("active")
})

$(".one").on("click", function() {
    $(".popup_one, .popup_one button").addClass("active");
});

$(".two").on("click", function() {
    $(".popup_two, .popup_two button").addClass("active");
});

$(".three").on("click", function() {
    $(".popup_three, .popup_three button").addClass("active");
});

$(".four").on("click", function() {
    $(".popup_four, .popup_four button").addClass("active");
});
