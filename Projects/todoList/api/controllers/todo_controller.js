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

const getAllTask=async(req,res)=>{
    try {
     const userId=req.params.userId;
     const user=await User.findById(userId).populate("todos");

     if(!user){
        res.status(400).json({message:"User not found!"})
     }
     res.status(200).json({todos:user.todos})
    
    } catch (error) {
        res.status(200).json({ message: "Something went wrong", error })
    }
}

const completedTask = async (req, res) => {
try {
    const todoId=req.params.todoId;
    const updatedTask=await Todo.findByIdUpdate(todoId,{
        status:"completed",
        
    },{new:true});

    if(!updatedTask){
        return res.status(404).json({error:"Todo not found"})
    }
    res.status(200).json({message:"Todo marked as complete",todo:updatedTask})
} catch (error) {
    res.status(500).json({error:"Something went wrong!"})
}
}

module.exports = {
    createTask,
    getAllTask
};
