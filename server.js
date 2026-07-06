const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_ENV = process.env.APP_ENV || "local";
const APP_NAME = process.env.APP_NAME || "LoomyBook Azure";

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    app: APP_NAME,
    environment: APP_ENV
  });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} is running on port ${PORT}`);
  console.log(`Environment: ${APP_ENV}`);
});
