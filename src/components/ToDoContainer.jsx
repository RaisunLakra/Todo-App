import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import EmptyListError from "./EmptyListError";
import { useState } from "react";

function ToDoContainer({ initialTodoItems }) {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (todoName, dueDate) => {
    console.log(`New item added: TodoName = ${todoName}, TodoDate=${dueDate}`);
    const newTodoItem = [...todoItems, { name: todoName, dueDate: dueDate }];
    setTodoItems(newTodoItem);
  };

  const handleDeleteButton = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItem);
    console.log(`Deleted Item is: ${todoItemName}`);
  };

  return (
    <div className="container text-center">
      <AddToDo onNewItem={addNewItem} />
      {todoItems.length == 0 && <EmptyListError />}
      <ToDoList todoItems={todoItems} onDeleteClicked={handleDeleteButton} />
    </div>
  );
}

export default ToDoContainer;

{
  /*
To use state and handler functions outside the functional component, you can create a custom hook that encapsulates the state and the handler function. Here's how you can do it:

```javascript
import { useState } from 'react';

// Custom hook for managing todo items
function useTodoItems(initialTodoItems) {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  // Handler function to add a new todo item
  const addNewItem = (todoName, todoDate) => {
    // Create a new todo item object
    const newItem = {
      name: todoName,
      dueDate: todoDate,
    };
    
    // Update the todoItems state by adding the new item
    setTodoItems([...todoItems, newItem]);
    
    // Optionally, you can perform additional actions here
    console.log(`New item added: TodoName = ${todoName}, TodoDate=${todoDate}`);
  };

  // Return the state and handler function
  return { todoItems, addNewItem };
}

export default useTodoItems;
```

Then, you can use this custom hook in your functional component:

```javascript
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import EmptyListError from "./EmptyListError";
import useTodoItems from "./useTodoItems"; // Import the custom hook

function ToDoContainer({ initialTodoItems }) {
  // Call the custom hook to initialize todoItems state and addNewItem handler function
  const { todoItems, addNewItem } = useTodoItems(initialTodoItems);

  return (
    <div className="container text-center">
      <AddToDo onAdd={addNewItem} />
      {todoItems.length === 0 && <EmptyListError />}
      <ToDoList todoItems={todoItems} />
    </div>
  );
}

export default ToDoContainer;
```

In this example, the `useTodoItems` custom hook encapsulates the state (`todoItems`) and the handler function (`addNewItem`) for managing todo items. The `ToDoContainer` component then uses this custom hook to initialize the state and handler function and passes the `addNewItem` function to the `AddToDo` component as a prop. This approach keeps related logic together and promotes reusability by allowing multiple components to share the same state and handler function.
 */
}
