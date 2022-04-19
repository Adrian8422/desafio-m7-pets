import * as express from "express";
import * as path from "path";
import { updateProfile, getProfile } from "./controllers/users-controller";
import { User } from "./models/user";
const staticDirPath = path.resolve(__dirname, "../dist");
const port = process.env.PORT || 3004;

const app = express();
app.use(
  express.json({
    limit: "50mb",
  })
);
app.get("/env", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
  });
});

app.use(express.static(staticDirPath));
app.get("*", function (req, res) {
  res.sendFile(staticDirPath + "/index.html");
});

app.listen(port, () => {
  console.log(`servicio activo en http://localhost:${port}`);
});
// import { sequelize } from "./models/connection";

// sequelize.sync({ force: true });
