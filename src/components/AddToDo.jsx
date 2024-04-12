import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <>
      <div className="row">
        <div className="col-6 border">
          {/* Input section */}
          <input
            type="text"
            value={todoName}
            placeholder="Enter your task"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4 border">
          {/* Input date */}
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2 border">
          {/* Input button */}
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
    </>
  );
}

export default AddToDo;
