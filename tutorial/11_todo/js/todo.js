const form = document.querySelector('.todo_form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')

let todos = []

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function removeTodo(e) {
  e.target.parentNode.remove()
  todos = todos.filter((todo) => todo.id != e.target.parentNode.id)
  saveTodo()
}

function paintTodo(text) {
  const li = document.createElement('li')
  const span = document.createElement('span')

  li.textContent = text
  li.id = todos.length + 1
  span.textContent = '🗑'

  li.appendChild(span)
  ul.appendChild(li)

  todos.push({
    id: todos.length + 1,
    text: text,
  })

  saveTodo()
  span.addEventListener('click', removeTodo)
}

function loadTodo() {
  const LS_TODOS = localStorage.getItem('todos')

  if (LS_TODOS != null) {
    const parseTodos = JSON.parse(LS_TODOS)
    parseTodos.forEach((todo) => paintTodo(todo.text))
  }
}

function init() {
  loadTodo()

  form.addEventListener('submit', function (e) {
    if (input.value == '') return
    e.preventDefault()
    paintTodo(input.value)
    input.value = ''
  })
}

init()
