const express=require('express')
const router=express.Router();
const {createTask, getAllTask}=require('../controllers/todo_controller.js')

router.post('/create/:userId',createTask);
router.get('/getTask/:userId',getAllTask);

module.exports=router