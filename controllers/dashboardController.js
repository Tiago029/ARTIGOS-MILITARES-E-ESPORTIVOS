const db = require("../database");

// ==============================
// RESUMO DO DASHBOARD
// ==============================
async function resumo(req, res) {

    try {

        const [[produtos]] = await db.query(`
            SELECT COUNT(*) AS total
            FROM produtos
        `);

        const [[categorias]] = await db.query(`
            SELECT COUNT(*) AS total
            FROM categorias
        `);

        // Ainda não existe tabela de pedidos
        let pedidos = { total: 0 };

        try {

            const [[resultado]] = await db.query(`
                SELECT COUNT(*) AS total
                FROM pedidos
            `);

            pedidos = resultado;

        } catch (erro) {
            // ignora enquanto a tabela não existir
        }

        // Ainda não existe tabela de clientes
        let clientes = { total: 0 };

        try {

            const [[resultado]] = await db.query(`
                SELECT COUNT(*) AS total
                FROM clientes
            `);

            clientes = resultado;

        } catch (erro) {
            // ignora enquanto a tabela não existir
        }

        res.json({

            produtos: produtos.total,
            categorias: categorias.total,
            pedidos: pedidos.total,
            clientes: clientes.total

        });

    } catch (erro) {

        console.error("Erro ao carregar dashboard:", erro);

        res.status(500).json({

            erro: "Erro ao carregar dashboard."

        });

    }

}

module.exports = {

    resumo

};