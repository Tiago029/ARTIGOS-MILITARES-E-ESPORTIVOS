const express = require("express");

const router = express.Router();

const variacaoController = require("../controllers/variacaoController");


// cadastrar variações
router.post("/produto/:id", variacaoController.cadastrarVariacoes);

// Importar todas as variações dos produtos já existentes
router.get("/importar", variacaoController.importarVariacoes);


module.exports = router;