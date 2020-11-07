const start_btn = document.querySelector('.attack')
const task = document.querySelector('.task')
const answer = document.querySelector('.answer')
const isReady = document.querySelector('.is-ready')
const numbers = [...document.querySelectorAll('.keyboard span')]

start_btn.addEventListener('click', showQuestion)


function showQuestion() {
    task.style.visibility = "visible"
    isReady.style.visibility = "hidden"
    start_btn.style.display = "none"
    
    window.addEventListener('keyup', writeAnswer)
    numbers.forEach((num) => num.addEventListener('click', writeAnswerFromButtons))
}

function writeAnswer(e) {
    if (e.key.match(/[0-9]/)) {
        answer.innerHTML += e.key
        removeListeners(2)
    }
}

function writeAnswerFromButtons(e) {
    answer.innerHTML += e.target.innerHTML
    removeListeners(2)
}

function removeListeners(num) {
    if (answer.innerHTML.length >= num) {
        console.log('answer.innerHTML', answer.innerHTML)
        answer.innerHTML = ''
        start_btn.style.display = 'inline-block'
        task.style.visibility = "hidden"
        isReady.style.visibility = "visible"
        window.removeEventListener('keyup', writeAnswer)
        numbers.forEach((num) => num.removeEventListener('click', writeAnswerFromButtons))
    }
}