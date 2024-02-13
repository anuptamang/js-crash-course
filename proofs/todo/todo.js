// CRUD Operations
function todoApp() {
  const todoList = [];
  // create todo
  function createTodo(todo) {
    // Check if todo already exists by checking title
    const isExists = todoList.some(function (item) {
      return item.title === todo.title; // true/false
    });

    if (isExists) {
      console.log(`Todo with title ${todo.title} already exists`);
      return;
    } else {
      todoList.push(todo);
    }

    console.log(`Create - ${todo.title} successful!`);
  }

  function readTodo() {
    if (todoList.length === 0) {
      return "No todos, please add some todos";
    }

    const result = todoList
      .map(function (todo) {
        return todo.title;
      })
      .join(", ");

    console.log("Display Todo List: \n \n", result);
  }

  function updateTodo(id, todo) {
    const result = todoList.find((todo) => todo.id === id); // returns object / undefined

    if (!result) {
      return `No todo with index ${id} found`;
    }

    Object.assign(result, todo); // merge the todo object with the result object

    const index = todoList.indexOf(result);
    todoList[index] = result;

    console.log(`${todo.title} has been updated`);
    console.log(todoList, "todo list");
    return todoList;
  }

  function deleteTodo(id) {
    const result = todoList.filter((todo) => todo.id !== id);
    if (result && result.length === 0) return `No todo with index ${id} found`;
    console.log(`Todo with id ${id} has been deleted`);
    console.log(result, "todo list");
    return result;
  }

  function filterTodo(status) {
    const result = todoList.filter((todo) => todo.status === status);
    console.log(result, "filtered list");
    return result;
  }

  function searchTodo(title) {
    const result = todoList.find(
      (todo) => todo.title.toUpperCase() === title.toUpperCase()
    );
    if (!result) return `No ${title} todo found`;
    console.log(result, "search result");
    return result;
  }

  return {
    createTodo,
    readTodo,
    deleteTodo,
    updateTodo,
    filterTodo,
    searchTodo,
  };
}

// Initialize an app
const todo = todoApp();

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

// todo.createTodo(todoReact);
// todo.createTodo(todoHtml);
// todo.createTodo(todoCss);
// // todo.createTodo(todoCss);
// todo.createTodo(todoHtml);
// todo.readTodo();
// todo.createTodo(todoCss);
// todo.deleteTodo(1);
// todo.createTodo(todoReact);
// todo.updateTodo(1, updateTodoHtml);
// console.log(todo.readTodo());

// const originalTodo = todo.readTodo();
// console.log(originalTodo, "original todo");
// console.log(todo.readTodo(), "original todo");
// todo.updateTodo(1, {
//   title: "Learn React",
//   status: "Completed",
// });
// console.log(todo.readTodo(), "updated todo");
// console.log(todo.searchTodo("Learn JavaScript"));

// console.log(todo.deleteTodo(4));
