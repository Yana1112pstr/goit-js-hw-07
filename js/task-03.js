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


function creatGallery(images) {
const ulGallery = document.querySelector('#gallery');
ulGallery.classList.add('list');

const markUpString = images.reduce((string, image)  => (string + `<li>
<img class = "item-img"
src = "${image.url}" 
alt = "${image.alt}" 
width = "400"> 
<li>`), "");

ulGallery.insertAdjacentHTML('afterbegin', markUpString);

return ulGallery;
};

console.log(creatGallery(images));  





  // const allImg = images.map(image => {
  //     const newTagLi = document.createElement('li');
  //     newTagLi.classList = 'item';
  //   const newTag = document.createElement('img');
  //   newTagLi.append(newTag);
  //   newTag.src = image.url;
  //   newTag.alt = image.alt;
  //   newTag.width = 400;
  //   return newTagLi;
  // });
  // const gallery = document.querySelector('#gallery');
  // gallery.classList = 'list';
  // gallery.append(...allImg);
  // console.log(gallery);