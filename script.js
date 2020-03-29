function addToDoItem(event) { // with each entry into input field this function is run
    var check = createHtmlElement("input", " "); // creates the checkbox to show to do list element as completed, "input" is defined in createHTMLElement function
    var userInput = document.getElementById ("userInput").value; // creates link to html input
    var li = createHtmlElement("li", ''); // after input is entered, this creates html li element to which each input entry is added as a new li element 
    var dBtn = createHtmlElement("button", "X"); // creates the 'x' button to delete li elements from the ul
    var listText = document.createTextNode(userInput); //creates text area for li element


  dBtn.addEventListener("click", function(event){ // on click delete button runs function removeToDoItem
    removeToDoItem(li);
  });

  check.addEventListener("change", function(event) { // on change of checkbox runs toggle event (tick and untick)
    toggleToDoItem(event, li);
  });

  li.appendChild(check); // adds checkbox to each li element
  li.appendChild(listText);
  li.appendChild(dBtn); // adds delete button to each li element

  if (userInput === '') {
    alert("You must write something!"); // pop up alert if user doesn't enter anything into input field
  } else {
    document.getElementById("list").appendChild(li); // otherwise adds entry from input field to list
  }
  document.getElementById("userInput").value = ""; // after input field add to li, resets input field to blank for next entry
}


function createHtmlElement (htmlTag, text) { // function to create packaged li elements with complete and delete abilities
    var element = document.createElement(htmlTag);

    if (htmlTag === 'input'){
        element.type = 'checkbox'; // ensures if htmlTag is input, result shows a textbox
    }
    if (text !== ""){
        var textNode = document.createTextNode(text); 
        element.appendChild(textNode); // adds text node to li 
    }
    return element; // this returns entire function each time it's called
}


function removeToDoItem(li) {
    list.removeChild(li);
}
function toggleToDoItem(event, li) {
    li.classList.toggle("completed");
}
