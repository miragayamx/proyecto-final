const Mensaje = require('../models/mensaje');

const chatSocket = (io) => {
  io.on("connection", (socket) => {
    (async () => {})();
    socket.on("getChatMessages", async () => {
      try {
        const messages = await Mensaje.find();
        if (!messages.length) throw new Error("ENOENT");
        io.emit("messages", messages);
      } catch (err) {
        if (err.message === "ENOENT")
          return io.emit("chatInfo", { info: "No se encontraron mensajes" });
        io.emit("chatInfo", { error: "No fue posible recuperar los mensajes" });
      }
    });
    socket.on("setNewChatMessages", async (message) => {
      try {
        const data = await Mensaje.find();
        let messages = [];
        if (!!data.length) messages = data;
        const messageWithDate = {
          ...message,
          date: new Date(),
        };
        const newMessage = new Mensaje(messageWithDate);
        await newMessage.save();
        messages.push(messageWithDate);
        io.emit("messages", messages);
      } catch (err) {
        io.emit("chatInfo", { error: "No fue posible recuperar los mensajes" });
      }
    });
  });
};

module.exports = chatSocket;