import AppHeader from "./components/AppHeader";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const initialTodoItems = [
    {
      name: "Eat Food",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "4/10/2023",
    },
  ];

  return (
    <center>
      <AppHeader />
      <ToDoContainer initialTodoItems={initialTodoItems} />
    </center>
  );
}

export default App;
