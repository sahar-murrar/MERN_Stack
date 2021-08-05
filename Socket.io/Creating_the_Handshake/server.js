const express = require("express");
const app = express();
const cors=require("cors");

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/author.routes");
AllMyUserRoutes(app);
// require("./server/routes/message.routes")(app);
const server=app.listen(8000, () => console.log("The server is all fired up on port 8000"));
const io = require('socket.io')(server, { cors: true });

io.on("connection",socket=>{
    console.log("nice to meet you,(shakehand)");
    // socket.emit("welcome",data);
        socket.emit("Welcome Sahar Murrar",{message:"Welcome from the socket"});
    });