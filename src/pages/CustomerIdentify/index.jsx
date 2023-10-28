import { useState } from "react";
import Logo from '../../assets/celio.png';

import { useNavigate } from "react-router-dom";
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import {
    Form,
    FormCard,
    SwitchContainer
} from './CustomerIdentify.style';

function CustomerIdentify() {

    const navigate = useNavigate();

    // 0 === CPF | 1 === NOME
    const[infNome, setInfNome] = useState(false);

    const handleSwitch = (tipo) => {
        if(tipo === 0)
            setInfNome(false);
        else
            setInfNome(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/home");
    }

    return (
        <Container>

                <FormCard>
                    <img src={Logo} alt="Logo da empresa" />
                    <SwitchContainer>
                        <button onClick={() => handleSwitch(0)}>Informar CPF</button>
                        <button onClick={() => handleSwitch(1)}>Informar Nome</button>
                    </SwitchContainer>
                    <Form onSubmit={handleSubmit}>
                        {infNome 
                            ? (
                                <span>
                                    <label>Informe seu Nome</label>
                                    <input type="text" />
                                </span>
                            )
                            : (
                                <span>
                                    <label>Informe seu CPF</label>
                                    <input type="text" />
                                </span>
                            )
                        }
                        <input type="submit" value="Entrar" />
                    </Form>
                    <DeveloppedBy>Desenvolvido por Infoarte Software LTDA.</DeveloppedBy>
                </FormCard>
        </Container>
    )
}

export default CustomerIdentify;