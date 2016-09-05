
/* global listContainer, append */

$(function (){
    
   // button
  var add = $('#add'); 
  
  //list container
  var listContainer = $('#todo001');
  
  //event on clic
  add.on('click', function() {
      
       event.preventDefault(); // stop default behaviour of submit button
    // value of input
    inputValue = $('#todo_text').val();

    // add new list item
    listContainer.append('<li class="todo"> <img class="move" src="img/menu-icon.png" width="8px" height="16px" alt="move"><a class="remove"><img src="img/images.png" width="16px" height="16px" alt="Delete"></a><span style="margin-left: 5px;">'+inputValue+'</span></li>');
    // clear value input
    $('#todo_text').val('');

      
  });
    
});


$(document).on("click", "a.remove" , function() {
            $(this).parent().remove();
        });





