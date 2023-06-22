const express = require('express')
const router = express.Router();
const groupContoller = require('../controllers/groupController')
const userController = require('../controllers/userController')

router.route('/addGroupMember').post(userController.protect , groupContoller.addMembers)
router.route('/calculateExpense/:id').get(userController.protect , groupContoller.calcExpense);

module.exports = router;