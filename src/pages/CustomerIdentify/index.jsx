import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/celio.png';

import { IMaskInput } from "react-imask";
import ConfigButton from "../../components/ConfigButton";
import { Container, DeveloppedBy } from "../../styles/GlobalStyle";
import {
    Form,
    FormCard,
    SwitchButton,
    SwitchContainer
} from './CustomerIdentify.style';

import { useDispatch } from "react-redux";
import { createCustomerData } from "../../redux/queue/slice";

const CustomerIdentify = () => {

        const navigate = useNavigate();

        const dispatch = useDispatch();

        const identifierRef = useRef("");

        // 1 === CPF | 2 === NOME
        const[infNome, setInfNome] = useState(false);

        const handleSwitch = (tipo) => {
            if(tipo === 0)
                setInfNome(false);
            else
                setInfNome(true);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            
            dispatch(createCustomerData({ 
                identifierType: !infNome ? 1 : 2,
                identifier: !infNome ? identifierRef.current?.maskRef?.value : identifierRef.current?.element.value,
            }));

            navigate('/queue')
        }

        return (
            <Container>

                    <FormCard>
                        <img src={Logo} alt="Logo da empresa" />
                        <SwitchContainer>
                            <SwitchButton active={!infNome ? 2 : 1} onClick={() => handleSwitch(0)}>Informar CPF</SwitchButton>
                            <SwitchButton active={infNome ? 2 : 1} onClick={() => handleSwitch(1)}>Informar Nome</SwitchButton>
                        </SwitchContainer>
                        <Form onSubmit={handleSubmit}>
                            {infNome 
                                ? 
                                (
                                    <span>
                                        <label>Informe seu Nome</label>
                                        <IMaskInput 
                                            ref={identifierRef}
                                            type="text"
                                            mask=""
                                            placeholder="Digite seu nome..." />
                                    </span>
                                )
                                : (
                                    <span>
                                        <label>Informe seu CPF</label>
                                        <IMaskInput 
                                            ref={identifierRef}
                                            type="text"
                                            mask="000.000.000-00" 
                                            placeholder="Digite seu CPF..."
                                            typeof="number"/>
                                    </span>
                                )
                            }
                            <input type="submit" value="Avançar" />
                        </Form>
                        <DeveloppedBy>Desenvolvido por Infoarte Software LTDA.</DeveloppedBy>
                    </FormCard>
                    <ConfigButton />
            </Container>
        )
    }

CustomerIdentify.displayName = "CustomerIdentify";

export default CustomerIdentify;