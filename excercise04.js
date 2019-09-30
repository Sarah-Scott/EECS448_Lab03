function updateStyling()
{
  var pTag = document.getElementById("paragraph");

  pTag.style.border =
    document.getElementById("width").value +
    "px solid rgb(" +
    +document.getElementById("redBorder").value +
    "," +
    +document.getElementById("greenBorder").value +
    "," +
    +document.getElementById("blueBorder").value +
    ")";

  pTag.style.backgroundColor =
    "rgb(" +
    +document.getElementById("redBackground").value +
    "," +
    +document.getElementById("greenBackground").value +
    "," +
    +document.getElementById("blueBackground").value +
    ")";
}
