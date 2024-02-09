// CRUD Operations
function todoApp() {
  const todoList = [];

  // create
  function createTodo(todo) {
    // some() true/false
    const ifExist = todoList.some(function (item) {
      return item.title === todo.title;
    });

    if (ifExist) {
      console.log("todo exist");
      return;
    } else {
      todoList.push(todo);
    }

    // console.log(`Create - ${todo.title} successful!`);
  }
  // Read
  function readTodo() {
    if (todoList.length === 0) {
      console.log("No todos");
      return;
    }

    const result = todoList.map(function (todo) {
      return todo.title;
    });
    console.log(`Display todo list: \n \n ${result}`);
  }

  // Update
  function updateTodo(todo) {
    const result = todoList.find(function (item) {
      return item.id === todo.id;
    });

    if (!result) {
      console.log("no todo with this id is present" + todo.id);
      return;
    }

    Object.assign(result, todo);

    const index = todoList.indexOf(result);
    todoList[index] = result;

    console.log(`${todo.title} has been updated`);
    console.log(todoList, "todo List");
  }

  // Delete

  // filter todo

  // search todo

  return {
    createTodo,
    readTodo,
    updateTodo,
  };
}

// Init app
const app = todoApp();
// access of todoApp methods

const todoOne = {
  id: 0,
  title: "learn html",
  status: "completed",
};

const todoTwo = {
  id: 1,
  title: "learn css",
  status: "completed",
};

const todoThree = {
  id: 2,
  title: "learn js",
  status: "in-progress",
};

const todoFour = {
  id: 3,
  title: "learn react",
  status: "todo",
};

const todoFourUpdated = {
  id: 3,
  title: "learn react updated",
  status: "in-progress",
};

app.createTodo(todoOne);
app.createTodo(todoTwo);
app.createTodo(todoThree);
app.createTodo(todoFour);

app.readTodo();
app.updateTodo(todoFourUpdated);
