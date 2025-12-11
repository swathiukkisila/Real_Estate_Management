

import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "https://real-estate-management-zeta.vercel.app",
  },
});

let onlineUsers = [];

const addUser = (userId, socketId) => {
  if (!onlineUsers.some((user) => user.userId === userId)) {
    onlineUsers.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => onlineUsers.find((user) => user.userId === userId);

io.on("connection", (socket) => {
  console.log(`⚡ New user connected: ${socket.id}`);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log(`User ${userId} is now online.`);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    const sender = getUser(data.userId);
  
    const payload = {
      ...data,
      chatId: data.chatId,  // ensure chatId always exists
    };
  
    console.log(`Message from ${data.userId} to ${receiverId}:`, data.text);
  
    // Send to receiver if online
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", payload);
      console.log(`Message sent to ${receiverId}`);
    }
  });
  

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    removeUser(socket.id);
  });
});

io.listen(5000);
