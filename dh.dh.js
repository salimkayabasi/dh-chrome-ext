if($ === 'undefined') {
    console.log('JQuery is not found');
}
else {
    reklamlariKaldir();
    videoDuzenle();
}

function videoDuzenle() {
    var links = window.document.getElementsByTagName('link');
    $(links).each(function() {
        if($(this).attr('rel') == 'video_src') {
            console.log($(this).attr('rel'));
            var configText = $(this).content;
            var tmp = configText.substring(configText.indexOf('?') + 7);
            console.log(tmp);
        }

    });
    $(document).ready(function() {
        if($('param[value*="http://nl.stream.donanimhaber.com/intro.f4v"]').length == 1) {
            var configText = $('param[value*="http://nl.stream.donanimhaber.com/intro.f4v"]')[0].value;
            var config = JSON.parse(configText.substring(7, configText.length));
            config.playlist.splice(0, 1);
            configText = JSON.stringify(config);
            $('param[value*="http://nl.stream.donanimhaber.com/intro.f4v"]')[0].value = 'config=' + configText;
        }
    });
}
function reklamlariKaldir() {
    var lst = $('script[src*="ad.donanimhaber.com"]').parent();
    var lstID = ['dhmanset', 'paginate-dhmanset', 'ctl16_pnlVideoPlayer'];
    var lstClassName = ['ochIcerik', 'haberSag'];
    removeFromListById(lst, lstID);
    removeFromListByClassName(lst, lstClassName);
    console.log(lst);
    lst.remove();
    $('.yorumlar').remove();
    $('.sponsor').remove();
}

function removeFromListById(lst, lstID) {
    $(lstID).each(function(i) {
        if($.inArray(document.getElementById(lstID[i]), lst) != -1) {
            lst.splice($.inArray(document.getElementById(lstID[i]), lst), 1);
        }
    });
}

function removeFromListByClassName(lst, lstClassName) {
    $(lstClassName).each(function(i) {
        if($.inArray(document.getElementsByClassName(lstClassName[i])[0], lst) != -1) {
            lst.splice($.inArray(document.getElementsByClassName(lstClassName[i])[0], lst), 1);
        }
    });
}

