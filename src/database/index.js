const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "1207.0.0.1",
    user: 'root',
    password: "password",
    database: ''
});


db.connect(err => {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log("Connection Complete! Happy coding!")
});

db.connect(err => {
    if (err) {
        console.log(err.message)
        return;
    }
    console.log('Connected to the datty, les go!')
})

