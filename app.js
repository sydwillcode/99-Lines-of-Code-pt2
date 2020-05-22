document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("SING!");
  button.appendChild(buttonText);
  document.body.appendChild(button);

  button.addEventListener("click", linesOfCode);

  let friends = ["Sydni", "NaTasha", "Cleveland", "Nikki", "Brandon"];

  function linesOfCode() {
    //loop to cycle through array of "friends"
    for (let names of friends) {
      //for each "friends" create a <div>
      let div = document.createElement("div");
      div.classList = "friend";
      document.body.appendChild(div);
      //for each "friends" create a <h3>
      let friendHeader = document.createElement("h3");
      div.appendChild(friendHeader);
      //Add each "friends" name to header
      friendHeader.textContent = names;
      for (let i = 99; i > 0; i--) {
        //For each line, create <p> element
        let paragraph = document.createElement("p");
        let lines = function () {
          if (i <= 99) {
            return "lines";
          } else if (i == 1) {
            return "line";
          }
        };
        //Add song to <p>
        paragraph.textContent = `${i} ${lines()} of code on the wall; ${names} strikes one out, clears it all out ${ i - 1} ${lines()} of code on the wall`;
        //Add <p> to div
        div.appendChild(paragraph);
      }
    }
  }
});
