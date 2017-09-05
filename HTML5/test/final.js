window.onload = function () {
    
    f2();
    
}

function f1() {
    localStorage.setItem("demokey","www.baidu.com");
    var dt = localStorage.getItem("demokey");
    alert(dt);
    alert(localStorage.length);
}

function f2() {
    sessionStorage.setItem("demokey","www.meituan.com");
    var dt = sessionStorage.getItem("demokey");
    alert(dt);
    alert(sessionStorage.length);
}