const { Router } = require("express");
const router = Router();

const CnabController = require('../controllers/CnabController');

router.post("/upload", CnabController.upload);

module.exports = router;