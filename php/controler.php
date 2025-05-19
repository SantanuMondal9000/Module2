<?php

require_once 'Database.php';
require_once 'TodoApp.php';

//Load the initial Todo data.
if (isset($_POST['initial'])) {
  $todo = new TodoApp();
  $todoDataSet = $todo->getTodo();
  echo json_encode(["status" => $todoDataSet]);
}

//Set the todo Data in database.
if (isset($_POST['toDo'])) {
  $todoData = $_POST['toDo'];
  $todo = new TodoApp();
  $result = $todo->setTodo($todoData);
  echo json_encode(["status" => $result]);
}

//Delete the todo data in database.
if (isset($_POST['postID'])) {
  $post_id = $_POST['postID'];
  $todo = new TodoApp();
  $result = $todo->deleteTodo($post_id);
  echo json_encode(["status" => $result]);
}
?>
