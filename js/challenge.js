document.addEventListener("DOMContentLoaded", () => {
  counter()
});

const counterField = document.getElementById('counter')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')
const pauseButton = document.querySelector('#pause')
const heartButton = document.querySelector('#heart')
const likes = document.querySelector('.likes')
const submitButton = document.querySelector('#submit')
const commentList = document.querySelector('#list')

function counter() {
  let i = 0
  setInterval(function() {
    counterField.innerText++;
  }, 1000);
}

minusButton.addEventListener('click', function(e) {
  counterField.innerText--;
})
