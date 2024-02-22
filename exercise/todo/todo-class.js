class TodoApp {
  constructor() {
    this.todoList = []; //state
  }

  createTodo(todo) {
    const isExists = this.todoList.some((item) => item.title === todo.title);

    if (isExists) {
      console.log(`Todo with title ${todo.title} already exists`);
      return;
    } else {
      this.todoList.push(todo);
    }

    console.log(`Create - ${todo.title} successful!`);

    // After creating a new todo, invoke readTodo to display updated list
    this.readTodo();
  }

  readTodo = () => {
    if (this.todoList.length === 0) {
      console.log("No todos, please add some todos");
      return;
    }

    const result = this.todoList.map((todo) => todo.title).join(", ");

    console.log("Display Todo List: \n \n", result);
  };

  updateTodo = (id, todo) => {
    const result = this.todoList.find((item) => item.id === id);

    if (!result) {
      return `No todo with index ${id} found`;
    }

    Object.assign(result, todo);

    const index = this.todoList.indexOf(result);
    this.todoList[index] = result;

    console.log(`${todo.title} has been updated`);
    console.log(this.todoList, "todo list");
    return this.todoList;
  };

  deleteTodo = (id) => {
    const result = this.todoList.filter((todo) => todo.id !== id);
    if (result && result.length === 0) return `No todo with index ${id} found`;
    console.log(`Todo with id ${id} has been deleted`);
    console.log(result, "todo list");
    return result;
  };

  filterTodo = (status) => {
    const result = this.todoList.filter((todo) => todo.status === status);
    if (result.length === 0) return `No ${status} todo found`;
    console.log(result, "filtered list");
    return result;
  };

  searchTodo = (title) => {
    const result = this.todoList.find(
      (todo) => todo.title.toUpperCase() === title.toUpperCase()
    );
    if (!result) return `No ${title} todo found`;
    console.log(result, "search result");
    return result;
  };
}

// Initialize an app
const todo = new TodoApp();

const todoHtml = {
  id: 1,
  title: "Learn HTML",
  status: "Completed",
};

const todoCss = {
  id: 2,
  title: "Learn CSS",
  status: "Completed",
};

const todoJs = {
  id: 3,
  title: "Learn JavaScript",
  status: "Completed",
};

const todoReact = {
  id: 4,
  title: "Learn React.js",
  status: "In Progress",
};

const updateTodoHtml = {
  id: 1,
  title: "Learn HTML updated",
  status: "Completed",
};

todo.createTodo(todoReact);
todo.createTodo(todoHtml);
todo.createTodo(todoCss);

todo.updateTodo(1, updateTodoHtml);
