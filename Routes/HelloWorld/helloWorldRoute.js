const express = require('express');
const router = express.Router();

// Path for hello for users to get a hello world return from the server.
router.get('/hello', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({message: "Hello World"});
})

module.exports = router;