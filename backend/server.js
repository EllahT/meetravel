const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const http = require("http").createServer(app);

const authRoutes = require("./api/auth/auth.routes");
const userRoutes = require("./api/user/user.routes");
const friendRoutes = require("./api/friend/friend.routes");
const imageRoutes = require("./api/image/image.routes");

const logger = require("./services/logger.service");
const socketService = require("./services/socket.service");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

if (process.env.NODE_ENV !== "production") {
  const corsOptions = {
    origin: ["http://localhost:8080"],
    credentials: true
  };
  app.use(cors(corsOptions));
}

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/friend", friendRoutes);
app.use("/api/image", imageRoutes);

socketService.setup(http);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "public")));
}

const port = process.env.PORT || 3000;
http.listen(port, () => {
  logger.info("Server is running on port: " + port);
});

const UserService = require("./api/user/user.service");
const FriendService = require('./api/friend/friend.service');
const UtilService = require('./services/util.service');

// let shrinkingUsers;
// UserService.query()
// .then(users => {
//     console.log(users.length);
//     shrinkingUsers = [Object.assign(users[0]), Object.assign(users[1]), Object.assign(users[2])];
//     shrinkingUsers.forEach((user, index) => {
//         for (var i = 0; i < 2; i++) {
//             const rand = UtilService.getRandomInt(0,5);
//             const createdAt = UtilService.getRandomInt(1400000000000, 1580000000000)
//             const idx = UtilService.getRandomInt(0, shrinkingUsers.length);
//             const location = UtilService.getRandomGeo({ lat: 32.1052869565768, lng: 34.922431014745 }, 100000)
//             const thisUser = {userId: user._id, name: user.name.first + ' ' + user.name.last}
//             const randUser = {userId: shrinkingUsers[idx]._id, name: shrinkingUsers[idx].name.first + ' ' + shrinkingUsers[idx].name.last}
//             let friendship = {
//                 members: [user._id, shrinkingUsers[idx]._id], createdAt, location,
//                 sender: (rand < 2)? thisUser : randUser,
//                 status: (rand < 2)? 'pending' : 'approved',
//                 resipient: (rand >= 2)? thisUser : randUser,
//             };
//             if (index === idx) return;
//             FriendService.addRequest(friendship)
//             .then(() => {
//                 console.log('added');
//             })
//         }
//     })
// })

