/* (C)2013,2014 Leslie P. Polzer, PORT ZERO <polzer@port-zero.com> */

function vidstop(video) {
        video.pause();
        video.oncanplay = null;
        video.onplay = null;
}

    function vidplay() {
       video.play();
    }

function youtubevid() {
    var clicker = document.querySelector('.ytp-button-pause')
    if (clicker) {
        clicker.click();
    } 
    
}

youtubevid();

function msg(){
    var tab = true;
    
    window.onblur = function() 
    { 
        tab = false;
    }

    document.tab = window.tab;
    if(tab){
        vidplay();
        }
}

msg();


