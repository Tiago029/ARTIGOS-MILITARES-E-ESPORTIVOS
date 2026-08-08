const express = require("express");
const router = express.Router();

const produtoController = require("../controllers/produtoController");
const upload = require("../middlewares/upload");

router.get(
    "/destaques",
    produtoController.listarDestaques
);

// IMPORTANTE: esta rota deve vir antes de "/"
router.get(
    "/categoria/:categoria",
    produtoController.buscarPorCategoria
);

// Buscar um produto
router.get(
    "/:id",
    produtoController.buscarProdutoPorId
);

// Listar produtos
router.get(
    "/",
    produtoController.listarProdutos
);

// Cadastrar produto
router.post(
    "/",
    upload.single("imagem"),
    produtoController.cadastrarProduto
);

// Atualizar produto
router.put(
    "/:id",
    upload.single("imagem"),
    produtoController.atualizarProduto
);

router.delete(
    "/:id",
    produtoController.excluirProduto
);


module.exports = router;