       
        function toogleDetails() {
            var p = $('p');
            if (p.css('display') != 'none') {
                p.css('display', 'none');
            }
            else {
                p.css('display', 'block');
            }
        }
        // Saves options to localStorage.
        function save_options() {
            var autoPlaySelection = document.getElementById("autoPlaySelection");
            var autoPlay = autoPlaySelection.children[autoPlaySelection.selectedIndex].value;
            localStorage['autoPlay'] = autoPlay;
            // Update status to let user know options were saved.
            var status = document.getElementById("status");
            status.innerHTML = "kaydedildi";
            setTimeout(function () {
                status.innerHTML = '';
            }, 750);
        }
        // Restores select box state to saved value from localStorage.
        function restore_options() {
            var autoPlay = localStorage['autoPlay'];
            if (!autoPlay) {
                localStorage['autoPlay'] = true;
                return;
            }
            var autoPlaySelection = document.getElementById('autoPlaySelection');
            for (var i = 0; i < autoPlaySelection.children.length; i++) {
                var child = autoPlaySelection.children[i];
                if (child.value == autoPlay) {
                    child.selected = 'true';
                    break;
                }
            }
        }


document.addEventListener('DOMContentLoaded', function () {
 document.getElementById('showhidebutton').addEventListener('click', toogleDetails);
 document.getElementById('kaydet').addEventListener('click', save_options);
});


$(document).ready(function() {
 $('p').css('display', 'none');
  restore_options();
});