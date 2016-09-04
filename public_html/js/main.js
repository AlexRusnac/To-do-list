
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
    listContainer.append('<li> ' + inputValue + '</li>');
    
    
    // clear value input
    $('#todo_text').val('');

      
  });
    
});







//$('#todo001').sortable({
//  connectWith: "'#schedule001', '#delegate001', '#dontdo001'"
//});
//
//$('#schedule001').sortable({
//  connectWith: "'#todo001', '#delegate001', '#dontdo001'"
//});
//
//$('#delegate001').sortable({
//  connectWith: "'#schedule001', '#todo001', '#dontdo001'"
//});
//
//$('#dontdo001').sortable({
//  connectWith: "'#schedule001', '#delegate001', '#todo001'"
//});

////$(function () {
//        $("#todo001,#schedule001,#delegate001,#dontdo001").sortable({
//                connectWith: "#todo001,#schedule001,#delegate001,#dontdo001",
//                start: function (event, ui) {
//                        ui.item.toggleClass("highlight");
//                },
//                stop: function (event, ui) {
//                        ui.item.toggleClass("highlight");
//                }
//        });
//        $("#todo001,#schedule001,#delegate001,#dontdo001").disableSelection();
//});


//// Check browser support
//if (typeof(Storage) !== "undefined") {
//    // Store
//    localStorage.setItem("lastname", "Smith");
//    // Retrieve
//    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//} else {
//    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
//}

// $(function() {
//$( ".sortable_list" ).sortable({
//    connectWith: ".connectedSortable",
//    /*stop: function(event, ui) {
//        var item_sortable_list_id = $(this).attr('id');
//        console.log(ui);
//        //alert($(ui.sender).attr('id'))
//    },*/
//    receive: function(event, ui) {
//        alert("dropped on = "+this.id); // Where the item is dropped
//          alert("sender = "+ui.sender[0].id); // Where it came from
//          alert("item = "+ui.item[0].innerHTML); //Which item (or ui.item[0].id)
//    }         
//}).disableSelection();
//    
//
//});
