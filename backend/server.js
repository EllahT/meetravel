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

// const UserService = require("./api/user/user.service")
// const bcrypt = require('bcrypt')
// const saltRounds = 10;

// const tempUsers = [
//   {
//     name: {
//       first: "Tabatha",
//       last: "Ewing"
//     },
//     isAdmin: false,
//     email: "tabatha.ewing@undefined.biz",
//     gender: "woman",
//     profileImg:
//       "https://media.istockphoto.com/photos/laughing-woman-in-park-picture-id658617510?k=6&m=658617510&s=612x612&w=0&h=Ycl_BBwWQop7Wj1wWG3nyQqB5glPxRuqmb02WpKp0ao=",
//     galleryImgs: [
//       {
//         picture: "http://placehold.it/32x32"
//       },
//       {
//         picture: "http://placehold.it/32x32"
//       },
//       {
//         picture: "http://placehold.it/32x32"
//       }
//     ],
//     birthDate: 1992,
//     description:
//       "Ex qui ex commodo dolore consectetur ipsum dolor do elit. Est occaecat elit aliquip dolor Lorem non. Qui veniam culpa qui magna magna aliqua qui fugiat duis. Aliquip magna fugiat sint nulla do pariatur voluptate elit elit id reprehenderit aliquip Lorem. Fugiat nulla irure deserunt laboris aliqua eu veniam cillum laboris officia ex voluptate.",
//     registered: "Saturday, January 14, 2017 5:29 AM",
//     lastConnected: "Friday, November 14, 2014 6:03 AM",
//     residance: {
//       city: "Tel Aviv",
//       country: "Jordan"
//     },
//     travelTypes: ["hike"],
//     location: {
//       lat: 35.686633123700666,
//       lng: 139.7752101006837
//     },
//     bucketList: ["Mexico"]
//   },
//   {
//     name: {
//       first: "Tran",
//       last: "Marks"
//     },
//     isAdmin: false,
//     email: "tran.marks@undefined.me",
//     gender: "man",
//     profileImg:
//       "https://media.istockphoto.com/photos/best-city-transportation-picture-id608006354?k=6&m=608006354&s=612x612&w=0&h=UUpCD-QQAmRJP9FjD_zQY1-J9UgbK-TBboPsb05J8ZQ=",
//     galleryImgs: [
//       {
//         picture: "http://placehold.it/32x32"
//       },
//       {
//         picture: "http://placehold.it/32x32"
//       },
//       {
//         picture: "http://placehold.it/32x32"
//       }
//     ],
//     birthDate: 2000,
//     description:
//       "Sunt adipisicing exercitation Lorem minim non ad. Adipisicing labore aliqua adipisicing veniam magna non est consequat anim minim. Enim labore est laboris pariatur esse sunt proident ex. Eiusmod aliquip irure velit voluptate est ullamco eiusmod amet nulla id. Fugiat anim proident do id do non nostrud amet labore pariatur pariatur cupidatat quis. Mollit amet sunt et esse enim. Cillum et veniam voluptate commodo do tempor nostrud do et non laborum est.",
//     registered: "Sunday, April 15, 2018 8:51 PM",
//     lastConnected: "Saturday, March 26, 2016 4:19 AM",
//     residance: {
//       city: "Jerusalem",
//       country: "Germany"
//     },
//     travelTypes: ["climb"],
//     location: {
//       lat: 32.10116114185868,
//       lng: 34.75815296575736
//     },
//     bucketList: ["Montreal"]
//   },
//   {
//     name: {
//       first: "Day",
//       last: "Rivera"
//     },
//     isAdmin: false,
//     email: "day.rivera@undefined.tv",
//     gender: "man",
//     profileImg:
//       "https://media.istockphoto.com/photos/confident-in-his-style-picture-id664626602?k=6&m=664626602&s=612x612&w=0&h=giwn2liDt1zIsjgLwYRt2jFPdXPBv6U-OiNpkBYoz2c=",
//     galleryImgs: [
//       {
//         picture: "http://placehold.it/32x32"
//       },
//       {
//         picture: "http://placehold.it/32x32"
//       },
//       {
//         picture: "http://placehold.it/32x32"
//       }
//     ],
//     birthDate: 1958,
//     description:
//       "Sunt irure non fugiat elit eiusmod ex occaecat veniam deserunt in. Irure laborum velit ipsum veniam velit minim laborum dolor cupidatat elit est. Culpa amet quis labore id ea irure cupidatat amet pariatur sit nulla occaecat occaecat. Est mollit sit mollit anim minim pariatur velit dolor ipsum adipisicing exercitation est. Esse officia cillum ea laboris ea labore in fugiat. Eu labore est commodo ut eu consequat in consectetur aliqua enim. Nostrud mollit velit nulla quis elit proident adipisicing.",
//     registered: "Monday, March 10, 2014 3:00 PM",
//     lastConnected: "Friday, November 11, 2016 11:37 AM",
//     residance: {
//       city: "Afula",
//       country: "USA"
//     },
//     travelTypes: ["light"],
//     location: {
//       lat: 32.10307617649622,
//       lng: 34.782509718191065
//     },
//     bucketList: ["Montreal"]
//   },
//   {
//     name: {
//       first: "Mcknight",
//       last: "Maddox"
//     },
//     isAdmin: true,
//     email: "mcknight.maddox@undefined.org",
//     gender: "man",
//     profileImg:
//       "https://media.istockphoto.com/photos/not-sure-young-adult-businessman-have-a-doubt-picture-id836798276?k=6&m=836798276&s=612x612&w=0&h=RgusLf2oTOHlq4nv1D-EwW6Ld6e4fpicnfylvJT5Ey4=",
//     galleryImgs: [
//       {
//         picture: "http://placehold.it/32x32"
//       },
//       {
//         picture: "http://placehold.it/32x32"
//       },
//       {
//         picture: "http://placehold.it/32x32"
//       }
//     ],
//     birthDate: 1976,
//     description:
//       "Nulla ex eu ut sit anim aliqua aute elit. Reprehenderit ut nostrud esse proident amet voluptate ea mollit irure deserunt eu. In excepteur ea id in est consequat veniam reprehenderit exercitation occaecat elit officia eu adipisicing. Ullamco qui consectetur nisi excepteur nulla amet.",
//     registered: "Monday, December 18, 2017 8:02 PM",
//     lastConnected: "Sunday, February 28, 2016 4:34 PM",
//     residance: {
//       city: "Jerusalem",
//       country: "Germany"
//     },
//     travelTypes: ["hike"],
//     location: {
//       lat: 35.65503712159989,
//       lng: 139.80372494549582
//     },
//     bucketList: ["Mexico"]
//   }
// ];

// tempUsers.forEach(user => {
//     user.password = user.name.first.toLowerCase();
//     bcrypt.hash(user.password, saltRounds)
//     .then(hash => {
//         user.password = hash;
//         UserService.add(user)
//         .then(() => {
//             console.log('added', user);
//         })
//     })
// })
