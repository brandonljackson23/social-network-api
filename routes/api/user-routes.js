const router = require('express').Router();
// destructure the method names
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/user-controller');

// Route to get all and post a user
router
  .route('/')
  .get(getAllUser)
  .post(createUser);
// Route to get one, update, and delete a user
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);
// Route to update and delete friend
router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;