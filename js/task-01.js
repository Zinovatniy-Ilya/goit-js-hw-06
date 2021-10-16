const listEl = document.querySelector('#categories');
const itemList = listEl.querySelectorAll('.item')
console.log('Number of categories:', itemList.length);
for (let i of itemList) {
    const cotegiries = i.querySelector('h2')
    const elements = i.querySelectorAll('li')
    console.log('categories:', cotegiries.textContent);
    console.log('Elements:', elements.length);
}