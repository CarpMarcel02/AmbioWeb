         // Adjust the shine effect on scroll
         window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            goldLine.style.backgroundPositionX = `${scrollPosition / 10}px`; // Adjust the value to control the movement
            });
    