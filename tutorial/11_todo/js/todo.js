const form = document.querySelector('.todo_form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')

const todos = []

function removeTodo(e) {
  console.log(e.target.parentNode)
  e.target.parentNode.remove()
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

  span.addEventListener('click', removeTodo)

  console.log(todos)
}

function init() {
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    paintTodo(input.value)
  })
}

init()
