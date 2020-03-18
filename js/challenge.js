document.addEventListener("DOMContentLoaded", () => {

const counterField = document.getElementById('counter')
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus')
const pauseButton = document.querySelector('#pause')
const heartButton = document.querySelector('#heart')
const likes = document.querySelector('.likes')
const submitButton = document.querySelector('#submit')
const commentList = document.querySelector('#list')

let count = setInterval(function() {
    counterField.innerText++;
  }, 1000);

minusButton.addEventListener('click', function(e) {
  counterField.innerText--;
})

plusButton.addEventListener('click', function(e) {
  counterField.innerText++;
})

pauseButton.addEventListener('click', function(e) {
  if (pauseButton.innerText === 'Pause'){
    pauseButton.innerText = "Resume"
    clearInterval(count)
    setTimeout(count)
    counterField.innerText = 'Paused'


    minusButton.disabled = true;
    plusButton.disabled = true;
    heartButton.disabled = true;
    submitButton.disabled = true;
  }
  else {
    counterField.innerText = '0'
    let count = setInterval(function() {
        counterField.innerText++;
      }, 1000);

    pauseButton.innerText = "Pause"
    minusButton.disabled = false;
    plusButton.disabled = false;
    heartButton.disabled = false;
    submitButton.disabled = false;
  }
})

likeButton.addEventListener('click', function(e){
  let likedNumber = counterField.innerText
  likes.innerHTML += `<li>${likedNumber} is liked 1 times.</li>`
})

});
