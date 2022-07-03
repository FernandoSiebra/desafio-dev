const bodyParser = require('body-parser');

const CnabRouter = require('./CnabRouter');

module.exports = app => 
{
    app.use(bodyParser.json());
    app.use(CnabRouter);
}