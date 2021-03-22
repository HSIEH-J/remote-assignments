const express = require('express'); 
const bodyParser = require('body-parser');
const mysql = require('mysql');

//Create connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123567',
    database: 'assignment'
});

//Connect

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Mysql connected...');
});


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

//Create DB

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE assignment';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        };
       res.send('database ceated...');
    });

})

//Create table

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE user(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        };
        console.log(result);
        res.send('user table created...');
    })
});

app.get('/home', (req, res) => {
    res.render('sign');
});


app.post('/home', (req, res) => {
    let user = {email: req.body.up, password: req.body.password1};
    let check = `SELECT email FROM user WHERE email = '${req.body.up}'`;
    let query = db.query(check, (err, result) => {
        if(err) throw err;
        if(result.length == 0){
         let sql = 'INSERT INTO user SET ?';
         let query = db.query(sql, user, (err, result) => {
               if(err) throw err;
               return res.redirect('/member');
         });
        } else {
            res.send('email already exists');
        }
    });    
});

app.post('/home', (req, res) => {
        let check = `SELECT * FROM user WHERE email = '${req.body.in}' AND password = '${req.body.password2}'`;
        let query = db.query(check, (err, result) => {
            if(err) throw err;
            if(result.length == 0){
                res.send('email or password is incorrect!!');
            } else {
                return res.redirect('/member');
            }
        });   
});



app.get('/member', (req, res) => {
    res.send('Welcome!!');
 });

app.listen(3000, () => {
    console.log('Running on localhost:3000!')
});


 