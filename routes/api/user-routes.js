const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');

// goes to get, create user
router.route('/').get(getAllUsers).post(createUsers);

// goes to get, update, delete user
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// goes to add friend, delete friend
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router; 