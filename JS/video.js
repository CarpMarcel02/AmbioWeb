document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.video-container').style.opacity = '0';
      document.querySelector('.video-container').addEventListener('transitionend', function() {
        document.querySelector('.video-container').style.display = 'none';
        // document.body.style.overflow = 'auto'; // Enable scrolling on the body
      }, { once: true }); // Ensure the event listener is only triggered once
    }, 1000); // 4 seconds before starting the fade-out
  });
  