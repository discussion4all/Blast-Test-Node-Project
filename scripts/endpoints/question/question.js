let table = 'question';

//get all questions in question table
module.exports.getAllQuestion = function(req,res){
    DB.find(table,{},function(err,result){
        if(err){
            res.send({msg:"Not Found",err:err,data:null});
        }else{
            res.send({msg:"Record Found",err:null,data:result});
        }
    })
}

//get one question set in question table
module.exports.getOneQuestionSet = function(req,res){
    
    DB.find(table,{'QuestionSet':Number(req.body.set)},function(err,result){
        if(err){
            res.send({msg:"Not Found",err:err,data:null});
        }else{
            res.send({msg:"Record Found",err:null,data:result});
        }
    })
}

//get all easy questions in question table
module.exports.getAllEasyQuestion = async function(req,res){
    
    var query = [
        { $unwind: '$Questions'},
        { $match: {'Questions.Type': "Easy"}},
        { $group: {_id: '$_id',QuestionSet: { "$first": "$QuestionSet" },Questions: {$push: '$Questions'}}}
        ];
    
    const tmp = await DB.aggregatewithoutcallback(table, query);
  
    res.send({msg:"Record Found",err:null,data:tmp});

}
