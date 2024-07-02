document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  const content = document.querySelector('.content');
  const header = document.querySelector('header'); // Select the header
  const startScroll = 6000; // Start applying the opacity change
  const endScroll = document.body.scrollHeight - window.innerHeight; // End scroll point

  if (!overlay || !content || !header) {
    console.error('Required elements not found');
    return;
  }

  let ticking = false;

  function updateOverlay() {
    const currentScroll = content.getBoundingClientRect().top * -1;
    console.log('Current Scroll:', currentScroll); // Debugging output

    if (currentScroll >= startScroll) {
      const adjustedScroll = Math.min(currentScroll - startScroll, endScroll - startScroll);
      const opacity = Math.min((adjustedScroll / (endScroll - startScroll)) * 1.5, 1);
      //console.log('Adjusted Scroll:', adjustedScroll); // Debugging output
      //console.log('Calculated Opacity:', opacity); // Debugging output
      overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Ensure background color is set with opacity
      header.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`; // Sync header background color with overlay

    } else {
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Ensure opacity is 0 before reaching the startScroll point
      header.style.backgroundColor = 'white'; // Solid background color for the header
    }

    ticking = false;
  }

  window.addEventListener('wheel', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateOverlay);
      ticking = true;
    }
  });

  // Trigger the overlay update on page load to ensure correct initial state
  updateOverlay();
});