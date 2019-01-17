var connection = require('./../server');

module.exports.jobowner_authenticate=function(req,res){
    //var email=req.body.EMAIL;
    //var password=req.body.Password;

    var email=req.query.EMAIL;
    var password=req.query.Password;
    
    //var sql = "SELECT JOB_OWNER_ID as ID, EMAIL, Password, PHONE, REG_DATE FROM job_owner where EMAIL= '"+req.body.EMAIL+"'  AND password= '"+req.body.Password+"' ";
        //connection.query(sql, function(error, results, fields){
    connection.query('SELECT JOB_OWNER_ID as ID, EMAIL, Password, PHONE, REG_DATE FROM job_owner WHERE EMAIL = ?',[email], function (error, results, fields) {
        console.log(error);
        console.log(results);
        
        if (error) {
          res.json({
            status:false,
            message:'There are some error with query'
            })
      }else{
        if(results.length >0){
            if(password==results[0].Password){

               // res.send(JSON.stringify({"status": 200, "error": null, "response": results, "message":'Successfully Authenticated'}));
               // res.rend(JSON.stringify({"status": 200, "error": null, "response": results, "message":'Successfully Authenticated'}));
                res.json({
                    //status:true,
                    status:200,
                    error:error,
                    message:'Successfully Authenticated..',
                    response: results
                })
                res.status(200);
        

            }else{
               // res.send(JSON.stringify({"status": 500, "error": error, "response": null, "message":'Invalid Authentication'}));

                res.json({
                 // status:false,
                  status:500,
                  error: error,
                  message:"Invalid Authentication !",
                  response:null
                 });
                 res.status(500);
            }
         
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits",
            response: results
          });
          res.status(404)
        }
      }
    });
}