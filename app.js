function scrollAppear() {
    var introText = document.querySelector('.intro-text');
    console.log(introText);
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (introPosition < screenPosition) {
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear);