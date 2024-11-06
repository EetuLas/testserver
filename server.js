import express from 'express';

var app = express();

app.listen(3001, () => {
    console.log('The server is running!!')
});

//Let's define an endpoint
app.get('/', (req, res) => {
    //Here we go if this enpoint is called (e.g. from browser)
    res.send('You just called root endpoint!!')
})

app.get('/user', (req, res) => {
    //Here we go if this enpoint is called (e.g. from browser)
    res.send('Getting user information')
})

app.get('/info', (req, res) => {
    //Here we go if this enpoint is called (e.g. from browser)
    res.send('This is the info page')
})