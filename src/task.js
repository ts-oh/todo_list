// create a factory function that creates a todo object
const createTask = (title, description, priority, duedate, id) => {
  const task = {
    title: title,
    description: description,
    priority: priority,
    duedate: duedate,
    id: id,
  }
  return { task }
}

export { createTask }
