import * as express from "express";
import * as path from "path";
import * as cors from "cors";
import { updateProfile, getProfile } from "./controllers/users-controller";
import { User } from "./models/user";
const app = express();
app.use(express.static("dist"));
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cors());
const staticDirPath = path.resolve("", "dist/index.html");
const port = process.env.PORT || 3004;

app.get("/env", (req, res) => {
  res.json({
    message: process.env.NODE_ENV,
  });
});

app.get("*", function (req, res) {
  res.sendFile(staticDirPath);
});

app.listen(port, () => {
  console.log(`servicio activo en http://localhost:${port}`);
});
// import { sequelize } from "./models/connection";

// sequelize.sync({ force: true });
