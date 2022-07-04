const { Router } = require("express");
const router = Router();
const multer = require('multer');
const upload = multer()

const CnabController = require('../controllers/CnabController');

router.post("/upload", upload.single('cnab_file'), CnabController.upload);
router.get("/movimentacoes", CnabController.getAll);
router.get("/limpar", CnabController.clean);

module.exports = router;