const express = require('express');
const cors = require('cors');
const todoRoute = require('./Routes/todo')
const app = express();

app.use(express.json());
app.use(cors());

require('./Config/DatabaseConfig')

app.use('/api/v1', todoRoute)

app.listen(3001, () => console.log("Server started on port 3001"));
