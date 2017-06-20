(function () {
  addLoadEvent(function () {
    var sFirst = document.getElementById('s-first')
    var sliderInners = sFirst.getElementsByClassName('slider-inner')
    var btnSliderToLeft = sFirst.getElementsByClassName('slider-to-left')[0]
    var btnSliderToRight = sFirst.getElementsByClassName('slider-to-right')[0]
    var currentSliderInner = 0
    var sliderDownArrow = sFirst.getElementsByClassName('slider-down-arrow')[0]

    btnSliderToLeft.onclick = function () {
      sliderInners[currentSliderInner].classList.remove('slider-inner-current')
      sliderInners[prevCurrentSliderInner()].classList.add('slider-inner-current')
    }
    btnSliderToRight.onclick = function () {
      sliderInners[currentSliderInner].classList.remove('slider-inner-current')
      sliderInners[nextCurrentSliderInner()].classList.add('slider-inner-current')
    }

    // 获取下一个索引坐标
    function nextCurrentSliderInner() {
      if (currentSliderInner < sliderInners.length - 1) {
        currentSliderInner++
        return currentSliderInner
      }
      currentSliderInner = 0
      return 0
    }

    // 获取上一个索引的坐标
    function prevCurrentSliderInner() {
      if (currentSliderInner > 0) {
        currentSliderInner--
        return currentSliderInner
      }
      currentSliderInner = sliderInners.length - 1
      return currentSliderInner
    }

    sliderDownArrow.onclick = function () {
      scrollToId('group_1')
    }
  })
}())
