document.addEventListener('DOMContentLoaded', () => {
  const sliderGroups = document.querySelectorAll('.slider-group');

  sliderGroups.forEach((group) => {
    const sliderEl = group.querySelector('.siema');

    const siema = new Siema({
      selector: sliderEl,
      duration: 400,
      easing: 'ease-out',
      perPage: 1,
      loop: true
    });

    // No autoplay 🎉

    // Buttons scoped to this group
    const prevBtn = group.querySelector('.prev');
    const nextBtn = group.querySelector('.next');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => siema.prev());
      nextBtn.addEventListener('click', () => siema.next());
    }
  });
});