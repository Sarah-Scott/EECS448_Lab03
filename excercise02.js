var index = 1;
showImage(index);

function changeSlide(n)
{
  showImage(index += n);
}

function showImage(n)
{
  var i;
  var x = document.getElementsByClassName("hotties");
  if (n > x.length)
  {
    index = 1;
  }
  if (n < 1)
  {
    index = x.length;
  }
  for (i=0; i<x.length;i++)
  {
    x[i].style.display = "none";
  }
  x[index-1].style.display="block";
}
