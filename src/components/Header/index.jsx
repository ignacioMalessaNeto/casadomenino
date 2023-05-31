import { Container }   from './styles';

import { ButtonLink } from '../ButtonLink';

import { useContext } from 'react';

import UserContext from '../Context';

export function Header(){

    const { setRoute } = useContext(UserContext);

    return(
        <Container>
            <ButtonLink onClick={()=>{setRoute("Home")}} title="Home" to="/" ><button><a href="#">Home</a></button></ButtonLink>
            <ButtonLink onClick={()=>{setRoute("Gerar Cobrança")}} title="Gerar Cobrança" to="/gerar-cobranca"><button><a href="#">Gerar Cobrança</a></button></ButtonLink>
            <ButtonLink onClick={()=>{setRoute("Gerar Cobrança em lote")}} title="Gerar Cobrança em lote" to="/gerar-cobranca-em-lote"><button><a href="#">Gerar Cobrança em lote</a></button></ButtonLink>
            <ButtonLink onClick={()=>{setRoute("Gerenciar Cobrança")}} title="Gerenciar Cobrança" to="/gerenciar-cobranca" ><button><a href="#">Gerenciar Cobrança</a></button></ButtonLink>
        </Container>
    ) 
}