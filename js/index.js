window.addEventListener('load', function () {
    // 1获取元素
    var al = document.querySelector('.al');
    var ar = document.querySelector('.ar');
    var jd_clo2_l = document.querySelector('.jd_clo2-l');
    var tWidth = jd_clo2_l.offsetWidth;
    var close = document.querySelector('.ofclose');
    var Jevent = document.querySelector('.J-event');


    // 2.鼠标经过显示按钮
    jd_clo2_l.addEventListener('mouseenter', function () {
        al.style.display = 'block';
        ar.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    jd_clo2_l.addEventListener('mouseleave', function () {
        al.style.display = 'none';
        ar.style.display = 'none';
        timer = setInterval(function () {
            ar.click();
        }, 2000)
    })
    // 3动态生成小圆圈
    var ul = jd_clo2_l.querySelector('ul');
    // this.console.log(ul.offsetWidth)

    var ol = jd_clo2_l.querySelector('.circle');


    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i)
        ol.appendChild(li);
        // 4.小圆圈的排他思想
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';

            }
            this.className = 'current';
            // 5.点击圆圈，移动图片，移动的是ul
            var index = this.getAttribute('index')
            num = index;
            circle = index;
            // console.log(tWidth, index, uL)
            dong(ul, -index * tWidth)
        })
    }
    ol.children[0].className = 'current'
    // 6.克隆第一张图片放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7.点击按钮移动图片
    var num = 0;
    var circle = 0;
    var flag = true;
    ar.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            dong(ul, -num * tWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == 4) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';

            }
            ol.children[circle].className = 'current'
        }
    })
    // 8.点击左按钮
    al.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                ul.style.left = -(ul.children.length - 1) * tWidth + "px";
                num = ul.children.length - 1;
            }
            num--;
            dong(ul, -num * tWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';

            }
            ol.children[circle].className = 'current'
        }
    })
    // 9.自动播放轮播图
    var timer = setInterval(function () {
        ar.click();
    }, 2000)
    // 关闭广告
    close.addEventListener('click', function () {
        Jevent.style.display = 'none'
    })
})