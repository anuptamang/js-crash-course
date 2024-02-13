// CRUD Operations
// this

// class App {

// }

class TodoApp {
  constructor() {
    this.todoList = [];
  }

  // create method
  createTodo = (todo) => {
    // some() true/false
    const ifExist = this.todoList.some((item) => item.title === todo.title);

    if (ifExist) {
      console.log("todo exist");
      return;
    } else {
      this.todoList.push(todo);
    }

    console.log(`Create - ${todo.title} successful!`);
  };

  // Read
  readTodo = () => {
    if (this.todoList.length === 0) {
      console.log("No todos");
      return;
    }

    // const result = todoList.map(function (todo) {
    //   return todo.title;
    // });
    const result = this.todoList.map((item) => item.title);

    console.log(`Display todo list: \n \n ${result}`);
  };

  // Update
  updateTodo = (updateItem) => {
    const result = this.todoList.find((item) => item.id === updateItem.id);

    if (!result) {
      console.log("no todo with this id is present" + updateItem.id);
      return;
    }

    Object.assign(result, updateItem);

    const index = this.todoList.indexOf(result);
    this.todoList[index] = result;

    console.log(`${updateItem.title} has been updated`);
    console.log(this.todoList, "todo List");
  };

  // Delete
  deleteTodo = (deleteItem) => {
    const isItExist = this.todoList.find((item) => item.id === deleteItem.id);

    if (!isItExist) {
      console.log("no todo with this id is present" + deleteItem.id);
    } else {
      const output = this.todoList.filter((item) => item.id !== deleteItem.id);

      console.log(output, "updated list");
    }
  };

  // filter todo
  // status = in-progress, completed, todo
  filterTodo = (status) => {
    const filterResult = this.todoList.filter(
      (item) => item.status.toUpperCase() === status.toUpperCase()
    );

    console.log(filterResult, "filtered list");
  };

  // search todo
  searchTodo = (title) => {
    const searchResult = this.todoList.filter(
      (item) => item.title.toUpperCase() === title.toUpperCase()
    );
    if (!searchResult) {
      console.log("There are no item found!");
      return;
    }

    console.log(searchResult, "search list");
  };
}

// Init app
const app = new TodoApp();
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
  title: "learn react updated --again updateTodo",
  status: "in-progress",
};

app.createTodo(todoOne);
app.createTodo(todoTwo);
app.createTodo(todoThree);
app.createTodo(todoFour);

app.readTodo();
app.updateTodo(todoFourUpdated);
app.deleteTodo(todoThree);
app.filterTodo("in-Progress");
app.searchTodo("learn js");

// user = 'in-PRogress'
// db = 'in-progress'

// IN-PROGRESS === IN-PROGRESS
