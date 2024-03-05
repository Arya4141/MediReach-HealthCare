// Note: For libraries, we don't need anything but if we are using import statement in express we have to write extension.
// Add type "module" in package.json file
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const doctorAuthRoute = require("./routes/doctorauth");
const patientAuthRoute = require("./routes/patientauth");
const newpatientAuthRoute = require("./routes/newpatientauth");
const reportsRoute = require("./routes/reports");
const cors = require("cors");
const app = express();

dotenv.config();

// middleware
app.use(cors());

app.use(express.json());


// Initial connection of mongoDB
//const mongoose=require("mongoose");

function mongoConnect(){
    
    const url="mongodb+srv://namanjhanwar953:naman@cluster0.o9uhfpc.mongodb.net/?retryWrites=true&w=majority";

    async function isConnect(){
        try{
            await mongoose.connect(url,{
                useNewUrlParser:true,
                useUnifiedTopology:true
            })
            console.log(`mongo connected`);
        }
        catch(error){
            console.log('error while connecting',error);
            process.exit(1);
        }
    }
    isConnect();
}



//middlewares
app.use("/doctor", doctorAuthRoute);
app.use("/patientauth", patientAuthRoute);
app.use("/patients", reportsRoute);
app.use("/newpatients", newpatientAuthRoute);

// error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(5000, () => {
  mongoConnect();
  console.log(`Server listening at port ${5000}!`);
});
