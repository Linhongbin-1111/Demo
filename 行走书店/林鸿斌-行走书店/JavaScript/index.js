let imgList = document.querySelector('.banner .banner-img-box');
let button = document.querySelectorAll('.btn-list li');
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

// 模拟联调
let bookItems = document.querySelectorAll('.book-list .book-list-content .book-list-item');
let bookListContent = $('.book-list .book-list-content');
for (let i = 0; i < indexData.length; i++) {
    let div = document.createElement('div');
    div.className = 'book-list-item';

    $(div).append(
        `
        <img src="${indexData[i].goodsPhoto}" alt=""></img>
        <div class="book-info">${indexData[i].goodsName}</div>
        <div class="book-price">¥${indexData[i].fixPrice}</div>
        <div class="real-price">¥${indexData[i].sellPrice}</div>
        `
    )
    bookListContent.append(div);
}


// 跳转
for (let i = 0; i < bookListContent.length; i++) {
    bookListContent[i].onclick = function (e) {
        e.preventDefault();
        location.href = './commodity-detail.html?a=10&b=20'
    }
}
// 底部栏跳转
let classify = document.querySelector('.footer a:nth-child(2)')
let shopCar = document.querySelector('.footer a:nth-child(3)')
let userCenter = document.querySelector('.footer a:nth-child(4)')
// console.log(userCenter);

userCenter.onclick = function(e) {
    e.preventDefault();
    location.href='./user-center.html'
}

classify.onclick = function(e) {
    e.preventDefault();
    location.href='./commodity-classify.html'
}

shopCar.onclick = function(e) {
    e.preventDefault();
    location.href='./shopping-trolley.html'
}