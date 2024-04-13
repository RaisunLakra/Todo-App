import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";

function AddToDo({ onNewItem }) {
  const todoName = useRef();
  const dueDate = useRef();

  const handleAddButtonClicked = () => {
    onNewItem(todoName.current.value, dueDate.current.value);
    todoName.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <>
      <div className="row">
        <div className="col-6 border">
          {/* Input section */}
          <input type="text" ref={todoName} placeholder="Enter your task" />
        </div>

        <div className="col-4 border">
          {/* Input date */}
          <input type="date" ref={dueDate} />
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
