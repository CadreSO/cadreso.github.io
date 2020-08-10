//gets element and  scrolls to it
function ScrollTo(name) {
    ScrollToResolver(document.getElementById(name));
}

function ScrollToResolver(elem) {
    var jump = parseInt(elem.getBoundingClientRect().top * .2);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
        elem.lastjump = Math.abs(jump);
        setTimeout(function() {
            ScrollToResolver(elem);
            //Higher the number the faster the scrolling
        }, "50");
    } else {
        elem.lastjump = null;
    }
    var x = document.getElementById("myLinks");
    x.style.display = "none";
}

//allows the top nav to show with small media devices
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
