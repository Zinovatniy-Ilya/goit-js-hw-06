const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin',images.map(({url, alt}) => `<li><img src="${url}" alt="${alt}" width='150' height='100'></li>`).join(''),);



//   const gallery = document.querySelector('.gallery')
//   const object = images.forEach(({url, alt}) => {
//       const item = document.createElement('li')
//       const image = document.createElement('img')
//       item.appendChild(image)
//       image.src = url
//       image.alt = alt
//       image.height = 100
//       image.width = 150
//       gallery.appendChild(item)
// })
