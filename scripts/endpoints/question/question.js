const _ = require("lodash");
const { Question } = require("../../model/questionModel");
const { userLogs } = require("../../model/logModel");

let table = 'question';
let tablelog = "userlogs"
//get all questions in question table
module.exports.getAllQuestion = async function(req,res){
    const questions = await Question.find();
    res.send({msg:"Record Found",err:null,data:questions});
}

//get one question set in question table
module.exports.getOneQuestionSet = async function(req,res){
    
    const question = await Question.findOne({QuestionSet:Number(req.body.set)});
    res.send({msg:"Record Found",err:null,data:question});
}

//get all easy questions in question table
module.exports.getAllEasyQuestion = async function(req,res){
    
    var query = [
        { $unwind: '$Questions'},
        { $match: {'Questions.Type': "Easy"}},
        { $group: {_id: '$_id',QuestionSet: { "$first": "$QuestionSet" },Questions: {$push: '$Questions'}}},
        { $sort: {QuestionSet:1}}
        ];
    
    const questions = await Question.aggregate(query);
    res.send({msg:"Record Found",err:null,data:questions});

}

//get all hard questions in question table
module.exports.getAllHardQuestion = async function(req,res){
    
    var query = [
        { $unwind: '$Questions'},
        { $match: {'Questions.Type': "Hard"}},
        { $group: {_id: '$_id',QuestionSet: { "$first": "$QuestionSet" },Questions: {$push: '$Questions'}}},
        { $sort: {QuestionSet:1}}
        ];
    
    const questions = await Question.aggregate(query);
    res.send({msg:"Record Found",err:null,data:questions});

}

//log api for user
module.exports.saveLogForUser = async function(req,res){
    var query = req.body;
    query.date = new Date().toGMTString();
    
    let userLog = new userLogs(query);
    userLog.save();
    res.send({status:true,data:result,msg:"User log created"}); 
}