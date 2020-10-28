// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)

var w = window.outerWidth;

window.onscroll = function() {
    //scrollFunction()
};

function scrollFunction() {
    //if the screen width (w) is wider than this number,
    if (w > 1000) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navBar").style.top = "0";
        } else {
            document.getElementById("navBar").style.top = "-60px";
        }
    }
}
