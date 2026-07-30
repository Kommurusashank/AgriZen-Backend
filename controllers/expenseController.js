const Expense = require("../models/expense");

// Add Expense
const addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to add expense",
    });
  }
};

// Get Expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch expenses",
    });
  }
};

module.exports = {
  addExpense,
  getExpenses,
};