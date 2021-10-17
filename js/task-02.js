const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

const listIngredients = document.querySelector('#ingredients')
const arrayIngredients = []
const ingredient = ingredients.map(elem => {
    const liItem = document.createElement('li')
    liItem.textContent = elem
    arrayIngredients.push(liItem)
})
listIngredients.append(...arrayIngredients)







//   const listIngredients = document.querySelector('#ingredients')
//   const elements = ingredients.forEach((ingredient) => {
//       const itemList = document.createElement('li')
//       itemList.classList.add('item')
//       itemList.textContent = ingredient
//       listIngredients.appendChild(itemList)
//   }
//   )
