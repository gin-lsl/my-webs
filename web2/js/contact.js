(function() {
  addLoadEvent(function () {
    var contact = document.getElementById('contact')
    var placeholders = contact.getElementsByClassName('placeholder')
    var conInputs = contact.getElementsByClassName('con-input')

    for (var i = 0; i < conInputs.length; i++) {
      (function(i) {
        // 定义表单动态效果的事件处理器
        conInputs[i].onfocus = function (e) {
          placeholders[i].style.top = '30px'
        }
        conInputs[i].onblur = function () {
          if (this.value) return
          placeholders[i].style.top = '75px'
        }
        placeholders[i].onclick = function () {
          conInputs[i].focus()
        }
        placeholders[i].onmouseenter = function () {
          conInputs[i].style.borderColor = 'lightblue'
        }
        placeholders[i].onmouseleave = function () {
          conInputs[i].style.borderColor = 'lightgrey'
        }
        function onmouseenterAndOnmouseover() {
          this.style.borderColor = 'lightblue'
          if (this.nextElementSibling) {
            this.nextElementSibling.style.borderColor = 'lightblue'
          }
        }
        // conInputs[i].onmouseenter = onmouseenterAndOnmouseover
        conInputs[i].onmouseover = onmouseenterAndOnmouseover
        conInputs[i].onmouseleave = function () {
          this.style.borderColor = 'lightgrey'
          if (this.nextElementSibling) {
            this.nextElementSibling.style.borderColor = 'lightgrey'
          }
        }
      }(i));
    }
  })
}());
