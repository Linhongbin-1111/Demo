let lis = $('.container .book-classify li');
// console.log(lis);  
let btn1 = $('.book-classify li:first-child');
let btn2 = $('.book-classify li:nth-child(2)');
let btn3 = $('.book-classify li:nth-child(3)');
let btn4 = $('.book-classify li:nth-child(4)');
let btn5 = $('.book-classify li:last-child');
let classifyItem = $('.book-classify-conteiner'); // 书籍框

// 左侧栏点击后改变样式
lis.click(function () {

  lis.each(index => {
    $(lis[index]).removeClass('active');
    $(lis[index]).css('background', '#ffffff');
    $(lis[index]).children('span').css('background', '#ffffff');
    $(lis[index]).children('span').css('borderTopRightRadius', '0');
    $(lis[index]).children('span').css('borderBottomRightRadius', '0')
  })
  $(this).addClass('active');
  $(this).children('span').css('background', 'rgb(246, 246, 246)');
  

  // 点击当前li，让上下两个兄弟元素li背景色变为#ddd，并且让它下面的span背景色
  $(this).prev().css('background', 'rgb(246, 246, 246)');
  $(this).prev().children('span').css('background', '#fff');
  $(this).prev().children('span').css('borderBottomRightRadius', '10px');

  $(this).next().css('background', 'rgb(246, 246, 246)');
  $(this).next().children('span').css('background', '#ffffff');
  $(this).next().children('span').css('borderTopRightRadius', '10px');
})

// 模拟联调
// 加载页面时默认显示 古典文学
let count1 = 0
window.onload = function () {
  if (count1 === 0) {
    classifyList1.forEach(item => {
    let li1 = document.createElement('li');
    let ul1 = document.createElement('ul');
    li1.className = 'book-classify-item';
    ul1.className = 'book-list';
    $(li1).append(
      `
      <div class="book-classify-item-title">${item.name}</div>
      <ul class="book-list"></ul>
      `
    )
    item.bookList.forEach(bookItem => {
      $(li1).children('.book-list').append(
        `
        <li>
          <img src="${bookItem.imgUrl}" alt="">
          <div>${bookItem.bookName}</div>
          <div>￥${bookItem.fixPrice} <span>￥${bookItem.sellPrice}</span></div>
        </li>
        `
      )
    })
    $('.book-classify-conteiner').append(li1);
  })
  count1 = count1 + 1
  }
}

// 人物传记
let count2 = 0  // 控制只添加一次li
btn2.click(function () {
  if (count2 === 0 ){ // 控制只添加一次li
    classifyList2.forEach(item => {
    let li2 = document.createElement('li');
    let ul2 = document.createElement('ul');
    li2.className = 'book-classify-item';
    ul2.className = 'book-list';
    $(li2).append(
      `
      <div class="book-classify-item-title">${item.name}</div>
      <ul class="book-list"></ul>
      `
    )
    item.bookList.forEach(bookItem => {
      $(li2).children('.book-list').append(
        `
        <li>
          <img src="${bookItem.imgUrl}" alt="">
          <div>${bookItem.bookName}</div>
          <div>￥${bookItem.fixPrice} <span>￥${bookItem.sellPrice}</span></div>
        </li>
        `
      )
    })
    // console.log(classifyItem.length)
    // if (classifyItem.length > 0){
    //   classifyItem.removeChild(classifyItem.children(1))
    //   classifyItem.append(li2);
    // } else {
      classifyItem.append(li2);
    // }
  })
    count2 = count2 + 1 // 只添加一次li
  }
}) 

// 小说散文
let count3 = 0  // 控制只添加一次li
btn3.click(function () {
  if (count3 === 0 ){ // 控制只添加一次li
    classifyList3.forEach(item => {
    let li3 = document.createElement('li');
    let ul3 = document.createElement('ul');
    li3.className = 'book-classify-item';
    ul3.className = 'book-list';
    $(li3).append(
      `
      <div class="book-classify-item-title">${item.name}</div>
      <ul class="book-list"></ul>
      `
    )
    item.bookList.forEach(bookItem => {
      $(li3).children('.book-list').append(
        `
        <li>
          <img src="${bookItem.imgUrl}" alt="">
          <div>${bookItem.bookName}</div>
          <div>￥${bookItem.fixPrice} <span>￥${bookItem.sellPrice}</span></div>
        </li>
        `
      )
    })
    // if ($('.book-classify-conteiner').length > 0){
    //   $('.book-classify-conteiner').remove(li)
    // } else {
      $('.book-classify-conteiner').append(li3);
    // }
  })
    count3 = count3 + 1 // 只添加一次li
  }
}) 

// 世界名著
let count4 = 0  // 控制只添加一次li
btn4.click(function () {
  if (count4 === 0 ){ // 控制只添加一次li
    classifyList4.forEach(item => {
    let li4 = document.createElement('li');
    let ul4 = document.createElement('ul');
    li4.className = 'book-classify-item';
    ul4.className = 'book-list';
    $(li4).append(
      `
      <div class="book-classify-item-title">${item.name}</div>
      <ul class="book-list"></ul>
      `
    )
    item.bookList.forEach(bookItem => {
      $(li4).children('.book-list').append(
        `
        <li>
          <img src="${bookItem.imgUrl}" alt="">
          <div>${bookItem.bookName}</div>
          <div>￥${bookItem.fixPrice} <span>￥${bookItem.sellPrice}</span></div>
        </li>
        `
      )
    })
    // if ($('.book-classify-conteiner').length > 0){
    //   $('.book-classify-conteiner').remove(li)
    // } else {
      $('.book-classify-conteiner').append(li4);
    // }
  })
    count4 = count4 + 1 // 只添加一次li
  }
}) 

// 教育
let count5 = 0  // 控制只添加一次li
btn5.click(function () {
  if (count5 === 0 ){ // 控制只添加一次li
    classifyList5.forEach(item => {
    let li5 = document.createElement('li');
    let ul5 = document.createElement('ul');
    li5.className = 'book-classify-item';
    ul5.className = 'book-list';
    $(li5).append(
      `
      <div class="book-classify-item-title">${item.name}</div>
      <ul class="book-list"></ul>
      `
    )
    item.bookList.forEach(bookItem => {
      $(li5).children('.book-list').append(
        `
        <li>
          <img src="${bookItem.imgUrl}" alt="">
          <div>${bookItem.bookName}</div>
          <div>￥${bookItem.fixPrice} <span>￥${bookItem.sellPrice}</span></div>
        </li>
        `
      )
    })
    // if ($('.book-classify-conteiner').length > 0){
    //   $('.book-classify-conteiner').remove(li)
    // } else {
      $('.book-classify-conteiner').append(li5);
    // }
  })
    count5 = count5 + 1 // 只添加一次li
  }
}) 

// 书籍详情跳转
for (let i = 0; i < classifyItem.length; i++) {
  classifyItem[i].onclick = function (e) {
      e.preventDefault();
      location.href = './commodity-detail.html?a=10&b=20'
  }
}

// 底部栏跳转
let userCenter = document.querySelector('.footer a:last-child')
let index = document.querySelector('.footer a:first-child')
let shopCar = document.querySelector('.footer a:nth-child(3)')
index.onclick = function(e) {
    e.preventDefault();
    location.href='./index.html'
}

classify.onclick = function(e) {
    e.preventDefault();
    location.href='./commodity-classify.html'
}

shopCar.onclick = function(e) {
    e.preventDefault();
    location.href='./shopping-trolley.html'
}