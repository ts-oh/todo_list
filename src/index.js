import "./style.css"
import { projects, storeTask } from "./projects"
import { createTask } from "./task"

function runMain() {
  const mainContent = document.querySelector("#content")
}

runMain()

// When user clicks on new task btn. use is presented a task card.
// New task is created as an object from a constructor/class.
// Task card has input for title, description, priority, due date and complete properties.
// When user submits new task object it is pushed and stored in the array.
// The task is rendered onto the DOM.
// Every task should be visible in the 'all section'
// If due date is not today, it should only be visible in the 'upcoming secion'.
// If task card is marked as done it should be visible in the 'completed section' and removed from other section.

// Todo list has 'default' list
// Todo is able to create seperate list into 'projects'.
// Task can be created under projects and grouped into their particular 'projects'.

// Application logic is seperated.
// 1. create new todos.
// 2. setting todos as complete.
// 3. changing todo prioirty
// 4. DOM redering should be serprate as well.
