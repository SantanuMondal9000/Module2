<?php

/**
 * The TodoApp class will responsible to manipulate the todo in database.
 */
class TodoApp extends Database {

  /**
   * The setTodo function will set the todo in the database.
   * 
   * @param $todo
   * 
   * The $todo is the todo data send by the user.
   */
  public function setTodo($todo) {
    try {
      $sql = "INSERT INTO TodoList(Todo) VALUES(?)";
      $stmt = $this->conn->prepare($sql);
      $stmt->execute([$todo]);
      return TRUE;
    } 
    catch (PDOException $e) {
      error_log("Error: " . $e->getMessage());
      return FALSE;
    }
  }

  /**
   * The getTdod function is responsible for return the todo data to the user.
   */
  public function getTodo() {
    try {
      $sql = "SELECT * FROM TodoList ORDER BY todo_time DESC";
      $stmt = $this->conn->prepare($sql);
      $stmt->execute();
      $row = $stmt->fetchALL(PDO::FETCH_ASSOC);
      if ($row > 0) {
        return $row;
      } 
      else {
        return [];
      }
    } 
    catch (PDOException $e) {
      error_log("Error: " . $e->getMessage());
      return [];
    }
  }

  /**
   * The deleteTodo function will delete the todo from the table.
   * 
   * @param $todo_id 
   * 
   * The todo id to be deleted.
   */
  public function deleteTodo($todo_id) {
    try {
      $sql = "DELETE FROM TodoList WHERE id = ?";
      $stmt = $this->conn->prepare($sql);
      $stmt->execute([$todo_id]);
      return TRUE;
    } 
    catch (PDOException $e) {
      error_log("Error: " . $e->getMessage());
      return FALSE;
    }
  }
}
?>
