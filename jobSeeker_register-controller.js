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

    //connection.query('INSERT INTO job_seeker SET ?',Seekers, function (error, results, fields)

    //connection.query('INSERT INTO job_seeker (EMAIL, PHONE, Password) SELECT * FROM (SELECT '+req.body.Email+' , '+req.body.Phone+' , '+ req.body.Password+' ) ' +' AS tmp WHERE NOT EXISTS (SELECT EMAIL FROM job_seeker WHERE EMAIL = '+req.body.EMAIL+ 'AND PHONE =' +req.body.PHONE+') LIMIT 1', Seekers, function (error, results, fields)
    //var sql= "INSERT INTO `job_seeker`(`EMAIL`,`PHONE`, `Password`, `REG_DATE` ) VALUES ('"+req.body.EMAIL+"','"+req.body.PHONE+"','"+req.body.Password+"','"+today+"')" + "AS tmp WHERE NOT EXISTS (SELECT EMAIL FROM job_seeker WHERE EMAIL = '"+req.body.EMAIL+"' AND PHONE ='"+req.body.PHONE+"') LIMIT 1";
    
    /** Insert data in job_seeker table and stop generate automatic id for bad request  */
    var sql = "INSERT INTO job_seeker (EMAIL, PHONE, Password) SELECT * FROM (SELECT '"+req.body.EMAIL+"' , '"+req.body.PHONE+"' , '"+req.body.Password+"') AS tmp WHERE NOT EXISTS (SELECT EMAIL,PHONE FROM job_seeker WHERE EMAIL = '"+req.body.EMAIL+"' OR PHONE = '"+req.body.PHONE+"') LIMIT 1 ";
   // var sql2 = "INSERT INTO job_seeker (EMAIL, PHONE, Password) SELECT * FROM (SELECT '"+req.body.EMAIL+"' , '"+req.body.PHONE+"' , '"+req.body.Password+"') AS tmp WHERE NOT EXISTS (SELECT EMAIL FROM job_seeker WHERE EMAIL = '"+req.body.EMAIL+"') LIMIT 1 ";
    //var sql3 = "INSERT INTO job_seeker (EMAIL, PHONE, Password) SELECT * FROM (SELECT '"+req.body.EMAIL+"' , '"+req.body.PHONE+"' , '"+req.body.Password+"') AS tmp WHERE NOT EXISTS (SELECT PHONE FROM job_seeker WHERE PHONE = '"+req.body.PHONE+"') LIMIT 1 ";
    
    console.log(sql);
    //if( connection.query(sql, function(error, results, fields)) || connection.query(sql, function(error, results, fields) ||
    connection.query(sql, function(error, results, fields)
    {
      if (error) {
          //connection.end();
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
                message:'Employee Registration is not sucessfull.'
          })
          res.status(204);
        }else
        {
            res.json({
                status:true,
               
                data:results,
                message:'Registered sucessfully as an Employee.'
            })
            res.status(200);
        }
       // console.log(results[1]);
          
        //res.status(200);
      }
    });
}