function TodoApp() {
  const todoList = [];

  const createTodo = (todo) => {
    const isExists = todoList.some((item) => item.title === todo.title);

    if (isExists) {
      console.log(`Todo with title ${todo.title} already exists`);
      return;
    } else {
      todoList.push(todo);
    }

    console.log(`Create - ${todo.title} successful!`);
  };

  const readTodo = () => {
    if (todoList.length === 0) {
      console.log("No todos, please add some todos");
      return;
    }

    const result = todoList.map((todo) => todo.title).join(", ");

    console.log("Display Todo List: \n \n", result);
  };

  const updateTodo = (id, todo) => {
    const result = todoList.find((item) => item.id === id);

    if (!result) {
      return `No todo with index ${id} found`;
    }

    // Object.assign(result, todo);
    const updatedTodo = { ...result, ...todo };

    // const index = todoList.indexOf(updatedTodo);
    // todoList[index] = result;
    const updatedList = todoList.map((item) => {
      if (item.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return item;
      }
    });

    console.log(`${todo.title} has been updated`);
    console.log(updatedList, "updated todo list");
  };

  const deleteTodo = (id) => {
    const result = todoList.filter((todo) => todo.id !== id);
    if (result && result.length === 0) return `No todo with index ${id} found`;
    console.log(`Todo with id ${id} has been deleted`);
    console.log(result, "todo list");
    return result;
  };

  const filterTodo = (status) => {
    const result = todoList.filter((todo) => todo.status === status);
    if (result.length === 0) return `No ${status} todo found`;
    console.log(result, "filtered list");
    return result;
  };

  const searchTodo = (title) => {
    const result = todoList.find(
      (todo) => todo.title.toUpperCase() === title.toUpperCase()
    );
    if (!result) return `No ${title} todo found`;
    console.log(result, "search result");
    return result;
  };

  return {
    createTodo,
    readTodo,
    updateTodo,
    deleteTodo,
    filterTodo,
    searchTodo,
  };
}

// Initialize an app
const todo = TodoApp();

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
  title: "Learn HTML updated--again",
  status: "Completed",
};

todo.createTodo(todoReact);
todo.createTodo(todoHtml);
todo.createTodo(todoCss);

todo.updateTodo(1, updateTodoHtml);
