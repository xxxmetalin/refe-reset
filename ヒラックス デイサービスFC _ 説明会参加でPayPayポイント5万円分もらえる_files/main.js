$(document).ready(function() {
    const sliderContainer = $('.slider-container');
    const slider = sliderContainer.find('.slider');
    const slides = slider.find('.slide');
    const prevBtn = sliderContainer.find('.prev-btn');
    const nextBtn = sliderContainer.find('.next-btn');
    const pagination = sliderContainer.find('.pagination');
    let slideIndex = 0;

    // Initialize Pagination
    function initPagination() {
        for (let i = 0; i < slides.length; i++) {
            const dot = $('<div>').on('click', () => goToSlide(i));
            pagination.append(dot);
        }
        updatePagination();
    }

    function goToSlide(index) {
        slideIndex = index;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        if (slideIndex >= slides.length) slideIndex = 0;

        slider.css('transform', `translateX(-${slideIndex * 100}%)`);
        updatePagination();
    }

    function updatePagination() {
        pagination.find('div').removeClass('active').eq(slideIndex).addClass('active');
    }

    // Event Listeners
    prevBtn.on('click', function() {
        goToSlide(slideIndex - 1);
    });

    nextBtn.on('click', function() {
        goToSlide(slideIndex + 1);
    });

    initPagination();
});