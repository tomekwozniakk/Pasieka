const $burger = $("button.burger");
const $nav = $("nav");
const $icon = $(".burger i");

$burger.on("click", function() {
    $icon.toggleClass("active")
    $nav.toggleClass("active")
});

