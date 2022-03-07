//exists
// import { Readable } from "stream";
// import { createServer } from "http";

// installed
// import webpush from "web-push";
// import { Server } from "socket.io";
import "dotenv/config";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";

// custom
// import { uploadImage } from "./drive.js";

//-----------------------------------------------> express use
const app = express();
app.use(express.json()); // to read json response
app.use(cors({ origin: "https://modest-jackson-56b227.netlify.app" }));
app.use(fileUpload()); // to upload files i.e. images

//-----------------------------------------------> for testing axios
app.get("/", (req, res) => {
  console.log("test");

  res.send("it works!!");
});

//-----------------------------------------------> listening server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

// //-----------------------------------------------> testing socket.io
// const http = createServer(app);
// const io = new Server(http, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

// io.on("connection", (socket) => {
//   console.log("socket connected");

//   socket.on("test", (data) => {
//     console.log(data, socket.id);
//     socket.emit("");
//     // socket.join(data);
//   });

//   // // data = {room: "to", name: "username", message: ""}
//   // socket.on("send_msg", (data) => {
//   //   socket.to(data.room).emit("recieve_msg", data);
//   // });
// });

// //-----------------------------------------------> upload image to drive
// app.post("/upload/drive", async(req, res) => {
//   try {
//     const { img } = req.files;
//     // console.log(fs.createReadStream(Readable.from(img.data)));
//     const id = await uploadImage(Readable.from(img.data), img.mimetype);

//     res.status(200).send("ok");
//   } catch (e) {
//     console.log("in uploading router", e);
//     res.status(200).send("not ok");
//   }
// });

// //-----------------------------------------------> testing webpush
// const publicVapidKey = process.env.PUBLIC_KEY;
// const privateVapidKey = process.env.PRIVATE_KEY;

// webpush.setVapidDetails(
//   "mailto:test@test.com",
//   publicVapidKey,
//   privateVapidKey
// );

// app.post("/subscribe", (req, res) => {
//   console.log("reached subscribe");

//   const { subscription, title, message } = req.body;
//   const payload = JSON.stringify({ title, message });

//   webpush
//     .sendNotification(subscription, payload)
//     .catch((err) => console.error("err", err));

//   res.status(200).json({ success: true });
// });

// io.listen(9000, () => {
//   console.log(`listening at port ${9000}`);
// });