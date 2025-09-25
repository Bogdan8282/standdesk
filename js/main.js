//Header config

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  const headerWrap = document.querySelector('.header__wrap');
  const menuButton = document.querySelector('.header__menu');
  const nav = document.querySelector('.header__nav');
  const navCloseButton = document.querySelector('.header__nav-close');

  const SCROLL_THRESHOLD = 0.008;
  const ORIGINAL_PADDING = 32;
  const REDUCED_PADDING = 16;

  let lastScrollY = 0;
  let ticking = false;

  const updateHeader = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollPercentage = lastScrollY / (document.documentElement.scrollHeight - window.innerHeight);
        header.classList.toggle('fixed', scrollPercentage >= SCROLL_THRESHOLD);
        headerWrap.style.padding = scrollPercentage >= SCROLL_THRESHOLD
          ? `${REDUCED_PADDING}px ${ORIGINAL_PADDING}px`
          : `${ORIGINAL_PADDING}px`;
        ticking = false;
      });
      ticking = true;
    }
  };

  const openMenu = () => nav.style.right = '0';
  const closeMenu = () => nav.style.right = '-100%';

  window.addEventListener('scroll', updateHeader, { passive: true });
  menuButton.addEventListener('click', openMenu);
  navCloseButton.addEventListener('click', closeMenu);

  updateHeader();
});

//Intro phone input

document.getElementById('phoneInput').addEventListener('focus', function() {
    if (this.value === '') {
        this.value = '+38 ';
    }
});

//Intro color selector

document.addEventListener("DOMContentLoaded", function () {
    let listItems = document.querySelectorAll(".color__selector");
    listItems[0].classList.add("active");
    let submitButton = document.querySelector('.intro__order');
    let formSubmitted = false;

    listItems.forEach(function (item) {
        item.addEventListener("click", function () {
            if (!formSubmitted) {
                listItems.forEach(function (item) {
                    item.classList.remove("active");
                });
                this.classList.add("active");
            }
        });
    });

    //Intro form submit

    submitButton.addEventListener('click', function () {
        if (!formSubmitted) {
            submitOrder();

            document.getElementById('nameInput').value = '';
            document.getElementById('phoneInput').value = '';

            formSubmitted = true;

            showNotification();
        }
    });
});

//Intro button submit

function submitOrder() {
    var nameInput = document.getElementById('nameInput').value;
    var phoneInput = document.getElementById('phoneInput').value;

    var selectedColorElement = document.querySelector('.color__selector.active');
    var selectedColor = selectedColorElement ? selectedColorElement.getAttribute('data-color') : 'Не вибрано';

    console.log('Ім\'я:', nameInput);
    console.log('Номер телефону:', phoneInput);
    console.log('Колір столу:', selectedColor);
}

function showNotification() {
    alert("Ваше замовлення відправлено. З вами скоро зв'яжуться.");
}

//Gifts selector

document.addEventListener("DOMContentLoaded", function () {
    let listItems = document.querySelectorAll(".gifts__list-item");
    let imageElement = document.getElementById("imageDisplay");

    listItems[0].classList.add("selected");
    
    updateGiftImage(1);

    listItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            listItems.forEach(function (item) {
                item.classList.remove("selected");
            });

            this.classList.add("selected");

            updateGiftImage(index + 1);
        });
    });

    function updateGiftImage(selectedIndex) {
        let imageName;
        switch (selectedIndex) {
            case 1:
                imageName = "computer-holder.jpg";
                break;
            case 2:
                imageName = "cup-holder.jpg";
                break;
            case 3:
                imageName = "engraved-holder.jpg";
                break;
            default:
                imageName = "default-image.jpg";
                break;
        }

        let imagePath = `./img/${imageName}`;

        imageElement.src = imagePath;
    }
});

//Desk view selector

document.addEventListener("DOMContentLoaded", function () {
    let listItems = document.querySelectorAll(".view__list-row");
    let imageElement = document.getElementById("deskDisplay");

    listItems[0].classList.add("selected");
    
    updateGiftImage(1);

    listItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            listItems.forEach(function (item) {
                item.classList.remove("selected");
            });

            this.classList.add("selected");

            updateGiftImage(index + 1);
        });
    });

    function updateGiftImage(selectedIndex) {
        let imageName;
        switch (selectedIndex) {
            case 1:
                imageName = "desk-up.jpg";
                break;
            case 2:
                imageName = "desk-lift.jpg";
                break;
            case 3:
                imageName = "desk-down.jpg";
                break;
            default:
                imageName = "desk-up.jpg";
                break;
        }

        let imagePath = `./img/${imageName}`;

        imageElement.src = imagePath;
    }
});

//Feedbacks "slick" slider

$(document).ready(function () {
    var feedbackSlider = $('.feedbacks__slider');

    function initializeSlider() {
        feedbackSlider.slick({
            arrows: true,
            variableWidth: false,
            speed: 600,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 920,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    initializeSlider();
});

//FAQ question switch

let faqQuestions = document.querySelectorAll('.faq__item-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        let answer = question.nextElementSibling;
        let faqItem = question.closest('.faq__item');

        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = "0";
        } else {
            answer.style.maxHeight = "100%";
        }

        faqItem.classList.toggle('active');
    });
});
