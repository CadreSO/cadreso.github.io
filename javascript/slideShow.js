var myIndex = 0;


function slideShow() {
    var x = document.getElementsByClassName("mySlides");
    console.log(x.length);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    if (x.length > 0) {
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        x[myIndex - 1].style.display = "block";
    }

    setTimeout(slideShow, 5000);
    // Change image every 2 seconds
}

slideShow();
