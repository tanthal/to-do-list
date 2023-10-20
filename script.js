$(document).ready(function(){
  
  //DISABLE CONTEXT MENU ON RIGHT CLICK
  document.addEventListener("contextmenu", event =>{
    event.preventDefault();
  });
  
  //ADD BUTTON LOGIC
  //GETS THE VALUE FROM INPUT FORM
  //CHECKS IF THE VALUE IS NOT EMPTY
  //ADDS A CLASS, ADDS A LIST ELEMENT AND ERASES INPUT VALUE
  $(".add-btn").click(function(){
    var taskText = $(".task-input").val();
    if (taskText !=""){
      var newTask = $("<li>"+taskText+"</li>");
      $(newTask).addClass("pr-low");
      $(".task-list").append(newTask);
      $(".task-input").val("");
    };  
  });
  
  //ADD BUTTON LOGIC
  //CLICKS ADD BUTTON WHEN ENTER KEY IS PRESSED
  $(".task-input").keyup(function(event){
    if (event.which == 13){
      $(".add-btn").click();
    }
  });
  
  //MOVES A TASK TO COMPLETED LIST ON RIGHT CLICK
  $(document).on("mousedown", "li", function(event){
    switch (event.which){
      case 3:
        if (!$(this).hasClass("done")){
          $(this).detach();
          $(this).removeClass("pr-high pr-medium pr-low");
          $(this).addClass("done");
          $(this).appendTo(".compl-list");
        }
    }
  });
  
  //REMOVES THE LIST ITEM ON DOUBLE CLICK
  $(document).on("dblclick", "li", function(){
    $(this).remove();
  });
  
  //ADDS A PRIORITY TO THE LIST ITEM ON CLICK
  $(document).on("click", "li", function(){
    if($(this).hasClass("pr-low")){
      $(this).removeClass("pr-low");
      $(this).addClass("pr-medium");
     } else if($(this).hasClass("pr-medium")){
       $(this).removeClass("pr-medium");
       $(this).addClass("pr-high");
     } else {
        $(this).removeClass("pr-high");
        $(this).addClass("pr-low");
     };
  });
});