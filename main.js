function ScrollTo(name) {
  //init thread
  ScrollToResolver(document.getElementById(name));
}


//gets element and  scrolls to it
function ScrollToResolver(elem) {
  var jump = parseInt(elem.getBoundingClientRect().top * .2);
  document.body.scrollTop += jump;
  document.documentElement.scrollTop += jump;
  //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
  if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
    elem.lastjump = Math.abs(jump);
    setTimeout(function() {
      ScrollToResolver(elem);
    }, "50");
  } else {
    elem.lastjump = null;
  }
  var x = document.getElementById("myLinks");
  x.style.display = "none";
}

//this is the top nav that allows it to show
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
