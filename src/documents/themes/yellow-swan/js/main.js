(function () {
    'use strict';

    var conf = {};

    // Init functions, called on DOMContentLoaded event
    conf.init = function () {
        conf.map.init(document.getElementById('map-canvas'));
        conf.menu.init();
    };

    /***
        Google Maps implementation
    ***/
    conf.map = {
        marker: (function () {
            // Google Maps doesn't work using localhost
            if (/^localhost(:\d+)?$/.test(location.host)) {
                return 'http://braziljs.github.io/conf-boilerplate/themes/yellow-swan/img/marker-default.png';
            } else {
                return location.href.replace(location.hash, '') + 'themes/yellow-swan/img/marker-default.png';
            }
        }()),
        zoom: 15
    };

    // Google Maps configs
    conf.map.init = function ($element) {
        var mapURL = 'http://maps.googleapis.com/maps/api/staticmap?';

        // Add address to URI
        mapURL += 'zoom=' + conf.map.zoom;
        mapURL += '&size=482x302';
        mapURL += '&markers=icon:' + encodeURIComponent(conf.map.marker);
        mapURL += encodeURIComponent('|' + $element.dataset.address);

        // Set background image
        $element.style.backgroundImage = 'url(' + mapURL + ')';

        // Set Google Maps href
        $element.href = 'https://www.google.com/maps/search/' + encodeURIComponent($element.dataset.address);
    };

    /***
        Create animated scroll for menu links
    ***/
    conf.menu = {
        itemsSelector: '.nav-link[href^="#"]',
        animationSpeed: 400
    };

    conf.menu.init = function () {
        conf.menu.menuItems = $(conf.menu.itemsSelector);
        conf.menu.document = $('html, body');

        conf.menu.menuItems.on('click.animateScroll', function (event) {
            event.preventDefault();

            conf.menu.animateTo(event.target);
        });
    };

    conf.menu.animateTo = function (link) {

        var $link = $(link),
            href = $link.attr('href'),
            offSetTop = $(href).offset().top;

        conf.menu.document.finish().animate({scrollTop : offSetTop}, conf.menu.animationSpeed, function () {
            location.hash = href;
        });
    };

    conf.init();
}());