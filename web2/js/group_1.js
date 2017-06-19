(function () {
  addLoadEvent(function () {
    var group1 = document.getElementById('group_1')
    var currentTranslateX = 0
    var itemWidth = 1280
    var maxWidthX = itemWidth * 3
    var minWidthX = -itemWidth * 2
    var carouselWrap = group1.getElementsByClassName('carousel-wrap')[0]
    var itemWraps = group1.getElementsByClassName('item-wrap')
    var prevButton = group1.getElementsByClassName('carousel-prev')[0]
    var nextButton = group1.getElementsByClassName('carousel-next')[0]
    var carouselPages = group1.getElementsByClassName('carousel-page')
    var currentIndex = 0
    prevButton.onclick = function () {
      carouselPages[currentIndex].classList.remove('active')
      if (currentTranslateX >= 0) {
        currentTranslateX = minWidthX
        currentIndex = 2
      } else {
        currentTranslateX += itemWidth
        currentIndex--
      }
      carouselPages[currentIndex].classList.add('active')
      carouselWrap.style.transform = 'translate3d(' + currentTranslateX + 'px, 0px, 0px)'
    }
    nextButton.onclick = function () {
      carouselPages[currentIndex].classList.remove('active')
      if (currentTranslateX <= minWidthX) {
        currentTranslateX = 0
        currentIndex = 0
      } else {
        currentIndex++
        currentTranslateX -= itemWidth
      }
      carouselPages[currentIndex].classList.add('active')
      carouselWrap.style.transform = 'translate3d(' + currentTranslateX + 'px, 0px, 0px)'

    }
    function whenWindowResize () {
      itemWidth = parseInt(document.body.clientWidth) * 0.8 * 0.8
      maxWidthX = itemWidth * 3
      minWidthX = -itemWidth * 2
      carouselWrap.style.width = maxWidthX + 'px'
      for (var i = 0; i < itemWraps.length; i++) {
        (function (i) {
          itemWraps[i].style.width = itemWidth + 'px'
        }(i))
      }
    }
    addResizeEvent(whenWindowResize)
    whenWindowResize()
  })
}())
