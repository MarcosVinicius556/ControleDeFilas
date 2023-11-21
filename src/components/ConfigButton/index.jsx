import { useNavigate } from 'react-router-dom';

import { ButtonContainer } from './ConfigButton.style';

import { GrDocumentConfig } from 'react-icons/gr';

/**
 * Utilizando ReactMemo para evitar renderizações desnecessárias em componentes 
 */
const ConfigButton =  () => {

    const navigate = useNavigate();

    return (
        <ButtonContainer onClick={() => navigate('/config')}>
            <GrDocumentConfig size={25} color='#fff'/>
        </ButtonContainer>
    )
}
ConfigButton.displayName = "ConfigButton";

export default ConfigButton
