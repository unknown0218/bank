const express = require("express");
const path = require("path");
const app = express();

// Middleware to parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public")));

// Handle POST request for form submission
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received login data:", { username, password });
  // For now, send a simple response (extend with authentication logic later)
  res.send("Login attempt received! Username: " + username);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
