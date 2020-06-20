const express = require('express');
const router = express.Router();

const rewards = require('./fixtures/user_rewards.json');

router.get('/:userid/rewards', (req, res) => {
    return res.json(rewards).send();
});

module.exports = router;