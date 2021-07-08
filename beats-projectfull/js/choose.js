$(document).ready(function(){

    const slider = $(".choose__list").bxSlider({
        pager: false,
        controls:false
    });

    $(".choose__control-left--prev").click(e => {
        e.preventDefault();
        slider.goToPrevSlide();
    })

    $(".choose__control-right--next").click(e => {
        e.preventDefault();
        slider.goToNextSlide();
    })
});

