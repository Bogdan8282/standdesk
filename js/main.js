//Header config

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.header');
    var headerWrap = document.querySelector('.header__wrap');
    var headerHeight = header.offsetHeight;
    var scrollThreshold = 0.008;
    var originalPadding = 32;
    var reducedPadding = 16;

    window.addEventListener('scroll', function() {
        var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        if (scrollPercentage >= scrollThreshold) {
            header.classList.add('fixed');
            headerWrap.style.padding = reducedPadding + "px " + originalPadding + "px";
        } else {
            header.classList.remove('fixed');
            headerWrap.style.padding = originalPadding + "px";
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.header__menu');
    const nav = document.querySelector('.header__nav');
    const navCloseButton = document.querySelector('.header__nav-close');

    menuButton.addEventListener('click', function () {
        nav.style.right = '0';
    });

    navCloseButton.addEventListener('click', function () {
        nav.style.right = '-100%';
    });
});

//Intro phone input

document.getElementById('phoneInput').addEventListener('focus', function() {
    if (this.value === '') {
        this.value = '+38 (';
    }
});

//Intro color selector

document.addEventListener("DOMContentLoaded", function () {
    let listItems = document.querySelectorAll(".color__selector");

    listItems[0].classList.add("active");

    listItems.forEach(function (item) {
        item.addEventListener("click", function () {
            listItems.forEach(function (item) {
                item.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});

//Intro button submit

document.addEventListener("DOMContentLoaded", function () {
    let listItems = document.querySelectorAll(".color__selector");
    let submitButton = document.querySelector('.intro__order');

    let formSubmitted = false;

    listItems[0].classList.add("active");

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

function submitOrder() {
    var nameInput = document.getElementById('nameInput').value;
    var phoneInput = document.getElementById('phoneInput').value;

    var selectedColorElement = document.querySelector('.color__selector.active');
    var selectedColor = selectedColorElement ? selectedColorElement.getAttribute('data') : 'Не вибрано';

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
            answer.style.maxHeight = "500px";
        }

        faqItem.classList.toggle('active');
    });
});
