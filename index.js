var express=require("express");
var bodyParser=require('body-parser');

var app = express();

var authenticateController=require('./controllers/jobOwner_authenticate-controller');
var registerController=require('./controllers/jobOwner_register-controller');

var jobSeeker_authenticateController=require('./controllers/jobSeeker_authenticate-controller');
var jobSeeker_registerController=require('./controllers/jobSeeker_register-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);

app.post('/api/jobSeeker_register',jobSeeker_registerController.jobSeeker_register);
app.post('/api/jobSeeker_authenticate',jobSeeker_authenticateController.jobSeeker_authenticate);

app.listen(8012);
//app.listen(8085);