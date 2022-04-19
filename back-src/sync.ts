import { sequelize } from "./models/connection";
import { User } from "./models/user";

User.sequelize.sync({ force: true });
