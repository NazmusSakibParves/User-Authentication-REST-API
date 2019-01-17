var connection = require('../server');

module.exports.jobseeker_academic=function(req,res){

    //connection.query('INSERT INTO job_owner SET ?',Owners, function (error, results, fields)
   //var sql = "INSERT INTO job_seeker_academic (JOB_SEEKER_ID, DEGREE_ID, DESCRIPTION, START_DATE, END_DATE) VALUES  ('"+req.body.JOB_SEEKER_ID+"' , '"+req.body.DEGREE_ID+"' , '"+req.body.DESCRIPTION+"', '"+req.body.START_DATE+"', '"+req.body.END_DATE+"') ";
  var sql1 = "INSERT INTO job_seeker_academic (job_seeker_academic.JOB_SEEKER_ID, job_seeker_academic.DEGREE_ID, job_seeker_academic.DESCRIPTION ) SELECT * FROM ( SELECT '"+req.body.JOB_SEEKER_ID+"' , '"+req.body.DEGREE_ID+"' , '"+req.body.DESCRIPTION+"' ) AS tmp WHERE NOT EXISTS ( SELECT job_seeker_academic.DEGREE_ID FROM job_seeker_academic WHERE job_seeker_academic.DEGREE_ID = '"+req.body.DEGREE_ID+"' AND job_seeker_academic.JOB_SEEKER_ID = '"+req.body.JOB_SEEKER_ID+"' ) LIMIT 1";  
  //var sql2 = "INSERT INTO job_seeker_academic (job_seeker_academic.JOB_SEEKER_ID, job_seeker_academic.DEGREE_ID, job_seeker_academic.DESCRIPTION, job_seeker_academic.START_DATE ) SELECT * FROM ( SELECT '"+req.body.JOB_SEEKER_ID+"' , '"+req.body.DEGREE_ID+"' , '"+req.body.DESCRIPTION+"' , '"+req.body.START_DATE+"' ) AS tmp WHERE NOT EXISTS ( SELECT job_seeker_academic.DEGREE_ID FROM job_seeker_academic WHERE job_seeker_academic.DEGREE_ID = '"+req.body.DEGREE_ID+"' AND job_seeker_academic.JOB_SEEKER_ID = '"+req.body.JOB_SEEKER_ID+"' ) LIMIT 1";
   sql3 = "INSERT INTO job_seeker_academic (job_seeker_academic.JOB_SEEKER_ID, job_seeker_academic.DEGREE_ID, job_seeker_academic.DESCRIPTION, job_seeker_academic.START_DATE, job_seeker_academic.END_DATE ) SELECT * FROM ( SELECT '"+req.body.JOB_SEEKER_ID+"' , '"+req.body.DEGREE_ID+"' , '"+req.body.DESCRIPTION+"', '"+req.body.START_DATE+"', '"+req.body.END_DATE+"' ) AS tmp WHERE NOT EXISTS ( SELECT job_seeker_academic.DEGREE_ID FROM job_seeker_academic WHERE job_seeker_academic.DEGREE_ID = '"+req.body.DEGREE_ID+"' AND job_seeker_academic.JOB_SEEKER_ID = '"+req.body.JOB_SEEKER_ID+"' ) LIMIT 1";  
 
   if (sql1){

    console.log(sql1);
    
    connection.query(sql1, function(error, results, fields)
    {

      if (error) {
        res.json({
            
            status:false,
            message:'There are some error with query in sql1'
            
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
                message:'Employee Academic information is not Update.'
            })
            res.status(204);
      }else
        {
            console.log("1 record inserted");
            res.json({
                status:true,
                
                data:results,
                message:'Employee Academic information sucessfully Saved.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });
 }   else if(sql3){
      
    console.log(sql3);
    
    connection.query(sql3, function(error, results, fields)
    {

      if (error) {
        res.json({
            
            status:false,
            message:'There are some error with query in sql3'
            
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
                message:'Employee Academic information is not Update.'
            })
            res.status(204);
      }else
        {
            console.log("1 record inserted");
            res.json({
                status:true,
                
                data:results,
                message:'Employee Academic information sucessfully Saved.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });
 }
 
}

module.exports.jobseeker_update_academic=function(req,res){
    var sql = "UPDATE job_seeker_academic SET DEGREE_ID='"+req.body.DEGREE_ID+"', DESCRIPTION='"+req.body.DESCRIPTION+"', START_DATE='"+req.body.START_DATE+"', END_DATE='"+req.body.END_DATE+"' WHERE  ACADEMIC_ID = '"+req.body.ACADEMIC_ID+"'  ";
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
                message:'Academic information is not Update.'
            })
            res.status(204);
      }else
        {
            console.log("1 record Updated");
            res.json({
                status:true,
                
                data:results,
                message:'Academic information Updated Sucessfully.'
            })
            res.status(200);
      }    
      //res.status(200);
    } 
    });

}

module.exports.jobseeker_view_academic=function(req,res){

    //var sql = "UPDATE job_seeker_academic SET FIRST_NAME='"+req.body.FIRST_NAME+"', LAST_NAME='"+req.body.LAST_NAME+"', SEX='"+req.body.SEX+"', ADDRESS='"+req.body.ADDRESS+"', NID='"+req.body.NID+"', PASSPORT='"+req.body.PASSPORT+"' WHERE  JOB_SEEKER_ID = '"+req.body.JOB_SEEKER_ID+"'  ";
    //var sql = "SELECT job_seeker_profile.JOB_SEEKER_ID AS 'User ID', job_seeker_profile.FIRST_NAME AS 'First Name', job_seeker_profile.LAST_NAME AS 'Last Name', job_seeker.EMAIL, job_seeker.PHONE, job_seeker.Password, job_seeker_profile.ADDRESS, job_seeker_profile.NID, job_seeker_profile.PASSPORT, job_seeker_profile.SEX, job_seeker.REG_DATE FROM job_seeker_profile JOIN job_seeker ON job_seeker_profile.JOB_SEEKER_ID = job_seeker.JOB_SEEKER_ID WHERE EMAIL = '"+req.query.EMAIL+"' OR PHONE = '"+req.query.PHONE+"' ";
   // var sql = "SELECT * FROM job_seeker_academic WHERE job_seeker_academic.JOB_SEEKER_ID = '"+req.query.JOB_SEEKER_ID+"' GROUP BY job_seeker_academic.END_DATE ASC";
    var sql = "SELECT *, TIMESTAMPDIFF(YEAR, START_DATE, END_DATE)  AS 'Duration' FROM job_seeker_academic WHERE job_seeker_academic.JOB_SEEKER_ID = '"+req.query.JOB_SEEKER_ID+"' ";
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
                
                education:results,
                message:'Job Seeker Academic view is not sucessfull.'
            })
            res.status(204);
      }else
        {
            console.log("1 record view");
            res.json({
                status:true,
                
                education:results,
                message:'Job Seeker Academic is view Sucessfully.'
            })
            res.status(200);
      }    
      //res.status(200);
    }
    });

}