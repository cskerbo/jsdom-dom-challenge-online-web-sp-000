document.addEventListener("DOMContentLoaded", () => {
  counter()
});

let counterField = document.getElementById('counter')
let i = 0

function counter() {

  setInterval(function() {
    counterField.innerHTML = i++
  }, 1000);
}

function countUp() {

}
