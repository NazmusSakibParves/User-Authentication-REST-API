var express=require("express");

var bodyParser=require('body-parser');
const morgan=require('morgan');


var app = express();

app.use(morgan('combined'));


var jobowner_authenticateController = require('./controllers/jobOwner_authenticate-controller');
var jobowner_registerController = require('./controllers/jobOwner_register-controller');

var jobSeeker_authenticateController = require('./controllers/jobSeeker_authenticate-controller');
var jobSeeker_registerController = require('./controllers/jobSeeker_register-controller');

var jobSeeker_ProfileController = require('./controllers/jobseeker_profile-controller');
var jobOwner_ProfileController = require('./controllers/jobowner_profile-controller');

var jobSeeker_AcademicController = require('./controllers/jobseeker_academic-controller');

var jobSeeker_ExperienceCOntroller = require('./controllers/jobseeker_experience-controller');

var jobSeeker_FullProfileController = require('./controllers/jobseeker_fullprofile-controller'); 


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


 /**
  * Job Seeker Profile APIs
  */
app.post('/api/jobseeker_profile', jobSeeker_ProfileController.jobseeker_profile);
app.put('/api/jobseeker_update_profile', jobSeeker_ProfileController.jobseeker_update_profile);
app.get('/api/jobseeker_view_profile', jobSeeker_ProfileController.jobseeker_view_profile);


/**
 * Job Owner Profile APIs 
 */
app.post('/api/jobowner_profile', jobOwner_ProfileController.jobowner_profile);
app.put('/api/jobowner_update_profile', jobOwner_ProfileController.jobowner_update_profile);
app.get('/api/jobowner_view_profile', jobOwner_ProfileController.jobowner_view_profile);


/** 
 * JOb Seeker Academic APIs
 */
app.post('/api/jobseeker_education', jobSeeker_AcademicController.jobseeker_academic);
app.put('/api/jobseeker_update_education', jobSeeker_AcademicController.jobseeker_update_academic);
app.get('/api/jobseeker_view_education', jobSeeker_AcademicController.jobseeker_view_academic);


/**
 * JOb Seeker Experience APIs
 */
app.post('/api/jobseeker_experience', jobSeeker_ExperienceCOntroller.jobseeker_experience);
app.put('/api/jobseeker_update_experience', jobSeeker_ExperienceCOntroller.jobseeker_update_experience);
app.get('/api/jobseeker_view_experience', jobSeeker_ExperienceCOntroller.jobseeker_view_experience);

/**
 * Job Seeker Full Profile 
 */
app.get('/api/jobseeker_full_profile', jobSeeker_FullProfileController.jobseeker_fullProfile);


app.listen(8012);
//app.listen(8085);