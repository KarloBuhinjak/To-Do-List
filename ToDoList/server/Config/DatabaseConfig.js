const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to DB');
  })
  .catch(console.error);