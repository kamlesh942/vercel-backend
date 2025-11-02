import dotenv from "dotenv";
import connectDB from "./db/user.db.js";
import { app } from "./app.js"; // Assuming app.js exports app

dotenv.config({ path: "./.env" }); // Load environment variables from .env


let isConnected = false;
async function connectToMongoDB(){
  try{

    await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } );
    isConnected = true;
    console.log("MongoDB connected successfully");
  }catch(err){
    console.error("MongoDB connection failed!!!", err);
  }
}

// add middleware

app.use( (req, res, next) =>{

  if(!isConnected){
    connectToMongoDB();
  }
  next();
});

module.exports = app;
// const startServer = async () => {
//   try {
//     // Connect to MongoDB
//     await connectDB();

//     const PORT = process.env.PORT || 5000; // Set default port if not in .env
//     app.listen(PORT, () => {
//       console.log(`Server is running at port: ${PORT}`);
//     });
//   } catch (err) {
//     console.error("MongoDB connection failed!!!", err);
//     process.exit(1); // Exit the process with failure code
//   }
// };

// startServer();

