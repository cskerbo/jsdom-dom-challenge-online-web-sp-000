
let counterField = document.getElementById('counter')

function counter() {
  let i = 0
  setInterval(function() {
    counterField.innerHTML = i++
  }, 1000);

}
counter();
