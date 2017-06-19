(function() {
  addLoadEvent(function () {
    var skills = document.getElementById('skills')
    var skillCanvases = skills.getElementsByTagName('canvas')
    var _JIAO_DU_PRE = Math.PI / 180
    var START_HU_DU = fixHuDU(0)

    function convert_JiaoDu_To_HuDu(_jiaodu) {
      return _JIAO_DU_PRE * _jiaodu
    }

    /**
     * 修正为从顶部开始的角度值
     */
    function fixHuDU(targetJiaoDu) {
      return convert_JiaoDu_To_HuDu(targetJiaoDu - 90)
    }

    /**
     * 画圆
     *
     * {number} index - 第几个
     * {number} percent - 百分比
     */
    function drawCircle(index, percent, color) {
      var ctx = skillCanvases[index].getContext('2d')
      ctx.strokeStyle = color
      ctx.lineWidth = 20
      ctx.beginPath()
      ctx.arc(120, 120, 110, START_HU_DU, fixHuDU(360 * percent))
      ctx.stroke()
    }
    drawCircle(0, 0.73, '#35AFBA')
    drawCircle(1, 0.85, '#FF6060')
    drawCircle(2, 0.70, '#3AD079')
    drawCircle(3, 0.40, '#58C0E3')
  })
}());
