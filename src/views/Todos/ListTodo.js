import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo", title: "doing home work" },
      { id: "todo1", title: "making videos" },
      { id: "todo2", title: "fix bug" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    // let currenListTodo = this.state.listTodos;
    // currenListTodo.push(todo);

    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("wao so easy");
  };

  handleDeleteTodo = (todo) => {
    let currenTodos = this.state.listTodos;
    currenTodos = currenTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currenTodos,
    });
    toast.success("delete successfully");
  };

  handleEditTodo = (todo) => {
    let { listTodos, editTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let ListTodoCopy = [...listTodos];

      let objIndex = ListTodoCopy.findIndex((item) => item.id === todo.id);

      ListTodoCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: ListTodoCopy,
        editTodo: {},
      });
      toast.success("update successfully");

      return;
    }

    this.setState({
      editTodo: todo,
    });
  };

  handleOnchangeTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check", isEmptyObj);

    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />

        <>
          <p>Simple TODO app with React.js (Hoi Dan &amp; IT)</p> <br />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child">
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {" "}
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </>
      </div>
    );
  }
}

export default Color(ListTodo);
