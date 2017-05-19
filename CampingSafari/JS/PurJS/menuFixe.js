window.addEventListener("scroll", function () {
    var topSkipped = document.body.scrollTop
    var menu = document.getElementById("menu");

    if (topSkipped > 10) {
        menu.style.position = "fixed";
       // menu.style.backgroundColor = "deepskyblue";
        menu.style.left = "0";
        menu.style.right = "0"; 
        menu.style.top="100px"
    } else {
        menu.style.position = "relative";
        //menu.style.backgroundColor = "white";
        menu.style.left = "0";
        menu.style.right = "0";
        menu.style.top = "0px"
    }
}, false);