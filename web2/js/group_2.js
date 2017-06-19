(function () {
  addLoadEvent(function () {
    var group2 = document.getElementById('group_2')
    var currentTranslateX = 0;
    var itemWidth = 1200
    var maxWidthX = itemWidth * 3
    var minWidthX = -itemWidth * 2
    var carouselWrap = group2.getElementsByClassName('carousel-item-outer')[0]
    var itemWraps = group2.getElementsByClassName('carousel-item')
    var prevButton = group2.getElementsByClassName('carousel-prev')[0]
    var nextButton = group2.getElementsByClassName('carousel-next')[0]
    var carouselPages = group2.getElementsByClassName('carousel-page')
    var currentIndex = 0

    prevButton.onclick = function () {
      if (currentTranslateX >= 0) {
        currentTranslateX = minWidthX
      } else {
        currentTranslateX += itemWidth
      }
      carouselWrap.style.transform = 'translate3d(' + currentTranslateX + 'px, 0px, 0px)'
    }

    nextButton.onclick = function () {
      if (currentTranslateX <= minWidthX) {
        currentTranslateX = 0
      } else {
        currentTranslateX -= itemWidth
      }
      carouselWrap.style.transform = 'translate3d(' + currentTranslateX + 'px, 0px, 0px)'
    }

    function whenWindowResize() {
      itemWidth = parseInt(document.body.clientWidth) * 0.8 * 0.8
      maxWidthX = itemWidth * 3
      minWidthX = -itemWidth * 2
      carouselWrap.style.width = maxWidthX + 'px'
      for (var i = 0; i < itemWraps.length; i++) {
        (function(i) {
          itemWraps[i].style.width = itemWidth + 'px'
        }(i));
      }
    }
    addResizeEvent(whenWindowResize)
    whenWindowResize()
  })
}())
