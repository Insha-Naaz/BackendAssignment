require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Keep the process alive & surface low-level errors
server.on("error", (err) => {
  console.error("Server error:", err);
});
