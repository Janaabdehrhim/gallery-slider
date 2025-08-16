

let pops = document.querySelectorAll("#gallery .item .layout i"),
    popup = document.querySelector(".pop"),
    exit = document.querySelector(".exit"),
    next = document.querySelector(".next"),
    pre = document.querySelector(".pre"),
    popimg = document.querySelector(".pop .box img"),
    imgs = document.querySelectorAll("#gallery img"),
    lis = document.querySelectorAll(".pop .nums li");
for (let pop of pops) {
    pop.addEventListener('click', function () {
        popup.classList.add('show');
        let current = pop.parentElement.previousElementSibling;
        setimg(current);

    });

}
exit.addEventListener('click', function () {
    popup.classList.remove('show');
});
next.addEventListener('click', nextimg);
pre.addEventListener('click', preimg);
function nextimg() {
    let index = parseInt(popimg.getAttribute("data-img-index"));
    if (index == 5) {
        index = -1;
    }
    let nextimgs = imgs[index + 1];
    setimg(nextimgs);
}
function preimg() {
    let index = parseInt(popimg.getAttribute("data-img-index"));
    if (index == 0) {
        index = 6;
    }

    let preimgs = imgs[index - 1];
    setimg(preimgs);
}
for(let l of lis){
    let x=parseInt(l.textContent-1);
    l.addEventListener('click',function(){
        setimg(imgs[x]);
    });
}
function setimg(imgelemnt) {
    let src = imgelemnt.getAttribute('src'),
        index = imgelemnt.getAttribute("data-img-index"),
        li = lis[index];
    popimg.setAttribute('src', src);
    popimg.setAttribute("data-img-index", index);
    for (let l of lis) {
        l.classList.remove('active');
    }
    li.classList.add('active');
}


