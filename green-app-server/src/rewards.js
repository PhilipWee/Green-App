const express = require('express');
const router = express.Router();

const rewards = require('./fixtures/rewards.json');

router.get('/:id', (req, res) => {
    if (req.params.id in rewards){
        return res.json(rewards[req.params.id]).send();
    }

    return res.status(404).send();
});

module.exports = router;