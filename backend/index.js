const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
const app = express();

// Specify the allowed origin (your Netlify domain)
const allowedOrigin = "https://famous-sfogliatella-ad481a.netlify.app";

// Configure CORS with custom options
const corsOptions = {
  origin: allowedOrigin,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable credentials (e.g., cookies)
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

connectToMongo();

app.use(express.json());
const port = 5000; // Use the default port

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook backend listening on port ${port}`);
});
