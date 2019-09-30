
var hotties = ["leo.jpg" , "bradley.jpg" , "idris.jpg" , "brad.jpg", "johnny.jpg"];

var index = 0;
var htmlImage = document.getElementById("viewImage");
htmlImage.src = hotties[0];
//showImage(index);
//
function changeSlide(n)
{
  showImage(index += n);
}

function showImage(n)
{
  var i;
  if (n >= hotties.length)
  {
    index = 0;
  }
  if (n < 0)
  {
    index = hotties.length - 1;
  }
  //for (i=0; i<hotties.length;i++)
  //{
  //  htmlImage.src = images[0];
  //}
  htmlImage.src = hotties[index];
}
