const canvas = document.getElementById('firefliesCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    const container = document.getElementById('bottom-image-container');
    canvas.width = container.offsetWidth + 40; // Increase width by 40px
    canvas.height = container.offsetHeight + 40; // Increase height by 40px
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Firefly {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2;
    this.xSpeed = (Math.random() - 0.5) * 2;
    this.ySpeed = (Math.random() - 0.5) * 2;
    this.opacity = Math.random();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 0, ${this.opacity})`;
    ctx.fill();
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width || this.x < 0) this.xSpeed *= -1;
    if (this.y > canvas.height || this.y < 0) this.ySpeed *= -1;

    this.opacity += (Math.random() - 0.5) * 0.02;
    if (this.opacity > 1) this.opacity = 1;
    if (this.opacity < 0) this.opacity = 0;
  }
}

const fireflies = [];
for (let i = 0; i < 100; i++) {
  fireflies.push(new Firefly());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  fireflies.forEach(firefly => {
    firefly.update();
    firefly.draw();
  });

  requestAnimationFrame(animate);
}

animate();
