import { useState } from "react";
import Logo from '../../assets/celio.png';

import { useNavigate } from "react-router-dom";
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import {
    Form,
    FormCard,
    SwitchContainer,
    SwitchButton
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
                        <SwitchButton active={!infNome ? 1 : 0} onClick={() => handleSwitch(0)}>Informar CPF</SwitchButton>
                        <SwitchButton active={infNome ? 1 : 0} onClick={() => handleSwitch(1)}>Informar Nome</SwitchButton>
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