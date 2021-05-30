const express = require ('express');
const router = express.Router();

const courseController = require('../app/controllers/CoursesController');

// newController.index;
router.get('/create',courseController.create);
router.get('/update',courseController.update);
router.post('/store',courseController.store);
router.get('/:slug',courseController.show);

module.exports = router;