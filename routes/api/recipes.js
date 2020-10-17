const express =require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/recipes');

/*--- Protected Routes ---*/ 
// router.get('/', userCtrl);
// router.post('/', checkAuth, userCtrl.create);

/*--- Helper Functions ---*/ 
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Login First'});
}

/*--- GET /api/recipes ---*/ 
router.get('/', recipesCtrl.index);
router.post('/', recipesCtrl.create);
router.get('/:id', recipesCtrl.show);
router.put('/:id', recipesCtrl.update);
router.delete('/:id', recipesCtrl.delete);

module.exports = router;