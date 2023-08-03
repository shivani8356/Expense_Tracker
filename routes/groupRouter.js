const express = require('express')
const router = express.Router();
const groupContoller = require('../controllers/groupController')
const userController = require('../controllers/userController')

router.route('/addGroupMember').post(userController.protect , userController.restrict("group_admin"), groupContoller.addMembers)
router.route('/calculateExpense/:id').get(userController.protect , groupContoller.calcExpense);

module.exports = router;