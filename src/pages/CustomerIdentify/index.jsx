import { useState } from "react";
import Switch from 'react-switch';
import Logo from '../../assets/celio.png';

import { useNavigate } from "react-router-dom";
import {
    Container,
    DeveloppedBy,
    Form,
    FormCard,
    SwitchContainer
} from './CustomerIdentify.style';

function CustomerIdentify() {

    const navigate = useNavigate();

    const[isPJ, setIsPJ] = useState(false);

    const handleSwitch = () => {
        setIsPJ(!isPJ);
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
                        <Switch 
                            onChange={handleSwitch} 
                            checked={isPJ} 
                            checkedIcon={false} 
                            uncheckedIcon={false} 
                            onColor="#76fa97"
                            offColor="#7db8fc"/>
                            <label>{ isPJ ? 'Pessoa Jurídica' : 'Pessoa Física' }</label>
                    </SwitchContainer>
                    <Form onSubmit={handleSubmit}>
                        {isPJ 
                            ? (
                                <span>
                                    <label>Informe seu CNPJ</label>
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