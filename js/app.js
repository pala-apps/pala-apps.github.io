var toggleNav = document.getElementById( 'toggleNav' );
var nav = document.getElementById( 'nav' );
var navToggled = false;

toggleNav.onclick = function(e) {
  console.log( nav.className )
  if ( navToggled ) {
    nav.className = "navbar-collapse";
    navToggled = false;
  } else {
    nav.className = "navbar-collapse show";
    navToggled = true;
  }
}
