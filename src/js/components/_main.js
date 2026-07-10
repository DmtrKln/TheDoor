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
