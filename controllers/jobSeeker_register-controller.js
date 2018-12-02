var connection = require('./../server');

module.exports.jobSeeker_register=function(req,res){

    var today = new Date();

    var Seekers={
        
        "Email":req.body.EMAIL,
        "Phone":req.body.PHONE,
        "Password":req.body.Password,
        "REG_DATE":today
       // "updated_at":today
    }

    connection.query('INSERT INTO job_seeker SET ?',Seekers, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'There are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Registered sucessfully as an Employee.'
        })
      }
    });
}