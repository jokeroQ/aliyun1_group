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
    let arrow1 = document.getElementById("cloudproduct");
    let arrow2 = document.getElementById("solve");
    let arrow3 = document.getElementById("cloudmarket");
    let arrow4 = document.getElementById("support");
    let arrow5 = document.getElementById("cloudstate");
    let arrow6 = document.getElementById("aliyununiversity");
    let m_hotproduct = document.getElementsByClassName("m_hotproduct")[0];
    let m_hotproduct1 = document.getElementsByClassName("m_hotproduct")[1];
    let m_hotproduct2 = document.getElementsByClassName("m_hotproduct")[2];
    let m_hotproduct3 = document.getElementsByClassName("m_hotproduct")[3];
    let m_hotproduct4 = document.getElementsByClassName("m_hotproduct")[4];
    let m_hotproduct5 = document.getElementsByClassName("m_hotproduct")[5];
    let m_hotproduct6 = document.getElementsByClassName("m_hotproduct")[6];
    let morehidden = document.getElementsByClassName("m_more")[0];
    more.onclick = function() {
        morehidden.style.width = "6.6rem";
    }
    show(arrow, m_hotproduct);
    show(arrow1, m_hotproduct1);
    show(arrow2, m_hotproduct2);
    show(arrow3, m_hotproduct3);
    show(arrow4, m_hotproduct4);
    show(arrow5, m_hotproduct5);
    show(arrow6, m_hotproduct6);

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
    // arrow.onclick = function() {
    //     if (!flag) {
    //         m_hotproduct.style.display = "none";
    //         flag = true;
    //         arrow.style.transform = 'rotate(360deg)';
    //     } else {
    //         m_hotproduct.style.display = "block";
    //         flag = false;
    //         arrow.style.transform = 'rotate(180deg)';
    //     }
    // }
}