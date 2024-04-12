import { MdDeleteForever } from "react-icons/md";

function ToDoItem({ todoName, todoDate, onDeleteClicked }) {
  return (
    <div className="row">
      <div className="col-6 border">{todoName}</div>
      <div className="col-4 border">{todoDate}</div>
      <div className="col-2 border">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            onDeleteClicked(todoName);
          }}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
