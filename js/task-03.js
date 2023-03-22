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

const listEl = document.querySelector(".gallery");
// const listGallery = images.map(({ url, alt }) => {
//   const galleryItemEl = document.createElement('li');
//   galleryItemEl.classList.add('gallery-item');
//   const galleryImgEl = document.createElement('img');
//   galleryImgEl.src = url;
//   galleryImgEl.alt = alt;
//   galleryItemEl.append(galleryImgEl);
//   return galleryItemEl;
// });
// listEl.append(...listGallery);

const gallery = images.map(({url, alt}) => `<li class = "list-item"><img class = "image" scr = '${url}' alt = '${alt}'></li>`).join("");
listEl.insertAdjacentHTML("afterbegin", gallery);


// const makeGalleryCard = ({url, alt}) => `<li><img scr = '${url}' alt = '${alt}'></li>`;
// const markup = images.map((el) => makeGalleryCard(el)).join("");
// listEl.insertAdjacentHTML("afterbegin", markup);

console.log(listEl);