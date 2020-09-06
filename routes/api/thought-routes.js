const router = require('express').Router();
const { addThought, removeThought } = require('../../controllers/thought-controller');

// /api/thoughts/<pizzaId>
router.route('/:UserId').post(addThought);

// /api/comments/<UserId>/<thoughtId>
router.route('/:UserId/:thoughtId').delete(removeThought);

module.exports = router;