class CnabController{
    static upload(req, res)
    {
        console.log('controller ok');
        res.status(200).end();
    } 
}

module.exports = CnabController;