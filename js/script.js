let darmode = document.querySelector("#darkmode");
let container = document.querySelector('.main-container')
darkmode.onclick = () => {
    if(darkmode.classList.contains("bx-moon")){
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
        document.container.classList.add("active");
    } else {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
    }
};