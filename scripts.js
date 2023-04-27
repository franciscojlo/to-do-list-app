$(document).ready(function(){

  function newItem() {

    //1. Adding a new item to the list of items: 
    let inputValue = $('#input').val();
    let li = $('<li></li>');
    let text = $('<span></span>').text(inputValue);
    li.append(text);

    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }

    //2. Crossing out an item from the list of items:
    function crossOut() {
      li.toggleClass("strike");
    }

    li.on("dblclick",crossOut);

    //3(i). Adding the delete button "X": 
    let crossOutButton = $('<button></button>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
  li.remove();
}

    // 4. Reordering the items: 
    $('#list').sortable();

  }

  $('#button').on("click", newItem);

});