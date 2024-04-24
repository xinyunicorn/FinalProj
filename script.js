// Code derived from https://medium.com/@jayseyidov/illuminating-interaction-follow-the-mouse-flashlight-hover-effect-with-minimal-code-dad28cac1479

const container = document.getElementById('container');
const page = document.querySelector('.page');
const flashlight = document.querySelector('.flashlight');
const blurFilter = document.querySelector('#blur-filter feGaussianBlur');

// the intensity of the blur filter and light radius are controlled here 
const filterIntensity = 70;
const lightRadius = 200;
//-----------------------------------------------------
const flashlightOffset = lightRadius / 2;

blurFilter.setAttribute('stdDeviation', filterIntensity);
flashlight.style.width = flashlight.style.height = `${lightRadius}px`;

const followMouseFlashlight = ({ clientX, clientY }) => { // i'm not too sure what this part does
  const { left, top } = page.getBoundingClientRect();
  flashlight.style.left = `${clientX - left - flashlightOffset}px`;
  flashlight.style.top = `${clientY - top - flashlightOffset}px`;
};

container.addEventListener('mousemove', followMouseFlashlight);