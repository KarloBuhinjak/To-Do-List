const { Router } = require('express')
const router = Router()
const Todo = require('../Models/Todo');


router.get('/todos', async(req, res) => {
    const todos = await Todo.find();

    res.json(todos);
});

router.post('/todo/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save();

    res.json(todo);
})

router.delete('/todo/delete/:id', async(req, res) =>{
    const result = await Todo.findByIdAndDelete(req.params.id);

    res.json({result});
})

router.put('/todo/complete/:id', async(req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;

    todo.save();
    res.json(todo)
})

module.exports = router