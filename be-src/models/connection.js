"use strict";
exports.__esModule = true;
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
// import {Sequelize}
exports.sequelize = new sequelize_1.Sequelize({
    dialect: "postgres",
    username: "qjqpmdjexipjqh",
    password: "b24ff79740da9fd82eeae957f42d212900d1b6cdb67c0ffae237b4a5bcc5e4aa",
    database: "d9ltagb51sgmb4",
    port: 5432,
    host: "ec2-3-229-161-70.compute-1.amazonaws.com",
    ssl: true,
    ///esto es necesario para que corra correctamente
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
// try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
