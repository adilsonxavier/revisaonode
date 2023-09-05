
const connection = require("./connection");

const getAll = async () => {
    const [tasks] = await connection.execute("select * from tasks")
    // Acima usei desestruturação de array pra pegar o primeiro array que retornou e o chamei de tasks
    // Isso foi necessário por que o select retornou 1 array contendo 2 arrays : 1 com resultado da busca e outro
    // com dados do buffer , que não interessa
    return tasks;
};

const createTask = async (task) => {
    const { title } = task;
    console.log("task no model "+ JSON.stringify(task))
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = "insert into tasks(title,status,created_at) values (?,?,?)";
    const [createdTask]= await connection.execute(query, [title, "pendente", dateUTC]);
    console.log("createdTask model "+ JSON.stringify(createdTask))
    
    return {insertId: createdTask.insertId} ;
}

const deleteTask = async (id)=>{
     const removedTask = await connection.execute("delete from tasks where id =?",[id])
     return removedTask;
}

module.exports = 
    { getAll, 
      createTask,
      deleteTask }
