const express = require('express');
const mc = require('./controllers/messagesController');

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.post('/api/messages', mc.create);

app.get('/api/messages', mc.read);

app.put('/api/messages/:id', mc.update);

app.delete('/api/messages/:id', mc.delete)


const port = 5052;

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

