const express = require('express');
const router = express.Router();

const challenges = require('./fixtures/challenges.json');

router.get('', (req, res) => {
    const c = [];
    for (id in challenges){
        c.push(challenges[id]);
    }

    return res.json({
        page: 1,
        challenges: c
    }).send();
});

router.get('/:id', (req, res) => {
    if (req.params.id in challenges){
        return res.json(challenges[req.params.id]).send();
    }

    return res.status(404).send();
});

module.exports = router;