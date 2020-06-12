let inputs = $('.book-list .book-list-item .select-btn-box > div input');
// console.log(inputs)
let checkedAll = true;

// 查找所有减号按钮
let allDeleteBtns = $('.book-list .book-list-item .book-count-info > div:nth-child(2) > div:nth-child(3) .change-count-box div:first-child')
// 查找所有加号按钮
let allAddBtns = $('.book-list .book-list-item .book-count-info > div:nth-child(2) > div:nth-child(3) .change-count-box div:nth-child(3)')

// 加减按钮事件
allDeleteBtns.click(function () {
    let count = parseInt($(this).next().html())
  
    if ($(this).next().html() > 1) {
      $(this).next().html(count - 1)
  
      $('.close-count>div:nth-child(2)>span:nth-child(2)').html(getTotal())
    }
  })
  
  allAddBtns.click(function () {
    let count = parseInt($(this).prev().html())
  
    $(this).prev().html(count + 1)
  
    $('.close-count>div:nth-child(2)>span:nth-child(2)').html(getTotal())
  })


inputs.click(function() {
    let checked = $(this).is(':checked');
    let checkAllBtn = $('.close-count > div:first-child > div input');
    // console.log(checkAllBtn);
    let checkAllDiv = $('.close-count > div:first-child > div .action');

    // 选中时，显示颜色，非选中时，隐藏颜色
    if (Boolean(checked)) {
        $(this).next().css('display', 'block');
    } else {
        $(this).next().css('display', 'none');
    }

    changeAll();

    if (Boolean(checkedAll)) {
        checkAllBtn.prop('checked', true);
        checkAllDiv.css('display', 'block');
    } else {
        checkAllBtn.prop('checked', false);
        checkAllDiv.css('display', 'none');
    }   
    $('.close-count>div:nth-child(2)>span:nth-child(2)').html(getTotal())
})

// 全选按钮点击事件
let checkAllBtn = $('.close-count > div:first-child > div:first-child input');
let totalPrice = $('.close-count > div:last-child > span:nth-child(2)');
// console.log(totalPrice)
checkAllBtn.click(function () {
    let allChecked = $(this).is(':checked');
    let inputs = $('.book-list .book-list-item .select-btn-box > div input');

    if (allChecked) {
        $(this).next().css('display', 'block');
        totalPrice.html(getTotal());
    } else {
        $(this).next().css('display', 'none');
        totalPrice.html('0.00');
    }

    inputs.each(index => {
        if(allChecked) {
            $(inputs[index]).prop('checked', true);
            $(inputs[index]).next().css('display', 'block');
            
        } else {
            $(inputs[index]).prop('checked', false);
            $(inputs[index]).next().css('display', 'none');
        }
    })
    totalPrice.html(getTotal())
    // getTotal();
})


// 检索所有input框（不包括全选input框）的状态
let changeAll = function () {
    let inputs = $('.book-list .book-list-item .select-btn-box > div input');

    for (let i = 0; i < inputs.length; i++) {
        // 如果存在没有选中的input框，那么将checkedAll变成false，否则，不存在没有选中的input框，将checkedAll变成true
        if (!$(inputs[i]).is(':checked')) {
            checkedAll = false;
            break;
        } else {
            checkedAll = true;
        }
    }
}
// changeAll();
// 更新总计价格
let getTotal = function () {
    let total = 0.00;
    let lis = $('.book-list .book-list-item');

    lis.each(index => {
        if ($(lis[index]).children('.select-btn-box').children().children('input').is(':checked')) {
            // 目前单价
            let currentPrice = parseFloat($(lis[index]).children('.book-count-info').children('div:nth-child(2)').children('div:nth-child(3)').children('div:first-child').children('span:last-child').html());
            // 目前数量
            let currentCount = parseInt($(lis[index]).children('.book-count-info').children('div:nth-child(2)').children('div:nth-child(3)').children('div.change-count-box').children('div:nth-child(2)').html())
            // 将列表项价格汇总
            total = total + currentPrice * currentCount;
        }
        // console.log(currentPrice)
    })
    return Number(total.toFixed(2));
}


// 删除购物车选项
let deleteBtn = $('.header span'); // 删除按钮
// console.log(deleteBtn);
deleteBtn.click(function() {
    let inputs = $('.book-list .book-list-item .select-btn-box > div input'); // 获取选中框
    let bookListItem = $('.book-list .book-list-item'); // 书籍列表item
    let allChecked = $('.close-count > div:first-child > div:first-child input').is(':checked'); // 判断全选框是否为选中
    // console.log(allChecked);
    getTotal();
    for (let i = 0; i < inputs.length; i++) {  // 循环遍历书籍列表
        let checked = $(inputs[i]).is(':checked'); // 判断书籍的selectbox是否选中
        if (Boolean(checked)===true) {
            $(bookListItem[i]).remove(); // 若选中，则删除dom
            totalPrice.html(getTotal());
        }
        if (allChecked) {
            checkAllBtn.next().css('display', 'none'); // 若为全选，删除后，清除全选框样式
            totalPrice.html('0.00');
        }

    }
})