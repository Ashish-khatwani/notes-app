const router = require('express').Router();
const auth = require('../middleware/authMiddleware');
const ctrl = require('../controllers/notesController');

router.post('/', auth, ctrl.createNote);
router.get('/', auth, ctrl.getNotes);
router.put('/:id', auth, ctrl.updateNote);
router.delete('/:id', auth, ctrl.deleteNote);

module.exports = router;
