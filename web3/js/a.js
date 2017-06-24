(function () {
    console.log('%c%s', 'background: yellow; color: red; font-size: 24px;', '测试')
    window.onload = function () {
        var navbtns = document.getElementsByClassName('navbtn')
        for (var i = 0; i < navbtns.length; i++) {
            (function (i) {
                var _id = navbtns[i].getAttribute('data-navbtn-toggle')
                var _toggleTarget = document.getElementById(_id)
                navbtns[i].onclick = function () {
                    _toggleTarget.classList.toggle('open')
                    navbtns[i].textContent = navbtns[i].textContent == '打开' ? '关闭' : '打开'
                }
            }(i))
        }
    }
}())
