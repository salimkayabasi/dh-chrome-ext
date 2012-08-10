if($ === 'undefined') {
    console.log('JQuery is not found');
}
else {
    var lst = $('script[src*="ad.donanimhaber.com"]').parent();
    lst.splice(1,3);
    lst.remove();
}