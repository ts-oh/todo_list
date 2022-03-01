// import task object
import { createTask } from "./task"

// create a project array
let projects = []

// store task object into a project array
const storeTask = (createTask) => {
  projects.push(createTask)
}

storeTask(createTask("Study", "create a todo list", "high", "12-03-22", "100"))
console.log(projects)

// export project so it can be drawn by the dom
export { projects, storeTask }
