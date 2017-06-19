window.onload = function () {
  var imageSrcs = [ './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg' ]
  var currentIndexActive = 0

  function fixPeoplePaneHeight () {
    var peoplePane = document.getElementById('people-pane')
    var peoplePaneHeight = peoplePane.clientHeight
    var len = document.querySelectorAll('#pic-pane .row').length | 0
    var _height = 190 + 220 * len
    _height = peoplePaneHeight > _height ? peoplePaneHeight : _height
    peoplePane.style.height = _height + 'px'
  }

  function preSwitchImage() {
    var indexs = document.getElementsByClassName('index')[0]
    var indexLis = indexs.getElementsByTagName('li')
    var bigImages = document.querySelectorAll('#big-image-wrap>img')
    for (var i = 0; i < indexLis.length; i++) {
      (function (i) {
        indexLis[i].onclick = function (e) {
          if (i === currentIndexActive) {
            return
          }
          this.classList.add('active')
          indexLis[currentIndexActive].classList.remove('active')
          bigImages[i].classList.add('show')
          setTimeout(function () {
            bigImages[currentIndexActive].classList.remove('show')
            currentIndexActive = i
          }, 500)
        }
      }(i))
    }
  }

  function openTopnav() {
    var topnav = document.getElementsByClassName('topnav')[0]
    var openTopnavDir = document.getElementById('open-topnav-dir')
    document.getElementById('open-topnav').onclick = function () {
      topnav.classList.toggle('open')
      openTopnavDir.textContent = openTopnavDir.textContent === 'arrow_forward' ? 'arrow_back' : 'arrow_forward'
    }
  }

  /** 角度转弧度 */
  function angleToRedian(angle) {
    return Math.PI / 180 * angle
  }

  function arcTop(angle) {
    return angleToRedian(angle - 90)
  }

  function drawCircle() {
    var fixTop = angleToRedian(-90)
    var a360 = arcTop(360)
    var canvas = document.getElementById('cc')
    var ctx = cc.getContext('2d')
    // 第一个
    ctx.strokeStyle = '#E28250'
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.arc(50, 50, 40, fixTop, a360 * 0.76)
    ctx.stroke()
    ctx.strokeStyle = '#FFF'
    ctx.beginPath()
    ctx.arc(50, 50, 40, a360 * 0.76, a360)
    ctx.stroke()
    // 第二个
    ctx.strokeStyle = '#D16155'
    ctx.beginPath()
    ctx.arc(50, 50, 34, fixTop, a360 * 0.67)
    ctx.stroke()
    ctx.strokeStyle = '#FFF'
    ctx.beginPath()
    ctx.arc(50, 50, 34, a360 * 0.67, a360)
    ctx.stroke()
    // 第三个
    ctx.strokeStyle = '#C42A22'
    ctx.beginPath()
    ctx.arc(50, 50, 28, fixTop, a360 * 0.52)
    ctx.stroke()
    ctx.strokeStyle = '#FFF'
    ctx.beginPath()
    ctx.arc(50, 50, 28, a360 * 0.52, a360)
    ctx.stroke()
  }

  fixPeoplePaneHeight()
  preSwitchImage()
  openTopnav()
  drawCircle()
}