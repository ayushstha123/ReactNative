const Todo = require('../models/todo.js')
const User = require('../models/user.js');
const moment = require('moment');

const createTask = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { title, category } = req.body;

        const newTodo = new Todo({
            title,
            category,
            dueDate: moment().format('YYYY-MM-DD'),
        })
        await newTodo.save();
        const user = await User.findById(userId);
        if (!user) {
            res.status(400).json({ message: "User not found!" })

        }
        user?.todos.push(newTodo._id);
        await user.save();
        res.status(200).json({ message: "Todo added" })
    } catch (error) {
        res.status(200).json({ message: "Todo not added", error })
    }
}

module.exports = {
    createTask
};
