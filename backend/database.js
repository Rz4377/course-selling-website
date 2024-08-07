const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.
connect('mongodb+srv://amansharma323298:Uxsp7Lo90EB4tkq1@cluster0.d3vqt5e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const CourseSchema = new Schema ({
    title : String , 
    courseId : String , 
    imageLink : String
})

const UserSchmea = new Schema ({
    username : String , 
    password : String , 
    courses : [String]
})

const AdminSchema = new Schema ({
    username : String , 
    password : String , 
    courses : [String],
})

const Course = mongoose.model('Course', CourseSchema);
const User = mongoose.model('User', UserSchmea);
const Admin = mongoose.model('Admin', AdminSchema);

module.exports = {
    Course , 
    User, 
    Admin
};