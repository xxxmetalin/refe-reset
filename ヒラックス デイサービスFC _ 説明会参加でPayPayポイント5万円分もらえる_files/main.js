document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const pagination = document.querySelector('.pagination');

  let currentIndex = 0;

  // ページネーション生成
  slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.addEventListener('click', () => goToSlide(index));
      if (index === currentIndex) dot.classList.add('active');
      pagination.appendChild(dot);
  });

  function updatePagination() {
      const dots = document.querySelectorAll('.pagination div');
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex);
      });
  }

  function goToSlide(index) {
      currentIndex = index;
      slider.style.transform = `translateX(-${currentIndex * slides[0].clientWidth}px)`;
      updatePagination();
  }

  nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
          goToSlide(currentIndex + 1);
      } else {
          goToSlide(0); // 最初に戻る
      }
  });

  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          goToSlide(currentIndex - 1);
      } else {
          goToSlide(slides.length - 1); // 最後に戻る
      }
  });

  // ウィンドウリサイズ時にスライダー幅を再計算
  window.addEventListener('resize', () => {
      slider.style.transform = `translateX(-${currentIndex * slides[0].clientWidth}px)`;
  });
});
