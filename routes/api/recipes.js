const express =require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/scores');

/*--- Protected Routes ---*/ 
router.get('/', recipesCtrl);
router.post('/', checkAuth, recipesCtrl.create);

/*--- Helper Functions ---*/ 
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Login First'});
}

module.exports = router;