const router = require('express').Router();

const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// goes to get thoughts
router.route('/').get(getAllThoughts);

// goes to get, put, delete thoughts
router.route('/:id')
.get(getThoughtsById)
.put(updateThoughts)
.delete(deleteThoughts); 

// goes to create thoughts
router.route('/:userId').post(createThoughts);

// goes to post reactions
router.route('/:thoughtId/reactions').post(addReaction);

// goes to delete rections
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;