require('dotenv').config()

let url = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000/api'

export const post = (endPoint, data = {}) => fetch(url + endPoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: "include"
})

export const postNoData = (endPoint) => fetch(url + endPoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    credentials: "include"
})