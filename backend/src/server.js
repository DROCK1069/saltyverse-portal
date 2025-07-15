const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "SaltyVerse Backend Online" });
});

app.listen(port, () => {
  console.log(`SaltyVerse backend running on port ${port}`);
});
