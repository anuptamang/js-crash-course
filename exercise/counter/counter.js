// create counter
function counterApp() {
  let counter = 0; // local state

  function increment() {
    if (counter < 10) {
      counter++;
    } else {
      console.log("no increment available!");
    }
    console.log(counter, "increment counter");
  }

  function decrement() {
    if (counter > 0) {
      counter--;
    } else {
      console.log("no decrement available!");
    }
    console.log(counter, "decrement counter");
  }

  return {
    increment,
    decrement,
  };
}

const counter = counterApp();
counter.increment();
counter.increment();
