const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI || 'mongodb+srv://api-user:LUKbuff6wesk1ceec@cluster0.fwfpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
const routes = require('./routers');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/-/ping', (req, res) => res.sendStatus(200));

app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`api listening on port ${port}`)); // eslint-disable-line no-console
