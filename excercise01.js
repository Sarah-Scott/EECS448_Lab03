
function passwordValid() {
  var p1 = document.getElementById("fstPassword").value;
  var p2 = document.getElementById("sndPassword").value;

  if (p1.length < 8)
  {
    alert("Password is too short")
  }
  else if (p1 != p2)
  {
    alert("Passwords do not match");
  }
  else
  {
    alert("Passwords are valid");
  }

}
