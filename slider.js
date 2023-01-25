(() => {

    document.addEventListener('DOMContentLoaded', function () {

        let sliderBtnBefore = document.querySelector('.reviews__button-before');
        let sliderBtnAfter = document.querySelector('.reviews__button-afrer');
        let reviewBlocks = document.querySelectorAll('.reviews__block');
        let counter = 1;

        sliderBtnAfter.addEventListener('click', function () {
            console.log('Кнопка нажата')

            counter += 1;

            if (counter > reviewBlocks.length) {
                counter = 1;
            }

            reviewBlocks.forEach((elem) => {
                elem.classList.remove('reviews__block--active')
            });
            reviewBlocks[counter - 1].classList.add('reviews__block--active');
        }

        );
        sliderBtnBefore.addEventListener('click', function () {

            counter -= 1;

            if (counter < 1) {
                counter = reviewBlocks.length;
            }

            reviewBlocks.forEach((elem) => {
                elem.classList.remove('reviews__block--active')
            });
            reviewBlocks[counter - 1].classList.add('reviews__block--active');


        }

        );

    });


})();