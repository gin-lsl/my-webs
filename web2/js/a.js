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
