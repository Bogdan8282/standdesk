//Header config

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.header');
    var headerWrap = document.querySelector('.header__wrap');
    var headerHeight = header.offsetHeight;
    var scrollThreshold = 0.02;
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



//Intro phone input

document.getElementById('phoneInput').addEventListener('focus', function() {
    if (this.value === '') {
        this.value = '+38 (';
    }
});

//Intro color selector

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".color__selector");

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

function submitOrder() {
    var nameInput = document.getElementById('nameInput').value;
    var phoneInput = document.getElementById('phoneInput').value;

    var selectedColorElement = document.querySelector('.color__selector.selected');
    var selectedColor = selectedColorElement ? selectedColorElement.getAttribute('data-color') : 'Не вибрано';

    console.log('Ім\'я:', nameInput);
    console.log('Номер телефону:', phoneInput);
    console.log('Колір столу:', selectedColor);
}

var colorSelectors = document.querySelectorAll('.color__selector');
colorSelectors.forEach(function(selector) {
    selector.addEventListener('click', function() {
        colorSelectors.forEach(function(otherSelector) {
            otherSelector.classList.remove('selected');
        });
        selector.classList.add('selected');
    });
});

//Transform .intro__form height into margin-bottom for .intro

function setIntroMargin() {
    var windowWidth = window.innerWidth;

    if (windowWidth < 820) {
        var formHeight = document.querySelector('.intro__form').offsetHeight;
        var pictureThumbHeight = document.querySelector('.intro__picture-thumb').offsetHeight;

        document.querySelector('.intro').style.marginBottom = formHeight - pictureThumbHeight + 32 + 'px';
    } else {
        // Якщо ширина екрану більше 820 пікселів, скидати margin-bottom
        document.querySelector('.intro').style.marginBottom =  16 + 'px';
    }
}

window.addEventListener('load', setIntroMargin);
window.addEventListener('resize', setIntroMargin);


//Gifts selector

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".gifts__list-item");
    const imageElement = document.getElementById("imageDisplay");

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

        const imagePath = `./img/${imageName}`;

        imageElement.src = imagePath;
    }
});

//Desk view selector

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".view__list-item");
    const imageElement = document.getElementById("deskDisplay");

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
                imageName = "default-image.jpg";
                break;
        }

        const imagePath = `./img/${imageName}`;

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
                    breakpoint: 980,
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

const faqQuestions = document.querySelectorAll('.faq__item-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const faqItem = question.closest('.faq__item');

        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = "0";
        } else {
            answer.style.maxHeight = "500px";
        }

        faqItem.classList.toggle('active');
    });
});
