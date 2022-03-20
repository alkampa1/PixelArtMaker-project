// Select color input
// Select size input
var color, height, width;

// When size is submitted by the user, call makeGrid()
const sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener("submit", function (e) {
  e.preventDefault();

  // Initialize the size inputs
  width = document.getElementById("inputWidth").value;
  height = document.getElementById("inputHeight").value;

  // Call makeGrid() and pass the size inputs
  makeGrid(height, width);
});

function makeGrid(row, cell) {
  // Select the table to create the grid
  let table = document.getElementById("pixelCanvas");

  // Reset the grid
  table.innerHTML = "";

  // Create the rows and add the cells
  for (let i = 1; i <= row; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= cell; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }

    // Add the row to the table
    table.appendChild(tr);
  }

  // Add color to the grid
  let pixel = document.querySelectorAll("td");
  for (let x = 0; x < pixel.length; x++) {
    pixel[x].addEventListener(
      "click",
      function () {
        // Initialize the color input
        color = document.getElementById("colorPicker").value;

        // Remove the background color if it already exists
        if (this.attributes.style) {
          this.removeAttribute("style");
        } else {
          this.style.backgroundColor = color;
        }
      },
      false
    );
  }
}
