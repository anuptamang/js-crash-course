function TodoApp() {
  this.todoList = [];

  // create todo
  this.createTodo = function (todo) {
    // Check if todo already exists by checking title
    const isExists = this.todoList.some(function (item) {
      return item.title === todo.title; // true/false
    });

    if (isExists) {
      console.log(`Todo with title ${todo.title} already exists`);
      return;
    } else {
      this.todoList.push(todo);
    }

    console.log(`Create - ${todo.title} successful!`);
  };

  this.readTodo = function () {
    if (this.todoList.length === 0) {
      return "No todos, please add some todos";
    }

    const result = this.todoList
      .map(function (todo) {
        return todo.title;
      })
      .join(", ");

    console.log("Display Todo List: \n \n", result);
  };

  this.updateTodo = function (id, todo) {
    const result = this.todoList.find((todo) => todo.id === id); // returns object / undefined

    if (!result) {
      return `No todo with index ${id} found`;
    }

    Object.assign(result, todo); // merge the todo object with the result object

    const index = this.todoList.indexOf(result);
    this.todoList[index] = result;

    console.log(`${todo.title} has been updated`);
    console.log(this.todoList, "updated todo list");
    return this.todoList;
  };

  this.deleteTodo = function (id) {
    const result = this.todoList.filter((todo) => todo.id !== id);
    if (result && result.length === 0) return `No todo with index ${id} found`;
    console.log(`Todo with id ${id} has been deleted`);
    console.log(result, "todo list");
    return result;
  };

  this.filterTodo = function (status) {
    const result = this.todoList.filter((todo) => todo.status === status);
    if (result.length === 0) return `No ${status} todo found`;
    console.log(result, "filtered list");
    return result;
  };

  this.searchTodo = function (title) {
    const result = this.todoList.find(
      (todo) => todo.title.toUpperCase() === title.toUpperCase()
    );
    if (!result) return `No ${title} todo found`;
    console.log(result, "search result");
    return result;
  };

  // in this case no return of the object
}

// Initialize an app with new keyword
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
