// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};
    var w = window.outerWidth;
function scrollFunction() {

    if (w >= 700)
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navBar").style.top = "0";
      } else {
        document.getElementById("navBar").style.top = "-50px";
      }
    }
}
