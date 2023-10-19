$(document).ready(function(){
  
  
    $(".add-btn").click(function(){
      var taskText = $(".task-input").val();

      if (taskText != ""){
        var newTask = $("<li>"+taskText+"</li>");
        $(newTask).addClass("tp-cont");
        $(".task-list").append(newTask);
        $(".task-input").val("");
      };
    });
    
    $(document).on("dblclick", "li", function(){
        $(this).remove();
    });

    $(document).on("click", "li", function(){
        
    });
    
  });