//控制全屏
function enterfullscreen() { //进入全屏
    $("#fullscreen2").html("退出全屏");
    var docElm = document.documentElement;
    //W3C
    if(docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    //FireFox
    else if(docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    //Chrome等
    else if(docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
    //IE11
    else if(elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function exitfullscreen() { //退出全屏
    $("#fullscreen2").html("切换全屏");
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if(document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

var a = 0;
$('#fullscreen2').on('click', function() {
    a++;
    a % 2 == 1 ? enterfullscreen() : exitfullscreen();
})