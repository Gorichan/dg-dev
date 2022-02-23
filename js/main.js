$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    /* $("body").toggleClass("lock"); */
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs");
  const tabsBtn = document.querySelectorAll(".tabs__btn");
  const tabsContent = document.querySelectorAll(".tabs__content");

  if (tabs) {
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabs__btn")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove("tabs__btn--active");
        });
        document
          .querySelector(`[data-tabs-path="${tabsPath}"]`)
          .classList.add("tabs__btn--active");
        tabsHandler(tabsPath);
      }

      if (e.target.classList.contains("tabs__arrow--prev")) {
        let activeBtn = document.querySelector(".tabs__btn--active");
        let activeParent = activeBtn.closest(".tabs__item");
        let previousParent = activeParent.previousElementSibling;

        if (previousParent) {
          let prevActive = previousParent.querySelector(".tabs__btn");
          tabsBtn.forEach((el) => {
            el.classList.remove("tabs__btn--active");
          });
          prevActive.classList.add("tabs__btn--active");

          let path = prevActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }

      if (e.target.classList.contains("tabs__arrow--next")) {
        let activeBtn = document.querySelector(".tabs__btn--active");
        let activeParent = activeBtn.closest(".tabs__item");
        let nextParent = activeParent.nextElementSibling;

        if (nextParent) {
          let nextActive = nextParent.querySelector(".tabs__btn");
          tabsBtn.forEach((el) => {
            el.classList.remove("tabs__btn--active");
          });
          nextActive.classList.add("tabs__btn--active");

          let path = nextActive.dataset.tabsPath;
          tabsHandler(path);
        }
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
      el.classList.remove("tabs__content--active");
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add("tabs__content--active");
  };
});

$(document).ready(
  (function () {
    $(".client-single").on("click", function (event) {
      event.preventDefault();

      var active = $(this).hasClass("active");

      var parent = $(this).parents(".testi-wrap");

      if (!active) {
        var activeBlock = parent.find(".client-single.active");

        var currentPos = $(this).attr("data-position");

        var newPos = activeBlock.attr("data-position");

        activeBlock
          .removeClass("active")
          .removeClass(newPos)
          .addClass("inactive")
          .addClass(currentPos);
        activeBlock.attr("data-position", currentPos);

        $(this)
          .addClass("active")
          .removeClass("inactive")
          .removeClass(currentPos)
          .addClass(newPos);
        $(this).attr("data-position", newPos);
      }
    });
  })(jQuery)
);

jQuery(window).scroll(function () {
  var $sections = $("section");
  $sections.each(function (i, el) {
    var top = $(el).offset().top - 100;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr("id");
    if (scroll > top && scroll < bottom) {
      $("a.active").removeClass("active");
      $('a[href="#' + id + '"]').addClass("active");
    }
  });
});

$("nav").on("click", "a", function (event) {
  // исключаем стандартную реакцию браузера
  event.preventDefault();

  // получем идентификатор блока из атрибута href
  var id = $(this).attr("href"),
    // находим высоту, на которой расположен блок
    top = $(id).offset().top;

  // анимируем переход к блоку, время: 800 мс
  $("body,html").animate({ scrollTop: top }, 800);
});
