const express = require('express')
const expenseController = require('../controllers/expenseController')
const router = express.Router();

router.route('/createExpenses').post(expenseController.createExpense)
router.route('/getAllExpenses').get(expenseController.getAllExpenses)
router.route('/:id').patch(expenseController.updateExpense).delete(expenseController.deleteExpense)

module.exports = router;