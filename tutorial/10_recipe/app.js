const form = document.querySelector("form")
const input = form.querySelector("input")
const foodList = document.querySelector(".food_list")

const APP_ID = "bd8c0fc8"
const APP_KEY = "c59f7e86f1ad4f91a95437698e7173bb"

const initQuery = "chicken"

function paintRecipe(items) {
  console.log(items)

  let foods = ""

  items.map((item) => {
    foods += `<div class="food">
          <div class="food_img"><img src="${item.recipe.image}" alt="" /></div>
          <div class="food_info">
            <div class="food__title">
              <h3>${item.recipe.label}</h3>
              <a href="${item.recipe.url}" target="_blank" class="btn">View recipe</a>
            </div>
            <p class="food_extra">Calories : ${item.recipe.calories}</p>
            <p class="food_extra">Diet Labels : ${item.recipe.dietLabels}</p>
            
          </div>
        </div>`
  })
  foodList.innerHTML = foods
}

async function getRecipe(query) {
  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

  const response = await fetch(baseUrl)
  const data = await response.json()

  paintRecipe(data.hits)
}

function init() {
  getRecipe(initQuery)

  form.addEventListener("submit", function (e) {
    e.preventDefault()
    const query = input.value
    getRecipe(query)
    input.value = ""
  })
}

init()
