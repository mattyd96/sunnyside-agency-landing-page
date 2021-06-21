//toggle nav in mobile view
function toggleNav() {
    var nav = document.getElementById("links");
    if(nav.style.display == "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }  
};

//listen for window resize event to restore navbar in case of resize
window.addEventListener('resize', function(event){

    if (this.window.innerWidth > 1000) {
        document.getElementById("links").style.display = "flex";
    } else {
        document.getElementById("links").style.display = "none";
    }
});