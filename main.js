var images = [
    "https://th.bing.com/th/id/OIP._B9ya8KfF3Ud3JALbr1gIQHaLt?pid=ImgDet&rs=1",
    "https://media.istockphoto.com/vectors/old-woman-portrait-lady-grandma-cartoon-vector-id884151910?k=6&m=884151910&s=170667a&w=0&h=26vv3caoAIO54aU3AMxAaP3ikzIJBtjqzcFNOT93M3k=",
    "https://webstockreview.net/images/clipart-mom-cartoon.jpg"
      ];
      var i = 0;
      function nextslide() {
        if (i== 9)
          {
            i=0;
          }
        document.getElementById("album").src = images[i];
        i++;
      }
      
  var i = 0;
  function nextslide() {
    if (i== 9)
      {
        i=0;
      }
    document.getElementById("album").src = images[i];
    i++;
  }
  