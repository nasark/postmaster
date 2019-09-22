const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Success'
  });
});

app.get('/api/posts', (req, res) => {   //localhost:3000/api/posts
  const posts = [
    {
      id: "post_1",
      title: "First post from server",
      content: "from server"
    },
    {
      id: "post_2",
      title: "Second post from server",
      content: "also from server"
    }
  ];

  res.status(200).json({
    message: "GET request success",
    posts: posts
  });
})

module.exports = app;
