import { BaseButton } from "../../styles/GlobalStyle";
import { memo } from 'react';

export const ShowButton = memo(() => {
  return (
    <BaseButton 
        backgroundColor="#f18c8c"
        textColor="#555454"
        backgroundHover="#996058"
        textHover="#fff">
        Remover
    </BaseButton>
  )
})

ShowButton.displayName = "ShowButton";