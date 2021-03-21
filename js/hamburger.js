/*  https://codepen.io/g13nn/pen/eHGEF */

$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".hamburger" ).hide(1000);
$( ".cross" ).show(1000);
$( ".menu" ).slideToggle( "slow", function() {
});
});

$( ".cross" ).click(function() {
$( ".cross" ).hide(1000);
$( ".hamburger" ).show(1000);
$( ".menu" ).slideToggle( "slow", function() {

});
});

});
