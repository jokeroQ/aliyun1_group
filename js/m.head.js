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
    let morehidden = document.getElementsByClassName("m_more")[0];
    let appear = document.querySelectorAll(".m_more_list .find");
    let mproduct = document.querySelectorAll(".m_hotproduct");
    more.onclick = function() {
        morehidden.style.width = "6.6rem";
    }
    Array.of(...appear).forEach((i, j, k) => i.onclick = function() {
        show(appear[j], mproduct[j]);
    })

    function show(arrow, watch) {
        arrow.onclick = function() {
            if (!flag) {
                watch.style.display = "none";
                flag = true;
                arrow.style.transform = 'rotate(360deg)';
            } else {
                watch.style.display = "block";
                flag = false;
                arrow.style.transform = 'rotate(180deg)';
            }
        }
    }
}