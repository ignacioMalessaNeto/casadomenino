import { Container }   from './styles';

export function Header(){
    return(
        <Container>
            <button><a href="#">Gerar Cobrança</a></button>
            <button><a href="#">Gerar Cobrança em lote</a></button>
            <button><a href="#">Gerenciar Cobrança</a></button>
        </Container>
    ) 
}