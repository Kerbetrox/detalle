const heartsContainer = document.getElementById('hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
  heart.style.width = heart.style.height = Math.random() * 20 + 10 + 'px';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);
