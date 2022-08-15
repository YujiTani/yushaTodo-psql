const Pool = require('pg').Pool

const connectDB = new Pool({
  user: "workuser",
  host: "127.0.0.1",
  database: "yushaTodo",
  password: "awwt2998",
  port: 5432,
})

module.exports = connectDB