$(document).ready(() => {
    $(".team__item").on("click", function(e) {
        $(this).toggleClass("team__item--active").siblings().removeClass("team__item--active");
    })








    // const openItem = function(item) {
    //     const container = item.closest(".team__item");
    //     const contentBlock = container.find(".team__description");

    //     container.addClass("active");
    //     contentBlock.height("100%");
    // }

    // const closeEveryItem = function(container) {
    //     const items = container.find(".team__description");
    //     const itemContainer = container.find(".team__item");

    //     itemContainer.removeClass("active");
    //     items.height(0);
    // }

    // $(".team__name").on("click", function(e){
    //     e.preventDefault();
    //     const $this = $(e.currentTarget);
    //     const container = $this.closest(".team__list");
    //     const elemContainer = $this.closest(".team__item");

    //     if(elemContainer.hasClass("active")) {
    //         closeEveryItem(container);
    //     } else {
    //         closeEveryItem(container);
    //         openItem($this);
    //     }
    // })
})
