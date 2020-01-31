/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("navBar");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
   else  {
     x.style.display = "block";
   }
}

function displayNav()
{
    var x = document.getElementById("navBar");
    var w = window.outerWidth;
    // console.log("hello");
    if (w >= 650)
    {
         x.style.display = "block";
    }
    else {
         x.style.display = "none";
    }
}
