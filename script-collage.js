const heartBg = document.getElementById('heart-bg');

function createRisingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('rising-heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
  heart.style.opacity = Math.random();
  heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
  heartBg.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

setInterval(createRisingHeart, 300);
