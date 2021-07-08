const mesureWidth = item => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest(".colors__list");
    const titlesBlocks = container.find(".colors__name");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".colors__description-text");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));
    

    const isMobile = window.matchMedia("(max-width: 768px").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 600;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingRight - paddingLeft
    }
};

const closeEveryItemInContainer =  container => {
    const items = container.find(".colors__item");
    const content = container.find(".colors__description");

    items.removeClass("colors__item--active")
    content.width(0);
};

const openItem = item => {
    const hiddenContent = item.find(".colors__description");
    const reqWidth = mesureWidth(item);
    const textBlock = item.find(".colors__description-text");


    item.addClass("colors__item--active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
};

$(".colors__name").on("click", e => {
e.preventDefault();

const $this = $(e.currentTarget);
const item = $this.closest(".colors__item");
const itemOpened = item.hasClass("colors__item--active");
const container = $this.closest(".colors__list");

if (itemOpened) {
    closeEveryItemInContainer(container);
    $(".colors__title").html("Цвета");
} else {
    closeEveryItemInContainer(container);
    $(".colors__title").html("Меню");
    openItem(item);
}
});