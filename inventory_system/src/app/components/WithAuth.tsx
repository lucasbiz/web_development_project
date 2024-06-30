import { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React
import { useRouter } from 'next/navigation'; // Importa o hook useRouter do Next.js para manipulação de rotas

// Define uma função Higher Order Component (HOC) chamada withAuth que recebe um componente WrappedComponent como parâmetro
const withAuth = (WrappedComponent: React.ComponentType) => {
    // Retorna um novo componente de função que irá envolver o WrappedComponent
    return (props: any) => {
        const router = useRouter(); // Inicializa o roteador do Next.js
        const [loading, setLoading] = useState(true); // Define um estado de carregamento inicializado como verdadeiro

        // Usa o hook useEffect para executar um efeito colateral após a renderização
        useEffect(() => {
            const token = localStorage.getItem('token'); // Obtém o token do localStorage
            if (!token) { // Se não houver token
                alert('Você precisa logar para acessar esta página!'); // Exibe um alerta informando que o login é necessário
                router.push('/login'); // Redireciona para a página de login
            } else {
                setLoading(false); // Se houver um token, define loading como falso para permitir a renderização do WrappedComponent
            }
        }, [router]); // O efeito será executado sempre que o router mudar

        // Se ainda estiver carregando, renderiza uma mensagem de verificação de token
        if (loading) {
            return <p>Verificando Token...</p>;
        }

        // Renderiza o WrappedComponent com todas as props passadas para o HOC
        return <WrappedComponent {...props} />;
    };
};

// Exporta o HOC withAuth para que possa ser usado em outros arquivos
export default withAuth;


