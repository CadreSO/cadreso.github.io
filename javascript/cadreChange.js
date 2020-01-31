   var index = 0;
   var x  = document.getElementById("cadreImages");
   function changeBanner() {
       [].forEach.call(
           document.images,
           function(v, i) {
               document.images[i].hidden = i !== index
           }
       );
       index = (index + 1) % document.images.length;
       if (index == 0)
       {
          x.style.visibility = "visible";
       }
   }
   window.onload = function() {
       setInterval(changeBanner, 1000)
   };
