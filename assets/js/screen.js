window.onload = function() {
    var warningMessage = document.getElementById("warningMessage");

    function checkDevice() {
        if (window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            warningMessage.style.display = "block";
        } else {
            warningMessage.style.display = "none";
        }
    }

    checkDevice();

    window.addEventListener("resize", checkDevice);
};