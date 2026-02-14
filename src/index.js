import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 4000;

app.get("/",(req,res)=>{
  res.send("Welcome")
})

//Connect To Mongodb
connectDB()
  .then(() => {
    app.listen(port, () => console.log(`Backend is running on port ${port}`));
  })
  .catch((err) => {
    console.error("Mongo db connect error: ", err);
    process.exit(1);
  });
