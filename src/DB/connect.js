const { Client } = require("pg");

const connectDB = new Client({
  user: "workuser",
  host: "127.0.0.1",
  database: "yushaTodo",
  password: "awwt2998",
  port: 5432,
});

module.exports = connectDB