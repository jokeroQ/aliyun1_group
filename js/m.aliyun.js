(function() {
    function resizeBaseFontSize() {
        var rootHtml = document.documentElement,
            deviceWidth = rootHtml.clientWidth;
        if (deviceWidth > 720) {
            deviceWidth = 720;
        }
        rootHtml.style.fontSize = deviceWidth / 7.2 + "px";
    }
    resizeBaseFontSize();
    window.addEventListener("resize", resizeBaseFontSize, false);
    window.addEventListener("orientationchange", resizeBaseFontSize, false);
})();
window.onload = function() {
    let m_login = document.querySelector(".m_login");
    let flag = true;
    let m_user = document.getElementById("m_user");
    m_user.onclick = function() {
        if (!flag) {
            m_login.style.display = "none";
            flag = true;
        } else {
            m_login.style.display = "block";
            flag = false;
        }
    }
}