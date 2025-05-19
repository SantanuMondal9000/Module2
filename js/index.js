$(document).ready(function () {
  $("#todo-add-btn").click(function () {
    let todo = $("#todo").val();
    $.ajax({
      url: './php/controler.php',
      type: 'POST',
      data: { toDo: todo },
      dataType: 'json',
      success: function (response) {
        console.log("dksfk");
        console.log(response);
        addTodo(todo,0);
        $("#todo").val("");
    },
      error: function (xhr, status, error) {
        console.log("AJAX Error: " + status + " - " + error);
        console.log(xhr.responseText);
      }
    });
  })
  
  $("#todo-delete-btn").on('click',function(){
    $(this).remove();
  });

  //initial todo loader.
    let initial = '';
    $.ajax({
      url: './php/controler.php',
      type: 'POST',
      data: {initial: initial},
      dataType: 'json',
      success: function (response) {
        console.log(response);
        response.status.forEach(todo => {
            addTodo(todo.Todo,todo.checked,todo.id);
        });
    },
      error: function (xhr, status, error) {
        console.log("AJAX Error: " + status + " - " + error);
        console.log(xhr.responseText);
      }
    });
  })

//Function to add the Todo in the page.
function addTodo(todoData, checked,id) {
  if (!checked) {
    const postHTML = `
          <div class="todo-item">
            <input type="checkbox" name="todo-check" id="todo-check">
            <div class="todo-body">
              <p class="todo-data">${todoData}</p>
              <input type="text" class="todo-edit" name="todo-edit" id="todo-edit">
            </div>
            <div class="todo-action">
              <button class="todo-edit-btn" id="todo-edit-btn" data-post-id="${id}"></button>
              <button class="todo-delete-btn" id="todo-delete-btn"data-post-id="${id}"></button>
            </div>
          </div>
        `;
    $(".todo-list-area").prepend(postHTML);
  }
}



//Function to delete the todo.
$("body").on("click","#todo-delete-btn",function(){
  let button = $(this);
  const postId = button.data("post-id");
  $.ajax({
    url: './php/controler.php',
    type: 'POST',
    data: {postID: postId},
    dataType: 'json',
    success: function (response) {
      window.location.reload();
  },
    error: function (xhr, status, error) {
      console.log("AJAX Error: " + status + " - " + error);
      console.log(xhr.responseText);
    }
  });
});

//Function to edit the todo.
$("body").on("click","#todo-delete-btn",function(){
  let button = $(this);
  const postId = button.data("post-id");
  $.ajax({
    url: './php/controler.php',
    type: 'POST',
    data: {postID: postId},
    dataType: 'json',
    success: function (response) {
      window.location.reload();
  },
    error: function (xhr, status, error) {
      console.log("AJAX Error: " + status + " - " + error);
      console.log(xhr.responseText);
    }
  });
});
