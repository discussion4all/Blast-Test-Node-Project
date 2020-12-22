require("dotenv").config();
const jwt = require("jsonwebtoken");

//for static token  
module.exports.login = function(req,res){
    const payload = {
        user: {
          id: 1,
          email: "abc@abc.com"
        },
      };
      console.log("user_ payload", payload);
      jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        (err, token) => {
          if (err) {
            res.send({msg:"Something wrong!",err:err,data:null});
          }else{
            res.send({msg:"Login success!",err:null,data:token});
          }
        }
      );
}