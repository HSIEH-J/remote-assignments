const express = require('express'); 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Hello, My Server!');
});


app.get('/data', (req, res) => {
    const { number } = req.query;
    
    if (!number) {
        res.send('Lack of parameter');
    } 
    
    if (isNaN(number)) {
        res.send('Wrong Parameter');
    } else {
        let result;
        result = ((1+Number(number))*Number(number))/2;
        res.send(`${result}`);
    } 
    
});


app.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if(name){
        res.send('Done');
    } else {
        res.redirect('/trackName');
    }
});

app.get('/trackName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/myName');
    } else {
        res.render('track');
    }
});

app.post('/trackName',(req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/myName');
}); 


app.listen(3000, () => {
    console.log('Running on localhost:3000!')
});