const app = require('express')();
const appid = process.env.APPID;

app.get('/', (req, res) => {
    res.send(`Appid : ${appid} Home page : Says hello!`);
});

app.get('/app1', (req, res) => {
    res.send(`Appid : ${appid} APP1 page : Says hello!`);
});

app.get('/app2', (req, res) => {
    res.send(`Appid : ${appid} APP2 page : Says hello!`);
});

app.get('/admin', (req, res) => {
    res.send(`Appid : ${appid} ADMIN page : shouldn't now see this!`);
});

app.listen(appid, () => console.log(`${appid} is listening on localhost:${appid}`));