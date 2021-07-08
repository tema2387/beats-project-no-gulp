let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.760651, 37.597969],
        zoom: 14,
        controls: []
    });

    const coords = [
        [55.748752, 37.582400],
        [55.760595, 37.581475],
        [55.752535, 37.604463],
        [55.757976, 37.619169]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/map/marker.svg',
        iconImageSize: [80, 80],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);