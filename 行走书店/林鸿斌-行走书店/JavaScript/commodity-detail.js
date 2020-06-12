// 返回
let back = document.querySelector('.back');
// console.log(back);
back.onclick = function (e) {
    e.preventDefault();
    location.href='./index.html'
}

// 跳转评价页面
let evaluatePage = document.querySelector('.header .evaluate');
// console.log(back);
evaluatePage.onclick = function (e) {
    e.preventDefault();
    location.href='./evaluate-page.html'
}

// 跳转
let deleteBtn = document.querySelector('.controller>div:first-child');
let addBtn = document.querySelector('.controller>div:nth-child(3)');
let countBox = document.querySelector('.controller > div:nth-child(2)');
let shopCarBtn = document.querySelector('.footer > a:first-child');
let appendShopCar = document.querySelector('.footer > a:nth-child(2)');
let actionBuy = document.querySelector('.footer > a:nth-child(3)');
// console.log(shopCarBtn)

deleteBtn.onclick = function () {
    let count = parseInt(countBox.innerHTML);
    if (count > 1) {
        count = count - 1;
        countBox.innerHTML = count;
    }
}
addBtn.onclick = function () {
    let count = parseInt(countBox.innerHTML);
    count = count + 1;
    countBox.innerHTML = count;
}
shopCarBtn.onclick = function (e) {
    e.preventDefault();
    location.href = './shopping-trolley.html';
}

appendShopCar.onclick = function (e) {
    e.preventDefault();
    location.href = './shopping-trolley.html';
}

actionBuy.onclick = function (e) {
    e.preventDefault();
    location.href = './shopping-trolley.html'
}

// 轮播图
let imgList = document.querySelector('.book-banner .banner-img-box');
let button = document.querySelectorAll('.btns li');
// console.log(button)
let index = 1;
let timer = null;
// 控制是否执行动画
let animated = false;
let animate = function (offset) {
    let speed = offset / 38;
    let newLeft = parseInt(imgList.style.left) + offset;
    console.log(newLeft)
    animated = true;
    function starAnimate () {
        if ((speed > 0 && parseInt(imgList.style.left) < newLeft) || (speed < 0 && parseInt(imgList.style.left) > newLeft)) {
            imgList.style.left = parseInt(imgList.style.left) + speed + 'px';
            setTimeout(starAnimate, 10);
        } else {
            animated = false;
            if (newLeft > -380) {
                imgList.style.left = -1520 + 'px';
            }

            if (newLeft < -1520) {
                imgList.style.left = -380 + 'px';
            }
        }
    }
    starAnimate();
}

// 向左滑动
function left () {
    if (!animated) {
        if(index === 1) {
            index = 4;
        } else {
            index = index - 1;
        }
        animate(380)
        initButtons();
    }
}

// 向右滑动
function right () {
    if (!animated) {
        if (index === 4) {
            index = 1;
        } else {
            index = index + 1;
        }
        animate(-380);
        initButtons();
    } 
}

// 小圆点跟随
let initButtons = function () {
    for (let i = 0; i < button.length; i++) {
        button[i].className = '';
    }
    button[index - 1].className = 'active';
}

// 小圆点点击
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        if (this.className === 'active') {
            return
        }
        let myIndex = parseInt(this.getAttribute('index'));
        let offset = -380 * (myIndex - index);
        animate(offset);
        index = myIndex;
        initButtons();
    }
}

// 添加动画、定时器
let container = document.querySelector('.banner-img-box');
let play = function () {
    timer = setInterval(() => {
        right();
    }, 2000)
}

let stop = function () {
    clearInterval(timer);
}

play();
container.onmouseover = stop;
container.onmouseout = play;