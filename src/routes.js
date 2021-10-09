const express = require('express');
const router = express.Router();
const createUserController = require('./controllers/users/User.controller')
router.get('/', (req, res) => {
    return res.send("you are in router")
})
router.post('/user', createUserController.create)
router.get('/user', createUserController.getAll)
router.get('/user/:id', createUserController.find)
router.put('/user/:id', createUserController.update)
router.delete('/user/:id', createUserController.delete)

module.exports = router;