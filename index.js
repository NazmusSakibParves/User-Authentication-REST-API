var express=require("express");

var bodyParser=require('body-parser');
const morgan=require('morgan');


var app = express();

app.use(morgan('combined'));


var jobowner_authenticateController=require('./controllers/jobOwner_authenticate-controller');
var jobowner_registerController=require('./controllers/jobOwner_register-controller');

var jobSeeker_authenticateController=require('./controllers/jobSeeker_authenticate-controller');
var jobSeeker_registerController=require('./controllers/jobSeeker_register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


/* route to handle login and registration */

/** for JOB OWNER */
app.post('/api/jobowner_register',jobowner_registerController.jobowner_register);
app.get('/api/jobowner_authenticate',jobowner_authenticateController.jobowner_authenticate);
//app.post('/api/jobowner_authenticate',jobowner_authenticateController.jobowner_authenticate);


/** for JOB SEEKER */
app.post('/api/jobSeeker_register',jobSeeker_registerController.jobSeeker_register);

//app.post('/api/jobSeeker_authenticate',jobSeeker_authenticateController.jobSeeker_authenticate);

app.get('/api/jobSeeker_authenticate',jobSeeker_authenticateController.jobSeeker_authenticate);
/* app.get('/api/jobSeeker_authenticate/:EMAIL&:Password', function(request, response) {
    const EMAIL = request.param.EMAIL 
    const Password = request.param.Password 
 }); */





app.listen(8012);
//app.listen(8085);