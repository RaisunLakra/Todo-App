import ToDoItem from "./ToDoItem";

function ToDoList({ todoItems, onDeleteClicked }) {
  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClicked={onDeleteClicked}
        />
      ))}
    </>
  );
}

export default ToDoList;
