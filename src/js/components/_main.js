// банер свайпер
if (document.querySelector(".bannert__swiper")) {
  new Swiper(".bannert__swiper", {
    loop: true,
    spaceBetween: 100,
    slidesPerView: 1,
    pagination: {
      el: ".bannert__pagination",
      clickable: true,
    },
  });
}

// банер автоматический отступ

const desc = document.querySelectorAll(".bannert__desc");

const findHeight = (titles) => {
  let maxP = titles[0]?.offsetHeight ?? 0;
  titles.forEach((e) => {
    if (maxP < e.offsetHeight) maxP = e.offsetHeight;
  });

  return maxP;
};

const marginBottom = (titles) => {
  const maxHeight = findHeight(desc);

  titles.forEach((e) => {
    if (e.offsetHeight < maxHeight) {
      let height = maxHeight - e.offsetHeight;
      e.style.marginBottom = `${height}px`;
    }
  });
};

marginBottom(desc);

// catalog свайпер

if (document.querySelector(".catalog__swiper")) {
  new Swiper(".catalog__swiper", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 1.2,
  });
}

if (document.querySelector(".info__swiper")) {
  new Swiper(".info__swiper", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: {
      el: ".info__pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });
}

// страница товара: галерея (свайпер + скроллбар), лайтбокс, палитра цветов
if (document.querySelector(".product")) {
  const productSwiperEl = document.querySelector(".product__swiper");
  const productGalleryWrap = document.querySelector(".product__swipper");

  if (productSwiperEl && productGalleryWrap) {
    // скроллбар создаём в JS, чтобы не трогать разметку
    const scrollbar = document.createElement("div");
    scrollbar.className = "product__scrollbar swiper-scrollbar";
    productGalleryWrap.appendChild(scrollbar);

    new Swiper(productSwiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      scrollbar: {
        el: scrollbar,
        draggable: true,
      },
    });
  }

  // лайтбокс для десктопной галереи
  if (typeof Fancybox !== "undefined") {
    Fancybox.bind('[data-fancybox="products"]');
  }

  // палитра цветов — выбор активного
  const productTabs = document.querySelectorAll(".product__tab");
  productTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      productTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}
