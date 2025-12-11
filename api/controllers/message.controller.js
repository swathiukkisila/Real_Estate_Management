import prisma from "../lib/prisma.js";

/*export const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;
  const text = req.body.text;

  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
    });

    if (!chat) return res.status(404).json({ message: "Chat not found!" });

    /*const message = await prisma.message.create({
      data: {
        text,
        chatId,
        userId: tokenUserId,
      },
    });

    const message = await prisma.message.create({
      data: {
        text,
        chatId,
        userId: tokenUserId,
      },
    });
    
    res.status(200).json({
      ...message,
      chatId,   // ← include chatId here
    });
    
    await prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        seenBy: [tokenUserId],
        lastMessage: text,
      },
    });

    res.status(200).json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add message!" });
  }
};*/

export const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;
  const text = req.body.text;

  try {
    // Find chat and validate access
    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
        userIDs: { hasSome: [tokenUserId] },
      },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    // Create message
    const message = await prisma.message.create({
      data: {
        text,
        chatId,
        userId: tokenUserId,
      },
    });

    // Update chat metadata
    await prisma.chat.update({
      where: { id: chatId },
      data: {
        seenBy: [tokenUserId],
        lastMessage: text,
      },
    });

    // Send single correct response INCLUDING chatId
    return res.status(200).json({
      ...message,
      chatId, // important for socket matching
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to add message!" });
  }
};
