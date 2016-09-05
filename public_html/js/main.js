
/* global listContainer, append, todoadd */

$(document).ready(function (){
    
 
  //event on clic
  $('#addtodo').on('click', function() {
      
      //list container
      var listContainer = $('#todo001');
      
       event.preventDefault(); // stop default behaviour of submit button
    // value of input
     var inputValue = $('#todo_text').val();

    // add new list item
    listContainer.append('<li class="todo" id="addtodo001"> <img class="move" src="img/menu-icon.png" width="8px" height="16px" alt="move"><a class="remove"><img src="img/images.png" width="16px" height="16px" alt="Delete"></a><span style="margin-left: 5px;">'+inputValue+'</span></li>');
    
//    listContainer.append('<li id="todoadd"><form accept-charset="UTF-8" id="new_todo"><div style=" margin:0; pading:0; display: inline;"></div><input id="todo_text" name="todo[text]" type="text"><input class="add" id="addtodo" name="commit" type="submit" value="Add task ↲"></form></li>');
    
    $('#todo_text').val('');
  });
    
     $('#addschedule').on('click', function() {
      
      //list container
      var listContainer = $('#schedule001');
      
       event.preventDefault(); // stop default behaviour of submit button
    // value of input
     var inputValue = $('#schedule_text').val();

    // add new list item
    listContainer.append('<li class="todo"> <img class="move" src="img/menu-icon.png" width="8px" height="16px" alt="move"><a class="remove"><img src="img/images.png" width="16px" height="16px" alt="Delete"></a><span style="margin-left: 5px;">'+inputValue+'</span></li>');
    // clear value input
    $('#schedule_text').val('');
  });
  
    $('#adddelegate').on('click', function() {
      
      //list container
      var listContainer = $('#delegate001');
      
       event.preventDefault(); // stop default behaviour of submit button
    // value of input
     var inputValue = $('#delegate_text').val();

    // add new list item
    listContainer.append('<li class="todo"> <img class="move" src="img/menu-icon.png" width="8px" height="16px" alt="move"><a class="remove"><img src="img/images.png" width="16px" height="16px" alt="Delete"></a><span style="margin-left: 5px;">'+inputValue+'</span></li>');
    // clear value input
    $('#delegate_text').val('');
  });
  
  $('#adddontdo').on('click', function() {
      
      //list container
      var listContainer = $('#dontdo001');
      
       event.preventDefault(); // stop default behaviour of submit button
    // value of input
     var inputValue = $('#dontdo_text').val();

    // add new list item
    listContainer.append('<li class="todo"> <img class="move" src="img/menu-icon.png" width="8px" height="16px" alt="move"><a class="remove"><img src="img/images.png" width="16px" height="16px" alt="Delete"></a><span style="margin-left: 5px;">'+inputValue+'</span></li>');
    // clear value input
    $('#dontdo_text').val('');
  });
  
  $("#todo001, #schedule001, #delegate001, #dontdo001").sortable({
      connectWith: ".connectedSortable",
      placeholder: "ui-state-highlight"
  }).disableSelection();
  
  
});


$(document).on("click", "a.remove" , function() {
            $(this).parent().remove();
        });





