const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();
mongoose.connect('mongodb+srv://Nasar:TO5EJLynfr6DYJxo@socialnetwork-dbnaa.mongodb.net/social-network?retryWrites=true&w=majority')
.then(() => {
  console.log("Connected to MongoDB")
})
.catch(() => {
  console.log("Error connecting to MongoDB")
});

app.use(bodyParser.json());

app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Success'
  });
});

app.get('/api/posts', (req, res) => {   //localhost:3000/api/posts
  Post.find()
  .then(documents =>{
    res.status(200).json({
      message: "GET request success",
      posts: documents
    });
  });
})

module.exports = app;
