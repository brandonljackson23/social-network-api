const router = require('express').Router();
// destructure method names
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// route to get all thoughts
router.route('/').get(getAllThought);
// route to add thought
router.route('/:userId').post(addThought);
// route to get one, update and delete a thought 
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)
// Route to add a reaction
router
  .route('/:thoughtId/reactions').post(addReaction);
// Route to delete a reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;