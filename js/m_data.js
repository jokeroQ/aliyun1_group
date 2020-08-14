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

let m_user = document.getElementsByClassName("header_login").item(0);
let m_login = document.getElementsByClassName("login_box").item(0);
let flag = true;   
m_user.onclick = function(){
    if (!flag) {
        m_login.style.display = "none";
        flag = true;
    }else {
        m_login.style.display = "block";
        flag = false;
    }
}

let module_box = document.getElementsByClassName("module_box").item(0);
let module = document.querySelector(".module");
let index = 0;
let cube = document.querySelectorAll(".module li");
let timer = null;
function next_img(){
    let newLeft;
    if(module_box.style.left === "-36rem"){
        newLeft = -14.4;
    }else {
        newLeft = parseFloat(module_box.style.left) - 7.2;
    }  
    module_box.style.left = newLeft + "rem";
    index ++;
    if(index > 3){
        index = 0;
    }
    showCurrent();
}
window.onload = function(){
    timer = setInterval(function(){
        next_img();
    }, 2000);
}
function showCurrent(){
    for(let i = 0 ;i < cube.length ; i++){
        cube[i].className = "";
    }
    cube[index].className = "on";
}
for(let i =0 ;i < cube.length ; i++){
    cube[i].onclick = function(){
        let dis = index - i;
        if(index == 3 && parseFloat(module_box.style.left) !== -28.8){
            dis = dis - 4;
        }
        if(index == 0 && parseFloat(module_box.style.left) !== -7.2){
            dis = dis + 4;
        }
        module_box.style.left = (parseFloat(module_box.style.left) + dis * 7.2) + "rem";
        index = i;
        showCurrent();
        clearInterval(timer);
    }
}

let product_content = document.querySelectorAll(".smarter .product_content");
let onclick_a = document.querySelectorAll(".smarter li > a");
let product_name = document.querySelectorAll(".product_name");
for(let i =0 ;i < onclick_a.length ; i++){
    onclick_a[i].onclick = function(){
        for(let i =0 ;i < onclick_a.length ; i++){
            product_name[i].style.color = "#373d41";
            product_content[i].style.display = "none";
        }
        product_name[i].style.color = "#00c1de";
        product_content[i].style.display = "block";
    }
}