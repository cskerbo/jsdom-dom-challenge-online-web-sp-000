
let counterField = document.getElementById('counter')

function counter() {
  let i = 0
  setInterval(function() {
    console.log((i++));
  }, 1000);
  
}
