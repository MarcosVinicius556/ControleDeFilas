import { memo } from "react"
import { BaseButton } from "../../styles/GlobalStyle"

const AddButton = memo(() => {
    return (
      <BaseButton 
          backgroundColor="#90f18c"
          textColor="#555454"
          backgroundHover="#70bd6d"
          textHover="#fff">
          Adicionar
      </BaseButton>
    )
  }
  )
AddButton.displayName = "AddButton";


export default AddButton