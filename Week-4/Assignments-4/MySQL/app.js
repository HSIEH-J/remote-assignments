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
   res.render('sign');
   let up = req.body.up;
   let signIn = req.body.in;
   let password = req.body.password;
   if (up){
       let check = 'SELECT email FROM user WHERE email = `${up}`';
       if(!check){
        let post = {email: up};
        let sql = 'INSERT INTO user SET ?';
        let query = db.query(sql, post, (err, result) => {
             if(err) {
               throw err;
             }else {
               res.redirect('/member');
             }
        });
       } else {
        res.send('email already exists')
       }
   };

   if (signIn){
    let check1 = 'SELECT email FROM user WHERE email = `${signIn}`';
    let check2 = 'SELECT email FROM user WHERE email = `${password}`';
    if(check1 && check2){
     res.redirect('/member');
    } else {
     res.send('email or password is incorrect!')
    }
};
   
});

app.get('/member', (req, res) => {
    res.sent('Welcome!!');
 });

app.listen(3000, () => {
    console.log('Running on localhost:3000!')
});


 