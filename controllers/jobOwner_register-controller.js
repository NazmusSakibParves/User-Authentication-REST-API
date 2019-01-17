var connection = require('./../server');

module.exports.jobowner_register=function(req,res){

    var today = new Date();

    var Owners={
        
        "Email":req.body.EMAIL,
        "Phone":req.body.PHONE,
        "Password":req.body.Password,
        "REG_DATE":today
       // "updated_at":today
    }

    //connection.query('INSERT INTO job_owner SET ?',Owners, function (error, results, fields)
    var sql = "INSERT INTO job_owner (EMAIL, PHONE, Password) SELECT * FROM (SELECT '"+req.body.EMAIL+"' , '"+req.body.PHONE+"' , '"+req.body.Password+"') AS tmp WHERE NOT EXISTS (SELECT EMAIL,PHONE FROM job_owner WHERE EMAIL = '"+req.body.EMAIL+"' OR PHONE = '"+req.body.PHONE+"') LIMIT 1 ";
    console.log(sql);
    
    connection.query(sql, function(error, results, fields)
    {
      /* if (error) {
        res.json({
            status:false,
            message:'There are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Registered sucessfully as a Job Owner.'
        })
      } */

      if (error) {
        res.json({
            
            status:false,
            message:'There are some error with query'
            
        })
        res.status(400);
    }else{
            var numrows = results.affectedRows; // for check result set's affectedRows
            if(numrows == 0)
            {
            res.json({
                status:false,
                
                data:results,
                message:'Employer Registration is not sucessfull.'
            })
            res.status(204);
      }else
        {
            res.json({
                status:true,
                
                data:results,
                message:'Registered sucessfully as an Employer.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });
}