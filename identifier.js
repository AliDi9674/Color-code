var inputElement = document
  .getElementById("color_input")
  .addEventListener("keyup", inputHandler);

function inputHandler(color) {
  var text = color.target.value;
  if (typeof text === "string" && !isNaN(Number("0x" + text))) {
  } else {
    text = "000000";
  }
  console.log(text);

  //select element
  document.getElementById("color_preview").style.backgroundColor = "#" + text;
}

