const express = require('express')
const expenseController = require('../controllers/expenseController')
const userController = require('../controllers/userController')
const router = express.Router();

router.route('/createExpenses').post(expenseController.createExpense)
router.route('/getAllExpenses').get(expenseController.getAllExpenses)
router.route('/:id').patch(userController.protect , expenseController.updateExpense).delete(userController.protect , expenseController.deleteExpense)

module.exports = router;