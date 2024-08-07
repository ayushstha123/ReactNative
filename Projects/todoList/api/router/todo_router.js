const express=require('express')
const router=express.Router();
const {createTask}=require('../controllers/todo_controller.js')

router.post('/create/:userId',createTask);

module.exports=router