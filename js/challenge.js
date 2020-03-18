document.addEventListener("DOMContentLoaded", () => {
  counter()
});

const counterField = document.getElementById('counter')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')

function counter() {
  let i = 0
  setInterval(function() {
    counterField.innerHTML = i++
  }, 1000);

  function countUp(){
  plusButton.addEventListener('click', function(e) {
    i++;
  })
}
}

function countUp() {

}
