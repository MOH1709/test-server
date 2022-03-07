import "dotenv/config";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";

//-----------------------------------------------> express use
const app = express();
// to read json response from frontend
app.use(express.json());

// use to set allowed website to access routes
app.use(cors({ origin: "https://modest-jackson-56b227.netlify.app" }));

// to read files uploaded from frontend
app.use(fileUpload());

//-----------------------------------------------> testing route
app.get("/", (req, res) => {
  res.status(200).send({ msg: "it works!!" });
});

//-----------------------------------------------> listening server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});