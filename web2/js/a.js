/**
 * 添加页面 window.onload 的事件处理器
 */
function addLoadEvent(func) {
  var oldonload = window.onload
  if (typeof oldonload != 'function') {
    window.onload = func
  } else {
    window.onload = function () {
      oldonload()
      func()
    }
  }
}

/**
 * 添加页面大小改变的事件处理器
 */
function addResizeEvent(func) {
  var oldresize = window.onresize
  if (typeof oldresize != 'function') {
    window.onresize = func
  } else {
    window.onresize = function () {
      oldresize()
      func()
    }
  }
}

/**
 * 加载图片
 */
function lazyLoadImage() {
  var lazyImages = document.getElementsByClassName('lazy-load-img')
  for (var i = 0; i < lazyImages.length; i++) {
    lazyImages[i].src = lazyImages[i].getAttribute('data-src')
  }
}
addLoadEvent(lazyLoadImage)

function scrollByByDown(y, _y) {
  if (y >= _y) {
    window.scrollBy(0, y)
    return
  }
  window.scrollBy(0, y)
  setTimeout(function () {
    scrollByByDown(y, _y - y)
  }, 4);
}

function scrollByByUp(y, _y) {
  if (_y <= y) {
    window.scrollBy(0, -_y)
    return
  }
  window.scrollBy(0, -y)
  setTimeout(function () {
    scrollByByUp(y, _y - y)
  }, 4);
}

function scrollToId(targetId, v) {
  v = v | 10
  var currentY = window.scrollY
  var sumHeight = 0
  var _target = document.getElementById(targetId)
  var _y = 0 // 相隔距离
  while (_target.previousElementSibling) {
    sumHeight += _target.previousElementSibling.clientHeight
    _target = _target.previousElementSibling
  }
  _y = Math.abs(currentY - sumHeight)
  console.log(_y);
  if (currentY > sumHeight) {
    scrollByByUp(v, _y)
  } else {
    scrollByByDown(v, _y)
  }
}
