function navBar() {
  var x = document.getElementById("myNav");
  if (x.className === "nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "nav-bar";
  }
}

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if ( prevScrollPos > currentScrollPos){
        document.getElementById('myNav').style.top = '0';  
    } else {
        document.getElementById('myNav').style.top = '-50px';
    }
    prevScrollPos = currentScrollPos;
}

function formSubmit() {
  var form = document.getElementById("form");
  var thanks = document.getElementById('thanks')
  if (form.className === 'formVisible') {
    form.className = 'formHidden';
    thanks.className = 'thanksVisible';
  } else {
    form.className = 'formVisible';
    thanks.className = 'thanksHidden';
  }
}