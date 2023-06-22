const Group = require('../models/groupModel')
const User = require('../models/userModel')

exports.addMembers = async (req,res)=>{
    try {
        const user = req.user;
    let {groupName , groupMember , groupExpense} = req.body;
    let filteredMember = [];
    let removedMember = [];
    await Promise.all(groupMember.map(async(el)=>{
        const matchEmail = await User.findOne({email : el.email});
        if(matchEmail){
            filteredMember.push(matchEmail);
        }
        else{
            removedMember.push(el.email);
        }
    }));
    groupMember = filteredMember;
    const groupDetail = await Group.create({
        groupName , groupMember , groupExpense
    })
    res.status(200).json({
        status : "success",
        message : "group is created",
        data : groupDetail,
        message : ` ${removedMember} These members doesnt exists `
    })
    } catch (error) {
        res.status(400).json({
            status : "fail",
            message : "Unable to add group member",
            data : error
        })
    }
}

exports.calcExpense = async (req,res)=>{
    try {
        const groupExpenseDetails = await Group.findById(req.params.id)
        const calculatedExpense = (groupExpenseDetails.groupExpense) / (groupExpenseDetails.groupMember.length);
        res.status(200).json({
            status : "success",
            message : `Expense cost per mmember is ${calculatedExpense}`
        })
    }catch(error){
        res.status(400).json({
            status : "fail",
            message : "Unable to calculate expense"
        })
    }
}