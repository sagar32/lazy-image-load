var lazyImgLoad = (function () {
    return {
        init: function () {
            [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
                console.log(img);
                var dataSrc = img.getAttribute('data-src');
                img.setAttribute('src', 'images/my_loading.gif');
                img.onload = function () {
                    img.setAttribute('src', dataSrc);
                    img.removeAttribute('data-src');
                };
            });
        },
        onLoading: function () {

        },
        onLoadComlete: function () {

        }
    }
})();