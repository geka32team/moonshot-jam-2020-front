let btn = document.querySelector('.login-btn')
let username = document.querySelector('.username')
let password = document.querySelector('.password')
let url = 'http://127.0.0.1:5000/api/register'

btn.addEventListener('click', () => {
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify({ username: username.value , password: password.value}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => console.log('res', res))
})
