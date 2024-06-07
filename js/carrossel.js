const carrosselElement = document.querySelector('#home.carrossel');
const prevBtn = document.getElementById('carrossel-prev');
const nextBtn = document.getElementById('carrossel-next');
const imagemBase = 'carrossel';
const totalImages = 5;

document.addEventListener('DOMContentLoaded', () => {
  // Pré-carregar imagens
  for (let i = 0; i < totalImages; i++) {
    const img = new Image();
    img.src = `${imagemBase}-${i}.jpg`;
  }

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
