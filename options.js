
function toogleDetails() {
    var p = $('p');
    if(p.css('display') != 'none') {
        p.css('display', 'none');
    }
    else {
        p.css('display', 'block');
    }
}

function save_options() {
    var selectionAds = document.getElementById("selectionAds");
    var reklamlariKaldir = selectionAds.children[selectionAds.selectedIndex].value;
    localStorage['reklamlariKaldir'] = reklamlariKaldir;

    var selectionOnlineUserBlock = document.getElementById("selectionOnlineUserBlock");
    var removeOnlineUserBlock = selectionOnlineUserBlock.children[selectionOnlineUserBlock.selectedIndex].value;
    localStorage['removeOnlineUserBlock'] = removeOnlineUserBlock;


    var selectionSponsor = document.getElementById("selectionSponsor");
    var removeSponsor = selectionSponsor.children[selectionSponsor.selectedIndex].value;
    localStorage['removeSponsor'] = removeSponsor;


    var selectionComments = document.getElementById("selectionComments");
    var removeComments = selectionComments.children[selectionComments.selectedIndex].value;
    localStorage['removeComments'] = removeComments;


    var selectionCommentsDHMisafiri = document.getElementById("selectionCommentsDHMisafiri");
    var removeDHMisafiri = selectionCommentsDHMisafiri.children[selectionCommentsDHMisafiri.selectedIndex].value;
    localStorage['removeDHMisafiri'] = removeDHMisafiri;


    var status = document.getElementById("status");
    status.innerHTML = "kaydedildi";
    setTimeout(function() {
        status.innerHTML = '';
    }, 750);
}

function restore_options() {

    var reklamlariKaldir = localStorage["reklamlariKaldir"];
    var removeOnlineUserBlock = localStorage["removeOnlineUserBlock"];
    var removeSponsor = localStorage["removeSponsor"];
    var removeComments = localStorage["removeComments"];
    var removeDHMisafiri = localStorage["removeDHMisafiri"];

    if(!reklamlariKaldir) {
        localStorage['reklamlariKaldir'] = true;
        reklamlariKaldir = true;
    }
    if(!removeOnlineUserBlock) {
        localStorage['removeOnlineUserBlock'] = true;
        removeOnlineUserBlock = true;
    }
    if(!removeSponsor) {
        localStorage['removeSponsor'] = true;
        removeSponsor = true;
    }
    if(!removeComments) {
        localStorage['removeComments'] = true;
        removeComments = true;
    }

    if(!removeDHMisafiri) {
        localStorage['removeDHMisafiri'] = true;
        removeDHMisafiri = true;
    }

    restoreSelection('selectionAds', reklamlariKaldir);
    restoreSelection('selectionOnlineUserBlock', removeOnlineUserBlock);
    restoreSelection('selectionSponsor', removeSponsor);
    restoreSelection('selectionComments', removeComments);
    restoreSelection('selectionCommentsDHMisafiri', removeDHMisafiri);
}


function restoreSelection(selectionId, isTrueOrFalse) {
    var selection = document.getElementById(selectionId);
    for(var i = 0; i < selection.children.length; i++) {
        var child = selection.children[i];
        if(child.value == isTrueOrFalse) {
            child.selected = 'true';
            break;
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('showhidebutton').addEventListener('click', toogleDetails);
    document.getElementById('kaydet').addEventListener('click', save_options);
});


$(document).ready(function() {
    $('p').css('display', 'none');
    restore_options();
    $('select').change(function() {
        save_options();
    });
});

chrome.extension.onRequest.addListener(
     function(request, sender, sendResponse) {
         switch(request.name) {
             case "getPreferences":
                 sendResponse(
                    {
                        reklamlariKaldir: localStorage["reklamlariKaldir"] == 'true',
                        removeOnlineUserBlock: localStorage["removeOnlineUserBlock"] == 'true',
                        removeSponsor: localStorage["removeSponsor"] == 'true',
                        removeComments: localStorage["removeComments"] == 'true',
                        removeDHMisafiri : localStorage["removeDHMisafiri"] == 'true'
                    });
                 break;
         }
     }
);
