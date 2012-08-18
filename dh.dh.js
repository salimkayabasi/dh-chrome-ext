function removeComments() {
    $('.yorumlar').remove();
}

function removeSponsor() {
    $('.forumSponsor').remove();
    $('.sponsor').remove();
}
function removeOnlineUserBlock() {
    $('center > table:contains(Şu andaki aktif kişilerin  )').remove();
}

function removeDHMisafiri()
{
    $('.tekAlt:contains("DH Misafiri")').remove();
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
    $('a[href*="donanimhaber.com/nokiapureview808"]').parent().remove();
    $('a[href*="donanimhaber.com/turkcellsuperonline"]').remove();
    $('.ts-button').remove();
    $('.aramakutu').css('float', 'none');
    $('.reklam720').remove();
    $('.reklam').remove();
    $('.dhReklam728').remove();
    $('.reklam300').remove();
    $('.menuheader').remove();
    $('.konulisteTextReklam').remove();
    $('a[href*="donanimhaber.com/ttnet"]').remove();
    if(window.location.href == 'http://forum.donanimhaber.com/') {
        $('.msg').remove();
        $($('a[href*="ad.donanimhaber.com"]').parent()).remove();
        $($('table#Table3 >tbody>tr>td')[1]).remove();
        $('table#Table3 >tbody>tr>td>table').css('width', '100%');
    } else if(window.location.href.indexOf('http://forum.donanimhaber.com/forumid_') == 0) {
        $($(Table5).parent()).remove();
        $($('table')[3]).remove();
        $($('table')[3]).remove();
        $($('center table table')[7]).remove();
        $($('.c2:contains("Reklam")').parent()).remove();

    } else if(window.location.href.indexOf('http://forum.donanimhaber.com/m_') == 0) {
        $($(Table2).parent()).remove();
        $($('table[width*="95%"]')[1]).remove();
        $($('table[width*="95%"]')[1]).remove();
        $($('table[width*="95%"]')[$('table[width*="95%"]').length - 2]).remove();
    } else if(window.location.href == 'http://www.donanimhaber.com/') {
        var lst = $('script[src*="ad.donanimhaber.com"]').parent();
        var lstID = ['dhmanset', 'paginate-dhmanset', 'ctl16_pnlVideoPlayer'];
        var lstClassName = ['ochIcerik', 'haberSag'];
        var lstTagName = ['body', 'center'];
        removeFromListById(lst, lstID);
        removeFromListByClassName(lst, lstClassName);
        removeFromListByTagName(lst, lstTagName);
        lst.remove();
    } else if(window.location.href.indexOf('http://www.donanimhaber.com/') == 0) {
        $('.divDikBannerAnasayfa').remove();
        $('#ctl16_divReklamUcuzcu').remove();
        $('#topbanner').remove();
    }

    $('script[src*="ad.donanimhaber.com"]').remove();
    $('script[src*="ad.e-kolay"]').remove();
    $('param[value*="adserve.donanimhaber.com"]').parent().remove();
}

function removeFromListByTagName(lst, lstTagName) {
    $(lstTagName).each(function(i) {
        if($.inArray(document.getElementsByTagName(lstTagName[i])[0], lst) != -1) {
            lst.splice($.inArray(document.getElementsByTagName(lstTagName[i])[0], lst), 1);
        }
    });
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


chrome.extension.sendRequest({ name: "getPreferences" },
     function(response) {
         if(response != undefined) {
             localStorage["reklamlariKaldir"] = response.reklamlariKaldir;
             localStorage["removeOnlineUserBlock"] = response.removeOnlineUserBlock;
             localStorage["removeSponsor"] = response.removeSponsor;
             localStorage["removeComments"] = response.removeComments;
             localStorage["removeDHMisafiri"] = response.removeDHMisafiri;
         }
         else{
              localStorage["reklamlariKaldir"] = true;
             localStorage["removeOnlineUserBlock"] =true;
             localStorage["removeSponsor"] = true;
             localStorage["removeComments"] = true;
             localStorage["removeDHMisafiri"] = true;
         }
     });

     $(function() {
         if(localStorage["reklamlariKaldir"] == 'true') {
             reklamlariKaldir();
         }

         if(localStorage["removeOnlineUserBlock"] == 'true') {
             removeOnlineUserBlock();
         }

         if(localStorage["removeSponsor"] == 'true') {
             removeSponsor();
         }

         if(localStorage["removeComments"] == 'true') {
             removeComments();
         }
         if(localStorage["removeDHMisafiri"] == 'true') {
             removeDHMisafiri();
         }
     });