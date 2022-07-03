require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
router(app);

app.listen(port, () => { console.log(`aplicação rodando na porta: ${port}`) });