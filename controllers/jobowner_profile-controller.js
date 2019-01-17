var connection = require('../server');

module.exports.jobowner_profile=function(req,res){

    var today = new Date();

    var seeker={
        "JOB_OWNER_ID":req.body.JOB_OWNER_ID,
        "FIRST_NAME":req.body.FIRST_NAME,
        "LAST_NAME":req.body.LAST_NAME,
        "BUSINESS_NAME":req.body.BUSINESS_NAME,
        "SEX":req.body.SEX,
        "National_ID": req.body.NID,
        "PASSPORT_ID": req.body.PASSPORT,
        "ADDRESS":req.body.ADDRESS
       // "updated_at":today
    }

    //connection.query('INSERT INTO job_owner SET ?',Owners, function (error, results, fields)
    //var sql = "INSERT INTO job_seeker_profile SET ?"
    var sql = "INSERT INTO job_owner_profile (JOB_OWNER_ID, FIRST_NAME, LAST_NAME, BUSINESS_NAME, SEX, NID, PASSPORT, ADDRESS) VALUES  ('"+req.body.JOB_OWNER_ID+"' , '"+req.body.FIRST_NAME+"' , '"+req.body.LAST_NAME+"', '"+req.body.BUSINESS_NAME+"', '"+req.body.SEX+"', '"+req.body.NID+"', '"+req.body.PASSPORT+"', '"+req.body.ADDRESS+"') ";
    console.log(sql);
    
    connection.query(sql, function(error, results, fields)
    {

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
            console.log("No record inserted");
            res.json({
                status:false,
                
                data:results,
                message:'Employer Profile information is not Update.'
            })
            res.status(204);
      }else
        {
            console.log("1 record inserted");
            res.json({
                status:true,
                
                data:results,
                message:'Employer Profile information sucessfully Updated.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });
}

module.exports.jobowner_update_profile=function(req,res){
    var sql = "UPDATE job_owner_profile SET FIRST_NAME='"+req.body.FIRST_NAME+"', LAST_NAME='"+req.body.LAST_NAME+"', BUSINESS_NAME='"+req.body.BUSINESS_NAME+"', SEX='"+req.body.SEX+"', NID='"+req.body.NID+"', PASSPORT='"+req.body.PASSPORT+"', ADDRESS='"+req.body.ADDRESS+"' WHERE  JOB_OWNER_ID = '"+req.body.JOB_OWNER_ID+"'  ";
    console.log(sql);
    
    connection.query(sql, function(error, results, fields)
    {

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
            console.log("No record updated");
            res.json({
                status:false,
                
                data:results,
                message:'Profile Update is not sucessfull.'
            })
            res.status(204);
      }else
        {
            console.log("1 record Updated");
            res.json({
                status:true,
                
                data:results,
                message:'Profile Updated Sucessfully.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });

}

module.exports.jobowner_view_profile=function(req,res){

    //var sql = "UPDATE job_seeker_profile SET FIRST_NAME='"+req.body.FIRST_NAME+"', LAST_NAME='"+req.body.LAST_NAME+"', SEX='"+req.body.SEX+"', ADDRESS='"+req.body.ADDRESS+"', NID='"+req.body.NID+"', PASSPORT='"+req.body.PASSPORT+"' WHERE  JOB_SEEKER_ID = '"+req.body.JOB_SEEKER_ID+"'  ";
    var sql = "SELECT job_owner_profile.JOB_OWNER_ID AS 'User ID', job_owner_profile.FIRST_NAME AS 'First Name', job_owner_profile.LAST_NAME AS 'Last Name', job_owner_profile.BUSINESS_NAME, job_owner.EMAIL, job_owner.PHONE, job_owner.Password, job_owner_profile.ADDRESS, job_owner_profile.NID, job_owner_profile.PASSPORT, job_owner_profile.SEX, job_owner.REG_DATE FROM job_owner_profile JOIN job_owner ON job_owner_profile.JOB_OWNER_ID = job_owner.JOB_OWNER_ID WHERE EMAIL = '"+req.query.EMAIL+"' OR PHONE = '"+req.query.PHONE+"' ";
    console.log(sql);
    
    connection.query(sql, function(error, results, fields)
    {

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
            console.log("No record view");
            res.json({
                status:false,
                
                data:results,
                message:'Profile view is not sucessfull.'
            })
            res.status(204);
      }else
        {
            console.log("1 record view");
            res.json({
                status:true,
                
                data:results,
                message:'Profile view Sucessfully.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });

}