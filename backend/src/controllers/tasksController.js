const tasksModel = require("../models/tasksModel")


const getAll =  async (req, res) => {
    
    const tasks =  await  tasksModel.getAll()
    return res.status(200).json(tasks);

}

const createTask = async (req,res) => {
    const {title} = req.body;
    const createdTask = await tasksModel.createTask(req.body);
    console.log("createdTask controller"+ JSON.stringify(createdTask))
    return  res.status(201).json(createdTask);
}

const deleteTask = async (req,res) => {
    const {id} = req.body.id;
    const removedTask = await tasksModel.deleteTask(id);
    return res.status(200).json(removedTask)
}

module.exports = {
    getAll,
    createTask,
    deleteTask
}
