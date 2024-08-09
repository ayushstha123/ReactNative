const express=require('express')
const router=express.Router();
const {createTask, getAllTask, completedTask, undoTask, todoCount, completedDate}=require('../controllers/todo_controller.js')

router.post('/create/:userId',createTask);
router.get('/getTask/:userId',getAllTask);
router.patch('/update/:todoId',completedTask);
router.patch('/update/undo/:todoId',undoTask);
router.get('/completed/:date',completedDate);
router.get('/count',todoCount);

module.exports=router