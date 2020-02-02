   var index = 0;
   var int = 0;
   function changeBanner() {
       [].forEach.call(
           document.images,
           function(v, i) {
               document.images[i].hidden = i !== index
           }
       );
       index = (index + 1) % document.images.length;
   }

   function visibleCadre()
   {
       var x = document.getElementById("cadreImages");
     


            x.style.display = "block";



   }
   window.onload = function() {
       setInterval(changeBanner, 1000)
       setInterval(visibleCadre, 1000)
   };
