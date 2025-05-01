const swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1, // Só 1 slide por vez (resolve seu problema de corte)
  autoHeight: true, // Altura ajusta automaticamente ao conteúdo (acabou o drama de corte)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
