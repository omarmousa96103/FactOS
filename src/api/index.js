const BASE = 'http://localhost:5000/api'

const getToken = () => localStorage.getItem('token')

const headers = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`,
})

export const api = {

    // Auth
    signup: (data) => fetch(`${BASE}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(r => r.json()),

    login: (data) => fetch(`${BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(r => r.json()),

    // News
   getNews: (filters = {}) => fetch(`${BASE}/news?${new URLSearchParams(filters)}`, {
        headers: headers(),
    }).then(r => r.json()),

    searchNews: (q) => fetch(`${BASE}/news/search?q=${q}`, {
        headers: headers(),
    }).then(r => r.json()),

    getNewsById: (id) => fetch(`${BASE}/news/${id}`, {
        headers: headers(),
    }).then(r => r.json()),

    // Fact Check
    factCheck: (query) => fetch(`${BASE}/factcheck`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({ query }),
    }).then(r => r.json()),

    // User
    getProfile: () => fetch(`${BASE}/user/profile`, {
        headers: headers(),
    }).then(r => r.json()),

    updateProfile: (data) => fetch(`${BASE}/user/profile`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(data),
    }).then(r => r.json()),

    updatePassword: (data) => fetch(`${BASE}/user/password`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify(data),
    }).then(r => r.json()),
    
}