var connection = require('../server');

/* module.exports.jobseeker = function(req, res){
    var sql = "SELECT * FROM job_seeker WHERE JOB_SEEKER_ID = '"+req.query.JOB_SEEKER_ID+"' "; 
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
                
                data1:results,
                message:'Job Seeker view is not sucessfull.'
            })
            res.status(204);
      }else
        {
            console.log("1 record view");
            res.json({
                status:true,
                
                data1:results,
                message:'Job Seeker is view Sucessfully.'
            })
            res.status(200);
      }    
    }
    });
}
 */

module.exports.jobseeker_fullProfile = function(req, res){
    //var sql = "SELECT job_seeker_profile.JOB_SEEKER_ID AS 'User ID', job_seeker_profile.FIRST_NAME AS 'First Name', job_seeker_profile.LAST_NAME AS 'Last Name', job_seeker.EMAIL, job_seeker.PHONE, job_seeker.Password, job_seeker_profile.ADDRESS, job_seeker_profile.NID, job_seeker_profile.PASSPORT, job_seeker_profile.SEX, job_seeker.REG_DATE, job_seeker_academic.ACADEMIC_ID, job_seeker_academic.DEGREE_ID, job_seeker_academic.DESCRIPTION, job_seeker_academic.START_DATE, job_seeker_academic.END_DATE, job_seeker_experiences.EXPERIENCE_ID,job_seeker_experiences.ORGANIZATION_NAME,job_seeker_experiences.SKILL_TYPE, job_seeker_experiences.DESIGNATION, job_seeker_experiences.START_DATE, job_seeker_experiences.END_DATE FROM job_seeker_profile JOIN job_seeker ON job_seeker_profile.JOB_SEEKER_ID = job_seeker.JOB_SEEKER_ID JOIN job_seeker_academic ON job_seeker_profile.JOB_SEEKER_ID = job_seeker_academic.JOB_SEEKER_ID JOIN job_seeker_experiences ON job_seeker_profile.JOB_SEEKER_ID = job_seeker_experiences.JOB_SEEKER_ID  WHERE EMAIL = '"+req.query.EMAIL+"' "; 
    //var sql = "(select * from job_seeker where EMAIL = '"+req.query.EMAIL+"' ) union (select * from job_seeker_profile where EMAIL = '"+req.query.EMAIL+"') union (select * from job_seeker_experiences where EMAIL = '"+req.query.EMAIL+"') ;"
   var sql = "select * from job_seeker WHERE job_seeker.JOB_SEEKER_ID = '"+req.query.JOB_SEEKER_ID+"'; select * from job_seeker_profile WHERE job_seeker_profile.JOB_SEEKER_ID = '"+req.query.JOB_SEEKER_ID+"'; select * from job_seeker_experiences  WHERE job_seeker_experiences.JOB_SEEKER_ID = '"+req.query.JOB_SEEKER_ID+"'; SELECT *, TIMESTAMPDIFF(YEAR, START_DATE, END_DATE)  AS 'Duration' FROM job_seeker_academic WHERE job_seeker_academic.JOB_SEEKER_ID = '"+req.query.JOB_SEEKER_ID+"'  ";
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
                 message:'Job Seeker view is not sucessfull.'
                 
             })
             res.status(204);
       }else
         {
             console.log("1 record view");
             res.json({
                 status:true,
                 
                 seeker:results[0],
                 profile:results[1],
                 experience: results[2],
                 academic: results[3],
                 message:'Job Seeker is view Sucessfully.'
             })
             res.status(200);
       }    
     }
     });
}