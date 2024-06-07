const carrosselElement = document.querySelector('#home.carrossel');
const prevBtn = document.getElementById('carrossel-prev');
const nextBtn = document.getElementById('carrossel-next');
const totalImages = 5;

document.addEventListener('DOMContentLoaded', () => {
  let currentImageIdx = 0;

  function updateBackgroundImage() {
    const newImageUrl = `url(img/carrossel-${currentImageIdx}.jpg)`;
    carrosselElement.style.backgroundImage = newImageUrl;
  };

  updateBackgroundImage();

  nextBtn.addEventListener('click', () => {
    currentImageIdx = (currentImageIdx + 1) % totalImages;
    updateBackgroundImage();
  });

  prevBtn.addEventListener('click', () => {
    currentImageIdx = (currentImageIdx - 1 + totalImages) % totalImages;
    updateBackgroundImage();
  });

  setInterval(() => {
    currentImageIdx = (currentImageIdx + 1) % totalImages;
    updateBackgroundImage();
  }, 5000);
});
