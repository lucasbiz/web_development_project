const express = require('express');
const router = express.Router();
const User = require('../models/users.model');


router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no Servidor');
    }
});


router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = new User({
            username,
            email,
            password
        });

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no Servidor');
    }
});

module.exports = router;
