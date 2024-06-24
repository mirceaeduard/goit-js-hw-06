const sliderBar = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleSliderValue = (event) => {
    const fontSize = String(event.currentTarget.value) + 'px';

    text.style.fontSize = fontSize;
};

sliderBar.addEventListener('input', handleSliderValue);