// Importa o módulo jsonwebtoken, que é utilizado para criar e verificar tokens JWT
const jwt = require('jsonwebtoken');

// Obtém o segredo do JWT das variáveis de ambiente
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware de autenticação
const auth = (req, res, next) => {
    // Obtém o token do cabeçalho da requisição chamado 'x-auth-token'
    const token = req.header('x-auth-token');

    // Se não houver token, retorna uma resposta 401 (não autorizado) com uma mensagem de erro
    if (!token) {
        return res.status(401).json({ msg: 'Sem token, autorização negada' });
    }

    try {
        // Verifica o token usando o segredo do JWT e decodifica o payload
        const decoded = jwt.verify(token, JWT_SECRET);
        // Anexa o payload decodificado ao objeto de requisição, permitindo acesso aos dados do usuário
        req.user = decoded;
        // Chama a próxima função middleware na pilha
        next();
    } catch (err) {
        // Se a verificação do token falhar, retorna uma resposta 401 com uma mensagem de erro
        res.status(401).json({ msg: 'Token inválido' });
    }
};

// Exporta o middleware de autenticação para uso em outras partes da aplicação
module.exports = auth;

