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

document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (!tab) return;

  const cls = [...tab.classList].find((c) => c.endsWith("__tab"));
  if (!cls) return;

  const block = cls.replace("__tab", "");
  const target = tab.dataset.tab;

  document
    .querySelectorAll(`.${block}__tab`)
    .forEach((t) => t.classList.toggle("active", t === tab));
  document
    .querySelectorAll(`.${block}__panel`)
    .forEach((p) => p.classList.toggle("active", p.dataset.panel === target));
});

document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (!tab) return;

  const cls = [...tab.classList].find((c) => c.endsWith("__tabMobile"));
  if (!cls) return;

  const block = cls.replace("__tabMobile", "");
  const target = tab.dataset.tab;

  document
    .querySelectorAll(`.${block}__tabMobile`)
    .forEach((t) => t.classList.toggle("active", t.dataset.tab === target));
  document
    .querySelectorAll(`.${block}__swiperMobile, .${block}__panel`)
    .forEach((p) => p.classList.toggle("active", p.dataset.panel === target));
});
