const { User } = require('../../../models/index');

let controller = {}
controller.create = async(req, res) => {
    try {
        let { name, email, role } = req.body
        let user = await User.create({ name, email, role })
        res.json(user)
    } catch (err) {
        console.log(`File:users/createUser.controller.js, Func:create, Error: ${err}`)
    }
}

controller.getAll = async(req, res) => {
    try {

        let users = await User.findAll()
        res.json(users)
    } catch (err) {
        console.log(`File:users/createUser.controller.js, Func:getAll, Error: ${err}`)
    }
}

controller.find = async(req, res) => {
    try {
        let id = req.params.id
        let users = await User.findOne({ where: { id: id } })
        res.json(users)
    } catch (err) {
        console.log(`File:users/createUser.controller.js, Func:getAll, Error: ${err}`)
    }
}


controller.update = async(req, res) => {
    try {
        let id = req.params.id
        let { name, email, role } = req.body
        let user = await User.findOne({ where: { id: id } })
        user.name = name
        user.email = email
        user.role = role
        user.save()
        res.json(user)
    } catch (err) {
        console.log(`File:users/createUser.controller.js, Func:create, Error: ${err}`)
    }
}

controller.delete = async(req, res) => {
    try {
        let id = req.params.id
        let user = await User.findOne({ where: { id: id } })
        await user.destroy()
        res.json({ msg: "user Deletion is successful" })
    } catch (err) {
        console.log(`File:users/createUser.controller.js, Func:create, Error: ${err}`)
    }
}



module.exports = controller;