const validateBody = (req, res,next) => {
    const { body } = req;
    if (body.title === undefined) {
        return res.status(400).json({ message: "O campo 'title' é obrigatório" });
    }
    if (body.title === "") {
        return res.status(400).json({ message: "O campo 'title' não pode ser vazio" });
    }

    next();
    // A função callback next() é requisito do próprio router do express para que seja executada a próxima método
    //  no router caso passe pelos ifs da validação
    // Ex. no router.js:
    // router.post("/tasks",tasksMiddleware.validateBody, taskController.createTask)
    // Se passar pela validação em tasksMiddleware.validateBody ai vai pro próximo método taskController.createTask
    // funciona també se o nome da função não for exatamente "next()"
};


module.exports = { validateBody }