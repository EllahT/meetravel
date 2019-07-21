const socketIO = require("socket.io");
const UserService = require("../api/user/user.service");
const FriendService = require("../api/friend/friend.service.js");

var io;

function setup(http) {
  io = socketIO(http);
  io.on("connection", function(socket) {
    console.log("a user connected");

    socket.on("chat join", payload => _onChatJoin(payload, socket));

    socket.on("chat msg", payload => _onNewChatMsg(payload, socket));

    socket.on("app login", payload => _onAppLogin(payload, socket));

    socket.on("send notification", payload => _onSendNotification(payload));

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
}

function _onAppLogin({ username, userId }, socket) {
  socket.join(`notifications_${userId}`);
  console.log(`user ${username} logged in and joined notifications_${userId}`);
}

async function _onSendNotification({ type, sender, recipient, loggedUser }) {
  console.log(
    `got new notification ${type} from ${sender.userId}, to ${recipient.userId}`
  );
  const other = sender.userId === loggedUser ? recipient.name : sender.name;
  const message = {
    request: `Hey! ${sender.name} just asked you to be friends!`,
    friendship: `You're now friends with ${other}!`
  };
  const msg = {
    type,
    message: message[type],
    timestamp: new Date().getTime(),
    readStatus: false
  };

  console.log(`sending ${msg.message}, to recipient's notifications_${recipient.userId}`);
  io.to(`notifications_${recipient.userId}`).emit("app newNotification", msg);
  const recipientObj = await UserService.getById(recipient.userId);
  recipientObj.notifications.push(msg);
  UserService.update(recipientObj).then(updatedUser => {
    console.log(`updated nofitications at ${updatedUser._id}`);
  });

  if (msg.type === "friendship") {
    const senderMsg = Object.assign(msg);
    const nonother =
      sender.userId === loggedUser ? sender.name : recipient.name;
    senderMsg.message = `You're now friends with ${nonother}!`;
    console.log(
      `sending ${senderMsg.message}, to sender's notifications_${sender.userId}`
    );
    io.to(`notifications_${sender.userId}`).emit(
      "app newNotification",
      senderMsg
    );
    const senderObj = await UserService.getById(sender.userId);
    console.log(senderObj);
    senderObj.notifications.push(senderMsg);
    const updatedUser = await UserService.update(senderObj);
    console.log(`updated nofitications at ${updatedUser._id}`);
  }
}

async function _onChatJoin({ user, friendshipId }, socket) {
  console.log("Placed", user, "in room:", friendshipId);
  socket.join(friendshipId);
}

async function _onNewChatMsg({ msg, friendshipId }) {
  console.log(
    `got message ${msg.txt} from ${msg.from}, on friendship ${friendshipId}`
  );
  io.to(friendshipId).emit("chat newMsg", msg);
  try {
    const friendship = await FriendService.getById(friendshipId);
    friendship.messages.push(msg);
    FriendService.update(friendship);
  } catch (err) {
    console.log("got to catch", err);
  }
}

module.exports = {
  setup
};
