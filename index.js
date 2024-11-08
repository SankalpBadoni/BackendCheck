require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "SankalpBadoni",
    "id": 152428580,
    "node_id": "U_kgDOCRXgJA",
    "avatar_url": "https://avatars.githubusercontent.com/u/152428580?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SankalpBadoni",
    "html_url": "https://github.com/SankalpBadoni",
    "followers_url": "https://api.github.com/users/SankalpBadoni/followers",
    "following_url": "https://api.github.com/users/SankalpBadoni/following{/other_user}",
    "gists_url": "https://api.github.com/users/SankalpBadoni/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SankalpBadoni/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SankalpBadoni/subscriptions",
    "organizations_url": "https://api.github.com/users/SankalpBadoni/orgs",
    "repos_url": "https://api.github.com/users/SankalpBadoni/repos",
    "events_url": "https://api.github.com/users/SankalpBadoni/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SankalpBadoni/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2023-11-29T17:35:40Z",
    "updated_at": "2024-10-25T09:47:29Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', function(req, res){
    res.send('hiteshdotcom')
})
app.get('/login', function(req, res){
    res.send('<h1> Please Login </h1>')
})
app.get('/about', function(req, res){
    res.send('<h2> We are students </h2>')
})
app.get('/github', function(req, res){
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})