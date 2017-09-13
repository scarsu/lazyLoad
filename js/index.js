var imgs = document.getElementsByTagName("img");
window.onload = function() {
    window.onscroll(); //一开始要调用一次以防第一屏有图片
}
window.onscroll = function() {
    for (var i = 0; i < imgs.length; i++) {
        //满足scroll + clientHeight >= offsetTop就要加载
        var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
        var clientH = document.documentElement.clientHeight || document.body.clientHeight;
        var offsetH = getOffsetTop(imgs[i]);
        if (clientH + scrollH >= offsetH) {
            loadImg(i);
        }
    }
}

function loadImg(index) {
    imgs[index].src = imgs[index].dataset.src;
}

function getOffsetTop(el) {
    var h = 0;
    while (el) {
        h += el.offsetTop; //无需考虑el的offsetParent是否存在，因为不存在时offsetTop为0
        el = el.offsetParent;
    }
    return h;
}