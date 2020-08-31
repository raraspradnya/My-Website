const carouselImages= document.querySelector('.carousel_image');
const carousel= document.querySelector('.carousel');
const previous= document.querySelector('.prev');
const next= document.querySelector('.next');
// const buttons = document.querySelectorAll('.carousel_btn');

// next.addEventListener("click", function() {
//   direction = -1;
//   carousel.style.justifyContent = 'flex-start';
//   carouselImages.style.transform = 'translate(540px)';
// });

// previous.addEventListener("click", function() {
//   if (direction === -1){
//     carouselImages.appendChild(slider.firstElementChild);
//     direction = 1;
//   }
//   direction = 1;
//   carousel.style.justifyContent = 'flex-end';
//   carouselImages.style.transform = 'translateX(-540px)';
// });


// carouselImages.addEventListener('transitionend', function(){
//   if (direction === -1){
//     carouselImages.appendChild(slider.firstElementChild);
//   }else if (direction === 1){
//     carouselImages.prepend(slider.lastElementChild);
//   }
//   carouselImages.style.transition = 'none';
//   carouselImages.style.transform = 'translate(0)';
//   setTimeout(()=>{
//     carouselImages.style.transform = 'all 0.5s';
//   })
// });

const numberOfImages = document.querySelectorAll(".imgs").length;

let imageIndex = 1;
let translateX = 0;


// buttons.forEach(button =>{
//   button.addEventListener('click', event =>{
//     if (event.this.id === "prev"){
//       if (imageIndex !== 1){
//         imageIndex--;
//         translateX+=540;
//       }
//     }
//     if (event.target.id === "next"){
//       if (imageIndex !== numberOfImages){
//         imageIndex++;
//         translateX-=540;
//       }
//     }
//     carouselImages.style.transform =`translateX(${translateX}px)`;
//   })
// })


previous.addEventListener('click', event =>{
  if (imageIndex !== 1){
    imageIndex--;
    translateX+=540;
  }
  carouselImages.style.transform =`translateX(${translateX}px)`;
});

next.addEventListener('click', event =>{
  if (imageIndex !== numberOfImages){
    imageIndex++;
    translateX-=540;
  }
  carouselImages.style.transform =`translateX(${translateX}px)`;
});