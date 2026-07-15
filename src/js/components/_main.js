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

if (document.querySelector(".product")) {
  const galleryMain = document.querySelector(".product__cardgalleryMain");
  const thumbs = [...document.querySelectorAll(".product__cardgallery")];

  const srcOf = (el) =>
    el.dataset.src || el.querySelector("img")?.getAttribute("src") || "";

  const gallerySrcs = galleryMain
    ? [srcOf(galleryMain), ...thumbs.map(srcOf)].filter(Boolean)
    : [];

  const openLightbox = (srcs, startIndex) => {
    if (typeof Fancybox === "undefined" || !srcs.length) return;
    Fancybox.show(
      srcs.map((src) => ({ src, type: "image" })),
      { startIndex: startIndex > 0 ? startIndex : 0 },
    );
  };

  thumbs.forEach((thumb) => {
    thumb.removeAttribute("data-fancybox");
    thumb.addEventListener("click", () => {
      const src = srcOf(thumb);
      if (!src || !galleryMain) return;

      const mainImg = galleryMain.querySelector("img");
      if (mainImg) mainImg.src = src;
      galleryMain.dataset.src = src;

      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  if (galleryMain) {
    galleryMain.removeAttribute("data-fancybox");
    galleryMain.addEventListener("click", () => {
      openLightbox(gallerySrcs, gallerySrcs.indexOf(srcOf(galleryMain)));
    });
  }

  const productSwiperEl = document.querySelector(".product__swiper");
  const productGalleryWrap = document.querySelector(".product__swipper");

  if (productSwiperEl && productGalleryWrap) {
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

    const slides = [
      ...productSwiperEl.querySelectorAll(".product__swiperSlide"),
    ];
    const slideSrcs = slides
      .map((slide) => slide.getAttribute("src"))
      .filter(Boolean);

    slides.forEach((slide, i) => {
      slide.addEventListener("click", () => openLightbox(slideSrcs, i));
    });
  }

  const productTabs = document.querySelectorAll(".product__tab");
  productTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      productTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
}

const mapContainer = document.getElementById("map");
const overlay = mapContainer.querySelector(".bid__overlay");

function lockMap() {
  overlay.classList.remove("hidden");
}

function unlockMap() {
  overlay.classList.add("hidden");
}

overlay.addEventListener("click", unlockMap);

document.addEventListener("click", (e) => {
  if (!mapContainer.contains(e.target)) {
    lockMap();
  }
});

mapContainer.addEventListener("mouseleave", () => {
  if (window.innerWidth >= 768) {
    lockMap();
  }
});
