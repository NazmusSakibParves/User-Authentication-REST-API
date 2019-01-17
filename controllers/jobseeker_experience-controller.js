var connection = require('../server');

module.exports.jobseeker_experience=function(req,res){

    //connection.query('INSERT INTO job_owner SET ?',Owners, function (error, results, fields)
    //var sql = "INSERT INTO job_seeker_profile SET ?"

    var sql = "INSERT INTO job_seeker_experiences (JOB_SEEKER_ID, ORGANIZATION_NAME, DESIGNATION, SKILL_TYPE, START_DATE, END_DATE) VALUES  ('"+req.body.JOB_SEEKER_ID+"' , '"+req.body.ORGANIZATION_NAME+"' , '"+req.body.DESIGNATION+"', '"+req.body.SKILL_TYPE+"', '"+req.body.START_DATE+"', '"+req.body.END_DATE+"') ";
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
                message:'Employee Experince information is not Update.'
            })
            res.status(204);
      }else
        {
            console.log("1 record inserted");
            res.json({
                status:true,
                
                data:results,
                message:'Employee Experince information sucessfully Updated.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });
}

module.exports.jobseeker_update_experience=function(req,res){
    var sql = "UPDATE job_seeker_experiences SET FIRST_NAME='"+req.body.FIRST_NAME+"', LAST_NAME='"+req.body.LAST_NAME+"', SEX='"+req.body.SEX+"', ADDRESS='"+req.body.ADDRESS+"', NID='"+req.body.NID+"', PASSPORT='"+req.body.PASSPORT+"' WHERE  JOB_SEEKER_ID = '"+req.body.JOB_SEEKER_ID+"'  ";
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
                message:'Experince Update is not sucessfull.'
            })
            res.status(204);
      }else
        {
            console.log("1 record Updated");
            res.json({
                status:true,
                
                data:results,
                message:'Experince Updated Sucessfully.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });

}

module.exports.jobseeker_view_experience=function(req,res){

    //var sql = "UPDATE job_seeker_profile SET FIRST_NAME='"+req.body.FIRST_NAME+"', LAST_NAME='"+req.body.LAST_NAME+"', SEX='"+req.body.SEX+"', ADDRESS='"+req.body.ADDRESS+"', NID='"+req.body.NID+"', PASSPORT='"+req.body.PASSPORT+"' WHERE  JOB_SEEKER_ID = '"+req.body.JOB_SEEKER_ID+"'  ";
   // var sql = "SELECT job_seeker_profile.JOB_SEEKER_ID AS 'User ID', job_seeker_profile.FIRST_NAME AS 'First Name', job_seeker_profile.LAST_NAME AS 'Last Name', job_seeker.EMAIL, job_seeker.PHONE, job_seeker.Password, job_seeker_profile.ADDRESS, job_seeker_profile.NID, job_seeker_profile.PASSPORT, job_seeker_profile.SEX, job_seeker.REG_DATE FROM job_seeker_profile JOIN job_seeker ON job_seeker_profile.JOB_SEEKER_ID = job_seeker.JOB_SEEKER_ID WHERE EMAIL = '"+req.query.EMAIL+"' OR PHONE = '"+req.query.PHONE+"' ";
   var sql = "SELECT * FROM job_seeker_experiences WHERE job_seeker_experiences.JOB_SEEKER_ID = '"+req.query.JOB_SEEKER_ID+"' "; 
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
                message:'Experince view is not sucessfull.'
            })
            res.status(204);
      }else
        {
            console.log("1 record view");
            res.json({
                status:true,
                
                data:results,
                message:'Experince view Sucessfully.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });

}