const Child = require("../schemas/Schema")

// Get user status
exports.getUserStatus = (request, response) => {
    Child.find({ name: {$eq : request.body.name }} )
    .then((res) => {
        if(res.length !== 0){
            return response.status(200).json({ value: true });
        } else {
            return response.status(200).json({ value: false });
        }
    })
    .catch((error)=>{
        response.status(404).json({ message: error.message })
    })
}//get all users
exports.getAllUsers = (request, response) => {
    console.log(request.body);
    Child.find({} )
    .then((res) => {
        return response.status(200).json(res);
    })
    .catch((error)=>{
        response.status(404).json({ message: error.message })
    })
}

// Save data of the user in database
exports.addUser = (request, response) => {
    const program = request.body;

    const newProgram = new Child(program);
    console.log(newProgram);
    newProgram.save()
    .then((res) => {
        console.log("data submitted");
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}

// Get a user by id
exports.getUserById = (request, response) => {
    Child.findById(request.params.id)
    .then((res) => {
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}

// Save data of edited user in the database
exports.editUser = (request, response) => {
    let user = request.body;
    console.log(user);
    const editUser = new Child(user);
    console.log(editUser);
    Child.updateOne({_id: request.params.id}, editUser)
    .then((res) => {
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}

// deleting data of user from the database
exports.deleteUser = (request, response) => {
    Child.deleteOne({_id: request.params.id})
    .then((res) => {
        return response.status(200).json(res);
     })
     .catch((error)=>{
         response.status(404).json({ message: error.message })
     })
}



