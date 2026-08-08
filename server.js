require("dotenv").config();

const express = require("express");
const path = require("path");

const db = require("./database");
const app = express();
const PORT = process.env.PORT || 3000;

// Routes e Controlles
const dashboardRoutes = require("./routes/dashboard");
const upload = require("./middlewares/upload");
const categoriasRoutes = require("./routes/categorias");
const produtosRoutes = require("./routes/produtos");
const variacoesRoutes = require("./routes/variacoes");

// Ler formulários
app.use(express.urlencoded({ extended: true }));

// Ler JSON
app.use(express.json());

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// APIs de Routes e Controlles
app.use("/api/categorias", categoriasRoutes);
app.use("/api/produtos", produtosRoutes);
app.use("/api/variacoes", variacoesRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Testar Conexão BD
async function testarConexao() {
    try {
        await db.query("SELECT 1");
        console.log("✅ Banco de dados conectado!");
    } catch (erro) {
        console.error("❌ Erro ao conectar ao banco:");
        console.error(erro.message);
    }
}

testarConexao();

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});