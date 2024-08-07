const express=require('express')
const router=express.Router();
const {createTask, getAllTask, completedTask}=require('../controllers/todo_controller.js')

router.post('/create/:userId',createTask);
router.get('/getTask/:userId',getAllTask);
router.patch('/update/:todoId',completedTask);

module.exports=router