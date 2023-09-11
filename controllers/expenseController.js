const express = require('express');
const mongoose = require('mongoose');
const Expense = require('../models/expenseModel')


exports.createExpense = async (req,res)=>{
    try {
        const {title , description , cost} = req.body;
        const newExpense = await Expense.create({title,description,cost});
        console.log(newExpense);
        res.status(200).json({
            status : "success",
            message : "expense is created",
            data : {
                newExpense
            }
        })
    } catch (error) {
        res.status(400).json({
            status : "success",
            message : "expense is not created",
            data : {
                error
            }
        })
    }
}

exports.getAllExpenses = async (req,res)=>{
    try {
        // const queryObj = {...req.query};
        let expenses = await Expense.find();
        if(req.query.sort){
            expenses = await Expense.find().sort(req.query.sort)
        }
        // console.log(expenses);
        res.status(200).json({
            status : "success",
            data : {
                expenses
            }
        })
    } catch (error) {
        res.status(400).json({
            status : "faile",
            message : "unable to fetch details"
        })
    }
}

exports.updateExpense = async (req,res)=>{
    try {
        const updateDetails = await Expense.findByIdAndUpdate(req.params.id , req.body)
        console.log(updateDetails)
        res.status(200).json({
            status : "success",
            data : {
                updateDetails
            }
        })
    } catch (error) {
            res.status(400).json({
                status : "failed",
                message : "unable to fetch details"
            })
    }
}

exports.deleteExpense = async (req,res)=>{
    try {
        const deleteDetails = await Expense.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status : "success",
           message : "expense deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status : "faile",
            message : "unable to delete expense"
        })
    }
}