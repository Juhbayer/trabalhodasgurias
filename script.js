function startProgress() {
    var elem = document.getElementById("progress-bar");
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}