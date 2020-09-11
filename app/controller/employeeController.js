
Employee = require('../model/employee')

exports.getAll = (req, res) => {
    Employee.find( (err, emp) => {
        if(err){
            res.json({message: "Error while fetching Employee!"})
        }else{
            res.json({
                message: "Employee successfully retrieved!",
                employee: emp
            })
        }
    })
}

exports.create = (req, res) => {
    var employee = new Employee();
    employee.name = req.body.name;
    employee.gender = req.body.gender;
    employee.email = req.body.email;
    employee.phone = req.body.phone;
    employee.save((err) => {
        if(err){
            res.body('Error while saving employee');
        }else{
            res.json({
                message: "Employee Created",
                employee: employee
            })
        }
    })
}

exports.findOne = (req, res) => {
    Employee.findById(req.params.id, (err, emp) => {
        if(err){
            res.json({message: "Employee Not found!"})
        }else{
            res.json({emp})
        }
    })
}

exports.search = (req, res) => {
    Employee.find(req.body, (err, emp) => {
        if(err){
            res.json({message: "Error"})
        }else{
            res.json({emp})
        }
    })
}

exports.update = (req, res) => {
    console.log(req.params.id)
    Employee.findById(req.params.id, (err, emp) => {
        if(err){
            res.json("Error")
        }else{
            const empForm = req.body;
            console.log(empForm)
            emp.name = empForm.name;
            emp.email = empForm.email;
            emp.phone = empForm.phone;
            emp.save()
                .then( e => (res.json(e)))
                .catch(err => (res.status(400).send('Error while updating')))
        }
    });
}

exports.deleteOne = (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err, emp) => {
        if(err){
            res.json({message: "Unable to delete the record"})
        }else{
            res.json({
                message: "Record Deleted",
                employee: emp
            })
        }
    })
}