const express = require("express");

const router = express.Router();

const categoriaController = require("../controllers/categoriaController");

// Listar categorias
router.get("/", categoriaController.listarCategorias);

// Cadastrar categoria
router.post("/", categoriaController.cadastrarCategoria);

module.exports = router;