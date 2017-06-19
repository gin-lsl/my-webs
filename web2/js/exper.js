(function() {
  addLoadEvent(function () {
    var exper = document.getElementById('exper')
    var experContentLeft = exper.getElementsByClassName('exper-content-left')[0]
    var experContentRight = exper.getElementsByClassName('exper-content-right')[0]
    experContentLeft.style.marginTop = (experContentRight.clientHeight - experContentLeft.clientHeight) / 2 + 'px'
  })
}());
