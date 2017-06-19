(function() {
  addLoadEvent(function () {
    var contact = document.getElementById('contact')
    var placeholders = contact.getElementsByClassName('placeholder')
    var conInputs = contact.getElementsByClassName('con-input')
    for (var i = 0; i < conInputs.length; i++) {
      (function(i) {
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
      }(i));
    }
  })
}());
