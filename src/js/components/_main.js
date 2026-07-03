// банер свайпер 
if (document.querySelector('.bannert__swiper')) {
  new Swiper('.bannert__swiper', {
    loop: true,
    spaceBetween: 100,
    slidesPerView: 1,
    pagination: {
      el: '.bannert__pagination',
      clickable: true,
    },
  });
}
