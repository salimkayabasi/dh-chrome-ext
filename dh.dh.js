if($ === 'undefined') {
    console.log('JQuery is not found');
}
else {
    /*$(document.getElementsByClassName('reklam300')).remove();
    $(document.getElementById('divSagReklamlar')).remove();
    $(document.getElementsByClassName('reklam')).remove();
    $(document.getElementsByClassName('dhReklam728')).remove();
    $('div[class*="eklam"]').remove();
    $('img[src*="adserve.donanimhaber.com"]').remove();
    $('a[href*="ad.donanimhaber.com"]').parent.remove();*/
    var lst = $('script[src*="ad.donanimhaber.com"]').parent();
    lst.splice(1,3);
    lst.remove();
}