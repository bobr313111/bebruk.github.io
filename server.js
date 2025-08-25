import express from "express";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { createServer } from "http";
import path from "path";

const app = express();
const __dirname = process.cwd();

app.use(express.static(path.join(__dirname, "public")));
app.use("/uv/", express.static(uvPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

createServer(app).listen(8080, () => {
  console.log("✅ Proxy запущен на http://localhost:8080");
});
