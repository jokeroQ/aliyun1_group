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
    let more = document.getElementById("more");
    let arrow = document.querySelector("#arrow");
    let m_hotproduct = document.getElementById("m_hotproduct");
    let morehidden = document.getElementsByClassName("m_more")[0];
    more.onclick = function() {
        morehidden.style.display = "block";
    }
    arrow.onclick = function() {
        // m_hotproduct.style.display = "block";
        if (!flag) {
            m_hotproduct.style.display = "none";
            flag = true;
            arrow.style.transform = 'rotate(360deg)';
        } else {
            m_hotproduct.style.display = "block";
            flag = false;
            arrow.style.transform = 'rotate(180deg)';
        }
    }
}