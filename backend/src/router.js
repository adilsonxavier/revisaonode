const express = require("express")

const router = express.Router()
const taskController = require("./controllers/tasksController")
const tasksMiddleware = require("./middleware/tasksMiddleware")




//router.get("/",(req,res) => res.status(200).send("o router ta funcionando2"));
router.get("/tasks",taskController.getAll)
router.post("/tasks",tasksMiddleware.validateBody, taskController.createTask)
router.delete("/tasks",taskController.deleteTask)



module.exports = router;
