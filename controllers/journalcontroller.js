const Express = require('express');
const router = Express.Router();

router.get("/about", (req, res) => {
    res.send("This is a journal about route");
});

router.get('/practice', (req, res) => {
    res.send("Hey! This is a practice route!")
});

module.exports = router;