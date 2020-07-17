const options = { day: 'numeric', year: 'numeric', month: 'long' }
const today = new Date()
const date = today.toLocaleDateString('en-UK', options)
document.getElementById('date').innerHTML = date

function myFunction() {
  let x = document.getElementById('overlay')

  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible'
  } else {
    x.style.visibility = 'hidden'
  }
  // else if ( x.style.display === "flex" ) {
  //   document.getElementById( "overlay" ).className = "slide-out-left";
  //   x.style.display = "none";
  // }

  // else {
  //   x.style.display = "none";

  // }
}
